let side = +prompt(`Введіть довжину однієї зі сторін в см`);
console.log(`Сторона квадрата: ${side}`);

let perimeter = side * 4;
perimeter =Math.round(perimeter *10) /10;
console.log(`Периметр дорівнює: ${perimeter} см2`);
alert(`Периметр дорівнює: ${perimeter} см2`)

