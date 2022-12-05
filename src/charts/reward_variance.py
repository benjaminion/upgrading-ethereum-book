# Adapted from https://pintail.xyz/posts/modelling-the-impact-of-altair/

import math
from scipy.stats import binom

def get_quantile(pmf, quantile):
    cumulative = 0
    for x, prob in sorted(pmf.items()):
        cumulative += prob
        if cumulative >= quantile:
            return x

NUM_VALIDATORS = 500000

SECONDS_PER_YEAR = 31557600
SECONDS_PER_SLOT = 12
SLOTS_PER_EPOCH = 32
COMMITTEE_EPOCHS = 256
COMMITTEE_VALIDATORS = 512

slots_per_year = SECONDS_PER_YEAR / SECONDS_PER_SLOT
epochs_per_year = slots_per_year / SLOTS_PER_EPOCH
committees_per_year = epochs_per_year / COMMITTEE_EPOCHS

GWEI_PER_ETH = int(1e9)
gwei_per_validator = 32 * GWEI_PER_ETH
BASE_REWARD_FACTOR = 64

HEAD_WEIGHT = 14
SOURCE_WEIGHT = 14
TARGET_WEIGHT = 26
SYNC_WEIGHT = 2
PROPOSER_WEIGHT = 8
WEIGHT_DENOMINATOR = 64

base_reward = gwei_per_validator * BASE_REWARD_FACTOR // math.isqrt(NUM_VALIDATORS * gwei_per_validator)
total_reward = base_reward * NUM_VALIDATORS

altair_proposer_reward = total_reward * PROPOSER_WEIGHT // SLOTS_PER_EPOCH // WEIGHT_DENOMINATOR
altair_att_reward = base_reward * (HEAD_WEIGHT + SOURCE_WEIGHT + TARGET_WEIGHT) // WEIGHT_DENOMINATOR
sync_reward = total_reward * COMMITTEE_EPOCHS * SYNC_WEIGHT // COMMITTEE_VALIDATORS // WEIGHT_DENOMINATOR

max_committees = 4
max_proposals = 15

# distribution of committee selections per year
n_committees = [el for el in range(max_committees + 1)]
pmf_committees = binom.pmf(n_committees, committees_per_year, COMMITTEE_VALIDATORS / NUM_VALIDATORS)

# distribution of block proposal opportunities per year
n_proposals = [el for el in range(max_proposals + 1)]
pmf_proposals = binom.pmf(n_proposals, slots_per_year, 1 / NUM_VALIDATORS)

# calculate all possible reward levels
altair_pmf = {}
attestation_rewards = epochs_per_year * altair_att_reward
for comms in n_committees:
    for props in n_proposals:
        reward = comms * sync_reward + props * altair_proposer_reward + attestation_rewards
        prob = pmf_committees[comms] * pmf_proposals[props]
        if reward in altair_pmf:
            altair_pmf[reward] += prob
        else:
            altair_pmf[reward] = prob

#min_reward = attestation_rewards / GWEI_PER_ETH
#max_reward = (max_committees * sync_reward + max_proposals * altair_proposer_reward + attestation_rewards) / GWEI_PER_ETH
min_reward = 1.1
max_reward = 1.8
n_bins = 35
bins = [min_reward + i * (max_reward - min_reward) / n_bins for i in range(n_bins)]
altair_hist = [0] * n_bins

# bin the rewards to generate histogram
for reward_gwei, prob in altair_pmf.items():
    reward = reward_gwei / GWEI_PER_ETH
    for i, edge in enumerate(bins[1:]):
        if reward < edge:
            altair_hist[i] += prob
            break

altair_mean = sum([p * r / GWEI_PER_ETH for r, p in altair_pmf.items()])
altair_sigma = math.sqrt(sum([p * (r / GWEI_PER_ETH)**2 for r, p in altair_pmf.items()]) - altair_mean**2)
altair_median = get_quantile(altair_pmf, 0.5) / GWEI_PER_ETH

print('\nAltair annual reward statistics (ETH)')
print('-------------------------------------')
print(f'             median: {altair_median:.4f}')
print(f'               mean: {altair_mean:.4f}')
print(f' standard deviation: {altair_sigma:.4f}')

print(sum(altair_hist)) # check histogram sums to unity
print(altair_hist)
print(bins)

c10 = get_quantile(altair_pmf, 0.10) / GWEI_PER_ETH
c90 = get_quantile(altair_pmf, 0.90) / GWEI_PER_ETH
print(f'10th percentile: {c10:.4f}')
print(f'90th percentile: {c90:.4f}')
