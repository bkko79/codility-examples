def solution(A):
    # write your code in Python 3.6
    A.sort()
    negatives = A[0] * A[1] * A[-1]
    positives = A[-1] * A[-2] * A[-3]

    return max(negatives, positives)