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
        this.numberStove = 4
        this.stoveInputs = []

        for (this.count = 1; this.count <= this.numberStove; this.count++) {
            this.stoveInput = document.querySelector ("#stove0"+this.count+"-id")
            this.stoveSpan = document.querySelector ("#stove0"+this.count+"Span-id")
            this.stoveOver = false
            this.stoveInputs = [this.stoveInput]
        
            this.stoveInput.addEventListener("click", () => { 
                if (this.stoveOver === false) {
                    this.stove = this.count
                    this.stoveSpan = this.stoveSpan
                    this.stoveInfo = this.stoveInput
                    this.stoveOver = this.stoveOver
                    this.turnOnStove()
                    this.stoveOver = this.stoveOver
                } else {
                    this.stove = this.count 
                    this.stoveSpan = this.stoveSpan
                    this.stoveInfo = this.stoveInput
                    this.stoveOver = this.stoveOver
                    this.turnOffStove()
                    this.stoveOver = this.stoveOver
                    this.stove = 0
                }
            })

            console.log (this.stoveInputs)
        }
        
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