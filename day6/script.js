function removeDuplicate(string) {
    return string.split('')
        .filter(function (item, pos, self) {
            return self.indexOf(item) == pos
        }
        ).join('')
}

function findAnswer(s, n)
{
    let m=n;
    while (removeDuplicate(s.substring(n - m, n)).length != m) { n++ }
    return n;
}

fetch('./input.txt').then(r => r.text()).then(
    s => {
        console.log(findAnswer(s, 4) + " - " + findAnswer(s, 14))
        document.body.innerHTML += findAnswer(s, 4) + "<br>" + findAnswer(s, 14)
    }
)