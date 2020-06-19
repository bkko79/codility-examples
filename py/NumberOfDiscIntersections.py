import bisect

def solution(A):
    start = []
    end = []
    
    for i in range(len(A)):
        start.append(i-A[i])
        end.append(i+A[i])
    
    start.sort()
    end.sort()
    intersect = 0
    
    for i in range(len(A)):
        num = bisect.bisect(start,end[i])
        intersect += num - 1 - i
        if intersect > 1000000000:
            return -1
    
    return intersect