const n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

if (n % 5 === 0) {
    console.log(n / 5);
} else if ((n-3) % 5 === 0 && n > 3) {
    console.log(parseInt((n - 3) / 5) + 1);
} else if ((n-6) % 5 === 0 && n > 6) {
    console.log(parseInt((n - 6) / 5) + 2);
} else if ((n-9) % 5 === 0 && n > 9) {
    console.log(parseInt((n - 9) / 5) + 3);
} else if ((n-12) % 5 === 0 && n > 12) {
    console.log(parseInt((n - 12) / 5) + 4);
} else if (n % 3 === 0) {
    console.log(parseInt(n / 3));
} else {
    console.log(-1);
}