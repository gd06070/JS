function solution(s) {
    const stack = [];
     
    for (let i = 0; i < s.length; i++) {
        const top = stack[stack.length - 1]
        
        if (stack.length === 0 || top !== s[i]) {
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }
    
    return stack.length === 0 ? 1 : 0
}