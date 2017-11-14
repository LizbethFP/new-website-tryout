// elemento contenedor
var container = document.getElementById('container');

// elemento h1
var h1 = document.createElement('h1');
h1.textContent = 'Dibujo de cajas';
container.appendChild(h1);

// figure: imagen y figcaption
var figure = document.createElement('figure');
container.appendChild(figure);

var img = document.createElement('img');
img.setAttribute('src', 'assets/images/boxes.jpg');
img.setAttribute('alt', 'caja');
figure.appendChild(img);

var text = document.createElement('figcaption');
text.textContent = 'descripción de cajas';
figure.appendChild(text);


var img2 = document.createElement('img');
img2.setAttribute('src', 'https://www.cyecsa.com/wp-content/uploads/2013/07/Extra-Gde.jpg');
img2.setAttribute('alt', 'caja2');
container.appendChild(img2);

function clickImg() {
  img.setAttribute('src', 'https://www.cyecsa.com/wp-content/uploads/2013/07/Extra-Gde.jpg');
}

function clickImg2() {
  img2.setAttribute('src', 'assets/images/boxes.jpg');
}

img.addEventListener('dblclick',clickImg);
img2.addEventListener('dblclick',clickImg2);

var captionColoring = document.getElementsByTagName('figcaption')[0];
// captionColoring.setAttribute('color', 'red');
//
captionColoring.style.fontFamily = 'sans-serif';
captionColoring.style.fontSize = '35px';
captionColoring.style.color = "red";
