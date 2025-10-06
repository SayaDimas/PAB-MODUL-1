console.log("------ Variables ------");

// Var
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// Var (fungsi)
var j;
function looping() {
    for (j = 0; j < 5; j++) {
        console.log(j);
    }
}
looping();
console.log(j);

// Let
for (let k = 0; k < 5; k++) {
    console.log(k);
}
// console.log(k); // akan error kalau diaktifkan

// Let dengan scope berbeda
for (let l = 0; l < 5; l++) {
    console.log(l);
}
if (true) {
    let l = 100;
    console.log("l =", l);
}

// Const
const phi = 3.14;
console.log(phi);
