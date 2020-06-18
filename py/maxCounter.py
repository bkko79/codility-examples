# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(N, A):
    count = [0] * N
    max_count = 0
    max_flag = False
    
    for i in A:
        if i == N + 1 and max_flag == False: #if i > N+1 all + 1
            count = [max_count] * N
            max_flag = True
            continue
        if i <= N:
            count[i - 1] += 1
            max_count = max(count[i-1], max_count)
            max_flag = False
    return count