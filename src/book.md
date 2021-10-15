[new page /preface]::
## Preface

### What to expect

This is a book for those who want to understand Ethereum&nbsp;2.0 at a technical level. My main goals are to be interesting, informative, and accurate. I am aiming for a degree of completeness, at least touching on all the main areas. But this is Ethereum 2.0 Explained, not the Eth2 Encyclopedia, which would be a much longer book.

Who am I writing for? For people like me! People who enjoy understanding how things work. But more than that, who like to know why things are the way they are.

Although I am an Eth2 staker, and an Ethereum user, I am not writing for stakers or users here. Some of the [FAQ](TODO) may be relevant, but for practical purposes you will find better help in places like the excellent [Ethstaker](TODO) community.

This book is a non-commercial personal project. I offer it to the community in gratitude for the wonderful journey we have been on together, and in the hope it might inspire a few more budding protocol engineers.

### Acknowledgements

TODO

[new page /part1]::
# Part 1: Building Ethereum 2.0

TODO - outline

[new page /part1/introduction]::
## Introduction

### Why Ethereum 2.0?

TODO

[new page /part1/introduction/history]::
### A Brief History of Ethereum's Future

TODO

[new page /part1/introduction/outline]::
### Outline

TODO

[new page /part2]::
# Part 2: Eth2 Technical Deep Dive

TODO

[new page /part2/config]::
## Types, Constants, and Parameters

I've long thought that an interesting way into the Eth2 spec would be to take a tour of its constants and parameters. Even more than the algorithms we use, these parameters tell the story of how the design evolved, and are windows into its inner workings.

The following sections are an exposition of the spec's types, constants, and parameters, presented in the order in which they appear there.

[new page /part2/config/types]::
### Custom Types

[TODO: link to Altair spec]::

[TODO: any updates for Altair?]::

Right at the top of the spec, we find the important concepts laid out. Each of the types defined there relates to something fundamental about the construction of the Ethereum&nbsp;2.0 beacon chain. As stated there, the rationale for defining these specific Python custom types is, "for type hinting and readability": these types will be appearing frequently.

Each type has a name, an "SSZ equivalent", and a description. SSZ is the encoding method used to pass data between clients and is described in [a separate specification](https://github.com/ethereum/eth2.0-specs/tree/v1.0.0/ssz). Here it can be thought of as just a data type.

[TODO: link instead to SSZ section]::

Throughout the spec, all integers are unsigned 64 bit numbers. There was [much discussion](https://github.com/ethereum/eth2.0-specs/issues/626) around whether the spec should use signed or unsigned integers, but eventually unsigned was chosen. This means that preserving the order of operations is critical in some places to avoid inadvertantly underflowing. Early versions of the spec used other bit lengths than 64 (a "[premature optimisation](http://wiki.c2.com/?PrematureOptimization)"), but arithmetic integers are now standardised at 64 bits across the spec.

#### Slot

| Name | SSZ equivalent | Description |
| - | - | - |
| `Slot` | `uint64` | a slot number |

Time is divided into slots of 12 seconds. Exactly one beacon chain block is supposed to be proposed per slot, by a validator randomly selected to do so. The progress of slots is the fundamental heartbeat of the beaconchain.

[TODO: link to Slots chapter]::

#### Epoch

<a id="epoch"></a>
||||
|-|-|-|
| `Epoch` | `uint64` | an epoch number |

Slots are combined into epochs.

Epoch boundaries are the points at which the chain can be justified and finalised (by the Casper FFG mechanism), and they are also the points at which validator balances are updated, validator committees get shuffled, and validator exits, entries, and slashings are processed. That is, the main state-transition work is performed per epoch, not per slot.

[TODO: link to Epochs chapter]::
[TODO: link to Casper FFG]::

Fun fact: Epochs were originally [called Cycles](https://github.com/ethereum/consensus-specs/pull/149).

#### CommitteeIndex

||||
|-|-|-|
| `CommitteeIndex` | `uint64` | a committee index at a slot |

Validators are organised into committees that collectively vote (make attestations) on blocks. Each committee is active at exactly one slot per epoch, but several committees are active at each slot. This type is an index into the list of committees active at a slot.

In Phase&nbsp;0, validators are members of only one type of committee, and they are shuffled between committees every epoch. The role of the committee is to attest to the beacon block proposed by the selected member of the committee. In Phase&nbsp;1 persistent committees will be introduced that will attest to shard data blocks and are shuffled slowly.

[TODO: link to Committees section]::

#### ValidatorIndex

||||
|-|-|-|
| `ValidatorIndex` | `uint64` | a validator registry index |

Every validator that enters the system is consecutively assigned a unique validator index number that is permanent, remaining even after the validator exits. This is necessary as the validator's balance is associated with its index, so it needs to be preserved even if the validator exits, since there is no mechanism available yet to transfer that balance elsewhere.

#### Gwei

||||
|-|-|-|
| `Gwei` | `uint64` | an amount in Gwei |

All Ether amounts are specified in units of Gwei ($\smash{10^9}$ Wei, $\smash{10^{-9}}$ Ether). This is basically a hack to avoid having to use integers wider than 64 bits ($\smash{2^{64}}$ Wei is only 18 Ether) to store balances and in calculations. Even so, in some places care needs to be taken to avoid arithmetic overflow when dealing with Ether calculations.

#### Root

||||
|-|-|-|
| `Root` | `Bytes32` | a Merkle root |

Merkle roots are ubiquitous in the Eth2 protocol. They are a very succint and tamper-proof way of representing a lot of data, an example of a [cryptographic accumulator](https://en.wikipedia.org/wiki/Accumulator_(cryptography)). Blocks are summarised by their Merkle roots; state is summarised by its Merkle root; the list of Eth1 deposits is summarised by its Merkle root; the digital signature of messages is calculated from the Merkle root of the data structure contained by the message.

#### Version

||||
|-|-|-|
| `Version` | `Bytes4` | a fork version number |

It is expected that the protocol will get updated/upgraded from time to time, a process commonly known as a "hard-fork". For example, the upgrade from Phase0 to Altair that took place on the 27th of October 2021. Unlike Eth1, Eth2 has an in-protocol concept of a version number. This is used, for example, to prevent votes from validators on one fork (that maybe haven't upgraded yet) being counted on a different fork.

The recommended use of `Version` is described in the [Ethereum 2.0 networking specification](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/p2p-interface.md#how-should-fork-version-be-used-in-practice).

[TODO: Link to networking section]::

#### DomainType

||||
|-|-|-|
| `DomainType` | `Bytes4` | a domain type |

`DomainType` is just a [cryptographic nicety](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-12#section-2.2.5): messages intended for different purposes are tagged with different domains before being hashed and possibly signed. It's a kind of name-spacing to avoid clashes; probably unnecessary, but considered a best-practice. Seven domain types are defined in Altair.

[TODO: Link to domain types]::
[TODO: check the number in Altair - it's likely changed]::

#### ForkDigest

||||
|-|-|-|
| `ForkDigest` | `Bytes4` | a digest of the current fork data |

`ForkDigest` is the unique chain identifier. It is generated from information gatherd at genesis and the current fork [Version](#version). It is calculated in [`compute_fork_digest`](#compute_fork_digest). As per the comment there, "4-bytes suffices for practical separation of forks/chains".

[TODO: fix up link to compute_fork_digest]::

`ForkDigest` is used extensively in the [Ethereum 2.0 networking specification](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/p2p-interface.md).

[TODO: link to networking section]::

#### Domain

||||
|-|-|-|
| `Domain` | `Bytes32` | a signature domain |

Domain is the concatenation of the [`DomainType`](#domaintype) and the first 28 bytes of the [fork data root](#compute_fork_data_root). It is used when verifying any messages from a validator&mdash;the message needs to have been sent with the correct domain and fork version.

[TODO: fix up link to compute_fork_data_root]::

#### BLSPubkey

||||
|-|-|-|
| `BLSPubkey` | `Bytes48` | a BLS12-381 public key |

BLS is the digital signature scheme used by Eth2. It has some [very nice properties](https://ethresear.ch/t/pragmatic-signature-aggregation-with-bls/2105), in particular the ability to _aggregate_ signatures. This means that many validators can sign the same message (for example, that they support block X), and these signatures can all be efficiently aggregated into a single signature for verification. The ability to do this efficiently makes Eth2 practical as a protocol. Several other protocols have adopted or will adopt BLS, such as Zcash, Chia, Dfinity and Algorand. We are using the BLS signature scheme based on the [BLS12-381 elliptic curve](https://hackmd.io/@benjaminion/bls12-381).

The `BLSPubkey` type holds a validator's public key, or the aggregation of several validators' public keys. This is used to verify messages that are claimed to have come from that validator or group of validators.

In Ethereum&nbsp;2.0, BLS public keys are elliptic curve points from the BLS12-381 $\smash{G_1}$ group, thus are 48 bytes long when compressed.

[TODO: link to BLS section]::

#### BLSSignature

||||
|-|-|-|
| `BLSSignature` | `Bytes96` | a BLS12-381 signature |

As above, we are using BLS (Boneh-Lynn-Shacham) signatures over the [BLS12-381](https://hackmd.io/@benjaminion/bls12-381) (Barreto-Lynn-Scott) elliptic curve in order to sign messages between participants. As with all digital signature schemes, this guarantees both the identity of the sender and the integrity of the contents of any message.

In Ethereum&nbsp;2.0, BLS signatures are elliptic curve points from the BLS12-381 $\smash{G_2}$ group, thus are 96 bytes long when compressed.

#### References

 - A primer on Merkle roots: https://www.mycryptopedia.com/merkle-tree-merkle-root-explained/
   - See also Wikipedia: https://en.wikipedia.org/wiki/Merkle_tree
 - For details of the BLS12-381 elliptic curve: https://hackmd.io/@benjaminion/bls12-381

[new page /part2/building_blocks]::
## The Building Blocks

[new page /part2/building_blocks/shuffling]::
### The Swap-or-Not Shuffle

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
<img src="images/shuffling_0.svg" /><br />
<span>The pivot and the first mirror index.</span>
</div>

##### 2. Traverse first mirror to pivot, swapping or not

For each index between the mirror index $m_1$ and the pivot index $p$, we decide whether we are going to swap the element or not.

Consider the element at index $i$. If we choose not to swap it, we just move on to consider the next index.

If we do decide to swap, then we exchange the list element at $i$ with that at $i'$, its image in the mirror index. That is, $i$ is swapped with $i' = m_1 - (i - m_1)$, so that $i$ and $i'$ are equidistant from $m_1$. In practice we don't exchange the elements at this point, we just update the indices $i \rightarrow i'$, and $i' \rightarrow i$.

We make the same swap-or-not decision for each index between $m_1$ and $p$.

<div class="image">
<img src="images/shuffling_1.svg" /><br />
<span>Swapping or not from the first mirror up to the pivot.</span>
</div>

The decision as to whether to swap or not is based on hashing together the random seed, the round number, and some position data. A single bit is extracted from this hash for each index, and the swap is made or not according to whether this bit is one or zero. 

##### 3. Calculate the second mirror index

After considering all the indices $i$ from $m_1$ to $p$, mirroring in $m_1$, we now find a second mirror index at $m_2$, which is the point equidistant between $p$ and the end of the list: $m_2 = m_1 + n / 2$.

<div class="image">
<img src="images/shuffling_2.svg" /><br />
<span>The second mirror index.</span>
</div>

##### 4. Traverse pivot to second mirror, swapping or not

Finally, we repeat the swap-or-not process, considering all the points $j$ from the pivot, $p$ to the second mirror $m_2$. If we choose not to swap, we just move on. If we choose to swap then we exchange the element at $j$ with its image at $j'$ in the mirror index $m_2$. Here, $j' = m_2 + (m_2 - j)$.

<div class="image">
<img src="images/shuffling_3.svg" /><br />
<span>Swapping or not from the pivot to the second mirror.</span>
</div>

##### Putting it all together

At the end of the round, we have considered all the indices between $m_1$ and $m_2$, which, by construction, is half of the total indices. For each index considered, we have either left the element in place, or swapped the element at a distinct index in the other half. Thus, all of the indices have been considered exactly once for swapping.

The next round begins by incrementing (or decrementing for a reverse shuffle) the round number, which gives us a new pivot index, and off we go again.

<div class="image">
<img src="images/shuffling_4.svg" /><br />
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

    [new page /part3]::
# Part 3: Ethereum's future

TODO

[new page /appendices]::
# Appendices

TODO

