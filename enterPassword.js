const { futimesSync } = require('fs');
const readline = require( 'readline' );
const rl = readline.createInterface(process.stdin, process.stdout)

const password1 = 'klever2000'
const password2 = 'albumin555'
const password3 = 'knopkazapuskaraket'

function getPasswordChecker (password) {
    console.log(`пароль: ${password}`)
    return function check(answer) {
        console.log(`пользовательский ввод: ${answer}`)
        if (password == answer) {
            console.log('Вы ввели верный парооль!')
            return true        
        } else {
            console.log('Вы ввели не верный пароль, попробуйте еще раз.')
            getPasswordChecker (password)
            return false
        }
    }
    
}

let p = getPasswordChecker(password1)
p('партизаны не сдаются')
p('долой php')
p('не вешать нос.гардемарины.com')
p('klever2000')

// let p2 = getPasswordChecker(password2)
// p2('гарандапогала')
// p2('Пырышки-пупырышки')
// p2('albumin555')

// let p3 = getPasswordChecker(password3)
// p3('gfggiyf')
// p3('knopkazapuskaraket')

