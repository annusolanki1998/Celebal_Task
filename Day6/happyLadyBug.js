function happyLadybugs(a) {
    let hash = {},
        underScore = false,
        unEqual = false;
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] === '_') {
            underScore = true;
            continue;
        }
        
        if(!hash[a[i]]) hash[a[i]] = 0;
        hash[a[i]]++;
    }
    
    if(!underScore) {
        for(let i = 1; i < a.length - 1; i++) {
            if( a[i - 1] !== a[i] && 
                a[i] !== a[i + 1]) return 'NO';
        }   
    }

    for(const [key, value] of Object.entries(hash)) {
        if(value === 1) return 'NO';
    }
    return 'YES';
} 
let x = happyLadybugs(5)
console.log(x);
