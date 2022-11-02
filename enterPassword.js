const readline = require( 'readline' );
const rl = readline.createInterface(process.stdin, process.stdout)

const password1 = 'klever2000'
const password2 = 'albumin555'
const password3 = 'knopkazapuskaraket'

function getPasswordChecker (password) {
    rl.question('Введите пароль: ', (answer) => {
        console.log('Вы ввели:', answer)
        if (answer == password) {
            console.log('Вы ввели верный парооль!')
            rl.close()
            return true
        } else {
            console.log('Вы ввели не верный пароль, попробуйте еще раз.')
            getPasswordChecker(password)
            return false
        }
    });
}

getPasswordChecker(password1)
// getPasswordChecker(password2)
// getPasswordChecker(password3)
