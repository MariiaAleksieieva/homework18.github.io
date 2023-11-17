let leg1 = +prompt(`Введіть довжину 1 катета в см`);
console.log(`Довжина 1 катета: ${leg1} см`);

let leg2 = +prompt(`Введіть довжину 2 катета в см`);
console.log(`Довжина 2 катета: ${leg2} см`);

let hypotenuse = Math.sqrt(leg1 **2 + leg2 **2);
hypotenuse = Math.round(hypotenuse *100) /100;
console.log(`Гіпотенуза дорівнює: ${hypotenuse} см`)
alert(`Гіпотенуза дорівнює: ${hypotenuse} см`)
