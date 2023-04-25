/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

//1.  GET BY ID
const orangeGhost = document.getElementById('first_ghost');
console.log(orangeGhost);

function changeColor() {
    orangeGhost.style.fill = 'orange';
};
changeColor();


//2. GET BY CLASSNAME
const blueGhosts = document.getElementsByClassName('second_wave');
console.log(blueGhosts);

function changeColor2() {
for (const ghost of blueGhosts ) {
ghost.style.fill = 'blue';
console.log(ghost);
}
};
changeColor2();

//3.  GET AREA, DRILL DOWN using GET BY TAG NAME
const greenGhosts = document.getElementById("area-51").getElementsByTagName("svg");
console.log(greenGhosts);

function changeColor3() {
    for(const ghost of greenGhosts) {
    ghost.style.fill="green";
    console.log(ghost);
}
};

changeColor3();

//4.querySelector nth-child
const redStroke = document.getElementById("area-51").querySelector('svg:nth-child(3)');
console.log(redStroke);

function getStroke() {
    redStroke.style.stroke = "red";
    redStroke.style.strokeWidth = "15px";
}

getStroke();


//5. from the last child, select the div immediately above the ghost and make its border '5px dashed'
const dashedBorder = redStroke.closest('div');
console.log(dashedBorder);

function getBorder() {
  dashedBorder.style.border= "5px dashed";
};
getBorder();

//6. querySelectorAll
const redGhosts = document.getElementById("area-50").querySelectorAll("svg");
console.log(redGhosts);

function changeColor4 () {
    for (const ghost of redGhosts) {
        ghost.style.fill = "red";
        console.log(ghost);
    }
};

changeColor4();