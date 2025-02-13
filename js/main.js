// dice simulator 

let dice = document.querySelector(".dice")
let roll_dice = document.querySelector(".roll_dice")
let result = document.querySelector(".result")
let diceFases = ['9856','9857' ,'9858','9859','9860',"9861"]

function getDiceFace(){
   let randDiceNumber = Math.floor(Math.random() * 6)
   bigDice(`&#${diceFases[randDiceNumber]};`)
   smallDice(`&#${diceFases[randDiceNumber]};`)

}

function bigDice(d){
    dice.innerHTML = d
}

roll_dice.addEventListener("click" , (e) =>{
    dice.classList.add("roll")
    
    setTimeout(() => {
        dice.classList.remove("roll")
        getDiceFace()
    }, 1000);
})

let rollNum = 1
eval()

function smallDice(diceFase){
        let res = document.createElement("div")
        res.className = "res"
    
        let resP = document.createElement("p")
        resP.appendChild(document.createTextNode("Roll " + rollNum))
        rollNum++
    
        res.appendChild(resP)
    
        let small_dice = document.createElement("div")
        small_dice.className = "small_dice"
    
        small_dice.innerHTML = diceFase
        res.appendChild(small_dice)
        result.appendChild(res)

}
