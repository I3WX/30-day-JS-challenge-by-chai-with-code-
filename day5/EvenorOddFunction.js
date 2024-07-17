const evenOdd = function(num){
    num% 2 == 0 ? console.log(`${num} is a even number`) : console.log(`${num} is a odd number`)
}

function main(){
    for (let i = 0; i <= 10; i++ ){
        evenOdd(i)
    } 
}
main()