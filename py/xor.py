# Write a solution(M, N) which calculates a XOR of all numbers between M and N.

# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

# To get unrepeated bits removed: O(1)
def XORmodular(num):
    mod = num % 4 # bitwisely, num%4 == 0 will be same as num (4 == 100, 8 == 1000, ...go on)
    if (mod == 0): 
        return num
    elif (mod == 1): # XOR returns the only one bit, which is one.
        return 1
    elif (mod == 2): # remaining 2 means that num XOR has num+1
        return num + 1
    elif (mod == 3): # remaining 3 means it will be 0
        return 0

def solution(M, N):
    # write your code in Python 3.6
    # (ERROR MSG NOT DECLARED ON QUESTION)
    # if M > 1000000000 or N > 1000000000: return -1 
    
    # time complexity O(N)
    # causes error with too many values. but I used to doublecheck my answer.
    
    # result = M
    # for num in range(M+1, N+1): 
    #    result ^= num

    #time complexity fixed with reducing unnecesary repeated bitwise result: O(log(N)) for bitwise calculation
    return XORmodular(M - 1) ^ XORmodular(N)
