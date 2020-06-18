# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 3.6
    if min(A) == 1 and max(A) == len(A) == len(set(A)):
        permute = 1
    else:
        permute = 0
    return permute