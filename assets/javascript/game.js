var composers = ["mozart", "bach", "chopin", "beethoven"]
var composer = composers[Math.floor(Math.random() * 4)]
var guessesLeft = 8
var answersList = []
var s
var g
console.log(composer)
console.log(guessesLeft)

function startup()
{
    for (i = 0;i < composer.length; i++)
    {
        answersList[i] = "_ ";
    }

    s = answersList.join("");
    document.getElementById("answer").innerHTML = s
}



function Letter()
{
    var letter = document.getElementById("letter").value;
    console.log(letter)
    document.getElementById("triesleft").innerHTML = guessesLeft;


for(var j = 0; j <composer.length ; j++)
    {
    
    if (composer[j]== letter)
        {
             answersList[j]= letter;
        }
            document.getElementById("answer").innerHTML = answersList.join("");
       
        
    }
    guessesLeft--
}