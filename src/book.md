# Preface <!-- /preface -->

## Work in progress!

This is a teaser, an appetiser. Only one part is reasonably complete, the [Annotated Specification](/part3) - the rest is on its way.

The Annotated Spec is the guts of the machine. Like the innards of a computer, all the components are showing and the wires are hanging out: everything is on display. But with the guts in place, everything else can be built around them and the messy details neatly tucked away. My goal for the remaining parts of the book is to wrap a nice accessible narrative around the tricky technical details. There will be pictures.

In an ideal world, my plan is as follows:

  - Spend some time fixing typos and polishing the annotated spec.
  - Deliver _Edition 1.0: Altair_ at some point before The Merge (the point at which Ethereum moves to proof of stake). By then, I aim to have done the following:
    - Completed [Part 1: Building](/part1)
    - Completed [Part 2: Technical Overview](/part2)
    - Made a start on [Part 4: Future](/part4)
  - Some while after The Merge, I'll publish a fully revised _Edition 2.0: The Merge_ with all sections complete.
  - Editions _2.5_ (with post-Merge clean-ups) and _3.0_ (a full revision for sharding) are also in view. This thing's going to keep me busy for a while.

Meanwhile, I might get round to making it prettier, ensuring it is accessible and mobile-friendly, adding search, navigation and other rich information, PDF versions, maybe NFTs... who knows?

**Warning:** until Edition 1.0 is out, anything may change. I'll try not to change URLs and anchors in the Annotated Spec part, but no promises. Anything else, including entire chapters and sections, should be considered unstable.

## What to expect

This is a book for those who want to understand Ethereum&nbsp;2.0 &ndash; Ethereum on proof of stake &ndash; at a technical level. What does it do? How does it work? Why is it like this?

Who am I writing for? For people like me! People who enjoy understanding how things work. But more than that, who like to know _why_ things are the way they are.

Although I am an Eth2 staker, and an Ethereum user, I am not writing primarily for stakers or users here. Some of the generic material on [Staking](/appendices/staking) may be relevant (once I have written it), but you will find better help in places like the excellent [Ethstaker](https://ethstaker.cc/) community.

The scope of the book concerns (what I consider to be) the Ethereum&nbsp;2.0 protocol. Ethereum&nbsp;2.0 has become a less well-defined term recently. But for me, it broadly includes,
  - all things proof of stake and the beacon chain,
  - the process of The Merge at which Ethereum&nbsp;1.0 moves to proof of stake,
  - in-protocol data sharding, and
  - an array of potential future enhancements.

I will not be covering any of the historic Ethereum&nbsp;1.0 protocol, except as it touches upon The Merge. The [Mastering Ethereum book](https://github.com/ethereumbook/ethereumbook) is an excellent resource, and there is no point in duplicating it. Although roll-ups and other so-called layer 2 solutions have rapidly become part of the overall Ethereum&nbsp;2.0 narrative, they are by definition not in-protocol, and I will not be covering them here. I will not be discussing, DeFi, DAOs, NFTs, or any of the wonderful things that can be built on top of this amazing technology.

It's a chunky list of exclusions, but there's still [plenty to talk about](/contents).

## Altair

This edition covers the Altair version of the deployed Ethereum&nbsp;2.0 beacon chain. The beacon chain went live with Phase&nbsp;0 on December 1st, 2020. It was upgraded to Altair on October 27th, 2021.

## A note on Terminology

The "Ethereum 2.0" terminology is out of favour in some circles, but I don't really care. I will be happily using the terms "Ethereum 2.0", "Ethereum 2", "Ethereum 1", "Eth1", and "Eth2" throughout this book where it makes sense to me, and I'm pretty sure you'll know what I mean. I have more to say about this in [the first chapter](/part1/introduction).

You will notice too that I unapologetically use British English spelling, punctuation, and quaint idioms. It's a feature, not a bug.

## Acknowledgements

First and foremost, I want to thank my employer, ConsenSys. Much of the work has been in my own time, but ConsenSys has also been very cool with me working on this in the course of my day job. ConsenSys is a wonderful employer, a terrific force for good in the ecosystem, and an incredible place to work.

So much of what I do involves writing about other people's work, and pretty much everything in this book is other people's work. I deeply value the openness and generosity of the Ethereum community. For me, this is one of its defining characteristics. Many people's contributions are cited throughout this book, and I am indebted to all of you. Being part of the Eth2 dev community has been the best experience of my life.

Thank you to the many GitCoin grant supporters who donated in support of the original annotated specification and my regular What's New in Eth2 newsletter. And to generous crypto friends, anon and otherwise, for your kind gifts over the years. Your support has encouraged me hugely as I've wrestled with the minutiae of the spec. I bloody love this community.

Shout-out to the EthStaker community: you rock!

Finally, to circle back to ConsenSys: working daily with such brilliant, talented, generous, and knowledgeable people is a joy. The Protocols group, PegaSys, has been my home for the past four-plus years. It is where I helped establish the fabulous Protocols R&D team, and later kicked off the project that became Teku. Thank you for all your support and encouragement. I love working with all you wonderful people.

# Part 1: Building <!-- /part1 -->

## Introduction <!-- /part1/introduction* -->

TODO

### Why Ethereum 2.0? <!-- /part1/introduction/whyeth2* -->

TODO

### The Cathedral and the Bazaar <!-- /part1/introduction/catb* -->

TODO

### A Brief History of Ethereum's Future <!-- /part1/introduction/history* -->

TODO

### Who's who <!-- /part1/introduction/who* -->

TODO

### Outline of the Book <!-- /part1/introduction/outline* -->

TODO

## Goals <!-- /part1/goals* -->

### Introduction

TODO

### Design Goals <!-- /part1/goals/design* -->

TODO

### Attacks and Defences <!-- /part1/goals/attacks* -->

TODO

## Making the Sausage <!-- /part1/making* -->

### Introduction

TODO

### The Specifications <!-- /part1/making/specs* -->

TODO

### The Process <!-- /part1/making/process* -->

TODO

# Part 2: Technical Overview <!-- /part2 -->

## Introduction <!-- /part2/introduction* -->

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

## Consensus <!-- /part2/consensus* -->

### Introduction

We have a challenge ahead of us. My task is to explain the following.

> The Proof-of-Stake (PoS) Ethereum consensus protocol is constructed by applying the finality gadget Casper FFG on top of the fork choice rule LMD GHOST, a flavor of the Greedy Heaviest-Observed Sub-Tree (GHOST) rule which considers only each participant’s most recent vote (Latest Message Driven, LMD).

This is the first sentence of [a recent paper](https://arxiv.org/abs/2110.10086) on attacks on the Ethereum&nbsp;2.0 consensus protocol.

TODO

[TODO: That paper is a great starting place for an exposition of PoS]::

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

<!-- Do a section on attacks/analyses? Do we actually have a Nash equilibrium. RIG's work?

One type of attack:
 - Vlad "A pile of external capital would have to come into the system to attack the blockchain"

Bribing attack:
 - Vlad: "With the bribe attack, the question became “what is the price of bribing the currently existing nodes to get the desired outcome?”"

-->

### Introduction

Permissionless blockchains are cryptoeconomic systems: cryptography enforces correct behaviour where possible; economics encourages correct behaviour where it cannot be enforced. The correct behaviours we're looking for roughly correspond to availability and security. We want the chain to keep making progress, and want the chain to give correct, non-contradictory results under all reasonable circumstances.

The tools available to help us meet these goals are (1) rewards for behaviour that helps the protocol, (2) penalties for behaviour that hinders the protocol, and (3) punishments for behaviour that looks like an attack on the protocol.

One of the few attractive aspects of Proof of Work is the simplicity of its economic model. Miners receive block rewards for creating blocks that get included on chain, and receive fees for including transactions in their blocks. The block rewards come from newly created coins (issuance), and transaction fees are from previously issued coins. There are no explicit in-protocol penaltes or punishments. Combined with the "heaviest chain" fork choice rule, this simple model has proved to be incredibly robust. Ethereum&nbsp;1 added a little complexity with uncle rewards for miners and the EIP-1559 fee burning mechanism, but it remains fundamentally simple and fairly easy to reason about.

By contrast, the Ethereum&nbsp;2.0 Proof of Stake protocol employs an array of different economic incentives. We will break things down into the following elements over the next sections.

1. The most fundamental economic component is the [stake](/part2/economics/staking) itself.
2. Within the protocol, the stake is represented as an [effective balance](/part2/economics/effective_balance) that is the actual measure of the influence a validator has on the protocol.
3. [Rewards](/part2/economics/rewards) incentivise desirable behviours such as publishing beacon blocks and timely attestations.
4. [Penalties](/part2/economics/rewards) disincentivise undesirable behaviours such as failing to make attestations, or making late or incorrect attestations.
5. The [inactivity leak](/part2/economics/inactivity) is a special regime that the beacon chain may enter in which rewards and penalties are modified to much more heavily penalise non-participation.
6. [Slashings](/part2/economics/slashing) are punishments for breaking the protocol rules in very specific ways that look like attacks.

As we shall see, every validator has a beacon chain balance where its stake is stored. All beacon chain protocol rewards come from new issuance of Ether and are added to validators' beacon chain balances. Penalties and slashings are subtracted from validators' beacon chain balances and thus reduce the issuance rate of Ether, or even burn Ether if they exceed the rewards.

#### Further reading

 - Vlad Zamfir's memoirs on the development of the Casper Protocol are not only a great read, but a good introduction to the challenges of designing a proof of stake protocol. They discuss the backgrounf to many of the design decisions that led, eventually, to the protocol we see today.
   - [Part 1](https://medium.com/@Vlad_Zamfir/the-history-of-casper-part-1-59233819c9a9)
   - [Part 2](https://medium.com/@Vlad_Zamfir/the-history-of-casper-chapter-2-8e09b9d3b780)
   - [Part 3](https://medium.com/@Vlad_Zamfir/the-history-of-casper-chapter-3-70fefb1182fc)
   - [Part 4](https://medium.com/@Vlad_Zamfir/the-history-of-casper-chapter-4-3855638b5f0e)
   - [Part 5](https://medium.com/@Vlad_Zamfir/the-history-of-casper-chapter-5-8652959cef58)

### Staking <!-- /part2/economics/staking* -->

A stake is the deposit that a full participant of the Ethereum&nbsp;2 protocol must put down. The stake is lodged permanently in the [deposit contract](/part2/deposits/contract) on the Ethereum chain, and reflected in a balance in the validator's record on the beacon chain. The stake entitles a validator to propose blocks, to attest to blocks and checkpoints, and to participate in sync committees, all in return for rewards that accrue to its beacon chain balance.

The stake in Ethereum&nbsp;2 has three key roles.

First, the stake is an anti-sybil mechanism. Ethereum&bnsp;2 is a permissionless system that anyone can join. Permissionless systems must find a way to to allocate influence among their participants. It is not feasible to allow all claimed identities to participate on an equal footing, otherwise individuals could cheaply creating large numbers of duplicate identities and overwhelm the chain. In Proof of Work chains, a participant's influence is proportional to its hashpower, a limited resource[^fn-one-cpu-one-vote]. In Proof of Stake chains, participants must stake some of the chain's coin, which is again a limited resource. The influence of each staker in the protocol is proportional to the stake that they put down.

[^fn-one-cpu-one-vote]: In the Bitcoin whitepaper, Satoshi wrote that, "Proof-of-work is essentially one-CPU-one-vote", although ASICs and mining farms have long subverted this. Proof of Stake is one-stake-one-vote.

Second, the stake aligns incentives. Stakers own some of what they are guarding, and are incentivised to guard it well.

Third, the stake provides accountability. There is a direct cost to acting in a harmful way in Ethereum&nbsp;2. Specific types of harmful behaviour can be uniquely attributed to the stakers that performed them, and their stakes can be reduced or taken away entirely. This allows us to quantify the "economic security" of the protocol in terms of what it would cost an attacker to do something harmful.[^fn-asic-farm]

[^fn-asic-farm]: In PoW, an unsuccessful attacker can just keep coming back; in PoS this is not so. It is obligatory to quote Vlad Zamfir at this point: under PoS, "it’s as though your ASIC farm burned down if you participated in a 51% attack".

The size of the stake is 32 Ether per validator. 32 ETH is a compromise value that is as small as possible in order to allow wide participation, while remaining large enough that we don't end up with too many validators. The hard cap on the number of validators is the total Ether supply divided by the stake size. As of today, that's about 3.6 million validators. We expect that the beacon chain architecture can likely handle up to around a million validators, and we expect perhaps 10-20% of Ether to be staked eventually, so 32 ETH per stake is about as low as we can go while ensuring we remain within capacity. An alternative might be to [cap the number](https://github.com/ethereum/consensus-specs/issues/2137) of validators active at any one time to put an upper bound on the amount of compute resources required. With something like that in place, we could explore reducing the stake below 32 ETH, allowing many more validators to participate.

Fun fact: the original hybrid Casper FFG PoS proposal ([EIP-1011](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1011.md)) called for a minimum deposit size of 1500 ETH as the system design could handle up to around 900 active validators.

#### Nothing at stake

One of the issues that had to be solved in order to make Proof of Stake practical was the "nothing at stake" problem. Under Proof of Work, creating a block is expensive, requiring a huge amount of hash power. Under Proof of Stake, building a block is essentially free. This means that, if the network forks, a staker might as well build blocks on top of every fork: there is nothing to lose and perhaps much to gain - you never want to be building on a fork that later gets orphaned.

#### Long-range attacks

<!-- knowing your validator set -->

#### Economic finality

TODO

#### Further reading

 - The "nothing at stake" problem is discussed in the [Proof of Stake FAQ](https://eth.wiki/concepts/proof-of-stake-faqs#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed)

<!--
Types of participant.
  - Honest
  - Economically rational
  - Attacker
-->

### Effective Balance <!-- /part2/economics/effective_balance* -->

TODO

### Rewards and Penalties <!-- /part2/economics/rewards* -->

TODO

### Inactivity leak <!-- /part2/economics/inactivity* -->

TODO

### Slashing <!-- /part2/economics/slashing* -->

TODO

#### Correlated penalities

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

The algorithm for shuffling [in the specification](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/beacon-chain.md#compute_shuffled_index) deals with only a single index at a time.

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

First, we pick a pivot index $p$. This is pseudo-randomly chosen, based on the round number and some other seed data. The pivot is fixed for the rest of the round.

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

 - The initial discussion about the search for a good shuffling algorithm is [Issue 323](https://github.com/ethereum/consensus-specs/issues/323) on the specs repo.
 - The winning algorithm was announced in [Issue 563](https://github.com/ethereum/consensus-specs/issues/563).
 - The original paper describing the swap-or-not shuffle is Hoang, Morris, and Rogaway, 2012, ["An Enciphering Scheme Based on a Card Shuffle"](https://link.springer.com/content/pdf/10.1007%2F978-3-642-32009-5_1.pdf). See the "generalized domain" algorithm on page 3.

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

### History of upgrades <!-- /part2/upgrades/history* -->

## Altair

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

## Introduction <!-- /part3/introduction -->

The beacon chain specification is the guts of the machine. Like the guts of a computer, all the components are showing and the wires are hanging out: everything is on display. In the course of the next sections I will be dissecting the entire core beacon chain specification line by line. My aim is not only to explain how things work, but also to give some historical context, some of the reasoning behind how we ended up where we are today.

[Early versions](https://github.com/ethereum/consensus-specs/blob/86ec833172704ea0889b5d595d17f45ba1a6676f/specs/core/0_beacon-chain.md) of the specs were written with much more narrative and explanation than today's. Over time they were coded up in Python for better precision and the benefits of being executable. However, in that process, most of the explanation and intuition was removed.[^fn-justinification] Vitalik has created his own [annotated specifications](https://github.com/ethereum/annotated-spec) that covers many of the key insights. It's hard to compete with Vitalik, but my intention here is to go one level deeper in thoroughness and detail. And perhaps to give an independent perspective.

[^fn-justinification]: A process called "Justinification". Iykyk `;-)`

As and when other parts of the book get written I will add links to the specific chapters on each topic (for example on simple serialize, consensus, networking).

Note that the online annotated specification is available in two forms:
  - divided into chapters in [Part 3](/part3) of the main book, and
  - as a standalone [single page](/annotated-spec) that's useful for searching.

The contents of each are identical.

### Version information

This edition of Upgrading Ethereum is based on the Altair version of the beacon chain specification, and corresponds to [Release v1.1.1](https://github.com/ethereum/consensus-specs/releases/tag/v1.1.1), made on the 4th of October 2021.

At the time of writing, there is no single specification document for Altair. Instead, there is the [Phase&nbsp;0 specification](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/beacon-chain.md) and an additional [Altair document](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/altair/beacon-chain.md) describing the differences (a kind of text-based diff).

For this work, I have consolidated the two specifications into one, omitting parts that were superseded by Altair. For the most part, I have tried to reflect the existing structure of the documents to make it easier to read side-by-side with the original spec. However, I have included the separate [BLS](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/altair/bls.md) and [Altair fork](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/altair/fork.md) documents into the flow of this one.

#### References

  - [The Phase&nbsp;0](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/beacon-chain.md) beacon chain specification.
  - [Altair updates](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/altair/beacon-chain.md) to the beacon chain specification.
  - My own [Phase&nbsp;0 annotated specification](https://benjaminion.xyz/eth2-annotated-spec/phase0/beacon-chain/) remains available for historical interest.
  - Vitalik's [annotated specifications](https://github.com/ethereum/annotated-spec), covering Phase&nbsp;0, Altair, The Merge, and beyond.

## Types, Constants, Presets, and Configuration <!-- /part3/config -->

### Preamble

For some, a chapter on constants, presets and parameters will seem drier than the Namib desert, but I've long found these to be a rich and fertile way in to the ideas and mechanisms we'll be unpacking in detail in later chapters. Far from being a desert, this part of the spec bustles with life.

The foundation is laid with a set of custom data types. The beacon chain specification is executable in Python; the data types defined at the top of the spec represent the fundamental quantities that will reappear frequently.

Then &ndash; with constants, presets, and parameters &ndash; we will examine the numbers that define and constrain the behaviour of the chain. Each of these quantities tells a story. Each parameter encapsulates an insight, or a mechanism, or a compromise. Why is it here? How has it changed over time? Where does its value come from?

### Custom Types <!-- /part3/config/types -->

The specification defines the following Python custom types, "for type hinting and readability": the data types defined here appear frequently throughout the spec; they are the building blocks for everything else.

Each type has a name, an "SSZ equivalent", and a description. SSZ is the encoding method used to pass data between clients, among other things. Here it can be thought of as just a primitive data type.

[TODO: link instead to SSZ section when written]::

Throughout the spec, (almost) all integers are unsigned 64 bit numbers, `uint64`, but this hasn't always been the case.

Regarding "unsigned", there was [much discussion](https://github.com/ethereum/consensus-specs/issues/626) around whether Eth2 should use signed or unsigned integers, and eventually unsigned was chosen. As a result, it is critical to preserve the order of operations in some places to avoid inadvertently causing underflows since negative numbers are forbidden.

And regarding "64 bit", early versions of the spec used [other](https://github.com/ethereum/consensus-specs/commit/4c3c8510d4abf969a7170fce10dcfb5d4df408c8) bit lengths than 64 (a "[premature optimisation](http://wiki.c2.com/?PrematureOptimization)"), but arithmetic integers are now [standardised at 64 bits](https://github.com/ethereum/consensus-specs/pull/1746) throughout the spec, the only exception being [`ParticipationFlags`](#participationflags), introduced in the Altair fork, which has type `uint8`, and is really a `byte` type.

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

Time is divided into fixed length slots. Within each slot, exactly one validator is randomly selected to propose a beacon chain block. The progress of slots is the fundamental heartbeat of the beacon chain.

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

All Ether amounts are specified in units of Gwei ($10^9$ Wei, $10^{-9}$ Ether). This is basically a hack to avoid having to use integers wider than 64 bits to store validator balances and while doing calculations, since ($2^{64}$ Wei is only 18 Ether. Even so, in some places care needs to be taken to avoid arithmetic overflow when dealing with Ether calculations.

#### Root

Merkle roots are ubiquitous in the Eth2 protocol. They are a very succinct and tamper-proof way of representing a lot of data, an example of a [cryptographic accumulator](https://en.wikipedia.org/wiki/Accumulator_(cryptography)). Blocks are summarised by their Merkle roots; state is summarised by its Merkle root; the list of Eth1 deposits is summarised by its Merkle root; the digital signature of a message is calculated from the Merkle root of the data structure contained within the message.

#### Hash32

Merkle roots are constructed with cryptographic hash functions. In the spec, a `Hash32` type is used to represent Eth1 block roots (which are also Merkle roots).

I don't know why only the Eth1 block hash has been awarded the `Hash32` type: other hashes in the spec [remain](https://github.com/ethereum/consensus-specs/pull/2689) `Bytes32`. In early versions of the spec `Hash32` was used for all cryptographic has quantities, but this was [changed](https://github.com/ethereum/consensus-specs/pull/458) to `Bytes32`.

Anyway, it's worth taking a moment in appreciation of the humble [cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function). The hash function is arguably the single most important algorithmic innovation underpinning blockchain technology, and in fact most of our online lives. Easily taken for granted, but utterly critical in enabling our modern world.

#### Version

Unlike Ethereum 1[^fn-eth1-forkid], the beacon chain has an in-protocol concept of a version number. It is expected that the protocol will be updated/upgraded from time to time, a process commonly known as a "hard-fork". For example, the upgrade from Phase&nbsp;0 to Altair took place on the 27th of October 2021, and was assigned [its own fork version](/part3/altair-fork#altair_fork_version).

`Version` is used when computing the [`ForkDigest`](#forkdigest).

[^fn-eth1-forkid]: Ethereum 1.0 introduced a fork identifier as defined in [EIP-2124](https://eips.ethereum.org/EIPS/eip-2124) which is similar to `Version`, but the Eth1 fork id is not part of the consensus protocol and is used only in the [networking protocol](https://eips.ethereum.org/EIPS/eip-2364).

[TODO: Link to networking section]::

#### DomainType

`DomainType` is just a [cryptographic nicety](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-12#section-2.2.5): messages intended for different purposes are tagged with different domains before being hashed and possibly signed. It's a kind of name-spacing to avoid clashes; probably unnecessary, but considered a best-practice. Ten domain types are [defined in Altair](/part3/config/constants#domain-types).

#### ForkDigest

`ForkDigest` is the unique chain identifier, generated by combining information gathered at genesis with the current chain [`Version`](#version) identifier.

The `ForkDigest` serves two purposes.
  1. Within the consensus protocol to prevent, for example, attestations from validators on one fork (that maybe haven't upgraded yet) being counted on a different fork.
  2. Within the networking protocol to help to distinguish between useful peers that on the same chain, and useless peers that are on a different chain. This usage is described in the [Ethereum 2.0 networking specification](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/p2p-interface.md#how-should-fork-version-be-used-in-practice), where `ForkDigest` appears frequently.

Specifically, `ForkDigest` is the first four bytes of the hash tree root of the [`ForkData`](/part3/containers/dependencies#forkdata) object containing the current chain [`Version`](#version) and the [`genesis_validators_root`](/part3/containers/state#genesis_validators_root) which was created at beacon chain [initialisation](/part3/initialise#def_initialize_beacon_state_from_eth1). It is computed in [`compute_fork_digest()`](/part3/helper/misc#def_compute_fork_digest).

[TODO: link to networking section]::

#### Domain

`Domain` is used when verifying protocol messages validators. To be valid, a message must have been [combined](/part3/helper/misc#def_compute_signing_root) with both the correct domain and the correct fork version. It calculated as the concatenation of the four byte [`DomainType`](#domaintype) and the first 28 bytes of the [fork data root](/part3/helper/misc#compute_fork_data_root).

#### BLSPubkey

BLS (Boneh-Lynn-Shacham) is the digital signature scheme used by Eth2. It has some [very nice properties](https://ethresear.ch/t/pragmatic-signature-aggregation-with-bls/2105), in particular the ability to aggregate signatures. This means that many validators can sign the same message (for example, that they support block X), and these signatures can all be efficiently aggregated into a single signature for verification. The ability to do this efficiently makes Eth2 practical as a protocol. Several other protocols have adopted or will adopt BLS, such as Zcash, Chia, Dfinity and Algorand. We are using the BLS signature scheme based on the [BLS12-381](https://hackmd.io/@benjaminion/bls12-381) (Barreto-Lynn-Scott) elliptic curve.

The `BLSPubkey` type holds a validator's public key, or the aggregation of several validators' public keys. This is used to verify messages that are claimed to have come from that validator or group of validators.

In Ethereum&nbsp;2.0, BLS public keys are elliptic curve points from the BLS12-381 $G_1$ group, thus are 48 bytes long when compressed.

[TODO: link to BLS section]::

#### BLSSignature

As above, we are using BLS signatures over the [BLS12-381](https://hackmd.io/@benjaminion/bls12-381) elliptic curve in order to sign messages between participants. As with all digital signature schemes, this guarantees both the identity of the sender and the integrity of the contents of any message.

In Ethereum&nbsp;2.0, BLS signatures are elliptic curve points from the BLS12-381 $G_2$ group, thus are 96 bytes long when compressed.

#### ParticipationFlags

The `ParticipationFlags` type was introduced in the Altair upgrade as part of the accounting reforms.

Prior to Altair, all attestations seen in blocks were stored in state for two epochs. At the end of an epoch, finality calculations, and reward and penalty calculations for each active validator, would be done by processing all of the attestations for the previous epoch as a batch. This created a spike in processing at epoch boundaries, and led to a noticeable increase in late blocks and attestations during the first slots of epochs. With Altair, [participation flags](https://github.com/ethereum/consensus-specs/pull/2140) are now used to continuously track validators' attestations, reducing the processing load at the end of epochs.

Three of the eight bits are [currently used](/part3/config/constants#participation-flag-indices); five are reserved for future use.

As an aside, it might have been more intuitive if `ParticipationFlags` were a `Bytes1` type, rather than introducing a weird `uint8` into the spec. After all, it is not used as an arithmetic integer. However, `Bytes1` is a composite type in SSZ, really an alias for `Vector[uint8, 1]`, whereas `uint8` is a basic type. When computing the hash tree root of a `List` type, multiple basic types can be packed into a single leaf, while composite types take a leaf each. This would result in 32 times as many hashing operations for a list of `Bytes1`. For similar reasons the type of `ParticipationFlags` [was changed](https://github.com/ethereum/consensus-specs/pull/2176#pullrequestreview-566879992) from `bitlist` to `uint8`.

#### References

 - A [primer on Merkle roots](https://www.mycryptopedia.com/merkle-tree-merkle-root-explained/).
   - See also [Wikipedia on Merkle Trees](https://en.wikipedia.org/wiki/Merkle_tree).
 - I have written an [intro to the BLS12-381 elliptic curve](https://hackmd.io/@benjaminion/bls12-381) elsewhere.

### Constants <!-- /part3/config/constants -->

The distinction between "constants", "presets", and "configuration values" is not always clear, and things have moved back and forth between the sections at times. In essence, "constants" are things that are expected never to change for the beacon chain, no matter what fork or test network it is running.

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

Perhaps this seems uncontroversial, but it actually featured heavily in the Great Signedness Wars mentioned [previously](types#custom-types). The issue was that calculations on unsigned integers might have negative intermediate values, which would cause problems. A proposed work-around for this was to start the chain at a non-zero slot number. It was initially set to [2^19](https://github.com/ethereum/consensus-specs/commit/656eae6f6ad85de5f4b9493ca0a4f8ca16d2e261#diff-51a43328a58414e132a744f3771f018cR193), then [2^63](https://github.com/ethereum/consensus-specs/commit/7f39f79b2e72654920b2e12127cfdfe6ad0088c6), then [2^32](https://github.com/ethereum/consensus-specs/commit/9b7b35bc9d18d0fac92ee142f1ea66ab289d3175), and finally [back to zero](https://github.com/ethereum/consensus-specs/commit/8c32128ffbda5c7e056c218cdb78ab76d856c5f5#diff-51a43328a58414e132a744f3771f018cR219). In my humble opinion, this madness only confirms that we should have been using signed integers all along.

##### `GENESIS_EPOCH`

As above. When the chain starts, it starts at epoch zero.

##### `FAR_FUTURE_EPOCH`

A candidate for the dullest constant. It's used as a default initialiser for validators' activation and exit times before they are properly set. No epoch number will ever be bigger than this one.

##### `DEPOSIT_CONTRACT_TREE_DEPTH`

`DEPOSIT_CONTRACT_TREE_DEPTH` specifies the size of the (sparse) Merkle tree used by the Eth1 deposit contract to store deposits made. With a value of 32, this allows for $2^{32}$ = 4.3 billion deposits. Given that the minimum deposit it 1 Ether, that number is clearly enough.

Since deposit receipts contain Merkle proofs, their size depends on the value of this constant.

##### `JUSTIFICATION_BITS_LENGTH`

As an optimisation to Casper FFG &ndash; the process by which finality is conferred on epochs &ndash; the beacon chain uses a "$k$-finality" rule. We will describe this more fully when we look at processing [justification and finalisation](/part3/transition/epoch#def_weigh_justification_and_finalization). For now, this constant is just the number of bits we need to store in state to implement $k$-finality. With $k = 2$, we track the justification status of the last four epochs.

##### `PARTICIPATION_FLAG_WEIGHTS`

This array is just a convenient way to access the various weights given to different validator achievements when calculating rewards. The three weights are defined under [incentivization weights](#incentivization-weights), and each weight corresponds to a flag stored in state and defined under [participation flag indices](#participation-flag-indices).

##### `ENDIANNESS`

[Endianness](https://en.wikipedia.org/wiki/Endianness) refers to the order of bytes in the binary representation of a number: most significant byte first is big-endian; least significant byte first is little-endian. For the most part these details are hidden by compilers, and we don't need to worry about endianness. But endianness matters when converting between integers and bytes, which is relevant to shuffling and proposer selection, the RANDAO, and when serialising with SSZ.

The spec began life as big-endian, but the Nimbus team from Status successfully lobbied for it to be changed to little-endian to better match processor hardware implementations, and the endianness [of WASM](https://webassembly.org/docs/portability/). SSZ was changed [first](https://github.com/ethereum/consensus-specs/pull/139), and then the rest of the spec [followed](https://github.com/ethereum/consensus-specs/pull/564).

#### Participation flag indices

| Name                       | Value |
| -                          | -     |
| `TIMELY_SOURCE_FLAG_INDEX` | `0`   |
| `TIMELY_TARGET_FLAG_INDEX` | `1`   |
| `TIMELY_HEAD_FLAG_INDEX`   | `2`   |

Validators making attestations that get included on-chain are rewarded for three things:
  - getting attestations included with the correct source checkpoint within 5 slots (`integer_squareroot(SLOTS_PER_EPOCH)`);
  - getting attestations included with the correct target checkpoint within 32 slots (`SLOTS_PER_EPOCH`); and,
  - getting attestations included with the correct head within 1 slot (`MIN_ATTESTATION_INCLUSION_DELAY`), basically immediately.

These flags are temporarily recorded in the [`BeaconState`](/part3/containers/state#beaconstate) when attestations are processed, then used at the ends of epochs to update finality and to calculate validator rewards for making attestations.

The mechanism for rewarding timely inclusion of attestations (thus penalising late attestations) differs between Altair and Phase&nbsp;0. In Phase&nbsp;0, attestations included within 32 slots would receive the full reward for the votes they got correct (source, target, head), plus a declining reward based on the delay in inclusion: $\frac{1}{2}$ for a two slot delay, $\frac{1}{3}$ for a three slot delay, and so on. With Altair, for each vote, we now have a cliff before which the validator receives the full reward and after which a penalty. The cliffs differ in duration, which is intended to more accurately target incentives at behaviours that genuinely help the chain (there is little value in rewarding a correct head vote made 30 slots late, for example). See [`get_attestation_participation_flag_indices()`](/part3/helper/accessors#get_attestation_participation_flag_indices) for how this is implemented in code.

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

On a long-term average, a validator can expect to earn a total amount of [`get_base_reward()`](/part3/transition/epoch#def_get_base_reward) per epoch, with these weights being the relative portions for each of the duties comprising that total. Proposing blocks and participating in sync committees do not happen in every epoch, but are randomly assigned, so over small periods of time validator earnings may differ from `get_base_reward()`.

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

These withdrawal credential prefixes are yet significant in the core beacon chain spec, but will become significant when withdrawals are enabled in a future upgrade. The withdrawal credentials data is not consensus-critical, and future withdrawal credential types can be added without a hard fork. There are [suggestions](https://ethresear.ch/t/withdrawal-credential-rotation-from-bls-to-eth1/8722?u=benjaminion) as to how existing credentials might be changed between methods which would be consensus critical.

The presence of these prefixes in the spec indicates a "social consensus" among the dev teams and protocol designers that we will in future support these methods for making withdrawals.

See the [Withdrawals](/part4/the_merge/withdrawals) section for discussion on what the mechanism might look like.

##### `BLS_WITHDRAWAL_PREFIX`

The beacon chain launched with only BLS-style withdrawal credentials available, so all early stakers used this. The `0x00` prefix on the credential distinguishes this type from the others: it replaces the first byte of the hash of the BLS public key that corresponds to the BLS private key of the staker.

With this type of credential, in addition to a BLS signing key, stakers need a second BLS key that they will later use for withdrawals. The credential registered in the deposit data is the 32 byte SHA256 hash of the validators withdrawal public key, with the first byte set to `BLS_WITHDRAWAL_PREFIX`.

##### `ETH1_ADDRESS_WITHDRAWAL_PREFIX`

Eth1 withdrawal credentials are much simpler, and were [adopted](https://github.com/ethereum/consensus-specs/pull/2149) once it became clear that Ethereum&nbsp;2.0 would not be using a BLS-based address scheme for accounts at any time soon. These provide a commitment that stakers will be able to withdraw their beacon chain funds to a normal Ethereum account (possibly a contract account) at a future date.

#### Domain types

<a id="domain_beacon_proposer"></a>
<a id="domain_beacon_attester"></a>
<a id="domain_randao"></a>
<a id="domain_deposit"></a>
<a id="domain_voluntary_exit"></a>
<a id="domain_selection_proof"></a>
<a id="domain_aggregate_and_proof"></a>
<a id="domain_sync_committee"></a>
<a id="domain_sync_committee_selection_proof"></a>
<a id="domain_contribution_and_proof"></a>

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

These domain types are used in three ways: for seeds, for signatures, and for selecting aggregators.

##### As seeds

When random numbers are required in-protocol, one way they are generated is by hashing the RANDAO mix with other quantities, one of them being a domain type (see [`get_seed()`](/part3/helper/accessors#def_get_seed)). The [original motivation](https://github.com/ethereum/consensus-specs/pull/1415) was to avoid occasional collisions between Phase&nbsp;0 committees and Phase&nbsp;1 persistent committees, back when they were a thing. So, when computing the beacon block proposer, `DOMAIN_BEACON_PROPOSER` is hashed into the seed, when computing attestation committees, `DOMAIN_BEACON_ATTESTER` is hashed in, and when computing sync committees, `DOMAIN_SYNC_COMMITTEE` is hashed in.

##### As signatures

In addition, as a cryptographic nicety, each of the protocol's signature types is augmented with the appropriate domain before being signed:

 - Signed block proposals incorporate `DOMAIN_BEACON_PROPOSER`
 - Signed attestations incorporate `DOMAIN_BEACON_ATTESTER`
 - RANDAO reveals are BLS signatures, and use `DOMAIN_RANDAO`
 - Deposit data messages incorporate `DOMAIN_DEPOSIT`
 - Validator voluntary exit messages incorporate `DOMAIN_VOLUNTARY_EXIT`
 - Sync committee signatures incorporate `DOMAIN_SYNC_COMMITTEE`

In each case, except for deposits, the fork version is [also incorporated](/part3/helper/accessors#get_domain) before signing. Deposits are valid across forks, but other messages are not. Note that this would allow validators to participate, if they wish, in two independent forks of the beacon chain without fear of being slashed.

##### Aggregator selection

The remaining four types, suffixed `_PROOF` are not used directly in the beacon chain specification. They [were introduced](https://github.com/ethereum/consensus-specs/pull/1615) to implement [attestation subnet validations](https://github.com/ethereum/consensus-specs/issues/1595) for denial of service resistance. The technique was [extended](https://github.com/ethereum/consensus-specs/pull/2266) to sync committees with the Altair upgrade.

Briefly, at each slot, validators are selected to aggregate attestations from their committees. The selection is done based on the validator's signature over the slot number, mixing in `DOMAIN_SELECTION_PROOF`. The validator then signs the whole aggregated attestation, including the previous signature as proof that it was selected to be a validator, using `DOMAIN_AGGREGATE_AND_PROOF`. And similarly for sync committees. In this way, everything is verifiable and attributable, making it hard to flood the network with fake messages.

These four are not part of the consensus-critical state-transition, but are nonetheless important to the healthy functioning of the chain.

This mechanism is described in the [Phase&nbsp;0 honest validator spec](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/validator.md#aggregation-selection) for attestation aggregation, and in the [Altair honest validator spec](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/altair/validator.md#aggregation-selection) for sync committee aggregation.

#### Crypto

<a id="g2_point_at_infinity"></a>

| Name | Value |
| - | - |
| `G2_POINT_AT_INFINITY` | `BLSSignature(b'\xc0' + b'\x00' * 95)` |

This is the compressed [serialisation](https://github.com/zcash/librustzcash/blob/6e0364cd42a2b3d2b958a54771ef51a8db79dd29/pairing/src/bls12_381/README.md#serialization) of the "point at infinity", the identity point, of the G2 group of the BLS12-381 curve that we are using for signatures. Note that it is in big-endian format (unlike all other constants in the spec).

It was introduced as a convenience when verifying aggregate signatures that contain no public keys in [`eth_fast_aggregate_verify()`](/part3/helper/crypto#def_eth_fast_aggregate_verify). The underlying [FastAggregateVerify](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bls-signature-04#section-3.3.4) function from the BLS signature standard would reject these.

`G2_POINT_AT_INFINITY` is described in the separate [BLS Extensions](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/altair/bls.md) document, but included here for convenience.

### Preset <!-- /part3/config/preset -->

The "presets" are consistent collections of configuration variables that are bundled together. The [specs repo](https://github.com/ethereum/consensus-specs/tree/v1.1.1/configs) currently defines two sets of presets, [mainnet](https://github.com/ethereum/consensus-specs/blob/v1.1.1/configs/mainnet.yaml) and [minimal](https://github.com/ethereum/consensus-specs/blob/v1.1.1/configs/minimal.yaml). The mainnet configuration is running in production on the beacon chain; minimal is often used for testing. Other configurations are possible. For example, Teku uses a [swift](https://github.com/ConsenSys/teku/blob/d368fd44ec43eb93923dd4c150a6649d82798e43/util/src/main/resources/tech/pegasys/teku/util/config/configs/swift.yaml) configuration for acceptance testing.

All the values discussed below are from the mainnet configuration.

You'll notice that most of these values are powers of two. There's no huge significance to this. Computer scientists think it's neat, and it ensures that things cleanly divide other things in general. There is a [view](https://github.com/ethereum/consensus-specs/issues/1633#issuecomment-592949297) that this practice helps to minimise [bike-shedding](https://en.wikipedia.org/wiki/Law_of_triviality) (endless arguments over trivial matters).

Some of the configuration parameters below are quite technical and perhaps obscure. I'll take the opportunity here to introduce some concepts, and give more detailed explanations when they appear in later chapters.

#### Misc

| Name | Value |
| - | - |
| `MAX_COMMITTEES_PER_SLOT` | `uint64(2**6)` (= 64) |
| `TARGET_COMMITTEE_SIZE` | `uint64(2**7)` (= 128) |
| `MAX_VALIDATORS_PER_COMMITTEE` | `uint64(2**11)` (= 2,048) |
| `SHUFFLE_ROUND_COUNT` | `uint64(90)` |

##### `MAX_COMMITTEES_PER_SLOT`

Validators are organised into committees to do their work. At any one time, each validator is a member of exactly one beacon chain committee, and is called on to make an attestation exactly once per epoch. An attestation is a vote for, or a statement of, the validator's view of the chain at that point in time.

On the beacon chain, up to 64 committees are active in a slot and effectively act as a single committee as far as the fork-choice rule is concerned. They all vote on the proposed block for the slot, and their votes/attestations are pooled. In a similar way, all committees active during an epoch (that is, the whole active validator set) act effectively as a single committee as far as justification and finalisation are concerned.

The number 64 is intended to map to [one committee per shard](https://github.com/ethereum/consensus-specs/pull/1428) once data shards are deployed, since these committees will also vote on shard crosslinks.

Note that sync committees are a different thing: there is only one sync committee active at any time.

##### `TARGET_COMMITTEE_SIZE`

To achieve a desirable level of security, committees need to be larger than a certain size. This makes it infeasible for an attacker to randomly end up with a super-majority in a committee even if they control a significant number of validators. The target here is a kind of lower-bound on committee size. If there are not enough validators to make all committees have at least 128 members, then, as a first measure, the number of committees per slot is reduced to maintain this minimum. Only if there are fewer than `SLOTS_PER_EPOCH` * `TARGET_COMMITTEE_SIZE` = 4096 validators in total will the committee size be reduced below `TARGET_COMMITTEE_SIZE`. With so few validators, the system would be insecure in any case.

Given a proportion of the validators controlled by an attacker, what is the probability that the attacker ends up controlling a two-thirds majority in a randomly selected committee drawn from the full set of validators? Vitalik discusses this in [a presentation](http://web.archive.org/web/20190504131341/https://vitalik.ca/files/Ithaca201807_Sharding.pdf), and proposes 111 as the minimum committee size needed to maintain a $2^{-40}$ chance (one-in-a-trillion) of an attacker with one third of the validators gaining by chance a two-thirds majority in any one committee. The value 128 was chosen as being the next higher power of two.

If an attacker has a proportion $p$ of the validator pool, then the probability of selecting a committee of $n$ validators that has $k$ or more validators belonging to the attacker is,

$$
\sum_{i=k}^{n} p^i(1-p)^{n-i}{n\choose i}
$$

Vitalik provides some handy Python code to evaluate this expression.

    def fac(n):
        return n * fac(n-1) if n else 1
    def choose(n, k):
        return fac(n) / fac(k) / fac(n-k)
    def prob(n, k, p):
        return p**k * (1-p)**(n-k) * choose(n,k)
    def probge(n, k, p):
        return sum([prob(n,i,p) for i in range(k,n+1)])

Using this, I find that the minimum committee size to avoid a two-thirds majority with a $2^{-40}$ probability is actually 109 rather than 111.

    >>> probge(108, 72, 1.0 / 3) < 2**-40
    False
    >>> probge(109, 73, 1.0 / 3) < 2**-40
    True

In any case, a committee size of 128 is very safe against an attacker with 1/3 of the stake:

    >>> probge(128, 86, 1.0 / 3)
    5.551560731791749e-15

Another concern is that the randomness that we are using (a RANDAO) is not unbiasable. If an attacker happens to control a number of block proposers at the end of an epoch, they can decide to reveal or not to reveal their blocks, gaining one bit of influence per validator on the next random number. This might allow an attacker to gain more control in the next round and so on. In this way, an attacker can gain some influence over committee selection. Having a good lower-bound on committee size helps to defend against this. Alternatively, we could in future use an unbiasable source of randomness such as a [verifiable delay function](/part4/research/vdf).

Note that, currently, a single committee being compromised by an attacker would have no impact since many committees act at each slot to progress consensus. However, these committees will at some future stage become individual shard committees, at which time protecting them from takeover is vital.

##### `MAX_VALIDATORS_PER_COMMITTEE`

This is just used for sizing some data structures, and is not particularly interesting. Reaching this limit would imply over 4 million active validators, staked with a total of 128 million Ether, which exceeds the [total supply](https://etherscan.io/stat/supply) today.

##### `SHUFFLE_ROUND_COUNT`

The beacon chain implements a [rather interesting](/part2/building_blocks/shuffling) way of shuffling validators in order to select committees, called the "swap-or-not shuffle". This shuffle proceeds in rounds, and the degree of shuffling is determined by the number of rounds, `SHUFFLE_ROUND_COUNT`. The time taken to shuffle is linear in the number of rounds, so for light-weight, non-mainnet configurations, the number of rounds can be reduced.

The value 90 was introduced in Vitalik's [initial commit](https://github.com/ethereum/consensus-specs/pull/576/commits/c58410e6ce9904c6619cd925b64fbd04c00b9a89) without explanation. The [original paper](https://link.springer.com/content/pdf/10.1007%2F978-3-642-32009-5_1.pdf) describing the shuffling technique seems to suggest that a cryptographically safe number of rounds is $6\log{N}$. With 90 rounds, then, we should be good for shuffling 3.3 million validators, which is close to the maximum number possible (given the Ether supply).

#### Hysteresis parameters

| Name | Value |
| - | - |
| `HYSTERESIS_QUOTIENT` | `uint64(4)` |
| `HYSTERESIS_DOWNWARD_MULTIPLIER` | `uint64(1)` |
| `HYSTERESIS_UPWARD_MULTIPLIER` | `uint64(5)` |

The parameters prefixed `HYSTERESIS_` control the way that effective balance is changed (see [`EFFECTIVE_BALANCE_INCREMENT`](#effective_balance_increment)). As described there, the effective balance of a validator follows changes to the actual balance in a step-wise way, with [hysteresis](https://en.wikipedia.org/wiki/Hysteresis) applied. This ensures that the effective balance does not change often.

The original hysteresis design had an [unintended effect](https://github.com/ethereum/consensus-specs/issues/1609) that might have encouraged stakers to over-deposit or make multiple deposits in order to maintain a balance above 32 Ether at all times. If a validator's balance were to drop below 32 Ether soon after depositing, however briefly, the effective balance would have immediately dropped to 31 Ether and taken a long time to recover. This would have resulted in a 3% reduction in rewards for a period.

This problem was addressed by [making the hysteresis configurable](https://github.com/ethereum/consensus-specs/pull/1627) via these parameters. Specifically, these settings mean:
 1. if a validators' balance falls 0.25&nbsp;Ether below its effective balance, then its effective balance is reduced by 1&nbsp;Ether
 2. if a validator's balance rises 1.25&nbsp;Ether above its effective balance, then its effective balance is increased by 1&nbsp;Ether

These calculations are done in [`process_effective_balance_updates()`](/part3/transition/epoch#def_process_effective_balance_updates) during end of epoch processing.

#### Gwei values

| Name | Value |
| - | - |
| `MIN_DEPOSIT_AMOUNT` | `Gwei(2**0 * 10**9)` (= 1,000,000,000) |
| `MAX_EFFECTIVE_BALANCE` | `Gwei(2**5 * 10**9)` (= 32,000,000,000) |
| `EFFECTIVE_BALANCE_INCREMENT` | `Gwei(2**0 * 10**9)` (= 1,000,000,000) |

##### `MIN_DEPOSIT_AMOUNT`

`MIN_DEPOSIT_AMOUNT` is not actually used anywhere within the beacon chain specification document. Rather, it is enforced in the [deposit contract](https://github.com/ethereum/consensus-specs/blob/v1.1.1/solidity_deposit_contract/deposit_contract.sol#L113) that [was deployed](https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa#code) to the Ethereum 1 chain. Any amount less than this value sent to the deposit contract is reverted.

Allowing stakers to make deposits smaller than a full stake is useful for topping-up a validator's balance if its effective balance has dropped below 32&nbsp;Ether, so as to maintain full productivity. However, this actually led to a [vulnerability](https://medium.com/immunefi/rocketpool-lido-frontrunning-bug-fix-postmortem-e701f26d7971) for some staking pools, involving the front-running of deposits. In some circumstances, a front-running attacker could change a genuine depositor's withdrawal credentials to their own.

##### `MAX_EFFECTIVE_BALANCE`

There is a concept of "effective balance" for validators: whatever a validator's total balance, its voting power is weighted by its effective balance, even if its actual balance is higher. Effective balance is also the amount on which all rewards, penalties, and slashings are calculated - it's used a lot in the protocol

The `MAX_EFFECTIVE_BALANCE` is the highest effective balance that a validator can have: 32 Ether. Any balance above this is ignored. Note that this means that staking rewards don't compound in the usual case (unless a validator's effective balance somehow falls below 32&nbsp;Ether, in which case rewards kind of compound).

There is a discussion in the [Design Rationale](https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Why-32-ETH-validator-sizes) of why 32 Ether was chosen as the staking amount. In short, we want enough validators to keep the chain both alive and secure under attack, but not so many that the message overhead on the network becomes too high.

##### `EFFECTIVE_BALANCE_INCREMENT`

Throughout the protocol, a quantity called "effective balance" is used instead of the validators' actual balances. Effective balance tracks the actual balance, with two differences: (1) effective balance is capped at `MAX_EFFECTIVE_BALANCE` no matter how high the actual balance of a validator is, and (2) effective balance is much more granular - it changes only in steps of `EFFECTIVE_BALANCE_INCREMENT` rather than [`Gwei`](/part3/config/types#gwei).

This discretisation of effective balance is intended to reduce the amount of hashing required when making state updates. The goal is to avoid having to re-calculate the hash tree root of validator records too often. Validators' actual balances, which change frequently, are stored as a contiguous list in BeaconState, outside of validators' records. Effective balances are stored inside validators' individual records, which are more costly to update (more hashing required). So we try to update effective balances relatively infrequently.

Effective balance is changed according to a process with hysteresis to avoid situations where it might change frequently. See [`HYSTERESIS_QUOTIENT`](#hysteresis-parameters).

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

A design goal of Ethereum&nbsp;2.0 is not to heavily disadvantage validators that are running on lower-spec systems, or, conversely, to reduce any advantage gained by running on high-spec systems.

One aspect of performance is network bandwidth. When a validator becomes the block proposer, it needs to gather attestations from the rest of its committee. On a low-bandwidth link, this takes longer, and could result in the proposer not being able to include as many past attestations as other better-connected validators might, thus receiving lower rewards.

`MIN_ATTESTATION_INCLUSION_DELAY` was an attempt to "level the playing field" by setting a minimum number of slots before an attestation can be included in a beacon block. It was [originally set at 4](https://github.com/ethereum/consensus-specs/pull/143), with a 6 second slot time, allowing 24 seconds for attestations to propagate around the network.

It was [later set to one](https://github.com/ethereum/consensus-specs/pull/1157) &ndash; attestations are included as early as possible &ndash; and, now that we plan to crosslink shards every slot, this is the only value that makes sense. So `MIN_ATTESTATION_INCLUSION_DELAY` exists today as a kind of relic of the earlier design.

The current slot time of 12 seconds is assumed to allow sufficient time for attestations to propagate and be aggregated sufficiently within one slot.

##### `SLOTS_PER_EPOCH`

We currently have 12 second slots and 32 slot epochs. In earlier designs slots were six seconds and there were 64 slots per epoch. So the time between epoch boundaries was unchanged when slots were lengthened.

The choice of 32 slots per epoch is a trade-off between time to finality (we need two epochs to finalise, so we prefer to keep them as short as we can) and being as certain as possible that at least one honest proposer per epoch will make a block to update the RANDAO (for which we prefer longer epochs).

In addition, [epoch boundaries](/part3/transition/epoch#epoch-processing) are where the heaviest part of the beacon chain state-transition calculation occurs, so that's another reason for not having them too close together.

Since every validator attests one every epoch, there is an interplay between the number of slots per epoch, the number of committees per slot, committee sizes, and the total number of validators.

##### `MIN_SEED_LOOKAHEAD`

A random seed is used to select all the committees and proposers for an epoch. During each epoch, the beacon chain accumulates randomness from proposers via the RANDAO and stores it. The seed for the current epoch is based on the RANDAO output from the epoch `MIN_SEED_LOOKUP + 1` ago. With `MIN_SEED_LOOKAHEAD` set to one, the effect is that we can know the seed for the current epoch and the next epoch, but not beyond, since the next-but-one epoch depends on randomness from the current epoch that hasn't been accumulated yet.

This mechanism is designed to allow sufficient time for committee members to find each other on the peer-to-peer network, and in future to sync up any shard data they need. But preventing committee makeup being known too far ahead limits the opportunity for coordinated collusion between validators.

##### `MAX_SEED_LOOKAHEAD`

The above notwithstanding, if an attacker has a large proportion of the stake, or is, for example, able to DoS block proposers for a while, then it might be possible for the the attacker to predict the output of the RANDAO further ahead than `MIN_SEED_LOOKAHEAD` would normally allow. In which case the attacker might be able to manipulate the make up of committees advantageously by performing judicious exits and activations of their validators.

To prevent this, we assume a maximum feasible lookahead that an attacker might achieve (`MAX_SEED_LOOKAHEAD`) and delay all activations and exits by this amount, which allows new randomness to come in via block proposals from honest validators. With `MAX_SEED_LOOKAHEAD` set to 4, if only 10% of validators are online and honest, then the chance that an attacker can succeed in forecasting the seed beyond (`MAX_SEED_LOOK_AHEAD - MIN_SEED_LOOKAHEAD`) = 3 epochs is $0.9^{3\times 32}$, which is about 1 in 25,000.

##### `MIN_EPOCHS_TO_INACTIVITY_PENALTY`

The inactivity penalty is discussed [below](#inactivity_penalty_quotient_altair). This parameter sets the length of time until it kicks in. If the last finalised epoch is longer ago than `MIN_EPOCHS_TO_INACTIVITY_PENALTY`, then the beacon chain starts operating in "leak" mode. In this mode, participating validators no longer get rewarded, and validators that are not participating get penalised.

##### `EPOCHS_PER_ETH1_VOTING_PERIOD`

In order to safely onboard new validators, the beacon chain needs to take a view on what the Eth1 chain looks like. This is done by collecting votes from beacon block proposers - they are expected to consult an available Eth1 client in order to construct their vote.

`EPOCHS_PER_ETH1_VOTING_PERIOD * SLOTS_PER_EPOCH` is the total number of votes for Eth1 blocks that are collected. As soon as half of this number of votes are for the same Eth1 block, that block is adopted by the beacon chain and deposit processing can continue.

Rules for how validators select the right block to vote for are set out in the [validator guide](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/validator.md#get_eth1_data). [`ETH1_FOLLOW_DISTANCE`](/part3/config/configuration#eth1_follow_distance) is the (approximate) minimum depth of block that can be considered.

This parameter [was increased](https://github.com/ethereum/consensus-specs/pull/2093/files) from 32 to 64 epochs for the beacon chain mainnet. This increase is intended to allow devs more time to respond if there is any trouble on the Eth1 chain, in addition to the eight hours grace provided by `ETH1_FOLLOW_DISTANCE`.

For a detailed analysis of these parameters, see this [article](https://ethresear.ch/t/on-the-way-to-eth1-finality/7041?u=benjaminion).

##### `SLOTS_PER_HISTORICAL_ROOT`

There have been several redesigns of the way the beacon chain stores its past history. The current design is a [double batched accumulator](https://ethresear.ch/t/double-batched-merkle-log-accumulator/571). The block root and state root for every slot are stored in the state for `SLOTS_PER_HISTORICAL_ROOT` slots. When that list is full, both lists are Merkleised into a single Merkle root, which is added to the ever-growing `state.historical_roots` list.

#### State list lengths

The following parameters set the sizes of some lists in the beacon chain state. Some lists have natural sizes, others such as the validator registry need an explicit maximum size [to guide SSZ serialisation](https://github.com/ethereum/consensus-specs/pull/1180).

| Name | Value | Unit | Duration |
| - | - | :-: | :-: |
| `EPOCHS_PER_HISTORICAL_VECTOR` | `uint64(2**16)` (= 65,536) | epochs | ~0.8 years |
| `EPOCHS_PER_SLASHINGS_VECTOR` | `uint64(2**13)` (= 8,192) | epochs | ~36 days |
| `HISTORICAL_ROOTS_LIMIT` | `uint64(2**24)` (= 16,777,216) | historical roots | ~52,262 years |
| `VALIDATOR_REGISTRY_LIMIT` | `uint64(2**40)` (= 1,099,511,627,776) | validators |

##### `EPOCHS_PER_HISTORICAL_VECTOR`

This is the number of epochs of previous RANDAO mixes that are stored (one per epoch). Having access to past randao mixes allows historical shufflings to be recalculated. Since [Validator](/part3/containers/dependencies#validator) records keep track of the activation and exit epochs of all past validators, we can thus reconstitute past committees as far back as we have the RANDAO values. This information can be used for slashing long-past attestations, for example. It is not clear how the value of this parameter [was decided](https://github.com/ethereum/consensus-specs/pull/1196).

##### `EPOCHS_PER_SLASHINGS_VECTOR`

In the epoch in which a misbehaving validator is slashed, its effective balance is added to an accumulator in the state. In this way, the `state.slashings` list tracks the total effective balance of all validators slashed during the last `EPOCHS_PER_SLASHINGS_VECTOR` epochs.

At a time `EPOCHS_PER_SLASHINGS_VECTOR // 2` after being slashed, a further penalty is applied to the slashed validator, based on the total amount of value slashed during the 4096 epochs before and the 4096 epochs after it was originally slashed.

The idea of this is to disproportionately punish coordinated attacks, in which many validators break the slashing conditions around the same time, while only lightly penalising validators that get slashed by making a mistake. Early designs for Eth2 would always slash a validator's entire deposit.

See also [`PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR`](#proportional_slashing_multiplier_altair).

##### `HISTORICAL_ROOTS_LIMIT`

Every [`SLOTS_PER_HISTORICAL_ROOT`](#slots_per_historical_root) slots, the list of block roots and the list of state roots in the beacon state are merkleised and added to `state.historical_roots` list. Although `state.historical_roots` is in principle unbounded, all SSZ lists must have maximum sizes specified. The size
`HISTORICAL_ROOTS_LIMIT` will be fine for the next few millennia, after which it will be somebody else's problem. The list grows at less than 10 KB per year.

Storing past roots like this allows Merkle proofs to be constructed about anything in the beacon chain's history if required.

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

Note that there are similar constants with different values here, one version with an `_ALTAIR` suffix. This is [explained](https://github.com/ethereum/consensus-specs/tree/v1.1.1/configs#forking) in the specs repo as follows:

> Variables are not replaced but extended with forks. This is to support syncing from one state to another over a fork boundary, without hot-swapping a config. Instead, for forks that introduce changes in a variable, the variable name is suffixed with the fork name.

So, the unsuffixed versions are the Phase&nbsp;0 values, and the `_ALTAIR` suffixed versions are the values that apply to the current Altair fork.

##### `BASE_REWARD_FACTOR`

This is the big knob to turn to change the issuance rate of Eth2. Almost all validator rewards are calculated in terms of a "base reward per increment" which is [formulated as](/part3/transition/epoch#def_get_base_reward_per_increment),

    EFFECTIVE_BALANCE_INCREMENT * BASE_REWARD_FACTOR // integer_squareroot(get_total_active_balance(state))

Thus, the total validator rewards per epoch (the Eth2 issuance rate) could be tuned by increasing or decreasing `BASE_REWARD_FACTOR`.

The exception is proposer rewards for including slashing reports in blocks. However, these are more than offset by the amount of stake burnt, so do not increase the overall issuance rate.

##### `WHISTLEBLOWER_REWARD_QUOTIENT`

[TODO: link to some explanation of WB process]::

One reward that is not tied to the base reward is the whistleblower reward. This is an amount awarded to the proposer of a block containing one or more proofs that a proposer or attester has violated a slashing condition. The whistleblower reward is set at $\frac{1}{512}$ of the effective balance of the slashed validator.

The whistleblower reward comes from new issuance of Ether on the beacon chain, but is more than offset by the Ether burned due to slashing penalties.

##### `PROPOSER_REWARD_QUOTIENT`

`PROPOSER_REWARD_QUOTIENT` was removed in the Altair upgrade in favour of [`PROPOSER_WEIGHT`](/part3/config/constants#incentivization-weights). It was used to apportion rewards between attesters and proposers when including attestations in blocks.

##### `INACTIVITY_PENALTY_QUOTIENT_ALTAIR`

This value supersedes `INACTIVITY_PENALTY_QUOTIENT`.

If the beacon chain hasn't finalised a checkpoint for longer than [`MIN_EPOCHS_TO_INACTIVITY_PENALTY`](#min_epochs_to_inactivity_penalty) epochs, then it enters "leak" mode. In this mode, any validator that does not vote (or votes for an incorrect target) is penalised an amount each epoch of `(effective_balance * inactivity_score) // (INACTIVITY_SCORE_BIAS * INACTIVITY_PENALTY_QUOTIENT_ALTAIR)`.

In Altair, `inactivity_score` is a per-validator quantity, whereas previously validators were penalised by a globally calculated amount when they missed a duty during a leak. See [inactivity penalties](/part3/config/configuration#inactivity-penalties) for more on the rationale for this and how this score is calculated per validator.

During a leak, no validators receive rewards, and they continue to accrue the normal penalties when they fail to fulfil duties. In addition, for epochs in which validators do not make a correct, timely target vote, they receive a leak penalty.

To examine the effect of the leak on a single validator's balance, assume that during a period of inactivity leak (non-finalisation) the validator is completely offline. At each epoch, the offline validator will be penalised an amount $nB / \alpha$, where $n$ is the number of epochs since the leak started, $B$ is the validator's effective balance, and $\alpha$ is the prevailing `INACTIVITY_PENALTY_QUOTIENT`.

The effective balance $B$ will remain constant for a while, by design, during which time the total amount of the penalty after $n$ epochs would be $n(n+1)B / 2\alpha$: the famous "quadratic leak". If $B$ were continuously variable, the penalty would satisfy $\frac{dB}{dt}=-\frac{Bt}{\alpha}$, which can be solved to give $B(t)=B_0e^{-t^2/2\alpha}$. The actual behaviour is somewhere between these two since the effective balance decreases in a step-wise fashion.

In the continuous case, the `INACTIVITY_PENALTY_QUOTIENT`, $\alpha$, is the square of the time it takes to reduce the balance of a non-participating validator to $1 / \sqrt{e}$, or around 60.7% of its initial value. With the value of `INACTIVITY_PENALTY_QUOTIENT` at `3 * 2**24`, this equates to around seven thousand epochs, or 31.5 days.

The idea for the inactivity leak (aka the quadratic leak) was proposed in the original [Casper FFG paper](https://arxiv.org/abs/1710.09437). The problem it addresses is that, if a large fraction of the validator set were to go offline at the same time, it would not be possible to continue finalising checkpoints, since a majority vote from validators representing 2/3 of the total stake is required for finalisation.

In order to recover, the inactivity leak gradually reduces the stakes of validators who are not making attestations until, eventually, the participating validators control 2/3 of the remaining stake. They can then begin to finalise checkpoints once again.

This inactivity penalty mechanism is designed to protect the chain long-term in the face of catastrophic events (sometimes referred to as the ability to survive World War III). The result might be that the beacon chain could permanently split into two independent chains either side of a network partition, and this is assumed to be a reasonable outcome for any problem that can't be fixed in a few weeks. In this sense, the beacon chain formally prioritises availability over consistency. (You [can't have both](https://en.wikipedia.org/wiki/CAP_theorem).)

The value of `INACTIVITY_PENALTY_QUOTIENT` [was increased](https://github.com/ethereum/consensus-specs/commit/157f7e8ef4be3675543980e68581eb4b73284763) by a factor of four from `2**24` to `2**26` for the beacon chain launch, with the intention of penalising validators less severely in case of non-finalisation due to implementation problems in the early days. As it happens, there were no instances of non-finalisation during the eleven months of Phase&nbsp;0 of the beacon chain.

The value was decreased by one quarter in the Altair upgrade from `2**26` to `3 * 2**24` as a step towards eventually setting it to its final value. Decreasing the inactivity penalty quotient speeds up recovery of finalisation in the event of an inactivity leak.

##### `MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR`

When a validator is first convicted of a slashable offence, an initial penalty is applied. This is calculated as, `validator.effective_balance // MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR`.

Thus, the initial slashing penalty is between 0.25 Ether and 0.5 Ether depending on the validator's effective balance (which is between 16 and 32 Ether; note that effective balance is denominated in Gwei).

A further slashing penalty is applied later based on the total amount of balance slashed during a period of [`EPOCHS_PER_SLASHINGS_VECTOR`](#epochs_per_slashings_vector).

The value of `MIN_SLASHING_PENALTY_QUOTIENT` [was increased](https://github.com/ethereum/consensus-specs/commit/157f7e8ef4be3675543980e68581eb4b73284763) by a factor of four from `2**5` to `2**7` for the beacon chain launch, anticipating that unfamiliarity with the rules of Ethereum&nbsp;2.0 staking was likely to result in some unwary users getting slashed. In the event, a total of 157 validators were slashed during Phase&nbsp;0, all as a result of user error or misconfiguration as far as can be determined.

The value was halved in the Altair upgrade from `2**7` to `2**6` as a step towards eventually setting it to its final value of `2**5`.

##### `PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR`

When a validator has been slashed, a further penalty is later applied to the validator based on how many other validators were slashed during a window of size [`EPOCHS_PER_SLASHINGS_VECTOR`](#epochs_per_slashings_vector) epochs centred on that slashing event (approximately 18 days before and after).

The proportion of the validator's remaining effective balance that will be subtracted [is calculated](/part3/transition/epoch#slashings) as, `PROPORTIONAL_SLASHING_MULTIPLIER` multiplied by the sum of the effective balances of the slashed validators in the window, divided by the total effective balance of all validators. The idea of this mechanism is to punish accidents lightly (in which only a small number of validators were slashed) and attacks heavily (where many validators coordinated to double vote).

To finalise conflicting checkpoints, at least a third of the balance must have voted for both. That's why the "natural" setting of `PROPORTIONAL_SLASHING_MULTIPLIER` is three: in the event of an attack that finalises conflicting checkpoints, the attackers lose their entire stake. This provides "the maximal minimum accountable safety margin".

However, for the initial stage of the beacon chain, Phase&nbsp;0, `PROPORTIONAL_SLASHING_MULTIPLIER` was set to one, and increased to two at the Altair upgrade. These lower values provide some insurance against client bugs that might cause mass slashings in the early days. It will eventually be increased to its final value of three in a later upgrade.

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

[TODO: calculate the sizes of things - see the appendix]::

Some comments on the chosen values:
 - I have suggested [elsewhere](https://github.com/ethereum/consensus-specs/issues/2152) reducing `MAX_DEPOSITS` from sixteen to one to ensure that more validators must process deposits, which encourages them to run Eth1 clients.
 - At first sight, there looks to be a disparity between the number of proposer slashings and the number of attester slashings that may be included in a block. But note that an attester slashing (a) can be much larger than a proposer slashing, and (b) can result in many more validators getting slashed than a proposer slashing.
 - `MAX_ATTESTATIONS` is double the value of [`MAX_COMMITTEES_PER_SLOT`](#max_committees_per_slot). This allows there to be an empty slot (with no block proposal), yet still include all the attestations for the empty slot in the next slot. Since, ideally, each committee produces a single aggregate attestation, a block can hold two slots' worth of aggregate attestations.

#### Sync committee

<a id="sync_committee_size"></a>
<a id="epochs_per_sync_committee_period"></a>

| Name | Value | Unit | Duration |
| - | - | - | - |
| `SYNC_COMMITTEE_SIZE` | `uint64(2**9)` (= 512) | Validators | |
| `EPOCHS_PER_SYNC_COMMITTEE_PERIOD` | `uint64(2**8)` (= 256) | epochs | ~27 hours |

[TODO: Link to sync committees section]::

Sync committees were introduced by the Altair upgrade to allow light clients to quickly and trustlessly determine the head of the beacon chain.

Why did we need a new committee type? Couldn't this be built on top of existing committees, say committees 0 to 3 at a slot? After all, voting for the head of the chain is already one of their duties. The reason is that it is important for reducing the load on light clients that sync committees do not change very often. Standard committees change every slot; we need something much longer lived here.

Only a single sync committee is active at any one time, and contains a randomly selected subset of size `SYNC_COMMITTEE_SIZE` of the total validator set.

A sync committee does its duties (and receives rewards for doing so) for only `EPOCHS_PER_SYNC_COMMITTEE_PERIOD` epochs until the next committee takes over.

With 262,144 validators ($2^{18}$), the expected time between being selected for sync committee duty is over 19 months. The probability of being in the current sync committee would be 1/512 per validator.

`SYNC_COMMITTEE_SIZE` is a [trade-off](https://github.com/ethereum/consensus-specs/pull/2130) between [security](https://notes.ethereum.org/iMxxlEkuQMiPkEL1S6SfbQ) (ensuring that enough honest validators are always present) and efficiency for light clients (ensuring that they do not have to handle too much computation). The value 512 is conservative in terms of safety. It would be catastrophic for trustless bridges to other protocols, for example, if a sync committee voted in an invalid block.

`EPOCHS_PER_SYNC_COMMITTEE_PERIOD` is around a day, and again is a trade-off between security (short enough that it's hard for an attacker to find and corrupt committee members) and efficiency (reducing the data load on light clients).

### Configuration <!-- /part3/config/configuration -->

#### Genesis Settings

With Altair, beacon chain genesis is long behind us. Nevertheless, the ability to spin-up testnets is useful in all sorts of scenarios, so the Altair spec retains genesis functionality, now called [initialisation](/part3/initialise#initialise-state).

The following parameters refer to the actual mainnet beacon chain genesis and I'll explain them in that context. When starting up new testnets, these will of course be changed. For example, see the configuration file for the [Prater testnet](https://github.com/eth2-clients/eth2-networks/blob/274e71c7af8fb26f65b47016ffa6169079315e2c/shared/prater/config.yaml).

| Name | Value |
| - | - |
| `MIN_GENESIS_ACTIVE_VALIDATOR_COUNT` | `uint64(2**14)` (= 16,384) |
| `MIN_GENESIS_TIME` | `uint64(1606824000)` (Dec 1, 2020, 12pm UTC) |
| `GENESIS_FORK_VERSION` | `Version('0x00000000')` |
| `GENESIS_DELAY` | `uint64(604800)` (7 days) |

##### `MIN_GENESIS_ACTIVE_VALIDATOR_COUNT`

`MIN_GENESIS_ACTIVE_VALIDATOR_COUNT` is the minimum number of full validator stakes that must have been deposited before the beacon chain can start producing blocks. The number is chosen to ensure a degree of security. It allows for four 128 member committees per slot, rather than the 64 committees per slot eventually desired to support fully operational data shards. Fewer validators means higher rewards per validator, so it is designed to attract early participants to get things bootstrapped.

`MIN_GENESIS_ACTIVE_VALIDATOR_COUNT` used to be much higher (65,536 = 2 million Ether staked), but was reduced when `MIN_GENESIS_TIME`, below, was added.

In the actual event of beacon chain genesis, there were 21,063 participating validators, comfortably exceeding the minimum necessary count.

##### `MIN_GENESIS_TIME`

`MIN_GENESIS_TIME` is the earliest date that the beacon chain can start.

Having a `MIN_GENESIS_TIME` allows us to start the chain with fewer validators than was previously thought necessary. The previous plan was to start the chain as soon as there were `MIN_GENESIS_ACTIVE_VALIDATOR_COUNT` validators staked. But there were concerns that with a lowish initial validator count, a single entity could form the majority of them and then act to prevent other validators from entering (a "[gatekeeper attack](https://github.com/ethereum/consensus-specs/pull/1467)"). A minimum genesis time allows time for all those who wish to make deposits to do so before they could be excluded by a gatekeeper attack.

The beacon chain actually started at 12:00:23 UTC on the 1st of December 2020. The extra 23 seconds comes from the timestamp of the first Eth1 block to meet the [genesis criteria](/part3/initialise#genesis-state), [block 11320899](https://etherscan.io/block/11320899). I like to think of this as a little remnant of proof of work forever embedded in the beacon chain's history.

##### `GENESIS_FORK_VERSION`

Unlike Ethereum&nbsp;1.0, the beacon chain gives in-protocol versions to its forks. See the [Version custom type](/part3/config/types#version) for more explanation.

`GENESIS_FORK_VERSION` is the fork version the beacon chain starts with at its "genesis" event: the point at which the chain first starts producing blocks. In Altair, this value is used only when [computing](/part3/helper/misc#compute_domain) the cryptographic domain for deposit messages, which are valid across all forks.

`ALTAIR_FORK_VERSION` is defined [elsewhere](/part3/altair-fork#configuration).

##### `GENESIS_DELAY`

The `GENESIS_DELAY` is a grace period to allow nodes and node operators time to prepare for the genesis event. The genesis event cannot occur before [`MIN_GENESIS_TIME`](#min_genesis_time). If there are not [`MIN_GENESIS_ACTIVE_VALIDATOR_COUNT`](#min_genesis_active_validator_count) registered validators sufficiently in advance of `MIN_GENESIS_TIME`, then Genesis will occur `GENESIS_DELAY` seconds after enough validators have been registered.

Seven days' notice was regarded as sufficient to allow client dev teams time to make a release once the genesis parameters were known, and for node operators to upgrade to that release. And, of course, to organise some parties. It was increased from 2 days over time due to lessons learned on some of the pre-genesis testnets.

#### Time parameters

| Name | Value | Unit | Duration |
| - | - | :-: | :-: |
| `SECONDS_PER_SLOT` | `uint64(12)` | seconds | 12 seconds |
| `SECONDS_PER_ETH1_BLOCK` | `uint64(14)` | seconds | 14 seconds |
| `MIN_VALIDATOR_WITHDRAWABILITY_DELAY` | `uint64(2**8)` (= 256) | epochs | ~27 hours |
| `SHARD_COMMITTEE_PERIOD` | `uint64(2**8)` (= 256) | epochs | ~27 hours |
| `ETH1_FOLLOW_DISTANCE` | `uint64(2**11)` (= 2,048) | Eth1 blocks | ~8 hours |

##### `SECONDS_PER_SLOT`

This was originally six seconds, but [is now twelve](https://github.com/ethereum/consensus-specs/pull/1428#issue-327424983), and has been [other values](https://github.com/ethereum/consensus-specs/pull/143/files#diff-51a43328a58414e132a744f3771f018cL42) in between.

Network delays are the main limiting factor in shortening the slot length. Three communication activities need to be accomplished within a slot, and it is supposed that four seconds is enough for the vast majority of nodes to have participated in each:

1. Blocks are proposed at the start of a slot and should have propagated to most of the network within the first four seconds.
1. At four seconds into a slot, committee members create and broadcast attestations, including attesting to this slot's block. During the next four seconds, these attestations are collected by aggregators in each committee.
1. At eight seconds into the slot, the aggregators broadcast their aggregate attestations which then have four seconds to reach the validator who is proposing the next block.

[TODO: find this discussion and link to it]::

This slot length has to account for shard blocks as well in later phases. There was some discussion around having the beacon chain and shards on differing cadences, but the latest sharding design tightly couples the beacon chain with the shards. Shard blocks under this design will be much larger, which led to the extension of the slot to 12 seconds.

There is a general intention to shorten the slot time in future, perhaps to [8 seconds](https://github.com/ethereum/consensus-specs/issues/1890#issue-638024803, if it proves possible to do this in practice. Or perhaps to lengthen it to [16 seconds](https://ethresear.ch/t/two-slot-proposer-builder-separation/10980?u=benjaminion).

##### `SECONDS_PER_ETH1_BLOCK`

The assumed block interval on the Eth1 chain, used in conjunction with [`ETH1_FOLLOW_DISTANCE`](#eth1_follow_distance) when considering blocks on the Eth1 chain, either at genesis, or when voting on the deposit contract state.

The [average Eth1 block time](https://etherscan.io/chart/blocktime) since January 2020 has actually been nearer 13 seconds, but never mind. The net effect is that we will be going a little deeper back in the Eth1 chain than [`ETH1_FOLLOW_DISTANCE`](#eth1_follow_distance) would suggest, which ought to be safer.

##### `MIN_VALIDATOR_WITHDRAWABILITY_DELAY`

A validator can stop participating once it has made it through the exit queue. However, its funds remain locked for the duration of `MIN_VALIDATOR_WITHDRAWABILITY_DELAY`. Initially, this is to allow some time for any slashable behaviour to be detected and reported so that the validator can still be penalised (in which case the validator's withdrawable time is pushed [`EPOCHS_PER_SLASHINGS_VECTOR`](/part3/config/preset#epochs_per_slashings_vector) into the future). When data shards are introduced this delay will also allow for shard rewards to be credited and for proof of custody challenges to be mounted.

Note that, for the time being, there is no mechanism to withdraw a validator's balance in any case. Nonetheless, being in a "withdrawable" state means that a validator has now fully exited from the protocol.

##### `SHARD_COMMITTEE_PERIOD`

This really anticipates the implementation of data shards. The [idea is](https://github.com/ethereum/consensus-specs/issues/675#issuecomment-468159678) that it's bad for the stability of longer-lived committees if validators can appear and disappear very rapidly. Therefore, a validator cannot initiate a voluntary exit until `SHARD_COMMITTEE_PERIOD` epochs after it is activated. Note that it could still be ejected by slashing before this time.

##### `ETH1_FOLLOW_DISTANCE`

[TODO: Update link to process deposits]::

This is used to calculate the minimum depth of block on the Ethereum&nbsp;1 chain that can be considered by the Eth2 chain: it applies to the [Genesis](/part3/initialise#initialise-state) process and the [processing of deposits](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/validator.md#process-deposit) by validators.  The Eth1 chain depth is estimated by multiplying this value by the target average Eth1 block time, [`SECONDS_PER_ETH1_BLOCK`](#seconds_per_eth1_block).

The value of `ETH1_FOLLOW_DISTANCE` is not based on the expected depth of any reorgs of the Eth1 chain, which are rarely if ever more than 2-3 blocks deep. It is about providing time to respond to an incident on the Eth1 chain such as a consensus failure between clients.

This parameter [was increased](https://github.com/ethereum/consensus-specs/pull/2093/files) from 1024 to 2048 blocks for the beacon chain mainnet, to allow devs more time to respond if there were any trouble on the Eth1 chain.

#### Validator Cycle

| Name | Value |
| - | - |
| `EJECTION_BALANCE` | `Gwei(2**4 * 10**9)` (= 16,000,000,000) |
| `MIN_PER_EPOCH_CHURN_LIMIT` | `uint64(2**2)` (= 4) |
| `CHURN_LIMIT_QUOTIENT` | `uint64(2**16)` (= 65,536) |

##### `EJECTION_BALANCE`

If a validator's effective balance falls to 16 Ether or below then it is exited from the system. This is most likely to happen as a result of the ["inactivity leak"](/part3/config/preset#inactivity_penalty_quotient_altair), which gradually reduces the balances of inactive validators in order to maintain the liveness of the beacon chain.

Note that the dependence on effective balance means that the validator is queued for ejection as soon as its actual balance falls to 16.75 Ether.

##### `MIN_PER_EPOCH_CHURN_LIMIT`

Validators are allowed to exit the system and cease validating, and new validators may apply to join at any time. For [interesting reasons](https://notes.ethereum.org/@vbuterin/rkhCgQteN#Exiting), a design decision was made to apply a rate-limit to entries (activations) and exits. Basically, it is important in proof of stake protocols that the validator set not change too quickly.

In the normal case, a validator is able to exit fairly swiftly: it just needs to wait [`MAX_SEED_LOOKAHEAD`](/part3/config/preset#max_seed_lookahead) (currently four) epochs. However, if there are large numbers of validators wishing to exit at the same time, a queue forms with a limited number of exits allowed per epoch. The minimum number of exits per epoch (the minimum "churn") is `MIN_PER_EPOCH_CHURN_LIMIT`, so that validators can always eventually exit. The actual allowed churn per epoch is [calculated](/part3/helper/accessors#get_validator_churn_limit) in conjunction with `CHURN_LIMIT_QUOTIENT`.

The same applies to new validator activations, once a validator has been marked as eligible for activation.

In concrete terms, this means that up to four validators can enter or exit the active validator set each epoch (900 per day) until we have 327,680 active validators, at which point the limit rises to five.

The rate at which validators can exit is strongly related to the concept of weak subjectivity, and the weak subjectivity period.

[TODO: Link to weak subjectivity discussion when done]::

##### `CHURN_LIMIT_QUOTIENT`

This is used in conjunction with `MIN_PER_EPOCH_CHURN_LIMIT` to [calculate](/part3/helper/accessors#get_validator_churn_limit) the actual number of validator exits and activations allowed per epoch. The number of exits allowed is `max(MIN_PER_EPOCH_CHURN_LIMIT, n // CHURN_LIMIT_QUOTIENT)`, where `n` is the number of active validators. The same applies to activations.

#### Inactivity penalties

| Name | Value | Description |
| - | - | - |
| `INACTIVITY_SCORE_BIAS` | `uint64(2**2)` (= 4) | score points per inactive epoch |
| `INACTIVITY_SCORE_RECOVERY_RATE` | `uint64(2**4)` (= 16) | score points per leak-free epoch |

##### `INACTIVITY_SCORE_BIAS`

If the beacon chain hasn't finalised an epoch for longer than [`MIN_EPOCHS_TO_INACTIVITY_PENALTY`](/part3/config/preset#min_epochs_to_inactivity_penalty) epochs, then it enters "leak" mode. In this mode, any validator that does not vote (or votes for an incorrect target) is penalised an amount each epoch of `(effective_balance * inactivity_score) // (INACTIVITY_SCORE_BIAS * INACTIVITY_PENALTY_QUOTIENT_ALTAIR)`. See [`INACTIVITY_PENALTY_QUOTIENT_ALTAIR`](/part3/config/preset#inactivity_penalty_quotient_altair) for discussion of the inactivity leak itself.

The per-validator `inactivity-score` is new in Altair. During Phase&nbsp;0, inactivity penalties were an increasing global amount applied to all validators that did not participate in an epoch, regardless of their individual track records of participation. So a validator that was able to participate for a significant fraction of the time nevertheless could be quite severely penalised due to the growth of the per-epoch inactivity penalty. Vitalik gives a simplified [example](https://github.com/ethereum/consensus-specs/issues/2125#issue-737768917): "if fully online validators get leaked and lose 40% of their balance, someone who has been trying hard to stay online and succeeds at 90% of their duties would still lose 4% of their balance. Arguably this is unfair."

In addition, if many validators are able to participate intermittently, it indicates that whatever event has befallen the chain is potentially recoverable (unlike a permanent network partition, or a super-majority network fork, for example). The inactivity leak is intended to bring finality to irrecoverable situations, so prolonging the time to finality if it's not irrecoverable is likely a good thing.

With Altair, each validator has an individual inactivity score in the beacon state which is updated by [`process_inactivity_updates()`](/part3/transition/epoch#def_process_inactivity_updates) as follows.
  - Every epoch, irrespective of the inactivity leak,
    - decrease the score by one when the validator makes a correct timely target vote, and
    - increase the score by `INACTIVITY_SCORE_BIAS` otherwise.
  - When _not_ in an inactivity leak
    - decrease every validator's score by `INACTIVITY_SCORE_RECOVERY_RATE`.

There is a floor of zero on the score. So, outside a leak, validators' scores will rapidly return to zero and stay there, since `INACTIVITY_SCORE_RECOVERY_RATE` is greater than `INACTIVITY_SCORE_BIAS`.

When in a leak, if $p$ is the participation rate between $0$ and $1$, and $\lambda$ is `INACTIVITY_SCORE_BIAS`, then the expected score after $N$ epochs is $\max (0, N((1-p)\lambda - p))$. For $\lambda = 4$ this is $\max (0, N(4 - 5p))$. So a validator that is participating 80% of the time or more can maintain a score that is bounded near zero. With less than 80% average participation, its score will increase unboundedly.

##### `INACTIVITY_SCORE_RECOVERY_RATE`

When not in an inactivity leak, validators' inactivity scores are reduced by `INACTIVITY_SCORE_RECOVERY_RATE + 1` per epoch when they make a timely head vote, and by `INACTIVITY_SCORE_RECOVERY_RATE - INACTIVITY_SCORE_BIAS` when they don't. So, even for non-performing validators, scores decrease three times faster than they increase.

The new scoring system means that some validators will continue to be penalised due to the leak, even after finalisation starts again. This is [intentional](https://github.com/ethereum/consensus-specs/issues/2098). When the leak causes the beacon chain to finalise, at that point we have just 2/3 of the stake online. If we immediately stop the leak (as we used to), then the amount of stake online would remain close to 2/3 and the chain would be vulnerable to flipping in and out of finality as small numbers of validators come and go. We saw this behaviour on some of the testnets prior to launch. Continuing the leak after finalisation serves to increase the balances of participating validators to greater than 2/3, providing a margin that should help to prevent such behaviour.

Vitalik illustrates some scenarios for individual validators in his [annotated Altair spec](https://github.com/ethereum/annotated-spec/blob/master/altair/beacon-chain.md):

<div class="image">
<img src="md/images/inactivity_0.png" /><br />
<span>Inactivity scores per validator in different scenarios. With the x-axis in epochs, the y-axis is the inactivity score.</span>
</div>

<div class="image">
<img src="md/images/inactivity_1.png" /><br />
<span>Balances per validator in different scenarios. The x-axis is in epochs. It's not clear what the y-axis is, but it is not percentage.</span>
</div>

TODO: re-do graph with clearer y-axis.

## Containers <!-- /part3/containers -->

### Preamble

We are about to see our first Python code in the executable spec. For specification purposes, these Container data structures are just Python data classes that are derived from the base SSZ `Container` class.

[TODO: link to SSZ]::

SSZ is the serialisation and merkleisation format used everywhere in Ethereum&nbsp;2.0. It is not self-describing, so you need to know ahead of time what you are unpacking when deserialising. SSZ deals with basic types and composite types. Classes like the below are handled as SSZ containers, a composite type defined as an "ordered heterogeneous collection of values".

Client implementations in different languages will obviously use their own paradigms to represent these data structures.

Two notes directly from the spec:
 - The definitions are ordered topologically to facilitate execution of the spec.
 - Fields missing in container instantiations default to their [zero value](https://github.com/ethereum/consensus-specs/blob/dev/ssz/simple-serialize.md#default-values).

### Misc dependencies <!-- /part3/containers/dependencies -->

#### `Fork`

```python
class Fork(Container):
    previous_version: Version
    current_version: Version
    epoch: Epoch  # Epoch of latest fork
```

Fork data is stored in the [BeaconState](/part3/containers/state#beaconstate) to indicate the current and previous fork versions. The fork version gets incorporated into the cryptographic domain in order to invalidate messages from validators on other forks. The previous fork version and the epoch of the change are stored so that pre-fork messages can still be validated (at least until the next fork). This ensures continuity of attestations across fork boundaries.

Note that this is all about planned protocol forks (upgrades), and nothing to do with the fork-choice rule, or inadvertent forks due to errors in the state transition.

#### `ForkData`

```python
class ForkData(Container):
    current_version: Version
    genesis_validators_root: Root
```

`ForkData` is used only in [`compute_fork_data_root()`](/part3/helper/misc#def_compute_fork_data_root). This is used when distinguishing between chains for the purpose of [peer-to-peer gossip](https://github.com/ethereum/consensus-specs/pull/1652), and for [domain separation](/part3/config/constants#domain-types). By including both the current fork version and the genesis validators root, we can cleanly distinguish between, say, mainnet and a testnet. Even if they have the same fork history, the genesis validators roots will differ.

[`Version`](/part3/config/types#version) is the datatype for a fork version number.

#### `Checkpoint`

```python
class Checkpoint(Container):
    epoch: Epoch
    root: Root
```

`Checkpoint`s are the points of justification and finalisation used by the [Casper FFG protocol](https://arxiv.org/pdf/1710.09437.pdf). Validators use them to create [`AttestationData`](#attestationdata) votes, and the status of recent checkpoints is recorded in [`BeaconState`](/part3/containers/state#beaconstate).

As per the Casper paper, checkpoints contain a height, and a block root. In this implementation of Casper FFG, checkpoints occur whenever the slot number is a multiple of [`SLOTS_PER_EPOCH`](/part3/config/preset#slots_per_epoch), thus they correspond to `epoch` numbers. In particular, checkpoint $N$ is the first slot of epoch $N$. The [genesis block](/part3/initialise#genesis-block) is checkpoint 0, and starts off both justified and finalised.

Thus, the `root` element here is the block root of the first block in the `epoch`. (This might be the block root of an earlier block if some slots have been skipped, that is, if there are no blocks for those slots.).

It is very common to talk about justifying and finalising epochs. This is not strictly correct: checkpoints are justified and finalised.

Once a checkpoint has been finalised, the slot it points to and all prior slots will never be reverted.

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

This is the datastructure that stores most of the information about an individual validator, with only validators' balances and inactivity scores stored elsewhere.

[TODO: link to effective balance]::

Validators' actual balances are stored separately in the `BeaconState` structure, and only the slowly changing "effective balance" is stored here. This is because actual balances are liable to change quite frequently (every epoch): the merkleisation process used to calculate state roots means that only the parts that change need to be recalculated; the roots of unchanged parts can be cached. Separating out the validator balances potentially means that only 1/15th (8/121) as much data needs to be rehashed every epoch compared to storing them here, which is an important optimisation.

For similar reasons, validators' inactivity scores are stored outside validator records as well, as they are also updated every epoch.

A validator's record is [created](/part3/transition/block#def_get_validator_from_deposit) when its deposit is first processed. Sending multiple deposits does not create multiple validator records: deposits with the same public key are aggregated in one record. Validator records never expire; they are stored permanently, even after the validator has exited the system. Thus there is a 1:1 mapping between a validator's index in the list and the identity of the validator (validator records are only ever appended to the list).

Also stored in `Validator`:
 - `pubkey` serves as both the unique identity of the validator and the means of cryptographically verifying messages purporting to have been signed by it. The public key is stored raw, unlike in Eth1, where it is hashed to form the account address. This allows public keys to be aggregated for verifying aggregated attestations.
 - Validators actually have two private/public key pairs, the one above used for signing protocol messages, and a separate "withdrawal key". `withdrawal_credentials` is a commitment generated from the validator's withdrawal key so that, at some time in the future, a validator can prove it owns the funds and will be able to withdraw them. There are two types of [withdrawal credential](/part3/config/constants#withdrawal-prefixes) currently defined, one corresponding to BLS keys, and one corresponding to standard Ethereum ECDSA keys.
 - `effective_balance` is a topic of its own that we've [touched upon already](/part3/config/preset#max_effective_balance), and will discuss more fully when we look at [effective balances updates](/part3/transition/epoch#effective-balances-updates).
 - `slashed` indicates that a validator has been slashed, that is, punished for violating the slashing conditions. A validator can be slashed only once.
 - The remaining values are the epochs in which the validator changed, or is due to change state.

[TODO: link to validator lifecycle chapter]::

A detailed explanation of the stages in a validator's lifecycle is [here](https://notes.ethereum.org/@hww/lifecycle), and we'll be covering it in detail as we work through the beacon chain logic. But, in simplified form, progress is as follows:
  1. A 32 ETH deposit has been made on the Ethereum&nbsp;1 chain. No validator record exists yet.
  2. The deposit is processed by the beacon chain at some slot. A validator record is created with all epoch fields set to `FAR_FUTURE_EPOCH`.
  3. At the end of the current epoch, the `activation_eligibility_epoch` is set to the next epoch.
  4. After the epoch `activation_eligibility_epoch` has been finalised, the validator is added to the activation queue by setting its `activation_epoch` appropriately, taking into account the per-epoch [churn limit](/part3/config/configuration#min_per_epoch_churn_limit) and [`MAX_SEED_LOOKAHEAD`](/part3/config/preset#max_seed_lookahead).
  5. On reaching `activation_epoch` the validator becomes active, and should carry out its duties.
  6. At any time after [`SHARD_COMMITTEE_PERIOD`](/part3/config/configuration#shard_committee_period) epochs have passed, a validator may request a voluntary exit. `exit_epoch` is set according to the validator's position in the exit queue and [`MAX_SEED_LOOKAHEAD`](/part3/config/preset#max_seed_lookahead), and `withdrawable_epoch` is set [`MIN_VALIDATOR_WITHDRAWABILITY_DELAY`](/part3/config/configuration#min_validator_withdrawability_delay) epochs after that.
  7. From `exit_epoch` onward the validator is no longer active. There is no mechanism for exited validators to rejoin: exiting is permanent.
  8. After `withdrawable_epoch`, the validator's balance can in principle be withdrawn, although there is no mechanism for doing this for the time being.

The above does not account for slashing or forced exits due to low balance.

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

The beacon chain relies on a combination of two different consensus mechanisms: LMD GHOST keeps the chain moving, and Casper FFG brings finalisation. These are documented in the [Gasper paper](https://arxiv.org/abs/2003.03052). Attestations from (committees of) validators are used to provide votes simultaneously for each of these consensus mechanisms.

This container is the fundamental unit of attestation data. It provides the following elements.
  - `slot`: each active validator should be making exactly one attestation per epoch. Validators have an assigned slot for their attestation, and it is recorded here for validation purposes.
  - `index`: there can be several committees active in a single slot. This is the number of the committee that the validator belongs to in that slot. It can be used to reconstruct the committee to check that the attesting validator is a member. Ideally, all (or the majority at least) of the attestations in a slot from a single committee will be identical, and can therefore be aggregated into a single aggregate attestation.
  - `beacon_block_root` is the validator's vote on the head block for that slot after locally running the LMD GHOST fork-choice rule. It may be the root of a block from a previous slot if the validator believes that the current slot is empty.
  - `source` is the validator's opinion of the best currently justified checkpoint for the Casper FFG finalisation process.
  - `target` is the validator's opinion of the block at the start of the current epoch, also for Casper FFG finalisation.

This `AttestationData` structure gets wrapped up into several other similar but distinct structures:
  - [`Attestation`](/part3/containers/operations#attestation) is the form in which attestations normally make their way around the network. It is signed and aggregatable, and the list of validators making this attestation is compressed into a bitlist.
  - [`IndexedAttestation`](#indexedattestation) is used primarily for [attester slashing](/part3/containers/operations#attesterslashing). It is signed and aggregated, with the list of attesting validators being an uncompressed list of indices.
  - [`PendingAttestation`](#pendingattestation). In Phase&nbsp;0, after having their validity checked during block processing, `PendingAttestation`s were stored in the beacon state pending processing at the end of the epoch. This was reworked in the Altair upgrade and `PendingAttestation`s are no longer used.

#### `IndexedAttestation`

```python
class IndexedAttestation(Container):
    attesting_indices: List[ValidatorIndex, MAX_VALIDATORS_PER_COMMITTEE]
    data: AttestationData
    signature: BLSSignature
```

This is one of the forms in which aggregated attestations &ndash; combined identical attestations from multiple validators in the same committee &ndash; are handled.

[`Attestation`](/part3/containers/operations#attestation)s and `IndexedAttestation`s contain essentially the same information. The difference being that the list of attesting validators is stored uncompressed in `IndexedAttestation`s. That is, each attesting validator is referenced by its global validator index, and non-attesting validators are not included. To be [valid](/part3/helper/predicates#is_valid_indexed_attestation), the validator indices must be unique and sorted, and the signature must be an aggregate signature from exactly the listed set of validators.

`IndexedAttestation`s are primarily used when reporting [attester slashing](/part3/containers/operations#attesterslashing). An `Attestation` can be converted to an `IndexedAttestation` using [`get_indexed_attestation()`](/part3/helper/accessors#def_get_indexed_attestation).

#### `PendingAttestation`

```python
class PendingAttestation(Container):
    aggregation_bits: Bitlist[MAX_VALIDATORS_PER_COMMITTEE]
    data: AttestationData
    inclusion_delay: Slot
    proposer_index: ValidatorIndex
```

`PendingAttestation`s were removed in the Altair upgrade and now appear only in the process for [upgrading the state](/part3/altair-fork#upgrading-the-state) during the fork. The following is provided for historical reference.

Prior to Altair, `Attestation`s received in blocks were verified then temporarily stored in beacon state in the form of `PendingAttestation`s, pending further processing at the end of the epoch.

A `PendingAttestation` is an [`Attestation`](/part3/containers/operations#attestation) minus the signature, plus a couple of fields related to reward calculation:
 - `inclusion_delay` is the number of slots between the attestation having been made and it being included in a beacon block by the block proposer. Validators are rewarded for getting their attestations included in blocks, but the reward used to decline in inverse proportion to the inclusion delay. This incentivised swift attesting and communicating by validators.
 - `proposer_index` is the block proposer that included the attestation. The block proposer gets a micro reward for every validator's attestation it includes, not just for the aggregate attestation as a whole. This incentivises efficient finding and packing of aggregations, since the number of aggregate attestations per block is capped.

Taken together, these rewards are designed to incentivise the whole network to collaborate to do efficient attestation aggregation (proposers want to include only well-aggregated attestations; validators want to get their attestations included, so will ensure that they get well aggregated).

With Altair, this whole mechanism has been replaced by [`ParticipationFlags`](/part3/config/types#participationflags).

#### `Eth1Data`

```python
class Eth1Data(Container):
    deposit_root: Root
    deposit_count: uint64
    block_hash: Hash32
```

Proposers include their view of the Ethereum&nbsp;1 chain in blocks, and this is how they do it. The beacon chain stores these votes up in the [beacon state](/part3/containers/state#beaconstate) until there is a simple majority consensus, then the winner is committed to beacon state. This is to allow the [processing](/part3/transition/block#deposits) of Eth1 deposits, and creates a simple "honest-majority" one-way bridge from Eth1 to Eth2. The 1/2 majority assumption for this (rather than 2/3 for committees) is considered safe as the number of validators voting each time is large: [`EPOCHS_PER_ETH1_VOTING_PERIOD`](/part3/config/preset#epochs_per_eth1_voting_period) * [`SLOTS_PER_EPOCH`](/part3/config/preset#slots_per_epoch) = 64 * 32 = 2048.

  - `deposit_root` is the result of the [`get_deposit_root()`](https://github.com/ethereum/consensus-specs/blob/v1.1.1/solidity_deposit_contract/deposit_contract.sol#L80) method of the Eth1 deposit contract after executing the Eth1 block being voted on - it's the root of the (sparse) Merkle tree of deposits.
  - `deposit_count` is the number of deposits in the deposit contract at that point, the result of the [`get_deposit_count`](https://github.com/ethereum/consensus-specs/blob/v1.1.1/solidity_deposit_contract/deposit_contract.sol#L97) method on the contract. This will be equal to or greater than (if there are pending unprocessed deposits) the value of `state.eth1_deposit_index`.
  - `block_hash` is the hash of the Eth1 block being voted for. This doesn't have any current use within the Eth2 protocol, but is "too potentially useful to not throw in there", to quote Danny Ryan.

#### `HistoricalBatch`

```python
class HistoricalBatch(Container):
    block_roots: Vector[Root, SLOTS_PER_HISTORICAL_ROOT]
    state_roots: Vector[Root, SLOTS_PER_HISTORICAL_ROOT]
```

This is used to implement part of the [double batched accumulator](https://ethresear.ch/t/double-batched-merkle-log-accumulator/571) for the past history of the chain. Once [`SLOTS_PER_HISTORICAL_ROOT`](/part3/config/preset#slots_per_historical_root) block roots and the same number of state roots have been accumulated in the beacon state, they are put in a `HistoricalBatch` object and the hash tree root of that is appended to the `historical_roots` list in beacon state. The corresponding block and state root lists in the beacon state are circular and just get overwritten in the next period. See [`process_historical_roots_update()`](/part3/transition/epoch#def_process_historical_roots_update).

#### `DepositMessage`

```python
class DepositMessage(Container):
    pubkey: BLSPubkey
    withdrawal_credentials: Bytes32
    amount: Gwei
```

The basic information necessary to either add a validator to the registry, or to top up an existing validator's stake.

`pubkey` is the unique public key of the validator. If it is already present in the registry (the list of validators in beacon state) then `amount` is added to its balance. Otherwise a new [`Validator`](#validator) entry is appended to the list and credited with `amount`.

See the [`Validator`](#validator) container for more on `withdrawal_credentials`.

There are two protections that `DepositMessages` get at different points.
   1. [`DepositData`](#depositdata) is included in beacon blocks as a [`Deposit`](/part3/containers/operations#deposit), which adds a Merkle proof that the data has been registered with the Eth1 deposit contract.
   2. When the containing beacon block is processed, deposit messages are stored, pending processing at the end of the epoch, in the beacon state as [`DepositData`](#depositdata). This includes the pending validator's BLS signature so that the authenticity of the `DepositMessage` can be verified before a validator is added.

#### `DepositData`

```python
class DepositData(Container):
    pubkey: BLSPubkey
    withdrawal_credentials: Bytes32
    amount: Gwei
    signature: BLSSignature  # Signing over DepositMessage
```

A signed [`DepositMessage`](#depositmessage). The comment says that the signing is done over `DepositMessage`. What actually happens is that a `DepositMessage` is constructed from the first three fields; the root of that is combined with [`DOMAIN_DEPOSIT`](/part3/config/constants#domain_deposit) in a [`SigningData`](#signingdata) object; finally the root of this is signed and included in `DepositData`.

#### `BeaconBlockHeader`

```python
class BeaconBlockHeader(Container):
    slot: Slot
    proposer_index: ValidatorIndex
    parent_root: Root
    state_root: Root
    body_root: Root
```

A standalone version of a beacon block header: [`BeaconBlock`](/part3/containers/blocks#beaconblock)s contain their own header. It is identical to [`BeaconBlock`](/part3/containers/blocks#beaconblock), except that `body` is replaced by `body_root`. It is `BeaconBlock`-lite.

`BeaconBlockHeader` is stored in beacon state to record the last processed block header. This is used to ensure that we proceed along a continuous chain of blocks that always point to their predecessor[^its-a-blockchain-yo]. See [`process_block_header()`](/part3/transition/block#def_process_block_header).

[^its-a-blockchain-yo]: It's a blockchain, yo!

The [signed version](/part3/containers/envelopes#signedbeaconblockheader) is used in [proposer slashings](/part3/containers/operations#proposerslashing).

#### `SyncCommittee`

```python
class SyncCommittee(Container):
    pubkeys: Vector[BLSPubkey, SYNC_COMMITTEE_SIZE]
    aggregate_pubkey: BLSPubkey
```

Sync committees were introduced in the Altair upgrade to support light clients to the beacon chain protocol. The list of committee members for each of the current and next sync committees is stored in the beacon state. Members are updated every [`EPOCHS_PER_SYNC_COMMITTEE_PERIOD`](/part3/config/preset#epochs_per_sync_committee_period) epochs by [`get_next_sync_committee()`](/part3/helper/accessors#def_get_next_sync_committee).

Including the `aggregate_pubkey` of the sync committee is an [optimisation](https://github.com/ethereum/consensus-specs/commit/9c3d5982cfbe9a52b02e2bd028a873c9226a34c9) intended to save light clients some work when verifying the sync committee's signature. All the public keys of the committee members (including any duplicates) are aggregated into this single public key. If any signatures are missing from the [`SyncAggregate`](/part3/containers/operations#syncaggregate), the light client can "de-aggregate" them by performing elliptic curve subtraction. As long as more than half of the committee contributed to the signature, then this will be faster than constructing the aggregate of participating members from scratch. If less than half contributed to the signature, the light client can start instead with the identity public key and use elliptic curve addition to aggregate those public keys that are present.

See also [`SYNC_COMMITTEE_SIZE`](/part3/config/preset#sync_committee_size).

#### `SigningData`

```python
class SigningData(Container):
    object_root: Root
    domain: Domain
```

This is just a convenience container, used only in [`compute_signing_root()`](/part3/helper/misc#def_compute_signing_root) to calculate the hash tree root of an object along with a domain. The resulting root is the message data that gets signed with a BLS signature. The `SigningData` object itself is never stored or transmitted.

### Beacon operations <!-- /part3/containers/operations -->

The following are the various protocol messages that can be transmitted in a [block`](/part3/containers/blocks#beaconblockbody) on the beacon chain.

For most of these, the proposer is rewarded either explicitly or implicitly for including the object in a block.

The proposer receives explicit in-protocol rewards for including the following in blocks:
  - `ProposerSlashing`s,
  - `AttesterSlashing`s,
  - `Attestation`s, and
  - `SyncAggregate`s.

Including `Deposit` objects in blocks is only implicitly rewarded, in that, if there are pending deposits that the block proposer does not include then the block is invalid, so the proposer receives no reward.

There is no direct reward for including `VoluntaryExit` objects. However, for each validator exited, rewards for the remaining validators increase very slightly, so it's as well for proposers not to ignore `VoluntaryExit`s.

#### `ProposerSlashing`

```python
class ProposerSlashing(Container):
    signed_header_1: SignedBeaconBlockHeader
    signed_header_2: SignedBeaconBlockHeader
```

`ProposerSlashing`s may be included in blocks to prove that a validator has broken the rules and ought to be slashed. Proposers receive a reward for correctly submitting these.

In this case, the rule is that a validator may not propose two different blocks at the same height, and the payload is the signed headers of the two [blocks](/part3/containers/dependencies#beaconblockheader) that evidence the crime. The signatures on the [`SignedBeaconBlockHeader`](/part3/containers/envelopes#signedbeaconblockheader)s are checked to verify that they were both signed by the accused validator.

#### `AttesterSlashing`

```python
class AttesterSlashing(Container):
    attestation_1: IndexedAttestation
    attestation_2: IndexedAttestation
```

`AttesterSlashing`s may be included in blocks to prove that one or more validators in a committee has broken the rules and ought to be slashed. Proposers receive a reward for correctly submitting these.

The contents of the [`IndexedAttestation`](/part3/containers/dependencies#indexedattestation)s are checked against the attester slashing conditions in [`is_slashable_attestation_data()`](/part3/helper/predicates#def_is_slashable_attestation_data). If there is a violation, then any validator that attested to both `attestation_1` and `attestation_2` is slashed, see [`process_attester_slashing()`](/part3/transition/block#def_process_attester_slashing).

`AttesterSlashing`s can be very large since they could in principle list the indices of all the validators in a committee. However, in contrast to proposer slashings, many validators can be slashed as a result of a single report.

#### `Attestation`

```python
class Attestation(Container):
    aggregation_bits: Bitlist[MAX_VALIDATORS_PER_COMMITTEE]
    data: AttestationData
    signature: BLSSignature
```

This is the form in which attestations make their way around the network. It is designed to be easily aggregatable: `Attestations` containing identical `AttestationData` can be combined into a single attestation by aggregating the signatures.

`Attestation`s contain the same information as [`IndexedAttestation`](/part3/containers/dependencies#indexedattestation)s, but use knowledge of the validator committees at slots to compress the list of attesting validators down to a bitlist. Thus, `Attestation`s are at least 5 times smaller than `IndexedAttestation`s, and up to 35 times smaller (with 128 or 2048 validators per committee, respectively).

When a validator first broadcasts its attestation to the network, the `aggregation_bits` list will contain only a single bit set, and calling [`get_attesting_indices()`](/part3/helper/accessors#def_get_attesting_indices) on it will return a list containing only a single entry, the validator's own index.

#### `Deposit`

```python
class Deposit(Container):
    proof: Vector[Bytes32, DEPOSIT_CONTRACT_TREE_DEPTH + 1]  # Merkle path to deposit root
    data: DepositData
```

This container is used to include deposit data from prospective validators in beacon blocks so that they can be processed into beacon state.

The `proof` is a Merkle proof constructed by the block proposer that the [`DepositData`](/part3/containers/dependencies#depositdata) corresponds to the previously agreed deposit root of the Eth1 contract's deposit tree. It is verified in [`process_deposit()`](/part3/transition/block#def_process_deposit) by [`is_valid_merkle_branch()`](/part3/helper/predicates#def_is_valid_merkle_branch).

#### `VoluntaryExit`

```python
class VoluntaryExit(Container):
    epoch: Epoch  # Earliest epoch when voluntary exit can be processed
    validator_index: ValidatorIndex
```

Voluntary exit messages are how a validator signals that it wants to cease being a validator. Blocks containg `VoluntaryExit` data for an epoch later than the current epoch are invalid, so nodes should buffer or ignore any future-dated exits they see.

`VoluntaryExit` objects are never used naked; they are always wrapped up into a [`SignedVoluntaryExit`](/part3/containers/envelopes#signedvoluntaryexit) object.

#### `SyncAggregate`

```python
class SyncAggregate(Container):
    sync_committee_bits: Bitvector[SYNC_COMMITTEE_SIZE]
    sync_committee_signature: BLSSignature
```

The prevailing sync committee is stored in the beacon state, so the `SyncAggregate`s included in blocks need only use a bit vector to indicate which committee members signed off on the message.

The `sync_committee_signature` is the aggregate signature of all the validators referenced in the bit vector over the block root of the previous slot.

`SyncAggregate`s are handled by [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate).

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

The two fundamental data structures for nodes are the `BeaconBlock` and the `BeaconState`. The `BeaconBlock` is how the leader (the chosen proposer in a slot) communicates network updates to all the other validators, and those validators update their own `BeaconState` by applying `BeaconBlock`s. The idea is that (eventually) all validators on the network come to agree on the same `BeaconState`.

Validators are randomly selected to propose beacon blocks, and there ought to be exactly one beacon block per slot if things are running correctly. If a validator is offline, or misses its slot, or proposes an invalid block, or has its block orphaned, then a slot can be empty.

The following objects are always present in a valid beacon block.
  - `randao_reveal`: the block is invalid if the RANDAO reveal does not verify correctly against the proposer's public key. This is the block proposer's contribution to the beacon chain's randomness. The proposer generates it by signing the current epoch number (combined with [`DOMAIN_RANDAO`](/part3/config/constants#domain_randao)) with its private key. To the best of anyone's knowledge, the result is indistinguishable from random. This gets [mixed into](/part3/transition/block#randao) the beacon state RANDAO.
  - See [Eth1Data](/part3/containers/dependencies#eth1data) for `eth1_data`. In principle, this is mandatory, but it is not checked, and there is no penalty for making it up.
  - `graffiti` is left free for the proposer to insert whatever data it wishes. It has no protocol level significance. It can be left as zero; most clients set the client name and version string as their own default graffiti value.
  - `sync_aggregate` is a record of which validators in the current sync committee voted for the chain head in the previous slot.

Deposits are a special case. They are mandatory only if there are pending deposits to be processed. There is no explicit reward for including deposits, except that a block is invalid without any that ought to be there.
  - `deposits`: if the block does not contain either all the outstanding [`Deposit`](/part3/containers/operations#deposit)s, or [`MAX_DEPOSITS`](/part3/config/preset#max_deposits) of them in deposit order, then it is [invalid](/part3/transition/block#operations).

Including any of the remaining objects is optional. They are handled, if present, in the [`process_operations()`](/part3/transition/block#def_process_operations) function.

The proposer earns rewards for including any of the following. Rewards for attestations and sync aggregates are available every slot. Slashings, however, are very rare.
  - `proposer_slashings`: up to [`MAX_PROPOSER_SLASHINGS`](/part3/config/preset#max_proposer_slashings) [`ProposerSlashing`](/part3/containers/operations#proposerslashing) objects may be included.
  - `attester_slashings`: up to [`MAX_ATTESTER_SLASHINGS`](/part3/config/preset#max_attester_slashings) [`AttesterSlashing`](/part3/containers/operations#attesterslashing) objects may be included.
  - `attestations`: up to [`MAX_ATTESTATIONS`](/part3/config/preset#max_attestations) (aggregated) [`Attestation`](/part3/containers/operations#attestation) objects may be included. The block proposer is incentivised to include well-packed aggregate attestations, as it receives a micro reward for each unique attestation. In a perfect world, with perfectly aggregated attestations, `MAX_ATTESTATIONS` would be equal to `MAX_COMMITTEES_PER_SLOT`; in our configuration it is double. This provides capacity in blocks to catch up with attestations after skip slots, and also room to include some imperfectly aggregated attestations.

Including voluntary exits is optional, and there are no explicit rewards for including them.
  - `voluntary_exits`: up to [`MAX_VOLUNTARY_EXITS`](/part3/config/preset#max_voluntary_exits) [`SignedVoluntaryExit`](/part3/containers/envelopes#signedvoluntaryexit) objects may be included.

#### `BeaconBlock`

```python
class BeaconBlock(Container):
    slot: Slot
    proposer_index: ValidatorIndex
    parent_root: Root
    state_root: Root
    body: BeaconBlockBody
```

`BeaconBlock` just adds some blockchain paraphernalia to [`BeaconBlockBody`](#beaconblockbody). It is identical to [`BeaconBlockHeader`](/part3/containers/dependencies#beaconblockheader), except that the `body_root` is replaced by the actual block `body`.

`slot` is the slot the block is proposed for.

`proposer_index` was [added](https://github.com/ethereum/consensus-specs/pull/1626) to avoid a potential [DoS vector](https://github.com/ethereum/consensus-specs/issues/1601#issue-556546908), and to allow clients without full access to the state to still know [useful things](https://github.com/ethereum/consensus-specs/pull/1626#pullrequestreview-372265515).

`parent_root` is used to make sure that this block is a direct child of the last block we processed.

In order to calculate `state_root`, the proposer is expected to run the state transition with the block before propagating it. After the beacon node has processed the block, the state roots are compared to ensure they match. This is the mechanism for tying the whole system together and making sure that all validators and beacon nodes are always working off the same version of state (absent any short-term forks).

If any of these is incorrect, then the block is invalid with respect to the current beacon state and will be ignored.

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

All roads lead to the `BeaconState`. Maintaining this data structure is the sole purpose of all the apparatus in all of the spec documents. This state is the focus of consensus among the beacon nodes; it is what everybody, eventually, must agree on.

The beacon chain's state is monolithic: everything is bundled into a single state object (sometimes referred to as the "[God object](https://github.com/ethereum/consensus-specs/issues/582#issuecomment-461591281)"). Some [have argued](https://github.com/ethereum/consensus-specs/issues/582) for more granular approaches that might be more efficient, but at least the current approach is simple.

Let's break this thing down.

<a id="genesis_validators_root"></a>

    # Versioning
    genesis_time: uint64
    genesis_validators_root: Root
    slot: Slot
    fork: Fork

How do we know which chain we're on, and where we are on it? The information here ought to be sufficient. A continuous path back to the genesis block would also suffice.

`genesis_validators_root` is calculated at [Genesis time](/part3/initialise#initialisation) (when the chain starts) and is fixed for the life of the chain. This, combined with the `fork` identifier, should serve to uniquely identify the chain that we are on.

[TODO: internal link to fork choice]::

The [fork choice rule](https://github.com/ethereum/consensus-specs/blob/v1.0.0/specs/phase0/fork-choice.md) uses `genesis_time` to work out what slot we're in.

The `fork` object is manually updated as part of beacon chain upgrades, also called hard forks. This invalidates blocks and attestations from validators not following the new fork.

[TODO: link to upgrades section]::

    # History
    latest_block_header: BeaconBlockHeader
    block_roots: Vector[Root, SLOTS_PER_HISTORICAL_ROOT]
    state_roots: Vector[Root, SLOTS_PER_HISTORICAL_ROOT]
    historical_roots: List[Root, HISTORICAL_ROOTS_LIMIT]

`latest_block_header` is only used to make sure that the next block we process is a direct descendent of the previous block. It's a blockchain thing.

Past `block_roots` and `state_roots` are stored in lists here until the lists are full. Once they are full, the Merkle root is taken of both the lists together and [appended](/part3/transition/epoch#def_process_historical_roots_update) to `historical_roots`. `historical_roots` effectively grows without bound ([`HISTORICAL_ROOTS_LIMIT`](/part3/config/preset#historical_roots_limit) is _large_), but at a rate of only 10KB per year. Keeping this data is useful for light clients, and also allows Merkle proofs to be created against past states, for example [historical deposit data](https://github.com/ethereum/consensus-specs/issues/1343#issuecomment-521453223).

    # Eth1
    eth1_data: Eth1Data
    eth1_data_votes: List[Eth1Data, EPOCHS_PER_ETH1_VOTING_PERIOD * SLOTS_PER_EPOCH]
    eth1_deposit_index: uint64

`eth1_data` is the latest agreed upon state of the Eth1 chain and deposit contract. `eth1_data_votes` accumulates [`Eth1Data`](/part3/containers/dependencies#eth1data) from blocks until there is an overall majority in favour of one Eth1 state. If a majority is not achieved by the time the list is full then it is cleared down and voting starts again from scratch. `eth1_deposit_index` is the total number of deposits that have been processed by the beacon chain (which is greater than or equal to the number of validators, as a deposit can top-up the balance of an existing validator).

<a id="registry"></a>

    # Registry
    validators: List[Validator, VALIDATOR_REGISTRY_LIMIT]
    balances: List[Gwei, VALIDATOR_REGISTRY_LIMIT]

The registry of [`Validator`](/part3/containers/dependencies#validator)s and their balances. The `balances` list is separated out as it changes much more frequently than the `validators` list. Roughly speaking, balances of active validators are updated every epoch, while the `validators` list has only minor updates per epoch. When combined with SSZ tree hashing, this results in a big saving in the amount of data to be rehashed on registry updates. See also validator inactivity scores under [Inactivity](#inactivity) which we treat similarly.

    # Randomness
    randao_mixes: Vector[Bytes32, EPOCHS_PER_HISTORICAL_VECTOR]

Past randao mixes are stored in a fixed-size circular list for [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector) epochs (~290 days). These can be used to recalculate past committees, which allows slashing of historical attestations. See [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector) for more information.

    # Slashings
    slashings: Vector[Gwei, EPOCHS_PER_SLASHINGS_VECTOR]

A fixed-size circular list of past slashed amounts. Each epoch, the total effective balance of all validators slashed in that epoch is stored as an entry in this list. When the final slashing penalty for a slashed validator is calculated, it is [weighted](/part3/transition/epoch#slashings) with the sum of this list. This mechanism is designed to less heavily penalise one-off slashings that are most likely accidental, and more heavily penalise mass slashings during a window of time, which are more likely to be a coordinated attack.

    # Participation
    previous_epoch_participation: List[ParticipationFlags, VALIDATOR_REGISTRY_LIMIT]  # [Modified in Altair]
    current_epoch_participation: List[ParticipationFlags, VALIDATOR_REGISTRY_LIMIT]  # [Modified in Altair]

These lists record which validators participated in attesting during the current and previous epochs by recording [flags](/part3/config/constants#participation-flag-indices) for timely votes for the correct source, the correct target and the correct head. We store two epochs' worth since Validators have up to 32 slots to include a correct target vote. The flags are used to calculate finality and to assign rewards at the end of epochs.

Previously, during Phase&nbsp;0, we stored two epochs' worth of actual attestations in the state and processed them en masse at the end of epochs. This was slow, and was thought to be contributing to observed late block production in the first slots of epochs. The change to the new scheme was implemented in the Altair upgrade under the title of [Accounting Reforms](https://github.com/ethereum/consensus-specs/pull/2176).

    # Finality
    justification_bits: Bitvector[JUSTIFICATION_BITS_LENGTH]
    previous_justified_checkpoint: Checkpoint
    current_justified_checkpoint: Checkpoint
    finalized_checkpoint: Checkpoint

Ethereum&nbsp;2.0 uses the [Casper FFG](https://arxiv.org/pdf/1710.09437.pdf) finality mechanism, with a [k-finality](https://docs.google.com/presentation/d/1MZ-E6TVwomt4rqz-P2Bd_X3DFUW9fWDQkxUP_QJhkyw/edit#slide=id.g621d74a5e7_0_159) optimisation, where k&nbsp;=&nbsp;2. The above objects in the state are the data that need to be tracked in order to apply the finality rules.

 - `justification_bits` is only four bits long. It tracks the justification status of the last four epochs: 1 if justified, 0 if not. This is used when [calculating](/part3/transition/epoch#justification-and-finalization) whether we can finalise an epoch.
 - Outside of the finality calculations, `previous_justified_checkpoint` and `current_justified_checkpoint` are used to [filter](/part3/helper/accessors#get_attestation_participation_flag_indices) attestations: valid blocks include only attestations with a source checkpoint that matches the justified checkpoint in the state for the attestation's epoch.
 - `finalized_checkpoint`: the network has agreed that the beacon chain state at or before that epoch will never be reverted. So, for one thing, the fork choice rule doesn't need to go back any further than this. The Casper FFG mechanism is specifically constructed so that two conflicting finalized checkpoints cannot be created without at least one third of validators being slashed.

<a id="inactivity"></a>

    # Inactivity
    inactivity_scores: List[uint64, VALIDATOR_REGISTRY_LIMIT]  # [New in Altair]

This is logically part of "Registry", above, and would be better placed there. It is a per-validator record of [inactivity scores](/part3/config/configuration#inactivity-penalties) that is updated every epoch. This list is stored outside the main list of Validator objects since it is updated very frequently. See the [Registry](#registry) for more explanation.

    # Sync
    current_sync_committee: SyncCommittee  # [New in Altair]
    next_sync_committee: SyncCommittee  # [New in Altair]

Sync committees were introduced in the Altair upgrade. The next sync committee is calculated and stored so that participating validators can prepare in advance by subscribing to the required p2p subnets.

#### Historical Note

There was a period during which beacon state was split into "crystallized state" and "active state". The active state was constantly changing; the crystallized state changed only once per epoch (or what passed for epochs back then). Separating out the fast-changing state from the slower-changing state was an attempt to avoid having to constantly rehash the whole state every slot. With the introduction of SSZ tree hashing, this was [no longer necessary](https://github.com/ethereum/consensus-specs/pull/122#issuecomment-437170249), as the roots of the slower changing parts could simply be cached, which was a nice simplification. There remains an echo of this approach, however, in the splitting out of validator balances and inactivity scores into different structures withing the beacon state.

### Signed envelopes <!-- /part3/containers/envelopes -->

The following are just wrappers for more basic types, with an added signature.


#### `SignedVoluntaryExit`

```python
class SignedVoluntaryExit(Container):
    message: VoluntaryExit
    signature: BLSSignature
```

A voluntary exit is currently signed with the validator's online signing key.

There has been some discussion about [changing this](https://github.com/ethereum/consensus-specs/issues/1578) to also allow signing of a voluntary exit with the validator's offline withdrawal key. The introduction of multiple types of [withdrawal credential](/part3/config/constants#withdrawal-prefixes) makes this more complex, however, and it is no longer likely to be practical.

#### `SignedBeaconBlock`

```python
class SignedBeaconBlock(Container):
    message: BeaconBlock
    signature: BLSSignature
```

`BeaconBlock`s are signed by the block proposer and unwrapped for block processing.

This signature is what makes proposing a block "accountable". If two correctly signed conflicting blocks turn up, the signatures guarantee that the same proposer produced them both, and is thus subject to being slashed. This is also why stakers need to closely guard their signing keys.

#### `SignedBeaconBlockHeader`

```python
class SignedBeaconBlockHeader(Container):
    message: BeaconBlockHeader
    signature: BLSSignature
```

This is used only when reporting proposer slashing, within a [`ProposerSlashing`](/part3/containers/operations#proposerslashing) object.

Through the magic of SSZ hash tree roots, a valid signature for a `SignedBeaconBlock` is also a valid signature for a `SignedBeaconBlockHeader`. Proposer slashing makes use of this to save space in slashing reports.

## Helper Functions <!-- /part3/helper -->

### Preamble

> *Note*: The definitions below are for specification purposes and are not necessarily optimal implementations.

This note in the spec is super important for implementers! There are many, many optimisations of the below routines that are being used in practice; a naive implementation would be impractically slow for mainnet configurations. As long as the optimised code produces identical results to the code here, then all is fine.

### Math <!-- /part3/helper/math -->

#### `integer_squareroot`

<a id="def_integer_squareroot"></a>

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

Validator rewards scale with the reciprocal of the square root of the total active balance of all validators. This is calculated in [`get_base_reward_per_increment()`](/part3/transition/epoch#def_get_base_reward_per_increment).

In principle `integer_squareroot` is also used in [`get_attestation_participation_flag_indices()`](/part3/helper/accessors#def_get_attestation_participation_flag_indices), to specify the maximum delay for source votes to receive a reward. But this is just the constant, `integer_squareroot(SLOTS_PER_EPOCH)`, which is `5`.

[Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method) is used which has pretty good convergence properties, but implementations may use any method that gives identical results.

|||
|-|-|
| Used&nbsp;by | [`get_base_reward_per_increment()`](/part3/transition/epoch#def_get_base_reward_per_increment), [`get_attestation_participation_flag_indices()`](/part3/helper/accessors#def_get_attestation_participation_flag_indices) |

#### `xor`

<a id="def_xor"></a>

```python
def xor(bytes_1: Bytes32, bytes_2: Bytes32) -> Bytes32:
    """
    Return the exclusive-or of two 32-byte strings.
    """
    return Bytes32(a ^ b for a, b in zip(bytes_1, bytes_2))
```

The bitwise `xor` of two 32-byte quantities is defined here in Python terms.

This is used only in [`process_randao()`](/part3/transition/block#def_process_randao) when mixing in the new randao reveal.

Fun fact: if you `xor` two `byte` types in Java, the result is a 32 bit (signed) integer. This is one reason  we need to define the "obvious" here. But mainly, because the spec is executable, we need to tell Python what it doesn't already know.

|||
|-|-|
| Used&nbsp;by | [`process_randao()`](/part3/transition/block#def_process_randao) |

#### `uint_to_bytes`

<a id="def_uint_to_bytes"></a>

> `def uint_to_bytes(n: uint) -> bytes` is a function for serializing the `uint` type object to bytes in ``ENDIANNESS``-endian. The expected length of the output is the byte-length of the `uint` type.

For the most part, integers are integers and bytes are bytes, and they don't mix much. But there are a few places where we need to convert from integers to bytes:
 - several times in the [`compute_shuffled_index()`](/part3/helper/misc#def_compute_shuffled_index) algorithm;
 - in [`compute_proposer_index()`](/part3/helper/misc#def_compute_proposer_index) for selecting a proposer weighted by stake;
 - in [`get_seed()`](/part3/helper/accessors#def_get_seed) to mix the epoch number into the randao mix;
 - in [`get_beacon_proposer_index()`](/part3/helper/accessors#def_get_beacon_proposer_index) to mix the slot number into the per-epoch randao seed; and
 - in [`get_next_sync_committee_indices()`](/part3/helper/accessors#def_get_next_sync_committee_indices).

You'll note that in every case, the purpose of the conversion is for the integer to form part of a byte string that is hashed to create (pseudo-) randomness.

The result of this conversion is dependent on our arbitrary choice of endianness, that is, how we choose to represent integers as strings of bytes. For Eth2, we have chosen little-endian: see the discussion of [`ENDIANNESS`](/part3/config/constants#endianness) for more background.

The `uint_to_bytes()` function is not given an explicit implementation in the specification, which is unusual. This [to avoid](https://github.com/ethereum/consensus-specs/pull/1935) exposing the innards of the Python SSZ implementation (of `uint`) to the rest of the spec. When running the spec as an executable, it uses the definition in the [SSZ utilities](https://github.com/ethereum/consensus-specs/blob/fb34e162ef3476f2dd5d7dc6ebfc51c626608ffa/tests/core/pyspec/eth2spec/utils/ssz/ssz_impl.py#L16).

|||
|-|-|
| Used&nbsp;by | [`compute_shuffled_index()`](/part3/helper/misc#def_compute_shuffled_index), [`compute_proposer_index()`](/part3/helper/misc#def_compute_proposer_index), [`get_seed()`](/part3/helper/accessors#def_get_seed), [`get_beacon_proposer_index()`](/part3/helper/accessors#def_get_beacon_proposer_index), [`get_next_sync_committee_indices()`](/part3/helper/accessors#def_get_next_sync_committee_indices) |
| See&nbsp;also | [`ENDIANNESS`](/part3/config/constants#endianness), [SSZ utilities](https://github.com/ethereum/consensus-specs/blob/fb34e162ef3476f2dd5d7dc6ebfc51c626608ffa/tests/core/pyspec/eth2spec/utils/ssz/ssz_impl.py#L16) |

#### `bytes_to_uint64`

<a id="def_bytes_to_uint64"></a>

```python
def bytes_to_uint64(data: bytes) -> uint64:
    """
    Return the integer deserialization of ``data`` interpreted as ``ENDIANNESS``-endian.
    """
    return uint64(int.from_bytes(data, ENDIANNESS))
```

`bytes_to_uint64()` is the inverse of [`uint_to_bytes()`](#def_uint_to_bytes), and is used by the [shuffling algorithm](/part3/helper/misc#compute_shuffled_index) to create a random index from the output of a hash.

It is also used in the validator specification when selecting validators to aggregate [attestations](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/validator.md#aggregation-selection), and [sync committee messages](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/altair/validator.md#aggregation-selection).

`int.from_bytes` is a [built-in](https://docs.python.org/3/library/stdtypes.html#int.from_bytes) Python&nbsp;3 method. The `uint64` cast is provided by the spec's SSZ implementation.

|||
|-|-|
| Used&nbsp;by | [`compute_shuffled_index`](/part3/helper/misc#def_compute_shuffled_index) |
| See&nbsp;also | [attestation aggregator selection](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/validator.md#aggregation-selection), [sync committee aggregator selection](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/altair/validator.md#aggregation-selection) |

### Crypto <!-- /part3/helper/crypto -->

#### `hash`

> `def hash(data: bytes) -> Bytes32` is SHA256.

SHA256 was [chosen](https://github.com/ethereum/consensus-specs/pull/779) as the protocol's base hash algorithm for easier cross-chain interoperability: many other chains use SHA256, and Eth1 has a SHA256 precompile.

There was a lot of [discussion](https://github.com/ethereum/consensus-specs/issues/612) about this choice early in the design process. The [original plan](https://github.com/ethereum/consensus-specs/pull/11) had been to use the BLAKE2b-512 hash function &ndash; that being a modern hash function that's faster than SHA3 &ndash; and to move to a STARK/SNARK friendly hash function at some point (such as [MiMC](https://ethresear.ch/t/hash-based-vdfs-mimc-and-starks/2337)). However, to keep interoperability with Eth1, in particular for the implementation of the deposit contract, the hash function was [changed to Keccak256](https://github.com/ethereum/consensus-specs/issues/151). Finally, we [settled on SHA256](https://github.com/ethereum/consensus-specs/pull/779) as having even broader compatibility.

The hash function serves two purposes within the protocol. The main use, computationally, is in Merleization, the computation of hash tree roots, which is ubiquitous in the protocol. Its other use is to harden the randomness used in various places.

|||
|-|-|
| Used&nbsp;by | [`hash_tree_root`](#def_hash_tree_root), [`is_valid_merkle_branch()`](/part3/helper/predicates#def_is_valid_merkle_branch), [`compute_shuffled_index()`](/part3/helper/misc#def_compute_shuffled_index), [`compute_proposer_index()`](/part3/helper/misc#def_compute_proposer_index), [`get_seed()`](/part3/helper/accessors#def_get_seed), [`get_beacon_proposer_index()`](/part3/helper/accessors#def_get_beacon_proposer_index), [`get_next_sync_committee_indices()`](/part3/helper/accessors#def_get_next_sync_committee_indices), [`process_randao()`](/part3/transition/block#def_process_randao) |

#### `hash_tree_root`

<a id="def_hash_tree_root"></a>

> `def hash_tree_root(object: SSZSerializable) -> Root` is a function for hashing objects into a single root by utilizing a hash tree structure, as defined in the [SSZ spec](https://github.com/ethereum/consensus-specs/blob/v1.1.1/ssz/simple-serialize.md#merkleization).

The development of the tree hashing process was transformational for the Ethereum&nbsp;2.0 specification, and it is now used everywhere.

The naive way to create a digest of a datastructure is to [serialise](https://en.wikipedia.org/wiki/Serialization) it and then just run a hash function over the result. In tree hashing, the basic idea is to treat each element of an ordered, compound data structure as the leaf of a merkle tree, recursively if necessary until a primitive type is reached, and to return the [Merkle root](https://en.wikipedia.org/wiki/Merkle_tree) of the resulting tree.

At first sight, this all looks quite inefficient. Twice as much data needs to be hashed when tree hashing, and actual speeds are [4-6 times slower](https://github.com/ethereum/consensus-specs/pull/120) compared with the linear hash. However, it is good for [supporting light clients](https://github.com/ethereum/consensus-specs/issues/54), because it allows Merkle proofs to be constructed easily for subsets of the full state.

The breakthrough insight was realising that much of the re-hashing work can be cached: if part of the state data structure has not changed, that part does not need to be re-hashed: the whole subtree can be replaced with its cached hash. This turns out to be a huge efficiency boost, allowing the previous design, with cumbersome separate crystallised and active state, to be [simplified](https://github.com/ethereum/consensus-specs/pull/122) into a single state object.

Merkleization, the process of calculating the `hash_tree_root()` of an object, is defined in the [SSZ specification](https://github.com/ethereum/consensus-specs/blob/dev/ssz/simple-serialize.md), and explained further in the [section on SSZ](/part2/building_blocks/ssz).

#### BLS signatures

> The [IETF BLS signature draft standard v4](https://tools.ietf.org/html/draft-irtf-cfrg-bls-signature-04) with ciphersuite `BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_POP_` defines the following functions:
>
> - `def Sign(privkey: int, message: Bytes) -> BLSSignature`
> - `def Verify(pubkey: BLSPubkey, message: Bytes, signature: BLSSignature) -> bool`
> - `def Aggregate(signatures: Sequence[BLSSignature]) -> BLSSignature`
> - `def FastAggregateVerify(pubkeys: Sequence[BLSPubkey], message: Bytes, signature: BLSSignature) -> bool`
> - `def AggregateVerify(pubkeys: Sequence[BLSPubkey], messages: Sequence[Bytes], signature: BLSSignature) -> bool`
> - `def KeyValidate(pubkey: BLSPubkey) -> bool`
>
> The above functions are accessed through the `bls` module, e.g. `bls.Verify`.

The detailed specification of the cryptographic functions underlying Ethereum&nbsp;2.0's BLS signing scheme is delegated to the draft IETF standard as described in the spec. This includes specifying the elliptic curve BLS12-381 as our domain of choice.

Our intention in conforming to the in-progress standard is to provide for maximal interoperability with other chains, applications, and cryptographic libraries. Ethereum Foundation researchers and Eth2 developers had input to the [development](https://github.com/cfrg/draft-irtf-cfrg-bls-signature) of the standard. Nevertheless, there were some challenges involved in trying to keep up as the standard evolved. For example, the [Hashing to Elliptic Curves](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-09) standard was still changing [rather late](https://hackmd.io/@benjaminion/BkdbG45II#Multiclient-testnet-discussion) in the beacon chain testing phase. In the end, everything worked out fine.

The following two functions are described in the separate [BLS Extensions](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/altair/bls.md) document, but included here for convenience.

#### `eth_aggregate_pubkeys`

<a id="def_eth_aggregate_pubkeys"></a>

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

Stand-alone aggregation of public keys is not defined by the BLS signature standard. In the standard, public keys are aggregated only in the context of performing an aggregate signature verification via `AggregateVerify()` or `FastAggregateVerify()`.

The `eth_aggregate_pubkeys()` function was added in the Altair upgrade to implement an [optimisation](/part3/containers/dependencies#synccommittee) for light clients when verifying the signatures on `SyncAggregate`s.

|||
|-|-|
| Used&nbsp;by | [`get_next_sync_committee()`](/part3/helper/accessors#def_get_next_sync_committee) |
| Uses | [`bls.KeyValidate()`](#bls-signatures) |

#### `eth_fast_aggregate_verify`

<a id="def_eth_fast_aggregate_verify"></a>

```python
def eth_fast_aggregate_verify(pubkeys: Sequence[BLSPubkey], message: Bytes32, signature: BLSSignature) -> bool:
    """
    Wrapper to ``bls.FastAggregateVerify`` accepting the ``G2_POINT_AT_INFINITY`` signature when ``pubkeys`` is empty.
    """
    if len(pubkeys) == 0 and signature == G2_POINT_AT_INFINITY:
        return True
    return bls.FastAggregateVerify(pubkeys, message, signature)
```

The specification of `FastAggregateVerify()` [in the BLS signature standard](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-bls-signature-04#section-3.3.4) returns `INVALID` if there are zero public keys given.

This function was introduced in Altair to handle [`SyncAggregate`](/part3/containers/operations#syncaggregate)s that no sync committee member had signed off on, in which case the [`G2_POINT_AT_INFINITY`](/part3/config/constants#g2_point_at_infinity) can be considered a "correct" signature (in our case, but not according to the standard).

The networking and validator specs were later clarified to require that `SyncAggregates` have [at least one signature](https://github.com/ethereum/consensus-specs/pull/2528). But this requirement is not enforced in the consensus layer (in [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate)), so we need to retain this `eth_fast_aggregate_verify()` wrapper to allow the empty signature to be valid.

|||
|-|-|
| Used&nbsp;by | [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) |
| Uses | [`FastAggregateVerify()`](#bls-signatures) |
| See&nbsp;also | [`G2_POINT_AT_INFINITY`](/part3/config/constants#g2_point_at_infinity) |

### Predicates <!-- /part3/helper/predicates -->

#### `is_active_validator`

<a id="def_is_active_validator"></a>

```python
def is_active_validator(validator: Validator, epoch: Epoch) -> bool:
    """
    Check if ``validator`` is active.
    """
    return validator.activation_epoch <= epoch < validator.exit_epoch
```

Validators don't explicitly track their own state (eligible for activation, active, exited, withdrawable - the sole exception being whether they have been slashed or not). Instead, a validator's state is calculated by looking at the fields in the [`Validator`](/part3/containers/dependencies#validator) record that store the epoch numbers of state transitions.

In this case, if the validator was activated in the past and has not yet exited, then it is active.

This is used a few times in the spec, most notably in [`get_active_validator_indices()`](/part3/helper/accessors#def_get_active_validator_indices) which returns a list of all active validators at an epoch.

|||
|-|-|
| Used&nbsp;by | [`get_active_validator_indices()`](/part3/helper/accessors#def_get_active_validator_indices), [`get_eligible_validator_indices()`](/part3/transition/epoch#def_get_eligible_validator_indices), [`process_registry_updates()`](/part3/transition/epoch#def_process_registry_updates), [`process_voluntary_exit()`](/part3/transition/block#def_process_voluntary_exit) |
| See&nbsp;also | [`Validator`](/part3/containers/dependencies#validator) |

#### `is_eligible_for_activation_queue`

<a id="def_is_eligible_for_activation_queue"></a>

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

When a deposit is been [processed](/part3/transition/block#deposits) with a previously unseen public key, a new [`Validator`](/part3/containers/dependencies#validator) record is created with all the state-transition fields set to the default value of [`FAR_FUTURE_EPOCH`](/part3/config/constants#far_future_epoch).

It is possible to deposit any amount over [`MIN_DEPOSIT_AMOUNT`](/part3/config/preset#min_deposit_amount) (currently 1 Ether) into the deposit contract. However, validators do not become eligible for activation until their effective balance is equal to [`MAX_EFFECTIVE_BALANCE`](/part3/config/preset#max_effective_balance), which corresponds to an actual balance of 32 Ether or more.

This predicate [is used](/part3/transition/epoch#registry-updates) during epoch processing to find validators that have acquired the minimum necessary balance, but have not yet been added to the queue for activation. These validators are then marked as eligible for activation by setting the `validator.activation_eligibility_epoch` to the next epoch.

|||
|-|-|
| Used&nbsp;by | [`process_registry_updates()`](/part3/transition/epoch#def_process_registry_updates) |
| See&nbsp;also | [`Validator`](/part3/containers/dependencies#validator), [`FAR_FUTURE_EPOCH`](/part3/config/constants#far_future_epoch), [`MAX_EFFECTIVE_BALANCE`](/part3/config/preset#max_effective_balance) |

#### `is_eligible_for_activation`

<a id="def_is_eligible_for_activation"></a>

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

A validator that `is_eligible_for_activation()` has had its `activation_eligibility_epoch` [set](/part3/transition/epoch#registry-updates), but its `activation_epoch` is not yet set.

To avoid any ambiguity or confusion on the validator side about its state, we wait until its eligibility activation epoch has been finalised before [adding it to the activation queue](/part3/transition/epoch#registry-updates) by setting its `activation_epoch`. Otherwise, it might at one point become active, and then the beacon chain could flip to a fork in which it is not active. This could happen if the latter fork had fewer blocks and had thus processed fewer deposits.

|||
|-|-|
| Used&nbsp;by | [`process_registry_updates()`](/part3/transition/epoch#def_process_registry_updates) |
| See&nbsp;also | [`Validator`](/part3/containers/dependencies#validator), [`FAR_FUTURE_EPOCH`](/part3/config/constants#far_future_epoch) |

#### `is_slashable_validator`

<a id="def_is_slashable_validator"></a>

```python
def is_slashable_validator(validator: Validator, epoch: Epoch) -> bool:
    """
    Check if ``validator`` is slashable.
    """
    return (not validator.slashed) and (validator.activation_epoch <= epoch < validator.withdrawable_epoch)
```

Validators can be slashed only once: the flag [`Validator.slashed`](/part3/containers/dependencies#validator) is [set](/part3/helper/mutators#def_slash_validator) on the occasion of the first slashing.

An unslashed validator remains eligible to be slashed from when it becomes active right up until it becomes withdrawable. This is [`MIN_VALIDATOR_WITHDRAWABILITY_DELAY`](/part3/config/configuration#min_validator_withdrawability_delay) epochs (around 27 hours) after it has exited from being a validator and ceased validation duties.

|||
|-|-|
| Used&nbsp;by | [`process_proposer_slashing()`](/part3/transition/block#def_process_proposer_slashing), [`process_attester_slashing()`](/part3/transition/block#def_process_attester_slashing) |
| See&nbsp;also | [`Validator`](/part3/containers/dependencies#validator) |

#### `is_slashable_attestation_data`

<a id="def_is_slashable_attestation_data"></a>

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

This predicate is used by [`process_attester_slashing()`](/part3/transition/block#def_process_attester_slashing) to check that the two sets of alleged conflicting attestation data in an [`AttesterSlashing`](/part3/containers/operations#attesterslashing) do in fact qualify as slashable.

There are two ways for validators to get slashed under Casper FFG:
  1. A double vote: voting more than once for the same target epoch, or
  2. A surround vote: the source&ndash;target interval of one attestation entirely contains the source&ndash;target interval of a second attestation from the same validator or validators. The reporting block proposer needs to take care to order the `IndexedAttestation`s within the `AttesterSlashing` object so that the first set of votes surrounds the second. (The opposite ordering also describes a slashable offence, but is not checked for here.)

|||
|-|-|
| Used&nbsp;by | [`process_attester_slashing()`](/part3/transition/block#def_process_attester_slashing) |
| See&nbsp;also | [`AttestationData`](/part3/containers/dependencies#attestationdata), [`AttesterSlashing`](/part3/containers/operations#attesterslashing) |

#### `is_valid_indexed_attestation`

<a id="def_is_valid_indexed_attestation"></a>

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

`is_valid_indexed_attestation()` is used in [attestation processing](/part3/transition/block#attestations) and [attester slashing](/part3/transition/block#attester-slashings).

[IndexedAttestation](/part3/containers/dependencies#indexedattestation)s differ from [Attestation](/part3/containers/operations#attestation)s in that the latter record the contributing validators in a bitlist and the former explicitly list the global indices of the contributing validators.

An [IndexedAttestation](/part3/containers/dependencies#indexedattestation) passes this validity test only if all of the following apply.
 1. There is at least one validator index present.
 2. The list of validators contains no duplicates (the Python `set` function performs deduplication).
 3. The indices of the validators are sorted. (It is not clear to me why this is required. It's used in the duplicate check here, but that could just be replaced by checking the set size.)
 4. Its aggregated signature verifies against the aggregated public keys of the listed validators.

Verifying the signature uses the magic of [aggregated BLS signatures](https://hackmd.io/@benjaminion/bls12-381#Aggregation). The indexed attestation contains a BLS signature that is supposed to be the combined individual signatures of each of the validators listed in the attestation. This is verified by passing it to `bls.FastAggregateVerify()` along with the list of public keys from the same validators. The verification succeeds only if exactly the same set of validators signed the message (`signing_root`) as appear in the list of public keys. Note that [`get_domain()`](/part3/helper/accessors#def_get_domain) mixes in the fork version, so that attestations are not valid across forks.

No check is done here that the `attesting_indices` (which are the global validator indices) are all members of the correct committee for this attestation. In [`process_attestation()`](/part3/transition/block#def_process_attestation) they must be, by construction. In [`process_attester_slashing()`](/part3/transition/block#def_process_attester_slashing) it doesn't matter: _any_ validator signing conflicting attestations is liable to be slashed.

|||
|-|-|
| Used&nbsp;by | [`process_attester_slashing()`](/part3/transition/block#def_process_attester_slashing), [`process_attestation()`](/part3/transition/block#def_process_attestation) |
| Uses | [`get_domain()`](/part3/helper/accessors#def_get_domain), [`compute_signing_root()`](/part3/helper/misc#def_compute_signing_root), `[bls.FastAggregateVerify()`](/part2/building_blocks/signatures#bls-signatures) |
| See&nbsp;also | [IndexedAttestation](/part3/containers/dependencies#indexedattestation), [Attestation](/part3/containers/operations#attestation) |

#### `is_valid_merkle_branch`

<a id="def_is_valid_merkle_branch"></a>

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

This is the classic algorithm for [verifying a Merkle branch](https://blog.ethereum.org/2015/11/15/merkling-in-ethereum/) (also called a Merkle proof). Nodes are iteratively hashed as the tree is traversed from leaves to root. The bits of `index` select whether we are the right or left child of our parent at each level. The result should match the given `root` of the tree.

In this way we prove that we know that `leaf` is the value at position `index` in the list of leaves, and that we know the whole structure of the rest of the tree, as summarised in `branch`.

We use this function in [`process_deposit()`](/part3/transition/block#def_process_deposit) to check whether the deposit data we've received is correct or not. Based on the deposit data they have seen, Eth2 clients build a replica of the Merkle tree of deposits in the [deposit contract](/part2/deposits/contract). The proposer of the block that includes the deposit constructs the Merkle proof using its view of the deposit contract, and all other nodes use `is_valid_merkle_branch()` to check that their view matches the proposer's. It is a consensus failure if there is a mismatch, perhaps due to one client considering a deposit valid while another considers it invalid for some reason.

|||
|-|-|
| Used&nbsp;by | [`process_deposit()`](/part3/transition/block#def_process_deposit) |

### Misc <!-- /part3/helper/misc -->

#### `compute_shuffled_index`

<a id="def_compute_shuffled_index"></a>

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

Selecting random, distinct committees of validators is a big part of Ethereum&nbsp;2.0; it is foundational for both its scalability and security. This selection is done by shuffling.

Shuffling a list of objects is a well understood problem in computer science.  Notice, however, that this routine manages to shuffle a _single index_ to a new location, knowing only the total length of the list. To use the technical term for this, it is _oblivious_. To shuffle the whole list, this routine needs to be called once per validator index in the list. By construction, each input index maps to a distinct output index. Thus, when applied to all indices in the list, it results in a permutation, also called a shuffling.

Why do this rather than a simpler, more efficient, conventional shuffle? It's all about light clients. Beacon nodes will generally need to know the whole shuffling, but light clients will often be interested only in a small number of committees. Using this technique allows the composition of a single committee to be calculated without having to shuffle the entire set: potentially a big saving on time and memory.

As stated in the code comments, this is an implementation of the "swap-or-not" shuffle, described in [the cited paper](https://link.springer.com/content/pdf/10.1007%2F978-3-642-32009-5_1.pdf). Vitalik [kicked off a search](https://github.com/ethereum/consensus-specs/issues/323) for a shuffle with these properties in late 2018. With the help of Professor Dan Boneh of Stanford University, the swap-or-not [was identified](https://github.com/ethereum/consensus-specs/issues/563) as a candidate a couple of months later, and [adopted](https://github.com/ethereum/consensus-specs/pull/576) into the spec.

The algorithm breaks down as follows. For each iteration (each round), we start with a current `index`.
1. Pseudo-randomly select a pivot. This is a 64-bit integer based on the seed and current round number. This domain is large enough that any non-uniformity caused by taking the modulus in the next step is [entirely negligible](https://github.com/ethereum/consensus-specs/pull/576#issuecomment-463293660).
2. Use `pivot` to find another index in the list of validators, `flip`, which is `pivot - index` accounting for wrap-around in the list.
3. Calculate a single pseudo-random bit based on the seed, the current round number, and some bytes from either `index` or `flip` depending on which is greater.
4. If our bit is zero, we keep `index` unchanged; if it is one, we set `index` to `flip`.

We are effectively swapping cards in a deck based on a deterministic algorithm.

The way that `position` is broken down is worth noting:
 - Bits 0-2 (3 bits) are used to select a single bit from the eight bits of `byte`.
 - Bits 3-7 (5 bits) are used to select a single byte from the thirty-two bytes of `source`.
 - Bits 8-39 (32 bits) are used in generating `source`. Note that the upper two bytes of this will always be zero in practice, due to limits on the number of active validators.

[`SHUFFLE_ROUND_COUNT`](/part3/config/preset#shuffle_round_count) is, and always has been, 90 in the mainnet configuration, as explained there.

See the [section on Shuffling](/part2/building_blocks/shuffling) for a more structured exposition and analysis of this algorithm (with diagrams!).

In practice, full beacon node implementations will run this once per epoch using an optimised version that shuffles the whole list, and cache the result of that for the epoch.

|||
|-|-|
| Used&nbsp;by | [`compute_committee()`](#def_compute_committee), [`compute_proposer_index()`](#def_compute_proposer_index), [`get_next_sync_committee_indices()`](/part3/helper/accessors#def_get_next_sync_committee_indices) |
| Uses | [`bytes_to_uint64()`](/part3/helper/math#def_bytes_to_uint64) |
| See&nbsp;also | [`SHUFFLE_ROUND_COUNT`](/part3/config/preset#shuffle_round_count) |

#### `compute_proposer_index`

<a id="def_compute_proposer_index"></a>

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

There is exactly one beacon block proposer per slot, selected randomly from among all the active validators. The seed parameter is set in [`get_beacon_proposer_index`](/part3/helper/accessors#get_beacon_proposer_index) based on the epoch and slot. Note that there is a small but finite probability of the same validator being called on to propose a block more than once in an epoch.

A validator's chance of being the proposer is [weighted](https://github.com/ethereum/consensus-specs/pull/772) by its effective balance: a validator with a 32 Ether effective balance is twice as likely to be chosen as a validator with a 16 Ether effective balance.

[TODO: link to Effective Balance]::

To account for the need to weight by effective balance, this function implements as a try-and-increment algorithm. A counter `i` starts at zero. This counter does double duty:
 - First `i` is used to uniformly select a candidate proposer with probability $1/N$ where, $N$ is the number of active validators. This is done by using the [`compute_shuffled_index`](#compute_shuffled_index) routine to shuffle index `i` to a new location, which is then the `candidate_index`.
 - Then `i` is used to generate a pseudo-random byte using the hash function as a seeded PRNG with at least 256 bits of output. The lower 5 bits of `i` select a byte in the hash function, and the upper bits salt the seed. (An obvious optimisation is that the output of the hash changes only once every 32 iterations.)

The `if` test is where the weighting by effective balance is done. If the candidate has `MAX_EFFECTIVE_BALANCE`, it will always pass this test and be returned as the proposer. If the candidate has a fraction of `MAX_EFFECTIVE_BALANCE` then that fraction is the probability of being returned as proposer.

If the candidate is not chosen, then `i` is incremented and we try again. Since the minimum effective balance is half of the maximum, then this ought to terminate fairly swiftly. In the worst case, all validators have 16 Ether effective balance and the chance of having to do another iteration is 50%, in which case there is a one in a million chance of having to do 20 iterations.

Note that this dependence on the validators' effective balances, which are updated at the end of each epoch, means that proposer assignments are valid [only in the current epoch](https://github.com/ethereum/consensus-specs/pull/772#issuecomment-475574357). This is different from attestation committee assignments, which are valid with a one epoch look-ahead.

|||
|-|-|
| Used&nbsp;by | [`get_beacon_proposer_index()`](/part3/helper/accessors#def_get_beacon_proposer_index) |
| Uses | [`compute_shuffled_index()`](#def_compute_shuffled_index) |
| See&nbsp;also | [`MAX_EFFECTIVE_BALANCE`](/part3/config/preset#max_effective_balance) |

#### `compute_committee`

<a id="def_compute_committee"></a>

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

`compute_committee` is used by [`get_beacon_committee()`](/part3/helper/accessors#get_beacon_committee) to find the specific members of one of the committees at a slot.

Every epoch, a fresh set of committees is generated; during an epoch, the committees are stable.

Looking at the parameters in reverse order:
 - `count` is the total number of committees in an epoch. This is `SLOTS_PER_EPOCH` times the output of [`get_committee_count_per_slot()`](/part3/helper/accessors#def_get_committee_count_per_slot).
 - `index` is the committee number within the epoch, running from `0` to `count - 1`.
 - `seed` is the seed value for computing the pseudo-random shuffling, based on the epoch number and a domain parameter ([`get_beacon_committee()`](/part3/helper/accessors#def_get_beacon_committee) uses [`DOMAIN_BEACON_ATTESTER`](/part3/config/constants#domain_beacon_attester)).
 - `indices` is the list of validators eligible for inclusion in committees, namely the whole list of indices of active validators.

Random sampling among the validators is done by taking a contiguous slice of array indices from `start` to `end` and seeing where each one gets shuffled to by `compute_shuffled_index()`. Note that `ValidatorIndex(i)` is a type-cast in the above: it just turns `i` into a [ValidatorIndex](/part3/config/types#validatorindex) type for input into the shuffling. The output value of the shuffling is then used as an index into the `indices` list. There is much here that client implementations will optimise with caching and batch operations.

It may not be immediately obvious, but not all committees returned will be the same size (they can vary by one), and every validator in `indices` will be a member of exactly one committee. As we increment `index` from zero, clearly `start` for `index == j + 1` is `end` for `index == j`, so there are no gaps. In addition, the highest `index` is `count - 1`, so every validator in `indices` finds its way into a committee.[^fn_formal_verif_committee_size]

[^fn_formal_verif_committee_size]: Also not immediately obvious is that there is a subtle issue with committee sizes that was [discovered by formal verification](https://github.com/ethereum/consensus-specs/issues/2500), although, given the max supply of ETH it will never be triggered.

This method of selecting committees is light client friendly. Light clients can compute only the committees that they are interested in without needing to deal with the entire validator set. See the [section on Shuffling](/part2/building_blocks/shuffling) for explanation of how this works.

Sync committees are assigned by a [different process](/part3/helper/accessors#get_next_sync_committee_indices) that is more akin to repeatedly performing [`compute_proposer_index()`](#def_compute_proposer_index).

|||
|-|-|
| Used&nbsp;by | [`get_beacon_committee`](/part3/helper/accessors#get_beacon_committee) |
| Uses | [`compute_shuffled_index()`](#compute_shuffled_index) |

#### `compute_epoch_at_slot`

<a id="def_compute_epoch_at_slot"></a>

```python
def compute_epoch_at_slot(slot: Slot) -> Epoch:
    """
    Return the epoch number at ``slot``.
    """
    return Epoch(slot // SLOTS_PER_EPOCH)
```

This is trivial enough that I won't explain it. But note that it does rely on [`GENESIS_SLOT`](/part3/config/constants#miscellaneous) and [`GENESIS_EPOCH`](/part3/config/constants#miscellaneous) being zero. The more pernickety among us might prefer it to read,

    return GENESIS_EPOCH + Epoch((slot - GENESIS_SLOT) // SLOTS_PER_EPOCH)

#### `compute_start_slot_at_epoch`

<a id="def_compute_start_slot_at_epoch"></a>

```python
def compute_start_slot_at_epoch(epoch: Epoch) -> Slot:
    """
    Return the start slot of ``epoch``.
    """
    return Slot(epoch * SLOTS_PER_EPOCH)
```

Maybe should read,

    return GENESIS_SLOT + Slot((epoch - GENESIS_EPOCH) * SLOTS_PER_EPOCH))

|||
|-|-|
| Used&nbsp;by | [`get_block_root()`](/part3/helper/accessors#def_get_block_root) |
| See&nbsp;also | [`SLOTS_PER_EPOCH`](/part3/config/preset#slots_per_epoch), [`GENESIS_SLOT`](/part3/config/constants#genesis_slot), [`GENESIS_EPOCH`](/part3/config/constants#genesis_epoch) |

#### `compute_activation_exit_epoch`

<a id="def_compute_activation_exit_epoch"></a>

```python
def compute_activation_exit_epoch(epoch: Epoch) -> Epoch:
    """
    Return the epoch during which validator activations and exits initiated in ``epoch`` take effect.
    """
    return Epoch(epoch + 1 + MAX_SEED_LOOKAHEAD)
```

When queuing validators for activation or exit in [`process_registry_updates()`](/part3/transition/epoch#def_process_registry_updates) and [`initiate_validator_exit()`](/part3/helper/mutators#def_initiate_validator_exit) respectively, the activation or exit is delayed until the next epoch, plus [`MAX_SEED_LOOKAHEAD`](/part3/config/preset#time-parameters) epochs, currently 4.

See [`MAX_SEED_LOOKAHEAD`](/part3/config/preset#time-parameters) for the details, but in short it is designed to make it extremely hard for an attacker to manipulate the make up of committees via activations and exits.

|||
|-|-|
| Used&nbsp;by | [`initiate_validator_exit()`](/part3/helper/mutators#def_initiate_validator_exit), [`process_registry_updates()`](/part3/transition/epoch#def_process_registry_updates) |
| See&nbsp;also | [`MAX_SEED_LOOKAHEAD`](/part3/config/preset#time-parameters) |

#### `compute_fork_data_root`

<a id="def_compute_fork_data_root"></a>

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

It is used by [`compute_fork_digest()`](#def_compute_fork_digest) and [`compute_domain()`](#def_compute_domain).

|||
|-|-|
| Used&nbsp;by | [`compute_fork_digest()`](#def_compute_fork_digest), [`compute_domain()`](#def_compute_domain) |
| Uses | [`hash_tree_root()`](/part3/helper/crypto#hash_tree_root) |
| See&nbsp;also | [`ForkData`](/part3/containers/dependencies#forkdata) |

#### `compute_fork_digest`

<a id="def_compute_fork_digest"></a>

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

`compute_fork_digest()` is used extensively in the [Ethereum 2.0 networking specification](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/p2p-interface.md#how-should-fork-version-be-used-in-practice) to distinguish between independent beacon chain networks or forks: it is important that activity on one chain does not interfere with other chains.

|||
|-|-|
| Uses | [`compute_fork_data_root()`](#def_compute_fork_data_root) |
| See&nbsp;also | [`ForkDigest`](/part3/config/types#forkdigest) |

#### `compute_domain`

<a id="def_compute_domain"></a>

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
 3. And, [now](https://github.com/ethereum/consensus-specs/pull/1614), the root hash of the validator Merkle tree at Genesis is included. Along with the fork version this gives a unique identifier for our chain.

This function is mainly used by [`get_domain()`](/part3/helper/accessors#def_get_domain). It is also used in [deposit processing](/part3/transition/block#deposits), in which case `fork_version` and `genesis_validators_root` take their default values since deposits are valid across forks.

Fun fact: this function looks pretty simple, but [I found a subtle bug](https://github.com/ethereum/consensus-specs/issues/1582) in the way tests were generated in a previous implementation.

|||
|-|-|
| Used&nbsp;by | [`get_domain()`](/part3/helper/accessors#def_get_domain), [`process_deposit()`](/part3/transition/block#def_process_deposit) |
| Uses | [`compute_fork_data_root()`](#def_compute_fork_data_root) |
| See&nbsp;also | [`Domain`](/part3/config/types#domain), [`DomainType`](/part3/config/constants#domain-types) [`GENESIS_FORK_VERSION`](/part3/config/configuration#genesis_fork_version) |

#### `compute_signing_root`

<a id="def_compute_signing_root"></a>

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
 1. calculate the [hash tree root](/part3/helper/crypto#hash_tree_root) of the object;
 2. combine the hash tree root with the [`Domain`](/part3/config/types#domain) inside a temporary [`SigningData`](/part3/containers/dependencies#signingdata) object;
 3. return the hash tree root of that, which is the data to be signed.

[TODO: link to hash tree root explanation]::

The `domain` is usually the output of [`get_domain()`](/part3/helper/accessors#def_get_domain), which mixes in the [cryptographic domain](/part3/config/constants#domain-types), the fork version, and the genesis validators root to the message hash. For deposits, it is the output of [`compute_domain()`](#def_compute_domain), ignoring the fork version and genesis validators root.

This is exactly equivalent to adding the domain to an object and taking the hash tree root of the whole thing. Indeed, this function used to be called [`compute_domain_wrapper_root()`](https://github.com/ethereum/consensus-specs/blob/502ee295379c1f3c5c3649e12330fb5be5d7a83b/specs/core/0_beacon-chain.md#compute_domain_wrapper_root).

|||
|-|-|
| Used&nbsp;by | Many places |
| Uses | [`hash_tree_root()`](/part3/helper/crypto#hash_tree_root) |
| See&nbsp;also | [`SigningData`](/part3/containers/dependencies#signingdata), [`Domain`](/part3/config/types#domain) |

### Participation flags <!-- /part3/helper/participation -->

These two simple utilities were added in the Altair upgrade.

#### `add_flag`

<a id="def_add_flag"></a>

```python
def add_flag(flags: ParticipationFlags, flag_index: int) -> ParticipationFlags:
    """
    Return a new ``ParticipationFlags`` adding ``flag_index`` to ``flags``.
    """
    flag = ParticipationFlags(2**flag_index)
    return flags | flag
```

This is simple and self-explanatory. The `2**flag_index` is a bit Pythony. In a C-like language it would use a bit-shift:

    1 << flag_index

|||
|-|-|
| Used&nbsp;by | [`process_attestation()`](/part3/transition/block#def_process_attestation), [`translate_participation()`](/part3/altair-fork#def_translate_participation) |
| See&nbsp;also | [`ParticipationFlags`](/part3/config/types#participationflags) |

#### `has_flag`

<a id="def_has_flag"></a>

```python
def has_flag(flags: ParticipationFlags, flag_index: int) -> bool:
    """
    Return whether ``flags`` has ``flag_index`` set.
    """
    flag = ParticipationFlags(2**flag_index)
    return flags & flag == flag
```

Move along now, nothing to see here.

|||
|-|-|
| Used&nbsp;by | [`get_unslashed_participating_indices()`](/part3/helper/accessors#def_get_unslashed_participating_indices), [`process_attestation()`](/part3/transition/block#def_process_attestation) |
| See&nbsp;also | [`ParticipationFlags`](/part3/config/types#participationflags) |

### Beacon State Accessors <!-- /part3/helper/accessors -->

As the name suggests, these functions access the beacon state to calculate various useful things, without modifying it.

#### `get_current_epoch`

<a id="def_get_current_epoch"></a>

```python
def get_current_epoch(state: BeaconState) -> Epoch:
    """
    Return the current epoch.
    """
    return compute_epoch_at_slot(state.slot)
```

A getter for the current epoch, as calculated by [`compute_epoch_at_slot()`](/part3/helper/misc#def_compute_epoch_at_slot).

|||
|-|-|
| Used&nbsp;by | Everywhere |
| Uses | [`compute_epoch_at_slot()`](/part3/helper/misc#def_compute_epoch_at_slot) |

#### `get_previous_epoch`

<a id="def_get_previous_epoch"></a>

```python
def get_previous_epoch(state: BeaconState) -> Epoch:
    """`
    Return the previous epoch (unless the current epoch is ``GENESIS_EPOCH``).
    """
    current_epoch = get_current_epoch(state)
    return GENESIS_EPOCH if current_epoch == GENESIS_EPOCH else Epoch(current_epoch - 1)
```

Return the previous epoch number as an [`Epoch`](/part3/config/types#epoch) type. Returns [`GENESIS_EPOCH`](/part3/config/constants#genesis_epoch) if we are in the `GENESIS_EPOCH`, since it has no prior, and we don't do negative numbers.

|||
|-|-|
| Used&nbsp;by | Everywhere |
| Uses | [`get_current_epoch()`](#def_get_current_epoch) |
| See&nbsp;also | [`GENESIS_EPOCH`](/part3/config/constants#genesis_epoch) |

#### `get_block_root`

<a id="def_get_block_root"></a>

```python
def get_block_root(state: BeaconState, epoch: Epoch) -> Root:
    """
    Return the block root at the start of a recent ``epoch``.
    """
    return get_block_root_at_slot(state, compute_start_slot_at_epoch(epoch))
```

The Casper FFG part of consensus deals in [`Checkpoint`](/part3/containers/dependencies#checkpoint)s that are the first slot of an epoch. `get_block_root` is a specialised version of [`get_block_root_at_slot()`](#get_block_root_at_slot) that returns the block root of the checkpoint, given only an epoch.

|||
|-|-|
| Used&nbsp;by | [`get_attestation_participation_flag_indices()`](#def_get_attestation_participation_flag_indices), [`weigh_justification_and_finalization()`](/part3/transition/epoch#def_weigh_justification_and_finalization) |
| Uses | [`get_block_root_at_slot()`](#def_get_block_root_at_slot), [`compute_start_slot_at_epoch()`](/part3/helper/misc#def_compute_start_slot_at_epoch) |
| See&nbsp;also | [`Root`](/part3/config/types#root) |

#### `get_block_root_at_slot`

<a id="def_get_block_root_at_slot"></a>

```python
def get_block_root_at_slot(state: BeaconState, slot: Slot) -> Root:
    """
    Return the block root at a recent ``slot``.
    """
    assert slot < state.slot <= slot + SLOTS_PER_HISTORICAL_ROOT
    return state.block_roots[slot % SLOTS_PER_HISTORICAL_ROOT]
```

Recent block roots are stored in a circular list in state, with a length of [`SLOTS_PER_HISTORICAL_ROOT`](/part3/config/preset#slots_per_historical_root) (currently ~27 hours).

`get_block_root_at_slot()` is used by [`get_attestation_participation_flag_indices()`](#def_get_attestation_participation_flag_indices) to check whether an attestation has voted for the correct chain head. It is also used in [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) to find the block that the sync committee is signing-off on.

|||
|-|-|
| Used&nbsp;by | [`get_block_root()`](#def_get_block_root), [`get_attestation_participation_flag_indices()`](#def_get_attestation_participation_flag_indices), [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) |
| See&nbsp;also | [`SLOTS_PER_HISTORICAL_ROOT`](/part3/config/preset#slots_per_historical_root), [`Root`](/part3/config/types#root) |

#### `get_randao_mix`

<a id="def_get_randao_mix"></a>

```python
def get_randao_mix(state: BeaconState, epoch: Epoch) -> Bytes32:
    """
    Return the randao mix at a recent ``epoch``.
    """
    return state.randao_mixes[epoch % EPOCHS_PER_HISTORICAL_VECTOR]
```

Randao mixes are stored in a circular list of length [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector). They are used when calculating the [seed](#get_seed) for assigning beacon proposers and committees.

|||
|-|-|
| Used&nbsp;by | [`get_seed`](#def_get_seed), [`process_randao_mixes_reset()`](/part3/transition/epoch#def_process_randao_mixes_reset) , [`process_randao()`](/part3/transition/block#def_process_randao) |
| See&nbsp;also | [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector) |

#### `get_active_validator_indices`

<a id="def_get_active_validator_indices"></a>

```python
def get_active_validator_indices(state: BeaconState, epoch: Epoch) -> Sequence[ValidatorIndex]:
    """
    Return the sequence of active validator indices at ``epoch``.
    """
    return [ValidatorIndex(i) for i, v in enumerate(state.validators) if is_active_validator(v, epoch)]
```

Steps through the entire list of validators and returns the list of only the active ones. That is, the list of validators that have been activated but not exited as determined by [`is_active_validator()`](/part3/helper/predicates#def_is_active_validator).

This function is heavily used and I'd expect it to be [memoised](https://en.wikipedia.org/wiki/Memoization) in practice.

|||
|-|-|
| Used&nbsp;by | Many places |
| Uses | [`is_active_validator()`](/part3/helper/predicates#def_is_active_validator) |

#### `get_validator_churn_limit`

<a id="def_get_validator_churn_limit"></a>

```python
def get_validator_churn_limit(state: BeaconState) -> uint64:
    """
    Return the validator churn limit for the current epoch.
    """
    active_validator_indices = get_active_validator_indices(state, get_current_epoch(state))
    return max(MIN_PER_EPOCH_CHURN_LIMIT, uint64(len(active_validator_indices)) // CHURN_LIMIT_QUOTIENT)
```

The "churn limit" applies when [activating](/part3/transition/epoch#registry-updates) and [exiting](/part3/helper/mutators#initiate_validator_exit) validators and acts as a [rate-limit](https://notes.ethereum.org/@vbuterin/rkhCgQteN#Exiting) on changes to the validator set. The value returned by this function provides the number of validators that may become active in an epoch, and the number of validators that may exit in an epoch.

Some small amount of churn is always allowed, set by [`MIN_PER_EPOCH_CHURN_LIMIT`](/part3/config/configuration#min_per_epoch_churn_limit), and the amount of per-epoch churn allowed increases by one for every extra [`CHURN_LIMIT_QUOTIENT`](/part3/config/configuration#churn_limit_quotient) validators that are currently active (once the minimum has been exceeded).

In concrete terms, this means that up to four validators can enter or exit the active validator set each epoch (900 per day) until we have 327,680 active validators, at which point the limit rises to five.

|||
|-|-|
| Used&nbsp;by | [`initiate_validator_exit()`](/part3/helper/mutators#def_initiate_validator_exit), [`process_registry_updates()`](/part3/transition/epoch#def_process_registry_updates) |
| Uses | [`get_active_validator_indices()`](#def_get_active_validator_indices) |
| See&nbsp;also | [`MIN_PER_EPOCH_CHURN_LIMIT`](/part3/config/configuration#min_per_epoch_churn_limit), [`CHURN_LIMIT_QUOTIENT`](/part3/config/configuration#churn_limit_quotient) |

#### `get_seed`

<a id="def_get_seed"></a>

```python
def get_seed(state: BeaconState, epoch: Epoch, domain_type: DomainType) -> Bytes32:
    """
    Return the seed at ``epoch``.
    """
    mix = get_randao_mix(state, Epoch(epoch + EPOCHS_PER_HISTORICAL_VECTOR - MIN_SEED_LOOKAHEAD - 1))  # Avoid underflow
    return hash(domain_type + uint_to_bytes(epoch) + mix)
```

Used in [`get_beacon_committee()`](#def_get_beacon_committee), [`get_beacon_proposer_index()`](#def_get_beacon_proposer_index), and [`get_next_sync_committee_indices()`](#def_get_next_sync_committee_indices) to provide the randomness for computing proposers and committees. `domain_type` is [`DOMAIN_BEACON_ATTESTER`](/part3/config/constants#domain_beacon_attester), [`DOMAIN_BEACON_PROPOSER`](/part3/config/constants#domain_beacon_proposer), and [`DOMAIN_SYNC_COMMITTEE`](/part3/config/constants#domain_sync_committee) respectively.

Randao mixes are stored in a circular list of length [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector). The seed for an epoch is based on the randao mix from [`MIN_SEED_LOOKAHEAD`](/part3/config/preset#min_seed_lookahead) epochs ago. This is to limit the forward visibility of randomness: see the explanation there.

The seed returned is not based only on the domain and the randao mix, but the epoch number is also mixed in. This is to handle the pathological case of no blocks being seen for more than two epochs, in which case we run out of randao updates. That could lock in forever a non-participating set of block proposers. Mixing in the epoch number means that fresh committees and proposers can continue to be selected.

|||
|-|-|
| Used&nbsp;by | [`get_beacon_committee()`](#def_get_beacon_committee), [`get_beacon_proposer_index()`](#def_get_beacon_proposer_index), [`get_next_sync_committee_indices()`](#def_get_next_sync_committee_indices) |
| Uses | [`get_randao_mix()`](#def_get_randao_mix) |
| See&nbsp;also | [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector), [`MIN_SEED_LOOKAHEAD`](/part3/config/preset#min_seed_lookahead) |

#### `get_committee_count_per_slot`

<a id="def_get_committee_count_per_slot"></a>

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

Every slot in a given epoch has the same number of beacon committees, as calculated by this function.

As far as the LMD GHOST consensus protocol is concerned, all the validators attesting in a slot effectively act as a single large committee. However, organising them into multiple committees gives two benefits.
 1. Having multiple smaller committees reduces the load on the aggregators that collect and aggregate the attestations from committee members. This is important, as validating the signatures and aggregating them takes time. The downside is that blocks need to be larger, as, in the best case, there are up to 64 aggregate attestations to store per block rather than a single large aggregate signature over all attestations.
 2. It maps well onto the future plans for data shards, when each committee will be responsible for committing to a block on one shard in addition to its current duties.

There is always at least one committee per slot, and never more than [`MAX_COMMITTEES_PER_SLOT`](/part3/config/preset#max_committees_per_slot), currently 64.

Subject to these constraints, the actual number of committees per slot is $N / 4096$, where $N$ is the total number of active validators.

The intended behaviour looks like this:
 - The ideal case is that there are [`MAX_COMMITTEES_PER_SLOT`](/part3/config/preset#max_committees_per_slot) = 64 committees per slot. This maps to one committee per slot per shard once data sharding has been implemented. These committees will be responsible for voting on shard crosslinks. There must be at least 262,144 active validators to achieve this.
 - If there are fewer active validators, then the number of committees per shard is reduced below 64 in order to maintain a minimum committee size of [`TARGET_COMMITTEE_SIZE`](/part3/config/preset#target_committee_size) = 128. In this case, not every shard will get crosslinked at every slot (once sharding is in place).
 - Finally, only if the number of active validators falls below 4096 will the committee size be reduced to less than 128. With so few validators, the chain has no meaningful security in any case.

|||
|-|-|
| Used&nbsp;by | [`get_beacon_committee()`](#def_get_beacon_committee), [`process_attestation()`](/part3/transition/block#def_process_attestation) |
| Uses | [`get_active_validator_indices()`](/part3/helper/accessors#def_get_active_validator_indices) |
| See&nbsp;also | [`MAX_COMMITTEES_PER_SLOT`](/part3/config/preset#max_committees_per_slot), [`TARGET_COMMITTEE_SIZE`](/part3/config/preset#target_committee_size) |

#### `get_beacon_committee`

<a id="def_get_beacon_committee"></a>

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

Beacon committees vote on the beacon block at each slot via attestations. There are up to [`MAX_COMMITTEES_PER_SLOT`](/part3/config/preset#max_committees_per_slot) beacon committees per slot, and each committee is active exactly once per epoch.

This function returns the list of committee members given a slot number and an index within that slot to select the desired committee, relying on [`compute_committee()`](/part3/helper/misc#def_compute_committee) to do the heavy lifting.

Note that, since this uses [`get_seed()`](#def_get_seed), we can obtain committees only up to [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector) epochs into the past (minus [`MIN_SEED_LOOKAHEAD`](/part3/config/preset#min_seed_lookahead)).

`get_beacon_committee` is used by [`get_attesting_indices()`](#def_get_attesting_indices) and [`process_attestation()`](/part3/transition/block#def_process_attestation) when processing attestations coming from a committee, and by validators when checking their [committee assignments](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/validator.md#validator-assignments) and [aggregation duties](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/phase0/validator.md#aggregation-selection).

|||
|-|-|
| Used&nbsp;by | [`get_attesting_indices()`](/part3/helper/accessors#def_get_attesting_indices), [`process_attestation()`](/part3/transition/block#def_process_attestation) |
| Uses | [`get_committee_count_per_slot()`](#def_get_committee_count_per_slot), [`compute_committee()`](/part3/helper/misc#def_compute_committee), [`get_active_validator_indices()`](/part3/helper/accessors#def_get_active_validator_indices), [`get_seed()`](#def_get_seed) |
| See&nbsp;also | [`MAX_COMMITTEES_PER_SLOT`](/part3/config/preset#max_committees_per_slot), [`DOMAIN_BEACON_ATTESTER`](/part3/config/constants#domain_beacon_attester) |

#### `get_beacon_proposer_index`

<a id="def_get_beacon_proposer_index"></a>

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

Each slot, exactly one of the active validators is randomly chosen to be the proposer of the beacon block for that slot. The probability of being selected is weighted by the validator's effective balance in [`compute_proposer_index()`](/part3/helper/misc#def_compute_proposer_index).

The chosen block proposer does not need to be a member of one of the beacon committees for that slot: it is chosen from the entire set of active validators for that epoch.

The randao [is updated](/part3/transition/block#randao) with every block that is processed. To ensure that we are able to choose a different proposer at every slot, even if a block has not been received, the slot number is mixed into the seed using a hash.

There is a chance of the same proposer being selected in two consecutive slots, or more than once per epoch: if every validator has the same effective balance, then the probability of being selected in a particular slot is simply $\frac{1}{N}$ independent of any other slot, where $N$ is the number of active validators in the epoch corresponding to the slot.

|||
|-|-|
| Used&nbsp;by | [`slash_validator()`](/part3/helper/mutators#def_slash_validator), [`process_block_header()`](/part3/transition/block#def_process_block_header), [`process_randao()`](/part3/transition/block#def_process_randao), [`process_attestation()`](/part3/transition/block#def_process_attestation), [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) |
| Uses | [`get_seed(#def_get_seed)`](), [`uint_to_bytes()`](/part3/helper/math#uint_to_bytes), [`get_active_validator_indices()`](/part3/helper/accessors#def_get_active_validator_indices), [`compute_proposer_index()`](/part3/helper/misc#def_compute_proposer_index) |

#### `get_total_balance`

<a id="def_get_total_balance"></a>

```python
def get_total_balance(state: BeaconState, indices: Set[ValidatorIndex]) -> Gwei:
    """
    Return the combined effective balance of the ``indices``.
    ``EFFECTIVE_BALANCE_INCREMENT`` Gwei minimum to avoid divisions by zero.
    Math safe up to ~10B ETH, afterwhich this overflows uint64.
    """
    return Gwei(max(EFFECTIVE_BALANCE_INCREMENT, sum([state.validators[index].effective_balance for index in indices])))
```

A simple utility that returns the total balance of all validators in the list, `indices`, passed in.

As an aside, there is an interesting example of some fragility in the spec lurking here. This function [used to](https://github.com/ethereum/consensus-specs/blame/8c532c0e9ad1e6016a1ef3f36012cfd9b3870c13/specs/phase0/beacon-chain.md#L1002) return a minimum of 1 Gwei to avoid a potential division by zero in the calculation of rewards and penalties. However, the rewards calculation was [modified](https://github.com/ethereum/consensus-specs/pull/1635) to avoid a possible integer overflow condition, without modifying this function, which re-introduced the possibility of a [division by zero](https://github.com/ethereum/consensus-specs/issues/1663). This was later [fixed](https://github.com/ethereum/consensus-specs/pull/1664) by returning a minimum of [`EFFECTIVE_BALANCE_INCREMENT`](/part3/config/preset#effective_balance_increment). The [formal verification](https://github.com/ConsenSys/eth2.0-dafny) of the specification is helpful in avoiding issues like this.

|||
|-|-|
| Used&nbsp;by | [`get_total_active_balance()`](#def_get_total_active_balance), [`get_flag_index_deltas()`](#def_get_flag_index_deltas), [`process_justification_and_finalization()`](/part3/transition/epoch#def_process_justification_and_finalization) |
| Uses | |
| See&nbsp;also | [`EFFECTIVE_BALANCE_INCREMENT`](/part3/config/preset#effective_balance_increment) |

#### `get_total_active_balance`

<a id="def_get_total_active_balance"></a>

```python
def get_total_active_balance(state: BeaconState) -> Gwei:
    """
    Return the combined effective balance of the active validators.
    Note: ``get_total_balance`` returns ``EFFECTIVE_BALANCE_INCREMENT`` Gwei minimum to avoid divisions by zero.
    """
    return get_total_balance(state, set(get_active_validator_indices(state, get_current_epoch(state))))
```

Uses [`get_total_balance()`](#def_get_total_balance) to calculate the sum of the effective balances of all active validators in the current epoch.

This quantity is frequently used in the spec. For example, Casper FFG uses the total active balance to judge whether the 2/3 majority threshold of attestations has been reached in [justification and finalisation](/part3/transition/epoch#justification-and-finalization). And it is a fundamental part of the calculation of rewards and penalties. The [base reward](/part3/transition/epoch#def_get_base_reward_per_increment) is proportional to the reciprocal of the square root of the total active balance. Thus, validator rewards are higher when little balance is at stake (few active validators) and lower when much balance is at stake (many active validators).

Since it is calculated from effective balances, total active balance does not change during an epoch, so is a great candidate for being cached.

|||
|-|-|
| Used&nbsp;by | [`get_flag_index_deltas()`](#def_get_flag_index_deltas), [`process_justification_and_finalization()`](/part3/transition/epoch#def_process_justification_and_finalization), [`get_base_reward_per_increment()`](/part3/transition/epoch#def_get_base_reward_per_increment), [`process_slashings()`](/part3/transition/epoch#def_process_slashings), [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) |
| Uses | [`get_total_balance()`](#def_get_total_balance), [`get_active_validator_indices()`](/part3/helper/accessors#def_get_active_validator_indices) |

#### `get_domain`

<a id="def_get_domain"></a>

```python
def get_domain(state: BeaconState, domain_type: DomainType, epoch: Epoch=None) -> Domain:
    """
    Return the signature domain (fork version concatenated with domain type) of a message.
    """
    epoch = get_current_epoch(state) if epoch is None else epoch
    fork_version = state.fork.previous_version if epoch < state.fork.epoch else state.fork.current_version
    return compute_domain(domain_type, fork_version, state.genesis_validators_root)
```

`get_domain()` pops up whenever signatures need to be verified, since a [`DomainType`](/part3/config/types#domaintype) is always mixed in to the signed data. For the science behind domains, see [Domain types](/part3/config/constants#domain-types) and [`compute_domain()`](/part3/helper/misc#def_compute_domain).

With the exception of `DOMAIN_DEPOSIT`, domains are always combined with the fork [version](/part3/config/types#version) before being used in signature generation. This is to distinguish messages from different chains, and ensure that validators don't get slashed if they choose to participate on two independent forks. (That is, deliberate forks, aka hard-forks. Participating on both branches of temporary consensus forks is punishable: that's basically the whole point of slashing.)

|||
|-|-|
| Used&nbsp;by | [`is_valid_indexed_attestation()`](/part3/helper/predicates#def_is_valid_indexed_attestation), [`verify_block_signature()`](/part3/transition#def_verify_block_signature), [`process_randao()`](/part3/transition/block#def_process_randao), [`process_proposer_slashing()`](/part3/transition/block#def_process_proposer_slashing), [`process_voluntary_exit()`](/part3/transition/block#def_process_voluntary_exit), [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) |
| Uses | [`compute_domain()`](/part3/helper/misc#def_compute_domain) |
| See&nbsp;also | [`DomainType`](/part3/config/types#domaintype), [Domain types](/part3/config/constants#domain-types) |

#### `get_indexed_attestation`

<a id="def_get_indexed_attestation"></a>

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

Lists of validators within committees occur in two forms in the specification.
 - They can be compressed into a bitlist, in which each bit represents the presence or absence of a validator from a particular committee. The committee is referenced by slot, and committee index within that slot. This is how sets of validators are represented in [`Attestation`](/part3/containers/operations#attestation)s.
 - Or they can be listed explicitly by their validator indices, as in [`IndexedAttestation`](/part3/containers/dependencies#indexedattestation)s. Note that the list of indices is sorted: an attestation is [invalid](/part3/helper/predicates#is_valid_indexed_attestation) if not.

`get_indexed_attestation()` converts from the former representation to the latter. The slot number and the committee index are provided by the [`AttestationData`](/part3/containers/dependencies#attestationdata) and are used to reconstruct the committee members via [`get_beacon_committee()`](/part3/helper/accessors#def_get_beacon_committee). The supplied bitlist will have come from an `Attestation`.

Attestations are aggregatable, which means that attestations from multiple validators making the same vote can be rolled up into a single attestation through the magic of BLS signature aggregation. However, in order to be able to verify the signature later, a record needs to be kept of which validators actually contributed to the attestation. This is so that those validators' public keys can be aggregated to match the construction of the signature.

The conversion from the bit-list format to the list format is performed by [`get_attesting_indices()`](#get_attesting_indices), below.

|||
|-|-|
| Used&nbsp;by | [`process_attestation()`](/part3/transition/block#def_process_attestation) |
| Uses | [`get_attesting_indices()`](#def_get_attesting_indices) |
| See&nbsp;also | [`Attestation`](/part3/containers/operations#attestation), [`IndexedAttestation`](/part3/containers/dependencies#indexedattestation) |

#### `get_attesting_indices`

<a id="def_get_attesting_indices"></a>

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

As described under [`get_indexed_attestation()`](#def_get_indexed_attestation), lists of validators come in two forms. This routine converts from the compressed form, in which validators are represented as a subset of a committee with their presence or absence indicated by a 1 or 0 bit respectively, to an explicit list of [`ValidatorIndex`](/part3/config/types#validatorindex) types.

|||
|-|-|
| Used&nbsp;by | [`get_indexed_attestation()`](#def_get_indexed_attestation), [`process_attestation()`](/part3/transition/block#def_process_attestation), [`translate_participation()`](/part3/altair-fork#def_translate_participation) |
| Uses | [`get_beacon_committee()`](#def_get_beacon_committee) |
| See&nbsp;also | [`AttestationData`](/part3/containers/dependencies#attestationdata), [`IndexedAttestation`](/part3/containers/dependencies#indexedattestation) |

#### `get_next_sync_committee_indices`

<a id="def_get_next_sync_committee_indices"></a>

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

`get_next_sync_committee_indices()` is used to select the subset of validators that will make up a sync committee. The committee size is [`SYNC_COMMITTEE_SIZE`](/part3/config/preset#sync_committee_size), and the committee is allowed to contain duplicates, that is, the same validator more than once. This is to [handle gracefully](https://github.com/ethereum/consensus-specs/pull/2130#discussion_r532499943) the situation of there being fewer active validators than `SYNC_COMMITTEE_SIZE`.

Similarly to being chosen to propose a block, the probability of any validator being selected for a sync committee is proportional to its effective balance. Thus, the algorithm is almost the same as that of [`compute_proposer_index()`](/part3/helper/misc#def_compute_proposer_index), except that this one exits only after finding `SYNC_COMMITTEE_SIZE` members, rather than exiting as soon as a candidate is found. Both routines use the try-and-increment method to weight the probability of selection with the validators' effective balances.

It's fairly clear why block proposers are selected with a probability proportional to their effective balances: block production is subject to slashing, and proposers with less at stake have less to slash, so we reduce their influence accordingly. It is not so clear why the probability of being in a sync committee is also proportional to a validator's effective balance; sync committees are not subject to slashing. It has to do with keeping calculations for [light clients simple](https://github.com/ethereum/consensus-specs/pull/2130#discussion_r524848644). We don't want to burden light clients with summing up validators' balances to judge whether a 2/3 supermajority of stake in the committee has voted for a block. Ideally, they can just count the participation flags. To make approach this somewhat reliable, we weight the probability of participation with the validator's effective balance.

|||
|-|-|
| Used&nbsp;by | [`get_next_sync_committee()`](#def_get_next_sync_committee) |
| Uses | [`get_active_validator_indices()`](/part3/helper/accessors#def_get_active_validator_indices), [`get_seed()`](/part3/helper/accessors#def_get_seed), [`compute_shuffled_index()`](/part3/helper/misc#def_compute_shuffled_index), [`uint_to_bytes()`](/part3/helper/math#uint_to_bytes) |
| See&nbsp;also | [`SYNC_COMMITTEE_SIZE`](/part3/config/preset#sync_committee_size), [`compute_proposer_index()`](/part3/helper/misc#def_compute_proposer_index) |

#### `get_next_sync_committee`

> *Note*: The function `get_next_sync_committee` should only be called at sync committee period boundaries and when [upgrading state to Altair](/part3/altair-fork#upgrading-the-state).

The random seed that generates the sync committee is based on the number of the next epoch. [`get_next_sync_committee_indices()`](#def_get_next_sync_committee_indices) doesn't contain any check that the epoch corresponds to a sync-committee change boundary, which allowed the timing of the Altair upgrade to be more flexible. But a consequence is that you will get an incorrect committee if you call `get_next_sync_committee()` at the wrong time.

<a id="def_get_next_sync_committee"></a>

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

`get_next_sync_committee()` is a simple wrapper around [`get_next_sync_committee_indices()`](#def_get_next_sync_committee_indices) that packages everything up into a nice [`SyncCommittee`](/part3/containers/dependencies#synccommittee) object.

See the [`SyncCommittee`](/part3/containers/dependencies#synccommittee) type for an explanation of how the `aggregate_pubkey` is intended to be used.

|||
|-|-|
| Used&nbsp;by | [`process_sync_committee_updates()`](/part3/transition/epoch#def_process_sync_committee_updates), [`initialize_beacon_state_from_eth1()`](/part3/initialise#def_initialize_beacon_state_from_eth1), [`upgrade_to_altair()`](/part3/altair-fork#def_upgrade_to_altair) |
| Uses | [`get_next_sync_committee_indices()`](#def_get_next_sync_committee_indices), [`eth_aggregate_pubkeys()`](/part3/helper/crypto#def_eth_aggregate_pubkeys) |
| See&nbsp;also | [`SyncCommittee`](/part3/containers/dependencies#synccommittee) |

#### `get_unslashed_participating_indices`

<a id="def_get_unslashed_participating_indices"></a>

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

`get_unslashed_participating_indices()` returns the list of validators that made a timely attestation with the type [`flag_index`](/part3/config/constants#participation-flag-indices) during the `epoch` in question.

It is used with the `TIMELY_TARGET_FLAG_INDEX` flag in [`process_justification_and_finalization()`](/part3/transition/epoch#def_process_justification_and_finalization) to calculate the proportion of stake that voted for the candidate checkpoint in the current and previous epochs.

It is also used with the `TIMELY_TARGET_FLAG_INDEX` for applying inactivity penalties in [`process_inactivity_updates()`](/part3/transition/epoch#def_process_inactivity_updates) and [`get_inactivity_penalty_deltas()`](/part3/transition/epoch#def_get_inactivity_penalty_deltas). If a validator misses a correct target vote during an inactivity leak then it is considered not to have participated at all (it is not contributing anything useful).

And it is used in [`get_flag_index_deltas()`](#def_get_flag_index_deltas) for calculating rewards due for each type of correct vote.

Slashed validators are ignored. Once slashed, validators no longer receive rewards or participate in consensus, although they are subject to penalties until they have finally been exited.

|||
|-|-|
| Used&nbsp;by | [`get_flag_index_deltas()`](#def_get_flag_index_deltas), [`process_justification_and_finalization()`](/part3/transition/epoch#def_process_justification_and_finalization), [`process_inactivity_updates()`](/part3/transition/epoch#def_process_inactivity_updates), [`get_inactivity_penalty_deltas()`](/part3/transition/epoch#def_get_inactivity_penalty_deltas) |
| Uses | [`get_active_validator_indices()`](/part3/helper/accessors#def_get_active_validator_indices), [`has_flag()`](/part3/helper/participation#def_has_flag) |
| See&nbsp;also | [Participation flag indices](/part3/config/constants#participation-flag-indices) |

#### `get_attestation_participation_flag_indices`

<a id="def_get_attestation_participation_flag_indices"></a>

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

This is called by [`process_attestation()`](/part3/transition/block#def_process_attestation) during block processing, and is the heart of the mechanism for recording validators' votes as contained in their attestations. It filters the given attestation against the beacon state's current view of the chain, and returns [participation flag indices](/part3/config/constants#participation-flag-indices) only for the votes that are both correct and timely.

`data` is an [`AttestationData`](/part3/containers/dependencies#attestationdata) object that contains the source, target, and head votes of the validators that contributed to the attestation. The attestation may represent the votes of one or more validators.

`inclusion_delay` is the difference between the current slot on the beacon chain and the slot for which the attestation was created. For the block containing the attestation to be valid, `inclusion_delay` must be between [`MIN_ATTESTATION_INCLUSION_DELAY`](/part3/config/preset#min_attestation_inclusion_delay) and [`SLOTS_PER_EPOCH`](/part3/config/preset#slots_per_epoch) inclusive. In other words, attestations must be included in the next block, or in any block up to 32 slots later, after which they are ignored.

Since the attestation may be up to 32 slots old, it might have been generated in the current epoch or the previous epoch, so the first thing we do is to check the attestation's target vote epoch to see which epoch we should be looking at in the beacon state.

Next, we check whether each of the votes in the attestation are correct:
  - Does the attestation's source vote match what we believe to be the justified checkpoint in the epoch in question?
  - If so, does the attestation's target vote match the head block at the epoch's checkpoint, that is, the first slot of the epoch?
  - If so, does the attestation's head vote match what we believe to be the head block at the attestation's slot? Note that the slot may not contain a block &ndash; it may be a skip slot &ndash; in which case the last known block is considered to be the head.

These three build on each other, so that it is not possible to have a correct target vote without a correct source vote, and it is not possible to have a correct head vote without a correct target vote.

The `assert` statement is interesting. If an attestation does not have the correct source vote, the block containing it is invalid and is discarded. Having an incorrect source vote means that the block proposer disagrees with me about the last justified checkpoint, which is an irreconcilable difference.

[TODO: check the irreconcilable bit. Maybe explain it.]::

After checking the validity of the votes, the timeliness of each vote is checked. Let's take them in reverse order.
    - Correct head votes must be included immediately, that is, in the very next slot.
       - Head votes, used for LMD GHOST consensus, are not useful after one slot.
    - Correct target votes must be included within 32 slots, one epoch.
       - Target votes are useful at any time, but it is simpler if they don't span more than a couple of epochs, so 32 slots is a reasonable limit. This check is actually redundant since attestations in blocks cannot be older than 32 slots.
    - Correct source votes must be included within 5 slots (`integer_squareroot(32)`).
       - This is the geometric mean of 1 (the timely head threshold) and 32 (the timely target threshold). This is an arbitrary choice. Vitalik's view [^fn_vitalik_geometric_mean] is that, with this setting, the cumulative timeliness rewards most closely match an exponentially decreasing curve, which "feels more logical".

[^fn_vitalik_geometric_mean]: From a [conversation](https://discord.com/channels/595666850260713488/595701173944713277/871340571107655700) on the Ethereum Research Discord server.

The timely inclusion requirements are new in Altair. In Phase&nbsp;0, all correct votes received a reward, and there was an additional reward for inclusion the was proportional to the reciprocal of the inclusion distance. This led to a oddity where it was always more profitable to vote for a correct head, even if that meant waiting longer and risking not being included in the next slot.

|||
|-|-|
| Used&nbsp;by | [`process_attestation()`](/part3/transition/block#def_process_attestation), [`translate_participation()`](/part3/altair-fork#def_translate_participation) |
| Uses | [`get_block_root()`](#def_get_block_root), [`get_block_root_at_slot()`](#def_get_block_root_at_slot), [`integer_squareroot()`](/part3/helper/math#def_integer_squareroot) |
| See&nbsp;also | [Participation flag indices](/part3/config/constants#participation-flag-indices), [`AttestationData`](/part3/containers/dependencies#attestationdata), [`MIN_ATTESTATION_INCLUSION_DELAY`](/part3/config/preset#min_attestation_inclusion_delay) |

#### `get_flag_index_deltas`

<a id="def_get_flag_index_deltas"></a>

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

This function is used during epoch processing to assign rewards and penalties to individual validators based on their voting record in the previous epoch. Rewards for block proposers for including attestations are calculated [during block processing](/part3/transition/block#def_process_attestation). The "deltas" in the function name are the separate lists of rewards and penalties returned. Rewards and penalties are always treated separately to avoid negative numbers.

The function is called once for each of the [flag types](/part3/config/constants#participation-flag-indices) corresponding to correct attestation votes: timely source, timely target, timely head.

The list of validators returned by [`get_unslashed_participating_indices()`](/part3/helper/accessors#def_get_unslashed_participating_indices) contains the ones that will be rewarded for making this vote type in a timely and correct manner. That routine uses the flags set in state for each validator by [`process_attestation()`](/part3/transition/block#def_process_attestation) during block processing and returns the validators for which the corresponding flag is set.

Every active validator is expected to make an attestation exactly once per epoch, so we then cycle through the entire set of active validators, rewarding them if they appear in `unslashed_participating_indices`, as long as we are not in an inactivity leak. If we are in a leak, no validator is rewarded for any of its votes, but penalties still apply to non-participating validators.

Notice that the reward is weighted with `unslashed_participating_increments`, which is proportional to the total stake of the validators that made a correct vote with this flag. This means that, if participation by other validators is lower, then my rewards are lower, even if I perform my duties perfectly. The reason for this is to do with [discouragement attacks](https://raw.githubusercontent.com/ethereum/research/master/papers/discouragement/discouragement.pdf) (see also this [nice explainer](https://hackingresear.ch/discouragement-attacks/)). In short, with this mechanism, validators are incentivised to help each other out (e.g. by forwarding gossip messages, or aggregating attestations well) rather than to attack or censor one-another.

Validators that did not make a correct and timely vote are penalised with a full weighted base reward for each flag that they missed, except for missing the head vote. Head votes have only a single slot to get included, so a missing block in the next slot is sufficient to cause a miss, but is completely outside the attester's control. Thus head votes are only rewarded, not penalised. This also allows perfectly performing validators to break even during an inactivity leak, when we expect at least a third of blocks to be missing: they receive no rewards, but ideally no penalties either.

Untangling the arithmetic, the maximum total issuance due to rewards for attesters in an epoch, $I_A$, comes out as follows, in the [notation](/part3/transition/epoch#reward-and-penalty-calculations) described later.

$$
I_A = \frac{W_s + W_t + W_h}{W_{\Sigma}}NB
$$

|||
|-|-|
| Used&nbsp;by | [`process_rewards_and_penalties()`](/part3/transition/epoch#def_process_rewards_and_penalties) |
| Uses | [`get_unslashed_participating_indices()`](/part3/helper/accessors#def_get_unslashed_participating_indices), [`get_total_balance()`](/part3/helper/accessors#def_get_total_balance), [`get_total_active_balance()`](/part3/helper/accessors#get_total_active_balance), [`get_eligible_validator_indices()`](/part3/transition/epoch#def_get_eligible_validator_indices), [`get_base_reward()`](/part3/transition/epoch#def_get_base_reward), [`is_in_inactivity_leak()`](/part3/transition/epoch#def_is_in_inactivity_leak) |
| See&nbsp;also | [`process_attestation()`](/part3/transition/block#def_process_attestation), [participation flag indices](/part3/config/constants#participation-flag-indices), [rewards and penalties](/part3/transition/epoch#reward-and-penalty-calculations) |

### Beacon State Mutators <!-- /part3/helper/mutators -->

#### `increase_balance`

<a id="def_increase_balance"></a>

```python
def increase_balance(state: BeaconState, index: ValidatorIndex, delta: Gwei) -> None:
    """
    Increase the validator balance at index ``index`` by ``delta``.
    """
    state.balances[index] += delta
```

After creating a validator with its deposit balance, this and [`decrease_balance()`](#decrease_balance) are the only places in the spec where validator balances are ever modified.

We need two separate functions to change validator balances, one to increase them and one to decrease them, since we are using only unsigned integers.

Fun fact: A typo around this led to Teku's one and only [consensus failure](https://github.com/ConsenSys/teku/pull/885/files) at the initial [client interop event](https://media.consensys.net/how-30-eth-2-0-devs-locked-themselves-in-to-achieve-interoperability-175e4a807d92). Unsigned integers [induce bugs](https://critical.eschertech.com/2010/04/07/danger-unsigned-types-used-here/)!

|||
|-|-|
| Used&nbsp;by | [`slash_validator()`](#def_slash_validator), [`process_rewards_and_penalties()`](/part3/transition/epoch#def_process_rewards_and_penalties), [`process_attestation()`](/part3/transition/block#def_process_attestation), [`process_deposit()`](/part3/transition/block#def_process_deposit), [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) |
| See&nbsp;also | [`decrease_balance()`](#def_decrease_balance) |

#### `decrease_balance`

<a id="def_decrease_balance"></a>

```python
def decrease_balance(state: BeaconState, index: ValidatorIndex, delta: Gwei) -> None:
    """
    Decrease the validator balance at index ``index`` by ``delta``, with underflow protection.
    """
    state.balances[index] = 0 if delta > state.balances[index] else state.balances[index] - delta
```

The counterpart to [`increase_balance()`](#increase_balance). This has a little extra work to do to check for unsigned int underflow since balances may not go negative.

|||
|-|-|
| Used&nbsp;by | [`slash_validator()`](#def_slash_validator), [`process_rewards_and_penalties()`](/part3/transition/epoch#def_process_rewards_and_penalties), [`process_slashings()`](/part3/transition/epoch#def_process_slashings), [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) |
| See&nbsp;also | [`increase_balance()`](#increase_balance) |

#### `initiate_validator_exit`

<a id="def_initiate_validator_exit"></a>

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

Exits may be initiated [voluntarily](/part3/transition/block#voluntary-exits), as a result of [being slashed](/part3/helper/mutators#slash_validator), or by [dropping to](/part3/transition/epoch#registry-updates) the [`EJECTION_BALANCE`](/part3/config/configuration#ejection_balance) threshold.

In all cases, a dynamic "churn limit" caps the number of validators that may exit per epoch. This is calculated by [`get_validator_churn_limit()`](/part3/helper/accessors#get_validator_churn_limit). The mechanism for enforcing this is the exit queue: the validator's `exit_epoch` is set such that it is at the end of the queue.

The exit queue is not maintained as a separate data structure, but is continually re-calculated from the exit epochs of all validators and allowing for a fixed number to exit per epoch. I expect there are some optimisations to be had around this in actual implementations.

An exiting validator is expected to continue with its proposing and attesting duties until its `exit_epoch` has passed, and will continue to receive rewards and penalties accordingly.

In addition, an exited validator remains eligible to be slashed until its `withdrawable_epoch`, which is set to [`MIN_VALIDATOR_WITHDRAWABILITY_DELAY`](/part3/config/configuration#min_validator_withdrawability_delay) epochs after its `exit_epoch`. This is to allow some extra time for any slashable offences by the validator to be detected and reported.

|||
|-|-|
| Used by | [`slash_validator()`](/part3/helper/mutators#def_slash_validator), [`process_registry_updates()`](/part3/transition/epoch#def_process_registry_updates), [`process_voluntary_exit()`](/part3/transition/block#def_process_voluntary_exit) |
| Uses | [`compute_activation_exit_epoch()`](/part3/helper/misc#compute_activation_exit_epoch), [`get_validator_churn_limit()`](/part3/helper/accessors#get_validator_churn_limit)|
| See also | [Voluntary Exits](/part3/transition/block#voluntary-exits), [`MIN_VALIDATOR_WITHDRAWABILITY_DELAY`](/part3/config/configuration#min_validator_withdrawability_delay) |

#### `slash_validator`

<a id="def_slash_validator"></a>

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

Both [proposer slashings](/part3/transition/block#proposer-slashings) and [attester slashings](/part3/transition/block#attester-slashings) end up here when a report of a slashable offence has been verified during block processing.

When a validator is slashed, several things happen immediately:
 - The validator is processed for exit via [`initiate_validator_exit()`](#initiate_validator_exit), so it joins the exit queue.
 - The validator is marked as slashed. This information is used when calculating rewards and penalties: while being exited, whatever it does, a slashed validator receives penalties as if it had failed to propose or attest, including the inactivity leak if applicable.
 - Normally, as part of the exit process, the `withdrawable_epoch` for a validator (the point at which a validator's stake is in principle unlocked) is set to [`MIN_VALIDATOR_WITHDRAWABILITY_DELAY`](/part3/config/configuration#min_validator_withdrawability_delay) epochs after it exits. When a validator is slashed, a much longer period of lock-up applies, namely [`EPOCHS_PER_SLASHINGS_VECTOR`](/part3/config/preset#epochs_per_slashings_vector). This is to allow a further, potentially much greater, slashing penalty [to be applied later](/part3/transition/epoch#slashings) once the chain knows how many validators have been slashed together around the same time. The postponement of the withdrawable epoch is twice as long as required to apply the extra penalty, which is applied [half-way through](/part3/transition/epoch#slashings) the period. This simply means that slashed validators continue to accrue attestation penalties for some 18 days longer than necessary. Treating slashed validators fairly is not a big priority for the protocol.
 - The effective balance of the validator is added to the accumulated effective balances of validators slashed this epoch, and stored in the circular list, `state.slashings`. This will later be used by the slashing penalty calculation mentioned in the previous point.
 - An initial "slap on the wrist" slashing penalty of the validator's effective balance (in Gwei) divided by the [`MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR`](/part3/config/preset#min_slashing_penalty_quotient_altair) is applied. With current values, this is a maximum of 0.5 Ether, increased from 0.25 Ether in Phase&nbsp;0. The plan is to increase this to 1 Ether at The Merge.
 - The block proposer that included the slashing proof receives a reward.

In short, a slashed validator receives an initial minor penalty, can expect to receive a further penalty later, and is marked for exit.

Note that the `whistleblower_index` defaults to `None` in the parameter list. This is never used in Phase&nbsp;0, with the result that the proposer that included the slashing gets the entire whistleblower reward; there is no separate whistleblower reward for the finder of proposer or attester slashings. One reason is simply that reports are too easy to steal: if I report a slashable event to a block proposer, there is nothing to prevent that proposer claiming the report as its own. We could introduce some fancy ZK protocol to make this trustless, but this is what we're going with for now. Later developments, such as the [proof-of-custody game](https://github.com/ethereum/consensus-specs/blob/v1.1.1/specs/custody_game/beacon-chain.md#early-derived-secret-reveals), may reward whistleblowers directly.

|||
|-|-|
| Used&nbsp;by | [`process_proposer_slashing`](/part3/transition/block#def_process_proposer_slashing), [`process_attester_slashing`](/part3/transition/block#def_process_attester_slashing) |
| Uses | `initiate_validator_exit()`](#def_initiate_validator_exit), [`get_beacon_proposer_index()`](/part3/helper/accessors#def_get_beacon_proposer_index), [`decrease_balance()`](#def_decrease_balance), [`increase_balance()`](#def_increase_balance) |
| See&nbsp;also | [`EPOCHS_PER_SLASHINGS_VECTOR`](/part3/config/preset#epochs_per_slashings_vector), [`MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR`](/part3/config/preset#min_slashing_penalty_quotient_altair), [`process_slashings()`](/part3/transition/epoch#def_process_slashings) |

## Beacon Chain State Transition Function <!-- /part3/transition -->

### Preamble

<a id="assert"></a>

> The post-state corresponding to a pre-state `state` and a signed block `signed_block` is defined as `state_transition(state, signed_block)`. State transitions that trigger an unhandled exception (e.g. a failed `assert` or an out-of-range list access) are considered invalid. State transitions that cause a `uint64` overflow or underflow are also considered invalid.

This is a very important statement of how the spec deals with invalid conditions and errors. Basically, if any block is processed that would trigger any kind of exception in the Python code of the specification, then that block is invalid and must be rejected. That means having to undo any state modifications already made in the course of processing the block.

People who do [formal verification](https://github.com/ConsenSys/eth2.0-dafny) of the specification [don't much like this](https://github.com/ethereum/consensus-specs/issues/1797), as having assert statements in running code is an anti-pattern: it is better to ensure that your code can simply never fail.

Anyway, the beacon chain state transition has three elements:
  1. [slot processing](#def_process_slots), which is performed for every slot regardless of what else is happening;
  2. [epoch processing](/part3/transition/epoch#epoch-processing), which happens every [`SLOTS_PER_EPOCH`](/part3/config/preset#slots_per_epoch) (32) slots, again regardless of whatever else is going on; and,
  3. [block processing](/part3/transition/block#block-processing), which happens only in slots for which a beacon block has been received.

<a id="def_state_transition"></a>

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

As the spec is written, a state transition is triggered by receiving a block to process. That means that we first need to fast forward from our current slot number in the state (which is the slot at which we last processed a block) to the slot of the block we are processing. We treat intervening slots, if any, as empty. This "fast-forward" is done by [`process_slots()`](#def_process_slots), which also triggers epoch processing as required.

In actual client implementations, state updates will usually be time-based, triggered by moving to the next slot if a block has not been received. However, the fast-forward functionality will be used when exploring different forks in the block tree.

The `validate_result` parameter defaults to `True`, meaning that the block's signature will be checked, and that the result of applying the block to the state results in the same state root that the block claims it does (the "post-states" must match). When creating blocks, however, proposers can set `validate_result` to `False` to allow the state root to be calculated, else we'd have a circular dependency. The signature over the initial candidate block is omitted to avoid bad interactions with slashing protection when signing twice in a slot.

|||
|-|-|
| Uses | [`process_slots()`](#def_process_slots), [`verify_block_signature`](#def_verify_block_signature), [`process_block`](/part3/transition/block#def_process_block) |

<a id="def_verify_block_signature"></a>

```python
def verify_block_signature(state: BeaconState, signed_block: SignedBeaconBlock) -> bool:
    proposer = state.validators[signed_block.message.proposer_index]
    signing_root = compute_signing_root(signed_block.message, get_domain(state, DOMAIN_BEACON_PROPOSER))
    return bls.Verify(proposer.pubkey, signing_root, signed_block.signature)
```

Check that the signature on the block matches the block's contents and the public key of the claimed proposer of the block. This ensures that blocks cannot be forged, or tampered with in transit. All the public keys for validators are stored in the [`Validator`](/part3/containers/dependencies#validator)s list in state.

|||
|-|-|
| Used&nbsp;by | [`state_transition()`](#def_state_transition) |
| Uses | [`compute_signing_root()`](/part3/helper/misc#def_compute_signing_root), [`get_domain()`](/part3/helper/accessors#def_get_domain), [`bls.Verify()`](/part3/helper/crypto#bls-signatures) |
| See&nbsp;also | [`DOMAIN_BEACON_PROPOSER`](/part3/config/constants#domain-types) |

<a id="def_process_slots"></a>

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

Updates the state from its current slot up to the given slot number assuming that all the intermediate slots are empty (that they do not contain blocks). Iteratively calls [`process_slot()`](#def_process_slot) to apply the empty slot state-transition.

This is where epoch processing is triggered when required. Empty slot processing is extremely light weight, but any epoch transitions that need to be processed require the full rewards and penalties, and justification&ndash;finalisation apparatus.

|||
|-|-|
| Used&nbsp;by | [`state_transition()`](#def_state_transition) |
| Uses | [`process_slot()`](#def_process_slot), [`process_epoch()`](/part3/transition/epoch#def_process_epoch) |
| See&nbsp;also | [`SLOTS_PER_EPOCH`](/part3/config/preset#slots_per_epoch) |

<a id="def_process_slot"></a>

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

Apply a single slot state-transition (but updating the slot number, and any required epoch processing is handled by [`process_slots()`](#def_process_slots)). This is done at each slot whether or not there is a block present; if there is no block present then it is the only thing that is done.

Slot processing is almost trivial and consists only of calculating the updated state and block hash tree roots (as necessary), and storing them in the historical lists in the state. In a circular way, the state roots only change over an the empty slot state transition due to updating the lists of state and block roots.

[`SLOTS_PER_HISTORICAL_ROOT`](/part3/config/preset#slots_per_historical_root) is a multiple of [`SLOTS_PER_EPOCH`](/part3/config/preset#slots_per_epoch), so there is no danger of overwriting the circular lists of `state_roots` and `block_roots`. These will be dealt with correctly during epoch processing.

The only curiosity here is the lines,

```none
    if state.latest_block_header.state_root == Bytes32():
        state.latest_block_header.state_root = previous_state_root
```

This logic [was introduced](https://github.com/ethereum/consensus-specs/pull/711) to avoid a circular dependency while also keeping the state transition clean. Each block that we receive contains a post-state root, but as part of state processing we store the block in the state (in `state.latest_block_header`), thus changing the post-state root.

Therefore, to be able to verify the state transition, we use the convention that the state root of the incoming block, and the state root that we calculate after inserting the block into the state, are both based on a _temporary_ block header that has a stubbed state root, namely `Bytes32()`. This allows the block's claimed post-state root to validated without the circularity. The next time that `process_slots()` is called, the block's stubbed state root is updated to the actual post-state root, as above.

|||
|-|-|
| Used&nbsp;by | [`process_slots()`](#def_process_slots) |
| Uses | [`hash_tree_root`](/part3/helper/crypto#hash_tree_root) |
| See&nbsp;also | [`SLOTS_PER_HISTORICAL_ROOT`](/part3/config/preset#slots_per_historical_root) |

### Epoch processing <!-- /part3/transition/epoch -->

<a id="def_process_epoch"></a>

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

The long laundry list of things that need to be done at the end of an epoch. You can see from the comments that a bunch of extra work was added in Altair.

|||
|-|-|
| Used&nbsp;by | [`process_slots()`](/part3/transition#def_process_slots) |
| Uses | All the things below |

#### Justification and finalization

<a id="def_process_justification_and_finalization"></a>

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

I believe the corner cases mentioned in the comments are related to [Issue 849](https://github.com/ethereum/consensus-specs/issues/849)[^fn-ugly-integers]. In any case, skipping justification and finalisation calculations during the first two epochs definitely simplifies things.

[^fn-ugly-integers]: Worth a visit if only to have a chuckle at Jacek's description of `uint`s as "ugly integers".

For the purposes of the Casper FFG finality calculations, we want attestations that have both source and target votes we agree with. If the source vote is incorrect, then the attestation is never processed into the state, so we just need the validators that voted for the correct target, according to their [participation flag indices](/part3/config/constants#participation-flag-indices).

Since correct target votes can be included up to 32 slots after they are made, we collect votes from both the previous epoch and the current epoch to ensure that we have them all.

Once we know which validators voted for the correct source and head in the current and previous epochs, we add up their effective balances (not actual balances). `total_active_balance` is the sum of the effective balances for all validators that ought to have voted during the current epoch. Slashed, but not exited validators are not included in these calculations.

These aggregate balances are passed to [`weigh_justification_and_finalization()`](#def_weigh_justification_and_finalization) to do the actual work of updating justification and finalisation.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| Uses | [`get_unslashed_participating_indices()`](), [`get_total_active_balance()`](), [`get_total_balance()`](), [`weigh_justification_and_finalization()`](#def_weigh_justification_and_finalization) |
| See&nbsp;also | [participation flag indices](/part3/config/constants#participation-flag-indices) |

<a id="def_weigh_justification_and_finalization"></a>

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

This routine handles justification first, and then finalisation.

##### Justification

A supermajority link is a vote with a justified source checkpoint $C_m$ and a target checkpoint $C_n$ that was made by validators controlling more than two-thirds of the stake. If a checkpoint has a supermajority link pointing to it then we consider it justified. So, if more than two-thirds of the validators agree that checkpoint 3 was justified (their source vote) and have checkpoint 4 as their target vote, then we justify checkpoint 4.

We know that all the attestations have source votes that we agree with. The first `if` statement tries to justify the previous epoch's checkpoint seeing if the (source, target) pair is a supermajority. The second `if` statement tries to justify the current epoch's checkpoint. Note that the previous epoch's checkpoint might already have been justified; this is not checked but does not affect the logic.

The justification status of the last four epochs is stored in an array of bits in the state. After shifting the bits along by one at the outset of the routine, the justification status of the current epoch is stored in element 0, the previous in element 1, and so on.

Note that the `total_active_balance` is the current epoch's total balance, so it may not be strictly correct for calculating the supermajority for the previous epoch. However, the rate at which the validator set can change between epochs is [tightly constrained](/part3/config/configuration#min_per_epoch_churn_limit), so this is not a significant issue.

##### Finalisation

The version of Casper FFG described in the [Gasper paper](https://arxiv.org/abs/2003.03052) uses $k$-finality, which extends the handling of finality in the [original Casper FFG paper](https://arxiv.org/abs/1710.09437).

In $k$-finality, if we have a consecutive set of $k$ justified checkpoints ${C_j, \ldots, C_{j+k-1}}$, and a supermajority link from $C_j$ to $C_{j+k}$, then $C_j$ is finalised. Also note that this justifies $C_{j+k}$, by the rules above.

The Casper FFG version of this is $1$-finality. So, a supermajority link from a justified checkpoint $C_n$ to the very next checkpoint $C_{n+1}$ both justifies $C_{n+1}$ and finalises $C_n$.

On the beacon chain we are using $2$-finality, since target votes may be included up to an epoch late. In $2$ finality, we keep records of checkpoint justification status for four epochs and have the following conditions for finalisation, where the checkpoint for the current epoch is $C_n$. Note that we have already updated the justification status of $C_n$ and $C_{n-1}$ in this routine, which implies the existence of supermajority links pointing to them if the corresponding bits are set, respectively.
 1. Checkpoints $C_{n-3}$ and $C_{n-2}$ are justified, and there is a supermajority link from $C_{n-3}$ to $C_{n-1}$: finalise $C_{n-3}$.
 2. Checkpoint $C_{n-2}$ is justified, and there is a supermajority link from $C_{n-2}$ to $C_{n-1}$: finalise $C_{n-2}$. This is equivalent to $1$-finality applied to the previous epoch.
 3. Checkpoints $C_{n-2}$ and $C_{n-1}$ are justified, and there is a supermajority link from $C_{n-2}$ to $C_n$: finalise $C_{n-2}$.
 4. Checkpoint $C_{n-1}$ is justified, and there is a supermajority link from $C_{n-1}$ to $C_n$: finalise $C_{n-1}$. This is equivalent to $1$-finality applied to the current epoch.

<div class="image">
<img src="md/images/k-finality.svg" /><br />
<span>The four k-finality scenarios. Checkpoint numbers are along the bottom.</span>
</div>

Almost always we would expect to see only the $1$-finality cases, in particular, case 4. The $2$-finality cases would occur only in situations where many attestations are delayed, or when we are very close to the 2/3rds participation threshold. Note that these evaluations stack, so it is possible for rule 2 to finalise $C_{n-2}$ and then for rule 3 to immediately finalise $C_{n-1}$, for example.

For the uninitiated, in Python's array slice syntax, `bits[1:4]` means bits 1, 2, and 3 (but not 4). This always trips me up.

|||
|-|-|
| Used&nbsp;by | [`process_justification_and_finalization`](#def_process_justification_and_finalization) |
| Uses | `get_block_root(/part3/helper/accessors#def_get_block_root)`, |
| See&nbsp;also | [`JUSTIFICATION_BITS_LENGTH`](/part3/config/constants#justification_bits_length), [`Checkpoint`](/part3/containers/dependencies#checkpoint) |

#### Inactivity scores

<a id="def_process_inactivity_updates"></a>

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

With Altair, each validator has an individual inactivity score in the beacon state which is updated as follows.
  - Every epoch, irrespective of the inactivity leak,
    - decrease the score by one when the validator makes a correct [timely target vote](/part3/config/constants#participation-flag-indices), and
    - increase the score by [`INACTIVITY_SCORE_BIAS`](/part3/config/configuration#inactivity_score_bias) otherwise. Note that [`get_eligible_validator_indices()`](#def_get_eligible_validator_indices) includes slashed but not yet withdrawable validators: slashed validators are treated as not participating, whatever they actually do.
  - When _not_ in an inactivity leak
    - decrease all validators' scores by [`INACTIVITY_SCORE_RECOVERY_RATE`](/part3/config/configuration#inactivity_score_recovery_rate).

<div class="image">
<img src="md/images/inactivity-scores-flow.svg" /><br />
<span>How each validator's inactivity score is updated. The happy flow is right through the middle.</span>
</div>

There is a floor of zero on the score. So, outside a leak, validators' scores will rapidly return to zero and stay there, since `INACTIVITY_SCORE_RECOVERY_RATE` is greater than `INACTIVITY_SCORE_BIAS`.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| Uses | [`get_eligible_validator_indices()`](#def_get_eligible_validator_indices), [`get_unslashed_participating_indices`](/part3/helper/accessors#get_unslashed_participating_indices), [`is_in_inactivity_leak()`](/part3/transition/epoch#def_is_in_inactivity_leak) |
| See&nbsp;also | [`INACTIVITY_SCORE_BIAS`](/part3/config/configuration#inactivity_score_bias), [`INACTIVITY_SCORE_RECOVERY_RATE`](/part3/config/configuration#inactivity_score_recovery_rate), [`INACTIVITY_SCORE_RECOVERY_RATE`](/part3/config/configuration#inactivity_score_recovery_rate) |

#### Reward and penalty calculations

Without wanting to go full [Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf) on you, I am going to adopt a little notation to help analyse the rewards.

We will define a base reward $B$ that we will see turns out to be the expected long-run average income of an optimally performing validator per epoch (ignoring validator set size changes). The total number of active validators is $N$.

The base reward is calculated from a [base reward per increment](def_get_base_reward_per_increment), $b$. An "increment" is a unit of effective balance in terms of [`EFFECTIVE_BALANCE_INCREMENT`](/part3/config/preset#effective_balance_increment). $B = 32b$ because [`MAX_EFFECTIVE_BALANCE`](/part3/config/preset#max_effective_balance)] = `32 * EFFECTIVE_BALANCE_INCREMENT`

Other quantities we will use in rewards calculation are the [incentivization weights](/part3/config/constants#incentivization-weights): $W_s$, $W_t$, $W_h$, and $W_y$ being the weights for correct source, target, head, and sync committee votes respectively; $W_p$ being the proposer weight; and the weight denominator $W_{\Sigma}$ which is the sum of the weights.

Issuance for regular rewards are happens in four ways:
  - $I_A$ is the maximum total reward for all validators attesting in an epoch;
  - $I_{P_A}$ is the maximum reward issued to proposers in an epoch for including attestations;
  - $I_S$ is the maximum total reward for all sync committee participants in an epoch; and
  - $I_{P_S}$ is the maximum reward issued to proposers in an epoch for including sync aggregates;

Under [`get_flag_index_deltas()`](/part3/helper/accessors#def_get_flag_index_deltas), [`process_attestation()`](/part3/transition/block#def_process_attestation), and [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) we find that these work out as follows in terms of $B$ and $N$:

$$
\begin{aligned}
&I_A = \frac{W_s + W_t + W_h}{W_{\Sigma}}NB \\
&I_{A_P} = \frac{W_p}{W_{\Sigma} - W_p}I_A \\
&I_S = \frac{W_y}{W_{\Sigma}}NB \\
&I_{S_P} = \frac{W_p}{W_{\Sigma} - W_p}I_S
\end{aligned}
$$

To find the total optimal issuance per epoch, we can first sum $I_A$ and $I_S$,

$$
I_A + I_S = \frac{W_s + W_t + W_h + W_y}{W_{\Sigma}}NB = \frac{W_{\Sigma} - W_p}{W_{\Sigma}}NB
$$

Now adding in the proposer rewards,

$$
I_A + I_S + I_{A_P} + I_{S_P} = \frac{W_{\Sigma} - W_p}{W_{\Sigma}}(1 + \frac{W_p}{W_{\Sigma} - W_p})NB = (\frac{W_{\Sigma} - W_p}{W_{\Sigma}} + \frac{W_p}{W_{\Sigma}})NB = NB
$$

So, we see that every epoch, $NB$ Gwei is awarded to $N$ validators. Every validator participates in attesting, and proposing and sync committee duties are uniformly random, so the long-term expected income per optimally performing validator per epoch is $B$ Gwei.

##### Helpers

<a id="def_get_base_reward_per_increment"></a>

```python
def get_base_reward_per_increment(state: BeaconState) -> Gwei:
    return Gwei(EFFECTIVE_BALANCE_INCREMENT * BASE_REWARD_FACTOR // integer_squareroot(get_total_active_balance(state)))
```

The base reward per increment is the fundamental unit of reward in terms of which all other regular rewards and penalties are calculated. We will denote the base reward per increment, $b$.

As I noted under [`BASE_REWARD_FACTOR`](/part3/config/preset#base_reward_factor), this is the big knob to turn if we wish to increase or decrease the total reward for participating in Eth2, otherwise known as the issuance rate of new Ether.

An increment is a single unit of a validator's effective balance, denominated in terms of [`EFFECTIVE_BALANCE_INCREMENT`](/part3/config/preset#effective_balance_increment), which happens to be one Ether. So, an increment is 1 Ether of effective balance, and maximally effective validator has 32 increments.

The base reward per increment is inversely proportional to the square root of the total balance of all active validators. This means that, as the number $N$ of validators increases, the reward per validator decreases as $\frac{1}{\sqrt{N}}$, and the overall issuance per epoch increases as $\sqrt{N}$.

The decrease with increasing $N$ in per-validator rewards provides a price discovery mechanism: the idea is that an equilibrium will be found where the total number of validators results in a reward similar to returns available elsewhere for similar risk. The [Eth2 Launch Pad](https://launchpad.ethereum.org/) has a graph that shows how this translates into expected APR for running a validator for different total amounts of ETH staked.

[TODO: insert issuance graph]::

A different curve could have been chosen for the rewards profile. For example, the inverse of total balance rather than its square root would keep total issuance constant. Vitalik justifies the inverse square root approach and discusses the trade-offs in the [Serenity design rationale](https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Base-rewards).

|||
|-|-|
| Used&nbsp;by | [`get_base_reward()`](#def_get_base_reward), [`process_sync_aggregate()`](/part3/transition/block#def_process_sync_aggregate) |
| Uses | [`integer_squareroot()`](/part3/helper/math#def_integer_squareroot) |

<a id="def_get_base_reward"></a>

```python
def get_base_reward(state: BeaconState, index: ValidatorIndex) -> Gwei:
    """
    Return the base reward for the validator defined by ``index`` with respect to the current ``state``.
    """
    increments = state.validators[index].effective_balance // EFFECTIVE_BALANCE_INCREMENT
    return Gwei(increments * get_base_reward_per_increment(state))
```

The base reward is the reward that an optimally performing validator can expect to earn on average per epoch, over the long term. It is proportional to the validator's effective balance; a validator with [`MAX_EFFECTIVE_BALANCE`](/part3/config/preset#max_effective_balance) can expect to receive the full base reward $B = 32b$ per epoch on a long-term average.

|||
|-|-|
| Used&nbsp;by | [`get_flag_index_deltas`](/part3/helper/accessors#def_get_flag_index_deltas), [`process_attestation()`](/part3/transition/block#def_process_attestation) |
| Uses | [`get_base_reward_per_increment()`](#def_get_base_reward_per_increment) |
| See&nbsp;also | [`EFFECTIVE_BALANCE_INCREMENT`](/part3/config/preset#effective_balance_increment) |

<a id="def_get_finality_delay"></a>

```python
def get_finality_delay(state: BeaconState) -> uint64:
    return get_previous_epoch(state) - state.finalized_checkpoint.epoch
```

Returns the number of epochs since the last finalised checkpoint (minus one). In ideal running this ought to be zero: during epoch processing we aim to have justified the checkpoint in the current epoch and finalised the checkpoint in the previous epoch. A delay in finalisation suggests a chain split or large fraction of validators going offline.

|||
|-|-|
| Used&nbsp;by | [`is_in_inactivity_leak()`](#def_is_in_inactivity_leak) |

<a id="def_is_in_inactivity_leak"></a>

```python
def is_in_inactivity_leak(state: BeaconState) -> bool:
    return get_finality_delay(state) > MIN_EPOCHS_TO_INACTIVITY_PENALTY
```

If the beacon chain has not managed to finalise a checkpoint for [`MIN_EPOCHS_TO_INACTIVITY_PENALTY`](/part3/config/preset#min_epochs_to_inactivity_penalty) epochs (that is, four epochs), then the chain enters the [inactivity leak](/part3/config/preset#inactivity_penalty_quotient_altair). In this mode, penalties for non-participation are heavily increased, with the goal of reducing the proportion of stake controlled by non-participants, and eventually regaining finality.

|||
|-|-|
| Used&nbsp;by | [`get_flag_index_deltas()`](/part3/helper/accessors#get_flag_index_deltas), [`process_inactivity_updates()`](#def_process_inactivity_updates) |
| Uses | [`get_finality_delay()`](#def_get_finality_delay) |
| See&nbsp;also | [inactivity leak](/part3/config/preset#inactivity_penalty_quotient_altair), [`MIN_EPOCHS_TO_INACTIVITY_PENALTY`](/part3/config/preset#min_epochs_to_inactivity_penalty) |

<a id="def_get_eligible_validator_indices"></a>

```python
def get_eligible_validator_indices(state: BeaconState) -> Sequence[ValidatorIndex]:
    previous_epoch = get_previous_epoch(state)
    return [
        ValidatorIndex(index) for index, v in enumerate(state.validators)
        if is_active_validator(v, previous_epoch) or (v.slashed and previous_epoch + 1 < v.withdrawable_epoch)
    ]
```

These are the validators that were subject to rewards and penalties in the previous epoch.

The list differs from the active validator set returned by [`get_active_validator_indices()`](/part3/helper/accessors#def_get_active_validator_indices) by including slashed by not fully exited validators in addition to the ones marked active. Slashed validators are subject to penalties right up to when they become withdrawable and are thus fully exited.

|||
|-|-|
| Used&nbsp;by | [`get_flag_index_deltas()`](/part3/helper/accessors#def_get_flag_index_deltas), [`process_inactivity_updates()`](#def_process_inactivity_updates), [`get_inactivity_penalty_deltas()`](#def_get_inactivity_penalty_deltas) |
| Uses | [`is_active_validator()`](/part3/helper/predicates#def_is_active_validator) |

##### Inactivity penalty deltas

<a id="def_get_inactivity_penalty_deltas"></a>

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

Validators receive penalties proportional to their individual inactivity scores, even when the beacon chain is not in an [inactivity leak](/part3/transition/epoch#def_is_in_inactivity_leak). However, these scores reduce to zero fairly rapidly outside a leak. This is a change from Phase&nbsp;0 in which inactivity penalties were applied only during leaks.

All unslashed validators that made a correct and timely [target vote](/part3/config/constants#participation-flag-indices) in the previous epoch are identified by [`get_unslashed_participating_indices()`](/part3/helper/accessors#get_unslashed_participating_indices), and all other active validators receive a penalty, including slashed validators.

The penalty is proportional to the validator's effective balance and its inactivity score. See [`INACTIVITY_PENALTY_QUOTIENT_ALTAIR`](/part3/config/preset#inactivity_penalty_quotient_altair) for more details of the calculation, and [`INACTIVITY_SCORE_RECOVERY_RATE`](/part3/config/configuration#inactivity_score_recovery_rate) for some charts of how the penalties accrue.

The returned `rewards` is always an array of zeros. It's here just to make the Python syntax simpler in the calling routine.

|||
|-|-|
| Used&nbsp;by | [`def_process_rewards_and_penalties`](#def_process_rewards_and_penalties) |
| Uses | [`get_unslashed_participating_indices()`](/part3/helper/accessors#get_unslashed_participating_indices), [`get_eligible_validator_indices()`](/part3/transition/epoch#def_get_eligible_validator_indices) |
| See&nbsp;also | [Inactivity Scores](#inactivity-scores), [`INACTIVITY_PENALTY_QUOTIENT_ALTAIR`](/part3/config/preset#inactivity_penalty_quotient_altair), [`INACTIVITY_SCORE_RECOVERY_RATE`](/part3/config/configuration#inactivity_score_recovery_rate) |

##### Process rewards and penalties

<a id="def_process_rewards_and_penalties"></a>

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

This is where validators are rewarded and penalised according to their attestation records.

Attestations included in beacon blocks were processed by [`process_attestation`](/part3/transition/block#def_process_attestation) as blocks were received, and [flags](/part3/config/types#participationflags) were set in the beacon state according to their timeliness and correctness. These flags are now processed into rewards and penalties for each validator by calling [`get_flag_index_deltas()`](/part3/helper/accessors#def_get_flag_index_deltas) for each of the [flag types](/part3/config/constants#participation-flag-indices).

Once the normal attestation rewards and penalties have been calculated, [additional penalties](#def_get_inactivity_penalty_deltas) based on validators' inactivity scores are accumulated.

As noted elsewhere, rewards and penalties are handled separately from each other since we don't do negative numbers.

For reference, the only other places where rewards and penalties are applied are as follows:
  - during epoch processing: for [sync committee participation](/part3/transition/block#def_process_sync_aggregate), and applying [extended slashing penalties](/part3/transition/epoch#def_process_slashings).
  - during block processing: when applying the [proposer reward](/part3/transition/block#def_process_attestation), and initial [slashing rewards and penalties](/part3/helper/mutators#def_slash_validator).

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| Uses | [`get_flag_index_deltas()`](/part3/helper/accessors#def_get_flag_index_deltas), [`get_inactivity_penalty_deltas()`](#def_get_inactivity_penalty_deltas), [`increase_balance()`](/part3/helper/mutators#def_increase_balance), [`decrease_balance()`](/part3/helper/mutators#def_decrease_balance) |
| See&nbsp;also | [`ParticipationFlags`](/part3/config/types#participationflags), [`PARTICIPATION_FLAG_WEIGHTS`](/part3/config/constants#participation_flag_weights) |

#### Registry updates

<a id="def_process_registry_updates"></a>

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

The [`Registry`](/part3/containers/state#registry) is the part of the beacon state that stores [`Validator`](/part3/containers/dependencies#validator) records. These particular updates are, for the most part, concerned with moving validators through the activation queue.

[`is_eligible_for_activation_queue()`](/part3/helper/predicates#def_is_eligible_for_activation_queue) finds validators that have sufficient deposit yet their `activation_eligibility_epoch` is set to [`FAR_FUTURE_EPOCH`](/part3/config/constants#far_future_epoch). These will be all the validators for which deposits were process during the last epoch, potentially up to `MAX_DEPOSITS * SLOTS_PER_EPOCH`, which is 512. These have their `activation_eligibility_epoch` set to the next epoch. They will become eligible to be activated once that epoch is finalised.

Next, any validators whose effective balance has fallen to [`EJECTION_BALANCE`](/part3/config/configuration#ejection_balance) have their exit initiated.

[`is_eligible_for_activation()`](/part3/helper/predicates#is_eligible_for_activation) selects validators whose `activation_eligibility_epoch` has just been finalised. The list of these is ordered by eligibility epoch, and then by index. There might be multiple eligibility epochs in the list if finalisation got delayed for some reason.

Finally, the first [`get_validator_churn_limit()`](/part3/helper/accessors#def_get_validator_churn_limit) validators in the list get their activation epochs set to [`compute_activation_exit_epoch()`](/part3/helper/misc#def_compute_activation_exit_epoch).

On first sight, you'd think that the activation epochs of the whole queue could be set here, rather than just a single epoch's worth. But at some point, `get_validator_churn_limit()` will change unpredictably (we don't know when validators will exit), which makes that infeasible. Though, curiously, that is exactly what [`initiate_validator_exit()`](/part3/helper/mutators#def_initiate_validator_exit) does. Anyway, clients could optimise this by persisting the sorted activation queue rather than recalculating it.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| Uses | [`is_eligible_for_activation_queue()`](/part3/helper/predicates#def_is_eligible_for_activation_queue), [`is_active_validator()`](/part3/helper/predicates#def_is_active_validator), [`initiate_validator_exit()`](/part3/helper/mutators#initiate_validator_exit), [`is_eligible_for_activation()`](/part3/helper/predicates#def_is_eligible_for_activation), [`get_validator_churn_limit()`](/part3/helper/accessors#def_get_validator_churn_limit), [`compute_activation_exit_epoch()`](/part3/helper/misc#def_compute_activation_exit_epoch) |
| See&nbsp;also | [`Validator`](/part3/containers/dependencies#validator), [`EJECTION_BALANCE`](/part3/config/configuration#ejection_balance) |

#### Slashings

<a id="def_process_slashings"></a>

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

Slashing penalties are applied in two stages: the first stage is in [`slash_validator()`](/part3/helper/mutators#def_slash_validator), immediately on detection; the second stage is here.

In `slash_validator()` the withdrawable epoch is set [`EPOCHS_PER_SLASHINGS_VECTOR`](/part3/config/preset#epochs_per_slashings_vector) in the future, so in this function we are considering all slashed validators that are halfway to being withdrawable, that is, completely exited from the protocol. Equivalently, they were slashed `EPOCHS_PER_SLASHINGS_VECTOR // 2` epochs ago (about 18 days).

To calculate the additional slashing penalty, we do the following:
 1. Find the sum of the effective balances (at the time of the slashing) of all validators that were slashed in the previous `EPOCHS_PER_SLASHINGS_VECTOR` epochs (36 days). These are stored as a vector in the state.
 2. Multiply this sum by [`PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR`](/part3/config/preset#proportional_slashing_multiplier_altair), but cap the result at `total_balance`, the total active balance of all validators.
 3. For each slashed validator being considered, multiply its effective balance by the result of #2 and then divide by the `total_balance`. This results in an amount between zero and the full effective balance of the validator. That amount is subtracted from its actual balance as the penalty. Note that the effective balance could exceed the actual balance in odd corner cases, but [`decrease_balance()`](/part3/helper/mutators#def_decrease_balance) ensures the balance does not go negative.

If only a single validator were slashed within the 36 days, then this secondary penalty is tiny (actually zero, see below). If one-third of validators were slashed (the minimum required to finalise conflicting blocks), then, with `PROPORTIONAL_SLASHING_MULTIPLIER` set to two, each slashed validator would lose two thirds of its effective balance. When `PROPORTIONAL_SLASHING_MULTIPLIER` is eventually set to its final value of three, a successful chain attack will result in the attackers losing their entire effective balances.

Interestingly, due to the way the integer arithmetic is constructed in this routine, in particular the factoring out of `increment`, the result of this calculation will be zero if `validator.effective_balance * adjusted_total_slashing_balance` is less than `total_balance`. Effectively, the penalty is rounded down to the nearest whole amount of Ether. Issues [1322](https://github.com/ethereum/consensus-specs/issues/1322) and [2161](https://github.com/ethereum/consensus-specs/issues/2161) discuss this. In the end, the consequence is that when there are few slashings there is no extra correlated slashing penalty at all, which is probably a good thing.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| Uses | [`get_total_active_balance()`](/part3/helper/accessors#def_get_total_active_balance), [`decrease_balance()`](/part3/helper/mutators#def_decrease_balance) |
| See&nbsp;also | [`slash_validator()`](/part3/helper/mutators#def_slash_validator), [`EPOCHS_PER_SLASHINGS_VECTOR`](/part3/config/preset#epochs_per_slashings_vector), [`PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR`](/part3/config/preset#proportional_slashing_multiplier_altair) |

#### Eth1 data votes updates

<a id="def_process_eth1_data_reset"></a>

```python
def process_eth1_data_reset(state: BeaconState) -> None:
    next_epoch = Epoch(get_current_epoch(state) + 1)
    # Reset eth1 data votes
    if next_epoch % EPOCHS_PER_ETH1_VOTING_PERIOD == 0:
        state.eth1_data_votes = []
```

There is a fixed period during which beacon block proposers vote on their view of the Eth1 deposit contract and try to come to a simple majority agreement. At the end of the period, the record of votes is cleared and voting begins again, whether or not agreement was reached during the period.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| See&nbsp;also | [`EPOCHS_PER_ETH1_VOTING_PERIOD`](/part3/config/preset#epochs_per_eth1_voting_period), [`Eth1Data`](/part3/containers/dependencies#eth1data) |

#### Effective balances updates

<a id="def_process_effective_balance_updates"></a>

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

Each validator's balance is represented twice in the state: once accurately in a list separate from validator records, and once in a [coarse-grained format](/part3/config/preset#effective_balance_increment) within the validator's record. Only effective balances are used in calculations within the spec, but rewards and penalties are applied to actual balances. This routine is where effective balances are updated once per epoch to follow the actual balances.

A hysteresis mechanism is used when calculating the effective balance of a validator when its actual balance changes. See [Hysteresis Parameters](/part3/config/preset#hysteresis-parameters) for more discussion of this, and the values of the related constants. With the current values, a validator's effective balance drops to `X` ETH when its actual balance drops below `X.75` ETH, and increases to `Y` ETH when its actual balance rises above `Y.25` ETH. The hysteresis mechanism ensures that effective balances change infrequently, which means that the list of validator records needs to be re-hashed only infrequently when calculating the state root, saving considerably on work.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| See&nbsp;also | [Hysteresis Parameters](/part3/config/preset#hysteresis-parameters) |

#### Slashings balances updates

<a id="def_process_slashings_reset"></a>

```python
def process_slashings_reset(state: BeaconState) -> None:
    next_epoch = Epoch(get_current_epoch(state) + 1)
    # Reset slashings
    state.slashings[next_epoch % EPOCHS_PER_SLASHINGS_VECTOR] = Gwei(0)
```

`state.slashings` is a circular list of length [`EPOCHS_PER_SLASHINGS_VECTOR`](/part3/config/preset#epochs_per_slashings_vector) that contains the total of the effective balances of all validators that have been slashed at each epoch. These are used to apply a correlated slashing penalty to slashed validators before they are exited. Each epoch we overwrite the oldest entry with zero, and it becomes the current entry.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| See&nbsp;also | [`process_slashings()`](/part3/transition/epoch#def_process_slashings), [`EPOCHS_PER_SLASHINGS_VECTOR`](/part3/config/preset#epochs_per_slashings_vector) |

#### Randao mixes updates

<a id="def_process_randao_mixes_reset"></a>

```python
def process_randao_mixes_reset(state: BeaconState) -> None:
    current_epoch = get_current_epoch(state)
    next_epoch = Epoch(current_epoch + 1)
    # Set randao mix
    state.randao_mixes[next_epoch % EPOCHS_PER_HISTORICAL_VECTOR] = get_randao_mix(state, current_epoch)
```

`state.randao_mixes` is a circular list of length [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector). The current value of the RANDAO, which is updated with every block that arrives, is stored at position `state.randao_mixes[current_epoch % EPOCHS_PER_HISTORICAL_VECTOR]`, as per [`get_randao_mix()`](/part3/helper/accessors#def_get_randao_mix).

At the end of every epoch, final value of the RANDAO for this epoch is copied over to become the starting value of the randao for the next, preserving the remaining entries as historical values.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| Uses | [`get_randao_mix()`](/part3/helper/accessors#def_get_randao_mix) |
| See&nbsp;also | [`process_randao()`](/part3/transition/block#def_process_randao), [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector) |

#### Historical roots updates

<a id="def_process_historical_roots_update"></a>

```python
def process_historical_roots_update(state: BeaconState) -> None:
    # Set historical root accumulator
    next_epoch = Epoch(get_current_epoch(state) + 1)
    if next_epoch % (SLOTS_PER_HISTORICAL_ROOT // SLOTS_PER_EPOCH) == 0:
        historical_batch = HistoricalBatch(block_roots=state.block_roots, state_roots=state.state_roots)
        state.historical_roots.append(hash_tree_root(historical_batch))
```

Every [`SLOTS_PER_HISTORICAL_ROOT`](/part3/config/preset#slots_per_historical_root) slots, the historical roots accumulator is updated. This is implements part of the [double batched accumulator](https://ethresear.ch/t/double-batched-merkle-log-accumulator/571) for the past history of the chain. Once `SLOTS_PER_HISTORICAL_ROOT` block roots and the same number of state roots have been accumulated in the beacon state, they are put in a [`HistoricalBatch`](/part3/containers/dependencies#historicalbatch) object and the hash tree root of that is appended to the `historical_roots` list in the beacon state. The corresponding block and state root lists in the beacon state are circular and just get overwritten in the next period.

Storing past roots like this allows historical Merkle proofs to be constructed if required.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| See&nbsp;also | [`HistoricalBatch`](/part3/containers/dependencies#historicalbatch), [`SLOTS_PER_HISTORICAL_ROOT`](/part3/config/preset#slots_per_historical_root) |

#### Participation flags updates

<a id="def_process_participation_flag_updates"></a>

```python
def process_participation_flag_updates(state: BeaconState) -> None:
    state.previous_epoch_participation = state.current_epoch_participation
    state.current_epoch_participation = [ParticipationFlags(0b0000_0000) for _ in range(len(state.validators))]
```

Two epochs' worth of validator participation flags (that record validators' attestation activity) are stored. At the end of every epoch the current becomes the previous, and a new empty list becomes current.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| See&nbsp;also | [`ParticipationFlags`](/part3/config/types#participationflags) |

#### Sync committee updates

<a id="def_process_sync_committee_updates"></a>

```python
def process_sync_committee_updates(state: BeaconState) -> None:
    next_epoch = get_current_epoch(state) + Epoch(1)
    if next_epoch % EPOCHS_PER_SYNC_COMMITTEE_PERIOD == 0:
        state.current_sync_committee = state.next_sync_committee
        state.next_sync_committee = get_next_sync_committee(state)
```

Sync committees are rotated every [`EPOCHS_PER_SYNC_COMMITTEE_PERIOD`](/part3/config/preset#epochs_per_sync_committee_period). The next sync committee is ready and waiting so that validators can prepare in advance by subscribing to the necessary subnets. That becomes the current sync committee, and the next is calculated.

|||
|-|-|
| Used&nbsp;by | [`process_epoch()`](#def_process_epoch) |
| Uses | [`get_next_sync_committee()`](/part3/helper/accessors#def_get_next_sync_committee) |
| See&nbsp;also | [`EPOCHS_PER_SYNC_COMMITTEE_PERIOD`](/part3/config/preset#epochs_per_sync_committee_period) |

### Block processing <!-- /part3/transition/block -->

<a id="def_process_block"></a>

```python
def process_block(state: BeaconState, block: BeaconBlock) -> None:
    process_block_header(state, block)
    process_randao(state, block.body)
    process_eth1_data(state, block.body)
    process_operations(state, block.body)  # [Modified in Altair]
    process_sync_aggregate(state, block.body.sync_aggregate)  # [New in Altair]
```

These are the tasks that the beacon node performs in order to process a block and update the state. If any of the called functions triggers an `assert` failure or any other kind of exception, then the [entire block is invalid](/part3/transition#assert), and any state changes must be rolled back.

[`process_operations()`](#def_process_operations) covers the processing of any slashing reports (proposer and attester) in the block, any attestations, any deposits, and any voluntary exits.

|||
|-|-|
| Used&nbsp;by | [`state_transition()`](/part3/transition#def_state_transition) |
| Uses | [`process_block_header()`](#def_process_block_header), [`process_randao()`](#def_process_randao), [`process_eth1_data()`](#def_process_eth1_data), [`process_operations()`](#def_process_operations), [`process_sync_aggregate()`](#def_process_sync_aggregate) |

#### Block header

<a id="def_process_block_header"></a>

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

A straightforward set of validity conditions for the [block header](/part3/containers/dependencies#beaconblockheader) data.

The version of the block header object that this routine stores in the state is a duplicate of the incoming block's header, but with its `state_root` set to its default empty `Bytes32()` value. See [`process_slot()`](/part3/transition#def_process_slot) for the explanation of this.

|||
|-|-|
| Used&nbsp;by | [`process_block()`](#def_process_block) |
| Uses | [`get_beacon_proposer_index()`](/part3/helper/accessors#def_get_beacon_proposer_index), [`hash_tree_root()`](/part3/helper/crypto#hash_tree_root) |
| See&nbsp;also | [BeaconBlockHeader](/part3/containers/dependencies#beaconblockheader), [`process_slot()`](/part3/transition#def_process_slot) |

#### RANDAO

<a id="def_process_randao"></a>

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

A good source of randomness is foundational to the operation of the beacon chain. Security of the protocol depends significantly on being able to unpredictably and uniformly select block proposers and committee members. In fact, the very name "beacon chain" was inspired by Dfinity's concept of a [randomness beacon](https://arxiv.org/abs/1805.04548).

The current mechanism for providing randomness is a RANDAO, in which each block proposer provides some randomness and all the contributions are mixed together over the course of an epoch. This is not unbiasable (a malicious proposer may choose to skip a block if it is to its advantage to do so), but is [good enough](https://ethresear.ch/t/rng-exploitability-analysis-assuming-pure-randao-based-main-chain/1825?u=benjaminion). In future, Ethereum might use a verifiable delay function ([VDF](https://www.vdfalliance.org/)) to provide unbiasable randomness.

[Early designs](https://github.com/ethereum/consensus-specs/pull/33/files) had the validators pre-committing to "hash onions", peeling off one layer of hashing at each block proposal. This [was changed](https://github.com/ethereum/consensus-specs/pull/483) to using a BLS signature over the [epoch number](https://github.com/ethereum/consensus-specs/pull/498) as the entropy source. Using signatures is both a simplification, and an enabler for multi-party (distributed) validators. The (reasonable) assumption is that sufficient numbers of validators generated their secret keys with good entropy to ensure that the RANDAO's entropy is adequate.

[TODO: link to DVT ^^^]::

The `process_randao()` function simply uses the proposer's public key to verify that the RANDAO reveal in the block is indeed the epoch number signed with the proposer's private key. It then mixes the hash of the reveal into the current epoch's RANDAO accumulator. The hash is used in order to reduce the signature down from 96 to 32 bytes, and to make it uniform. [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector) past values of the RANDAO accumulator at the ends of epochs are stored in the state.

From Justin Drake's [notes](https://notes.ethereum.org/@JustinDrake/rkPjB1_xr):
> Using `xor` in `process_randao` is (slightly) more secure than using `hash`. To illustrate why, imagine an attacker can grind randomness in the current epoch such that two of his validators are the last proposers, in a different order, in two resulting samplings of the next epochs. The commutativity of `xor` makes those two samplings equivalent, hence reducing the attacker’s grinding opportunity for the next epoch versus `hash` (which is not commutative). The strict security improvement may simplify the derivation of RANDAO security formal lower bounds.

Note that the `assert` statement means that the whole block is invalid if the RANDAO reveal is incorrectly formed.

|||
|-|-|
| Used&nbsp;by | [`process_block()`](#def_process_block) |
| Uses | [`get_beacon_proposer_index()`](/part3/helper/accessors#def_get_beacon_proposer_index), [`compute_signing_root()`](/part3/helper/misc#def_compute_signing_root), [`get_domain()`](/part3/helper/accessors#def_get_domain), [`bls.Verify()`](/part3/helper/crypto#bls-signatures), [`hash()`](/part3/helper/crypto#hash), [`xor()`](/part3/helper/math#def_xor), [`get_randao_mix()`](/part3/helper/accessors#def_get_randao_mix) |
| See&nbsp;also | [`EPOCHS_PER_HISTORICAL_VECTOR`](/part3/config/preset#epochs_per_historical_vector) |

#### Eth1 data

<a id="def_process_eth1_data"></a>

```python
def process_eth1_data(state: BeaconState, body: BeaconBlockBody) -> None:
    state.eth1_data_votes.append(body.eth1_data)
    if state.eth1_data_votes.count(body.eth1_data) * 2 > EPOCHS_PER_ETH1_VOTING_PERIOD * SLOTS_PER_EPOCH:
        state.eth1_data = body.eth1_data
```

Blocks may contain [`Eth1Data`](/part3/containers/dependencies#eth1data) which is supposed to be the proposer's best view of the Eth1 chain and the deposit contract at the time. There is no incentive to get this data correct, or penalty for it being incorrect.

If there is a simple majority of the same vote being cast by proposers during each voting period of [`EPOCHS_PER_ETH1_VOTING_PERIOD`](/part3/config/preset#epochs_per_eth1_voting_period) epochs (6.8 hours) then the Eth1 data is committed to the beacon state. This updates the chain's view of the deposit contract, and new deposits since the last update will start being processed.

This mechanism has proved to [be fragile](https://github.com/ethereum/consensus-specs/issues/2018) in the past, but appears to be workable if not perfect.

|||
|-|-|
| Used&nbsp;by | [`process_block()`](#def_process_block) |
| See&nbsp;also | [`Eth1Data`](/part3/containers/dependencies#eth1data), [`EPOCHS_PER_ETH1_VOTING_PERIOD`](/part3/config/preset#epochs_per_eth1_voting_period) |

#### Operations

<a id="def_process_operations"></a>

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

Just a dispatcher for handling the various optional contents in a block.

Deposits are optional only in the sense that some blocks have them and some don't. However, as per the `assert` statement, if, according to the beacon chain's view of the Eth1 chain, there are deposits pending, then the block _must_ include them, otherwise the block is invalid. On the face of it, this suggests that it is important for a block proposer to have access to an Eth1 node, so as to be able to obtain the deposit data. In practice, this turns out to be [not so important](https://github.com/ethereum/consensus-specs/issues/2152), although. with Altair, the proposer reward was increased by a factor of four, which increases the importance of the Eth1 node.

Block proposers are explicitly rewarded for including any available attestations and slashing reports. There is a validity condition, and thus an implicit reward, related to including deposit messages. The incentive for including voluntary exits is that a smaller validator set means higher rewards for the remaining validators.

|||
|-|-|
| Used&nbsp;by | [`process_block()`](#def_process_block) |
| Uses | [`process_proposer_slashing()`](#def_process_proposer_slashing), [`process_attester_slashing()`](#def_process_attester_slashing), [`process_attestation()`](#def_process_attestation), [`process_deposit`](#def_process_deposit), [`process_voluntary_exit()`](#def_process_voluntary_exit) |
| See&nbsp;also | [`BeaconBlockBody`](/part3/containers/blocks#beaconblockbody) |

##### Proposer slashings

<a id="def_process_proposer_slashing"></a>

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

A [`ProposerSlashing`](/part3/containers/operations#proposerslashing) is a proof that a proposer has signed two blocks at the same height. Up to [`MAX_PROPOSER_SLASHINGS`](/part3/config/preset#max_proposer_slashings) of them may be included in a block. It contains the evidence in the form of a pair of [`SignedBeaconBlockHeader`](/part3/containers/envelopes#signedbeaconblockheader)s.

The proof is simple: the two proposals come from the same slot, have the same proposer, but differ in one or more of `parent_root`, `state_root`, or `body_root`. In addition, they were both signed by the proposer. The conflicting blocks do not need to be valid: any pair of headers that meet the criteria, irrespective of the blocks' contents, are liable to be slashed.

As ever, the `assert` statements ensure that the containing block is invalid if it contains any invalid slashing claims.

Fun fact: the [first slashing](https://beaconcha.in/block/138731#proposer-slashings) to occur on the beacon chain was a proposer slashing. Two clients running side-by-side with the same keys will often produce the same attestations since the protocol is designed to encourage that. Independently producing the same block is very unlikely as blocks contain much more data.

|||
|-|-|
| Used&nbsp;by | [`process_block()`](#def_process_block) |
| Uses | [`is_slashable_validator()`](/part3/helper/predicates#def_is_slashable_validator), [`get_domain()`](/part3/helper/accessors#def_get_domain), [`compute_signing_root()`](/part3/helper/misc#def_compute_signing_root), [`bls.Verify()`](/part3/helper/crypto#bls-signatures), [`slash_validator()`](/part3/helper/mutators#def_slash_validator) |
| See&nbsp;also | [`ProposerSlashing`](/part3/containers/operations#proposerslashing) |

##### Attester slashings

<a id="def_process_attester_slashing"></a>

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

[`AttesterSlashing`](/part3/containers/operations#attesterslashing)s are similar to proposer slashings in that they just provide the evidence of the two aggregate [`IndexedAttestation`](/part3/containers/dependencies#indexedattestation)s that conflict with each other. Up to [`MAX_ATTESTER_SLASHINGS`](/part3/config/preset#max_attester_slashings) of them may be included in a block.

The validity checking is done by [`is_slashable_attestation_data()`](/part3/helper/predicates#is_slashable_attestation_data), which checks the double vote and surround vote conditions, and by [`is_valid_indexed_attestation()`](/part3/helper/predicates#def_is_valid_indexed_attestation) which verifies the signatures on the attestations.

Any validators that appear in both attestations are slashed. If no validator is slashed, then the attester slashing claim was not valid after all, and therefore its containing block is invalid.

Examples: a [double vote](https://beaconcha.in/block/43920#attester-slashings) attester slashing; [surround vote](https://beaconcha.in/block/17184#attester-slashings) attester slashings.

|||
|-|-|
| Used&nbsp;by | [`process_block()`](#def_process_block) |
| Uses | [`is_slashable_attestation_data()`](/part3/helper/predicates#is_slashable_attestation_data), [`is_valid_indexed_attestation()`](/part3/helper/predicates#def_is_valid_indexed_attestation), [`is_slashable_validator()`](/part3/helper/predicates#def_is_slashable_validator), [`slash_validator()`](/part3/helper/mutators#def_slash_validator) |
| See&nbsp;also | [`AttesterSlashing`](/part3/containers/operations#attesterslashing) |

##### Attestations

<a id="def_process_attestation"></a>

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

Block proposers are rewarded here for including attestations during block processing, while attesting validators receive their rewards and penalties during [epoch processing](/part3/transition/epoch#process-rewards-and-penalties).

This routine processes each attestation included in the block. First a bunch of validity checks are performed. If any of these fails, then the whole block is invalid (it is most likely from a proposer on a different fork, and so useless to us):
 - The target vote of the attestation must be either the previous epoch's checkpoint or the current epoch's checkpoint.
 - The target checkpoint and the attestation's slot must belong to the same epoch.
 - The attestation must be no newer than [`MIN_ATTESTATION_INCLUSION_DELAY`](/part3/config/preset#min_attestation_inclusion_delay) slots, which is one. So this condition rules out attestations from the current or future slots.
 - The attestation must be no older than [`SLOTS_PER_EPOCH`](/part3/config/preset#slots_per_epoch) slots, which is 32.
 - The attestation must come from a committee that existed when the attestation was created.
 - The size of the committee and the size of the aggregate must match (`aggregation_bits`).
 - The (aggregate) signature on the attestation must be valid and must correspond to the aggregated public keys of the validators that it claims to be signed by. This (and other criteria) is checked by [`is_valid_indexed_attestation()`](/part3/helper/predicates#def_is_valid_indexed_attestation).

Once the attestation has passed the checks it is processed by converting the votes from validators that it contains into flags in the state.

It's easy to skip over amidst all the checking, but the actual attestation processing is done by [`get_attestation_participation_flag_indices()`](/part3/helper/accessors#def_get_attestation_participation_flag_indices). This takes the source, target, and head votes of the attestation, along with its inclusion delay (how many slots late was it included in a block) and returns a list of up to [three flags](/part3/config/constants#participation-flag-indices) corresponding to the votes that were both correct and timely, in `participation_flag_indices`.

For each validator that signed the attestation, if each flag in `participation_flag_indices` is not already set for it in its `epoch_participation` record, then the flag is set, and the proposer is rewarded. Recall that the validator making the attestation is not rewarded until the end of the epoch. If the flag is already set in the corresponding epoch for a validator, no proposer reward is accumulated: the attestation for this validator was included in an earlier block.

The proposer reward is accumulated, and weighted according to the [weight](/part3/config/constants#participation_flag_weights) assigned to each of the flags (timely source, timely target, timely head).

If a proposer includes all the attestations only for one slot, and all the relevant validators vote, then its reward will be, in the [notation](/part3/transition/epoch#reward-and-penalty-calculations) established earlier,

$$
I_{A_P} = \frac{W_p}{32(W_{\Sigma} - W_p)}I_A
$$

Where $I_A$ is the total maximum reward per epoch for attesters, calculated in [`get_flag_index_deltas()`](/part3/helper/accessors#def_get_flag_index_deltas). The total available reward in an epoch for proposers including attestations is 32 times this.

##### Deposits

<a id="def_get_validator_from_deposit"></a>

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

Create a newly initialised validator object from a deposit. This was [factored out](https://github.com/ethereum/consensus-specs/commit/1623086088e6f0496566ab7d50d16a8c78cdebf0) of `process_deposit()` for better code reuse between the Phase&nbsp;0 spec and the sharding spec.

The `state` parameter in the input argument list is an oversight: it is not used or required.

|||
|-|-|
| Used&nbsp;by | [`process_deposit()`](#def_process_deposit) |
| See&nbsp;also | [`Validator`](/part3/containers/dependencies#validator), [`Deposit`](/part3/containers/operations#deposit), [`FAR_FUTURE_EPOCH`](/part3/config/constants#far_future_epoch), [`MAX_EFFECTIVE_BALANCE`](/part3/config/preset#max_effective_balance) |

<a id="def_process_deposit"></a>

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

Here, we process a deposit from a block. If the deposit is valid, either a new validator is created or the deposit amount is added to an existing validator.

The call to [`is_valid_merkle_branch()`](/part3/helper/predicates#def_is_valid_merkle_branch) ensures that it is not possible to fake a deposit. The `eth1data.deposit_root` from the deposit contract has been [agreed](/part3/transition/block#eth1-data) by the beacon chain and includes all pending deposits visible to the beacon chain. The deposit itself contains a Merkle proof that it is included in that root. The `state.eth1_deposit_index` counter ensures that deposits are processed in order. In short, the proposer provides `leaf` and `branch`, but neither `index` nor `root`.

Deposits are signed with the private key of the depositing validator, and the corresponding public key is included in the deposit data. This constitutes a "proof of possession" of the private key, and prevents nastiness like the [rogue key attack](https://hackmd.io/@benjaminion/bls12-381#Rogue-key-attacks). Note that [`compute_domain()`](/part3/helper/misc#def_compute_domain) is used directly here when validating the deposit's signature, rather than the more usual [`get_domain()`](/part3/helper/accessors#def_get_domain) wrapper. This is because deposit messages are valid across beacon chain forks (such as Phase&nbsp;0 and Altair), so we don't want to mix the fork version into the domain. In addition, deposits can be made before `genesis_validators_root` is known.

If the Merkle branch check fails, then the whole block is invalid. However, individual deposits can fail the signature check without invalidating the block. This allows incorrectly signed deposits to be de-queued (via `state.eth1_deposit_index += 1`) without blocking further progress (that increment would have to be reverted if the block were invalid).

Note that it is not possible to change a validator's withdrawal credentials after the initial deposit: the withdrawal credentials of subsequent deposits for the same validator are ignored; only the credentials appearing on the initial deposit are stored on the beacon chain. This is an important security measure. If an attacker steals a validator's signing key, we don't want them to be able to change the withdrawal credentials in order to steal the stake for themselves. However, it works both ways, and [a vulnerability](https://medium.com/immunefi/rocketpool-lido-frontrunning-bug-fix-postmortem-e701f26d7971) was identified for staking pools in which a malicious operator could potentially front-run a deposit transaction with a 1 ETH deposit to set the withdrawal credentials to their own.

|||
|-|-|
| Used&nbsp;by | [`process_block()`](#def_process_block) |
| Uses | [`is_valid_merkle_branch()`](/part3/helper/predicates#def_is_valid_merkle_branch), [`hash_tree_root()`](/part3/helper/crypto#hash_tree_root), [`compute_domain()`](/part3/helper/misc#def_compute_domain), [`compute_signing_root()`](/part3/helper/misc#def_compute_signing_root), [`bls.Verify()`](/part3/helper/crypto#bls-signatures), [`get_validator_from_deposit()`](#def_get_validator_from_deposit) |
| See&nbsp;also | [`Deposit`](/part3/containers/operations#deposit) |

##### Voluntary exits

<a id="def_process_voluntary_exit"></a>

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

A voluntary exit message is submitted by a validator to indicate that it wishes to cease being an active validator. A proposer receives [voluntary exit messages](/part3/containers/operations#voluntaryexit) via gossip or via its own API and then includes the message in a block so that it can be processed by the network.

Most of the checks are straightforward, as per the comments in the code. Note the following.
 - Voluntary exits are ignored if they are included in blocks before the given `epoch`, so nodes might buffer any future-dated exits they see before putting them in a block.
 - A validator must have been active for at least [`SHARD_COMMITTEE_PERIOD`](/part3/config/configuration#shard_committee_period) epochs (27 hours). See [there](/part3/config/configuration#shard_committee_period) for the rationale.
 - Voluntary exits are signed with the validator's usual signing key. There is some discussion about [changing this](https://github.com/ethereum/consensus-specs/issues/1578) to also allow signing of a voluntary exit with the validator's withdrawal key.

If the voluntary exit message is valid then the validator is added to the exit queue by calling [`initiate_validator_exit()`](/part3/helper/mutators#initiate_validator_exit).

At present it is [not possible](https://notes.ethereum.org/elDvTNrbRqmgP6np_YWc2g#Concerns-that-motivated-removing-re-activation-functionality-in-2017) for a validator to exit and re-enter, but this functionality [may be introduced](https://hackmd.io/@HWeNw8hNRimMm2m2GH56Cw/HkTzLKOov#Exit-and-re-entry) in future.

|||
|-|-|
| Used&nbsp;by | [`process_operations()`](/part3/transition/block#def_process_operations) |
| Uses | [`is_active_validator()`](/part3/helper/predicates#def_is_active_validator), [`get_domain()`](/part3/helper/accessors#def_get_domain), [`compute_signing_root()`](/part3/helper/misc#def_compute_signing_root), [`bls.Verify()`](/part3/helper/crypto#bls-signatures), [`initiate_validator_exit()`](/part3/helper/mutators#def_initiate_validator_exit) |
| See&nbsp;also | [`VoluntaryExit`](/part3/containers/operations#voluntaryexit), [`SHARD_COMMITTEE_PERIOD`](/part3/config/configuration#shard_committee_period) |

##### Sync aggregate processing

<a id="def_process_sync_aggregate"></a>

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

Similarly to how attestations are handled, the beacon block proposer includes in its block an aggregation of sync committee votes that agree with its local view of the chain. Specifically, the sync committee votes are for the head block that the proposer saw in the previous slot. (If the previous slot is empty, then the head block will be from an earlier slot.)

We validate these votes against our local view of the chain, and if they agree then we reward the participants that voted. If they do not agree with our local view, then the entire block is invalid: it is on another branch.

To perform the validation, we form the signing root of the block at the previous slot, with `DOMAIN_SYNC_COMMITTEE` mixed in. Then we check if the aggregate signature received in the [`SyncAggregate`](/part3/containers/operations#syncaggregate) verifies against it, using the aggregate public key of the validators who claimed to have signed it. If either the signing root (that is, the head block) is wrong, or the list of participants is wrong, then the verification will fail and the block is invalid.

Like proposer rewards, but unlike attestation rewards, sync committee rewards are not weighted with the participants' effective balances. This is already taken care of by the committee selection process that weights the probability of selection with the effective balance of the validator.

Running through the calculations:
 - `total_active_increments`: the sum of the effective balances of the entire active validator set normalising with the [`EFFECTIVE_BALANCE_INCREMENT`](/part3/config/preset#effective_balance_increment) to give the total number of increments.
 - `total_base_rewards`: the maximum rewards that will be awarded to all validators for all duties this epoch. It is at most $NB$ in the [notation](/part3/transition/epoch#reward-and-penalty-calculations) established earlier.
 - `max_participant_rewards`: the amount of the total reward to be given to the entire sync committee in this slot.
 - `participant_reward`: the reward per participating validator, and the penalty per non-participating validator.
 - `proposer_reward`: one seventh of the participant reward.

Each committee member that voted receives a reward of `participant_reward`, and the proposer receives one seventh of this in addition.

Each committee member that failed to vote receives a penalty of `participant_reward`, and the proposer receives nothing.

In our [notation](/part3/transition/epoch#reward-and-penalty-calculations) the maximum issuance (reward) due to sync committees per slot is as follows.

The maximum reward per slot for sync committee members:

$$
I_S = \frac{W_y}{32 \cdot W_{\Sigma}}NB
$$

The per-epoch rewards is thirty-two times this. The maximum reward for the proposer in respect of sync aggregates:

$$
I_{S_P} = \frac{W_p}{W_{\Sigma} - W_p}I_S
$$

|||
|-|-|
| Used&nbsp;by | [`process_operations()`](/part3/transition/block#def_process_operations) |
| Uses | [`get_domain()`](/part3/helper/accessors#def_get_domain), [`compute_signing_root()`](/part3/helper/misc#def_compute_signing_root), [`eth_fast_aggregate_verify()`](/part3/helper/crypto#def_eth_fast_aggregate_verify), [`get_total_active_balance()`](/part3/helper/accessors#def_get_total_active_balance), [`get_base_reward_per_increment()`](/part3/transition/epoch#def_get_base_reward_per_increment), [`increase_balance()`](/part3/helper/mutators#def_increase_balance), [`decrease_balance()`](/part3/helper/mutators#decrease_balance) |
| See&nbsp;also | [Incentivization weights](/part3/config/constants#incentivization-weights) |

## Initialise State <!-- /part3/initialise -->

### Introduction

TODO: rework and synthesis - this text is from the original Genesis

Before the Ethereum beacon chain genesis has been triggered, and for every Ethereum proof-of-work block, let `candidate_state = initialize_beacon_state_from_eth1(eth1_block_hash, eth1_timestamp, deposits)` where:

- `eth1_block_hash` is the hash of the Ethereum proof-of-work block
- `eth1_timestamp` is the Unix timestamp corresponding to `eth1_block_hash`
- `deposits` is the sequence of all deposits, ordered chronologically, up to (and including) the block with hash `eth1_block_hash`

Proof-of-work blocks must only be considered once they are at least `SECONDS_PER_ETH1_BLOCK * ETH1_FOLLOW_DISTANCE` seconds old (i.e. `eth1_timestamp + SECONDS_PER_ETH1_BLOCK * ETH1_FOLLOW_DISTANCE <= current_unix_time`). Due to this constraint, if `GENESIS_DELAY < SECONDS_PER_ETH1_BLOCK * ETH1_FOLLOW_DISTANCE`, then the `genesis_time` can happen before the time/state is first known. Values should be configured to avoid this case.

### Initialisation

Aka genesis.

This helper function is only for initializing the state for pure Altair testnets and tests.

<a id="def_initialize_beacon_state_from_eth1"></a>

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

TODO

### Genesis state

Let `genesis_state = candidate_state` whenever `is_valid_genesis_state(candidate_state) is True` for the first time.

<a id="def_is_valid_genesis_state"></a>

```python
def is_valid_genesis_state(state: BeaconState) -> bool:
    if state.genesis_time < MIN_GENESIS_TIME:
        return False
    if len(get_active_validator_indices(state, GENESIS_EPOCH)) < MIN_GENESIS_ACTIVE_VALIDATOR_COUNT:
        return False
    return True
```

TODO

### Genesis block

Let `genesis_block = BeaconBlock(state_root=hash_tree_root(genesis_state))`.

TODO

## Altair Fork Logic <!-- /part3/altair-fork -->

### Introduction

TODO

From [fork.md](https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/fork.md)

### Configuration

TODO

<a id="altair_fork_version"></a>
<a id="altair_fork_epoch"></a>

| Name | Value |
| - | - |
| `ALTAIR_FORK_VERSION` | `Version('0x01000000')` |
| `ALTAIR_FORK_EPOCH` | `Epoch(74240)` (Oct 27, 2021, 10:56:23am UTC) |

### Fork to Altair

#### Fork trigger

The fork is triggered at epoch `ALTAIR_FORK_EPOCH`.

Note that for the pure Altair networks, we don't apply `upgrade_to_altair` since it starts with Altair version logic.

#### Upgrading the state

If `state.slot % SLOTS_PER_EPOCH == 0` and `compute_epoch_at_slot(state.slot) == ALTAIR_FORK_EPOCH`, an irregular state change is made to upgrade to Altair.

The upgrade occurs after the completion of the inner loop of `process_slots` that sets `state.slot` equal to `ALTAIR_FORK_EPOCH * SLOTS_PER_EPOCH`.
Care must be taken when transitioning through the fork boundary as implementations will need a modified [state transition function](https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.md#beacon-chain-state-transition-function) that deviates from the Phase 0 document.
In particular, the outer `state_transition` function defined in the Phase 0 document will not expose the precise fork slot to execute the upgrade in the presence of skipped slots at the fork boundary. Instead the logic must be within `process_slots`.

<a id="def_translate_participation"></a>

```python
def translate_participation(state: BeaconState, pending_attestations: Sequence[phase0.PendingAttestation]) -> None:
    for attestation in pending_attestations:
        data = attestation.data
        inclusion_delay = attestation.inclusion_delay
        # Translate attestation inclusion info to flag indices
        participation_flag_indices = get_attestation_participation_flag_indices(state, data, inclusion_delay)

        # Apply flags to all attesting validators
        epoch_participation = state.previous_epoch_participation
        for index in get_attesting_indices(state, data, attestation.aggregation_bits):
            for flag_index in participation_flag_indices:
                epoch_participation[index] = add_flag(epoch_participation[index], flag_index)
```

TODO

<a id="def_upgrade_to_altair"></a>

```python
def upgrade_to_altair(pre: phase0.BeaconState) -> BeaconState:
    epoch = phase0.get_current_epoch(pre)
    post = BeaconState(
        # Versioning
        genesis_time=pre.genesis_time,
        genesis_validators_root=pre.genesis_validators_root,
        slot=pre.slot,
        fork=Fork(
            previous_version=pre.fork.current_version,
            current_version=ALTAIR_FORK_VERSION,
            epoch=epoch,
        ),
        # History
        latest_block_header=pre.latest_block_header,
        block_roots=pre.block_roots,
        state_roots=pre.state_roots,
        historical_roots=pre.historical_roots,
        # Eth1
        eth1_data=pre.eth1_data,
        eth1_data_votes=pre.eth1_data_votes,
        eth1_deposit_index=pre.eth1_deposit_index,
        # Registry
        validators=pre.validators,
        balances=pre.balances,
        # Randomness
        randao_mixes=pre.randao_mixes,
        # Slashings
        slashings=pre.slashings,
        # Participation
        previous_epoch_participation=[ParticipationFlags(0b0000_0000) for _ in range(len(pre.validators))],
        current_epoch_participation=[ParticipationFlags(0b0000_0000) for _ in range(len(pre.validators))],
        # Finality
        justification_bits=pre.justification_bits,
        previous_justified_checkpoint=pre.previous_justified_checkpoint,
        current_justified_checkpoint=pre.current_justified_checkpoint,
        finalized_checkpoint=pre.finalized_checkpoint,
        # Inactivity
        inactivity_scores=[uint64(0) for _ in range(len(pre.validators))],
    )
    # Fill in previous epoch participation from the pre state's pending attestations
    translate_participation(post, pre.previous_epoch_attestations)

    # Fill in sync committees
    # Note: A duplicate committee is assigned for the current and next committee at the fork boundary
    post.current_sync_committee = get_next_sync_committee(post)
    post.next_sync_committee = get_next_sync_committee(post)
    return post
```

TODO

# Part 4: Future <!-- /part4 -->

## Introduction <!-- /part4/introduction* -->

TODO

## The Merge <!-- /part4/the_merge* -->

### Introduction

TODO

### Architecture <!-- /part4/the_merge/architecture* -->

TODO

### API <!-- /part4/the_merge/api* -->

TODO

### Optimistic Sync <!-- /part4/the_merge/sync* -->

TODO

### The Transition <!-- /part4/the_merge/transition* -->

TODO

### Withdrawals <!-- /part4/the_merge/withdrawals* -->

TODO

## Distributed Validator Technology <!-- /part4/dvt* -->

### Introduction

TODO

### Multi-party Compute <!-- /part4/dvt/mpc* -->

TODO

### Consensus <!-- /part4/dvt/consensus* -->

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

### Design <!-- /part4/sharding/design* -->

TODO

### Specification <!-- /part4/sharding/specification* -->

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

# Appendices <!-- /appendices -->

## Staking <!-- /appendices/staking* -->

### Introduction

TODO

### Ways to Stake <!-- /appendices/staking/ways* -->

TODO

### Client Diversity <!-- /appendices/staking/diversity* -->

TODO

### FAQ <!-- /appendices/staking/faq* -->

TODO

## How to become a core dev <!-- /appendices/core-dev* -->

### So you wanna be a core dev?

TODO

### Resources <!-- /appendices/core-dev/resources* -->

TODO

## Reference <!-- /appendices/reference* -->

TODO

### Running the spec <!-- /appendices/running* -->

TODO

### Sizes of containers <!-- /appendices/reference/sizes* -->

TODO

## Glossary <!-- /appendices/reference/glossary* -->

TODO
