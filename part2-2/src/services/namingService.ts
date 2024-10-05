import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl);
}
const create = (personData) => {
    return axios.post(baseUrl, personData)
}

const update = (personID, updatePerson) => {
    return axios.put(`${baseUrl}/${personID}`, updatePerson)
}

const deleteContact = (selectedContact) => {
    return axios.delete(`${baseUrl}/${selectedContact}`)
}
export default {
    getAll,
    update,
    create,
    deleteContact
}
