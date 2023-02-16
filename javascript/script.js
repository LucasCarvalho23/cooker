class Cooker {

    constructor() {
        
// Electricity
        this.buttonTurnOn = document.querySelector ("#buttonTurnOn-id")       
        this.spanTurnOn = document.querySelector ("#spanTurnOn-id")
        this.electricity = false
    
// Turn On and Turn Off the electricity
        this.buttonTurnOn.addEventListener("click", () => { 
            this.turnOn()
        })


//Oven
        this.lighterOven = document.querySelector ("#lighterOven-id")
        this.spanLighterOven = document.querySelector ("#spanLighterOven-id")
        this.lighterOvenTurnOn = false

// Turn On and Turn Off the oven
        this.lighterOven.addEventListener("click", () => { 
            if (this.lighterOvenTurnOn === false) {
                this.turnOnOven()
            } else {
                this.turnOffOven()
            }
        })

    }


/* 
    FUNCTIONS
*/


// Electricity
    turnOn() {
        if (this.electricity === false) {
            this.spanTurnOn.innerHTML = "Desligar"
            this.buttonTurnOn.value = "Turn Off"
            this.electricity = true
        } else if (this.electricity === true) {
            this.spanTurnOn.innerHTML = "Ligar"
            this.buttonTurnOn.value = "Turn On"
            this.electricity = false   
        }
    }


// Oven    
    turnOnOven() {
        if (this.electricity === false) {
            alert ("Ligue a eletricidade")
        } else if (this.electricity === true) {
            this.spanLighterOven.innerHTML = "Forno Ligado"
            this.lighterOvenTurnOn = true 
        } 
    }

    turnOffOven() {
        this.spanLighterOven.innerHTML = "Forno Desligado"
        this.lighterOvenTurnOn = false
    }

}


const cooker = new Cooker()