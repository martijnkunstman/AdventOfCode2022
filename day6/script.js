let result1 = 4;
let result2 = 14;

function removeDuplicate(string)
{
   return string.split('')
    .filter(function(item, pos, self)
    {
      return self.indexOf(item) == pos;
    }
   ).join('');
}

fetch('./input.txt').then(r => r.text()).then(
    s => {
        while (removeDuplicate(s.substring(result1-4, result1)).length != 4)
        {
            result1++;
        }
        while (removeDuplicate(s.substring(result2-14, result2)).length != 14)
        {
            result2++;
        }
        console.log(result1 + " - " + result2);
        document.body.innerHTML += result1 + "<br>" + result2;
    }
)