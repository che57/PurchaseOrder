const assert = require('chai').assert;
const app = require('../purchaseOrderF19.js');

var TestCase = class  {
    constructor(testInput, result){
        this.testInput = testInput;
        this.result = result;
    }
}

class ClientAccount{
    constructor(age, balance,creditScore)
    {
        this.age = age;
        this.balance = balance;
        this.creditScore = creditScore;
    }
}

class Product{
    constructor(name, q)
    {
        this.name = name;
        this.q = q;
    }
}

// testCases is used to hold the test case data.
let testCases = {
    clientAccount: null,
    product: null,
    inventory: null,
    inventoryThreshold: null,
    CCM: null
}

describe('App', () => {
    describe('OrderHandling', () => {
        describe('Statement Coverage', () => {
            it('Order handling returns rejected', () => {
                SetUpTestCases('invalid', 'invalid', 'invalid', testCases);
                assert.equal(app.orderHandling(
                        testCases.clientAccount, testCases.product, testCases.inventory,
                        testCases.inventoryThreshold, testCases.CCM
                    ),
                    'rejected'
                );
            });
            it('Order handling returns accepted', () => {
                SetUpTestCases('excellent', 'good', 'available', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'accepted'
                );
            });
            it('Order handling returns underReview', () => {
                SetUpTestCases('good', 'adverse', 'available', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'underReview'
                );
            });
            it('Order handling returns pending', () => {
                SetUpTestCases('acceptable', 'good', 'limited', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'pending'
                );
            });
        });

        describe('Branch Coverage', () => {
            it('Order handling returns rejected', () => {
                SetUpTestCases('invalid', 'invalid', 'invalid', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'rejected'
                );
            });
            it('Order handling returns accepted', () => {
                SetUpTestCases('excellent', 'good', 'available', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'accepted'
                );
            });
            it('Order handling returns underReview', () => {
                SetUpTestCases('good', 'adverse', 'available', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'underReview'
                );
            });
            it('Order handling returns pending', () => {
                SetUpTestCases('acceptable', 'good', 'limited', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'pending'
                );
            });
        });

        describe('Path Coverage', () => {
            it('Order handling returns rejected', () => {
                SetUpTestCases('invalid', 'good', 'limited', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'rejected'
                );
            });
            it('Order handling returns rejected', () => {
                SetUpTestCases('acceptable', 'invalid', 'limited', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'rejected'
                );
            });
            it('Order handling returns rejected', () => {
                SetUpTestCases('acceptable', 'good', 'invalid', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'rejected'
                );
            });
            it('Order handling returns rejected', () => {
                SetUpTestCases('acceptable', 'adverse', 'limited', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'rejected'
                );
            });
            it('Order handling returns rejected', () => {
                SetUpTestCases('acceptable', 'adverse', 'soldout', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'rejected'
                );
            });
            it('Order handling returns rejected', () => {
                SetUpTestCases('adverse', 'good', 'soldout', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'rejected'
                );
            });
            it('Order handling returns rejected', () => {
                SetUpTestCases('adverse', 'adverse', 'soldout', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'rejected'
                );
            });
            it('Order handling returns accepted', () => {
                SetUpTestCases('excellent', 'good', 'soldout', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'accepted'
                );
            });
            it('Order handling returns accepted', () => {
                SetUpTestCases('good', 'good', 'soldout', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'accepted'
                );
            });
            it('Order handling returns accepted', () => {
                SetUpTestCases('acceptable', 'good', 'available', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'accepted'
                );
            });
            it('Order handling returns underReview', () => {
                SetUpTestCases('good', 'adverse', 'soldout', testCases);
                assert.equal(app.orderHandling(
                    testCases.clientAccount, testCases.product, testCases.inventory,
                    testCases.inventoryThreshold, testCases.CCM
                    ),
                    'underReview'
                );
            });
        });
    })
});

// SetUpTestCases function is used to translate the test case data into the required data type for testing functions;
// The data is based on the lookup table in answer for Q3, assignment 3 doc.
function SetUpTestCases(accountStatus, creditStatus, productStatus, testCases) {
    var age, balance, creditScore, ccm, productQuantity, iT;

    switch (accountStatus) {
        case 'invalid':
            age = 200;
            balance = 50;
            break;
        case 'adverse':
            age = 17;
            balance = 50;
            break;
        case 'acceptable':
            age = 25;
            balance = 250;
            break;
        case 'good':
            age = 35;
            balance = 750;
            break;
        case 'excellent':
            age = 50;
            balance = 2000;
            break;
        default:
            console.log('Invalid accountStatus input!');
            return;
    }
    switch (creditStatus) {
        case 'invalid':
            ccm = 'default';
            creditScore = -1;
            break;
        case 'adverse':
            ccm = 'default';
            creditScore = 50;
            break;
        case 'good':
            ccm = 'restricted';
            creditScore = 75;
            break;
        default:
            console.log('Invalid creditStatus input!');
            return;
    }
    switch (productStatus) {
        case 'invalid':
            productQuantity = 100;
            iT = 50;
            break;
        case 'soldout':
            productQuantity = 0;
            iT = 50;
            break;
        case 'limited':
            productQuantity = 25;
            iT = 50;
            break;
        case 'available':
            productQuantity = 75;
            iT = 50;
            break;
        default:
            console.log('Invalid productStatus input!');
            return;
    }
    testCases.clientAccount = new ClientAccount(age, balance, creditScore);
    let product = new Product('product', productQuantity);
    testCases.product = product.name;
    testCases.inventory = (productStatus === 'invalid') ? [] : [product];
    testCases.inventoryThreshold = iT;
    testCases.CCM = ccm;
}