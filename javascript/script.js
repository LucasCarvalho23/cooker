export default class Cooker {

    constructor() {
        
// Electricity
        this.buttonTurnOn = document.querySelector ("#buttonTurnOn-id")       
        this.spanTurnOn = document.querySelector ("#spanTurnOn-id")
        this.electricity = false
    
// Turn On and Turn Off the electricity
        this.buttonTurnOn.addEventListener("click", () => { 
            this.turnOn(this.electricity)
        })



//Oven
        this.lighterOven = document.querySelector ("#lighterOven-id")
        this.spanLighterOven = document.querySelector ("#spanLighterOven-id")
        this.spanLighterButton = document.querySelector ("#spanLighterButton-id")
        this.lighterOvenTurnOn = false

// Turn On and Turn Off the oven
        this.lighterOven.addEventListener("click", () => { 
            if (this.lighterOvenTurnOn === false) {
                this.turnOnOven(this.electricity, this.spanLighterOven, this.spanLighterButton)
                this.lighterOvenTurnOn = true 
            } else {
                this.turnOffOven(this.spanLighterOven, this.spanLighterButton)
                this.lighterOvenTurnOn = false
            }
        })



// Light Oven
        this.turnLight = document.querySelector ("#turnLight-id")
        this.spanturnLight = document.querySelector ("#spanturnLight-id")
        this.spanturnLightButton = document.querySelector ("#spanturnLightButton-id")
        this.lightOvenTurnOn = false

// Turn On and Turn Off the light of the oven
        this.turnLight.addEventListener("click", () => { 
            if (this.lightOvenTurnOn === false) {
                this.turnOnOven(this.electricity, this.spanturnLight, this.spanturnLightButton)
                this.lightOvenTurnOn = true
            } else {
                this.turnOffOven(this.spanturnLight, this.spanturnLightButton)
                this.lightOvenTurnOn = false
            }
            
        })



// Stove

        this.stoveAction = function (element) {
            element.addEventListener("click", (e) => {
                let idButton = e.target.id.replace(/[^0-9]/g, ''); // only numbers
                this.stoveInfo = document.querySelector(`#stove${idButton}-id`)
                this.stoveSpan = document.querySelector(`#stove${idButton}Span-id`)
                if (this.stoveOver === false) {
                    this.turnOnOven(this.electricity, this.stoveSpan, this.stoveInfo)
                    if (this.electricity === true) {
                       this.stoveOver = true 
                    }
                } else {
                    this.turnOffOven(this.stoveSpan, this.stoveInfo)
                    this.stoveOver = false
                }
            })
        }

        this.stoveInput = document.querySelectorAll('.stove-button-class');
        this.stoveInput.forEach(element => {
            this.stoveAction(element);
        }); 
        
    }



/* 
    FUNCTIONS
*/


// Electricity
    turnOn(value) {
        if (value === false) {
            this.spanTurnOn.innerHTML = "Desligar"
            this.buttonTurnOn.value = "Turn Off"
            this.electricity = true
        } else if (value === true) {
            this.spanTurnOn.innerHTML = "Ligar"
            this.buttonTurnOn.value = "Turn On"
            this.electricity = false   
        }
    }

    electricityTest() {
        if (this.electricity === false) {
            alert ("Ligue a eletricidade")
        }
    }



// Factory    
    turnOnOven(electricityValue, spanOutValue, spanInvalue) {

        this.electricityTest()

        if (electricityValue === true) {
            spanOutValue.innerHTML = "Aceso"
            spanInvalue.innerHTML = "Apagar"
        } 
    }

    turnOffOven(spanOutValue, spanInvalue) {
        spanOutValue.innerHTML = "Apagado"
        spanInvalue.innerHTML = "Acender"
    }
    

}


const cooker = new Cooker()