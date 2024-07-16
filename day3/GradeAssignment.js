function GradeAssignment(grade ){
    if(grade>=90){
        console.log("A+")
    }
    else if(grade>=80){
        console.log("A")
    }
            
    else if(grade>=70){
        console.log("B+")
    }
            
    else if(grade>=60){
        console.log("B")
    }
            
    else if(grade>=50){
        console.log("C")
    }
            
    else if(grade>=40){
        console.log("D")
    }
            
    else if(grade>=30){
        console.log("F")
    }
}

function main(){
    let num = 76;
    GradeAssignment(num)
}

main()