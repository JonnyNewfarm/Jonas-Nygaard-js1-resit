const detailContainer = document.querySelector(".results-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");












console.log(id);


const url = "https://api.noroff.dev/api/v1/jokes/" + id;

console.log(url);

async function fetchPost() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch (error) {
        console.log(error);

    }

}

fetchPost();

function createHtml(details) {
    detailContainer.innerHTML = ` 

    <h4 class="details-setup">${details.setup}</h4>
    <p class="details-type">${details.type}</p>

    <div id="punchline-id">${details.punchline}</div>

    <button class="button" id="button">Punchline</button>
    
    

    

 
                            `;
}

fetchPost();















