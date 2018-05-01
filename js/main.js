let attackingPost, defendingPost, subToSub; //Variables storing DOM nodes we want to use later. Undefined for now as document.getElementById does not work until the page has loaded

/**
* NOTE: There are many other ways we could have solved this problem.
*        + We could have simply moved the <script></script> tag in HTML from the top of the page to the last line inside <body></body>. This would mean that everything would have been put into the page before the script loaded. BUT this can cause other problems later on.
*        + We could have used event handlers in the HTML instead (like <input type="radio" onclick="document.getElementById('select-div').className='container1'">). BUT this is bad practice.
*/

window.onload = ()=>{ //When the window has finished loading

	//Assign values to the radio button variables (as the elements that we are referencing now exist)
	attackingPost = document.getElementById("radio-attack");
	defendingPost = document.getElementById("radio-defend");
	subToSub = document.getElementById("radio-sub");

	//Assign the event handlers
	attackingPost.onclick = ()=>{
	    document.getElementById("select-div").className = "container1";
	}

	defendingPost.onclick = ()=>{
	    document.getElementById("select-div").className = "container2";
	}

	subToSub.onclick = ()=>{
	    document.getElementById("select-div").className = "container3";

	}
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