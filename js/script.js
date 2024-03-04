let name = prompt("Напишіть своє ім’я: ").trim();
let age = Number(prompt("Напишіть свій вік: "));
const smoke = confirm("Чи курите ви?");

if (name === "") {
  name = prompt("Помилка! Напишіть своє ім’я ще раз.").trim();
}

if (isNaN(age) || age === "" || age === null) {
  age = prompt("Помилка, неможливе значення віку. Напишіть свій вік ще раз.");
}

if (age > 105) {
  prompt("Помилка, неможливе значення віку. Напишіть свій вік ще раз.");
} else if (age < 12) {
  prompt("Помилка, неможливе значення віку. Напишіть свій вік ще раз.");
}

if (age < 18 && smoke === false) {
  alert(`Молодець ${name}! Гарний приклад для своїх однолітків`);
} else if (age < 18 && smoke === true) {
  alert(`${name}, а твої батьки знають про це?`);
} else if (age > 18 && smoke === false) {
  alert(`Супер ${name}! Мабуть ще й спортом займаєшся!`);
} else if (age > 18 && smoke === true) {
  alert(`Що ж ${name}, це твій вибір. Але я не радив би курити`);
}

console.log(name, age, smoke);
