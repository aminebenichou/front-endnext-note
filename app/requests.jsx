const { default: axios } = require("axios");

export async function getAllNotes() {
    const response = await axios.get("http://127.0.0.1:8000/api/notes/")
    console.log(response)
    return response.data
}

export async function createNote(data) {
    await axios.post("http://127.0.0.1:8000/api/notes/", data)

}