/*eslint-env browser*/

var $ = function (id) {
    'use strict';
    return window.document.getElementById(id);
};

function bankAccount(ownerName) {
    'use strict';
    var balance = 0;
    var owner = ownerName;

    return {
        withdrawal: function (withdrawAmount) {
            balance -= withdrawAmount;
        },
        deposit: function (depositAmount) {
            balance += depositAmount;
        },
        getBalance: function () {
            return balance;
        }
    };
}

var name = 'Johnny'
var account = bankAccount(name);

window.addEventListener('load', function () {
    'use strict';

    //BUTTON VARIABLES
    var withdrawBtn = $('withdrawal');
    var depositBtn = $('deposit');

    //DISPLAYS NAME 
    $('name').innerHTML = name;

    var balance = $('display-balance');

    depositBtn.addEventListener('click', function () {
        var deposit = window.prompt('Enter deposit amount:');
        deposit = parseFloat(deposit);
        
        //DEPOSIT VALIDATION
        if(typeof deposit !== 'number' || isNaN(deposit)){
            window.alert('Enter a number!');
            return false;
        }
        
        account.deposit(deposit);
        
        balance.innerHTML = "$" + account.getBalance().toFixed(2);
    });

    withdrawBtn.addEventListener('click', function () {
        var withdraw = window.prompt('Enter amount you would like to withdraw:');
        withdraw = parseFloat(withdraw);

        //WITHDRAW VALIDATION 
        if(typeof withdraw !== 'number' || isNaN(withdraw)){
            window.alert('Enter a number!');
            return false;
        }
        
        account.withdrawal(withdraw);
        balance.innerHTML = "$" + account.getBalance().toFixed(2);
    });



});
