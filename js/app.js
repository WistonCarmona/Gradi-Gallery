//const header = document.querySelector('header');
const section = document.querySelector('section');

//let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let requestURL = '../api/gradiAuthors.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
  const superHeroesText = request.response;
  const superHeroes = JSON.parse(superHeroesText);
  showinfo(superHeroes);
}

function showinfo(jsonObj) {
  const item = jsonObj['members'];
  for (let i = 0; i < item.length; i++) {
    const myGaleria = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = item[i].id;
    myPara1.textContent = 'Secret identity: ' + item[i].secretIdentity;
    myPara2.textContent = 'Age: ' + item[i].age;
    myPara3.textContent = 'Superpowers:';

    const superPowers = item[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myGaleria.appendChild(myH2);
    myGaleria.appendChild(myPara1);
    myGaleria.appendChild(myPara2);
    myGaleria.appendChild(myPara3);
    myGaleria.appendChild(myList);

    section.appendChild(myGaleria);
  }
}