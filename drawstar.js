let draw = (num) => {
    for(let rows=1;rows<=num;rows++){
        for(let stars=1;stars<=rows;stars++){
            process.stdout.write("*");
        }
        for(let spaces=1;spaces<=num-rows;spaces++){
            process.stdout.write(" ");
        }
        console.log()
    }
}

draw(5);