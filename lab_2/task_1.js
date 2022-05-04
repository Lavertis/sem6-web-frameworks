function printNumbers(...args) {
    console.log(args)
}

printNumbers(4, 6, 7, 9, 0, 2) // [4, 6, 7, 9, 0, 2]

function sumNumbers(...args) {
    const sum = args.reduce((acc, cur) => acc + cur)
    return `The sum of numbers ${args} is ${sum}`
}

console.log(sumNumbers(4, 6, 7, 9, 0, 2)) // The sum of numbers [4, 6, 7, 9, 0, 2] is 28