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

var account = bankAccount('Johnny');

window.addEventListener('load', function () {
    'use strict';

    var withdrawBtn = $('withdrawal');
    var depositBtn = $('deposit');
    
    depositBtn.addEventListener('click')
 
    withdrawBtn.addEventListener('click', function(){
       var withdraw = window.prompt('Enter amount you would like to withdraw:');
        withdraw = (+withdraw);
        
//        console.log(typeof withdraw);
//        if(typeof withdraw !== 'number'){
//            window.alert('Enter a number!');
//            return false;
//        }
        account.withdrawal(withdraw);
    });
    
    

});
