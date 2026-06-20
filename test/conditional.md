conditional uses one of 
1. If, else if, else 
2. ternary operator 
3. switch

_ the final else is called a fall through / base case 

```js
let ageClass; 

if(age <5){
    ageClass = "child"
}

else if(age >5 && age <13){
    ageClass ="preteen"
}

else if (age >= 13 && age <= 19){
    ageClass = "teen"
}

else{
ageClass ="adult" 
}
```