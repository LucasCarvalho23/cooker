export default class Cooker {
  constructor() {
    this.brand = "Bertazzoni";

    document.querySelector("#brand-id").innerHTML = `${this.brand}`

    // Oven
    document.querySelector(".main-container-class").style.backgroundColor =
      "rgb(250, 234, 218)";
    document.querySelector(".main-container-class").style.width = "400px";
    document.querySelector(".main-container-class").style.height = "505px";

    // Glass Door
    document.querySelector(".container-oven-class").style.width = "300px";
    document.querySelector(".container-oven-class").style.height = "75px";
    document.querySelector(".container-oven-class").style.margin = "auto";
    document.querySelector(".container-oven-class").style.marginBottom = "5px";

    // Lighter
    document.querySelector("#stove01-id").style.backgroundColor =
      "rgb(142, 189, 250)";
    document.querySelector("#stove02-id").style.backgroundColor =
      "rgb(142, 155, 250)";
    document.querySelector("#stove03-id").style.backgroundColor =
      "rgb(142, 121, 250)";
    document.querySelector("#stove04-id").style.backgroundColor =
      "rgb(142, 87, 250)";
    document.querySelector("#lighterOven-id").style.backgroundColor =
      "rgb(142, 223, 250)";

    // Electricity
    this.buttonTurnOn = document.querySelector("#buttonTurnOn-id");
    this.spanTurnOn = document.querySelector("#spanTurnOn-id");
    this.electricity = false;

    // Turn On and Turn Off the electricity
    this.buttonTurnOn.addEventListener("click", () => {
      this.turnOn(this.electricity);
    });

    //Oven
    this.lighterOven = document.querySelector("#lighterOven-id");
    this.spanLighterOven = document.querySelector("#spanLighterOven-id");
    this.spanLighterButton = document.querySelector("#spanLighterButton-id");
    this.lighterOvenTurnOn = false;

    // Turn On and Turn Off the oven
    this.lighterOven.addEventListener("click", () => {
      if (this.lighterOvenTurnOn === false) {
        this.turnOnOven(
          this.electricity,
          this.spanLighterOven,
          this.spanLighterButton
        );
        this.lighterOvenTurnOn = true;
      } else {
        this.turnOffOven(this.spanLighterOven, this.spanLighterButton);
        this.lighterOvenTurnOn = false;
      }
    });

    // Light Oven
    this.turnLight = document.querySelector("#turnLight-id");
    this.spanturnLight = document.querySelector("#spanturnLight-id");
    this.spanturnLightButton = document.querySelector(
      "#spanturnLightButton-id"
    );
    this.lightOvenTurnOn = false;

    // Turn On and Turn Off the light of the oven
    this.turnLight.addEventListener("click", () => {
      if (this.lightOvenTurnOn === false) {
        this.turnOnOven(
          this.electricity,
          this.spanturnLight,
          this.spanturnLightButton
        );
        this.turnOnLight(this.electricity);
        this.lightOvenTurnOn = true;
      } else {
        this.turnOffOven(this.spanturnLight, this.spanturnLightButton);
        this.lightOvenTurnOn = false;
      }
    });

    // Stove
    this.stoveAction = function (element) {
      element.addEventListener("click", (e) => {
        let idButton = e.target.id.replace(/[^0-9]/g, ""); // only numbers
        this.stoveInfo = document.querySelector(`#stove${idButton}-id`);
        this.stoveSpan = document.querySelector(`#stove${idButton}Span-id`);
        if (this.stoveOver === false) {
          this.turnOnOven(this.electricity, this.stoveSpan, this.stoveInfo);
          if (this.electricity === true) {
            this.stoveOver = true;
          }
        } else {
          this.turnOffOven(this.stoveSpan, this.stoveInfo);
          this.stoveOver = false;
        }
      });
    };

    this.stoveInput = document.querySelectorAll(".stove-button-class");
    this.stoveInput.forEach((element) => {
      this.stoveAction(element);
    });
  }

  /* 
    FUNCTIONS
  */

  // Electricity
  turnOn(value) {
    if (value === false) {
      this.spanTurnOn.innerHTML = "Desligar";
      this.buttonTurnOn.value = "Turn Off";
      this.electricity = true;
    } else if (value === true) {
      this.spanTurnOn.innerHTML = "Ligar";
      this.buttonTurnOn.value = "Turn On";
      this.electricity = false;
      document.querySelector(".container-oven-class").style.backgroundColor =
        "rgb(124, 185, 206)";
      this.turnOffOven(this.spanturnLight, this.spanturnLightButton);
      this.lightOvenTurnOn = false;
    }
  }

  electricityTest() {
    if (this.electricity === false) {
      alert("Ligue a eletricidade");
    }
  }

  // Factory
  turnOnOven(electricityValue, spanOutValue, spanInvalue) {
    this.electricityTest();

    if (electricityValue === true) {
      spanOutValue.innerHTML = "Aceso";
      spanInvalue.innerHTML = "Apagar";
    }
  }

  turnOffOven(spanOutValue, spanInvalue) {
    spanOutValue.innerHTML = "Apagado";
    spanInvalue.innerHTML = "Acender";
  }

  turnOnLight(value) {
    this.electricityTest();

    if (value === true) {
      document.querySelector(".container-oven-class").style.backgroundColor =
        "rgba(173, 216, 230, 0.541)";
    }
  }
}

const cooker = new Cooker();
