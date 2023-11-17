let lenght = +prompt(`Введіть довжину ребра куба в см`);
console.log(`Довжина ребра куба: ${lenght} в см`);

let volume = lenght ** 3;
volume = Math.round(volume *10) /10;
console.log(`Об'єм куба: ${volume} см3`)
alert(`Об'єм куба: ${volume} см3`)

let area = lenght ** 2;
area = Math.round(area *10) /10;
console.log(`Площа бокової поверхні куба: ${area} см2`)
alert(`Площа бокової поверхні куба: ${area} см2`)

