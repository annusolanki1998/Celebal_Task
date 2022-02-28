

function compareWithTriplets(a, b) {

    let Score1 = 0;
    let Score2 = 0;
    
    a.forEach((x,i)=>{
        if (x>b[i]) {
            Score1++;
        } else if (x<b[i]) {
            Score2++;
        }
    });
    
    return [Score1, Score2];
    
    }
    console.log(compareWithTriplets([3,4,5],[5,4,3]));


