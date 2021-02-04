// Beginning message part
const beginningMessage = [
    'My advice to you my friend: ',
    'My tip for today: ',
    'My today\'s advice: '
];
// Main message part
const mainMessage = [
    'Make today count. ',
    'Be the best YOU of all time. ',
    'You can make it happen if you really want to. ',
    'Work hard every single day. ',
    'Don\'t let someone else decide what\'s best for you. ',
    'Keep going unless you get it and beyond. ',
    'Don\'t stop because it is geting harder. '
];
// Ending message part
const endMessage = [
    'Have a nice day!',
    'Keep on hustling!',
    'Keep on learning!',
    'I believe in you!',
    'You\'re the best!',
    'And now make it happen!'
];
// Create RandomMessagePart
const randomMessagePart = message =>  message[Math.floor(Math.random()*message.length)];

//Combine random message parts together
const randomMessage = () => {
    const beginning = randomMessagePart(beginningMessage);
    const main = randomMessagePart(mainMessage);
    const ending = randomMessagePart(endMessage);

    return beginning+main+ending;
};

//testing
console.log(randomMessage());