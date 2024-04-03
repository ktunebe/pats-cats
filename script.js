const btn = document.querySelector('#catButton')
const factHolder = document.querySelector('#factHolder')

function getFact() {
    fetch('https://catfact.ninja/fact')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json.fact);
            factHolder.textContent = json.fact;
        })
        .catch(function(error) {
            console.log(error);
        })
}

btn.addEventListener('click', getFact)

