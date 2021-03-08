var  customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName 
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    console.log(bestCustomer);
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    console.log(bestCustomer);
}

const leastFavoriteCustomer = 'still bob';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'now bob'
    console.log(leastFavoriteCustomer);
}