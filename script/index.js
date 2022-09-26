// const api = "https://swapi.dev/api/people"
// fetch(api)
// .then(response => response.json())
// .then(data => console.log(data));

const apiUrl = "https://swapi.dev/api/people"
const get_api = async (url) => {
    const returned = await fetch(url);
    const data = await returned.json();
    // console.log(data);
    return data;

}
// fetch_api(apiUrl);

// To render api

const renderApi =async() =>{
    const data = await get_api(apiUrl);

    const {results} = data

    let html = '';
    let images = ['beru.jpeg', 'biggs.jpeg', 'DARTH Vader.webp', 'darth.jpeg', 'leia.jpeg', 'luke.jpeg', 'obi.jpeg', 'owen.webp', 'R5-D4.jpeg', 'skywaker.png']

    for (let i in results) {
       if(results) {
        results[i].image  = images[i];   
        }
    }
    results.forEach((result, index) =>{

        let htmlContent =
        `<div id= "card-body">
            <div class="card">
                <div class="card-image">
                    <img src="images/${result.image}" alt="image">
                </div>
                 <div class='hover' >
                    <span class="card-title name" data- index = "${index}">${result.name}</span>
                     <p> Height: ${result.height}</p>
                    <p>gender: ${result.gender}</p>
                 </div>
            </div>
        </div>`;
        html += htmlContent;
    });

    // html +=`
    // <div class="card-action">
    //     <p class= "character -name"></p>
    //     <p class= "character -gender"></p>
    //     <p class= "character -height"></p>
    // </div>
    // `;
    html += `
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p class= "character -name"></p>
            <p class= "character -gender"></p>
            <p class= "character -height"></p>
        </div>
    </div>
    `
    let container = document.querySelector('.add').innerHTML = html;
    console.log(setModal(results));

}
renderApi();



