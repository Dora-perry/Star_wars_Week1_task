// const api = "https://swapi.dev/api/people"
// fetch(api)
// .then(response => response.json())
// .then(data => console.log(data));

// const apiUrl = "https://swapi.dev/api/people";

const get_api = async () => {
  const returned = await fetch("https://swapi.dev/api/people");
  const data = await returned.json();
  return data;
};

const renderApi = async () => {
  const data = await get_api();

  const { results } = data;

    let html = "";
    
  let images = [
    "beru.jpeg",
    "biggs.jpeg",
    "DARTH Vader.webp",
    "darth.jpeg",
    "leia.jpeg",
    "luke.jpeg",
    "obi.jpeg",
    "owen.webp",
    "R5-D4.jpeg",
    "skywaker.png",
  ];

  for (let i in results) {
    if (results) {
      results[i].image = images[i];
    }
  }
  results.forEach((result, index) => {
    let htmlContent = `<div id= "card-body">
            <div class="card">
                <div class="card-image">
                 <img src="images/${result.image}" alt="image">
                </div>
                 
                    <span class="card-title " data-index = "${index}">${result.name}</span>
                  <div class='hover' >
                    <p> Name: ${result.name}</p>
                     <p> Height: ${result.height}</p>
                    <p>gender: ${result.gender}</p>
                 </div>
            </div>
        </div>`;
    html += htmlContent;
  });

  let container = document.querySelector(".add")
  container.innerHTML = html

  let cardTitle = document.querySelectorAll('.card-title');

  let hover = document.querySelectorAll('.hover');

  cardTitle.forEach((card,i) => card.addEventListener('click', () => {
    console.log(hover[i]);
    hover[i].classList.toggle('hoverDisplay');

  }))

};
renderApi();
