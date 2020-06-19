def solution(S):
    # write your code in Python 3.6
    nested = {
        '(': 1,
        ')': -1,
        '{': 2,
        '}': -2,
        '[': 3,
        ']': -3
    }
    
    nest = []

    for s in S:
        if nested[s] > 0:
            nest.append(s)
        elif nested[s] < 0:
            if len(nest) == 0: return 0
            t = nest.pop()
            if abs(nested[t]) != abs(nested[s]):
                return 0
    
    if len(nest) != 0: return 0
    return 1