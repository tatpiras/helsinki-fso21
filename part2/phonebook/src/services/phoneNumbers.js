import axios from 'axios'

const baseUrl = 'http://localhost:3001/people'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteOne = (personId) => {
    const request = axios.delete(`http://localhost:3001/people/${personId}`)
    return request.then(response => console.log(response))
}   

/*
const update = (id, newObject) => {
   const request = axios.put(`${baseUrl}/${id}`, newObject)
   return request.then(response => response.data)
}
*/

const numberService = {
    getAll,
    create,
    deleteOne
};

export default numberService;