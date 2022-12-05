/*

Solution without if of switch statements...

A = X = 0
B = Y = 1
C = Z = 2

a = A || B || C
b = X || Y || Z
c = b * 3

part1 matrix : ((b * 4) + ((4 - a) * 3)) % 9 + 1;

A B C
3 7 2 X
0 4 8 Y
6 1 5 Z

part2 matrix : (a + b + 2) % 3 + c + 1

A B C
2 0 1 X
0 1 2 Y
1 2 0 Z

*/
let l2n = (letter, extra = 0) => {
    return letter.charAt(0).charCodeAt(0) - (65 + extra)
}
fetch('./input.txt').then(r => r.text()).then(
    d => {
        let t1 = 0, t2 = 0;
        d = d.split(/\n/g).map(x => x = x.split(" "));
        d.map(x => {
            t1 += (l2n(x[1],23) * 4 + (4 - l2n(x[0])) * 3) % 9 + 1;
            t2 += (l2n(x[0]) + l2n(x[1],23) + 2) % 3 + l2n(x[1],23)*3 +1;
        }
        );
        console.log("part1:" + t1 + " part2:" + t2);
        document.body.innerHTML += t1 + "<br>" + t2;
    }
)