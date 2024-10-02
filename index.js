// 1. Add two numbers
function add(a, b) {
    return a + b;
}

// 2. Subtract second number from first
function subtract(a, b) {
    return a - b;
}

// 3. Multiply two numbers
function multiply(a, b) {
    return a * b;
}

// 4. Divide first number by second
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// 5. Increment the number
function increment(n) {
    return n + 1;
}

// 6. Decrement the number
function decrement(n) {
    return n - 1;
}
// 7. Parse n as an integer (base 10)
function makeInt(n) {
    return parseInt(n, 10);
}

// 8. Parse n as a float (preserve decimals)
function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(add(2, 3));              // 5
console.log(subtract(10, 5));        // 5
console.log(multiply(4, 3));         // 12
console.log(divide(10, 2));          // 5
console.log(increment(10));          // 11
console.log(decrement(10));          // 9
console.log(makeInt("42"));          // 42
console.log(makeInt("42.5"));        // 42
console.log(preserveDecimal("42.5"));// 42.5
console.log(preserveDecimal("abc"));// NaN