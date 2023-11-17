let radius = +prompt(`Введіть радіус кола в см`);
console.log(`Радіус: ${radius} см`);

let circle = 2 * radius * 3.14;
circle = Math.round(circle *100) /100;
console.log(`Периметр кола: ${circle} см2`);
alert(`Периметр кола: ${circle} см2`);

let area = radius **2 *3.14;
area = Math.round(area *100) /100;
console.log(`Площа кола: ${area} см3`);
alert(`Площа кола: ${area} см3`);


