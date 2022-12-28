export function hello(min = 0, max = 0) {
    let random = randomize(min, max);
    console.log(random);
}

function randomize(min, max) {
    while(true) {
        let numb = Math.floor(Math.random() * (min + max) +min);
        if(numb <= max) {
            return numb;
        }
    }
}