N = 32    # The number of slots per epoch
KMAX = 7  # The maximum length of prior tail we will consider
NINT = 10 # The number of intervals of r between 0 and 1 to generate

# Memoisation makes an astonishing difference to runtime
memo = [[None] * (2**KMAX + 1) for i in range(N + 1)]
def reset_memo():
    for j in range(N + 1):
        for k in range(2**KMAX + 1):
            memo[j][k] = None

def fac(n):
    return n * fac(n - 1) if n else 1

def choose(k, n):
    return fac(n) / fac(k) / fac(n - k)

def prob_tail_eq(r, k):
    return (1 - r) * r**k if k < N else r**k

# The sum of the products of all the q_i in the hypercube of side j and dim k
def hyper(q, j, k):
    return sum([hyperdiff(q, i, k) for i in range(j)])

# hyperdiff(q, j, k) = hyper(q, j + 1, k) - hyper(q, j, k)
def hyperdiff(q, j, k):
    if memo[j][k] is None:
        sum = q[j]**(k - 1)
        for i in range(1, k):
            sum += choose(i, k) * hyper(q, j, i) * q[j]**(k - 1 - i)
        memo[j][k] = q[j] * sum
    return memo[j][k]

# Smoke test
assert abs(hyper([0.9, 0.09, 0.009, 0.0009, 0.00009, 0.00001], 6, 32) - 1.0) < 1e-12

result = [[] for i in range(KMAX + 1)]
rs = [i / NINT for i in range(1, NINT)]
for r in rs:
    print(r) # Just a progress check
    reset_memo()
    # q[j] = the probability of having a tail of exactly j in one attempt
    q = [prob_tail_eq(r, j) for j in range(N + 1)]
    for k in range(KMAX + 1):
        # p[j] = the probability that with a tail of k I can achieve a tail of j in the next epoch
        p = [hyperdiff(q, j, 2**k) for j in range(N + 1)]
        # e = the expected length of tail in the next epoch given r and k
        e = sum([j * p[j] for j in range(N + 1)])
        result[k].append(e)
print(rs)
print(result)
