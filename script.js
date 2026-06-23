var button = document.querySelector("button");
button.addEventListener("click", function(){
    var n1 = Math.floor(Math.random() * 6) + 1;

if(n1===1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if(n1===2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if(n1===3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if(n1===4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if(n1===5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else if(n1===6){
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var n2 = Math.floor(Math.random() * 6) + 1;

if(n2===1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if(n2===2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if(n2===3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if(n2===4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if(n2===5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else if(n2===6){
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if(n1>n2){
    document.querySelector("h1").classList.add("p1");
    document.querySelector("h1").textContent = "Player 1 Wins!";
    document.querySelector("html").style.backgroundColor = "green";
}
else if(n2>n1){
    document.querySelector("h1").classList.add("p2");
    document.querySelector("h1").textContent = "Player 2 Wins!";
    document.querySelector("html").style.backgroundColor = "yellow";
}
else{
    document.querySelector("h1").classList.add("draw");
    document.querySelector("h1").textContent = "It's a Draw!";
    document.querySelector("html").style.backgroundColor = "red";
}

})