function Slovo(ru)
{
  let glasnie ='аоиеёэыуюяАОИЕЁЭЫУЮЯ'
  let d = 0
  let s = 0
  ru = ru.replace(/[^а-яё]/gi, '')
  for(let i = 0; i < ru.length ; i++)
  {
    if (glasnie.indexOf(ru[i]) !== -1)
    {
    d += 1;
    }
  
  }
  s = ru.length - d
  console.log("Слово ", ru, " остоит из ", d, " гласных и ", s , " согласных" )
}
Slovo("Валидация Вали-дация")