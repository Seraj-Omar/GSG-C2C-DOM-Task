//Task 1

//1 - Starting from document.body, write code that logs (in order):

const lastChild=document.body.lastElementChild;
console.log(lastChild);

const children=document.body.children;
console.log(children.length);

const childNodes=document.body.childNodes;
console.log(childNodes.length-children.length);
/*
they differ because childNodes includes evey type of nodes which are here (html elements ,texts)
while children only contains html elements

children = [header, main, script] => length = 3
childNodes = [text, header, text, main, text, script] => length = 6
*/ 


//2 - Determine:

/*
nodeType = 3 => Text Node
which is the actual text inside the elment

nodeName => #text

the first paragraph is a sibling of the second
*/

//Twist:

console.log(childNodes)
childNodes.forEach(function(val){
    if(val.nodeName=='#text')
        console.log(val);
})
/*
here it will log three text nodes
their origins:
    first one => The newline '\n' between body and header
    second one => The newline '\n' between header and main
    third one => The newline '\n' between main and script
 */



//Task 2 

let newDiv=document.createElement('div');
let newHeader=document.createElement('h2');
let newParagraph=document.createElement('p');

newDiv.classList.add('card');
newDiv.setAttribute('data-role','admin');

newHeader.textContent="Access Panel";
newDiv.appendChild(newHeader);

newParagraph.textContent="Authenticated";
newDiv.appendChild(newParagraph);

document.body.appendChild(newDiv)



console.log(newDiv.dataset.role);

newParagraph.textContent="Welcome back, Admin";

newDiv.classList.add('authenticated','highlight');

if(newDiv.classList.contains('card'))
    newDiv.classList.remove('card')