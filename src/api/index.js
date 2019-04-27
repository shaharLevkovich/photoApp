
export default (searchWord)=>{
    console.log(searchWord)
    return fetch(`https://pixabay.com/api/?key=12222905-6c0d7017a78b504d7401549a2&q=${searchWord}&image_type=photo`)
    .then (response => Promise.all([response, response.json()]))
}
