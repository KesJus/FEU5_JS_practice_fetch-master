Pratimas su Fetch GET ir POST
BASE URL = https://robust-safe-crafter.glitch.me/

Sukuriame du puslapius (index.html ir add.html) - CSS frameworką naudoti galima, tačiau rekomenduotina daryti su custom CSS.

index.html:

Šis puslapis atsisiųs skelbimus iš API ir juos atvaizduos kortelėse. Filter funkcionalumas nėra privalaomas, tačiau stipresniems studentams - rekomenduojamas (t.y. paspaudus ant mygtuko turi filtruoti NT pagal konkretų miestą).

add.html:

Suvedus informaciją į laukelius, juos turi POSTint į API.

Duomenų formatas:

```javascript
{
  image: string,
  city: string,
  price: number,
  description: string
}
```
