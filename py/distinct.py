def solution(A):
    # write your code in Python 3.6
    if (len(A) == 0): return 0

    A.sort()
    count = 1
    
    for i in range(1, len(A)):
        if (A[i] != A[i-1]):
            count += 1
    
    return count
