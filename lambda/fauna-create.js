import faunadb from 'faunadb' /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
const q = faunadb.query

const client = new faunadb.Client({
  secret:  process.env.GATSBY_FAUNADB_KEY,
})

/* export our lambda function as named "handler" export */
export const postFingerprint = async (data, page) => {
    const u = await checkFingerprint(data);


    if(u.matchCount > 4){
        console.log('matched higher user');
        addSiteHistory(u.value.data, { page, date: new Date().toISOString(), action: 'landed on page' });
        return null;
    }

    client.query(
      q.Create(
        q.Collection('fingerprints'),
        { data: data },
      )
    )
    .then((ret) => {
        console.log(ret)
        addSiteHistory(ret.data, { page, date: new Date().toISOString(), action: 'landed on page'  });
    })
    .catch((err) => console.log(err));


}

export const checkFingerprint = async (createFingerprintDto) => {
    const fingerprint = {...createFingerprintDto};
    const keys = Object.keys(fingerprint);

    const ret = await client.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('fingerprints'))),
            q.Lambda(x => q.Get(x))
          )
    );

    console.log(ret);

    const finalResult = ret.data.reduce((prevValue, curVal) => {
        const matches = keys.map(k => curVal[k] === fingerprint[k]);
        if (matches.length > prevValue.matchCount) {
            return {value: curVal, matchCount: matches.length};
        }
        return prevValue;
    }, {value: null, matchCount: 0});

    return finalResult;
}

export const addSiteHistory = async (createFingerprintDto, createSiteHistoryDto) => {
    const fingerprintUser = await checkFingerprint(createFingerprintDto);
    const uid = fingerprintUser.value.ref.value.id;

    client.query(
        q.Update(q.Ref(q.Collection('fingerprints'), uid), { data: { visitHistory: [...createFingerprintDto.visitHistory, createSiteHistoryDto] } })
    )
    .then((ret) => console.log(ret))
    .catch((err) => console.log(err));
}

export const createUser = (data) => {
    client.query(
        q.Create(
            q.Collection('users'),
            { data: data },
        )
    )
    .then((ret) => console.log(ret))
    .catch((err) => console.log(err));
}

export const submitLandingFormOne = async (email, fingerprint) => {

      const probFingerprint = await checkFingerprint(fingerprint);
      //check language, long, lat, ip, city, postal, timezone, rather than whole fingerprint, highlight higher rated qualities rather than underrated weighted
      //check long lat with certian ranges to specify within a certian degree is it the same person

    const allUsers = await client.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('users'))),
            q.Lambda(x => q.Get(x))
          )
        );

        const theUser = allUsers.data.find((user) => user.data.fingerprintId === probFingerprint.value.ref.value.id);

        if (theUser == null) {
            const newUser = await createUser({ email, fingerprintId: probFingerprint.value.ref.value.id, marketingMatchCount: probFingerprint.matchCount });
            console.log("MADE NEW USER:  ", newUser);
        }

      await addSiteHistory(probFingerprint.value.data, {date: new Date().toISOString(), page:'blog-page', action: 'submit form' })
     }