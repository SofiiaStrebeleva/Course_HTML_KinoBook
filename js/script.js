var mainTitle = document.getElementById("KinoBook");

console.log ("This is an element of type: ", mainTitle.nodeType );
console.log( "the Inner HTML is " , mainTitle.innerHTML );
console.log( "Child nodes: " , mainTitle.childNodes );

document.onclick = function ( ) {
	alert ("You clicked on page");
};


var filmCover = document.getElementById( "film_cover");
filmCover.onclick = function ( ) {
alert("This page is empty!");
};
