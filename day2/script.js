fetch('./input.txt').then(r => r.text()).then(
    (d) => {
        d = d.split(/\n/g).map(x => x = x.split(" "));
        let t1 = 0, t2 = 0;
        d.map(x => {
            let a = x[0].charAt(0).charCodeAt(0) - 65;
            let b = x[1].charAt(0).charCodeAt(0) - (65 + 23);
            let c = b * 3;
            t1 += (((b * 4) + ((4 - a) * 3)) % 9) + 1;
            t2 += ((a + b + 2) % 3) + 1 + c;
        }
        );
        console.log("scorepart1:" + t1);
        console.log("scorepart2:" + t2);
        document.body.innerHTML += t1 + "<br>" + t2;
    }
)