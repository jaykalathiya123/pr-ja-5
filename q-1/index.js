let myColor = ["Red", "Green", "White", "Black"];

document.querySelector("h1").innerHTML=(myColor.join(' ,'));
document.querySelector("h2").innerHTML=(myColor.join(' + '));
document.querySelector("h3").innerHTML=(myColor.pop());
document.querySelector("h3").innerHTML=(myColor);
document.querySelector("h4").innerHTML=(myColor[0]);
document.querySelector("h5").innerHTML=(myColor.slice(1 , 3));
myColor.push("orange");
document.querySelector("h6").innerHTML=(myColor.join(','));

