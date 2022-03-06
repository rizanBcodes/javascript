function getPoems(){

    fetch('https://poetrydb.org/author')
    .then(response => response.json())
    .then(data => console.log(data))
}

getPoems();
