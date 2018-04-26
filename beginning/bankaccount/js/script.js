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

    var balanceDisplay = $('display-balance');

    depositBtn.addEventListener('click', function () {
        var deposit = window.prompt('Enter deposit amount:');
        deposit = parseFloat(deposit);

        //DEPOSIT VALIDATION
        if (typeof deposit !== 'number' || isNaN(deposit) || deposit < 0) {
            window.alert('Enter a valid number!');
            return false;
        }

        account.deposit(deposit);

        var balance = account.getBalance().toFixed(2);

        //IF BALANCE IS LESS THAN ZERO, COLOR IS SET TO RED
        //ELSE COLOR IS GREEN
        if (+balance < 0) {
            balanceDisplay.setAttribute('style', 'color: red');
        } else {
            balanceDisplay.setAttribute('style', 'color: green');
        }

        balanceDisplay.innerHTML = "$" + balance;
    });

    withdrawBtn.addEventListener('click', function () {
        var withdraw = window.prompt('Enter amount you would like to withdraw:');
        withdraw = parseFloat(withdraw);

        //WITHDRAW VALIDATION 
        if (typeof withdraw !== 'number' || isNaN(withdraw) || withdraw < 0) {
            window.alert('Enter a valid number!');
            return false;
        }

        account.withdrawal(withdraw);

        var balance = account.getBalance().toFixed(2);

        //IF BALANCE IS LESS THAN ZERO, COLOR IS SET TO RED
        //ELSE COLOR IS GREEN
        if (+balance < 0) {
            balanceDisplay.setAttribute('style', 'color: red');
        } else {
            balanceDisplay.setAttribute('style', 'color: green');
        }

        balanceDisplay.innerHTML = "$" + account.getBalance().toFixed(2);
    });



});
