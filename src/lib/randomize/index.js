export function timer(min = 0, max = 0) {
    let randomNumb = randomize(min, max);
    let randomTime = (Math.floor(Date.now() / 1000)) + (randomNumb * 60);

    while (true) {
        if ((Math.floor(Date.now() / 1000)) == randomTime) {
            new Audio('/sounds/alarm.mp3').play();
            break;
        }
    }
}

export function dice(max) {
    return randomize(1, max);
}

function randomize(min, max) {
    while(true) {
        let numb = Math.floor(Math.random() * (min + max) +min);
        if(numb <= max) {
            return numb;
        }
    }
}