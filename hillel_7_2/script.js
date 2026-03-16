function averageNumbers(arr) {
  
    const numbers = arr.filter(item => typeof item === 'number');
    
    if (numbers.length === 0) return null;

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return sum / numbers.length;
}


const mixedArray = [10, 'hello', true, 20, 5, 'world'];
console.log(averageNumbers(mixedArray)); 