function multiplication(num){
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num*i}`)
    }
}
function main(){
    let num = 5
    multiplication(num)
}

main()