function printPattern(){
    triangle = ""
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j <= i; j++) {
            triangle += "*"
        }
        triangle += "\n"
    }
    console.log(triangle)
}

printPattern()