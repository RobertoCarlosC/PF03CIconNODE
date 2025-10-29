function add(a, b){
    return a + b
}
function sub(a, b){
    return a - b
}
function mul(a, b){
    return a * b
}
function div(a, b){
    if(b === 0)throw new RangeError('Division by zero')
        return a / b
}
function sqrt(x){
    if(x < 0)throw new RangeError('Square root of negaive number')
        return Math.sqrt(x)
}
export{ add, sub, mul, div, sqrt}