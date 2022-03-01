

function minimumNumber(n, password) {
    let len = password.length;
    let specials = "!@#$%^&*()-+";
    let small = false, capital = false, numeric = false, special = false;
    for (let i = 0; i < len; i++) {
        if (password[i] >= 'a' && password[i] <= 'z') {
            return small = true;
        }
        else if (password[i] >= 'A' && password[i] <= 'Z') {
            return capital = true;
        }
        else if (password[i] >= '0' && password[i] <= '9') {
            return numeric = true;
        }
        else if (specials.find(password[i]) != String && Number) {
            return special = true;
        }
        let ans = 0;
        if (!small) ans++;
        if (!capital) ans++;
        if (!numeric) ans++;
        if (!special) ans++;
        if (len + ans < 6) ans += 6 - (len + ans);
    }
        return ans;


}

let x  = minimumNumber(7,"aavvddss")
console.log(x);
