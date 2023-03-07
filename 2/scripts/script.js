let clients = [
  {
    firstName: "Александр",
    lastName: "Иванчук",
    date: "11-29-1990",
    phone: "8 (929) 988-90-09",
    amounts: [2546, 2098, 764, 7266],
  },
  {
    firstName: "Анатолий",
    lastName: "Стаценко",
    date: "02-12-1987",
    phone: null,
    amounts: [563, 8287, 889],
  },
  {
    firstName: "Марина",
    lastName: "Петрова",
    date: "07-26-1997",
    phone: "8 (899) 546-09-08",
    amounts: [6525, 837, 1283, 392],
  },
  {
    firstName: "Иван",
    lastName: "Караванов",
    date: "09-12-1999",
    phone: null,
    amounts: [7634, 283, 9823, 3902],
  },
  {
    firstName: "Оксана",
    lastName: "Абрамова",
    date: "01-24-2002",
    phone: "8 (952) 746-99-22",
    amounts: [342, 766, 362],
  },
];

//1 задание
/* 
var newClient = new Object();
newClient.firstName = prompt("Ваше имя?");
newClient.lastName = prompt("Ваша фамилия?");
newClient.date = prompt("Дата вашего рождения(мм-дд-гггг)?");
newClient.phone = prompt("Ваш номер телефона?");
newClient.amounts = [];

let ask;

do {
  ask = confirm("Добавить покупку для клиента " + newClient.firstName + " ?");
  if (ask == true) {
    alert("Товар добавлен в корзину!");
    //тут я немного выпендриваюсь. На сайтах такое бывает, в стиле "нам нужны ваши деньги, покупайте ещё!(зачёркнуто) Спасибо за покупку!/Приятных покупок!"
    newClient.amounts.push(777); //а тут не было указано конкретной цены товара - я взял первую попавшуюся цифру
  }
} while (ask);

clients.push(newClient);

console.log(clients);
 */

//2 часть

//2.1
const fullName = (i) => {
  return `${i.firstName} ${i.lastName}`;
};

//console.log(fullName(clients[0]));

//2.2
const getBirthday = (i) => {
  let birthdayDate = new Date(i.date);
  let todaysDate = new Date();
  birthdayDate.toLocaleString("ru-RU", { month: "long", day: "numeric" });
  if (
    birthdayDate.toLocaleString("ru-RU", { month: "long", day: "numeric" }) ==
    todaysDate.toLocaleString("ru-RU", { month: "long", day: "numeric" })
  ) {
    return (
      birthdayDate.toLocaleString("ru-RU", { month: "long", day: "numeric" }) +
      " (сегодня)"
    );
  } else {
    return birthdayDate.toLocaleString("ru-RU", {
      month: "long",
      day: "numeric",
    });
  }
};

//console.log(getBirthday(clients[0]));

//2.3
const getAllAmount = (arrays) => {
  let something = 0;
  for (let i = 0; i < arrays.amounts.length; i++) {
    something = something + arrays.amounts[i];
  }
  return something;
};

//console.log(getAllAmount(clients[0]));

//2.4

const getAverageAmoun = (arrays) => {
  let something = 0;
  for (let i = 0; i < arrays.amounts.length; i++) {
    something = something + arrays.amounts[i];
  }
  return (something / arrays.amounts.length).toFixed(1);
};

//console.log(getAverageAmoun(clients[0]));

//2.6

const showClients = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      "Клиент " +
        fullName(arr[i]) +
        " имеет среднюю сумму чека " +
        getAverageAmoun(arr[i]) +
        ". День рождения клиента: " +
        getBirthday(arr[i])
    );
  }
};

//2.7
//showClients(clients);

//2.8
/* try {
  console.log(showClients());
} catch (e) {
  console.log("Вызвана функция без параметров");
  console.log(e);
} */

//2.9
let bestClients = [
  {
    firstName: "Брэнд",
    lastName: "Питт",
    date: "11-29-1990",
    phone: "8 (929) 988-90-09",
    amounts: [764, 726446, 255546, 2098],
  },
  {
    firstName: "Ангелина",
    lastName: "Питтова",
    date: "02-12-1987",
    phone: null,
    amounts: [563, 8287, 889],
  },
];

//console.log(showClients(bestClients));

//2.10
//setTimeout(() => showClients(bestClients), 3000);

//2.11

const whoSpentMore = (arr) => {
  let maxim = 0;
  let point = {};
  for (let i = 0; i < arr.length; i++) {
    if (getAllAmount(arr[i]) > maxim) {
      maxim = getAllAmount(arr[i]);
      point = arr[i];
    }
  }
  console.log(
    `Больше всех потратил: ${fullName(point)}. Сумма покупок ${maxim} рублей.`
  );
};

//2.12
//whoSpentMore(clients);
//whoSpentMore(bestClients);
