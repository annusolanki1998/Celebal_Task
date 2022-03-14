 function ceaserCipher(s,k){
     let a = s.split('')
     for(let i=0;i<k;i++)
     {
         a.unshift(a.pop())
     }
     return a.toString()
 }
 let x = ceaserCipher('abcdefgh',3)
 console.log(x);