class Cooker {

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
                this.turnOnStove(lighterOvenTurnOn,this.spanLighterButton, this.spanLighterOven)
            } else {
                this.turnOnStove(this.spanLighterButton, this.spanLighterOven)
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
                this.turnOnStove(lightOvenTurnOn, this.spanturnLightButton, this.spanturnLight)
            } else {
                this.turnOnStove(this.spanturnLightButton, this.spanturnLight)
            }
            
        })



// Stove
        this.stoveAction = function (element) {
            element.addEventListener("click", (e) => {
                let idButton = e.target.id.replace(/[^0-9]/g, ''); // only numbers
                this.stoveInfo = document.querySelector(`#stove${idButton}-id`)
                this.stoveSpan = document.querySelector(`#stove${idButton}Span-id`)

                if (this.stoveOver === false) {
                    this.turnOnStove(this.stoveOver, this.stoveSpan, this.stoveInfo)
                 
                } else {
                    this.turnOffStove(this.stoveSpan, this.stoveInfo)
                    this.stove = 0
                }
            })
        }

        this.stoveInput = document.querySelectorAll('.stove-button-class');
        this.stoveInput.forEach(element => {
            this.stoveAction(element);
        });




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

        turnOnStove(electricity, stoveSpan, stoveInfo) {
            
            this.electricityTest()
            
            if (electricity === true) {
                this.stoveSpan_ = stoveSpan
                this.stoveInfo_ = stoveInfo
                this.stoveSpan_.innerHTML = "Boca acesa"
                this.stoveInfo_.innerHTML = "Apagar boca"
                this.stoveOver = true 
            }  
        }

        turnOffStove(stoveSpan, stoveInfo) {
            this.stoveSpan_ = stoveSpan
            this.stoveInfo_ = stoveInfo
            this.stoveSpan_.innerHTML = "Boca apagada"
            this.stoveInfo_.innerHTML = "Acender boca"
            this.stoveOver = false 
        }
        

    }
}


const cooker = new Cooker()