function ConcatenationFunction(str1 , str2){
    let concatstr = str1.concat(" " ,str2)
    return concatstr
}
function main(){
    let str1 = 'Hello'
    let str2 = 'World'
    let str3 = ConcatenationFunction(str1 , str2)
    console.log(str3)
}
main()