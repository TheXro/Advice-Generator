'use-strict';

var id = document.querySelector('#id');
var advice = document.querySelector('.advice');
var btn = document.querySelector('.button');
console.log(advice.innerHTML);

function getAdvice() {

    let api = 'https://api.adviceslip.com/advice';
    fetch(api) // fetch returns a promise
    .then(response => response.json()) // json returns another promise 
        .then(data => {
            console.log(data.slip);
            console.log(data.slip.id);
            console.log(data.slip.advice);
            advice.innerHTML = "\"" + data.slip.advice + "\"";
            id.innerHTML =  data.slip.id;
    }
    )
    .catch(error => console.log(error))
        .finally(() => console.log('Done')); 
    
    
}

btn.addEventListener('click', getAdvice);

getAdvice();

    // fetch(api) // fetch returns a promise
    // .then(response => response.json()) // json returns another promise 
    // .then(data => {
    //     console.log(data.slip);
    //     console.log(data.slip.id);
    //     console.log(data.slip.advice);
    // }
    // )
    // .catch(error => console.log(error))
    // .finally(() => console.log('Done')); // finally is called after then or catch