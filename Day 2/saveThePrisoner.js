
function saveThePrisoner(n, m, s) {
      let last = 0;
      last = (m + s - 1) % n;
      if (last === 0) {
        last = n;
      }
    return last;
  }
  let c = saveThePrisoner(5,2,1);
  
  console.log(c);