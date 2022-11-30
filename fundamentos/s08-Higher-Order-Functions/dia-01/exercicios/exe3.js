const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (studentAnswer, correctAnswer) => {
    if (studentAnswer === correctAnswer) return 1;
    if (studentAnswer === 'N.A') return 0;
    return -0.5;
}

const countPoints = (studentAnswers, correctAnswers, compare) => {
    let c = 0;
    // for (let i = 0; i < correctAnswers.length; i += 1) {
    //     const comparison = compare(studentAnswers[i], correctAnswers[i])
    //     c += comparison;
    // }
    correctAnswers.forEach((answer, index) => {
        const comparison = compare(studentAnswers[index], answer)
        c += comparison;
    });
    return c;
}
console.log(countPoints(STUDENT_ANSWERS, RIGHT_ANSWERS, compareAnswers));