function leapYear(year){
    if(!Number.isInteger(year))
        throw 'not a number';
    if(arguments.length > 1)
        throw 'cannot pass more than 1 argument';
    if(year % 400 == 0)
        return true;
    else if(year % 100 == 0)
        return false;
    else if(year % 4 == 0)
        return true;
    else 
     return false;
}
module.exports = leapYear;