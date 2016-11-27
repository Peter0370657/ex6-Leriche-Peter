var accounts = [
    {name: 'Peter', balance: 90},
    {name: 'Tom', balance: 0}
];



function createaccount (naam, bedrag){
    var account= {};
    account.name= naam;
    account.balance= bedrag;
    accounts.push(account);
};

function deposit (naam, bedrag){
    if ( typeof bedrag === 'number'){
        for (i =0; i<accounts.length; i++){
            if (accounts[i].name === naam){
                accounts[i].balance += bedrag;
                console.log("Er is €"+bedrag+" op je rekening gezet.");
                break
            }
        }
    }
    else {
        console.log("Nummer niet geldig, probeer opnieuw");
    }
}


function withdraw (naam, bedrag){
    if ( typeof bedrag === 'number'){
        for (i =0; i<accounts.length; i++){
            if (accounts[i].name === naam){
                if(accounts[i].balance > bedrag){
                accounts[i].balance -= bedrag;
                console.log("Er is €"+bedrag+" van je rekening gehaald.");
                }
                else{
                    console.log("saldo ontoereikend");
                }
                break
            }
            
        }
    }
    else {
        console.log("geef een geldig nummer");
    }
}


function getBalance (){
    return function (naam){
        for(i = 0; i<accounts.length; i++){
            if(accounts[i].name === naam){
              console.log("De balans van " + accounts[i].name +" = " + accounts[i].balance);
            break;  
            }
        }
    }
}




var balance = getBalance();
balance('Peter');


