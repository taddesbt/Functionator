
let myBlock;
let myFunctionList;
let funList = [];
const movementArray = ["right", "left", "up", "down"];
 myBlock = document.querySelector('#element');

 myFunctionList = document.createElement("div");
document.body.appendChild(myFunctionList);


document.addEventListener("keydown", function (e) {
    e.preventDefault();
    let keyC = e.keyCode;
    if (keyC === 37) {
        addFun("left");
    }
    else if (keyC === 39) {
        addFun("right");
    }
    else if (keyC === 38) {
        addFun("up");
    }
    else if (keyC === 40) {
        addFun("down");
    }
    else if (keyC === 67) {
        myBlock.style.backgroundColor = randomColor();
    }
    else if (keyC === 82) {
        let temp = movementArray[Math.floor(Math.random() * movementArray.length)];
        addFun(temp);
    }
    else if (keyC === 13 || keyC === 32) {
        mover();
    }
    console.log(e.keyCode);
})

function mover() {
    if (funList.length > 0) {
        let cur = myBlock.getBoundingClientRect();
        let el = funList.shift();
        let item = el.textContent.replace("+", "");
        myFunctionList.removeChild(el);
        myBlock.innerHTML = "Move:" + item;
        if (item == "left") {
            myBlock.style.left = cur.left - cur.width + "px";
        }
        if (item == "right") {
            myBlock.style.left = cur.left + cur.width + "px";
        }
        if (item == "up") {
            myBlock.style.top = cur.top - cur.height + "px";
        }
        if (item == "down") {
            myBlock.style.top = cur.top + cur.height + "px";
        }
        setTimeout(mover, 300);
    }
    else {
        myBlock.innerHTML = "Set Path";
        return;
    }
}

function addFun(val) {
    let span = document.createElement("span");
    span.textContent = "+" + val;
    span.style.padding = "10px";
    span.style.border = "1px solid #ddd";
    span.addEventListener("mouseover", function () {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    })
    span.addEventListener("mouseout", function () {
        this.style.backgroundColor = "white";
        this.style.color = "black";
    })
    span.addEventListener("click", function () {
        let curIndex = funList.indexOf(this);
        let tempRemove = funList.splice(curIndex, 1);
        myFunctionList.removeChild(this);
     
    })
    myFunctionList.appendChild(span);
    funList.push(span);
    console.log(funList);
   
}

function randomColor() {
    return "#" + Math.random().toString(16).substr(-6);
}
