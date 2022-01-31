var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();// Random number: inclusive of 0, exclusive of 1

console.log(floor);
console.log(ceiling);
console.log(random);

// Dice Roller
function d6() {
    var roll = Math.random();
    roll = Math.floor((roll * 6) + 1);
    return roll;
}

// use floor+1 because ceil could = 0 and not roll up to 1.

var playerRoll = d6()
console.log ("The player rolled:" + playerRoll);

// Dice Roller
function dice(typeOfDice) {
    var roll = Math.random();
    roll = Math.floor((roll * 6) + 1);
    return roll;
}

// use floor+1 because ceil could = 0 and not roll up to 1.

var typeOfDice()
var playerRoll = (20)
console.log ("The player rolled:" + playerRoll);


// Consulting the Oracle
// Write a function that will answer all of our questions by giving you a random answer.
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function eightBall(){
    var fortune = Math.random();
    fortune = Math.floor(fortune * lifesAnswers.length)
    return lifesAnswers[fortune];
}

var personFortune = eightBall();
console.log ("Your fortune is:" + personFortune)

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function eightBall(question){
    var fortune = Math.random();
    fortune = Math.floor(fortune * lifesAnswers.length);
    return '${question} Your fortune is ${lifesAnswers[fortune]}';
}

var personsFortune = eightBall("Wil i win the lottery?");
console.log (personsFortune)