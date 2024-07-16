function LeapYearCheckScript(year){
    if ((year % 4 ==0 && year % 100 != 0) || (year % 400 == 0)){
        return true
    }
    else{
        return false
    }
}

function main(){
    let year  =  2004;
    LeapYearCheckScript(year) ? console.log(`${year} is a leap year`) : console.log(`${year} is not a leap year`) 
}

main()