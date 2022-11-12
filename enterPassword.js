function getPasswordChecker (password) {
    console.log(`пароль: ${password}`)
    // return answer => password == answer
    return function check(answer) {
        console.log(`пользовательский ввод: ${answer}`)
        if (password == answer) {
            console.log('Вы ввели верный парооль!')
            return true        
        } else {
            console.log('Вы ввели не верный пароль, попробуйте еще раз.')
            return false
        }
    }
}

let p = getPasswordChecker('klever2000')
console.log(Boolean(p('партизаны не сдаются')))
console.log(Boolean(p('долой php')))
console.log(Boolean(p('не вешать нос.гардемарины.com')))
console.log(Boolean(p('klever2000')))
