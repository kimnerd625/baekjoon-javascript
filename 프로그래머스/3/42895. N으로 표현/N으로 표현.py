"""
DP
 - Problem을 작은 SubProblem으로 분해
 - SubProblem의 최적 해법으로 원래 문제의 최적 해법을 구할 수 있다.
 - 큰 문제 => 여러 개의 작은 문제들로 쪼개어 접근
 
set을 8만큼 만들기 (최솟값이 8보다 크면 -1을 return하니까)

각 set에 5가 1, 2, 3... 번 쓰일 때, 사칙연산으로 만들 수 있는 숫자 다 때려넣기
"""

def solution(N, number):
    if number == N:
        return 1
    
    answer = -1
    _li = [set() for i in range(8)]
    
    for j in range(len(_li)):
        _li[j].add(int(str(N)*(j+1)))
    
    for i in range(1, 8):
        for j in range(i):
            for op1 in _li[j]:
                for op2 in _li[i-j-1]:
                    _li[i].add(op1+op2)
                    _li[i].add(op1-op2)
                    _li[i].add(op1*op2)
                    if op2 !=0:
                        _li[i].add(op1//op2)
                        
        if number in _li[i]:
            answer = i+1
            break
    return answer