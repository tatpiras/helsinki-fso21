import axios from 'axios'

const baseUrl = 'http://localhost:3001/people'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getOne = (name) => {
    const request = axios.get(baseUrl, { params: { name: name}})
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const deleteOne = (personId) => {
    const request = axios.delete(`${baseUrl}/${personId}`)
    return request.then(response => response.status)
}   

const update = (personId, newPerson) => {
   const request = axios.put(`${baseUrl}/${personId}`, newPerson)
   return request.then(response => response.data)
}

const numberService = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
};

export default numberService;