"use strict";
let employee = { id: 1,
    name: "abcd",
    retire: (date) => console.log(date) };
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    reuse: () => { }
};
let q = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}
greet(null);
//# sourceMappingURL=index.js.map