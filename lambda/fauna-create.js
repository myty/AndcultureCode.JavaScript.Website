import faunadb from 'faunadb' /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
  secret: 'fnAD68cdlDACA3yr7XeZAhb6jIPMfJ4IdQbcCte4'
})

/* export our lambda function as named "handler" export */
export const postFingerprint = async (data) => {
    const u = await checkFingerprint(data);
    console.log(u);

    if(u.matchCount > 3){
        console.log('matched higher user');
        addSiteHistory(u.value.data, { page: "Admin Panel", date: new Date().toISOString() });
        submitLandingFormOne({}, u.value.data);
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
        addSiteHistory(ret.data, { page: "Homepage" });
        submitLandingFormOne({}, ret.data);
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
    // client.query(
    //     q.Get(q.Ref(q.Collection('fingerprints')))
    // )
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

export const submitLandingFormOne = async (form, fingerprint) => {
//   const {email} = form;
//   const fingerprint = form.fingerprint.value.fingerprint;



  const probFingerprint = await checkFingerprint(fingerprint);
  //check language, long, lat, ip, city, postal, timezone, rather than whole fingerprint, highlight higher rated qualities rather than underrated weighted
  //check long lat with certian ranges to specify within a certian degree is it the same person
//   const marketingId = probFingerprint.value.id;
    // const marketingId = "282563941244076547";
  // TODO: add user table query
//   let dbUser = await this.userservice.findUserWithMarketingId(marketingId);
//   console.log('dbuser', dbUser);

//   const marketingProf = await client.query(
//     q.Get(q.Ref(q.Collection('fingerprints'), marketingId))
//   );
    console.log(probFingerprint);


  console.log(probFingerprint);
//   const ret = await client.query(
//     q.Map(
//         q.Paginate(q.Documents(q.Collection('users'))),
//         q.Lambda(x => x.fingerprintId == probFingerprint.value.ref.value.id)
//       )
//     );
const allUsers = await client.query(
    q.Map(
        q.Paginate(q.Documents(q.Collection('users'))),
        q.Lambda(x => q.Get(x))
      )
    );

    console.log(allUsers);

    const theUser = allUsers.data.find((user) => user.data.fingerprintId === probFingerprint.value.ref.value.id);
    console.log("THE USER:  ", theUser);

    if (theUser == null) {
        const newUser = await createUser({ email: "asdf@asdf.com", fingerprintId: probFingerprint.value.ref.value.id, marketingMatchCount: probFingerprint.matchCount });
        console.log("MADE NEW USER:  ", newUser);
    }


//   marketingProf.visitHistory.push({date: new Date().toISOString(), page:'blog', action: 'submit form' });

//   await marketingProf.save();
//   if (dbUser === null) {
//    dbUser =  new User();
//    dbUser.marketingProfile = marketingProf;
//   }

//   dbUser.fingerprintMatchCount = probFingerprint.matchCount;

//   dbUser.email = email;
//   await dbUser.save();
 }