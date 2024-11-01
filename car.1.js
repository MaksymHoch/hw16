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
};
