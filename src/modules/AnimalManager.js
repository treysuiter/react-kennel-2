const remoteURL = "http://localhost:5002"

export default {
  get(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`)
    .then(result => result.json())
  },
  getAll(endpoint) {
    return fetch(`${remoteURL}/${endpoint}`)
    .then(result => result.json())
  }
}
