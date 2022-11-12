var elem = document.createElement('div');
elem.setAttribute("id", "main");
document.body.appendChild(elem);

var heading = document.createElement('h1');
heading.innerHTML = "Hello World!";
elem.appendChild(heading);