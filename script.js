const htmlTag = document.querySelector("html");
const res = document.querySelector("#resultado");
const input = document.querySelector("#input");
const ajuda = document.getElementById("ajuda");

const maxValues = [999999, 19999, 9999999, 499, 499, 3999999];
const buttonIDs = ["attic", "caros", "egypt", "etrus", "psalt","roman"]
const ajudas = [
    "https://en.wikipedia.org/wiki/Attic_numerals#The_system",
    "https://en.wikipedia.org/wiki/kharosthi#Numerals",
    "https://en.wikipedia.org/wiki/Egyptian_numerals#Digits_and_numbers",
    "https://en.wikipedia.org/wiki/Etruscan_numerals",
    "https://en.wikipedia.org/wiki/Psalter_Pahlavi#Numbers",
    "https://en.wikipedia.org/wiki/Roman_numerals",
]

const bgImages = [
    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/A_City_of_Ancient_Greece_by_William_Linton.jpg/960px-A_City_of_Ancient_Greece_by_William_Linton.jpg?20230606183934")',
    'url("https://upload.wikimedia.org/wikipedia/commons/e/e2/Across_the_Pool_to_the_Golden_Temple_of_Amritsar_by_Edwin_Lord_Weeks.jpg")',
    'url("https://cdn2.oceansbridge.com/2018/06/22173929/Egyptian-Landscape-with-the-Pyramids-Georg-Macco-Oil-Painting.jpg")',
    'url("https://blogs.unimelb.edu.au/shaps-research/files/2024/03/Hubert-Robert-Ancient-ruins-as-baths-1798-1466a6123e0eab63-1050x591.png")',
    'url("https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/26/thumbs/800x531/293777.jpg")',
    'url("https://www.dailyartmagazine.com/wp-content/uploads/2022/01/Cole_Thomas_The_Course_of_Empire_Destruction_1836-scaled.jpeg")',
]

let currentValues = {};

htmlTag.style.backgroundImage = 'url("https://www.dailyartmagazine.com/wp-content/uploads/2022/01/Cole_Thomas_The_Course_of_Empire_Destruction_1836-scaled.jpeg")';

function cores(i) {
    
    switch (i) {
        case 1:
            res.style.boxShadow = 'none';
            res.style.borderColor = 'ivory';
            ajuda.style.boxShadow = 'none';
            ajuda.style.borderColor = 'ivory';
            input.style.boxShadow = 'none';
            input.style.borderColor = 'ivory';
            break;
        case 2:
            res.style.boxShadow = '0px 0px 5px red';
            input.style.boxShadow = '0px 0px 5px red';
            res.style.borderColor = 'red';
            input.style.borderColor = 'red';
            res.style.visibility = "visible";
            res.style.fontFamily = '"Quivira", sans-serif';
            ajuda.style.boxShadow = '0px 0px 5px red';
            ajuda.style.borderColor = 'red';
            break;
        default:
            break;
    }
}

function changeNav() {
    let currentButton;
    const navButtons = document.getElementsByClassName("nav-btn");
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].style.backgroundColor = 'transparent';
        navButtons[i].style.color = 'ivory';
    }

    
    res.style.fontFamily = '"Quivira", sans-serif';
    res.style.fontSize = 'x-large';
    res.style.padding = '2vh 2vw';
    res.style.lineHeight = 'normal';
    res.style.letterSpacing = 'normal';
    input.placeholder = 'Insira um número de 1 a '+ maxValues[oper];
    
    ajuda.href = ajudas[oper]

    switch (oper) {
        case 2:
            res.style.fontFamily = '"Noto Sans Psalter Pahlavi", sans-serif';
            break;
        default:
            break;
    }

    htmlTag.style.backgroundImage = bgImages[oper];
    currentValues = conversionTable[oper];
    currentButton = document.getElementById(buttonIDs[oper]);
    currentButton.style.backgroundColor = 'ivory';
    currentButton.style.color = 'black';
    convert();
}

function reverseString(txt) {
    return(_.split(txt, '').reverse().join(''));
}

function convert() {
    let inpVal = input.value;
    let conversion = '';

    cores(1);

    if (inpVal > 0 && inpVal <= maxValues[oper]) {
        for (let key in currentValues) {
            while (inpVal >= currentValues[key]) {
                conversion += key;
                inpVal -= currentValues[key];
            }
            if (conversion.includes(key) && oper == 2) conversion += '\n';
        }
        switch (oper) {
            case 2:
                displayType(1);
                res.innerHTML = '<pre>'+conversion+'</pre>';
                break;
            case 3:
                res.innerHTML = reverseString(conversion);
                break;
            default:
                displayType(0)
                res.innerHTML = conversion;
                break;
        }
        res.style.visibility = "visible";
    }
    
    else if ((inpVal <= 0 || inpVal > maxValues[oper]) && inpVal !='') {
        displayType(0)
        cores(2);
        res.innerHTML = "INSIRA UM NÚMERO DE 1 " + maxValues[oper];
    }
    
    else if (conversion == ''){
        cores(1);
        res.style.visibility = "hidden";
    }   
}

function displayType(i) {
    switch (i) {
        case 0:
            res.style.fontSize = 'x-large';
            res.style.padding = '2vh 2vw';
            res.style.lineHeight = 'normal';
            res.style.letterSpacing = 'normal';
            break;
        
        case 1:
            res.style.fontSize = 'x-large';
            res.style.padding = '0vh 2vw 0vh';
            res.style.lineHeight = '1';
            res.style.letterSpacing = '10px';
            res.style.visibility = "visible";
            break;
        default:
            break;
    }
}

const conversionTable = [
    atticValues = {[String.fromCodePoint(0x10147)]: 50000, 'Μ': 10000, [String.fromCodePoint(0x10146)]: 5000, 'Χ': 1000, [String.fromCodePoint(0x10145)]: 500, 'Η': 100, [String.fromCodePoint(0x10144)]: 50, 'Δ': 10, 'Π': 5, 'Ι': 1},
    carosValues = {"𐩄𐩇": 10000, "𐩃𐩃𐩀𐩇": 9000, "𐩃𐩃𐩇": 8000, "𐩃𐩂𐩇": 7000, "𐩃𐩁𐩇": 6000, "𐩃𐩀𐩇": 5000, "𐩃𐩇": 4000, "𐩂𐩇": 3000, "𐩁𐩇": 2000, "𐩇": 1000, "𐩃𐩃𐩀𐩆": 900, "𐩃𐩃𐩆": 800, "𐩃𐩂𐩆": 700, "𐩃𐩁𐩆": 600, "𐩃𐩀𐩆": 500, "𐩃𐩆": 400, "𐩂𐩆": 300, "𐩁𐩆": 200, "𐩆": 100, "𐩅": 20, "𐩄": 10, "𐩃": 4, "𐩂": 3, "𐩁": 2, "𐩀": 1},
    egyptValues = {[String.fromCodePoint(0x13067)]: 1000000, [String.fromCodePoint(0x13190)]: 100000, [String.fromCodePoint(0x130AD)]: 10000, [String.fromCodePoint(0x131BC)]: 1000, [String.fromCodePoint(0x13362)]: 100, [String.fromCodePoint(0x13386)]: 10, [String.fromCodePoint(0x133E4)]: 1},
    etrusValues = {[String.fromCodePoint(0x1031F)]: 100, '𐌣': 50, '𐌢': 10, '𐌡': 5, '𐌠': 1},
    psaltValues = {[String.fromCodePoint(0x10BAF)]: 100, [String.fromCodePoint(0x10BAE)]: 20, [String.fromCodePoint(0x10BAD)]: 10, [String.fromCodePoint(0x10BAC)]: 4, [String.fromCodePoint(0x10BAB)]: 3, [String.fromCodePoint(0x10BAA)]: 2, [String.fromCodePoint(0x10BA9)]: 1},
    romanValues = {M̅: 1000000, C̅M̅: 900000, D̅: 500000, C̅D̅: 400000, C̅: 100000, X̅C̅: 90000, L̅: 50000, X̅L̅: 40000, X̅: 10000, I̅X̅: 9000, V̅I̅I̅I̅: 8000, V̅I̅I̅: 7000, V̅I̅: 6000, V̅: 5000, I̅V̅: 4000, M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}
]