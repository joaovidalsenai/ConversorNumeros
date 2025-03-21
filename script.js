const htmlTag = document.querySelector("html");
const res = document.querySelector("#resultado");
const input = document.querySelector("#input");
const bg = document.getElementById("bg");

const maxRoman = 3999999, maxEtrus = 499, maxAttic  = 99999, maxPsalt = 300;

let oper = 0;

htmlTag.style.backgroundImage = 'url("https://www.dailyartmagazine.com/wp-content/uploads/2022/01/Cole_Thomas_The_Course_of_Empire_Destruction_1836-scaled.jpeg")';

function cores(i) {
    
    switch (i) {
        case 1:
            res.style.boxShadow = 'none';
            input.style.boxShadow = 'none';
            res.style.borderColor = 'ivory';
            input.style.borderColor = 'ivory';
            break;
        case 2:
            res.style.boxShadow = '0px 0px 5px red';
            input.style.boxShadow = '0px 0px 5px red';
            res.style.borderColor = 'red';
            input.style.borderColor = 'red';
            res.style.visibility = "visible";
            break;
        default:
            break;
    }
}

function changeNav() {
    let currentElement;
    const navButtons = document.getElementsByClassName("nav-btn");
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].style.backgroundColor = 'transparent';
        navButtons[i].style.color = 'ivory';
    }

    switch (oper) {
        case 0:
            currentElement = document.getElementById("roman");
            input.placeholder = 'Insira um número de 1 a '+ maxRoman;
            htmlTag.style.backgroundImage = 'url("https://www.dailyartmagazine.com/wp-content/uploads/2022/01/Cole_Thomas_The_Course_of_Empire_Destruction_1836-scaled.jpeg")';
            break;

        case 1:
            currentElementt = document.getElementById("etrus");
            input.placeholder = 'Insira um número de 1 a '+ maxEtrus;
            htmlTag.style.backgroundImage = 'url("https://blogs.unimelb.edu.au/shaps-research/files/2024/03/Hubert-Robert-Ancient-ruins-as-baths-1798-1466a6123e0eab63-1050x591.png")';
            break;

        case 2:
            currentElement = document.getElementById("attic");
            input.placeholder = 'Insira um número de 1 a '+ maxAttic;
            htmlTag.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/A_City_of_Ancient_Greece_by_William_Linton.jpg/960px-A_City_of_Ancient_Greece_by_William_Linton.jpg?20230606183934")'
            break;

        case 3:
            currentElement = document.getElementById("psalt");
            input.placeholder = 'Insira um número de 1 a '+ maxPsalt;
            htmlTag.style.backgroundImage = 'url("https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/26/thumbs/800x531/293777.jpg")';
        default:
            break;
    }

    res.style.fontFamily = '"Quivira", sans-serif';
    currentElement.style.backgroundColor = 'ivory';
    currentElement.style.color = 'black';
    convert();
}

function reverseString(txt) {
    return(_.split(txt, '').reverse().join(''));
}

function convert() {
    let inpVal = input.value;
    switch (oper) {
        case 0:
            intRoman(inpVal);
            break;
        case 1:
            intEtrus(inpVal);
            break;
        case 2:
            intAttic(inpVal);
        case 3:
            intPsalt(inpVal);
        default:
            break;
    }
}

function intRoman(inpVal) {
    let roman = '';

    cores(1);

    if (inpVal > 0 && inpVal <= maxRoman) {
        for (let key in romanValues) {
            while (inpVal >= romanValues[key]) {
                roman += key;
                inpVal -= romanValues[key];
            }
        }
        res.style.visibility = "visible";
        res.innerHTML = roman;
    }
    
    else if ((inpVal <= 0 || inpVal > maxRoman) && inpVal !='') {
        res.innerHTML = "INSIRA UM NÚMERO DE 1 " + maxRoman;
        cores(2);
    }
    
    else if (roman == ''){
        cores(1);
        res.style.visibility = "hidden";
    }
}

function intEtrus(inpVal) {
    let etrus = '';

    cores(1);

    if (inpVal > 0 && inpVal <= maxEtrus) {
        for (let key in etrusValues) {
            while (inpVal >= etrusValues[key]) {
                etrus += key;
                inpVal -= etrusValues[key];
            }
        }
        res.style.visibility = "visible";
        res.innerHTML = reverseString(etrus);
    }
        

    else if ((inpVal <= 0 || inpVal > maxEtrus) && inpVal !='') {
        res.innerHTML = "INSIRA UM NÚMERO DE 1 A " + maxEtrus ;
        cores(2);
    }
    
    else if (etrus == ''){
        cores(1);
        res.style.visibility = "hidden";
    }
}

function intAttic(inpVal) {
    let attic = '';

    cores(1);

    if (inpVal > 0 && inpVal <= maxAttic) {
        for (let key in atticValues) {
            while (inpVal >= atticValues[key]) {
                attic += key;
                inpVal -= atticValues[key];
            }
        }
        res.style.visibility = "visible";
        res.innerHTML = attic;
    }
        

    else if ((inpVal <= 0 || inpVal > maxAttic) && inpVal !='') {
        res.innerHTML = "INSIRA UM NÚMERO DE 1 A " + maxAttic;
        cores(2);
    }
    
    else if (attic == ''){
        cores(1);
        res.style.visibility = "hidden";
    }
}

function intPsalt(inpVal) {
    let psalt = '';

    cores(1);

    if (inpVal > 0 && inpVal <= maxPsalt) {
        for (let key in psaltValues) {
            while (inpVal >= psaltValues[key]) {
                psalt += key;
                inpVal -= psaltValues[key];
            }
        }
        res.style.visibility = "visible";
        res.innerHTML = reverseString(psalt);
    }
        

    else if ((inpVal <= 0 || inpVal > maxPsalt) && inpVal !='') {
        res.style.fontFamily  = 'LastResort';
        res.innerHTML = "INSIRA UM NÚMERO DE 1 A " + maxPsalt ;
        cores(2);
    }
    
    else if (psalt == ''){
        cores(1);
        res.style.visibility = "hidden";
    }
}

const romanValues = {
    M̅: 1000000,
    C̅M̅: 900000,
    D̅: 500000,
    C̅D̅: 400000,
    C̅: 100000,
    X̅C̅: 90000,
    L̅: 50000,
    X̅L̅: 40000,
    X̅: 10000,
    I̅X̅: 9000,
    V̅I̅I̅I̅: 8000,
    V̅I̅I̅: 7000,
    V̅I̅: 6000,
    V̅: 5000,
    I̅V̅: 4000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

const etrusValues = {
    [String.fromCodePoint(0x1031F)]: 100,
    '𐌣': 50,
    '𐌢': 10,
    '𐌡': 5,
    '𐌠': 1
};

const atticValues = {
    [String.fromCodePoint(0x10147)]: 50000,
    'Μ': 10000,
    [String.fromCodePoint(0x10146)]: 5000,
    'Χ': 1000,
    [String.fromCodePoint(0x10145)]: 500,
    'Η': 100,
    [String.fromCodePoint(0x10144)]: 50,
    'Δ': 10,
    'Π': 5,
    'Ι': 1
}

const psaltValues = {
    [String.fromCodePoint(0x10BAF)]: 100,
    [String.fromCodePoint(0x10BAE)]: 20,
    [String.fromCodePoint(0x10BAD)]: 10,
    [String.fromCodePoint(0x10BAC)]: 4,
    [String.fromCodePoint(0x10BAB)]: 3,
    [String.fromCodePoint(0x10BAA)]: 2,
    [String.fromCodePoint(0x10BA9)]: 1
}
