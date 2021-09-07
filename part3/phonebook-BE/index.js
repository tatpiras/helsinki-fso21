require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
// const morgan = require('morgan')
const morganBody = require('morgan-body')
const PORT = process.env.PORT
const Contact = require('./models/contact')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
morganBody(app)

app.get('/info', (request, response) => {

  Contact.countDocuments({}, function (err, count) {
    if (err) { console.log(err) }
    else {
      count === 1 ? response.send(`<p>Phonebook has info for ${count} person</p><p>${new Date()}</p>`)
        :  response.send(`<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`)
    }
  })
})

app.get('/api/persons', (request, response, next) => {
  Contact.find({}).then(notes => {
    response.json(notes)
  })
    .catch(error => next(error))

})

app.get('/api/persons/:id', (request, response, next) => {
  Contact.findById(request.params.id)
    .then(contact => {
      if (contact) {
        response.json(contact)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const newPerson = new Contact({
    name: body.name,
    number: body.number,
  })

  newPerson.save().then(savedContact => {
    response.json(savedContact)
  })
    .catch(error => next(error))

})

/*
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const contact = {
    name: body.name,
    number: body.number,
  }

  Contact.findByIdAndUpdate(request.params.id, contact, { new: true })
    .then(updatedContact => {
      response.json(updatedContact)
    })
    .catch(error => next(error))
})
*/

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const contact = {
    name: body.name,
    number: body.number,
  }

  Contact.findOneAndUpdate({ _id: request.params.id }, contact, { new: true })
    .then(updatedContact => {
      response.json(updatedContact)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Contact.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(400).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
