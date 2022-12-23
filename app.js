const secretNum = Math.ceil(Math.random()*10);
let tries = 5;
function guessNum(num)
{
    if (tries>0) 
    {  
        if (num === secretNum)
        {
        tries=0;
        return alert ('Вы угадали! Поздравляю.')
        } 
        else
        {
            tries--;
            if (tries === 0)
            {
                return alert ('Вы не угадали! У вас закончились попытки. Обновите старницу')
            }
            else
            {
                alert ('Вы не угадали! Количество попыток:' + ' ' + tries);
            }
        }
    }
    else 
    {
        return alert ('Игра окончена. Обновите страницу')
    }
}