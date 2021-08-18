const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);


let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = 
{
max:10,
attemptNumber:0,
numberDrawn: function randomValue()
{
return Math.round(Math.random()*this.max);
}
};

//Stores the value
let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt,value)
{
attempt.innerHTML = 'Tries: ' + value//;?????
};



function handleSubmit(e)
{
e.preventDefault();

let kick = document.getElementById('kick').value;

if(!kick)
{
alert('Write a value')
return;
};


//Increses current value
updateAttempt(attempt,++Guess.attemptNumber);

if(numberDrawn==kick)
{
playAgain();
status.innerHTML='Congrats, you guessed ';
result.style.transition='0.4s';
result.style.backgroundColor= '#37c978';
result.style.color='#fff';
status.style.color='#fff';
clear();
}


else if(numberDrawn>kick)
{
status.innerHTML = 'The number is higher';
status.style.color='#de4251';
clear();
}



else if(numberDrawn<kick)
{
status.innerHTML = 'The number is lower';
status.style.color='#de4251';
clear();
}

};



function playAgain()
{
document.getElementById('btnRestart').style.display = 'flex';
};



function restart()
{
document.location.reload(true);
};




function clear()
{
document.getElementById('kick').value='';
};