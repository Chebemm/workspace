function rec(base, index) {
    if (index == 0) {
        return 1
    } else {
        return rec(base, index - 1) * base;
        
    }


}

// const irec = (base, index) =>  index ==0 ? 1 : irec(base, index) * base

//hoisting 

console.log(irec(2, 3))