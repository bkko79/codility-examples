def solution(S, P, Q):
    # write your code in Python 3.6
    answer = []
    for i in range(len(P)):
        part = S[P[i]:Q[i]+1]
        
        if part.find('A') != -1:
            answer.append(1)
        elif part.find('C') != -1:
            answer.append(2)
        elif part.find('G') != -1:
            answer.append(3)
        elif part.find('T') != -1:
            answer.append(4)

    return answer