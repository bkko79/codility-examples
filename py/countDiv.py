import math

def solution(A, B, K):
    # write your code in Python 3.6
    first = 0
    if A % K == 0:
        first = 1
    return math.floor(B / K) - math.floor(A / K) + first