const mainElement = document.getElementById('main');

if (mainElement) {mainElement.remove();
}
 const newHeader = document.createElement("h1");
 newHeader.textContent = "Katie is the champion";
newHeader.id = "victory";
   
document.body.appendChild(newHeader);


// main.remove();

// const newHeader = document.createElement("h1");
// newHeader.id = 'victory';
// newHeader.textContent = 'Bob is the champion';
