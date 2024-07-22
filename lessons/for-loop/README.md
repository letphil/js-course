## for loop

```
The for loop is used to iterate over a sequence ( array, string, etc. ) and execute a block of code for each element in the sequence.
```

### Syntax:

```
for (initialization; condition; increment/decrement) {
    // code block
}
```

### Example:

```
let numbers = [1, 2, 3, 4, 5];

let totalCount = 0
totalCount+=1 // numbers[0]
totalCount+=2 // numbers[1]
totalCount+=3 // numbers[2]
totalCount+=4 // numbers[3]
totalCount+=5 // numbers[4]

for (let i = 0; i < 5; i++) {
    totalCount+=numbers[i]
    console.log(numbers[i]);
}

console.log('totalCount =', totalCount)



```
