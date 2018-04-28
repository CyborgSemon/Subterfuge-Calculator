// Definding the variavbils for the radio buttons to update the forms

var attackingPost = document.getElementById("radio-attack");
var defendingPost = document.getElementById("radio-defend");
var subToSub = document.getElementById("radio-sub");

attackingPost.onclick = function () {
    document.getElementById('select-div').className = 'attack';
}

defendingPost.onclick = function () {
    document.getElementById('select-div').className = 'defend';
}

subToSub.onclick = function () {
    document.getElementById('select-div').className = 'sub';
}





// function myScript() {
// 	var P1Drillers = document.getElementById("P1Drillers").value;
// 	alert(P1Drillers);
// }




// object.onsubmit = function(){myScript};
//
// // The useres stuff as varabiles
//
// var P1Drillers = document.getElementById("P1Drillers").value;
// var P1Shields = document.getElementById("P1Shields").value;
//
// // The enemies stuff as varabiles
//
// var P2Drillers = document.getElementById("P2Drillers").value;
// var P2Shields = document.getElementById("P2Shields").value;
//
// alert(P1Drillers)