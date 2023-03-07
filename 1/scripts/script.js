var mercedes = {
  name: "Mercedes",
  model: "GL450",
  engine: "4.0",
  year: 2015,
  color: "black",
  hp: 300,
  forSale: true,
};
var bmw = {
  name: "BMW",
  model: "X6",
  engine: "3.0",
  year: 2018,
  color: "white",
  hp: 313,
  forSale: false,
};
var audi = {
  name: "Audi",
  model: "Q7",
  engine: "3.0",
  year: 2021,
  color: "blue",
  hp: 249,
  forSale: true,
};

var thisYear = 2023;
mercedes.carAge = thisYear - mercedes.year;
bmw.carAge = thisYear - bmw.year;
audi.carAge = thisYear - audi.year;

var names = mercedes.name + ", " + bmw.name + ", " + audi.name;
var averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;
var atLeastOneForSale =
  mercedes.forSale === true || bmw.forSale === true || audi.forSale === true;

if (atLeastOneForSale) {
  var saleCar = "хотя бы один автомобиль продаётся";
} else {
  var saleCar = "ни один автомобиль не продаётся";
}

var allYoungerThanFive =
  mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5;

if (allYoungerThanFive) {
  var answer = "Да";
} else {
  var answer = "Нет";
}

var atLeastOneHasLittleHp = mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250;

if (atLeastOneHasLittleHp) {
  var answerForse = "Да";
} else {
  var answerForse = "Нет";
}

alert("вопрос - 1: текущий год: " + thisYear);
alert(
  "вопрос - 2:" +
    " объект мерседес, возраст: " +
    mercedes.carAge +
    ";" +
    " объект бмв, возраст: " +
    bmw.carAge +
    ";" +
    " объект ауди, возраст: " +
    audi.carAge
);

alert("вопрос - 3: марки авто: " + names);
alert("вопрос - 4: средний возраст: " + averageAge);
alert("вопрос - 5: хотя бы один автомобиль продаётся? " + saleCar);
alert("вопрос - 6: все авто младше 5 лет? " + answer);
alert(
  "вопрос - 7: Хоть один автомобиль имеет менее 250 лошадиных сил? " +
    answerForse
);

//Part II

var car = audi;

if (car.name === "Mercedes" && car.model === "GL450") {
  alert("Мой любимый мерседес!");
} else {
  alert("Это - " + car.name + " " + car.model);
}

if (car.carAge === 0) {
  alert("Новый автомобиль");
} else if (car.carAge <= 3 && car.carAge > 0) {
  alert("Свежий автомобиль");
} else {
  alert("Лет этому авто: " + car.carAge);
}

var consumption =
  car.engine > 3 ? "Прожорливый автомобиль" : "Экономичный автомобиль";
alert(consumption);

switch (car.color) {
  case "black":
    var russianColor = "черный";
    break;
  case "silver":
    var russianColor = "серебристый";
    break;
  case "red":
    var russianColor = "красный";
    break;
  case "white":
    var russianColor = "белый";
    break;
  case "gray":
    var russianColor = "серый";
    break;
  case "blue":
    var russianColor = "синий";
    break;
  default:
    var russianColor = "Невозможно определить цвет автомобиля.";
    break;
}
alert(russianColor);

car = bmw;

if (car.name === "Mercedes" && car.model === "GL450") {
  alert("Мой любимый мерседес!");
} else {
  alert("Это - " + car.name + " " + car.model);
}

if (car.carAge === 0) {
  alert("Новый автомобиль");
} else if (car.carAge <= 3 && car.carAge > 0) {
  alert("Свежий автомобиль");
} else {
  alert("Лет этому авто: " + car.carAge);
}

var consumption =
  car.engine > 3 ? "Прожорливый автомобиль" : "Экономичный автомобиль";
alert(consumption);

switch (car.color) {
  case "black":
    var russianColor = "черный";
    break;
  case "silver":
    var russianColor = "серебристый";
    break;
  case "red":
    var russianColor = "красный";
    break;
  case "white":
    var russianColor = "белый";
    break;
  case "gray":
    var russianColor = "серый";
    break;
  case "blue":
    var russianColor = "синий";
    break;
  default:
    var russianColor = "Невозможно определить цвет автомобиля.";
    break;
}
alert(russianColor);
