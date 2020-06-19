def solution(A):
    # write your code in Python 3.6
    size = 0
    
    for a in A:
        if size == 0:
            value = a
            size += 1
        else:
            if value == a:
                size += 1
            else:
                size -= 1
                
    if size < 0: return -1
    
    count = 0
    position = -1

    for idx, a in enumerate(A):
        if a == value:
            count += 1
            position = idx
        if count > len(A) // 2:
            return position
    
    return -1