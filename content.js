// task 1

let user = {
  name: "John",
  surname: "Smith",
  email: "mail@mail.com",
  password: "password",
  numberPhone: 98000000,
};

let adress = {
  city: "Kyiv",
  street: "firstAvaneu",
  house: 37,
  flat: 2,
};

// task 2

let sayHi = function () {
  alert("Доброго дня");
};

alert(sayHi.name, surname); // sayHi (є ім’я!)

// task 3
// універсальна функція
function printProperties(obj) {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
}
// те що мені потрібно вивести
printProperties(user);

printProperties(adress);

//task 4

let car = {
  color: "grey",
  model: "mercedes",
  brand: "amg",
  engine: 2.2,
  seats: 5,
  speed: 0,
  MaxSpeed: 250,

  accelerate: function (SpeedPerHour) {
    if (!Number.isInteger(SpeedPerHour) || SpeedPerHour < 0) {
      console.log(
        "Будь ласка, введіть ціле додатне число для збільшення швидкості."
      );
      return;
    }

    if (this.speed + SpeedPerHour > 250) {
      this.speed = this.MaxSpeed;
      console.log("Швидкість підвищена" + this.MaxSpeed);
    } else {
      this.speed += SpeedPerHour;
      console.log("Швидкість" + this.speed);
    }
  },

  deaccelerate: function (slowDown) {
    if (!Number.isInteger(slowDown) || slowDown < 0) {
      console.log(
        "Будь ласка, введіть ціле додатне число для збільшення швидкості."
      );
      return;
    }

    if (this.speed - slowDown < 0) {
      console.log("Машина зупинилась");
    } else {
      this.speed -= slowDown;
      console.log("Нова швидкість" + this.speed);
    }
  },

  stop: function () {
    this.speed = 0;
    console.log("Машина зупинилась.");
  },
};



//task 5

function Car (color, model, brand, engine, seats, speed, MaxSpeed) {
 this.color = color;
  this.model = model;
  this.brand = brand;
  this.engine = engine;
  this.seats = seats;
  this.speed = speed;
  this.MaxSpeed = MaxSpeed;

  accelerate: function (SpeedPerHour) {
    if (!Number.isInteger(SpeedPerHour) || SpeedPerHour < 0) {
      console.log(
        "Будь ласка, введіть ціле додатне число для збільшення швидкості."
      );
      return;
    }

    if (this.speed + SpeedPerHour > 250) {
      this.speed = this.MaxSpeed;
      console.log("Швидкість підвищена" + this.MaxSpeed);
    } else {
      this.speed += SpeedPerHour;
      console.log("Швидкість" + this.speed);
    }
  },

  deaccelerate: function (slowDown) {
    if (!Number.isInteger(slowDown) || slowDown < 0) {
      console.log(
        "Будь ласка, введіть ціле додатне число для збільшення швидкості."
      );
      return;
    }

    if (this.speed - slowDown < 0) {
      console.log("Машина зупинилась");
    } else {
      this.speed -= slowDown;
      console.log("Нова швидкість" + this.speed);
    }
  },

  stop: function () {
    this.speed = 0;
    console.log("Машина зупинилась.");
  },

  let car1 = new Car("red", "Model S", "Tesla", 2.5, 5, 200);
  let car2 = new Car("blue", "Mustang", "Ford", 4.0, 4, 250);
  let car3 = new Car("black", "Civic", "Honda", 1.8, 5, 180);

}