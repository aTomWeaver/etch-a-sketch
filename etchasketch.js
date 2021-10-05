
function makeDivs(qty, divClass, appendTo) { 
    // generates divs, gives them a specified class, and appends them to specified location
    for (let i = 0; i < qty; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add(divClass);
        appendTo.appendChild(newDiv);
    }
}

const gridContainer = document.querySelector('.grid-container');
const rowContainers = document.querySelectorAll('.row-container');

for (let i = 0; i < 16; i++) {
    makeDivs(1, 'row-container', gridContainer);
    for (let j = 0; j < 16; j++) {
        makeDivs(1, 'square', gridContainer.lastElementChild)
    }
}

const squares = document.querySelectorAll('.square');



let iter = 0;


squares.forEach(square => square.addEventListener('click', (e) => {
    if (e.target.style.backgroundColor !== 'black') {
        e.target.style.backgroundColor = 'black';
    } else {
        e.target.style.backgroundColor = 'white';
    }
}));

// squares.forEach(square => square.addEventListener('click', (e) => {
//     const COLORS = ['black', 'red', 'blue', 'green', 'white'];
//     e.target.style.backgroundColor = COLORS[iter];
//     iter++;
//     if (iter > 4) {
//         iter -= 5
//     }
//     console.log(e);
// }));

