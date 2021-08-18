

let student = {
    firstName:"student1",
    lastName:"student2",
    class:"2",
    age:25,
    gender:"male",
    math: 15,
    english: 20,
    studentAverage : () => (student.math + student.english) / 2
}

// const average = () => (student.math + student.english / 2)
// student.avr =  average()

// const highestScore = ()=> Math.max(student.math, student.english)
// student.highestScore =  highestScore()

// const lowestScore = () => `The highets score of ${student.firstName} is ${Math.max(student.math, student.english)}`

// student.lowestScore =  lowestScore()

 console.log(student.studentAverage())