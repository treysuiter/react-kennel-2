const remoteURL = "http://localhost:5002"

export default {
  get(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`)
    .then(result => result.json())
  },
  getAll(endpoint) {
    return fetch(`${remoteURL}/${endpoint}`)
    .then(result => result.json())
  },
  delete(endpoint, id) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  post(endpoint, newObj) {
    return fetch(`${remoteURL}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObj)
    }).then(data => data.json())
}
}
