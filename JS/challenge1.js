function getGrade (marks){
    if(marks<=100 && marks>79){
        return "A"
    }
    if(marks<=79 && marks>=60){
        return "B"
    }
    if(marks<=59 && marks>49){
        return "C"
    }
    if(marks<= 49&& marks>=40){
        return "D"
    }
    if(marks<40 ){
        return "E"   
    }
}
console.log(getGrade(30));