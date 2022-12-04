fetch('./input.txt').then(r => r.text()).then(
    (d) => {
        d = d.split("\n");
        let scorepart1 = 0, scorepart2 = 0;
        d.map(
            (s, i) => {
                let array = s.split(",");
                let a1start = Number(array[0].split("-")[0]);
                let a1end = Number(array[0].split("-")[1]);
                let a2start = Number(array[1].split("-")[0]);
                let a2end = Number(array[1].split("-")[1]);
                if ((a1start <= a2start && a1end >= a2end)||(a2start <= a1start && a2end >= a1end)) {
                    scorepart1++;
                }           
                if ((a1end >= a2start)&&(a1start <= a2end)) {
                    scorepart2++;
                }
            }
        )
        console.log(scorepart1);
        console.log(scorepart2);
        document.body.innerHTML += scorepart1 + "<br>" + scorepart2;
    }
)