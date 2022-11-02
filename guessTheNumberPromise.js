const readline = require( 'readline' );
const rl = readline.createInterface(process.stdin, process.stdout)
const fs = require("fs");

const numberToGuess = Math.round(Math.random()*1000)

console.log('Я загадал', +numberToGuess)
fs.appendFile("log.txt", `Я загадал: ${numberToGuess}`, function(error){
    if(error) throw error; // если возникла ошибка
});

function question (quest) {
    return new Promise ((resolve, reject) => {
        rl.question(quest, (data) => {
            resolve(data)
        })
    })
}

let i = 0
let feedback
async function guessTheNumber (numberToGuess) {
    while (true) {
        const data = await question ('Введите число:');
        i++
        if (isNaN(data) || (data < 0) || (data > 999)) {
            feedback = `Введено не число от 0 до 999! Попытка ${i}.`
            console.log(feedback)
            fs.appendFile("log.txt", `\n Введено ${data}. ${feedback}`, function(error){
                if(error) throw error; // если возникла ошибка
            }); 

        } else if (+data > numberToGuess) {
            feedback = `Загаданное число меньше! Попытка ${i}.`
            console.log(feedback)
            fs.appendFile("log.txt", `\n Введено ${data}. ${feedback}`, function(error){
                if(error) throw error; // если возникла ошибка
            }); 

        } else if (+data < numberToGuess) {
            feedback = `Загаданное число больше! Попытка ${i}.`
            console.log(feedback)
            fs.appendFile("log.txt", `\n Введено ${data}. ${feedback}`, function(error){
                if(error) throw error; // если возникла ошибка
            }); 

        } else {
            feedback = `Вы угадали! Общее количество попыток за иру: ${i}.`
            rl.close()
            fs.appendFile("log.txt", `\n${feedback}\n\n`, function(error){
                if(error) throw error; // если возникла ошибка
                console.log("Запись файла завершена. Содержимое файла:");
                let data = fs.readFileSync("log.txt", "utf8");
                console.log(data);  // выводим считанные данные
            }); 
            return console.log(feedback)
        }
    }
}

guessTheNumber(numberToGuess)

