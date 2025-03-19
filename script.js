function convert() {
    let num = document.getElementById("input").value;
    const romanValues = {
        X̅I̅V̅L̅D̅C̅M̅: 999999999999999,
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