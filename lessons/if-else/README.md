## if else

```
if else statements in javascript are used to make decisions in code. they commonly use comparison operators to determine if a condition is true or false.

if else statements are used to execute a block of code if a condition is true.

if the condition is false, another block of code can be executed.

syntax:
if (condition) {
    // code block
} else {
    // code block
}

example:
let x = 10;
if (x > 5) {
    console.log('x is greater than 5');
} else {
    console.log('x is less than or equal to 5');
}
```

## else if

```
else if statements are used to specify a new condition if the first condition is false.

syntax:
if (condition1) {
    // code block
} else if (condition2) {
    // code block
} else {
    // code block
}

example:
let x = 10;
if (x > 10) {
    console.log('x is greater than 10');
} else if (x < 10) {
    console.log('x is less than 10');
} else {
    console.log('x is equal to 10');
}
```

## ternary operator

```
the ternary operator is a shorthand way of writing an if else statement.

syntax:
condition ? expression1 : expression2

example:
let x = 10;
let result = x > 5 ? 'x is greater than 5' : 'x is less than or equal to 5';

console.log(result);
```
