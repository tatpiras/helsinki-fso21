
/*
let persons = [

    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]

const generateId = () => {
    const newRandomId = Math.round(Math.random() * 500);
    const existingIds = persons.map(person => +person.id);
    return existingIds.includes(newRandomId) ? generateId() : newRandomId
}

app.get('/', (request, response) => {
  response.send('<h1>Welcome!</h1>')
})

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p>
                 <p>${new Date()}</p>`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {

    const id = +request.params.id
    const person = persons.find(person => person.id === id)

    if (person) { response.json(person) }
    else { response.status(404).end() }
})

app.post('/api/persons', (request, response) => {

    const body = request.body

    const phonebookCheck = persons.filter(person => person.name === body.name && person.number === body.number)

    if (!body.name || !body.number) {
        return response.status(400).json({
        error: 'name and / or number missing. please provide both data fields.'
        })
    }

    if (phonebookCheck.length !== 0) {
      return response.status(400).json({
        error: 'contact already exists.'
      })
    }

    const person = {
        name: body.name,
        number: body.number || 'n/a',
        id: generateId(),
    }

    persons = persons.concat(person)
    response.status(201).json(person)
})

*/