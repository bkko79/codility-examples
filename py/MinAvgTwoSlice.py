def solution(A):
    # write your code in Python 3.6
    min = float('inf')
    point = 0
    for i in range(len(A)-1):
        average = (A[i] + A[i+1]) / 2.0
        if average < min:
            min = average
            point = i
        if i < len(A)-2:
            triple = (A[i] + A[i+1] + A[i+2]) / 3.0
            if triple < min:
                min = average
                point = i
    return point