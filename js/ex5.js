let population = +prompt (`Введіть кількість жителів в державі`);
console.log (`Кількість жителів: ${population}`);

let territory = +prompt (`Введіть площу території держави в км2`);
console.log (`Територія держави ${territory}`);

let density = population / territory;
density = Math.round(density *100) /100;
console.log(`Густота населення: ${density} осіб/км2`);
alert(`Густота населення: ${density} осіб/км2`);