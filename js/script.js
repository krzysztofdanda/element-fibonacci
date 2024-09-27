function fibonacci(n) {
    if (n <= 1) {
        return n; 
    }

    let a = 0;
    let b = 1; 
    let fib = 1;

    
    for (let i = 2; i <= n; i++) {
        fib = a + b; 
        a = b;       
        b = fib;
    }

    return fib;
}


const result = fibonacci(10);
console.log(result);
