const findCoinbaseFees = (price, percent) => {
    if (price > 200)   return price * percent;
    else if (price <= 200 && price > 50)    return price * percent + 2.99;
    else if (price <= 50 && price > 25) return price * percent + 1.99;
    else if (price <= 25 && price > 10) return price * percent + 1.49;
    else    return price * percent + .99;
}

function findCoinbaseProFees(price) {
    if (price > 1000000000) return price * 0.0004;
    else if (price > 500000000) return price * .0004;
    else if (price > 300000000) return price * .0005;
    else if (price > 100000000) return price * .0007;
    else if (price > 50000000) return price * .001;
    else if (price > 10000000) return price * .0015;
    else if (price > 1000000) return price * .0018;
    else if (price > 100000) return price * .002;
    else if (price > 50000) return price * .0025;
    else if (price > 10000) return price * .0035;
    else return price * .005;
}

function findGeminiFees(price, percent) {
    if (price > 200)    return price * 0.0149 + price * percent;
    else if (price > 50 && price <= 200)    return 2.99 + price * percent;
    else if (price > 25 && price <= 50) return 1.99 + price * percent;
    else if (price > 10 && price <= 25) return 1.49 + price * percent;
    else    return .99 + price * percent;
}

function findGeminiActiveTraderFees(price) {
    if (price > 500000000)  return price * 0.0003;
    else if (price > 250000000) return price * .0004;
    else if (price > 100000000) return price * .0005;
    else if (price > 50000000)  return price * .00075;
    else if (price > 15000000)  return price * .001;
    else if (price > 5000000)   return price * .0015;
    else if (price > 500000)    return price * .0025;
    else    return price * .0035;
}

export {findCoinbaseFees, findCoinbaseProFees, findGeminiFees, findGeminiActiveTraderFees};