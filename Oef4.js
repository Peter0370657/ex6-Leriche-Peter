var accounts = [
    {name: 'Peter', balance: 90},
    {name: 'Tom', balance: 0}
];

var Account = function(naam, balans){
    this.name = naam;
    this.balance = balans;
}

Account.prototype = {
    deposit: function(bedrag){
        if ( typeof bedrag === 'number'){
            this.balance +=bedrag;
        }
        else {
            console.log("Geen geldig nummer ingegeven.");
        }
    },

    withdraw: function(bedrag){
        if ( typeof bedrag === 'number'){
            if (this.balance > bedrag){
                this.balance -= bedrag;
            } 
         else {
               console.log("Saldo ontoereikend");
            }
        }
        else {
            console.log("Geen geldig nummer ingegeven.");
        }
    }
}

function getBalance (){
     
     return function (naam){
       for(i = 0; i<accounts.length; i++){
        if(accounts[i].name === naam){
            console.log("De balans van " + accounts[i].name +" is €" + accounts[i].balance);
            break;  }
       }
     }
}

function maakAccountVar(Accountvar){
    accounts.push(Accountvar);
}
