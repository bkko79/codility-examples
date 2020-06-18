def solution(A):
    # write your code in Python 3.6
    min = 1
    A = sorted(A)
    
    for i in range(len(A)):
        if(A[i] > -1 and A[i] == min):
            min += 1

    return min
