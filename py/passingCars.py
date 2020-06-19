def solution(A):
    # write your code in Python 3.6
    result = 0
    sum = 0
    
    for i in range(len(A)):
        if A[i] == 0 : sum += 1
        if A[i] == 1 : result += sum
        if result > 1000000000 : return -1
        
    return result
    