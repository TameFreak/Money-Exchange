// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency === 0) return {};
    if (currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    const masCoins = [
        {
            name: 'H',
            amount: 50
        },

        {
            name: 'Q',
            amount: 25
        },

        {
            name: 'D',
            amount: 10
        },

        {
            name: 'N',
            amount: 5
        },

        {
            name: 'P',
            amount: 1
        }
    ]

    const resObject = {};

    for (let i = 0; i < 5; i++){
        let num = Math.trunc(currency / masCoins[i].amount);
        if (num > 0){
            resObject[masCoins[i].name] = num;
            currency -= num * masCoins[i].amount;
        }
    }

    return resObject;
}
