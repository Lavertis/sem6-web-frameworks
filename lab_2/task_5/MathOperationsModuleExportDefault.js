const calc = (a, b, p) => {
    if (!(a || b || p)) {
        return 'Please enter all of the arguments';
    }
    switch (p) {
        case '+': {
            return a + b
        }
        case '-': {
            return a - b
        }
        case '*': {
            return a * b
        }
        case '/': {
            return a / b
        }
        default: {
            return
        }
    }
}

export default calc;