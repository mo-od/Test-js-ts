
const calculateFib = (num) => {
    const result = [1, 1]
    let num1,num2
    for(let i = 2; i < num; i++){
        num1 = result[i - 1]
        num2 = result[i - 2]
        result.push(num1 + num2)
    }
    return result
}

console.log(calculateFib(12));