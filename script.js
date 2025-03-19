function convert() {
    let num = document.getElementById("input").value;
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
    let roman = '';
    for (let key in romanValues) {
        while (num >= romanValues[key]) {
            roman += key;
            num -= romanValues[key];
        }
    }
    document.getElementById("resultado").innerHTML = roman;
}