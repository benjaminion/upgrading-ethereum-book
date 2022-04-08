# Memoisation makes an astonishing difference to runtime
JMAX = 33
KMAX = 129
memo = [[None] * KMAX for i in range(JMAX)]

def reset_memo():
    for j in range(JMAX):
        for k in range(KMAX):
            memo[j][k] = None

def fac(n):
    return n * fac(n - 1) if n else 1

def choose(k, n):
    return fac(n) / fac(k) / fac(n - k)

def prob_tail_eq(r, k, n):
    return (1 - r) * r**k if k < n else r**k

# The sum of the products of all the q_i in the hypercube of side j and dim k
def hyper(q, j, k):
    return sum([hyperdiff(q, i, k) for i in range(j)])

# hyperdiff(q, j, k) = hyper(q, j + 1, k) - hyper(q, j, k)
def hyperdiff(q, j, k):
    if memo[j][k] is None:
    #if True:
        sum = q[j]**(k - 1)
        for i in range(1, k):
            sum += choose(i, k) * hyper(q, j, i) * q[j]**(k - 1 - i)
        memo[j][k] = q[j] * sum
    return memo[j][k]

# Smoke test - instantly sums 8e24 (=6**32) products of 32 numbers :)
assert abs(hyper([0.9, 0.09, 0.009, 0.0009, 0.00009, 0.00001], 6, 32) - 1.0) < 1e-12

n = 32
kmax = 7
result = [[] for i in range(kmax + 1)]
nintervals = 10
rs = [i / nintervals for i in range(1, nintervals)]
for r in rs:
    print(r) # Progress check
    reset_memo()
    # q[j] = the probability of having a tail of exactly j in one attempt
    q = [prob_tail_eq(r, j, n) for j in range(n + 1)]
    for k in range(kmax + 1):
        # p[j] = the probability that with a tail of k I can achieve a tail of j in the next round
        p = [hyperdiff(q, j, 2**k) for j in range(n + 1)]
        # e = the expected length of tail in the next round
        e = sum([j * p[j] for j in range(n + 1)])
        result[k].append(e)
print(rs)
print(result)
