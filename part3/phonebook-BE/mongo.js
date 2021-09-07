const mongoose = require('mongoose')

let password
let newContactName
let newContactNumber

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

password = process.argv[2]
const url = `mongodb+srv://tatpiras:${password}@cluster0.d8tir.mongodb.net/phonebook?retryWrites=true`
mongoose.connect(url)

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

// ADD NEW CONTACTS
// node mongo.js ARGS => password contactName contactNumber
// on success, log (ex.): added Anna number 040-1234556 to phonebook

if (process.argv.length === 5) {
  newContactName = process.argv[3]
  newContactNumber = process.argv[4]

  const contact = new Contact({
    name: newContactName,
    number: newContactNumber,
  })

  contact.save().then(() => {
    console.log(`added ${newContactName}, number: ${newContactNumber} to phonebook`)
    mongoose.connection.close()
  })
}

if (process.argv.length === 3) {

  Contact.find({}).then(result => {
    result.forEach(contacts => {
      console.log(contacts)
    })
    mongoose.connection.close()
  })
}

