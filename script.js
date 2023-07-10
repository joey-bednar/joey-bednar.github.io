
const commandDivs = document.querySelectorAll(".command")

// animate typing of text in div at startDelay milliseconds
// return sum of start time and typing time in milliseconds
function animateTyping(startTime,typingDiv) {

    const waitTime = 1000;
    const charDelay = 50;
    const textContent = typingDiv.textContent.trim();
    const totalTime = textContent.length * charDelay + startTime + waitTime;

    typingDiv.textContent = '';

    typingDiv.style.display = "inline";

    setTimeout(() => {
        const characters = textContent.split('');

        characters.forEach((char, index) => {
            setTimeout(() => {
                typingDiv.textContent += char;
            }, index * charDelay);
        });
    }, startTime+waitTime);

    return totalTime;
}

function displayDiv(startTime,showDiv,displayType) {
        setTimeout(() => {
            showDiv.style.display = displayType;
        }, startTime);

    return startTime;
}

function displayOutput(startTime,outputDiv,displayType) {
    return displayDiv(startTime+1000,outputDiv,displayType);
}

function displayPrefix(startTime,outputDiv) {
    return displayDiv(startTime+500,outputDiv,"inline");
}

commandDivs.forEach((val, i) => {
    if (i != 0) {
        val.querySelector(".prefix").style.display = "none";
        val.querySelector(".input-command").style.display = "none";
    }
    val.querySelector(".output-row").style.display = "none";
});



commandDivs.forEach((val, i) => {
    if (i != 0) {
        val.querySelector(".prefix").style.display = "none";
        val.querySelector(".input-command").style.display = "none";
    }
    val.querySelector(".output-row").style.display = "none";
});

let command = commandDivs[0];
let prefix = command.querySelector(".prefix");
let input = command.querySelector(".typing");
let output = command.querySelector(".output-row");

let time = 0;
time = animateTyping(time,input);
time = displayOutput(time,output,"block");

command = commandDivs[1];
prefix = command.querySelector(".prefix");
input = command.querySelector(".typing");
output = command.querySelector(".output-row");

time = displayPrefix(time,prefix);
time = animateTyping(time,input);
time = displayOutput(time,output,"block");


command = commandDivs[2];
prefix = command.querySelector(".prefix");
input = command.querySelector(".typing");
output = command.querySelector(".output-row");


time = displayPrefix(time,prefix);
