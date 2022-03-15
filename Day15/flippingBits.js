function flipBits(num) {
    
    let arr=[];
    let str= num.toString(2);
    let zeros= 32-str.length;
    
    for(let i=0; i<zeros; i++){
        str= "0" + str;
    }
  
    for(let j=0; j<str.length; j++){
        if(str.charAt(j)=="0"){
            arr.push(1);
        }
        else{
            arr.push(0);
        }
    }

    let flipStr= arr.join("");
    let flipInt= parseInt(flipStr,2);
    return flipInt;
} 