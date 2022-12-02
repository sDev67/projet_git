const elem = document.createElement('div')
elem.setAttribute('id', 'main')
document.body.appendChild(elem)

const heading = document.createElement('h1')
heading.innerHTML = 'Hello World!'
elem.appendChild(heading)

function getOption () {
  const obj = document.getElementById('mySelect')
  document.getElementById('demo').innerHTML =
    obj.options[obj.selectedIndex].text
}

elem.innerHTML += `
<form>
Select your favorite fruit:
<select id="mySelect">
  <option>Apple</option>
  <option>Orange</option>
  <option>Pineapple</option>
  <option>Banana</option>
</select>
<br><br>
<input type="button" id="myBtn" value="Click Me!">
</form>

<p id="demo"></p>
`
document.getElementById('myBtn').addEventListener('click', getOption)

fetch('https://swapi.dev/api/people')
  .then(function (response) {
    if (response.ok) {
      return response.json()
    }
  })
  .then(function (data) {
    console.log(data)
    const ships = data.results
    const list = document.createElement('ul')
    ships.forEach((ship) => {
      const listItem = document.createElement('li')
      listItem.innerHTML = ship.name
      list.appendChild(listItem)
    })
    elem.appendChild(list)
  })
  .catch(function (error) {
    console.log(error)
  })

console.log('Hello ESGI')
