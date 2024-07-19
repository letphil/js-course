## switch case

```
switch case is a control statement that allows a value to be tested against a list of values. it is similar to if else if statements.

syntax:
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
```

const fruit = 'strawberry'

switch(fruit) {
case 'apple':
console.log('fruit is apple')
break
case 'orange':
console.log('fruit is orange')
default:
console.log('fruit is not in case and is ' + fruit)
}
