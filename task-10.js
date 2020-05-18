// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

function countProps(argyment) {
  let counter = 0;
  for (let i in argyment) {
    counter++;
  }

  console.log("Всего свойств: " + counter);
}

countProps({});

countProps({ name: "Mango", age: 2 });

countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
