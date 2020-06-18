from functools import reduce

def solution(A):
    # write your code in Python 3.6
    if len(A) == 1:
        return A[0]
    
    A = sorted(A)
    
    for i in range(0, len(A), 2):
        if i == len(A):
            return A[i]
        if A[i] != A[i+1]:
            return A[i]

def solution2(A):
    return reduce(lambda x,y: x ^ y, A)

print(solution([3,9,7,3,9]))
print(solution2([3,9,7,3,9]))