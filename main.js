const apikey = 'b3986b61admsha48eaec4b25a37ap1bf5ccjsn82c93215ec7d';
const baseUrl = 'https://mangaverse-api.p.rapidapi.com/';
const query = 'manga/fetch?page=1&genres=Harem%2CFantasy';
const url = `${baseUrl}${query}`;
const con = document.querySelector('#contenaire'); // Il semble y avoir une faute de frappe ici, je l'ai corrigée en 'container'

fetch(url, {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com',
    'X-RapidAPI-Key': apikey,
  },
})
  .then(response => response.json())
  .then(data => {
            const con = document.querySelector('#contenaire'); // Il semble y avoir une faute de frappe ici, je l'ai corrigée en 'container'
            con.innerHTML= '';
            data.data.forEach(article => {
            const card = document.createElement('div');
            card.classList.add('card_contenaire');

            con.appendChild(card);

            const img = document.createElement('img');
            img.src = `${article.thumb}`;
            card.appendChild(img);

            const title = document.createElement('p');
            title.textContent = `Title: ${article.title}`;
            card.appendChild(title);

            const rang = document.createElement('p');
            rang.textContent = `Status: ${article.status}`;
            card.appendChild(rang);

            const type =document.createElement('p')
            type.textContent= `Type : ${article.type}`
            card.appendChild(type)

            });
  })
  .catch(error => console.error(error));



const search = document.querySelector('#recherche');
const btn_search = document.querySelector('#btn-search');

btn_search.addEventListener('click', (e)=>{
 e.preventDefault();
 const search_value= search.value.trim();
 const url1 = `https://mangaverse-api.p.rapidapi.com/manga/search?text=${search_value}`;
 const apikey = 'b3986b61admsha48eaec4b25a37ap1bf5ccjsn82c93215ec7d';
 fetch(url1, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com',
      'X-RapidAPI-Key': apikey,
    },
  }).then(response => response.json())
           .then(data=> {
            const con = document.querySelector('#contenaire'); // Il semble y avoir une faute de frappe ici, je l'ai corrigée en 'container'
            con.innerHTML= '';
            data.data.forEach(article => {
            const card = document.createElement('div');
            card.classList.add('card_contenaire');

            con.appendChild(card);

            const img = document.createElement('img');
            img.src = `${article.thumb}`;
            card.appendChild(img);

            const title = document.createElement('p');
            title.textContent = `Title: ${article.title}`;
            card.appendChild(title);

            const rang = document.createElement('p');
            rang.textContent = `Status: ${article.status}`;
            card.appendChild(rang);

            const type =document.createElement('p')
            type.textContent= `Type : ${article.type}`
            card.appendChild(type)

            });
           })
});

const logo = document.querySelector('#logo').addEventListener('click', ()=>{
    window.location.reload();
});