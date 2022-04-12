def prob_tail_eq(r, k):
    return (1 - r) * r**k if k < N else r**k

# The sum of the products of all the q_i in the hypercube of side j and dim k
# Recursive is cooler, but written iteratively so that python doesn't run out of stack
def hyper(q, j, k):
    h = 1
    for n in range(1, k + 1):
        h = sum([q[i] * h for i in range(j)])
    return h

# Smoke test.
assert abs(hyper([0.9, 0.09, 0.009, 0.0009, 0.00009, 0.00001], 6, 32) - 1.0) < 1e-12

N    = 32 # The number of slots per epoch
KMAX = 12 # The maximum length of prior tail we will consider
NINT = 20 # The number of intervals of r between 0 and 1 to generate

expected = [[] for i in range(KMAX + 1)]
prob_dec = [[] for i in range(KMAX + 1)]
rs = [i / NINT for i in range(1, NINT)]
for r in rs:
    # q[j] = the probability of having a tail of exactly j in one attempt
    q = [prob_tail_eq(r, j) for j in range(N + 1)]
    for k in range(KMAX + 1):
        h = [hyper(q, j, 2**k) for j in range(N + 2)]
        # p[j] = the probability that with a tail of k I can achieve a tail of j in the next epoch
        p = [h[j + 1] - h[j] for j in range(N + 1)]
        # The expected length of tail in the next epoch given r and k
        expected[k].append(sum([j * p[j] for j in range(N + 1)]))
        # The probability of a decrease in tail length to < k
        prob_dec[k].append(h[k])
print(rs)
print(expected)
print(prob_dec)
