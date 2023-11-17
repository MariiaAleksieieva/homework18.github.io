let volume = +prompt(`Введіть об'єм речовини в м3`);
console.log(`Об'єм речовини: ${volume} м3`);

let weight = +prompt(`Введіть масу речовини в кг`);
console.log(`Маса речовини: ${weight} кг`);

let density = weight / volume;
density = Math.round(density *100) /100;
console.log(`Щільність речовини: ${density} кг/м3`);
alert(`Щільність речовини: ${density} кг/м3`);