const breeds = []

const renderImages = data => {
    data.message.forEach(url => {
    const img = document.createElement('img')
    const dogList=document.querySelector("#dog-image-container")
    img.src = url
    dogList.append(img)
      
  })
}

const filterBreeds = event => {
    const filteredBreeds = breeds.filter(breed => {
      // const pattern = `^${event.target.value}`
      // return breed.match(new RegExp(pattern))
      return breed.charAt(0) === event.target.value
    })
    
    renderBreeds(filteredBreeds.length ? filteredBreeds : breeds)
  }



const renderBreeds = breeds => {
  document.querySelector('ul').innerHTML = ""
  breeds.forEach(breed => {
    const li = document.createElement('li')
    li.innerText = breed
    document.querySelector('ul').append(li)
  })
}

const mapBreedsToArray = data => {
  for (const breed in data.message) {
    breeds.push(breed)
  }
  renderBreeds(breeds)
}

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(renderImages)
  .catch(error => console.log(error))

fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(mapBreedsToArray)
  .catch(error => console.log(error))

