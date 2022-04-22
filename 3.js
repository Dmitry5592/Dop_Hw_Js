function Slovo(ru)
{
  let glasnie ='аоиеёэыуюяАОИЕЁЭЫУЮЯ'
  let d = 0
  let s = 0
  
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
Slovo("Валидация")