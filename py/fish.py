def solution(A, B):
    # write your code in Python 3.6
    down = []
    up = []
    direction = 0
    
    for i in range(len(A)):
        direction = B[i]
        
        if direction == 0:
            while (len(down) > 0):
                d = down.pop()
                if d > A[i]:
                    down.append(d)
                    break
            if len(down) == 0:
                up.append(A[i])
        else:
            down.append(A[i])
    
    return len(down) + len(up)
