const verifyNumbers = (myNumber, numberDraw) => myNumber === numberDraw;

const numberDraw = (myNumber, verifyNumber) => {
    if (myNumberDraw < 1 || myNumberDraw > 5){
        return undefined;
    }
        const numberDrawed = Math.floor(Math.random() * 5) + 1
        console.log(`Number Drawed: ${numberDrawed}`);
        return verifyNumber(myNumber, numberDrawed) ? `Winner!!` : `Try Again.`;
    
}
const myNumberDraw = 4;

console.log(`My Number: ${myNumberDraw}`);
console.log(numberDraw(myNumberDraw, verifyNumbers));