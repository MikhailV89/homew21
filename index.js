card = [2, 3, 4, 5, 6, 7, 8, 9, 10];
cardPerson = ['J','Q','K','T'];
suitCard = ['clubs', 'spades', 'diamonds', 'hearts'];
picPerson = ['jack', 'queen', 'king'];
flesh = [];
fleshPerson = [];

for (i = 0; i < card.length; i++) {    
    
    for (j = 0; j < suitCard.length; j++) {        
        result = `<div class='cards'>
        <div class='card-inf'>${card[i]}<img src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'></div>
        <div class='card-inf'>${card[i]}<img src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'></div>
        </div>`;
        flesh.push(result);
    }    
}

for (c = 0; c < cardPerson.length; c++) {

    for (j = 0; j < suitCard.length; j++) {
        
        if (c === cardPerson.length -1 ) {
            resultPerson = `<div class='cards cardperson'>
            <div class='card-inf'>${cardPerson[c]}<img src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'></div>
            <img class='person' src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'>
            <div class='card-inf'>${cardPerson[c]}<img src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'></div>
            </div>`;
            fleshPerson.push(resultPerson);
        } else {

            for (k = 0; k < picPerson.length; k++) {
                
                if (c === k) {
                    resultPerson = `<div class='cards cardperson'>
                    <div class='card-inf'>${cardPerson[c]}<img src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'></div>
                    <img class='person' src='images/${picPerson[k]}.svg' alt='${picPerson[k]}'>
                    <div class='card-inf'>${cardPerson[c]}<img src='images/${suitCard[j]}.svg' alt='${suitCard[j]}'></div>
                    </div>`;            
                    fleshPerson.push(resultPerson);
                } 
            }        
        }
    }
}

document.write(`<div class='wrapper'>
${flesh.join('')}
${fleshPerson.join('')}
</div>`)