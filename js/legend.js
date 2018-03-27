////////////////// DOTS ///////////////////

let circle = [];
let label = []
for (let i = 0; i <= 700; i += 100 ) {
	console.log(i)

circle[i] = 'c'+i+'';
let c = circle[i];
label[i] ='l'+i+'';
let l = label[i];

console.log(circle[i])
c = document.createElement('div');   
l = document.createElement('div');   
document.body.appendChild(c);
document.body.appendChild(l);
c.className = 'circle';
l.className = 'label';
c.style.background = 'hsl('+( i * .4 )+', 90%, 50%)';
l.innerText = '$'+i;

}