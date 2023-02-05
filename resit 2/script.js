
const url = "https://api.noroff.dev/api/v1/jokes";




const resultsContainer = document.querySelector(".results");

const ProgramBtn = document.querySelector(".program");
const generalBtn = document.querySelector(".general");



async function makeApiCall() {



    const response = await fetch(url);

    const results = await response.json();





    console.log(results);

    results.forEach(function (result) {
        resultsContainer.innerHTML += `<div class="card1"> 

        <h4 class="cardh4">${result.setup}</h4>
        <p class="type">${result.type}</p>

        <a href="details.html?id=${result.id}" class"punchline-link">Punchline</a>
        
        

        
    
     </div>`;

    });

}

makeApiCall();
























