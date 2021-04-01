
const getBands = () => {
  return axios.get("/api/bands");
}
// Gets the book with the given id
const getBand = (id) => {
  return axios.get("/api/bands/" + id);
}
// Deletes the book with the given id
const deleteBand = (id) => {
  return axios.delete("/api/bands/" + id);
}
// Saves a book to the database
const saveBand = (bandData) => {
  return axios.post("/api/bands", bandData);
}

const myEl = document.createElement("ul");
const loadBands = () => {
  getBands()
    .then(res =>
      {
      for (var i = 0; i < res.data.length; i++) {
        
        
        const li = document.createElement('li');
        li.textContent = `${res.data[i].name} \n`
        myEl.append(li);
      }
      const bandBody = document.getElementById("bandBody");
      bandBody.append(myEl)
    }
    )
    .catch(err => console.log(err));
};


const myButton = document.getElementById("button");

myButton.addEventListener(onclick, loadBands)