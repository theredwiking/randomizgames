export function hello(min = 0, max = 0) {
    let randomNumb = randomize(min, max);
    let randomTime = (Math.floor(Date.now() / 1000)) + (randomNumb * 60);

    while (true) {
        if ((Math.floor(Date.now() / 1000)) == randomTime) {
            let sound = new Audio('f');
            sound.loop = false;
            sound.play();
            break;
        }
    }
    console.log("hello");
}

function randomize(min, max) {
    while(true) {
        let numb = Math.floor(Math.random() * (min + max) +min);
        if(numb <= max) {
            return numb;
        }
    }
}