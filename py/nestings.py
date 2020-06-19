def solution(S):
    # write your code in Python 3.6
    brackets = {
        '(' : ')'
    }
    stack = []
    
    for i in range(len(S)):
        if S[i] in brackets.keys():
            stack.append(S[i])
        elif len(stack) > 0 and brackets[stack[-1]] == S[i]:
            stack.pop()
        else:
            return 0
        
    if (len(stack) == 0):
        return 1
    else:
        return 0
