function getMoneySpent(keyboard,driver,budget){
    let maxPrice= -1
    for(i=0;i<keyboard.length;i++){
        for(j=0;j<driver.length;j++){
            let res = keyboard[i]+driver[j]
            if(res<=budget){
                maxPrice = Math.max(res,maxPrice)
            }
        }
    }
     return maxPrice
}
let x =getMoneySpent([40,50,60],[5,8,12],60)
console.log(x);