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
                this.turnOnOven()
            } else {
                this.turnOffOven()
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
                this.turnOnLightOven()
            } else {
                this.turnOffLightOven()
            }
            
        })



// Stove

        this.stoveAction = function (element) {
            element.addEventListener("click", (e) => {
                let idButton = e.target.id.replace(/[^0-9]/g, ''); // only numbers
                this.stoveInfo = document.querySelector(`#stove${idButton}-id`)
                this.stoveSpan = document.querySelector(`#stove${idButton}Span-id`)
                if (this.stoveOver === false) {
                    this.turnOnStove()
                } else {
                    this.turnOffStove()
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



// Oven    
    turnOnOven() {

        this.electricityTest()

        if (this.electricity === true) {
            this.spanLighterOven.innerHTML = "Forno Ligado"
            this.spanLighterButton.innerHTML = "Desligar"
            this.lighterOvenTurnOn = true 
        } 
    }

    turnOffOven() {
        this.spanLighterOven.innerHTML = "Forno Desligado"
        this.spanLighterButton.innerHTML = "Ligar"
        this.lighterOvenTurnOn = false
    }



// Light Oven
    turnOnLightOven() {

        this.electricityTest()
        
        if (this.electricity === true) {
            this.spanturnLight.innerHTML = "Lâmpada Ligada"
            this.spanturnLightButton.innerHTML = "Desligar"
            this.lightOvenTurnOn = true 
        } 
    }

    turnOffLightOven() {
        this.spanturnLight.innerHTML = "Lâmpada Desligada"
        this.spanturnLightButton.innerHTML = "Ligar"
        this.lightOvenTurnOn = false 
    }



// Stove

    turnOnStove() {
        
        this.electricityTest()
        
        if (this.electricity === true) {
            this.stoveSpan.innerHTML = "Boca acesa"
            this.stoveInfo.innerHTML = "Apagar boca"
            this.stoveOver = true 
        }  
    }

    turnOffStove() {
        this.stoveSpan.innerHTML = "Boca apagada"
        this.stoveInfo.innerHTML = "Acender boca"
        this.stoveOver = false 
    }
    

}


const cooker = new Cooker()