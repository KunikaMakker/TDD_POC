module.exports = function primeFactor(number){
    let prime =[];
    if(number === 1) return prime;
    if(number === 2) {
        prime.push(2);
        return prime;
    }
    for(temp = 2; temp <= number ; temp++)
    {
        while(number % temp === 0)
        {
            prime.push(temp);
            number = number / temp;
        }
    }
    return prime;
}