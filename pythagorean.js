HTML part

<p>A:</p>
<input type="number" id="A"></input>
<p>B:</p>
<input type="number" id="B"></input>


<p id="C">C</p>

<button onclick="pythagorean()">Show C</button>
------------------------------------------------

Javascript Part



function pythagorean() {

var A = document.getElementById('A').value;


var B = document.getElementById('B').value;


var c = Math.sqrt(Math.pow([A],2)+Math.pow([B],2));   / .tofixed(#) shows the maximum decimal places depending on the value #
document.getElementById('C').innerHTML = "C: "+c;

};
