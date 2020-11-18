import faunadb from 'faunadb' /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
  secret: 'fnAD68cdlDACA3yr7XeZAhb6jIPMfJ4IdQbcCte4'
)}

/* export our lambda function as named "handler" export */
module.exports.handler = (event, context, callback) => {
    /* parse the string body into a useable JS object */
    const data = JSON.parse(event.body)
    console.log("Function `todo-create` invoked", data)
    const todoItem = {
      data: data
    }
    client.query(
      q.Create(
        q.Collection('fingerprints'),
        { data: { title: 'What I had for breakfast ..' } },
      )
    )
    .then((ret) => console.log(ret))
  }