const htmlTag = document.querySelector("html");
const res = document.querySelector("#resultado");
const input = document.querySelector("#input");

const maxRoman = 3999999, maxEtrus = 499, maxAttic  = 99999;

let oper = 1;

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
    const navButtons = document.getElementsByClassName("nav-btn");
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].style.backgroundColor = 'transparent';
        navButtons[i].style.color = 'ivory';
    }

    switch (oper) {
        case 0:
            const romanElement = document.getElementById("roman");
            romanElement.style.backgroundColor = 'ivory';
            romanElement.style.color = 'black';
            break;

        case 1:
            const etrusElement = document.getElementById("etrus");
            etrusElement.style.backgroundColor = 'ivory';
            etrusElement.style.color = 'black';
            break;

        case 2:
            const atticElement = document.getElementById("attic");
            atticElement.style.backgroundColor = 'ivory';
            atticElement.style.color = 'black';
            break;

        default:
            break;
    }

    convert();
}

function convert() {
    let inpVal = input.value;
    switch (oper) {
        case 0:
            res.style.fontFamily = "'Times New Roman', Times, serif;";
            intRoman(inpVal);
            break;
        case 1:
            res.style.fontFamily = '"Noto Sans Old Italic", sans-serif';
            intEtrus(inpVal);
            break;
        case 2:
            res.style.fontFamily = "'Quivera', sans-serif";
            intAttic(inpVal);
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
        res.innerHTML = etrus;
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
