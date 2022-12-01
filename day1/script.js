fetch('./input.txt').then(r => r.text()).then((d) => {d = d.split(/\n\n/g).map(a => a = a.split(/\n/g).reduce((a, c) => a + Number(c), 0)).sort((a, b) => b - a);
    document.body.innerHTML += d[0] + "<br>" + d.slice(0, 3).reduce((a, c) => a + Number(c), 0);
})