// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
let user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

function getUser(obj) {
  obj.mood = "happy";
  obj.hobby = "skydiving";
  obj.premium = false;
  for (let value of Object.keys(user)) {
    console.log(value);
  }
  return Object.entries(obj);
}
console.log(getUser(user));
