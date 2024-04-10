// Part 1
let counter = 0;
function inc(){
    counter++;
    return inc();
}

try{
    inc();
} catch (error){
    console.log(error);
    console.log(counter);
}
// 11024 is my computers call stack size

// Part 2



