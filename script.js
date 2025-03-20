let htmlTag = document.querySelector("html");

function setup() {
    htmlTag.style.backgroundImage = 'url("https://www.dailyartmagazine.com/wp-content/uploads/2022/01/Cole_Thomas_The_Course_of_Empire_Destruction_1836-scaled.jpeg")';
}

function convert() {
    let input = document.getElementById("input")
    let inpVal = input.value;
    let res = document.getElementById("resultado");
    let roman = '';

    res.style.boxShadow = 'none';
    input.style.boxShadow = '0px 0px 5px ivory';
    res.style.borderColor = 'ivory';
    input.style.borderColor = 'ivory';

    if (inpVal > 0 && inpVal <= 3999999) {
        for (let key in romanValues) {
            while (inpVal >= romanValues[key]) {
                roman += key;
                inpVal -= romanValues[key];
            }
        }
        res.style.visibility = "visible";
        res.innerHTML = roman;
    }

    
    else if (inpVal == "") {
        roman = '';
        res.style.visibility = "hidden";
    }
    
    else {
        res.innerHTML = "INSIRA UM NÚMERO DE 1 À 3999999";
        res.style.boxShadow = '0px 0px 5px red';
        input.style.boxShadow = '0px 0px 5px red';
        res.style.borderColor = 'red';
        input.style.borderColor = 'red';
    }
}

const romanValues = {
    X̅I̅V̅L̅D̅C̅M̅: 999999999999999,
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
    V̅ : 5000,
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

