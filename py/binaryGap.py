def solution(N):
    # write your code in Python 3.6
    zeros = bin(N)[2:].strip('0').strip('1').split('1')
    return len(max(zeros))

print(solution(1411))
print(solution(9))