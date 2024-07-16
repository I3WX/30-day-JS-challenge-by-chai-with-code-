const days = [1,2,3,4,5,6,7]
function dayChecker(day){
    switch(day){
        case 1 :
            console.log("sunday")
            break
        case 2 :
            console.log("monday")
            break
        case 3 :
            console.log("tuesday")
            break
        case 4 :
            console.log("wednesday")
            break
        case 5 :
            console.log("thursday")
            break
        case 6 :
            console.log("friday")
            break
        case 7 :
            console.log("saturday")
            break
        
    }
}

function main(){
    for(let day in days){
        day = days[day]
        dayChecker(day)
    }
}
main()