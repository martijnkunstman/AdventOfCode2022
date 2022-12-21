let data1 = {};

fetch('./input.txt').then(r => r.text()).then(
    s => {
        s.split('\r\n').map(i => {
            data1[i.split(": ")[0]] = i.split(": ")[1];
        })
        for (a = 0; a < 4; a++) {
            for (key in data1) {
                for (key2 in data1) {
                    data1[key] = data1[key].replace(key2, "(" + data1[key2] + ")");
                }
            }
        }
        console.log(eval(data1.root));
    }
)