# Preface <!-- /preface -->

## What to expect

This is a book for those who want to understand Ethereum&nbsp;2.0 at a technical level. My main goals are to be interesting, informative, and accurate. I am aiming for a degree of completeness, at least touching on all the main areas. But this is Ethereum 2.0 Explained, not the Eth2 Encyclopedia, which would be a much longer book.

Who am I writing for? For people like me! People who enjoy understanding how things work. But more than that, who like to know why things are the way they are.

Although I am an Eth2 staker, and an Ethereum user, I am not writing for stakers or users here. Some of the [FAQ](TODO) may be relevant, but for practical purposes you will find better help in places like the excellent [Ethstaker](TODO) community.

This book is a non-commercial personal project. I offer it to the community in gratitude for the wonderful journey we have been on together, and in the hope it might inspire a few more budding protocol engineers.

## Acknowledgements

TODO

# Part 1: Building <!-- /part1* -->

## Introduction <!-- /part1/introduction* -->

### Why Ethereum 2.0? <!-- /part1/introduction/whyeth2* -->

TODO

### The Cathedral and the Bazaar <!-- /part1/introduction/catb* -->

TODO

### A Brief History of Ethereum's Future <!-- /part1/introduction/history* -->

TODO

### Outline of the Book <!-- /part1/introduction/outline* -->

TODO

## Goals <!-- /part1/goals* -->

### Introduction

### Design Goals <!-- /part1/goals/design* -->

TODO

### Attacks and Defences <!-- /part1/goals/attacks* -->

TODO

## Making the Sausage <!-- /part1/making* -->

### Introduction

### The Specifications <!-- /part1/making/specs* -->

TODO

### The Process <!-- /part1/making/process* -->

TODO

# Part 2: Technical Overview <!-- /part2 -->

## Introduction <!-- /part2/intro* -->

TODO: Intro

## The Beacon Chain <!-- /part2/beacon* -->

### Introduction

TODO

### Terminology <!-- /part2/beacon/terms* -->

TODO

### Design Overview <!-- /part2/beacon/overview* -->

TODO

### Architecture of a Node <!-- /part2/beacon/arch* -->

TODO

### Genesis <!-- /part2/beacon/genesis* -->

TODO

[TODO: include Phase 0 params and spec section]::
<!--
| Name | Value | Unit | Duration |
| - | - | - | - |
| `SYNC_COMMITTEE_SIZE` | `uint64(2**9)` (= 512) | Validators | |
| `EPOCHS_PER_SYNC_COMMITTEE_PERIOD` | `uint64(2**8)` (= 256) | epochs | ~27 hours |
| `GENESIS_FORK_VERSION` | `Version('0x00000000')` |
| `GENESIS_DELAY` | `uint64(604800)` (7 days) |

##### `MIN_GENESIS_ACTIVE_VALIDATOR_COUNT`

`MIN_GENESIS_ACTIVE_VALIDATOR_COUNT` is the minimum number of full validator stakes that must have been deposited before the beacon chain can start producing blocks. The number is chosen to ensure a degree of security. It allows for four 128 member committees per slot, rather than the 64 eventually desired to support Phase&nbsp;1. But fewer validators means higher rewards per validator, so it is designed to attract early participants to get things bootstrapped.

`MIN_GENESIS_ACTIVE_VALIDATOR_COUNT` used to be much higher (65,536 = 2 million Ether staked), but was reduced when `MIN_GENESIS_TIME`, below, was added.

##### `MIN_GENESIS_TIME`

`MIN_GENESIS_TIME` is the earliest date that the beacon chain can start.

Having a `MIN_GENESIS_TIME` allows us to start the chain with fewer validators than was previously thought necessary. The previous plan was to start the chain as soon as there were `MIN_GENESIS_ACTIVE_VALIDATOR_COUNT` validators staked. But there were concerns that with a lowish initial validator count, a single entity could form the majority of them and then act to prevent other validators from entering (a "[gatekeeper attack](https://github.com/ethereum/eth2.0-specs/pull/1467)"). A minimum genesis time allows time for all intending depositors to make their deposits before they could be excluded by a gatekeeper attack.

In the event, the beacon chain started at 12:00:23 UTC on the 1st of December 2020. The extra 23 seconds comes from the timestamp of the first Eth1 block to meet the [genesis criteria](#genesis), [block 11320899](https://etherscan.io/block/11320899). I like to think of this as a little remnant of proof of work forever embedded in the beacon chain's history.

##### `GENESIS_FORK_VERSION`

[TODO: update]::

Forks/upgrades are expected, if only when we move to Phase&nbsp;1. This is the fork version the beacon chain starts with at its "Genesis" event: the point at which the chain first starts producing blocks.

##### `GENESIS_DELAY`

The `GENESIS_DELAY` is a grace period to allow nodes and node operators time to prepare for the Genesis event. The Genesis event cannot occur before [`MIN_GENESIS_TIME`](#min_genesis_time). If there are not [`MIN_GENESIS_ACTIVE_VALIDATOR_COUNT`](#min_genesis_active_validator_count) registered validators sufficiently in advance of `MIN_GENESIS_TIME`, then Genesis will occur `GENESIS_DELAY` seconds after enough validators have been registered.

The Genesis event (beacon chain start) was originally designed to take place at midnight UTC, even for testnets, which was not always convenient. This has now been [changed](https://github.com/ethereum/eth2.0-specs/pull/1866). Once we're past `MIN_GENESIS_TIME - GENESIS_DELAY`, Genesis could end up being at any time of the day, depending on when the last depost needed comes in. In the event, genesis occurred at 12:00:23 UTC on the 1st of December 2020, according to the timestamp of Ethereum block number [11320899](https://etherscan.io/block/11320899) plus `GENESIS_DELAY`.
-->

## Consensus <!-- /part2/consensus* -->

### Introduction

TODO

### LMD Ghost <!-- /part2/consensus/lmd_ghost* -->

TODO

### Fork Choice <!-- /part2/consensus/fork_choice* -->

TODO

### Casper FFG <!-- /part2/consensus/casper_ffg* -->

TODO

### Finality <!-- /part2/consensus/finality* -->

TODO

### Gasper <!-- /part2/consensus/gasper* -->

TODO

### The Inactivity Leak <!-- /part2/consensus/inactivity* -->

TODO

### Weak Subjectivity <!-- /part2/consensus/weak_subjectivity* -->

TODO

### Issues <!-- /part2/consensus/issues* -->

TODO

## The Progress of a Slot <!-- /part2/slot* -->

### Introduction

TODO

### Proposing <!-- /part2/slot/proposing* -->

TODO

### Attesting <!-- /part2/slot/attesting* -->

TODO

### Aggregating <!-- /part2/slot/aggregating* -->

TODO

### Sync Committee Participation <!-- /part2/slot/sync* -->

TODO

## The Progress of an Epoch <!-- /part2/epoch* -->

### Introduction

TODO

### Applying Rewards and Penalties <!-- /part2/epoch/rewards* -->

TODO

### Justification and Finalisation <!-- /part2/epoch/finality* -->

TODO

### Other State Updates <!-- /part2/epoch/updates* -->

TODO

## Validator Lifecycle <!-- /part2/validator* -->

### Introduction

TODO

## Deposit Handling <!-- /part2/deposits* -->

### Introduction

TODO

### The Deposit Contract <!-- /part2/deposits/contract* -->

TODO

### Deposit Receipts <!-- /part2/deposits/receipts* -->

TODO

### Eth1 Voting and Follow Distance <!-- /part2/deposits/voting* -->

TODO

### Merkle Proofs <!-- /part2/deposits/merkleproofs* -->

TODO

### Deposit processing <!-- /part2/deposits/processing* -->

TODO

### Withdrawal Credentials <!-- /part2/deposits/credentials* -->

TODO

## Economics <!-- /part2/economics* -->

### Introduction

TODO

### Rewards and Penalties <!-- /part2/economics/rewards* -->

TODO

### Slashing <!-- /part2/economics/slashing* -->

TODO

### Inactivity <!-- /part2/economics/inactivity* -->

TODO

### Effective Balance <!-- /part2/economics/effective_balance* -->

TODO

## The Building Blocks <!-- /part2/building_blocks -->

### Introduction

TODO

### Randomness <!-- /part2/building_blocks/randomness* -->

TODO

### Committees <!-- /part2/building_blocks/committees* -->

TODO

### Shuffling <!-- /part2/building_blocks/shuffling -->

Shuffling is used to pseudo-randomly assign validators to committees, both attestation committees and sync committees. It is also used to select the block proposer at each slot.

Although there are [pitfalls](https://www.developer.com/tech/article.php/616221/How-We-Learned-to-Cheat-at-Online-Poker-A-Study-in-Software-Security.htm) to be aware of, shuffling is a well understood problem in computer science. The gold standard is probably the [Fisher&ndash;Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). So why aren't we using that for Eth2? In short: light clients.

Other shuffles rely on processing the entire list of elements to find the final ordering. We wish to spare light clients this burden. Ideally, they should deal with only the subsets of lists that they are interested in. Therefore, rather than Fisher&ndash;Yates, we are using a construction called a "swap-or-not" shuffle. The swap-or-not shuffle can tell you the destination index (or, conversely, the origin index) of a single list element, so is ideal when dealing with subsets of the whole validator set.

For example, formally committees are assigned by shuffling the full validator list and then taking contiguous slices of the resulting permutation. If I only need to know the members of committee $k$, then this is very inefficient. Instead, I can run the swap-or-not shuffle backwards for only the indices in slice $k$ to find out which of the whole set of validators would be shuffled into $k$. This is much more efficient.

#### Swap-or-not Specification

The algorithm for shuffling [in the specification](https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.md#compute_shuffled_index) deals with only a single index at a time.

```python
def compute_shuffled_index(index: uint64, index_count: uint64, seed: Bytes32) -> uint64:
    """
    Return the shuffled index corresponding to ``seed`` (and ``index_count``).
    """
    assert index < index_count

    # Swap or not (https://link.springer.com/content/pdf/10.1007%2F978-3-642-32009-5_1.pdf)
    # See the 'generalized domain' algorithm on page 3
    for current_round in range(SHUFFLE_ROUND_COUNT):
        pivot = bytes_to_uint64(hash(seed + uint_to_bytes(uint8(current_round)))[0:8]) % index_count
        flip = (pivot + index_count - index) % index_count
        position = max(index, flip)
        source = hash(
            seed
            + uint_to_bytes(uint8(current_round))
            + uint_to_bytes(uint32(position // 256))
        )
        byte = uint8(source[(position % 256) // 8])
        bit = (byte >> (position % 8)) % 2
        index = flip if bit else index

    return index
```

An index position in the list to be shuffled, `index`, is provided, along with the total number of indices, `index_count`, and a `seed` value. The output is the index that the initial index gets shuffled to.

The hash functions used to calculate `pivot` and `source` are deterministic, and are used to generate pseudo-random output from the inputs: given the same input, they will generate the same output. So we can see that, for given values of `index`, `index_count`, and `seed`, the routine will always return the same output.

The shuffling proceeds in rounds. In each round, a `pivot` index is pseudo-randomly chosen somewhere in the list, based only on the `seed` value and the round number.

Next, an index `flip` is found, which is `pivot - index`, after accounting for wrap-around due to the modulo function. The important points are that, given `pivot`, every `index` maps to a unique `flip`, and that the calculation is symmetrical, so that `flip` maps to `index`.

 - With `index_count = 100`, `pivot = 70`, `index = 45`, we get `flip = 25`.
 - With `index_count = 100`, `pivot = 70`, `index = 82`, we get `flip = 88`.

Finally in the round, a decision is made as to whether to keep the index as-is, or to update it to `flip`. This decision is pseudo-randomly made based on the values of `seed`, the round number, and the higher of `index` and `flip`.

Note that basing the swap-or-not decision on the higher of `index` and `flip` brings a symmetry to the algorithm. Whether we are considering the element at `index` or the element at `flip`, the decision as to whether to swap the elements or not will be the same. This is the key to seeing the that full algorithm delivers a shuffling (permutation) of the original set.

The algorithm proceeds with the next iteration based on the updated index.

It may not be immediately obvious, but since we are deterministically calculating `flip` based only on the round number, the shuffle can be run in reverse simply by running from `SHUFFLE_ROUND_COUNT - 1` to `0`. The same swap-or-not decisions will be made in reverse. As described above, this reverse shuffle is perfect for finding which validators ended up in a particular committee.

#### A full shuffle

To get an intuition for how this single-index shuffle can deliver a full shuffling of a list of indices, we can consider how the algorithm is typically [implemented in clients](https://github.com/ConsenSys/teku/blob/04294427f2622c86326db68f3b88ed20d1e6cdc1/ethereum/spec/src/main/java/tech/pegasys/teku/spec/logic/common/helpers/MiscHelpers.java#L154) when shuffling an entire list at once.

As an optimisation, the loop over the indices to be shuffled is brought inside the loop over rounds. This hugely reduces the amount of hashing required since the pivot is fixed for the round (it does not depend on the index) and the bits of `source` can be reused for 256 consecutive indices, since the hash has a 256-bit output.

For each round, we do the following.

##### 1. Choose a pivot and find the first mirror index

First, we pick a pivot index $p$. This is pseudorandomly chosen, based on the round number and some other seed data. The pivot is fixed for the rest of the round.

With this pivot, we then pick the mirror index $m_1$ halfway between $p$ and $0$. That is, $m_1 = p / 2$. (We will simplify by ignoring off-by-one rounding issues for the purposes of this explanation.)

<div class="image">
<img src="md/images/shuffling_0.svg" /><br />
<span>The pivot and the first mirror index.</span>
</div>

##### 2. Traverse first mirror to pivot, swapping or not

For each index between the mirror index $m_1$ and the pivot index $p$, we decide whether we are going to swap the element or not.

Consider the element at index $i$. If we choose not to swap it, we just move on to consider the next index.

If we do decide to swap, then we exchange the list element at $i$ with that at $i'$, its image in the mirror index. That is, $i$ is swapped with $i' = m_1 - (i - m_1)$, so that $i$ and $i'$ are equidistant from $m_1$. In practice we don't exchange the elements at this point, we just update the indices $i \rightarrow i'$, and $i' \rightarrow i$.

We make the same swap-or-not decision for each index between $m_1$ and $p$.

<div class="image">
<img src="md/images/shuffling_1.svg" /><br />
<span>Swapping or not from the first mirror up to the pivot.</span>
</div>

The decision as to whether to swap or not is based on hashing together the random seed, the round number, and some position data. A single bit is extracted from this hash for each index, and the swap is made or not according to whether this bit is one or zero.

##### 3. Calculate the second mirror index

After considering all the indices $i$ from $m_1$ to $p$, mirroring in $m_1$, we now find a second mirror index at $m_2$, which is the point equidistant between $p$ and the end of the list: $m_2 = m_1 + n / 2$.

<div class="image">
<img src="md/images/shuffling_2.svg" /><br />
<span>The second mirror index.</span>
</div>

##### 4. Traverse pivot to second mirror, swapping or not

Finally, we repeat the swap-or-not process, considering all the points $j$ from the pivot, $p$ to the second mirror $m_2$. If we choose not to swap, we just move on. If we choose to swap then we exchange the element at $j$ with its image at $j'$ in the mirror index $m_2$. Here, $j' = m_2 + (m_2 - j)$.

<div class="image">
<img src="md/images/shuffling_3.svg" /><br />
<span>Swapping or not from the pivot to the second mirror.</span>
</div>

##### Putting it all together

At the end of the round, we have considered all the indices between $m_1$ and $m_2$, which, by construction, is half of the total indices. For each index considered, we have either left the element in place, or swapped the element at a distinct index in the other half. Thus, all of the indices have been considered exactly once for swapping.

The next round begins by incrementing (or decrementing for a reverse shuffle) the round number, which gives us a new pivot index, and off we go again.

<div class="image">
<img src="md/images/shuffling_4.svg" /><br />
<span>The whole process running from one mirror to the other in a single round.</span>
</div>

#### Discussion

##### A key insight

When deciding whether to swap or not for each index, the algorithm cleverly bases its decision on the higher of the candidate index or its image in the mirror. That is, $i$ rather than $i'$ (when below the pivot), and $j'$ rather than $j$ (when above the pivot). This means that we have flexibility when running through the indices of the list: we could do $0$ to $m_1$ and $p$ to $m_2$ as two separate loops, or do it with a single loop from $m_1$ to $m_2$ as I outlined above. The result will be the same: it doesn't matter if we are considering $i$ or its image $i'$; the decision as to whether to swap or not has the same outcome.

##### The number of rounds

In Ethereum&nbsp;2.0 we do 90 rounds of the algorithm per shuffle, set by the constant `SHUFFLE_ROUND_COUNT` [TODO - link]. The [original paper](https://link.springer.com/content/pdf/10.1007%2F978-3-642-32009-5_1.pdf) on which this technique is based suggests that $6\lg{N}$ rounds is required "to start to see a good bound on CCA-security", where $N$ is the list length. In his [annotated spec](https://github.com/ethereum/annotated-spec/blob/master/phase0/beacon-chain.md) Vitalik says "Expert cryptographer advice told us ~$4\log_2{N}$ is sufficient for safety". The absolute maximum number of validators in Eth2, thus the maximum size of the list we would ever need to shuffle, is about $2^{22}$ (4.2 million). On Vitalik's estimate that gives us 88 rounds required, on the paper's estimate, 92 rounds (assuming that $\lg$ is the natural logarithm). So we are in the right ballpark, especially as we are very, very unlikely to end up with that many active validators.

It might be interesting to make the number of rounds adaptive based on list length. But we don't do that; it's probably an optimisation too far.

Fun fact: when Least Authority audited the beacon chain specification, they initially found bias in the shuffling used for selecting block proposers (see Issue F [in their report](https://leastauthority.wpengine.com/static/publications/LeastAuthority-Ethereum-2.0-Specifications-Audit-Report.pdf)). This turned out to be due to mistakenly using a configuration that had only 10 rounds of shuffling. When they increased it to the 90 we use for mainnet, the bias no longer appeared.

##### (Pseudo) randomness

The algorithm requires that we select a pivot point randomly in each round, and randomly choose whether to swap each element or not in each round.

In Eth2, we deterministically generate the "randomness" from a seed value, such that the same seed will always generate the same shuffling.

The pivot index is generated from eight bytes of a SHA256 hash of the seed concatenated with the round number, so it usually changes each round.

The decision bits used to determine whether or not to swap elements are bits drawn from SHA256 hashes of the seed, the round number, and the index of the element within the list.

##### Efficiency

This shuffling algorithm is much slower than Fisher&ndash;Yates. That algorithm requires $N$ swaps. Our algorithm will require $90N/4$ swaps on average to shuffle $N$ elements.

We should also consider  the generation of pseudo-randomness, which is the most expensive part of the algorithm. Fisher&ndash;Yates needs something like $N\log_2{N}$ bits of randomness, and we need $90(\log_2{N} + N/2)$ bits, which, for the range of $N$ we need in Eth2, is many more bits (about twice as many when $N$ is a million).

#### Why swap-or-not?

Why would we use such an inefficient implementation?

##### Shuffling single elements

The brilliance is that, if we are interested in only a few indices, we do not need to compute the shuffling of the whole list. In fact, we can apply the algorithm to a single index to find out which index it will be swapped with.

So, if we want to know where the element with index 217 gets shuffled to, we can run the algorithm with only that index; we do not need to shuffle the whole list. Moreover, if we want to know the converse, which element gets shuffled into index 217, we can just run the algorithm backwards for element 217 (backwards means running the round number from high to low rather than low to high).

In summary, we can compute the destination of element $i$ in $O(1)$ operations, and the source of element $i'$ (the inverse operation) also in $O(1)$, not dependent on the length of the list. Shuffles like the Fisher&ndash;Yates shuffle do not have this property and cannot work with single indices, they always need to iterate the whole list. The technical term for a shuffle having this property is that it is _oblivious_ (to all the other elements in the list).

##### Keeping light clients light

This property is important for light clients. Light clients are observers of the Eth2 beacon and shard chains that do not store the entire state, but do wish to be able to securely access data on the chains. As part of verifying that they have the correct data&mdash;that no-one has lied to them&mdash;it is necessary to compute the committees that attested to that data. This means shuffling, and we don't want light clients to have to hold and shuffle the entire list of validators. By using the swap-or-not shuffle, light clients need only to consider the small subset of validators that they are interested in, which is vastly more efficient overall.

#### References

 - The initial discussion about the search for a good shuffling algorithm: https://github.com/ethereum/eth2.0-specs/issues/323.
 - The announcement of the winner: https://github.com/ethereum/eth2.0-specs/issues/563.
 - The orginal paper describing the swap-or-not shuffle is Hoang, Morris, and Rogaway, 2012, "An Enciphering Scheme Based on a Card Shuffle": https://link.springer.com/content/pdf/10.1007%2F978-3-642-32009-5_1.pdf. See the "generalized domain" algorithm on page 3.

### BLS Signatures <!-- /part2/building_blocks/signatures* -->

TODO

### Aggregator Selection <!-- /part2/building_blocks/aggregator* -->

TODO

### SSZ: Simple Serialize <!-- /part2/building_blocks/ssz* -->

TODO

### Sync Committees <!-- /part2/building_blocks/sync_committees* -->

TODO

## Upgrades <!-- /part2/upgrades* -->

### Introduction

TODO

### Hard Forks <!-- /part2/upgrades/forks* -->

TODO

### Fork Digest <!-- /part2/upgrades/fork_digest* -->

TODO

## Networking <!-- /part2/networking* -->

### Introduction

TODO

### Discovery <!-- /part2/networking/discovery* -->

TODO

### Gossip <!-- /part2/networking/gossip* -->

TODO

### RPC <!-- /part2/networking/rpc* -->

TODO

### Syncing <!-- /part2/networking/syncing* -->

TODO

### Message Types <!-- /part2/networking/messages* -->

TODO

## Implementation <!-- /part2/implementation* -->

### Introduction

TODO

### Protoarray <!-- /part2/implementation/protoarray* -->

TODO

### SSZ backing tree <!-- /part2/implementation/backing_tree* -->

TODO

### Batch signature verification <!-- /part2/implementation/batch_verification* -->

TODO

### Slashing protection <!-- /part2/implementation/anti_slash* -->

TODO

### Caching strategies? <!-- /part2/implementation/caches* -->

TODO

### Disk storage <!-- /part2/implementation/storage* -->

TODO

### Checkpoint sync <!-- /part2/implementation/checkpoint_sync* -->

TODO

# Part 3: Annotated Specification <!-- /part3 -->

## Introduction <!-- /part3/intro -->

### Annotated Specification

The following chapters present the entire beacon chain technical specification, annotated with my explanations and comments.

This edition of Upgrading Ethereum is based on the Altair version of the beacon chain specification. At the time of writing, there is no single specification document for Altair. Instead, there is the [Phase&nbsp;0 specification](https://github.com/ethereum/consensus-specs/blob/a89b55d7f791361c80c1133f411f5d2aaeb18c86/specs/phase0/beacon-chain.md) and an additional [Altair document](https://github.com/ethereum/consensus-specs/blob/a89b55d7f791361c80c1133f411f5d2aaeb18c86/specs/altair/beacon-chain.md) describing the differences (a kind of text-based diff).

For the purposes of this exposition, I have consolidated the two specifications into one, omitting the parts that are present only in Phase&nbsp;0. For historical interest and comparison purposes, my previous [Phase&nbsp;0 annotated spec](https://benjaminion.xyz/eth2-annotated-spec/phase0/beacon-chain/) remains available.

[TODO: note about incorporating the BLS spec]::

#### References

  - The Phase&nbsp;0 beacon chain specification: https://github.com/ethereum/consensus-specs/blob/a89b55d7f791361c80c1133f411f5d2aaeb18c86/specs/phase0/beacon-chain.md
  - Altair updates to the beacon chain specification: https://github.com/ethereum/consensus-specs/blob/a89b55d7f791361c80c1133f411f5d2aaeb18c86/specs/altair/beacon-chain.md
  - My Phase&nbsp;0 annotated specification: https://benjaminion.xyz/eth2-annotated-spec/phase0/beacon-chain/
  - Vitalik's annotated specifications, covering Phase&nbsp;0, Altair, The Merge, and beyond: https://github.com/ethereum/annotated-spec

## Types, Constants, Presets, and Configuration <!-- /part3/config -->

### Preamble

Which sounds drier - the Namib Desert or a chapter on constants, presets and parameters? But I've long thought that these configuration details provide an excellent way in to the ideas and mechanisms we'll be unpacking in detail in later chapters. Far from being a desert, this part of the spec bustles with life.

The foundation is laid with a set of custom data types. As previously discussed [TODO: link], the beacon chain specification is executable in Python. The data types defined at the top of the spec represent the fundamental quantities that will reappear frequently.

Then - with constants, presets, and parameters - we will examine the numbers that define and constrain the behaviour of the chain. Each of these quantities tells a story. Each parameter encapsulates an insight, or a mechanism, or a compromise. Why is it here? How has it changed over time? Where does its value come from?

### Custom Types <!-- /part3/config/types -->

The specification defines the following Python custom types, "for type hinting and readability": the data types defined here appear frequently throughout the spec; they are the building blocks for everything else.

Each type has a name, an "SSZ equivalent", and a description. SSZ is the encoding method used to pass data between clients, among other things. Here it can be thought of as just a primitive data type.

[TODO: link instead to SSZ section]::

Throughout the spec, (almost) all integers are now unsigned 64 bit numbers, `uint64`, but this hasn't always been the case.

Regarding "unsigned", there was [much discussion](https://github.com/ethereum/eth2.0-specs/issues/626) around whether Eth2 should use signed or unsigned integers, but eventually unsigned was chosen. As a result, it is critical to preserve the order of operations in some places to avoid inadvertantly underflowing - negative numbers are forbidden.

And regarding "64 bit", early versions of the spec used [other](https://github.com/ethereum/consensus-specs/commit/4c3c8510d4abf969a7170fce10dcfb5d4df408c8) bit lengths than 64 (a "[premature optimisation](http://wiki.c2.com/?PrematureOptimization)"), but arithmetic integers are now [standardised at 64 bits](https://github.com/ethereum/consensus-specs/pull/1746) throughout the spec, the only exception being [`ParticipationFlags`](#participationflags), introduced in the Altair fork, which has type `uint8`.

| Name                 | SSZ equivalent | Description                                                |
| -                    | -              | -                                                          |
| `Slot`               | `uint64`       | a slot number                                              |
| `Epoch`              | `uint64`       | an epoch number                                            |
| `CommitteeIndex`     | `uint64`       | a committee index at a slot                                |
| `ValidatorIndex`     | `uint64`       | a validator registry index                                 |
| `Gwei`               | `uint64`       | an amount in Gwei                                          |
| `Root`               | `Bytes32`      | a Merkle root                                              |
| `Hash32`             | `Bytes32`      | a 256-bit hash                                             |
| `Version`            | `Bytes4`       | a fork version number                                      |
| `DomainType`         | `Bytes4`       | a domain type                                              |
| `ForkDigest`         | `Bytes4`       | a digest of the current fork data                          |
| `Domain`             | `Bytes32`      | a signature domain                                         |
| `BLSPubkey`          | `Bytes48`      | a BLS12-381 public key                                     |
| `BLSSignature`       | `Bytes96`      | a BLS12-381 signature                                      |
| `ParticipationFlags` | `uint8`        | a succinct representation of 8 boolean participation flags |

#### Slot

Time is divided into fixed length slots. Within each slot, exactly one validator is randomly selected to propose a beacon chain block. The progress of slots is the fundamental heartbeat of the beaconchain.

[TODO: link to Slots chapter]::

#### Epoch

Sequences of slots are combined into fixed-length epochs.

Epoch boundaries are the points at which the chain can be justified and finalised (by the Casper FFG mechanism). They are also the points at which validator balances are updated, validator committees get shuffled, and validator exits, entries, and slashings are processed. That is, the main state-transition work is performed per epoch, not per slot.

Epochs have always felt like a slightly uncomfortable overlay on top of the slot-by-slot progress of the beacon chain, but necessitated by Casper FFG finality. There have been [proposals](https://ethresear.ch/t/epoch-less-casper-ffg-liveness-safety-argument/2702?u=benjaminion) to move away from epochs, and there are possible future developments that could allow us to [do away](https://ethresear.ch/t/a-model-for-cumulative-committee-based-finality/10259?u=benjaminion) with epochs entirely. But, for the time being, they remain.

[TODO: link to Epochs chapter]::
[TODO: link to Casper FFG]::

Fun fact: Epochs were originally [called Cycles](https://github.com/ethereum/consensus-specs/pull/149).

#### CommitteeIndex

Validators are organised into committees that collectively vote (make attestations) on blocks. Each committee is active at exactly one slot per epoch, but several committees are active at each slot. The `CommitteeIndex` type is an index into the list of committees active at a slot.

The beacon chain's committee-based design is a large part of what makes it practical to implement while maintaining security. If all validators were active all the time, there would be an overwhelming number of messages to deal with. The random shuffling of committees make them very hard to subvert by an attacker without a supermajority of stake.

[TODO: link to Committees section]::

#### ValidatorIndex

Each validator making a successful deposit is consecutively assigned a unique validator index number that is permanent, remaining even after the validator exits. It is permanent because the validator's balance is associated with its index, so the data needs to be preserved when the validator exits, at least until the balance is withdrawn at an unknown future time.

#### Gwei

All Ether amounts are specified in units of Gwei ($\smash{10^9}$ Wei, $\smash{10^{-9}}$ Ether). This is basically a hack to avoid having to use integers wider than 64 bits to store validator balances and while doing calculations, since ($\smash{2^{64}}$ Wei is only 18 Ether. Even so, in some places care needs to be taken to avoid arithmetic overflow when dealing with Ether calculations.

#### Root

Merkle roots are ubiquitous in the Eth2 protocol. They are a very succinct and tamper-proof way of representing a lot of data, an example of a [cryptographic accumulator](https://en.wikipedia.org/wiki/Accumulator_(cryptography)). Blocks are summarised by their Merkle roots; state is summarised by its Merkle root; the list of Eth1 deposits is summarised by its Merkle root; the digital signature of a message is calculated from the Merkle root of the data structure contained within the message.

#### Hash32

Merkle roots are constructed with cryptographic hash functions. In the spec, a `Hash32` type is used to represent Eth1 block roots (which are also Merkle roots).

I don't know why only the Eth1 block hash has been awarded the `Hash32` type: other hashes in the spec [remain](https://github.com/ethereum/consensus-specs/pull/2689) `Bytes32`. In early versions of the spec `Hash32` was used for all cryptographic has quantities, but this was [changed](https://github.com/ethereum/consensus-specs/pull/458) to `Bytes32`.

Anyway, it's worth taking a moment in appreciation of the humble [cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function). The hash function is arguably the single most important algorithmic innovation underpinning blockchain technology, and in fact most of our online lives. Easily taken for granted, but utterly critical in enabling our modern world.

#### Version

It is expected that the protocol will get updated/upgraded from time to time, a process commonly known as a "hard-fork". For example, the upgrade from Phase&nbsp;0 to Altair took place on the 27th of October 2021. Unlike Eth1, Eth2 has an in-protocol concept of a version number. This is used, for example, to prevent votes from validators on one fork (that maybe haven't upgraded yet) being counted on a different fork.

The recommended use of `Version` is described in the [Ethereum 2.0 networking specification](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/p2p-interface.md#how-should-fork-version-be-used-in-practice).

[TODO: Link to networking section]::

#### DomainType

`DomainType` is just a [cryptographic nicety](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-12#section-2.2.5): messages intended for different purposes are tagged with different domains before being hashed and possibly signed. It's a kind of name-spacing to avoid clashes; probably unnecessary, but considered a best-practice. Ten domain types are [defined in Altair](constants#domain-types).

#### ForkDigest

`ForkDigest` is the unique chain identifier, generated by combining information gathered at genesis with the current chain version. From [commments](/part3/helper/misc#compute_fork_digest) in the spec:

```none
    This is a digest primarily used for domain separation on the p2p layer.
    4-bytes suffices for practical separation of forks/chains.
```

Specifically, `ForkDigest` is the first four bytes of the hash tree root of the [`ForkData`](/part3/containers/dependencies#forkdata) structure containing the current chain [`Version`](#version) and the [`genesis_validators_root`](#todo). It is computed in [`compute_fork_digest()`](/part3/helper/misc#compute_fork_digest).

[TODO:: link to genesis_validators_root in the Genesis section]::

`ForkDigest` is used extensively in the [Ethereum 2.0 networking specification](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/p2p-interface.md).

[TODO: link to networking section]::

#### Domain

Domain is used when verifying any messages from a validator - the message needs to have been sent with the correct domain and fork version. It calculated as the concatenation of the four byte [`DomainType`](#domaintype) and the first 28 bytes of the [fork data root](/part3/helper/misc#compute_fork_data_root).

[TODO: explain the rationale]::

#### BLSPubkey

BLS (Boneh-Lynn-Shacham) is the digital signature scheme used by Eth2. It has some [very nice properties](https://ethresear.ch/t/pragmatic-signature-aggregation-with-bls/2105), in particular the ability to aggregate signatures. This means that many validators can sign the same message (for example, that they support block X), and these signatures can all be efficiently aggregated into a single signature for verification. The ability to do this efficiently makes Eth2 practical as a protocol. Several other protocols have adopted or will adopt BLS, such as Zcash, Chia, Dfinity and Algorand. We are using the BLS signature scheme based on the [BLS12-381](https://hackmd.io/@benjaminion/bls12-381) (Barreto-Lynn-Scott) elliptic curve.

The `BLSPubkey` type holds a validator's public key, or the aggregation of several validators' public keys. This is used to verify messages that are claimed to have come from that validator or group of validators.

In Ethereum&nbsp;2.0, BLS public keys are elliptic curve points from the BLS12-381 $\smash{G_1}$ group, thus are 48 bytes long when compressed.

[TODO: link to BLS section]::

#### BLSSignature

As above, we are using BLS signatures over the [BLS12-381](https://hackmd.io/@benjaminion/bls12-381) elliptic curve in order to sign messages between participants. As with all digital signature schemes, this guarantees both the identity of the sender and the integrity of the contents of any message.

In Ethereum&nbsp;2.0, BLS signatures are elliptic curve points from the BLS12-381 $\smash{G_2}$ group, thus are 96 bytes long when compressed.

#### ParticipationFlags

The `ParticipationFlags` type was introduced in the Altair upgrade as part of the accounting reforms.

Prior to Altair, all attestations seen in blocks were stored in state for two epochs. At the end of an epoch, finality calculations, and reward and penalty calculations for each active validator, would be done by processing all of the attestations for the previous epoch as a batch. This created a spike in processing at epoch boundaries, and led to a noticeable increase in late blocks and attestations during the first slots of epochs. With Altair, [participation flags](https://github.com/ethereum/consensus-specs/pull/2140) are now used to continuously track validators' attestations, reducing the processing load at the end of epochs.

Three of the eight bits are [currently used](constants#participation-flag-indices); five are reserved for future use.

As an aside, it might have been more intuitive if `ParticipationFlags` were a `Bytes1` type, rather than introducing a weird `uint8` into the spec. After all, it is not used as an arithmetic integer. However, `Bytes1` is a composite type in SSZ, really an alias for `Vector[uint8, 1]`, whereas `uint8` is a basic type. When computing the hash tree root of a `List` type, multiple basic types can be packed into a single leaf, while composite types take a leaf each. This would result in 32 times as many hashing operations for a list of `Bytes1`. For similar reasons the type of `ParticipationFlags` [was changed](https://github.com/ethereum/consensus-specs/pull/2176#pullrequestreview-566879992) from `bitlist` to `uint8`.

#### References

 - A primer on Merkle roots: https://www.mycryptopedia.com/merkle-tree-merkle-root-explained/
   - See also Wikipedia: https://en.wikipedia.org/wiki/Merkle_tree
 - Details of the BLS12-381 elliptic curve: https://hackmd.io/@benjaminion/bls12-381

### Constants <!-- /part3/config/constants -->

The distinction between "constants", "presets", and "configuration values" is not always clear, and things have moved back and forth between the sections at times. In essence, "constants" are things that are expected never to change for the beacon chain, no matter what fork or test network it is running.

[TODO: Altair changes]::

#### Miscellaneous

| Name | Value |
| - | - |
| `GENESIS_SLOT` | `Slot(0)` |
| `GENESIS_EPOCH` | `Epoch(0)` |
| `FAR_FUTURE_EPOCH` | `Epoch(2**64 - 1)` |
| `DEPOSIT_CONTRACT_TREE_DEPTH` | `uint64(2**5)` (= 32) |
| `JUSTIFICATION_BITS_LENGTH` | `uint64(4)` |
| `PARTICIPATION_FLAG_WEIGHTS` | `[TIMELY_SOURCE_WEIGHT, TIMELY_TARGET_WEIGHT, TIMELY_HEAD_WEIGHT]` |
| `ENDIANNESS` | `'little'` |

##### `GENESIS_SLOT`

The very first slot number for the beacon chain is zero.

Perhaps this seems uncontroversial, but it actually featured heavily in the Great Signedness Wars mentioned [previously](types#custom-types). The issue was that calculations on unsigned integers might have negative intermediate values, which would cause problems. A proposed work-around for this was to start the chain at a non-zero slot number. It was initially set to [2^19](https://github.com/ethereum/eth2.0-specs/commit/656eae6f6ad85de5f4b9493ca0a4f8ca16d2e261#diff-51a43328a58414e132a744f3771f018cR193), then [2^63](https://github.com/ethereum/eth2.0-specs/commit/7f39f79b2e72654920b2e12127cfdfe6ad0088c6), then [2^32](https://github.com/ethereum/eth2.0-specs/commit/9b7b35bc9d18d0fac92ee142f1ea66ab289d3175), and finally [back to zero](https://github.com/ethereum/eth2.0-specs/commit/8c32128ffbda5c7e056c218cdb78ab76d856c5f5#diff-51a43328a58414e132a744f3771f018cR219). In my humble opinion, this madness only confirms that we should have been using signed integers all along.

##### `GENESIS_EPOCH`

As above. When the chain starts, it starts at epoch zero.

##### `FAR_FUTURE_EPOCH`

A candidate for the dullest constant. It's used as a default initialiser for validators' activation and exit times before they are properly set. No epoch number will ever be bigger than this one.

##### `DEPOSIT_CONTRACT_TREE_DEPTH`

`DEPOSIT_CONTRACT_TREE_DEPTH` specifies the size of the (sparse) Merkle tree used by the Eth1 deposit contract to store deposits made. With a value of 32, this allows for $\smash{2^{32}}$ = 4.3 billion deposits. Given that the minimum deposit it 1 Ether, that number is clearly enough.

Since deposit receipts contain Merkle proofs, their size depends on the value of this constant.

##### `JUSTIFICATION_BITS_LENGTH`

As an optimisation to Casper FFG&mdash;the process by which finality is conferred on epochs&mdash;the beacon chain uses a "k-finality" rule. We will describe this properly when we look at processing justification and finalisation. For now, this constant is just the number of bits we need to store in state to implement k-finality. With k&nbsp;=&nbsp;2, we track the justification status of the last four epochs.

[TODO: link to justification and finalisation / k-finality]::

##### `PARTICIPATION_FLAG_WEIGHTS`

This array is just a convenient way to access the various weights given to different validator achievements when calculating rewards. The three weights are defined under [incentivization weights](#incentivization-weights), and each weight corresponds to a flag stored in state and defined under [participation flag indices](#participation-flag-indices).

##### `ENDIANNESS`

[Endianness](https://en.wikipedia.org/wiki/Endianness) refers to the order of bytes in the binary representation of a number: most significant byte first is big-endian; least significant byte first is little-endian. For the most part these details are hidden by compilers, and we don't need to worry about endianness. But endianness matters when converting between integers and bytes, which is relevant to shuffling and proposer selection, the RANDAO, and when serialising with SSZ.

The spec began life as big-endian, but the Nimbus team from Status successfully lobbied for it to be changed to little-endian to better match processor hardware implementations, and the endianness [of WASM](https://webassembly.org/docs/portability/). SSZ was changed [first](https://github.com/ethereum/eth2.0-specs/pull/139), and then the rest of the spec [followed](https://github.com/ethereum/eth2.0-specs/pull/564).

#### Participation flag indices

| Name                       | Value |
| -                          | -     |
| `TIMELY_SOURCE_FLAG_INDEX` | `0`   |
| `TIMELY_TARGET_FLAG_INDEX` | `1`   |
| `TIMELY_HEAD_FLAG_INDEX`   | `2`   |

Validators making attestions that get included on-chain are rewarded for three things:
  - getting attestations included with the correct source checkpoint within 5 slots (`integer_squareroot(SLOTS_PER_EPOCH)`);
  - getting attestations included with the correct target checkpoint within 32 slots (`SLOTS_PER_EPOCH`); and,
  - getting attestations included with the correct head within 1 slot (`MIN_ATTESTATION_INCLUSION_DELAY`), basically immediately.

These flags are temporarily recorded in the [`BeaconState`](/part3/containers/state) when attestations are processed, then used at the ends of epochs to update finality and to calculate validator rewards for making attestations.

The mechanism for rewarding timely inclusion of attestations (thus penalising late attestations) differs between Altair and Phase&nbsp;0. In Phase&nbsp;0, attestations included within 32 slots would receive the full reward for the votes they got correct (source, target, head), plus a declining reward based on the delay in inclusion: $\smash{\frac{1}{2}}$ for a two slot delay, $\smash{\frac{1}{3}}$ for a three slot delay, and so on. With Altair, for each vote, we now have a cliff before which the validator receives the full reward and after which a penalty. The cliffs differ in duration, which is intended to more accurately target incentives at behaviours that genuinely help the chain (there is little value in rewarding a correct head vote made 30 slots late, for example). See [get_attestation_participation_flag_indices()](/part3/helper/accessors#get_attestation_participation_flag_indices) for how this is implemented in code.

#### Incentivization weights

| Name | Value |
| - | - |
| `TIMELY_SOURCE_WEIGHT` | `uint64(14)` |
| `TIMELY_TARGET_WEIGHT` | `uint64(26)` |
| `TIMELY_HEAD_WEIGHT` | `uint64(14)` |
| `SYNC_REWARD_WEIGHT` | `uint64(2)` |
| `PROPOSER_WEIGHT` | `uint64(8)` |
| `WEIGHT_DENOMINATOR` | `uint64(64)` |

These weights are used to calculate the reward earned by a validator for performing its duties. There are five duties in total. Three relate to making attestations: attesting to the source epoch, attesting to the target epoch, and attesting to the head block. There are also rewards for proposing blocks, and for participating in sync committees. Note that the sum of five the weights is equal to `WEIGHT_DENOMINATOR`.

On a long-term average, a validator can expect to earn a total amount of [`get_base_reward()`](/part3/transition/epoch#get_base_reward) per epoch, with these weights being the relative portions for each of the duties comprising that total. Proposing blocks and participating in sync committees do not happen in every epoch, but are randomly assigned, so over small periods of time validator earnings may differ from `get_base_reward()`.

[TODO: link to discussion of things that can reduce rewards, a la V's annotated spec]::

The apportioning of rewards was overhauled in the Altair upgrade to better reflect the importance of each activity within the protocol. The total reward amount remains the same, but sync committee rewards were added, and the relative weights were adjusted. Previously, the weights corresponded to 16 for correct source, 16 for correct target, 16 for correct head, 14 for inclusion (equivalent to correct source), and 2 for block proposals. The factor of four increase in the proposer reward addressed a long-standing [spec bug](https://github.com/ethereum/consensus-specs/issues/2152#issuecomment-747465241).

<div class="image">
<img src="md/images/weights.svg" style="width:50%" /><br />
<span>The proportion of the total reward derived from each of the micro-rewards.</span>
</div>

#### Withdrawal Prefixes

| Name | Value |
| - | - |
| `BLS_WITHDRAWAL_PREFIX` | `Bytes1('0x00')` |
| `ETH1_ADDRESS_WITHDRAWAL_PREFIX` | `Bytes1('0x01')` |

[TODO: link to somewhere useful for withdrawal creds]::

Withdrawal prefixes relate to the withdrawal credentials provided when deposits are made for validators. The withdrawal credential is a commitment to a private key that may be used later to withdraw funds from the validator's balance on the beacon chain.

Two ways to specify the withdrawal credentials are currently available, versioned with these prefixes, with others such as [`0x02`](https://github.com/ethereum/consensus-specs/pull/2454) and [`0x03`](https://ethresear.ch/t/0x03-withdrawal-credentials-simple-eth1-triggerable-withdrawals/10021?u=benjaminion) under discussion.

These withdrawal credential prefixes are yet significant in the core beacon chain spec, but will become significant when withdrawals are enabled in a future upgrade. The withdrawal credentials data is not consensus-critical, and future withdrawal credential types can be added without a hardfork. There are [suggestions](https://ethresear.ch/t/withdrawal-credential-rotation-from-bls-to-eth1/8722?u=benjaminion) as to how existing credentials might be changed between methods which would be consensus critical.

The presence of these prefixes in the spec indicates a "social consensus" among the dev teams and protocol designers that we will in future support these methods for making withdrawals.

See the [Withdrawals](/part4/the_merge/withdrawals) section for discussion on what the mechanism might look like.

##### `BLS_WITHDRAWAL_PREFIX`

The beacon chain launched with only BLS-style withdrawal credentials available, so all early stakers used this. The `0x00` prefix on the credential distinguishes this type from the others: it replaces the first byte of the hash of the BLS public key that corresponds to the BLS private key of the staker.

With this type of credential, in addition to a BLS signing key, stakers need a second BLS key that they will later use for withdrawals. The credential registered in the deposit data is the 32 byte SHA256 hash of the validators withdrawal public key, with the first byte set to `BLS_WITHDRAWAL_PREFIX`.

##### `ETH1_ADDRESS_WITHDRAWAL_PREFIX`

Eth1 withdrawal credentials are much simpler, and were [adopted](https://github.com/ethereum/consensus-specs/pull/2149) once it became clear that Ethereum&nbsp;2.0 would not be using a BLS-based address scheme for accounts at any time soon. These provide a commitment that stakers will be able to withdraw their beacon chain funds to a normal Ethereum account (possibly a contract account) at a future date.

#### Domain types

| Name | Value |
| - | - |
| `DOMAIN_BEACON_PROPOSER` | `DomainType('0x00000000')` |
| `DOMAIN_BEACON_ATTESTER` | `DomainType('0x01000000')` |
| `DOMAIN_RANDAO` | `DomainType('0x02000000')` |
| `DOMAIN_DEPOSIT` | `DomainType('0x03000000')` |
| `DOMAIN_VOLUNTARY_EXIT` | `DomainType('0x04000000')` |
| `DOMAIN_SELECTION_PROOF` | `DomainType('0x05000000')` |
| `DOMAIN_AGGREGATE_AND_PROOF` | `DomainType('0x06000000')` |
| `DOMAIN_SYNC_COMMITTEE` | `DomainType('0x07000000')` |
| `DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF` | `DomainType('0x08000000')` |
| `DOMAIN_CONTRIBUTION_AND_PROOF` | `DomainType('0x09000000')` |

These domain types are used in three ways: for seeds, for signatures, and for selecting aggregators

##### Seeds

When random numbers are required in-protocol, one way they are generated is by hashing the RANDAO mix with other quantities, one of them being a domain type (see [`get_seed()`](/part3/helper/accessors#get_seed)). The [original motivation](https://github.com/ethereum/eth2.0-specs/pull/1415) was to avoid occasional collisions between Phase&nbsp;0 committees and Phase&nbsp;1 persistent committees, back when they were a thing. So, when computing the beacon block proposer, `DOMAIN_BEACON_PROPOSER` is hashed into the seed, when computing attestation committees, `DOMAIN_BEACON_ATTESTER` is hashed in, and when computing sync committees, `DOMAIN_SYNC_COMMITTEE` is hashed in.

##### Signatures

In addition, as a cryptographic nicety, each of the protocol's signature types is augmented with the appropriate domain before being signed:

 - Signed block proposals incorporate `DOMAIN_BEACON_PROPOSER`
 - Signed attestations incorporate `DOMAIN_BEACON_ATTESTER`
 - RANDAO reveals are BLS signatures, and use `DOMAIN_RANDAO`
 - Deposit data messages incorporate `DOMAIN_DEPOSIT`
 - Validator voluntary exit messages incorporate `DOMAIN_VOLUNTARY_EXIT`
 - Sync committee signatures incorporate `DOMAIN_SYNC_COMMITTEE`

In each case, except for deposits, the fork version is [also incorporated](/part3/helper/accessors#get_domain) before signing. Deposits are valid across forks, but other messages are not. Note that this would allow validators to participate, if they wish, in two independent forks of the beacon chain without fear of being slashed.

##### Aggregator selection

The remaining four types, suffixed `_PROOF` are not used directly in the beacon chain specification. They [were introduced](https://github.com/ethereum/eth2.0-specs/pull/1615) to implement [attestation subnet validations](https://github.com/ethereum/eth2.0-specs/issues/1595) for denial of service resistance. The technique was [extended](https://github.com/ethereum/consensus-specs/pull/2266) to sync committees with the Altair upgrade.

Briefly, at each slot, validators are selected to aggregate attestations from their committees. The selection is done based on the validator's signature over the slot number, mixing in `DOMAIN_SELECTION_PROOF`. The validator then signs the whole aggregated attestation, including the previous signature as proof that it was selected to be a validator, using `DOMAIN_AGGREGATE_AND_PROOF`. And similarly for sync committees. In this way, everything is verifiable and attributable, making it hard to flood the network with fake messages.

These four are not part of the consensus-critical state-transition, but are nonetheless important to the healthy functioning of the chain.

[TODO: link to validator spec and p2p spec?]::
<!-- See the [Honest Validator](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/validator.md) spec for more on this. -->

#### Crypto

| Name | Value |
| - | - |
| `G2_POINT_AT_INFINITY` | `BLSSignature(b'\xc0' + b'\x00' * 95)` |

[TODO: link to BLS spec]::

This is the compressed [serialisation](https://github.com/zcash/librustzcash/blob/6e0364cd42a2b3d2b958a54771ef51a8db79dd29/pairing/src/bls12_381/README.md#serialization) of the "point at infinity", the identity point, of the G2 group of the BLS12-381 curve that we are using for signatures. Note that it is in big-endian format (unlike all other constants in the spec).

It was introduced as a convenience when verifying aggregate signatures that contain no public keys in [`eth_fast_aggregate_verify()`](/part3/helper/crypto#eth_fast_aggregate_verify). The underlying [FastAggregateVerify](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bls-signature-04#section-3.3.4) function from the BLS standard would reject these. There was a time when valid sync committee signatures could contain no public keys, but that is [no longer the case](https://github.com/ethereum/consensus-specs/pull/2528), so this constant is probably redundant now.

### Preset <!-- /part3/config/preset -->

[TODO: Update for Altair]::
[TODO: Insert headings]::

The "presets" are consistent collections of configuration variables that are bundled togther. There are currently two sets of configurations available in the [specs repo](https://github.com/ethereum/consensus-specs/tree/dev/configs), [mainnet](https://github.com/ethereum/consensus-specs/blob/dev/configs/mainnet.yaml) and [minimal](https://github.com/ethereum/consensus-specs/blob/dev/configs/minimal.yaml). The mainnet configuration is running on the beacon chain; minimal is often used for testing. Other configurations are possible. For example, Teku uses a [swift](https://github.com/ConsenSys/teku/blob/d368fd44ec43eb93923dd4c150a6649d82798e43/util/src/main/resources/tech/pegasys/teku/util/config/configs/swift.yaml) configuration for acceptance testing.

All the values discussed below are from the mainnet configuration.

You'll notice that most of these values are powers of two. There's no huge significance to this. Computer scientists think it's neat, and it ensures that things cleanly divide other things in general. There is a [view](https://github.com/ethereum/eth2.0-specs/issues/1633#issuecomment-592949297) that this practice helps to minimise [bike-shedding](https://en.wikipedia.org/wiki/Law_of_triviality) (endless arguments over trivial matters).

Some of the configuaration parameters below are quite technical and perhaps obscure. I'll take the opportunity here to introduce some concepts, and give more detailed explanations when they appear in later chapters.

#### Misc

| Name | Value |
| - | - |
| `MAX_COMMITTEES_PER_SLOT` | `uint64(2**6)` (= 64) |
| `TARGET_COMMITTEE_SIZE` | `uint64(2**7)` (= 128) |
| `MAX_VALIDATORS_PER_COMMITTEE` | `uint64(2**11)` (= 2,048) |
| `SHUFFLE_ROUND_COUNT` | `uint64(90)` |
| `HYSTERESIS_QUOTIENT` | `uint64(4)` |
| `HYSTERESIS_DOWNWARD_MULTIPLIER` | `uint64(1)` |
| `HYSTERESIS_UPWARD_MULTIPLIER` | `uint64(5)` |

##### `MAX_COMMITTEES_PER_SLOT`

Validators are organised into committees to do their work. At any one time, each validator is a member of exactly one beacon chain committee, and is called on to make an attestation exactly once per epoch. (An attestation is a vote for a beacon chain block that has been proposed for a slot.)

In the beacon chain, the 64 committees active in a slot effectively act as a single committee as far as the fork-choice rule is concerned. They all vote on the proposed block for the slot, and their votes/attestations are pooled. (In a similar way, all committees active during an epoch act effectively as a single committee as far as justification and finalisation are concerned.)

The number 64 is designed to map onto [one committee per shard](https://github.com/ethereum/eth2.0-specs/pull/1428) once Phase&nbsp;1 is deployed, since these committees will also vote on shard crosslinks.

Note that sync committees are a different thing: there is only on sync committee active at any time.

##### `TARGET_COMMITTEE_SIZE`

To achieve a desirable level of security, committees need to be larger than a certain size. This is to make it infeasible for an attacker to randomly end up with a majority in a committee even if they control a significant number of validators. Th target here is a kind of lower-bound on committee size. If there are not enough validators to make all committees have at least 128 members, then, as a first measure, the number of committees per slot is reduced to maintain this minimum. Only if there are fewer than `SLOTS_PER_EPOCH` * `TARGET_COMMITTEE_SIZE` = 4096 validators in total will the committee size be reduced below `TARGET_COMMITTEE_SIZE`. With so few validators, the system would be insecure in any case.

[TODO: rework the following]::

> - For the safety of committees, `TARGET_COMMITTEE_SIZE` exceeds [the recommended minimum committee size of 111](http://web.archive.org/web/20190504131341/https://vitalik.ca/files/Ithaca201807_Sharding.pdf); with sufficient active validators (at least `SLOTS_PER_EPOCH * TARGET_COMMITTEE_SIZE`), the shuffling algorithm ensures committee sizes of at least `TARGET_COMMITTEE_SIZE`. (Unbiasable randomness with a Verifiable Delay Function (VDF) will improve committee robustness and lower the safe minimum committee size.)

Given a proportion of the validators controlled by an attacker, what is the probability that the attacker ends up controlling a 2/3 majority in a randomly selected committee drawn from the full set of validators? This is what Vitalik looks at in the presentation, and where the 111 number comes from (a $\smash{2^{-40}}$ chance, one-in-a-trillion, of an attacker with 1/3 of the validators gaining by chance a 2/3 majority in any one committee).

Another issue is that the randomness that we are using (a RANDAO) is not unbiasable. If an attacker happens to control a number of block proposers at the end of an epoch, they can decide to reveal or not to reveal their blocks, gaining one bit of influence per validator on the next random number. This might allow an attacker to gain more control in the next round and so on. In this way, an attacker can gain some influence over committee selection. Having a good lower-bound on committee size helps to defend against this. Alternatively, we could in future use an unbiasable source of randomness such as a [verifiable delay function](/part4/research/vdf).

##### `MAX_VALIDATORS_PER_COMMITTEE`

This is just used for sizing some data structures, and is not particularly interesting. Reaching this limit would imply over 4 million active validators, staked with a total of 128 million Ether, which exceeds the [total supply](https://etherscan.io/stat/supply) today.

##### `SHUFFLE_ROUND_COUNT`

The beacon chain implements a [rather interesting](https://github.com/ethereum/eth2.0-specs/issues/563) way of shuffling validators in order to select committees, called the "swap-or-not shuffle". This shuffle proceeds in rounds, and the degree of shuffling is determined by the number of rounds: `SHUFFLE_ROUND_COUNT`. The time taken to shuffle is linear in the number of rounds, so for light-weight, non-mainnet configurations, the number of rounds can be reduced.

The value 90 was introduced in Vitalik's [initial commit](https://github.com/ethereum/eth2.0-specs/pull/576/commits/c58410e6ce9904c6619cd925b64fbd04c00b9a89) without explanation. The [original paper](https://link.springer.com/content/pdf/10.1007%2F978-3-642-32009-5_1.pdf) describing the shuffling technique seems to suggest that a cryptographically safe number of rounds is $6\log{N}$. With 90 rounds, then, we should be good for shuffling 3.3 million validators, which is close to the maximum number possible (given the Ether supply).

The main advantage of using this shuffling method is that light clients and others that are interested in only a small number of the committees at any time can compute only the committees they need without having to shuffle the entire set of active validators. This can be a big saving on computational resources. See [`compute_shuffled_index`](#compute_shuffled_index).

For more on the mechanics of the swap-or-not shuffle, check out [my explainer](https://hackmd.io/@benjaminion/shuffling).

[TODO: simplify and link, and backlink, to the main shuffling article]::

##### Hysteresis parameters

These parameters relate to the way that effective balance is changed (see [`EFFECTIVE_BALANCE_INCREMENT`](#effective_balance_increment) below). As described there, effective balance for a validator follows changes to the actual balance in a step-wise way, with [hysteresis](https://en.wikipedia.org/wiki/Hysteresis). This is to ensure that it does not change very often.

The original hysteresis design had an [unintended effect](https://github.com/ethereum/eth2.0-specs/issues/1609) that might have encouraged stakers to over-deposit or make multiple deposits in order to maintain a balance _above_ 32 Ether at all times. This is because, if a validator's balance were to drop below 32 Ether soon after depositing, however briefly, the effective balance would immediately drop to 31 Ether, and would take a long time to recover. This would result in a 3% reduction in rewards for a period.

This problem was addressed by [making the hysteresis configurable](https://github.com/ethereum/eth2.0-specs/pull/1627) via these parameters. Specifically, these settings mean:
 1. if a validators' balance falls 0.25&nbsp;Ether below its effective balance, then its effective balance is reduced by 1&nbsp;Ether
 2. if a validator's balance rises 1.25&nbsp;Ether above its effective balance, then its effective balance is increased by 1&nbsp;Ether

These calculations are done in [`process_final_updates()`](#final-updates).

#### Gwei values

| Name | Value |
| - | - |
| `MIN_DEPOSIT_AMOUNT` | `Gwei(2**0 * 10**9)` (= 1,000,000,000) |
| `MAX_EFFECTIVE_BALANCE` | `Gwei(2**5 * 10**9)` (= 32,000,000,000) |
| `EFFECTIVE_BALANCE_INCREMENT` | `Gwei(2**0 * 10**9)` (= 1,000,000,000) |

##### `MIN_DEPOSIT_AMOUNT`

`MIN_DEPOSIT_AMOUNT` is not actually used anywhere within the Phase&nbsp;0 Beacon Chain Specification document. Where it is used is within the [deposit contract](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/solidity_deposit_contract/deposit_contract.sol#L113) that [was deployed](https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa#code) to the Ethereum 1 chain. Any amount less than this value sent to the deposit contract is reverted.

##### `MAX_EFFECTIVE_BALANCE`

There is a concept of "effective balance" for validators: whatever a validator's actual total stake (balance), its voting power is weighted by its effective balance, even if it has much more at stake. Effective balance is also the amount on which all rewards, penalties, and slashings are calculated&mdash;it's used a lot in the protocol

The `MAX_EFFECTIVE_BALANCE` is the highest effective balance that a validator can have: 32 Ether. Any balance above this is ignored. Note that this means that staking rewards _don't_ compound in the usual case (unless our balance somehow falls below 32 Ether at some point).

There is a discussion in the [Design Rationale](https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Why-32-ETH-validator-sizes) of why 32 Ether was chosen as the staking amount. In short, we want enough validators to keep the chain both alive and secure under attack, but not so many that the message overhead on the network becomes too high.

##### `EFFECTIVE_BALANCE_INCREMENT`

Throughout the protocol, a quantity called "effective balance" is used instead of the validators' actual balances. Effective balance tracks the actual balance, with two differences: (1) effective balance is capped at `MAX_EFFECTIVE_BALANCE` no matter how high the actual balance of a validator is, and (2) effective balance is much more granular - it changes only in steps of `EFFECTIVE_BALANCE_INCREMENT` rather than [`Gwei`](#gwei).

This discretisation of balance is designed to reduce the amount of hashing required when making state updates. As we shall see, validators' actual balances are stored as a contiguous list in BeaconState. This is easy to update. Effective balances are stored in the individual validator records and are more costly to update (more hashing required). So we try to update effective balances relatively infrequently.

Effective balance is changed according to a process with hysteresis to avoid situations where it changes frequently. See [`HYSTERESIS_QUOTIENT`](#hysteresis_quotient).

You can read more about effective balance in the [Design Rationale](https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Effective-balances) and in [this article](https://www.attestant.io/posts/understanding-validator-effective-balance/).

#### Time parameters

| Name | Value | Unit | Duration |
| - | - | :-: | :-: |
| `MIN_ATTESTATION_INCLUSION_DELAY` | `uint64(2**0)` (= 1) | slots | 12 seconds |
| `SLOTS_PER_EPOCH` | `uint64(2**5)` (= 32) | slots | 6.4 minutes |
| `MIN_SEED_LOOKAHEAD` | `uint64(2**0)` (= 1) | epochs | 6.4 minutes |
| `MAX_SEED_LOOKAHEAD` | `uint64(2**2)` (= 4) | epochs | 25.6 minutes |
| `MIN_EPOCHS_TO_INACTIVITY_PENALTY` | `uint64(2**2)` (= 4) | epochs | 25.6 minutes |
| `EPOCHS_PER_ETH1_VOTING_PERIOD` | `uint64(2**6)` (= 64) | epochs | ~6.8 hours |
| `SLOTS_PER_HISTORICAL_ROOT` | `uint64(2**13)` (= 8,192) | slots | ~27 hours |

##### `MIN_ATTESTATION_INCLUSION_DELAY`

A design goal of Eth2 is not to heavily disadvantage validators that are running on lower-spec systems, or, conversely, to reduce any advantage gained by running on high-spec systems.

One aspect of performance is network bandwidth. When a validator becomes the block proposer, it needs to gather attestations from the rest of its committee. On a low-bandwidth link, this takes longer, and could result in the proposer not being able to include as many past attestations as other better-connected validators might, thus receiving lower rewards.

`MIN_ATTESTATION_INCLUSION_DELAY` was an attempt to "level the playing field" by setting a minimum number of slots before an attestation can be included in a beacon block. It was [originally set at 4](https://github.com/ethereum/eth2.0-specs/pull/143), with a 6 second slot time, allowing 24 seconds for attestations to propagate around the network.

It was [later set to one](https://github.com/ethereum/eth2.0-specs/pull/1157)&mdash;attestations are included as early as possible&mdash;and, now we are crosslinking shards every slot, this is the only value that makes sense. So it exists today as a kind of relic of the earlier design.

The current slot time of 12 seconds (see above) is assumed to allow sufficient time for attestations to propagate and be aggregated sufficently within one slot. If this proves not to be the case, then it may be lengthened later.

##### `SLOTS_PER_EPOCH`

When slots were six seconds, there were 64 slots per epoch. So the time between epoch boundaries is unchanged compared with the original design.

As a reminder, epoch transitions are where the heavy beacon chain state-transition calculation occurs, so we don't want them too close together. On the other hand, they are also the targets for finalisation, so we don't want them too far apart.

[TODO: why is 32 the right number?]::

##### `MIN_SEED_LOOKAHEAD`

A random seed is used to select all the committees and proposers for an epoch. Every epoch, the beacon chain accumulates randomness from proposers via the RANDAO and stores it. The seed for the current epoch is based on the RANDAO output from the epoch `MIN_SEED_LOOKUP + 1` ago. With `MIN_SEED_LOOKAHEAD` set to one, the effect is that we can know the seed for the current epoch and the next epoch, but not beyond (since the next-but-one epoch depends on randomness from the current epoch that hasn't been accumulated yet).

This mechanism is designed to allow sufficient time for committee members to find each other on the peer-to-peer network, and in Phase&nbsp;1 to sync up any data they will need. But preventing committee makeup being known too far ahead limits the opportunity for coordinated collusion between validators.

##### `MAX_SEED_LOOKAHEAD`

The above notwithstanding, if an attacker has a large proportion of the stake, or is, for example, able to DoS block proposers for a while, then it might be possible for the the attacker to predict the output of the RANDAO further ahead than `MIN_SEED_LOOKAHEAD` would normally allow. In which case the attacker might be able to manipulate the make up of committtees advantageously by performing judicious exits and activations of their validators.

To prevent this, we assume a maximum feasible lookahead that an attacker might achieve (that is, this parameter) and delay all activations and exits by this amount. With `MAX_SEED_LOOKAHEAD` set to 4, if only 10% of validators are online and honest, then the chance that an attacker can succeed in forecasting the seed beyond `MAX_SEED_LOOK_AHEAD - MIN_SEED_LOOKAHEAD` = 3 epochs is $\smash{0.9^{3\times32}}$, which is about 1 in 25,000.

##### `MIN_EPOCHS_TO_INACTIVITY_PENALTY`

The inactivity penalty is discussed [below](#inactivity_penalty_quotient_exp). This parameter sets the time until it kicks in: if the last finalised epoch is longer ago than this, then the beacon chain starts operating in "leak" mode. In this mode, participating validators no longer get rewarded, and validators that are not participating get penalised.

##### `EPOCHS_PER_ETH1_VOTING_PERIOD`

In order to safely onboard new validators, the beacon chain needs to take a view on what the Eth1 chain looks like. This is done by collecting votes from beacon block proposers - they are expected to consult an available Eth1 client in order to construct their vote.

`EPOCHS_PER_ETH1_VOTING_PERIOD * SLOTS_PER_EPOCH` is the total number of votes for Eth1 blocks that are collected. As soon as half of this number of votes are for the same Eth1 block, that block is adopted by the beacon chain and deposit processing can continue.

Rules for how validators select the right block to vote for are set out in the [validator guide](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/validator.md#get_eth1_data). [`ETH1_FOLLOW_DISTANCE`](#eth1_follow_distance) is the minimum depth of block that can be considered: this is very conservatively set to ensure that we never end up with some block that we've relied on subsequently being reorganised out of the Ethereum&nbsp;1 chain. For a detailed analysis of these parameters, see this [ethresear.ch post](https://ethresear.ch/t/on-the-way-to-eth1-finality/7041?u=benjaminion)

This parameter [was increased](https://github.com/ethereum/eth2.0-specs/pull/2093/files) from 32 to 64 epochs for the beacon chain mainnet. This is intended to allow devs more time to respond if there were any trouble on the Eth1 chain.

##### `SLOTS_PER_HISTORICAL_ROOT`

There have been several redesigns of the way the beacon chain stores its past history. The current design is a [double batched accumulator](https://ethresear.ch/t/double-batched-merkle-log-accumulator/571). The block root and state root for every slot are stored in the state for `SLOTS_PER_HISTORICAL_ROOT` slots. When that list is full, both lists are merkleised into a single Merkle root, which is added to the ever-growing `state.historical_roots` list.

#### State list lengths

The following parameters set the sizes of some lists in the beacon chain state. Some lists have natural sizes, others such as the validator registry need an explicit maximum size [to help with SSZ serialisation](https://github.com/ethereum/eth2.0-specs/pull/1180).

| Name | Value | Unit | Duration |
| - | - | :-: | :-: |
| `EPOCHS_PER_HISTORICAL_VECTOR` | `uint64(2**16)` (= 65,536) | epochs | ~0.8 years |
| `EPOCHS_PER_SLASHINGS_VECTOR` | `uint64(2**13)` (= 8,192) | epochs | ~36 days |
| `HISTORICAL_ROOTS_LIMIT` | `uint64(2**24)` (= 16,777,216) | historical roots | ~52,262 years |
| `VALIDATOR_REGISTRY_LIMIT` | `uint64(2**40)` (= 1,099,511,627,776) | validators |

##### `EPOCHS_PER_HISTORICAL_VECTOR`

This is the number of epochs of previous RANDAO mixes that are stored (one per epoch). Having access to past randao mixes allows historical shufflings to be recalculated. Since [Validator](#validator) records keep track of the activation and exit epochs of all past validators, we can thus reconstitute past committees as far back as we have the RANDAO values. This information can be used for slashing long-past attestations, for example. It is not clear how the value of this parameter [was decided](https://github.com/ethereum/eth2.0-specs/pull/1196).

##### `EPOCHS_PER_SLASHINGS_VECTOR`

In the epoch in which a misbehaving validator is slashed, its effective balance is added to an accumulator in the state. In this way, the `state.slashings` list tracks the total effective balance of all validators slashed during the last `EPOCHS_PER_SLASHINGS_VECTOR` epochs.

At a time `EPOCHS_PER_SLASHINGS_VECTOR // 2` after being slashed, a further penalty is applied to the slashed validator, based on the total amount of value slashed during the 4096 epochs before and the 4096 epochs after it was originally slashed.

The idea of this is to disproportionately punish coordinated attacks, in which many validators break the slashing conditions at the same time, while only lightly penalising validators that get slashed by making a mistake. Early designs for Eth2 would always slash a validator's entire deposit.

##### `HISTORICAL_ROOTS_LIMIT`

Every [`SLOTS_PER_HISTORICAL_ROOT`](#slots_per_historical_root) slots, the list of block roots and the list of state roots are merkleised and added to `state.historical_roots` list. This is sized so that it is possible to store these roots for the entire past history of the chain. Although this list is effectively unbounded, it grows at less than 10 KB per year.

Storing past roots like this allows historical Merkle proofs to be constructed if required.

##### `VALIDATOR_REGISTRY_LIMIT`

Every time the Eth1 deposit contract processes a deposit from a new validator (as identified by its public key), a new entry is appended to the `state.validators` list.

In the current design, validators are never removed from this list, even after exiting from being a validator. This is largely because there is nowhere yet to send a validator's remaining deposit and staking rewards, so they continue to need to be tracked in the beacon chain.

The maximum length of this list is `VALIDATOR_REGISTRY_LIMIT`, which is one trillion, so we ought to be OK for a while, especially given that the minimum deposit amount is 1 Ether.

#### Rewards and penalties

| Name | Value |
| - | - |
| `BASE_REWARD_FACTOR` | `uint64(2**6)` (= 64) |
| `WHISTLEBLOWER_REWARD_QUOTIENT` | `uint64(2**9)` (= 512) |
| `PROPOSER_REWARD_QUOTIENT` | `uint64(2**3)` (= 8) |
| `INACTIVITY_PENALTY_QUOTIENT` | `uint64(2**26)` (= 67,108,864) |
| `MIN_SLASHING_PENALTY_QUOTIENT` | `uint64(2**7)` (= 128) |
| `PROPORTIONAL_SLASHING_MULTIPLIER` | `uint64(1)` |
| `INACTIVITY_PENALTY_QUOTIENT_ALTAIR` | `uint64(3 * 2**24)` (= 50,331,648) |
| `MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR` | `uint64(2**6)` (= 64) |
| `PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR` | `uint64(2)` |

[TODO: explain presence of the old values]::

<!-- on keeping the old values: https://github.com/ethereum/consensus-specs/tree/dev/configs#forking -->

##### `BASE_REWARD_FACTOR`

This is the big knob to turn to change the issuance rate of Eth2. Almost all validator rewards are calculated in terms of a "base reward" which is calculated as,

`effective_balance * BASE_REWARD_FACTOR // integer_squareroot(total_balance) // BASE_REWARDS_PER_EPOCH`

where `effective_balance` is the individual validator's current effective balance and `total_balance` is the sum of the effective balances of all active validators.

Thus, the total validator rewards per epoch (the Eth2 issuance rate) could in principle be tuned by increasing or decreasing `BASE_REWARD_FACTOR`.

##### `WHISTLEBLOWER_REWARD_QUOTIENT`

One reward amount that is _not_ tied to the base reward is the whistleblower reward. This is a reward for providing a proof that a proposer or attestor has violated a slashing condition. The whistleblower reward is set at $\smash{\frac{1}{512}}$ of the effective balance of the slashed validator.

##### `PROPOSER_REWARD_QUOTIENT`

This is mostly used to apportion rewards between attesters and proposers when including attestations in blocks. For each included attestation, 7/8 ofthe reward goes to the attester, and 1/8 to the proposer that includes it. See [`get_proposer_reward()`](#get_proposer_reward) and [`get_inclusion_delay_deltas`](#get_inclusion_delay_deltas).

In addition, the above whistleblower reward can optionally be divided between the reporter of the slashing offence and the proposer that includes the report in a block. In principle, the reporter of the slashing receives 7/8 of the reward, and the block proposer 1/8. In the Phase&nbsp;0 spec, however, the whistleblower reward always gets awarded in its entirety to the block proposer, ignoring this parameter. It's quite hard to avoid whistleblowing reports being stolen by block proposers, so this makes sense, although zkProofs might help one day.

##### `INACTIVITY_PENALTY_QUOTIENT_ALTAIR`

If the beacon chain hasn't finalised an epoch for longer than [`MIN_EPOCHS_TO_INACTIVITY_PENALTY`](#min_epochs_to_inactivity_penalty) epochs, then it enters "leak" mode. In this mode, any validator that does not vote (or votes for an incorrect target) is penalised an amount each epoch of `effective_balance * finality_delay // INACTIVITY_PENALTY_QUOTIENT`. The effect of this is the inactivity leak described [below](#inactivity_penalty_quotient_exp).

This value [was increased](https://github.com/ethereum/eth2.0-specs/commit/157f7e8ef4be3675543980e68581eb4b73284763) from 2**24 for the beacon chain launch, with the intention of resetting it in a hardfork after a few months. The goal is to penalise validators less severely in case of non-finalisation due to implementation problems in the early days.

##### `MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR`

When a validator is first convicted of a slashable offence, an initial penalty is applied. This is calculated as,

`validator.effective_balance // MIN_SLASHING_PENALTY_QUOTIENT`

Thus, the initial slashing penalty is between 0.125 Ether and 0.25 Ether depending on the validator's effective balance (which is between 16 and 32 Ether; note that effective balance is denominated in Gwei).

A further slashing penalty is applied later based on the total amount of balance slashed during a period of [`EPOCHS_PER_SLASHINGS_VECTOR`](#epochs_per_slashings_vector).

This value [was increased](https://github.com/ethereum/eth2.0-specs/commit/157f7e8ef4be3675543980e68581eb4b73284763) from 2**5 for the beacon chain launch, with the intention of resetting it in a hardfork after a few months. The goal is to punish validators less severely in case of slashing due to implementation problems in the early days.

##### `PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR`

[TODO: rework and move to the right places]::

See [below](#proportional_slashing_multiplier_exp).

<a id="inactivity_penalty_quotient_exp"></a>

> - The `INACTIVITY_PENALTY_QUOTIENT` equals `INVERSE_SQRT_E_DROP_TIME**2` where `INVERSE_SQRT_E_DROP_TIME := 2**13` epochs (about 36 days) is the time it takes the inactivity penalty to reduce the balance of non-participating validators to about `1/sqrt(e) ~= 60.6%`. Indeed, the balance retained by offline validators after `n` epochs is about `(1 - 1/INACTIVITY_PENALTY_QUOTIENT)**(n**2/2)`; so after `INVERSE_SQRT_E_DROP_TIME` epochs, it is roughly `(1 - 1/INACTIVITY_PENALTY_QUOTIENT)**(INACTIVITY_PENALTY_QUOTIENT/2) ~= 1/sqrt(e)`. Note this value will be upgraded to `2**24` after Phase 0 mainnet stabilizes to provide a faster recovery in the event of an inactivity leak.

The idea for the inactivity leak (aka the quadratic leak) was proposed in the original [Casper FFG paper](https://arxiv.org/abs/1710.09437). The problem it addresses is that, if a large fraction of the validator set were to go offline at the same time, it would not be possible to continue finalising checkpoints, since a 2/3 majority of the whole validator set is required for finalisation. We've seen this happen on testnets when the participation metric falls below 67%.

In order to recover, the inactivity leak gradually reduces the stakes of validators who are not making attestations until, eventually, the remaining participating validators control 2/3 of the remaining stake. They can then begin to finalise checkpoints once again.

In the calculation here, we are solving (a discrete form of) the differential equation $\smash{\frac{dB}{dt}=-\frac{Bt}{\alpha}}$, where $B$ is the balance and $\alpha$ is the value of [`INACTIVITY_PENALTY_QUOTIENT`](#inactivity_penalty_quotient), and the amount leaked at each step increases in proportion to the time $t$ since finality. The solution to this differential equation is $\smash{B(t)=B_0e^{-t^2/2\alpha}}$. From this it can be confirmed that `INVERSE_SQRT_E_DROP_TIME`, the time taken to reduce starting balances by $\smash{e^{\frac{1}{2}}}$, is $t=\sqrt{\alpha}$. The second half of the spec paragraph is just a calculus-avoiding way of expressing the same thing.

With these parameters, it would take about 43 days for a validator to leak half its deposit and then be ejected for falling to the [`EJECTION_BALANCE`](#ejection_balance) threshold. (Calculated as $t = \sqrt{2\alpha\ln{2}}$ epochs for the balance to fall by half.) Note that non-particpating validators don't have to be ejected to restore finality: it is sufficient only to reduce their stakes to 2/3 of the total.

This inactivity penalty mechanism is designed to protect the chain long-term in the face of catastrophic events (sometimes referred to as the ability to survive World War III). The result might be that the beacon chain could permanently split into two independent chains either side of a network partition, and this is assumed to be a reasonable outcome for any problem that can't be fixed in a few weeks. In this sense, the beacon chain technically prioritises availability over consistency. (You [can't have both](https://en.wikipedia.org/wiki/CAP_theorem).)

<a id="proportional_slashing_multiplier_exp"></a>

> - The `PROPORTIONAL_SLASHING_MULTIPLIER` is set to `1` at initial mainnet launch, resulting in one-third of the minimum accountable safety margin in the event of a finality attack. After Phase 0 mainnet stablizes, this value will be upgraded to `3` to provide the maximal minimum accoutable safety margin.

When a validator has been slashed, a further penalty is later applied to the validator based on how many other validators were slashed during a window of size [`EPOCHS_PER_SLASHINGS_VECTOR`](#epochs_per_slashings_vector) epochs centred on that slashing event (approximately 18 days before and after).

The proportion of the validator's remaining effective balance that will be subtracted [is calculated](#slashings) as, `PROPORTIONAL_SLASHING_MULTIPLIER` multiplied by the sum of the effective balances of the slashed validators in the window, divided by the total effective balance of all validators. The idea of this mechanism is to punish accidents lightly (in which only a small number of validators were slashed) and attacks heavily (where many validators coordinated to double vote).

To finalise conflicting checkpoints, at least a third of the balance must have voted for both. That's why the "natural" setting of `PROPORTIONAL_SLASHING_MULTIPLIER` is three: those slashed validators will lose their entire stakes due to this clear attack.

#### Max operations per block

<a id="max_proposer_slashings"></a>
<a id="max_attester_slashings"></a>
<a id="max_attestations"></a>
<a id="max_deposits"></a>
<a id="max_voluntary_exits"></a>

| Name | Value |
| - | - |
| `MAX_PROPOSER_SLASHINGS` | `2**4` (= 16) |
| `MAX_ATTESTER_SLASHINGS` | `2**1` (= 2) |
| `MAX_ATTESTATIONS` | `2**7` (= 128) |
| `MAX_DEPOSITS` | `2**4` (= 16) |
| `MAX_VOLUNTARY_EXITS` | `2**4` (= 16) |

These parameters are used to size lists in the beacon block bodies for the purposes of SSZ serialisation, as well as constraining the maximum size of beacon blocks so that they can propagate efficiently, and avoid DoS attacks.

With these settings, the maximum size of a beacon block (before compression) is 123,016 bytes. By far the largest object is the [AttesterSlashing](#attesterslashing), at up to 33,216 bytes. However, a single attester slashing can be used to slash many misbehaving validators at the same time (assuming that in an attack, many validators would make the same conflicting vote).

With some assumptions on average behaviour and compressibility, this leads to an average block size of around 36 KBytes, compressing down to 22 KBytes, in the worst case (with the maximum number of validators, and the maximum average number of possible slashings).

Some calculations to support the above can be found for each of the containers in the [next section](#containers). Also on [this spreadsheet](https://docs.google.com/spreadsheets/d/19ZGbIFaIi5quIvpB3Aa3VRgurKPBG9NMrJB7LGMBwXI/edit?ts=5e497720#gid=0) (numbers are a bit out of date). Protolambda has [a script](https://gist.github.com/protolambda/db75c7faa1e94f2464787a480e5d613e) for calculating all the Eth2 container minimum and maximum sizes.

Some comments on the chosen values:
 - I have suggested [elsewhere](https://github.com/ethereum/eth2.0-specs/issues/2152) reducing `MAX_DEPOSITS` from sixteen to one.
 - At first sight there looks to be a disparity between the number of proposer slashings and the number of attester slashings that may be included in a block. But note that an attester slashing (a) can be much larger than a proposer slashing, and (b) as noted above, can result in many more validators getting slashed than a proposer slashing.
 - `MAX_ATTESTATIONS` is double the value of [`MAX_COMMITTEES_PER_SLOT`](#max_committees_per_slot). This allows there to be an empty slot (no block proposal), yet still include all the attestations for the empty slot in the next slot, since, ideally, each committee produces a single aggregate attestation.

#### Sync committee

| Name | Value | Unit | Duration |
| - | - | - | - |
| `SYNC_COMMITTEE_SIZE` | `uint64(2**9)` (= 512) | Validators | |
| `EPOCHS_PER_SYNC_COMMITTEE_PERIOD` | `uint64(2**8)` (= 256) | epochs | ~27 hours |

TODO

### Configuration <!-- /part3/config/configuration -->

#### Genesis Settings

| Name | Value |
| - | - |
| `GENESIS_FORK_VERSION` | `Version('0x00000000')` |
| `GENESIS_DELAY` | `uint64(604800)` (7 days) |

##### `GENESIS_FORK_VERSION`

[TODO: update]::

Forks/upgrades are expected, if only when we move to Phase&nbsp;1. This is the fork version the beacon chain starts with at its "Genesis" event: the point at which the chain first starts producing blocks.

##### `GENESIS_DELAY`

[TODO: rework and link to the new launching section for Altair]::

The `GENESIS_DELAY` is a grace period to allow nodes and node operators time to prepare for the Genesis event. The Genesis event cannot occur before [`MIN_GENESIS_TIME`](#min_genesis_time). If there are not [`MIN_GENESIS_ACTIVE_VALIDATOR_COUNT`](#min_genesis_active_validator_count) registered validators sufficiently in advance of `MIN_GENESIS_TIME`, then Genesis will occur `GENESIS_DELAY` seconds after enough validators have been registered.

The Genesis event (beacon chain start) was originally designed to take place at midnight UTC, even for testnets, which was not always convenient. This has now been [changed](https://github.com/ethereum/eth2.0-specs/pull/1866). Once we're past `MIN_GENESIS_TIME - GENESIS_DELAY`, Genesis could end up being at any time of the day, depending on when the last depost needed comes in. In the event, genesis occurred at 12:00:23 UTC on the 1st of December 2020, according to the timestamp of Ethereum block number [11320899](https://etherscan.io/block/11320899) plus `GENESIS_DELAY`.

#### Time parameters

| Name | Value | Unit | Duration |
| - | - | :-: | :-: |
| `SECONDS_PER_SLOT` | `uint64(12)` | seconds | 12 seconds |
| `SECONDS_PER_ETH1_BLOCK` | `uint64(14)` | seconds | 14 seconds |
| `MIN_VALIDATOR_WITHDRAWABILITY_DELAY` | `uint64(2**8)` (= 256) | epochs | ~27 hours |
| `SHARD_COMMITTEE_PERIOD` | `uint64(2**8)` (= 256) | epochs | ~27 hours |
| `ETH1_FOLLOW_DISTANCE` | `uint64(2**11)` (= 2,048) | Eth1 blocks | ~8 hours |

##### `SECONDS_PER_SLOT`

This was originally six seconds, but [is now twelve](https://github.com/ethereum/eth2.0-specs/pull/1428#issue-327424983), and has previously been [other values](https://github.com/ethereum/eth2.0-specs/pull/143/files#diff-51a43328a58414e132a744f3771f018cL42). The main limiting factors in shortening this are the time necessary for block proposals to propagate among committees, and the time needed for validators to communicate and aggregate their votes for the block.

This slot length has to account for shard blocks as well in later phases. There was some discussion around having the beacon chain and shards on differing cadences, but the latest Phase&nbsp;1 design tightly couples the beacon chain with the shards. Shard blocks under the new proposal are much larger, which led to the lengthening of the slot to 12 seconds.

There is a general intention to shorten this in future, perhaps to [8 seconds](https://github.com/ethereum/eth2.0-specs/issues/1890#issue-638024803, if it proves possible to do this in practice.

[TODO: also reference Vitalik's builder/proposer split that makes this 16 seconds]::

##### `SECONDS_PER_ETH1_BLOCK`

The assumed block interval on the Eth1 chain, used when calculating how long we will wait before trusting that an Eth1 block will not be reorganised.

The [average Eth1 block time](https://etherscan.io/chart/blocktime) since January 2020 has actually been nearer 13 seconds, but never mind. The net effect is that we will be going a little deeper back in the Eth1 chain than [`ETH1_FOLLOW_DISTANCE`](#eth1_follow_distance) would suggest, which ought to be safer.

##### `MIN_VALIDATOR_WITHDRAWABILITY_DELAY`

Once a validator has made it through the exit queue it can stop participating. However, its funds remain locked for the duration of `MIN_VALIDATOR_WITHDRAWABILITY_DELAY`. In Phase&nbsp;0 this is to allow some time for any slashable behaviour to be detected and reported so that the validator can still be penalised (in which case the validator's withdrawable time is pushed [`EPOCHS_PER_SLASHINGS_VECTOR`](#epochs_per_slashings_vector) into the future). In Phase&nbsp;1 this delay will also allow for shard rewards to be credited and for proof of custody challenges to be mounted.

Note that in Phases&nbsp;0 and 1 there is no mechanism to withdraw a validator's balance in any case. But being in a "withdrawable" state means that a validator has now fully exited from the protocol.

##### `SHARD_COMMITTEE_PERIOD`

This really anticipates Phase&nbsp;1. The [idea is](https://github.com/ethereum/eth2.0-specs/issues/675#issuecomment-468159678) that it's bad for the stability of longer-lived shard committees if validators can appear and disappear very rapidly. Therefore, a validator cannot initiate a voluntary exit until `SHARD_COMMITTEE_PERIOD` epochs after it is activated. Note that it could still be ejected by slashing before this time.

##### `ETH1_FOLLOW_DISTANCE`

This is the minimum depth of block on the Ethereum&nbsp;1 chain that can be considered by the Eth2 chain: it applies to the [Genesis](#genesis) process and the [processing of deposits](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/validator.md#process-deposit) by validators.  The Eth1 chain depth is estimated by multiplying this value by the target average Eth1 block time, [`SECONDS_PER_ETH1_BLOCK`](#seconds_per_eth1_block).

The value of `ETH1_FOLLOW_DISTANCE` is not based on the expected depth of any reorgs of the Eth1 chain, which are rarely if ever more than 2-3 blocks deep. It is about providing time to respond to an incident on the Eth1 chain such as a consensus failure between clients.

This parameter [was increased](https://github.com/ethereum/eth2.0-specs/pull/2093/files) from 1024 to 2048 blocks for the beacon chain mainnet, to allow devs more time to respond if there were any trouble on the Eth1 chain.

#### Validator Cycle

| Name | Value |
| - | - |
| `EJECTION_BALANCE` | `Gwei(2**4 * 10**9)` (= 16,000,000,000) |
| `MIN_PER_EPOCH_CHURN_LIMIT` | `uint64(2**2)` (= 4) |
| `CHURN_LIMIT_QUOTIENT` | `uint64(2**16)` (= 65,536) |

##### `EJECTION_BALANCE`

If a validator's effective balance falls to 16 Ether or below then it is exited from the system (kicked out of the active validator set). This is most likely to happen as a result of the "inactivity leak" which gradually reduces the balances of inactive validators in order to maintain the liveness of the beacon chain.

Note that the dependence on effective balance means that the validator is queued for ejection as soon as its actual balance falls to 16.75 Ether.

##### `MIN_PER_EPOCH_CHURN_LIMIT`

Validators are allowed to exit the system and cease validating, and new validators may apply to join at any time. For [interesting reasons](https://notes.ethereum.org/@vbuterin/rkhCgQteN#Exiting), a design decision was made to apply a rate-limit to entries (activations) and exits. Basically, it is important in proof of stake protocols that the validator set not change too quickly.

In the normal case, a validator is able to exit fairly swiftly: it just needs to wait `MAX_SEED_LOOKAHEAD` (currently four) epochs. However, if there are large numbers of validators wishing to exit at the same time, a queue forms with a limited number of exits allowed per epoch. The minimum number of exits per epoch (the minimum "churn") is `MIN_PER_EPOCH_CHURN_LIMIT`, so that validators can always eventually exit. The actual allowed churn per epoch is [calculated](#get_validator_churn_limit) in conjunction with `CHURN_LIMIT_QUOTIENT`.

The same applies to new validator activations, once a validator has been marked as eligible for activation.

##### `CHURN_LIMIT_QUOTIENT`

This is used in conjunction with `MIN_PER_EPOCH_CHURN_LIMIT` to [calculate](#get_validator_churn_limit) the actual number of validator exits and activations allowed per epoch. The number of exits allowed is `max(MIN_PER_EPOCH_CHURN_LIMIT, n // CHURN_LIMIT_QUOTIENT)`, where `n` is the number of active validators. The same applies to activations.

#### Inactivity penalties

| Name | Value | Description |
| - | - | - |
| `INACTIVITY_SCORE_BIAS` | `uint64(2**2)` (= 4) | score points per inactive epoch |
| `INACTIVITY_SCORE_RECOVERY_RATE` | `uint64(2**4)` (= 16) | score points per leak-free epoch |

TODO

## Containers <!-- /part3/containers -->

### Preamble

The following types are [SimpleSerialize (SSZ)](../../ssz/simple-serialize.md) containers.

*Note*: The definitions are ordered topologically to facilitate execution of the spec.

*Note*: Fields missing in container instantiations default to their zero value.

TODO

### Misc dependencies <!-- /part3/containers/dependencies -->

#### `Fork`

```python
class Fork(Container):
    previous_version: Version
    current_version: Version
    epoch: Epoch  # Epoch of latest fork
```

#### `ForkData`

```python
class ForkData(Container):
    current_version: Version
    genesis_validators_root: Root
```

#### `Checkpoint`

```python
class Checkpoint(Container):
    epoch: Epoch
    root: Root
```

#### `Validator`

```python
class Validator(Container):
    pubkey: BLSPubkey
    withdrawal_credentials: Bytes32  # Commitment to pubkey for withdrawals
    effective_balance: Gwei  # Balance at stake
    slashed: boolean
    # Status epochs
    activation_eligibility_epoch: Epoch  # When criteria for activation were met
    activation_epoch: Epoch
    exit_epoch: Epoch
    withdrawable_epoch: Epoch  # When validator can withdraw funds
```

#### `AttestationData`

```python
class AttestationData(Container):
    slot: Slot
    index: CommitteeIndex
    # LMD GHOST vote
    beacon_block_root: Root
    # FFG vote
    source: Checkpoint
    target: Checkpoint
```

#### `IndexedAttestation`

```python
class IndexedAttestation(Container):
    attesting_indices: List[ValidatorIndex, MAX_VALIDATORS_PER_COMMITTEE]
    data: AttestationData
    signature: BLSSignature
```

#### `PendingAttestation`

```python
class PendingAttestation(Container):
    aggregation_bits: Bitlist[MAX_VALIDATORS_PER_COMMITTEE]
    data: AttestationData
    inclusion_delay: Slot
    proposer_index: ValidatorIndex
```

#### `Eth1Data`

```python
class Eth1Data(Container):
    deposit_root: Root
    deposit_count: uint64
    block_hash: Hash32
```

#### `HistoricalBatch`

```python
class HistoricalBatch(Container):
    block_roots: Vector[Root, SLOTS_PER_HISTORICAL_ROOT]
    state_roots: Vector[Root, SLOTS_PER_HISTORICAL_ROOT]
```

#### `DepositMessage`

```python
class DepositMessage(Container):
    pubkey: BLSPubkey
    withdrawal_credentials: Bytes32
    amount: Gwei
```

#### `DepositData`

```python
class DepositData(Container):
    pubkey: BLSPubkey
    withdrawal_credentials: Bytes32
    amount: Gwei
    signature: BLSSignature  # Signing over DepositMessage
```

#### `BeaconBlockHeader`

```python
class BeaconBlockHeader(Container):
    slot: Slot
    proposer_index: ValidatorIndex
    parent_root: Root
    state_root: Root
    body_root: Root
```

#### `SigningData`

```python
class SigningData(Container):
    object_root: Root
    domain: Domain
```

TODO

### Beacon operations <!-- /part3/containers/operations -->

#### `ProposerSlashing`

```python
class ProposerSlashing(Container):
    signed_header_1: SignedBeaconBlockHeader
    signed_header_2: SignedBeaconBlockHeader
```

#### `AttesterSlashing`

```python
class AttesterSlashing(Container):
    attestation_1: IndexedAttestation
    attestation_2: IndexedAttestation
```

#### `Attestation`

```python
class Attestation(Container):
    aggregation_bits: Bitlist[MAX_VALIDATORS_PER_COMMITTEE]
    data: AttestationData
    signature: BLSSignature
```

#### `Deposit`

```python
class Deposit(Container):
    proof: Vector[Bytes32, DEPOSIT_CONTRACT_TREE_DEPTH + 1]  # Merkle path to deposit root
    data: DepositData
```

#### `VoluntaryExit`

```python
class VoluntaryExit(Container):
    epoch: Epoch  # Earliest epoch when voluntary exit can be processed
    validator_index: ValidatorIndex
```

TODO

### Beacon blocks <!-- /part3/containers/blocks -->

#### `BeaconBlockBody`

```python
class BeaconBlockBody(Container):
    randao_reveal: BLSSignature
    eth1_data: Eth1Data  # Eth1 data vote
    graffiti: Bytes32  # Arbitrary data
    # Operations
    proposer_slashings: List[ProposerSlashing, MAX_PROPOSER_SLASHINGS]
    attester_slashings: List[AttesterSlashing, MAX_ATTESTER_SLASHINGS]
    attestations: List[Attestation, MAX_ATTESTATIONS]
    deposits: List[Deposit, MAX_DEPOSITS]
    voluntary_exits: List[SignedVoluntaryExit, MAX_VOLUNTARY_EXITS]
    sync_aggregate: SyncAggregate  # [New in Altair]
```

#### `BeaconBlock`

```python
class BeaconBlock(Container):
    slot: Slot
    proposer_index: ValidatorIndex
    parent_root: Root
    state_root: Root
    body: BeaconBlockBody
```

TODO

### Beacon state <!-- /part3/containers/state -->

#### `BeaconState`

```python
class BeaconState(Container):
    # Versioning
    genesis_time: uint64
    genesis_validators_root: Root
    slot: Slot
    fork: Fork
    # History
    latest_block_header: BeaconBlockHeader
    block_roots: Vector[Root, SLOTS_PER_HISTORICAL_ROOT]
    state_roots: Vector[Root, SLOTS_PER_HISTORICAL_ROOT]
    historical_roots: List[Root, HISTORICAL_ROOTS_LIMIT]
    # Eth1
    eth1_data: Eth1Data
    eth1_data_votes: List[Eth1Data, EPOCHS_PER_ETH1_VOTING_PERIOD * SLOTS_PER_EPOCH]
    eth1_deposit_index: uint64
    # Registry
    validators: List[Validator, VALIDATOR_REGISTRY_LIMIT]
    balances: List[Gwei, VALIDATOR_REGISTRY_LIMIT]
    # Randomness
    randao_mixes: Vector[Bytes32, EPOCHS_PER_HISTORICAL_VECTOR]
    # Slashings
    slashings: Vector[Gwei, EPOCHS_PER_SLASHINGS_VECTOR]  # Per-epoch sums of slashed effective balances
    # Participation
    previous_epoch_participation: List[ParticipationFlags, VALIDATOR_REGISTRY_LIMIT]  # [Modified in Altair]
    current_epoch_participation: List[ParticipationFlags, VALIDATOR_REGISTRY_LIMIT]  # [Modified in Altair]
    # Finality
    justification_bits: Bitvector[JUSTIFICATION_BITS_LENGTH]  # Bit set for every recent justified epoch
    previous_justified_checkpoint: Checkpoint
    current_justified_checkpoint: Checkpoint
    finalized_checkpoint: Checkpoint
    # Inactivity
    inactivity_scores: List[uint64, VALIDATOR_REGISTRY_LIMIT]  # [New in Altair]
    # Sync
    current_sync_committee: SyncCommittee  # [New in Altair]
    next_sync_committee: SyncCommittee  # [New in Altair]
```

TODO

### Signed envelopes <!-- /part3/containers/envelopes -->

#### `SignedVoluntaryExit`

```python
class SignedVoluntaryExit(Container):
    message: VoluntaryExit
    signature: BLSSignature
```

#### `SignedBeaconBlock`

```python
class SignedBeaconBlock(Container):
    message: BeaconBlock
    signature: BLSSignature
```

#### `SignedBeaconBlockHeader`

```python
class SignedBeaconBlockHeader(Container):
    message: BeaconBlockHeader
    signature: BLSSignature
```

TODO

### Sync Committee

#### `SyncAggregate`

```python
class SyncAggregate(Container):
    sync_committee_bits: Bitvector[SYNC_COMMITTEE_SIZE]
    sync_committee_signature: BLSSignature
```

#### `SyncCommittee`

```python
class SyncCommittee(Container):
    pubkeys: Vector[BLSPubkey, SYNC_COMMITTEE_SIZE]
    aggregate_pubkey: BLSPubkey
```

## Helper Functions <!-- /part3/helper -->

### Preamble

*Note*: The definitions below are for specification purposes and are not necessarily optimal implementations.

TODO

### Math <!-- /part3/helper/math -->

#### `integer_squareroot`

```python
def integer_squareroot(n: uint64) -> uint64:
    """
    Return the largest integer ``x`` such that ``x**2 <= n``.
    """
    x = n
    y = (x + 1) // 2
    while y < x:
        x = y
        y = (x + n // x) // 2
    return x
```

#### `xor`

```python
def xor(bytes_1: Bytes32, bytes_2: Bytes32) -> Bytes32:
    """
    Return the exclusive-or of two 32-byte strings.
    """
    return Bytes32(a ^ b for a, b in zip(bytes_1, bytes_2))
```

#### `uint_to_bytes`

`def uint_to_bytes(n: uint) -> bytes` is a function for serializing the `uint` type object to bytes in ``ENDIANNESS``-endian. The expected length of the output is the byte-length of the `uint` type.

#### `bytes_to_uint64`

```python
def bytes_to_uint64(data: bytes) -> uint64:
    """
    Return the integer deserialization of ``data`` interpreted as ``ENDIANNESS``-endian.
    """
    return uint64(int.from_bytes(data, ENDIANNESS))
```

TODO

### Crypto <!-- /part3/helper/crypto -->

#### `hash`

`def hash(data: bytes) -> Bytes32` is SHA256.

#### `hash_tree_root`

`def hash_tree_root(object: SSZSerializable) -> Root` is a function for hashing objects into a single root by utilizing a hash tree structure, as defined in the [SSZ spec](../../ssz/simple-serialize.md#merkleization).

#### BLS signatures

The [IETF BLS signature draft standard v4](https://tools.ietf.org/html/draft-irtf-cfrg-bls-signature-04) with ciphersuite `BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_POP_` defines the following functions:

- `def Sign(privkey: int, message: Bytes) -> BLSSignature`
- `def Verify(pubkey: BLSPubkey, message: Bytes, signature: BLSSignature) -> bool`
- `def Aggregate(signatures: Sequence[BLSSignature]) -> BLSSignature`
- `def FastAggregateVerify(pubkeys: Sequence[BLSPubkey], message: Bytes, signature: BLSSignature) -> bool`
- `def AggregateVerify(pubkeys: Sequence[BLSPubkey], messages: Sequence[Bytes], signature: BLSSignature) -> bool`
- `def KeyValidate(pubkey: BLSPubkey) -> bool`

The above functions are accessed through the `bls` module, e.g. `bls.Verify`.

#### `eth_aggregate_pubkeys`

```python
def eth_aggregate_pubkeys(pubkeys: Sequence[BLSPubkey]) -> BLSPubkey:
    """
    Return the aggregate public key for the public keys in ``pubkeys``.

    NOTE: the ``+`` operation should be interpreted as elliptic curve point addition, which takes as input
    elliptic curve points that must be decoded from the input ``BLSPubkey``s.
    This implementation is for demonstrative purposes only and ignores encoding/decoding concerns.
    Refer to the BLS signature draft standard for more information.
    """
    assert len(pubkeys) > 0
    # Ensure that the given inputs are valid pubkeys
    assert all(bls.KeyValidate(pubkey) for pubkey in pubkeys)

    result = copy(pubkeys[0])
    for pubkey in pubkeys[1:]:
        result += pubkey
    return result
```

<!-- https://github.com/ethereum/consensus-specs/issues/2369 -->

#### `eth_fast_aggregate_verify`

```python
def eth_fast_aggregate_verify(pubkeys: Sequence[BLSPubkey], message: Bytes32, signature: BLSSignature) -> bool:
    """
    Wrapper to ``bls.FastAggregateVerify`` accepting the ``G2_POINT_AT_INFINITY`` signature when ``pubkeys`` is empty.
    """
    if len(pubkeys) == 0 and signature == G2_POINT_AT_INFINITY:
        return True
    return bls.FastAggregateVerify(pubkeys, message, signature)
```

TODO

### Predicates <!-- /part3/helper/predicates -->

#### `is_active_validator`

```python
def is_active_validator(validator: Validator, epoch: Epoch) -> bool:
    """
    Check if ``validator`` is active.
    """
    return validator.activation_epoch <= epoch < validator.exit_epoch
```

#### `is_eligible_for_activation_queue`

```python
def is_eligible_for_activation_queue(validator: Validator) -> bool:
    """
    Check if ``validator`` is eligible to be placed into the activation queue.
    """
    return (
        validator.activation_eligibility_epoch == FAR_FUTURE_EPOCH
        and validator.effective_balance == MAX_EFFECTIVE_BALANCE
    )
```

#### `is_eligible_for_activation`

```python
def is_eligible_for_activation(state: BeaconState, validator: Validator) -> bool:
    """
    Check if ``validator`` is eligible for activation.
    """
    return (
        # Placement in queue is finalized
        validator.activation_eligibility_epoch <= state.finalized_checkpoint.epoch
        # Has not yet been activated
        and validator.activation_epoch == FAR_FUTURE_EPOCH
    )
```

#### `is_slashable_validator`

```python
def is_slashable_validator(validator: Validator, epoch: Epoch) -> bool:
    """
    Check if ``validator`` is slashable.
    """
    return (not validator.slashed) and (validator.activation_epoch <= epoch < validator.withdrawable_epoch)
```

#### `is_slashable_attestation_data`

```python
def is_slashable_attestation_data(data_1: AttestationData, data_2: AttestationData) -> bool:
    """
    Check if ``data_1`` and ``data_2`` are slashable according to Casper FFG rules.
    """
    return (
        # Double vote
        (data_1 != data_2 and data_1.target.epoch == data_2.target.epoch) or
        # Surround vote
        (data_1.source.epoch < data_2.source.epoch and data_2.target.epoch < data_1.target.epoch)
    )
```

#### `is_valid_indexed_attestation`

```python
def is_valid_indexed_attestation(state: BeaconState, indexed_attestation: IndexedAttestation) -> bool:
    """
    Check if ``indexed_attestation`` is not empty, has sorted and unique indices and has a valid aggregate signature.
    """
    # Verify indices are sorted and unique
    indices = indexed_attestation.attesting_indices
    if len(indices) == 0 or not indices == sorted(set(indices)):
        return False
    # Verify aggregate signature
    pubkeys = [state.validators[i].pubkey for i in indices]
    domain = get_domain(state, DOMAIN_BEACON_ATTESTER, indexed_attestation.data.target.epoch)
    signing_root = compute_signing_root(indexed_attestation.data, domain)
    return bls.FastAggregateVerify(pubkeys, signing_root, indexed_attestation.signature)
```

#### `is_valid_merkle_branch`

```python
def is_valid_merkle_branch(leaf: Bytes32, branch: Sequence[Bytes32], depth: uint64, index: uint64, root: Root) -> bool:
    """
    Check if ``leaf`` at ``index`` verifies against the Merkle ``root`` and ``branch``.
    """
    value = leaf
    for i in range(depth):
        if index // (2**i) % 2:
            value = hash(branch[i] + value)
        else:
            value = hash(value + branch[i])
    return value == root
```

TODO

### Misc <!-- /part3/helper/misc -->

#### `compute_shuffled_index`

```python
def compute_shuffled_index(index: uint64, index_count: uint64, seed: Bytes32) -> uint64:
    """
    Return the shuffled index corresponding to ``seed`` (and ``index_count``).
    """
    assert index < index_count

    # Swap or not (https://link.springer.com/content/pdf/10.1007%2F978-3-642-32009-5_1.pdf)
    # See the 'generalized domain' algorithm on page 3
    for current_round in range(SHUFFLE_ROUND_COUNT):
        pivot = bytes_to_uint64(hash(seed + uint_to_bytes(uint8(current_round)))[0:8]) % index_count
        flip = (pivot + index_count - index) % index_count
        position = max(index, flip)
        source = hash(
            seed
            + uint_to_bytes(uint8(current_round))
            + uint_to_bytes(uint32(position // 256))
        )
        byte = uint8(source[(position % 256) // 8])
        bit = (byte >> (position % 8)) % 2
        index = flip if bit else index

    return index
```

See the [section on Shuffling](/part2/building_blocks/shuffling) for a detailed exposition of this algorithm.

#### `compute_proposer_index`

```python
def compute_proposer_index(state: BeaconState, indices: Sequence[ValidatorIndex], seed: Bytes32) -> ValidatorIndex:
    """
    Return from ``indices`` a random index sampled by effective balance.
    """
    assert len(indices) > 0
    MAX_RANDOM_BYTE = 2**8 - 1
    i = uint64(0)
    total = uint64(len(indices))
    while True:
        candidate_index = indices[compute_shuffled_index(i % total, total, seed)]
        random_byte = hash(seed + uint_to_bytes(uint64(i // 32)))[i % 32]
        effective_balance = state.validators[candidate_index].effective_balance
        if effective_balance * MAX_RANDOM_BYTE >= MAX_EFFECTIVE_BALANCE * random_byte:
            return candidate_index
        i += 1
```

There is exactly one beacon block proposer per slot, selected randomly from among all the active validators. The seed parameter is set in [`get_beacon_proposer_index`](#get_beacon_proposer_index) based on the epoch and slot. Note that there is a small but finite probability of the same validator being called on to propose a block more than once in an epoch.

A validator's chance of being the proposer is [weighted](https://github.com/ethereum/eth2.0-specs/pull/772) by its effective balance: a validator with a 32 Ether effective balance is twice as likely to be chosen as a validator with a 16 Ether effective balance.

[TODO: link to Effective Balance]::

To account for the need to weight by effective balance, this is implemented as a try-and-increment algorithm. A counter `i` starts at zero. This counter does double duty:
 - First `i` is used to uniformly select a candidate proposer with probability $1/N$ where, $N$ is the number of active validators. This is done by using the [`compute_shuffled_index`](#compute_shuffled_index) routine to shuffle index `i` to a new location, which is then the `candidate_index`.
 - Then `i` is used to generate a pseudo-random byte using the hash function as a seeded PRNG with at least 256 bits of output. The lower 5 bits of `i` select a byte in the hash function, and the upper bits salt the seed. (An obvious optimisation is that the output of the hash changes only once every 32 iterations.)

The `if` test is where the weighting by effective balance is done. If the candidate has `MAX_EFFECTIVE_BALANCE`, it will always pass this test and be returned as the proposer. If the candidate has a fraction of `MAX_EFFECTIVE_BALANCE` then that fraction is the probability of being returned as proposer.

If the candidate is not chosen, then `i` is incremented and we try again. Since the minimum effective balance is half of the maximum, then this ought to terminate fairly swiftly. In the worst case, all validators have 16 Ether effective balance and the chance of having to do another iteration is 50%, in which case there is a one in a million chance of having to do 20 iterations.

Note that this dependence on the validators' effective balances, which are updated at the end of each epoch, means that proposer assignments are valid [only in the current epoch](https://github.com/ethereum/eth2.0-specs/pull/772#issuecomment-475574357). This is different from attestation committee assignments, which are valid with a one epoch look-ahead.

#### `compute_committee`

```python
def compute_committee(indices: Sequence[ValidatorIndex],
                      seed: Bytes32,
                      index: uint64,
                      count: uint64) -> Sequence[ValidatorIndex]:
    """
    Return the committee corresponding to ``indices``, ``seed``, ``index``, and committee ``count``.
    """
    start = (len(indices) * index) // count
    end = (len(indices) * uint64(index + 1)) // count
    return [indices[compute_shuffled_index(uint64(i), uint64(len(indices)), seed)] for i in range(start, end)]
```

[`get_beacon_committee`](#get_beacon_committee) uses this to find the specific members of one of the committees at a slot.

Every epoch, a fresh set of committees is generated; during an epoch, the committees are stable.

Looking at the parameters in reverse order:
 - `count` is the total number of committees in an epoch. This is `SLOTS_PER_EPOCH` times the output of [`get_committee_count_per_slot()`](#get_committee_count_per_slot).
 - `index` is the committee number within the epoch, running from `0` to `count - 1`.
 - `seed` is the seed value for computing the pseudo-random shuffling, based on the epoch number and a domain parameter ([`get_beacon_committee()`](#get_beacon_committee) uses [`DOMAIN_BEACON_ATTESTER`](/part3/config/constants#domain-types)).
 - `indices` is the list of validators eligible for inclusion in committees, namely the whole list of indices of active validators.

Random sampling among the validators is done by taking a contiguous slice of array indices from `start` to `end` and seeing where each one gets shuffled to by `compute_shuffled_index()`. Note that `ValidatorIndex(i)` is a type-cast in the above: it just turns `i` into a [ValidatorIndex](/part3/config/types#validatorindex) type for input into the shuffling. The output value of the shuffling is then used as an index into the `indices` list. There is much here that client implementations will optimise with caching and batch operations.

It may not be immediately obvious, but not all committees returned will be the same size (can vary by one), and every validator in `indices` will be a member of exactly one committee. As we increment `index` from zero, clearly `start` for `index == j + 1` is `end` for `index == j`, so there are no gaps. In addition, the highest `index` is `count - 1`, so every validator in `indices` finds its way into a committee.

This method of selecting committees is light client friendly. Light clients can compute only the committees that they are interested in without needing to deal with the entire validator set. See the [section on Shuffling](/part2/building_blocks/shuffling) for explanation of how htis works.

[TODO: where is this used for sync committees?]::

#### `compute_epoch_at_slot`

```python
def compute_epoch_at_slot(slot: Slot) -> Epoch:
    """
    Return the epoch number at ``slot``.
    """
    return Epoch(slot // SLOTS_PER_EPOCH)
```

This is trivial enough that I won't explain it. But note that it does rely on [`GENESIS_SLOT`](/part3/config/constants#miscellaneous) and [`GENESIS_EPOCH`](/part3/config/constants#miscellaneous) being zero. The more pernickety among us might prefer it to read,

```none
    return Epoch(GENESIS_EPOCH + (slot - GENESIS_SLOT) // SLOTS_PER_EPOCH)
```

#### `compute_start_slot_at_epoch`

```python
def compute_start_slot_at_epoch(epoch: Epoch) -> Slot:
    """
    Return the start slot of ``epoch``.
    """
    return Slot(epoch * SLOTS_PER_EPOCH)
```

Should really read,

```none
    return Slot(GENESIS_SLOT + (epoch - GENESIS_EPOCH) * SLOTS_PER_EPOCH)
```

#### `compute_activation_exit_epoch`

```python
def compute_activation_exit_epoch(epoch: Epoch) -> Epoch:
    """
    Return the epoch during which validator activations and exits initiated in ``epoch`` take effect.
    """
    return Epoch(epoch + 1 + MAX_SEED_LOOKAHEAD)
```

When queuing validators for activation or exit in [`process_registry_updates()`](#registry-updates) and [`initiate_validator_exit()`](#initiate_validator_exit) respectively, the activation or exit is delayed until the next epoch, plus [`MAX_SEED_LOOKAHEAD`](/part3/config/preset#time-parameters) epochs, currently 4.

See [`MAX_SEED_LOOKAHEAD`](/part3/config/preset#time-parameters) for the details, but in short it is designed to make it extremely hard for an attacker to manipulate the make up of committees via activations and exits.

#### `compute_fork_data_root`

```python
def compute_fork_data_root(current_version: Version, genesis_validators_root: Root) -> Root:
    """
    Return the 32-byte fork data root for the ``current_version`` and ``genesis_validators_root``.
    This is used primarily in signature domains to avoid collisions across forks/chains.
    """
    return hash_tree_root(ForkData(
        current_version=current_version,
        genesis_validators_root=genesis_validators_root,
    ))
```

The fork data root serves as a unique identifier for the chain that we are on. `genesis_validators_root` identifies our unique genesis event, and `current_version` our own hard fork subsequent to that genesis event. This is useful, for example, to differentiate between a testnet and mainnet: both might have the same fork versions, but will definitely have different genesis validator roots.

It is used by [`compute_fork_digest()`](#compute_fork_digest) and [`compute_domain`](#compute_domain).

#### `compute_fork_digest`

```python
def compute_fork_digest(current_version: Version, genesis_validators_root: Root) -> ForkDigest:
    """
    Return the 4-byte fork digest for the ``current_version`` and ``genesis_validators_root``.
    This is a digest primarily used for domain separation on the p2p layer.
    4-bytes suffices for practical separation of forks/chains.
    """
    return ForkDigest(compute_fork_data_root(current_version, genesis_validators_root)[:4])
```

Extracts the first four bytes of the [fork data root](#compute_fork_data_root) as a [`ForkDigest`](/part3/config/types#forkdigest) type. It is primarily used for domain separation on the peer-to-peer networking layer.

`compute_fork_digest()` is used extensively in the [Ethereum 2.0 networking specification](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/p2p-interface.md) to distinguish between independent beacon chain networks or forks: it is vital that activity on one chain does not interfere with other chains.

[TODO: check the bit about compute_fork_digest in networking]::

#### `compute_domain`

```python
def compute_domain(domain_type: DomainType, fork_version: Version=None, genesis_validators_root: Root=None) -> Domain:
    """
    Return the domain for the ``domain_type`` and ``fork_version``.
    """
    if fork_version is None:
        fork_version = GENESIS_FORK_VERSION
    if genesis_validators_root is None:
        genesis_validators_root = Root()  # all bytes zero by default
    fork_data_root = compute_fork_data_root(fork_version, genesis_validators_root)
    return Domain(domain_type + fork_data_root[:28])
```

When dealing with signed messages, the signature "domains" are separated according to three independent factors:
 1. All signatures include a [`DomainType`](/part3/config/constants#domain-types) relevant to the message's purpose, which is just some cryptographic hygiene in case the same message is to be signed for different purposes at any point.
 2. All but signatures on deposit messages include the fork version. This ensures that messages across different forks of the chain become invalid, and that validators won't be slashed for signing attestations on two different chains (this is allowed).
 3. And, [now](https://github.com/ethereum/eth2.0-specs/pull/1614), the root hash of the validator Merkle tree at Genesis is included. Along with the fork version this gives a unique identifier for our chain.

This function is mainly used by [`get_domain()`](#get_domain). It is also used in [deposit processing](#deposits), in which case `fork_version` and `genesis_validators_root` take their default values since deposits are valid across forks.
>
Fun fact: this function looks pretty simple, but [I found a subtle bug](https://github.com/ethereum/eth2.0-specs/issues/1582) in the way tests were generated in a previous implementation.

#### `compute_signing_root`

```python
def compute_signing_root(ssz_object: SSZObject, domain: Domain) -> Root:
    """
    Return the signing root for the corresponding signing data.
    """
    return hash_tree_root(SigningData(
        object_root=hash_tree_root(ssz_object),
        domain=domain,
    ))
```

This is a pre-processor for signing objects with BLS signatures:
 1. calculate the [hash tree root](#todo) of the object;
 2. combine the hash tree root with the [`Domain`](/part3/config/types#domain) inside a temporary [`SigningData`](#todo) object;
 3. return the hash tree root of that, which is the data to be signed.

[TODO: link to hash tree root explanation]::

The `domain` is usually the output of [`get_domain()`](#get_domain), which mixes in the [cryptographic domain](/part3/config/constants#domain-types), the fork version, and the genesis validators root to the message hash. For deposits, it is the output of [`compute_domain()`](#compute_domain), ignoring the fork version and genesis validators root.

This is exactly equivalent to adding the domain to an object and taking the hash tree root of the whole thing. Indeed, this function used to be called, as [`compute_domain_wrapper_root()`](https://github.com/ethereum/eth2.0-specs/blob/502ee295379c1f3c5c3649e12330fb5be5d7a83b/specs/core/0_beacon-chain.md#compute_domain_wrapper_root).

### Participation flags

#### `add_flag`

```python
def add_flag(flags: ParticipationFlags, flag_index: int) -> ParticipationFlags:
    """
    Return a new ``ParticipationFlags`` adding ``flag_index`` to ``flags``.
    """
    flag = ParticipationFlags(2**flag_index)
    return flags | flag
```

Added in Altair.

TODO

#### `has_flag`

```python
def has_flag(flags: ParticipationFlags, flag_index: int) -> bool:
    """
    Return whether ``flags`` has ``flag_index`` set.
    """
    flag = ParticipationFlags(2**flag_index)
    return flags & flag == flag
```

Added in Altair.

TODO

### Beacon State Accessors <!-- /part3/helper/accessors -->

#### `get_current_epoch`

```python
def get_current_epoch(state: BeaconState) -> Epoch:
    """
    Return the current epoch.
    """
    return compute_epoch_at_slot(state.slot)
```

#### `get_previous_epoch`

```python
def get_previous_epoch(state: BeaconState) -> Epoch:
    """`
    Return the previous epoch (unless the current epoch is ``GENESIS_EPOCH``).
    """
    current_epoch = get_current_epoch(state)
    return GENESIS_EPOCH if current_epoch == GENESIS_EPOCH else Epoch(current_epoch - 1)
```

#### `get_block_root`

```python
def get_block_root(state: BeaconState, epoch: Epoch) -> Root:
    """
    Return the block root at the start of a recent ``epoch``.
    """
    return get_block_root_at_slot(state, compute_start_slot_at_epoch(epoch))
```

#### `get_block_root_at_slot`

```python
def get_block_root_at_slot(state: BeaconState, slot: Slot) -> Root:
    """
    Return the block root at a recent ``slot``.
    """
    assert slot < state.slot <= slot + SLOTS_PER_HISTORICAL_ROOT
    return state.block_roots[slot % SLOTS_PER_HISTORICAL_ROOT]
```

#### `get_randao_mix`

```python
def get_randao_mix(state: BeaconState, epoch: Epoch) -> Bytes32:
    """
    Return the randao mix at a recent ``epoch``.
    """
    return state.randao_mixes[epoch % EPOCHS_PER_HISTORICAL_VECTOR]
```

#### `get_active_validator_indices`

```python
def get_active_validator_indices(state: BeaconState, epoch: Epoch) -> Sequence[ValidatorIndex]:
    """
    Return the sequence of active validator indices at ``epoch``.
    """
    return [ValidatorIndex(i) for i, v in enumerate(state.validators) if is_active_validator(v, epoch)]
```

#### `get_validator_churn_limit`

```python
def get_validator_churn_limit(state: BeaconState) -> uint64:
    """
    Return the validator churn limit for the current epoch.
    """
    active_validator_indices = get_active_validator_indices(state, get_current_epoch(state))
    return max(MIN_PER_EPOCH_CHURN_LIMIT, uint64(len(active_validator_indices)) // CHURN_LIMIT_QUOTIENT)
```

#### `get_seed`

```python
def get_seed(state: BeaconState, epoch: Epoch, domain_type: DomainType) -> Bytes32:
    """
    Return the seed at ``epoch``.
    """
    mix = get_randao_mix(state, Epoch(epoch + EPOCHS_PER_HISTORICAL_VECTOR - MIN_SEED_LOOKAHEAD - 1))  # Avoid underflow
    return hash(domain_type + uint_to_bytes(epoch) + mix)
```

#### `get_committee_count_per_slot`

```python
def get_committee_count_per_slot(state: BeaconState, epoch: Epoch) -> uint64:
    """
    Return the number of committees in each slot for the given ``epoch``.
    """
    return max(uint64(1), min(
        MAX_COMMITTEES_PER_SLOT,
        uint64(len(get_active_validator_indices(state, epoch))) // SLOTS_PER_EPOCH // TARGET_COMMITTEE_SIZE,
    ))
```

#### `get_beacon_committee`

```python
def get_beacon_committee(state: BeaconState, slot: Slot, index: CommitteeIndex) -> Sequence[ValidatorIndex]:
    """
    Return the beacon committee at ``slot`` for ``index``.
    """
    epoch = compute_epoch_at_slot(slot)
    committees_per_slot = get_committee_count_per_slot(state, epoch)
    return compute_committee(
        indices=get_active_validator_indices(state, epoch),
        seed=get_seed(state, epoch, DOMAIN_BEACON_ATTESTER),
        index=(slot % SLOTS_PER_EPOCH) * committees_per_slot + index,
        count=committees_per_slot * SLOTS_PER_EPOCH,
    )
```

#### `get_beacon_proposer_index`

```python
def get_beacon_proposer_index(state: BeaconState) -> ValidatorIndex:
    """
    Return the beacon proposer index at the current slot.
    """
    epoch = get_current_epoch(state)
    seed = hash(get_seed(state, epoch, DOMAIN_BEACON_PROPOSER) + uint_to_bytes(state.slot))
    indices = get_active_validator_indices(state, epoch)
    return compute_proposer_index(state, indices, seed)
```

#### `get_total_balance`

```python
def get_total_balance(state: BeaconState, indices: Set[ValidatorIndex]) -> Gwei:
    """
    Return the combined effective balance of the ``indices``.
    ``EFFECTIVE_BALANCE_INCREMENT`` Gwei minimum to avoid divisions by zero.
    Math safe up to ~10B ETH, afterwhich this overflows uint64.
    """
    return Gwei(max(EFFECTIVE_BALANCE_INCREMENT, sum([state.validators[index].effective_balance for index in indices])))
```

#### `get_total_active_balance`

```python
def get_total_active_balance(state: BeaconState) -> Gwei:
    """
    Return the combined effective balance of the active validators.
    Note: ``get_total_balance`` returns ``EFFECTIVE_BALANCE_INCREMENT`` Gwei minimum to avoid divisions by zero.
    """
    return get_total_balance(state, set(get_active_validator_indices(state, get_current_epoch(state))))
```

#### `get_domain`

```python
def get_domain(state: BeaconState, domain_type: DomainType, epoch: Epoch=None) -> Domain:
    """
    Return the signature domain (fork version concatenated with domain type) of a message.
    """
    epoch = get_current_epoch(state) if epoch is None else epoch
    fork_version = state.fork.previous_version if epoch < state.fork.epoch else state.fork.current_version
    return compute_domain(domain_type, fork_version, state.genesis_validators_root)
```

#### `get_indexed_attestation`

```python
def get_indexed_attestation(state: BeaconState, attestation: Attestation) -> IndexedAttestation:
    """
    Return the indexed attestation corresponding to ``attestation``.
    """
    attesting_indices = get_attesting_indices(state, attestation.data, attestation.aggregation_bits)

    return IndexedAttestation(
        attesting_indices=sorted(attesting_indices),
        data=attestation.data,
        signature=attestation.signature,
    )
```

#### `get_attesting_indices`

```python
def get_attesting_indices(state: BeaconState,
                          data: AttestationData,
                          bits: Bitlist[MAX_VALIDATORS_PER_COMMITTEE]) -> Set[ValidatorIndex]:
    """
    Return the set of attesting indices corresponding to ``data`` and ``bits``.
    """
    committee = get_beacon_committee(state, data.slot, data.index)
    return set(index for i, index in enumerate(committee) if bits[i])
```

#### `get_next_sync_committee_indices`

```python
def get_next_sync_committee_indices(state: BeaconState) -> Sequence[ValidatorIndex]:
    """
    Return the sync committee indices, with possible duplicates, for the next sync committee.
    """
    epoch = Epoch(get_current_epoch(state) + 1)

    MAX_RANDOM_BYTE = 2**8 - 1
    active_validator_indices = get_active_validator_indices(state, epoch)
    active_validator_count = uint64(len(active_validator_indices))
    seed = get_seed(state, epoch, DOMAIN_SYNC_COMMITTEE)
    i = 0
    sync_committee_indices: List[ValidatorIndex] = []
    while len(sync_committee_indices) < SYNC_COMMITTEE_SIZE:
        shuffled_index = compute_shuffled_index(uint64(i % active_validator_count), active_validator_count, seed)
        candidate_index = active_validator_indices[shuffled_index]
        random_byte = hash(seed + uint_to_bytes(uint64(i // 32)))[i % 32]
        effective_balance = state.validators[candidate_index].effective_balance
        if effective_balance * MAX_RANDOM_BYTE >= MAX_EFFECTIVE_BALANCE * random_byte:
            sync_committee_indices.append(candidate_index)
        i += 1
    return sync_committee_indices
```

#### `get_next_sync_committee`

*Note*: The function `get_next_sync_committee` should only be called at sync committee period boundaries and when [upgrading state to Altair](./fork.md#upgrading-the-state).

```python
def get_next_sync_committee(state: BeaconState) -> SyncCommittee:
    """
    Return the next sync committee, with possible pubkey duplicates.
    """
    indices = get_next_sync_committee_indices(state)
    pubkeys = [state.validators[index].pubkey for index in indices]
    aggregate_pubkey = eth_aggregate_pubkeys(pubkeys)
    return SyncCommittee(pubkeys=pubkeys, aggregate_pubkey=aggregate_pubkey)
```

#### `get_unslashed_participating_indices`

```python
def get_unslashed_participating_indices(state: BeaconState, flag_index: int, epoch: Epoch) -> Set[ValidatorIndex]:
    """
    Return the set of validator indices that are both active and unslashed for the given ``flag_index`` and ``epoch``.
    """
    assert epoch in (get_previous_epoch(state), get_current_epoch(state))
    if epoch == get_current_epoch(state):
        epoch_participation = state.current_epoch_participation
    else:
        epoch_participation = state.previous_epoch_participation
    active_validator_indices = get_active_validator_indices(state, epoch)
    participating_indices = [i for i in active_validator_indices if has_flag(epoch_participation[i], flag_index)]
    return set(filter(lambda index: not state.validators[index].slashed, participating_indices))
```

#### `get_attestation_participation_flag_indices`

```python
def get_attestation_participation_flag_indices(state: BeaconState,
                                               data: AttestationData,
                                               inclusion_delay: uint64) -> Sequence[int]:
    """
    Return the flag indices that are satisfied by an attestation.
    """
    if data.target.epoch == get_current_epoch(state):
        justified_checkpoint = state.current_justified_checkpoint
    else:
        justified_checkpoint = state.previous_justified_checkpoint

    # Matching roots
    is_matching_source = data.source == justified_checkpoint
    is_matching_target = is_matching_source and data.target.root == get_block_root(state, data.target.epoch)
    is_matching_head = is_matching_target and data.beacon_block_root == get_block_root_at_slot(state, data.slot)
    assert is_matching_source

    participation_flag_indices = []
    if is_matching_source and inclusion_delay <= integer_squareroot(SLOTS_PER_EPOCH):
        participation_flag_indices.append(TIMELY_SOURCE_FLAG_INDEX)
    if is_matching_target and inclusion_delay <= SLOTS_PER_EPOCH:
        participation_flag_indices.append(TIMELY_TARGET_FLAG_INDEX)
    if is_matching_head and inclusion_delay == MIN_ATTESTATION_INCLUSION_DELAY:
        participation_flag_indices.append(TIMELY_HEAD_FLAG_INDEX)

    return participation_flag_indices
```

#### `get_flag_index_deltas`

```python
def get_flag_index_deltas(state: BeaconState, flag_index: int) -> Tuple[Sequence[Gwei], Sequence[Gwei]]:
    """
    Return the deltas for a given ``flag_index`` by scanning through the participation flags.
    """
    rewards = [Gwei(0)] * len(state.validators)
    penalties = [Gwei(0)] * len(state.validators)
    previous_epoch = get_previous_epoch(state)
    unslashed_participating_indices = get_unslashed_participating_indices(state, flag_index, previous_epoch)
    weight = PARTICIPATION_FLAG_WEIGHTS[flag_index]
    unslashed_participating_balance = get_total_balance(state, unslashed_participating_indices)
    unslashed_participating_increments = unslashed_participating_balance // EFFECTIVE_BALANCE_INCREMENT
    active_increments = get_total_active_balance(state) // EFFECTIVE_BALANCE_INCREMENT
    for index in get_eligible_validator_indices(state):
        base_reward = get_base_reward(state, index)
        if index in unslashed_participating_indices:
            if not is_in_inactivity_leak(state):
                reward_numerator = base_reward * weight * unslashed_participating_increments
                rewards[index] += Gwei(reward_numerator // (active_increments * WEIGHT_DENOMINATOR))
        elif flag_index != TIMELY_HEAD_FLAG_INDEX:
            penalties[index] += Gwei(base_reward * weight // WEIGHT_DENOMINATOR)
    return rewards, penalties
```

### Beacon State Mutators <!-- /part3/helper/mutators -->

#### `increase_balance`

```python
def increase_balance(state: BeaconState, index: ValidatorIndex, delta: Gwei) -> None:
    """
    Increase the validator balance at index ``index`` by ``delta``.
    """
    state.balances[index] += delta
```

#### `decrease_balance`

```python
def decrease_balance(state: BeaconState, index: ValidatorIndex, delta: Gwei) -> None:
    """
    Decrease the validator balance at index ``index`` by ``delta``, with underflow protection.
    """
    state.balances[index] = 0 if delta > state.balances[index] else state.balances[index] - delta
```

#### `initiate_validator_exit`

```python
def initiate_validator_exit(state: BeaconState, index: ValidatorIndex) -> None:
    """
    Initiate the exit of the validator with index ``index``.
    """
    # Return if validator already initiated exit
    validator = state.validators[index]
    if validator.exit_epoch != FAR_FUTURE_EPOCH:
        return

    # Compute exit queue epoch
    exit_epochs = [v.exit_epoch for v in state.validators if v.exit_epoch != FAR_FUTURE_EPOCH]
    exit_queue_epoch = max(exit_epochs + [compute_activation_exit_epoch(get_current_epoch(state))])
    exit_queue_churn = len([v for v in state.validators if v.exit_epoch == exit_queue_epoch])
    if exit_queue_churn >= get_validator_churn_limit(state):
        exit_queue_epoch += Epoch(1)

    # Set validator exit epoch and withdrawable epoch
    validator.exit_epoch = exit_queue_epoch
    validator.withdrawable_epoch = Epoch(validator.exit_epoch + MIN_VALIDATOR_WITHDRAWABILITY_DELAY)
```

#### `slash_validator`

```python
def slash_validator(state: BeaconState,
                    slashed_index: ValidatorIndex,
                    whistleblower_index: ValidatorIndex=None) -> None:
    """
    Slash the validator with index ``slashed_index``.
    """
    epoch = get_current_epoch(state)
    initiate_validator_exit(state, slashed_index)
    validator = state.validators[slashed_index]
    validator.slashed = True
    validator.withdrawable_epoch = max(validator.withdrawable_epoch, Epoch(epoch + EPOCHS_PER_SLASHINGS_VECTOR))
    state.slashings[epoch % EPOCHS_PER_SLASHINGS_VECTOR] += validator.effective_balance
    decrease_balance(state, slashed_index, validator.effective_balance // MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR)

    # Apply proposer and whistleblower rewards
    proposer_index = get_beacon_proposer_index(state)
    if whistleblower_index is None:
        whistleblower_index = proposer_index
    whistleblower_reward = Gwei(validator.effective_balance // WHISTLEBLOWER_REWARD_QUOTIENT)
    proposer_reward = Gwei(whistleblower_reward * PROPOSER_WEIGHT // WEIGHT_DENOMINATOR)
    increase_balance(state, proposer_index, proposer_reward)
    increase_balance(state, whistleblower_index, Gwei(whistleblower_reward - proposer_reward))
```

## Beacon Chain State Transition Function <!-- /part3/transition -->

### Preamble

The post-state corresponding to a pre-state `state` and a signed block `signed_block` is defined as `state_transition(state, signed_block)`. State transitions that trigger an unhandled exception (e.g. a failed `assert` or an out-of-range list access) are considered invalid. State transitions that cause a `uint64` overflow or underflow are also considered invalid.

```python
def state_transition(state: BeaconState, signed_block: SignedBeaconBlock, validate_result: bool=True) -> None:
    block = signed_block.message
    # Process slots (including those with no blocks) since block
    process_slots(state, block.slot)
    # Verify signature
    if validate_result:
        assert verify_block_signature(state, signed_block)
    # Process block
    process_block(state, block)
    # Verify state root
    if validate_result:
        assert block.state_root == hash_tree_root(state)
```

```python
def verify_block_signature(state: BeaconState, signed_block: SignedBeaconBlock) -> bool:
    proposer = state.validators[signed_block.message.proposer_index]
    signing_root = compute_signing_root(signed_block.message, get_domain(state, DOMAIN_BEACON_PROPOSER))
    return bls.Verify(proposer.pubkey, signing_root, signed_block.signature)
```

```python
def process_slots(state: BeaconState, slot: Slot) -> None:
    assert state.slot < slot
    while state.slot < slot:
        process_slot(state)
        # Process epoch on the start slot of the next epoch
        if (state.slot + 1) % SLOTS_PER_EPOCH == 0:
            process_epoch(state)
        state.slot = Slot(state.slot + 1)
```

```python
def process_slot(state: BeaconState) -> None:
    # Cache state root
    previous_state_root = hash_tree_root(state)
    state.state_roots[state.slot % SLOTS_PER_HISTORICAL_ROOT] = previous_state_root
    # Cache latest block header state root
    if state.latest_block_header.state_root == Bytes32():
        state.latest_block_header.state_root = previous_state_root
    # Cache block root
    previous_block_root = hash_tree_root(state.latest_block_header)
    state.block_roots[state.slot % SLOTS_PER_HISTORICAL_ROOT] = previous_block_root
```

TODO

### Epoch processing <!-- /part3/transition/epoch -->

```python
def process_epoch(state: BeaconState) -> None:
    process_justification_and_finalization(state)  # [Modified in Altair]
    process_inactivity_updates(state)  # [New in Altair]
    process_rewards_and_penalties(state)  # [Modified in Altair]
    process_registry_updates(state)
    process_slashings(state)  # [Modified in Altair]
    process_eth1_data_reset(state)
    process_effective_balance_updates(state)
    process_slashings_reset(state)
    process_randao_mixes_reset(state)
    process_historical_roots_update(state)
    process_participation_flag_updates(state)  # [New in Altair]
    process_sync_committee_updates(state)  # [New in Altair]
```

#### Justification and finalization

*Note*: The function `process_justification_and_finalization` is modified to adapt to the new participation records.

```python
def process_justification_and_finalization(state: BeaconState) -> None:
    # Initial FFG checkpoint values have a `0x00` stub for `root`.
    # Skip FFG updates in the first two epochs to avoid corner cases that might result in modifying this stub.
    if get_current_epoch(state) <= GENESIS_EPOCH + 1:
        return
    previous_indices = get_unslashed_participating_indices(state, TIMELY_TARGET_FLAG_INDEX, get_previous_epoch(state))
    current_indices = get_unslashed_participating_indices(state, TIMELY_TARGET_FLAG_INDEX, get_current_epoch(state))
    total_active_balance = get_total_active_balance(state)
    previous_target_balance = get_total_balance(state, previous_indices)
    current_target_balance = get_total_balance(state, current_indices)
    weigh_justification_and_finalization(state, total_active_balance, previous_target_balance, current_target_balance)
```

```python
def weigh_justification_and_finalization(state: BeaconState,
                                         total_active_balance: Gwei,
                                         previous_epoch_target_balance: Gwei,
                                         current_epoch_target_balance: Gwei) -> None:
    previous_epoch = get_previous_epoch(state)
    current_epoch = get_current_epoch(state)
    old_previous_justified_checkpoint = state.previous_justified_checkpoint
    old_current_justified_checkpoint = state.current_justified_checkpoint

    # Process justifications
    state.previous_justified_checkpoint = state.current_justified_checkpoint
    state.justification_bits[1:] = state.justification_bits[:JUSTIFICATION_BITS_LENGTH - 1]
    state.justification_bits[0] = 0b0
    if previous_epoch_target_balance * 3 >= total_active_balance * 2:
        state.current_justified_checkpoint = Checkpoint(epoch=previous_epoch,
                                                        root=get_block_root(state, previous_epoch))
        state.justification_bits[1] = 0b1
    if current_epoch_target_balance * 3 >= total_active_balance * 2:
        state.current_justified_checkpoint = Checkpoint(epoch=current_epoch,
                                                        root=get_block_root(state, current_epoch))
        state.justification_bits[0] = 0b1

    # Process finalizations
    bits = state.justification_bits
    # The 2nd/3rd/4th most recent epochs are justified, the 2nd using the 4th as source
    if all(bits[1:4]) and old_previous_justified_checkpoint.epoch + 3 == current_epoch:
        state.finalized_checkpoint = old_previous_justified_checkpoint
    # The 2nd/3rd most recent epochs are justified, the 2nd using the 3rd as source
    if all(bits[1:3]) and old_previous_justified_checkpoint.epoch + 2 == current_epoch:
        state.finalized_checkpoint = old_previous_justified_checkpoint
    # The 1st/2nd/3rd most recent epochs are justified, the 1st using the 3rd as source
    if all(bits[0:3]) and old_current_justified_checkpoint.epoch + 2 == current_epoch:
        state.finalized_checkpoint = old_current_justified_checkpoint
    # The 1st/2nd most recent epochs are justified, the 1st using the 2nd as source
    if all(bits[0:2]) and old_current_justified_checkpoint.epoch + 1 == current_epoch:
        state.finalized_checkpoint = old_current_justified_checkpoint
```

#### Inactivity scores

*Note*: The function `process_inactivity_updates` is new.

```python
def process_inactivity_updates(state: BeaconState) -> None:
    # Skip the genesis epoch as score updates are based on the previous epoch participation
    if get_current_epoch(state) == GENESIS_EPOCH:
        return

    for index in get_eligible_validator_indices(state):
        # Increase the inactivity score of inactive validators
        if index in get_unslashed_participating_indices(state, TIMELY_TARGET_FLAG_INDEX, get_previous_epoch(state)):
            state.inactivity_scores[index] -= min(1, state.inactivity_scores[index])
        else:
            state.inactivity_scores[index] += INACTIVITY_SCORE_BIAS
        # Decrease the inactivity score of all eligible validators during a leak-free epoch
        if not is_in_inactivity_leak(state):
            state.inactivity_scores[index] -= min(INACTIVITY_SCORE_RECOVERY_RATE, state.inactivity_scores[index])
```

#### Rewards and penalties

##### Helpers

*Note*: The function `get_base_reward` is modified with the removal of `BASE_REWARDS_PER_EPOCH` and the use of increment based accounting.

*Note*: On average an optimally performing validator earns one base reward per epoch.

```python
def get_base_reward_per_increment(state: BeaconState) -> Gwei:
    return Gwei(EFFECTIVE_BALANCE_INCREMENT * BASE_REWARD_FACTOR // integer_squareroot(get_total_active_balance(state)))
```

<a id="get_base_reward"></a>

```python
def get_base_reward(state: BeaconState, index: ValidatorIndex) -> Gwei:
    """
    Return the base reward for the validator defined by ``index`` with respect to the current ``state``.
    """
    increments = state.validators[index].effective_balance // EFFECTIVE_BALANCE_INCREMENT
    return Gwei(increments * get_base_reward_per_increment(state))
```

```python
def get_finality_delay(state: BeaconState) -> uint64:
    return get_previous_epoch(state) - state.finalized_checkpoint.epoch
```


```python
def is_in_inactivity_leak(state: BeaconState) -> bool:
    return get_finality_delay(state) > MIN_EPOCHS_TO_INACTIVITY_PENALTY
```


```python
def get_eligible_validator_indices(state: BeaconState) -> Sequence[ValidatorIndex]:
    previous_epoch = get_previous_epoch(state)
    return [
        ValidatorIndex(index) for index, v in enumerate(state.validators)
        if is_active_validator(v, previous_epoch) or (v.slashed and previous_epoch + 1 < v.withdrawable_epoch)
    ]
```

##### Inactivity penalty deltas

```python
def get_inactivity_penalty_deltas(state: BeaconState) -> Tuple[Sequence[Gwei], Sequence[Gwei]]:
    """
    Return the inactivity penalty deltas by considering timely target participation flags and inactivity scores.
    """
    rewards = [Gwei(0) for _ in range(len(state.validators))]
    penalties = [Gwei(0) for _ in range(len(state.validators))]
    previous_epoch = get_previous_epoch(state)
    matching_target_indices = get_unslashed_participating_indices(state, TIMELY_TARGET_FLAG_INDEX, previous_epoch)
    for index in get_eligible_validator_indices(state):
        if index not in matching_target_indices:
            penalty_numerator = state.validators[index].effective_balance * state.inactivity_scores[index]
            penalty_denominator = INACTIVITY_SCORE_BIAS * INACTIVITY_PENALTY_QUOTIENT_ALTAIR
            penalties[index] += Gwei(penalty_numerator // penalty_denominator)
    return rewards, penalties
```

##### Process rewards and penalties

*Note*: The function `process_rewards_and_penalties` is modified to support the incentive accounting reforms.

```python
def process_rewards_and_penalties(state: BeaconState) -> None:
    # No rewards are applied at the end of `GENESIS_EPOCH` because rewards are for work done in the previous epoch
    if get_current_epoch(state) == GENESIS_EPOCH:
        return

    flag_deltas = [get_flag_index_deltas(state, flag_index) for flag_index in range(len(PARTICIPATION_FLAG_WEIGHTS))]
    deltas = flag_deltas + [get_inactivity_penalty_deltas(state)]
    for (rewards, penalties) in deltas:
        for index in range(len(state.validators)):
            increase_balance(state, ValidatorIndex(index), rewards[index])
            decrease_balance(state, ValidatorIndex(index), penalties[index])
```

#### Registry updates

```python
def process_registry_updates(state: BeaconState) -> None:
    # Process activation eligibility and ejections
    for index, validator in enumerate(state.validators):
        if is_eligible_for_activation_queue(validator):
            validator.activation_eligibility_epoch = get_current_epoch(state) + 1

        if (
            is_active_validator(validator, get_current_epoch(state))
            and validator.effective_balance <= EJECTION_BALANCE
        ):
            initiate_validator_exit(state, ValidatorIndex(index))

    # Queue validators eligible for activation and not yet dequeued for activation
    activation_queue = sorted([
        index for index, validator in enumerate(state.validators)
        if is_eligible_for_activation(state, validator)
        # Order by the sequence of activation_eligibility_epoch setting and then index
    ], key=lambda index: (state.validators[index].activation_eligibility_epoch, index))
    # Dequeued validators for activation up to churn limit
    for index in activation_queue[:get_validator_churn_limit(state)]:
        validator = state.validators[index]
        validator.activation_epoch = compute_activation_exit_epoch(get_current_epoch(state))
```

#### Slashings

*Note*: The function `process_slashings` is modified to use `PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR`.

```python
def process_slashings(state: BeaconState) -> None:
    epoch = get_current_epoch(state)
    total_balance = get_total_active_balance(state)
    adjusted_total_slashing_balance = min(sum(state.slashings) * PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR, total_balance)
    for index, validator in enumerate(state.validators):
        if validator.slashed and epoch + EPOCHS_PER_SLASHINGS_VECTOR // 2 == validator.withdrawable_epoch:
            increment = EFFECTIVE_BALANCE_INCREMENT  # Factored out from penalty numerator to avoid uint64 overflow
            penalty_numerator = validator.effective_balance // increment * adjusted_total_slashing_balance
            penalty = penalty_numerator // total_balance * increment
            decrease_balance(state, ValidatorIndex(index), penalty)
```

#### Eth1 data votes updates
```python
def process_eth1_data_reset(state: BeaconState) -> None:
    next_epoch = Epoch(get_current_epoch(state) + 1)
    # Reset eth1 data votes
    if next_epoch % EPOCHS_PER_ETH1_VOTING_PERIOD == 0:
        state.eth1_data_votes = []
```

#### Effective balances updates

```python
def process_effective_balance_updates(state: BeaconState) -> None:
    # Update effective balances with hysteresis
    for index, validator in enumerate(state.validators):
        balance = state.balances[index]
        HYSTERESIS_INCREMENT = uint64(EFFECTIVE_BALANCE_INCREMENT // HYSTERESIS_QUOTIENT)
        DOWNWARD_THRESHOLD = HYSTERESIS_INCREMENT * HYSTERESIS_DOWNWARD_MULTIPLIER
        UPWARD_THRESHOLD = HYSTERESIS_INCREMENT * HYSTERESIS_UPWARD_MULTIPLIER
        if (
            balance + DOWNWARD_THRESHOLD < validator.effective_balance
            or validator.effective_balance + UPWARD_THRESHOLD < balance
        ):
            validator.effective_balance = min(balance - balance % EFFECTIVE_BALANCE_INCREMENT, MAX_EFFECTIVE_BALANCE)
```

#### Slashings balances updates

```python
def process_slashings_reset(state: BeaconState) -> None:
    next_epoch = Epoch(get_current_epoch(state) + 1)
    # Reset slashings
    state.slashings[next_epoch % EPOCHS_PER_SLASHINGS_VECTOR] = Gwei(0)
```

#### Randao mixes updates

```python
def process_randao_mixes_reset(state: BeaconState) -> None:
    current_epoch = get_current_epoch(state)
    next_epoch = Epoch(current_epoch + 1)
    # Set randao mix
    state.randao_mixes[next_epoch % EPOCHS_PER_HISTORICAL_VECTOR] = get_randao_mix(state, current_epoch)
```

#### Historical roots updates
```python
def process_historical_roots_update(state: BeaconState) -> None:
    # Set historical root accumulator
    next_epoch = Epoch(get_current_epoch(state) + 1)
    if next_epoch % (SLOTS_PER_HISTORICAL_ROOT // SLOTS_PER_EPOCH) == 0:
        historical_batch = HistoricalBatch(block_roots=state.block_roots, state_roots=state.state_roots)
        state.historical_roots.append(hash_tree_root(historical_batch))
```

#### Participation flags updates

*Note*: The function `process_participation_flag_updates` is new.

```python
def process_participation_flag_updates(state: BeaconState) -> None:
    state.previous_epoch_participation = state.current_epoch_participation
    state.current_epoch_participation = [ParticipationFlags(0b0000_0000) for _ in range(len(state.validators))]
```

#### Sync committee updates

*Note*: The function `process_sync_committee_updates` is new.

```python
def process_sync_committee_updates(state: BeaconState) -> None:
    next_epoch = get_current_epoch(state) + Epoch(1)
    if next_epoch % EPOCHS_PER_SYNC_COMMITTEE_PERIOD == 0:
        state.current_sync_committee = state.next_sync_committee
        state.next_sync_committee = get_next_sync_committee(state)
```

### Block processing <!-- /part3/transition/block -->

```python
def process_block(state: BeaconState, block: BeaconBlock) -> None:
    process_block_header(state, block)
    process_randao(state, block.body)
    process_eth1_data(state, block.body)
    process_operations(state, block.body)  # [Modified in Altair]
    process_sync_aggregate(state, block.body.sync_aggregate)  # [New in Altair]
```

#### Block header

```python
def process_block_header(state: BeaconState, block: BeaconBlock) -> None:
    # Verify that the slots match
    assert block.slot == state.slot
    # Verify that the block is newer than latest block header
    assert block.slot > state.latest_block_header.slot
    # Verify that proposer index is the correct index
    assert block.proposer_index == get_beacon_proposer_index(state)
    # Verify that the parent matches
    assert block.parent_root == hash_tree_root(state.latest_block_header)
    # Cache current block as the new latest block
    state.latest_block_header = BeaconBlockHeader(
        slot=block.slot,
        proposer_index=block.proposer_index,
        parent_root=block.parent_root,
        state_root=Bytes32(),  # Overwritten in the next process_slot call
        body_root=hash_tree_root(block.body),
    )

    # Verify proposer is not slashed
    proposer = state.validators[block.proposer_index]
    assert not proposer.slashed
```

#### RANDAO

```python
def process_randao(state: BeaconState, body: BeaconBlockBody) -> None:
    epoch = get_current_epoch(state)
    # Verify RANDAO reveal
    proposer = state.validators[get_beacon_proposer_index(state)]
    signing_root = compute_signing_root(epoch, get_domain(state, DOMAIN_RANDAO))
    assert bls.Verify(proposer.pubkey, signing_root, body.randao_reveal)
    # Mix in RANDAO reveal
    mix = xor(get_randao_mix(state, epoch), hash(body.randao_reveal))
    state.randao_mixes[epoch % EPOCHS_PER_HISTORICAL_VECTOR] = mix
```

#### Eth1 data

```python
def process_eth1_data(state: BeaconState, body: BeaconBlockBody) -> None:
    state.eth1_data_votes.append(body.eth1_data)
    if state.eth1_data_votes.count(body.eth1_data) * 2 > EPOCHS_PER_ETH1_VOTING_PERIOD * SLOTS_PER_EPOCH:
        state.eth1_data = body.eth1_data
```

#### Operations

```python
def process_operations(state: BeaconState, body: BeaconBlockBody) -> None:
    # Verify that outstanding deposits are processed up to the maximum number of deposits
    assert len(body.deposits) == min(MAX_DEPOSITS, state.eth1_data.deposit_count - state.eth1_deposit_index)

    def for_ops(operations: Sequence[Any], fn: Callable[[BeaconState, Any], None]) -> None:
        for operation in operations:
            fn(state, operation)

    for_ops(body.proposer_slashings, process_proposer_slashing)
    for_ops(body.attester_slashings, process_attester_slashing)
    for_ops(body.attestations, process_attestation)
    for_ops(body.deposits, process_deposit)
    for_ops(body.voluntary_exits, process_voluntary_exit)
```

##### Proposer slashings

```python
def process_proposer_slashing(state: BeaconState, proposer_slashing: ProposerSlashing) -> None:
    header_1 = proposer_slashing.signed_header_1.message
    header_2 = proposer_slashing.signed_header_2.message

    # Verify header slots match
    assert header_1.slot == header_2.slot
    # Verify header proposer indices match
    assert header_1.proposer_index == header_2.proposer_index
    # Verify the headers are different
    assert header_1 != header_2
    # Verify the proposer is slashable
    proposer = state.validators[header_1.proposer_index]
    assert is_slashable_validator(proposer, get_current_epoch(state))
    # Verify signatures
    for signed_header in (proposer_slashing.signed_header_1, proposer_slashing.signed_header_2):
        domain = get_domain(state, DOMAIN_BEACON_PROPOSER, compute_epoch_at_slot(signed_header.message.slot))
        signing_root = compute_signing_root(signed_header.message, domain)
        assert bls.Verify(proposer.pubkey, signing_root, signed_header.signature)

    slash_validator(state, header_1.proposer_index)
```

##### Attester slashings

```python
def process_attester_slashing(state: BeaconState, attester_slashing: AttesterSlashing) -> None:
    attestation_1 = attester_slashing.attestation_1
    attestation_2 = attester_slashing.attestation_2
    assert is_slashable_attestation_data(attestation_1.data, attestation_2.data)
    assert is_valid_indexed_attestation(state, attestation_1)
    assert is_valid_indexed_attestation(state, attestation_2)

    slashed_any = False
    indices = set(attestation_1.attesting_indices).intersection(attestation_2.attesting_indices)
    for index in sorted(indices):
        if is_slashable_validator(state.validators[index], get_current_epoch(state)):
            slash_validator(state, index)
            slashed_any = True
    assert slashed_any
```

##### Attestations

*Note*: The function `process_attestation` is modified to do incentive accounting with epoch participation flags.

```python
def process_attestation(state: BeaconState, attestation: Attestation) -> None:
    data = attestation.data
    assert data.target.epoch in (get_previous_epoch(state), get_current_epoch(state))
    assert data.target.epoch == compute_epoch_at_slot(data.slot)
    assert data.slot + MIN_ATTESTATION_INCLUSION_DELAY <= state.slot <= data.slot + SLOTS_PER_EPOCH
    assert data.index < get_committee_count_per_slot(state, data.target.epoch)

    committee = get_beacon_committee(state, data.slot, data.index)
    assert len(attestation.aggregation_bits) == len(committee)

    # Participation flag indices
    participation_flag_indices = get_attestation_participation_flag_indices(state, data, state.slot - data.slot)

    # Verify signature
    assert is_valid_indexed_attestation(state, get_indexed_attestation(state, attestation))

    # Update epoch participation flags
    if data.target.epoch == get_current_epoch(state):
        epoch_participation = state.current_epoch_participation
    else:
        epoch_participation = state.previous_epoch_participation

    proposer_reward_numerator = 0
    for index in get_attesting_indices(state, data, attestation.aggregation_bits):
        for flag_index, weight in enumerate(PARTICIPATION_FLAG_WEIGHTS):
            if flag_index in participation_flag_indices and not has_flag(epoch_participation[index], flag_index):
                epoch_participation[index] = add_flag(epoch_participation[index], flag_index)
                proposer_reward_numerator += get_base_reward(state, index) * weight

    # Reward proposer
    proposer_reward_denominator = (WEIGHT_DENOMINATOR - PROPOSER_WEIGHT) * WEIGHT_DENOMINATOR // PROPOSER_WEIGHT
    proposer_reward = Gwei(proposer_reward_numerator // proposer_reward_denominator)
    increase_balance(state, get_beacon_proposer_index(state), proposer_reward)
```

##### Deposits

```python
def get_validator_from_deposit(state: BeaconState, deposit: Deposit) -> Validator:
    amount = deposit.data.amount
    effective_balance = min(amount - amount % EFFECTIVE_BALANCE_INCREMENT, MAX_EFFECTIVE_BALANCE)

    return Validator(
        pubkey=deposit.data.pubkey,
        withdrawal_credentials=deposit.data.withdrawal_credentials,
        activation_eligibility_epoch=FAR_FUTURE_EPOCH,
        activation_epoch=FAR_FUTURE_EPOCH,
        exit_epoch=FAR_FUTURE_EPOCH,
        withdrawable_epoch=FAR_FUTURE_EPOCH,
        effective_balance=effective_balance,
    )
```

*Note*: The function `process_deposit` is modified to initialize `inactivity_scores`, `previous_epoch_participation`, and `current_epoch_participation`.

```python
def process_deposit(state: BeaconState, deposit: Deposit) -> None:
    # Verify the Merkle branch
    assert is_valid_merkle_branch(
        leaf=hash_tree_root(deposit.data),
        branch=deposit.proof,
        depth=DEPOSIT_CONTRACT_TREE_DEPTH + 1,  # Add 1 for the List length mix-in
        index=state.eth1_deposit_index,
        root=state.eth1_data.deposit_root,
    )

    # Deposits must be processed in order
    state.eth1_deposit_index += 1

    pubkey = deposit.data.pubkey
    amount = deposit.data.amount
    validator_pubkeys = [validator.pubkey for validator in state.validators]
    if pubkey not in validator_pubkeys:
        # Verify the deposit signature (proof of possession) which is not checked by the deposit contract
        deposit_message = DepositMessage(
            pubkey=deposit.data.pubkey,
            withdrawal_credentials=deposit.data.withdrawal_credentials,
            amount=deposit.data.amount,
        )
        domain = compute_domain(DOMAIN_DEPOSIT)  # Fork-agnostic domain since deposits are valid across forks
        signing_root = compute_signing_root(deposit_message, domain)
        # Initialize validator if the deposit signature is valid
        if bls.Verify(pubkey, signing_root, deposit.data.signature):
            state.validators.append(get_validator_from_deposit(state, deposit))
            state.balances.append(amount)
            state.previous_epoch_participation.append(ParticipationFlags(0b0000_0000))
            state.current_epoch_participation.append(ParticipationFlags(0b0000_0000))
            state.inactivity_scores.append(uint64(0))
    else:
        # Increase balance by deposit amount
        index = ValidatorIndex(validator_pubkeys.index(pubkey))
        increase_balance(state, index, amount)
```

##### Voluntary exits

```python
def process_voluntary_exit(state: BeaconState, signed_voluntary_exit: SignedVoluntaryExit) -> None:
    voluntary_exit = signed_voluntary_exit.message
    validator = state.validators[voluntary_exit.validator_index]
    # Verify the validator is active
    assert is_active_validator(validator, get_current_epoch(state))
    # Verify exit has not been initiated
    assert validator.exit_epoch == FAR_FUTURE_EPOCH
    # Exits must specify an epoch when they become valid; they are not valid before then
    assert get_current_epoch(state) >= voluntary_exit.epoch
    # Verify the validator has been active long enough
    assert get_current_epoch(state) >= validator.activation_epoch + SHARD_COMMITTEE_PERIOD
    # Verify signature
    domain = get_domain(state, DOMAIN_VOLUNTARY_EXIT, voluntary_exit.epoch)
    signing_root = compute_signing_root(voluntary_exit, domain)
    assert bls.Verify(validator.pubkey, signing_root, signed_voluntary_exit.signature)
    # Initiate exit
    initiate_validator_exit(state, voluntary_exit.validator_index)
```

##### Sync aggregate processing

*Note*: The function `process_sync_aggregate` is new.

```python
def process_sync_aggregate(state: BeaconState, sync_aggregate: SyncAggregate) -> None:
    # Verify sync committee aggregate signature signing over the previous slot block root
    committee_pubkeys = state.current_sync_committee.pubkeys
    participant_pubkeys = [pubkey for pubkey, bit in zip(committee_pubkeys, sync_aggregate.sync_committee_bits) if bit]
    previous_slot = max(state.slot, Slot(1)) - Slot(1)
    domain = get_domain(state, DOMAIN_SYNC_COMMITTEE, compute_epoch_at_slot(previous_slot))
    signing_root = compute_signing_root(get_block_root_at_slot(state, previous_slot), domain)
    assert eth_fast_aggregate_verify(participant_pubkeys, signing_root, sync_aggregate.sync_committee_signature)

    # Compute participant and proposer rewards
    total_active_increments = get_total_active_balance(state) // EFFECTIVE_BALANCE_INCREMENT
    total_base_rewards = Gwei(get_base_reward_per_increment(state) * total_active_increments)
    max_participant_rewards = Gwei(total_base_rewards * SYNC_REWARD_WEIGHT // WEIGHT_DENOMINATOR // SLOTS_PER_EPOCH)
    participant_reward = Gwei(max_participant_rewards // SYNC_COMMITTEE_SIZE)
    proposer_reward = Gwei(participant_reward * PROPOSER_WEIGHT // (WEIGHT_DENOMINATOR - PROPOSER_WEIGHT))

    # Apply participant and proposer rewards
    all_pubkeys = [v.pubkey for v in state.validators]
    committee_indices = [ValidatorIndex(all_pubkeys.index(pubkey)) for pubkey in state.current_sync_committee.pubkeys]
    for participant_index, participation_bit in zip(committee_indices, sync_aggregate.sync_committee_bits):
        if participation_bit:
            increase_balance(state, participant_index, participant_reward)
            increase_balance(state, get_beacon_proposer_index(state), proposer_reward)
        else:
            decrease_balance(state, participant_index, participant_reward)
```

TODO

### Initialise State

This helper function is only for initializing the state for pure Altair testnets and tests.

*Note*: The function `initialize_beacon_state_from_eth1` is modified: (1) using `ALTAIR_FORK_VERSION` as the current fork version, (2) utilizing the Altair `BeaconBlockBody` when constructing the initial `latest_block_header`, and (3) adding initial sync committees.

```python
def initialize_beacon_state_from_eth1(eth1_block_hash: Bytes32,
                                      eth1_timestamp: uint64,
                                      deposits: Sequence[Deposit]) -> BeaconState:
    fork = Fork(
        previous_version=ALTAIR_FORK_VERSION,  # [Modified in Altair] for testing only
        current_version=ALTAIR_FORK_VERSION,  # [Modified in Altair]
        epoch=GENESIS_EPOCH,
    )
    state = BeaconState(
        genesis_time=eth1_timestamp + GENESIS_DELAY,
        fork=fork,
        eth1_data=Eth1Data(block_hash=eth1_block_hash, deposit_count=uint64(len(deposits))),
        latest_block_header=BeaconBlockHeader(body_root=hash_tree_root(BeaconBlockBody())),
        randao_mixes=[eth1_block_hash] * EPOCHS_PER_HISTORICAL_VECTOR,  # Seed RANDAO with Eth1 entropy
    )

    # Process deposits
    leaves = list(map(lambda deposit: deposit.data, deposits))
    for index, deposit in enumerate(deposits):
        deposit_data_list = List[DepositData, 2**DEPOSIT_CONTRACT_TREE_DEPTH](*leaves[:index + 1])
        state.eth1_data.deposit_root = hash_tree_root(deposit_data_list)
        process_deposit(state, deposit)

    # Process activations
    for index, validator in enumerate(state.validators):
        balance = state.balances[index]
        validator.effective_balance = min(balance - balance % EFFECTIVE_BALANCE_INCREMENT, MAX_EFFECTIVE_BALANCE)
        if validator.effective_balance == MAX_EFFECTIVE_BALANCE:
            validator.activation_eligibility_epoch = GENESIS_EPOCH
            validator.activation_epoch = GENESIS_EPOCH

    # Set genesis validators root for domain separation and chain versioning
    state.genesis_validators_root = hash_tree_root(state.validators)

    # [New in Altair] Fill in sync committees
    # Note: A duplicate committee is assigned for the current and next committee at genesis
    state.current_sync_committee = get_next_sync_committee(state)
    state.next_sync_committee = get_next_sync_committee(state)

    return state
```

# Part 4: Future <!-- /part4* -->

## The Merge <!-- /part4/the_merge* -->

### Introduction

TODO

### Architecture <!-- /part4/the_merge/architecture* -->

TODO

### The Transition <!-- /part4/the_merge/transition* -->

TODO

### Withdrawals <!-- /part4/the_merge/withdrawals* -->

TODO

## Secret Shared Validators <!-- /part4/ssv* -->

### Introduction

TODO

### Multi-party Compute <!-- /part4/ssv/mpc* -->

TODO

### Consensus <!-- /part4/ssv/consensus* -->

TODO

## Light Clients <!-- /part4/light_clients* -->

### Introduction

TODO

### Syncing <!-- /part4/light_clients/syncing* -->

TODO

### Protocol <!-- /part4/light_clients/protocol* -->

## Sharding <!-- /part4/sharding* -->

### Introduction

TODO

### Data Availability <!-- /part4/sharding/data_availability* -->

TODO

### Pricing <!-- /part4/sharding/pricing* -->

TODO

## Active Research Topics <!-- /part4/research* -->

### Introduction

TODO

### Proofs of Custody <!-- /part4/research/custody* -->

TODO

### Builder / proposer split <!-- /part4/research/builders_proposers* -->

TODO

### Consensus changes <!-- /part4/research/consensus* -->

TODO

### Executable shards <!-- /part4/research/executable_shards* -->

TODO

### Verkle trees <!-- /part4/research/verkle_trees* -->

TODO

### Statelessness <!-- /part4/research/statelessness* -->

TODO

### Single Secret Leader Election <!-- /part4/research/ssle* -->

TODO

### Verifiable Delay Function <!-- /part4/research/vdf* -->

TODO

### Post-quantum crypto <!-- /part4/research/post-quantum* -->

TODO

### S[NT]ARK-friendly state transitions <!-- /part4/research/snark* -->

TODO

# Appendices <!-- /appendices* -->

TODO

## Glossary <!-- /appendices/glossary* -->

TODO

## Staking <!-- /appendices/staking* -->

### Introduction

TODO

### Ways to Stake <!-- /appendices/staking/ways* -->

TODO

### Client Diversity <!-- /appendices/staking/diversity* -->

TODO

### FAQ <!-- /appendices/staking/faq* -->

TODO
