let num = ["0", "0"];
let index = 0;
let operator = 0; //div, mult, minus, plus

function appendNum(e) {
    if ((!(this.id == "0" && num[index] == "0")) && (!((this.id == ".") && num[index].includes(".")))) {
        if (num[index] == "0") {
            num[index] = "";
        }
        num[index] += "" + this.id;
    }
    screenDiv.textContent = `${num[index]}`;
}

function modifyNum(e) {
    if (this.id=="clearBut") {

    }
    if (this.id=="pmBut") {

    }
    if (this.id=="percentBut") {

    }
}

function setOperator(type) {
    if (type == "divideBut") {
        operator = 1;
    }
    else if (type == "multiplyBut") {
        operator = 2;
    }
    else if (type == "minusBut") {
        operator = 3;
    }
    else if (type == "plusBut") {
        operator = 4;
    }
}

function operation(e) {
    if (index > 0) {
        if (operator == 1) {
            if (num[1] == "0") {
                console.log("test");
            } else {
                num[0] = num[0] / num[1];
                num[1] = 0;
                screenDiv.textContent = `${num[0]}`;
                if(this.id == "equalBut") {
                    index = 0;
                    operator = 0;
                }
                else {
                    setOperator(this.id);
                }
            }
        }
        else if (operator == 2) {
            num[0] = num[0] * num[1];
            num[1] = 0;
            screenDiv.textContent = `${num[0]}`;
            if(this.id == "equalBut") {
                index = 0;
                operator = 0;
            }
            else {
                setOperator(this.id);
            }
        }
        else if (operator == 3) {
            num[0] = num[0] - num[1];
            num[1] = 0;
            screenDiv.textContent = `${num[0]}`;
            if(this.id == "equalBut") {
                index = 0;
                operator = 0;
            }
            else {
                setOperator(this.id);
            }
        }
        else if (operator == 4) {
            num[0] =  +num[0] + +num[1];
            num[1] = 0;
            screenDiv.textContent = `${num[0]}`;
            if(this.id == "equalBut") {
                index = 0;
                operator = 0;
            }
            else {
                setOperator(this.id);
            }
        }
    }
    else {
        if (this.id != "equalBut") {
            setOperator(this.id);
            index = 1;
        }
    }

}

    const greyBut = document.querySelectorAll('.grey');
    const orangeBut = document.querySelectorAll('.orange');
    const blueBut = document.querySelectorAll('.blue');
    const screenDiv = document.querySelector(".screenDiv");

    greyBut.forEach((button) => button.addEventListener('click', appendNum));
    orangeBut.forEach((button) => button.addEventListener('click', operation));
    blueBut.forEach((button) => button.addEventListener('click', modifyNum));

