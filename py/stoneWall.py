def solution(H):
    # write your code in Python 3.6
    stack = []
    poplist = []
    
    for h in H:
        while(1):
            if len(stack) == 0:
                stack.append(h)
                break
            elif h > stack[-1]:
                stack.append(h)
                break
            elif h == stack[-1]:
                break
            else:
                poplist.append(stack.pop())

    return len(stack) + len(poplist)