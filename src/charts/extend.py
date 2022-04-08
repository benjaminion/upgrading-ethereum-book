# Memoisation makes a *huge* difference to runtime
JMAX = 33
KMAX = 33
memo = [[None] * KMAX for i in range(JMAX)]

def reset_memo():
    for j in range(JMAX):
        for k in range(KMAX):
            memo[j][k] = None

def fac(n):
    return n * fac(n-1) if n else 1

def choose(k, n):
    return fac(n) / fac(k) / fac(n-k)

def prob_tail_eq(r, k, n):
    return (1 - r) * r**k if k < n else r**k

# The sum of the products of all the q_i in the hypercube of side j and dim k
def hyper(q, j, k):
    return sum([hyperdiff(q, i, k) for i in range(j)])

# The difference between sides j + 1 and j for a hypercube of dimension k
def hyperdiff(q, j, k):
    #if memo[j][k] is None:
    if True:
        sum = q[j]**(k - 1)
        for i in range(1, k):
            sum += choose(i, k) * hyper(q, j, i) * q[j]**(k - 1 - i)
        memo[j][k] = q[j] * sum
    return memo[j][k]

n = 32
result = []
nintervals = 10
rs = [i / nintervals for i in range(1, nintervals)]
for k in range(6):
    foo = []
    for r in rs:
        reset_memo()
        # The probability of having a tail of exactly j in 1 attempt
        q = [prob_tail_eq(r, j, n) for j in range(n + 1)]
        # The probability that with a tail of k I can achieve a tail of j in the next round
        p = [hyperdiff(q, j, k + 1) for j in range(n + 1)]
        # The expected length of tail in the next round
        e = sum([j * p[j] for j in range(n + 1)])
        #print(r, k, e)
        foo.append(e)
    result.append(foo)
print(rs)
print(result)
