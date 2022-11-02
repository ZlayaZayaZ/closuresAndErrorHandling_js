const readline = require( "readline" );
const rl = readline.createInterface(process.stdin, process.stdout)
const fs = require("fs");
 
const numberToGuess = Math.round(Math.random()*1000)

console.log('Я загадал', +numberToGuess)
fs.appendFile("log.txt", `Я загадал: ${numberToGuess}`, function(error){
    if(error) throw error; // если возникла ошибка
});               


let i = 0
function guessTheNumber (numberToGuess) {
i++
let feedback

rl.question('Введите число: ', (answer) => {

if (isNaN(answer) || (answer < 0) || (answer > 999)) {
    feedback = `Введено не число от 0 до 999! Попытка ${i}.`
    console.log(feedback)
    fs.appendFile("log.txt", `\n Введено ${answer}. ${feedback}`, function(error){
        if(error) throw error; // если возникла ошибка
    });               
    guessTheNumber (numberToGuess)

} else if (+answer > numberToGuess) {
    feedback = `Загаданное число меньше! Попытка ${i}.`
    console.log(feedback)
    fs.appendFile("log.txt", `\n Введено ${answer}. ${feedback}`, function(error){
        if(error) throw error; // если возникла ошибка
    }); 
    guessTheNumber (numberToGuess)

} else if (+answer < numberToGuess) {
    feedback = `Загаданное число больше! Попытка ${i}.`
    console.log(feedback)
    fs.appendFile("log.txt", `\n Введено ${answer}. ${feedback}`, function(error){
        if(error) throw error; // если возникла ошибка
    }); 
    guessTheNumber (numberToGuess)
    
} else {
    rl.close()
    feedback = `Вы угадали! Общее количество попыток за иру: ${i}.`
    fs.appendFile("log.txt", `\n${feedback}\n\n`, function(error){
        if(error) throw error; // если возникла ошибка
        console.log("Запись файла завершена. Содержимое файла:");
        let data = fs.readFileSync("log.txt", "utf8");
        console.log(data);  // выводим считанные данные
    }); 
    return console.log(feedback)
}
});
}

guessTheNumber (numberToGuess)