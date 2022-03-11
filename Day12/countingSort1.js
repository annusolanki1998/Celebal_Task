function countingSort(s1) {
    var obj = new Array(100);
     obj.fill(0);
     for (var i = 0; i < s1.length; i++) {
         if (typeof obj[s1[i]] === 'undefined') {
             obj[s1[i]] = 1;
         } else {
             obj[s1[i]] = obj[s1[i]] + 1;
         }
     }
    return obj;
 }
 let s1 = [1,1,3,2,1]
 let x  = countingSort(s1)
 console.log(x);