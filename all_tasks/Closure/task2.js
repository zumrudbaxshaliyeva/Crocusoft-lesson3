function counter () {
    let num = 0;
    return function increase() {
        num+=1;
        console.log(num);
    }
}

const watch = counter();
watch();
watch();
watch();
watch();
watch();