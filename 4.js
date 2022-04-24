function isPalindrom(ru)
{
let re_1 = ru.replace(/[^а-яё0-9]/gi, '').toLowerCase()
let re_2 = re_1.split('').reverse().join('')

if(re_1 === re_2){
    console.log("Слово ", ru, " полиндром ")
} else {
    console.log("Слово ", ru, " не полиндром ")
}
}
isPalindrom("Вор-1ров")