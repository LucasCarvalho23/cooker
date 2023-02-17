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
        this.stove01 = document.querySelector ("#stove01-id")
        this.stove02 = document.querySelector ("#stove02-id")
        this.stove03 = document.querySelector ("#stove03-id")
        this.stove04 = document.querySelector ("#stove04-id")

        this.stove01Span = document.querySelector ("#stove01Span-id")
        this.stove02Span = document.querySelector ("#stove02Span-id")
        this.stove03Span = document.querySelector ("#stove03Span-id")
        this.stove04Span = document.querySelector ("#stove04Span-id")

        this.stoveOver1 = false
        this.stoveOver2 = false
        this.stoveOver3 = false
        this.stoveOver4 = false
        this.stove = 0

// Turn On and Turn Off the stove
        this.stove01.addEventListener("click", () => { 
            if (this.stoveOver === false) {
                this.stove = 1
                this.stoveSpan = this.stove01Span
                this.stoveInfo = this.stove01
                this.stoveOver = this.stoveOver1
                this.turnOnStove()
                this.stoveOver1 = this.stoveOver
            } else {
                this.stove = 1
                this.stoveSpan = this.stove01Span
                this.stoveInfo = this.stove01
                this.stoveOver = this.stoveOver1
                this.turnOffStove()
                this.stoveOver1 = this.stoveOver
                this.stove = 0
            }
        })

        this.stove02.addEventListener("click", () => { 
            if (this.stoveOver2 === false) {
                this.stove = 2
                this.stoveSpan = this.stove02Span
                this.stoveInfo = this.stove02
                this.stoveOver = this.stoveOver2
                this.turnOnStove()
                this.stoveOver2 = this.stoveOver
            } else {
                this.stove = 2
                this.stoveSpan = this.stove02Span
                this.stoveInfo = this.stove02
                this.stoveOver = this.stoveOver2
                this.turnOffStove()
                this.stoveOver2 = this.stoveOver
                this.stove = 0
            }
        })

        this.stove03.addEventListener("click", () => { 
            if (this.stoveOver3 === false) {
                this.stove = 3
                this.stoveSpan = this.stove03Span
                this.stoveInfo = this.stove03
                this.stoveOver = this.stoveOver3
                this.turnOnStove()
                this.stoveOver3 = this.stoveOver
            } else {
                this.stove = 3
                this.stoveSpan = this.stove03Span
                this.stoveInfo = this.stove03
                this.stoveOver = this.stoveOver3
                this.turnOffStove()
                this.stoveOver3 = this.stoveOver
                this.stove = 0
            }
        })

        this.stove04.addEventListener("click", () => { 
            if (this.stoveOver4 === false) {
                this.stove = 4
                this.stoveSpan = this.stove04Span
                this.stoveInfo = this.stove04
                this.stoveOver = this.stoveOver4
                this.turnOnStove()
                this.stoveOver4 = this.stoveOver
            } else {
                this.stove = 4
                this.stoveSpan = this.stove04Span
                this.stoveInfo = this.stove04
                this.stoveOver = this.stoveOver4
                this.turnOffStove()
                this.stoveOver4 = this.stoveOver
                this.stove = 0
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
        if (this.electricity === false) {
            alert ("Ligue a eletricidade")
        } else if (this.electricity === true) {
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
        if (this.electricity === false) {
            alert ("Ligue a eletricidade")
        } else if (this.electricity === true) {
            this.stoveSpan.innerHTML = "Boca "+this.stove+" acesa"
            this.stoveInfo.innerHTML = "Apagar Boca "+this.stove
            this.stoveOver = true 
        }  
    }

    turnOffStove() {
        this.stoveSpan.innerHTML = "Boca "+this.stove+" apagada"
        this.stoveInfo.innerHTML = "Acender Boca "+this.stove
        this.stoveOver = false 
    }

}


const cooker = new Cooker()