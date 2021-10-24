# Preface <!-- /preface -->

## What to expect

This is a book for those who want to understand Ethereum&nbsp;2.0 at a technical level. My main goals are to be interesting, informative, and accurate. I am aiming for a degree of completeness, at least touching on all the main areas. But this is Ethereum 2.0 Explained, not the Eth2 Encyclopedia, which would be a much longer book.

Who am I writing for? For people like me! People who enjoy understanding how things work. But more than that, who like to know why things are the way they are.

Although I am an Eth2 staker, and an Ethereum user, I am not writing for stakers or users here. Some of the [FAQ](TODO) may be relevant, but for practical purposes you will find better help in places like the excellent [Ethstaker](TODO) community.

This book is a non-commercial personal project. I offer it to the community in gratitude for the wonderful journey we have been on together, and in the hope it might inspire a few more budding protocol engineers.

## Acknowledgements

TODO

# Building Ethereum 2.0 <!-- /part1* -->

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

### Introduction <!-- /part1/goals/introduction* -->

### Design Goals <!-- /part1/goals/design* -->

TODO

### Attacks and Defences <!-- /part1/goals/attacks* -->

TODO

## Making the Sausage <!-- /part1/making* -->

### Introduction <!-- /part1/making/introduction* -->

### The Specifications <!-- /part1/making/specs* -->

TODO

### The Process  <!-- /part1/making/process* -->

TODO

# The Technical Stuff <!-- /part2 -->

## Introduction <!-- /part2/introduction* -->

TODO: Intro

## The Beacon Chain <!-- /part2/beacon* -->

TODO

### Terminology <!-- /part2/beacon/terms* -->

TODO

### Design Overview <!-- /part2/beacon/overview* -->

TODO

### Architecture of a Node <!-- /part2/beacon/arch* -->

TODO

### Genesis <!-- /part2/beacon/genesis* -->

## Types, Constants, Presets, and Parameters <!-- /part2/config -->

### Introduction <!-- /part2/config/introduction -->

Perhaps a chapter on constants, presets and parameters sounds drier than the Namib Desert. But I've long thought that these things provide an excellent way in to the ideas and mechanisms we'll be unpacking in detail in later chapters. Far from being a desert, this part of the spec bustles with life!

The foundation is laid with a set of custom data types. As previously discussed [TODO: link], the Eth2 spec is executable in Python. The datatypes defined at the top of the spec represent the fundamental quantities that will be reappearing frequently.

Then, with constants, presets, and parameters, we will examine the numbers that define and constrain the behaviour of the chain. Each of these quantities tells a story. Each parameter encapsulates an insight, or a concept, or a compromise. Why is it here? How has it changed over time? Where does its value come from?

The following sections explore and explain these things, presented as they appear in the spec for ease of reference.

### Custom Types <!-- /part2/config/types -->

[TODO: link to Altair spec]::

Per the spec, the rationale for defining the following specific Python custom types is, "for type hinting and readability". The data types defined here appear frequently throughout the spec; they are the building blocks for everything else.

Each type has a name, an "SSZ equivalent", and a description. SSZ is the encoding method used to pass data between clients, as described in a separate specification. Here it can be thought of as just a primitive data type.

[TODO: link instead to SSZ section]::

Throughout the spec, (almost) all integers are unsigned 64 bit numbers.

Regarding "unsigned", there was [much discussion](https://github.com/ethereum/eth2.0-specs/issues/626) around whether Eth2 should use signed or unsigned integers, but eventually unsigned was chosen. As a result, preserving the order of operations is critical in some places to avoid inadvertantly underflowing &ndash; negative numbers are forbidden.

And regarding "64 bit", early versions of the spec used [other](https://github.com/ethereum/consensus-specs/commit/4c3c8510d4abf969a7170fce10dcfb5d4df408c8) bit lengths than 64 (a "[premature optimisation](http://wiki.c2.com/?PrematureOptimization)"), but arithmetic integers are now [standardised at 64 bits](https://github.com/ethereum/consensus-specs/pull/1746) throughout the spec, the only exception being [`ParticipationFlags`](#ParticipationFlags), introduced in the Altair fork, which has type `uint8`. It could probably have been a `bytes1` type, since it is not really arithmetic,

| Name | SSZ equivalent | Description |
| - | - | - |
| `Slot` | `uint64` | a slot number |
| `Epoch` | `uint64` | an epoch number |
| `CommitteeIndex` | `uint64` | a committee index at a slot |
| `ValidatorIndex` | `uint64` | a validator registry index |
| `Gwei` | `uint64` | an amount in Gwei |
| `Root` | `Bytes32` | a Merkle root |
| `Hash32` | `Bytes32` | a 256-bit hash |
| `Version` | `Bytes4` | a fork version number |
| `DomainType` | `Bytes4` | a domain type |
| `ForkDigest` | `Bytes4` | a digest of the current fork data |
| `Domain` | `Bytes32` | a signature domain |
| `BLSPubkey` | `Bytes48` | a BLS12-381 public key |
| `BLSSignature` | `Bytes96` | a BLS12-381 signature |
| `ParticipationFlags` | `uint8` | a succinct representation of 8 boolean participation flags |

#### Slot

Time is divided into fixed length slots. Within each slot, exactly one validator is randomly selected to propose a beacon chain block. The progress of slots is the fundamental heartbeat of the beaconchain.

[TODO: link to Slots chapter]::

#### Epoch

Slots are combined into fixed-length pochs.

Epoch boundaries are the points at which the chain can be justified and finalised (by the Casper FFG mechanism), and they are also the points at which validator balances are updated, validator committees get shuffled, and validator exits, entries, and slashings are processed. That is, the main state-transition work is performed per epoch, not per slot.

Epochs have always felt like a slightly uncomfortable overlay on top of the slot-by-slot progress of the beacon chain, but necessitated by Casper FFG finality. There have been past [proposals](https://ethresear.ch/t/epoch-less-casper-ffg-liveness-safety-argument/2702?u=benjaminion) that move away from epochs, and there are possible future developments that could allow us to [do away](https://ethresear.ch/t/a-model-for-cumulative-committee-based-finality/10259?u=benjaminion) with epochs entirely. But, for the time being, they remain.

[TODO: link to Epochs chapter]::
[TODO: link to Casper FFG]::

Fun fact: Epochs were originally [called Cycles](https://github.com/ethereum/consensus-specs/pull/149).

#### CommitteeIndex

Validators are organised into committees that collectively vote (make attestations) on blocks. Each committee is active at exactly one slot per epoch, but several committees are active at each slot. This type is an index into the list of committees active at a slot.

In Phase&nbsp;0, validators are members of only one type of committee, and they are shuffled between committees every epoch. The role of the committee is to attest to the beacon block proposed by the selected member of the committee. In Phase&nbsp;1 persistent committees will be introduced that will attest to shard data blocks and are shuffled slowly.

It is the use of randomly sampled committees that makes the beacon chain design practical, while maintaining security. If all validators were active all the time, there would be an overwhelming number of messages to deal with.

[TODO: link to Committees section]::

#### ValidatorIndex

Each validator making a successful deposit is consecutively assigned a unique validator index number that is permanent, remaining even after the validator exits. This is necessary as the validator's balance is associated with its index, so it needs to be preserved even if the validator exits, since there is no mechanism available yet to transfer that balance elsewhere.

#### Gwei

All Ether amounts are specified in units of Gwei ($\smash{10^9}$ Wei, $\smash{10^{-9}}$ Ether). This is basically a hack to avoid having to use integers wider than 64 bits to store validator balances and while doing calculations, since ($\smash{2^{64}}$ Wei is only 18 Ether. Even so, in some places care needs to be taken to avoid arithmetic overflow when dealing with Ether calculations.

#### Root

Merkle roots are ubiquitous in the Eth2 protocol. They are a very succinct and tamper-proof way of representing a lot of data, an example of a [cryptographic accumulator](https://en.wikipedia.org/wiki/Accumulator_(cryptography)). Blocks are summarised by their Merkle roots; state is summarised by its Merkle root; the list of Eth1 deposits is summarised by its Merkle root; the digital signature of messages is calculated from the Merkle root of the data structure contained by the message.

#### Hash32

Merkle roots are constructed with cryptographic hash functions. In the spec, a `Hash32` type is used to represent Eth1 block roots (which are also Merkle roots).

I don't know why only the Eth1 block hash has been awarded the `Hash32` type: other hashes in the spec [remain](https://github.com/ethereum/consensus-specs/pull/2689) `Bytes32`. In early versions of the spec `Hash32` was used for all cryptographic has quantities, but this was [changed](https://github.com/ethereum/consensus-specs/pull/458) to `Bytes32`.

Anyway, it's worth taking a moment in appreciation of the humble [cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function). The hash function is arguably the single most important algorithmic innovation underpinning blockchain technology, and in fact most of our online lives. Easily overlooked, but utterly critical in enabling our modern world.

#### Version

It is expected that the protocol will get updated/upgraded from time to time, a process commonly known as a "hard-fork". For example, the upgrade from Phase0 to Altair that took place on the 27th of October 2021. Unlike Eth1, Eth2 has an in-protocol concept of a version number. This is used, for example, to prevent votes from validators on one fork (that maybe haven't upgraded yet) being counted on a different fork.

The recommended use of `Version` is described in the [Ethereum 2.0 networking specification](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/p2p-interface.md#how-should-fork-version-be-used-in-practice).

[TODO: Link to networking section]::

#### DomainType

`DomainType` is just a [cryptographic nicety](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-12#section-2.2.5): messages intended for different purposes are tagged with different domains before being hashed and possibly signed. It's a kind of name-spacing to avoid clashes; probably unnecessary, but considered a best-practice. Ten domain types are [defined in Altair](constants#domain-types).

#### ForkDigest

`ForkDigest` is the unique chain identifier. It is generated by combining information gathered at genesis with the current fork [Version](#version). It is calculated in [`compute_fork_digest`](#compute_fork_digest). As per the comment there, "4-bytes suffices for practical separation of forks/chains".

[TODO: fix up link to compute_fork_digest]::

`ForkDigest` is used extensively in the [Ethereum 2.0 networking specification](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/p2p-interface.md).

[TODO: link to networking section]::

#### Domain

Domain is the concatenation of the [`DomainType`](#domaintype) and the first 28 bytes of the [fork data root](#compute_fork_data_root). It is used when verifying any messages from a validator&mdash;the message needs to have been sent with the correct domain and fork version.

[TODO: explain the rationale]::
[TODO: fix up link to compute_fork_data_root]::

#### BLSPubkey

BLS is the digital signature scheme used by Eth2. It has some [very nice properties](https://ethresear.ch/t/pragmatic-signature-aggregation-with-bls/2105), in particular the ability to aggregate signatures. This means that many validators can sign the same message (for example, that they support block X), and these signatures can all be efficiently aggregated into a single signature for verification. The ability to do this efficiently makes Eth2 practical as a protocol. Several other protocols have adopted or will adopt BLS, such as Zcash, Chia, Dfinity and Algorand. We are using the BLS signature scheme based on the [BLS12-381 elliptic curve](https://hackmd.io/@benjaminion/bls12-381).

The `BLSPubkey` type holds a validator's public key, or the aggregation of several validators' public keys. This is used to verify messages that are claimed to have come from that validator or group of validators.

In Ethereum&nbsp;2.0, BLS public keys are elliptic curve points from the BLS12-381 $\smash{G_1}$ group, thus are 48 bytes long when compressed.

[TODO: link to BLS section]::

#### BLSSignature

As above, we are using BLS (Boneh-Lynn-Shacham) signatures over the [BLS12-381](https://hackmd.io/@benjaminion/bls12-381) (Barreto-Lynn-Scott) elliptic curve in order to sign messages between participants. As with all digital signature schemes, this guarantees both the identity of the sender and the integrity of the contents of any message.

In Ethereum&nbsp;2.0, BLS signatures are elliptic curve points from the BLS12-381 $\smash{G_2}$ group, thus are 96 bytes long when compressed.

#### ParticipationFlags

The `ParticipationFlags` type was introduced in the Altair upgrade as part of the accounting reforms.

Prior to Altair, all attestations seen in blocks were stored in state for two epoch. At the end of an epoch, finality calculations, and reward and penalty calculations for each attesting validator would be done as a batch by processing all of the attestations for the previous epoch. This created a spike in processing at epoch boundaries, and led to a noticeable increase in late blocks and attestations during the first slots of epochs. With Altair, [participation flags](https://github.com/ethereum/consensus-specs/pull/2140) are now used to continuously track validators' attestations, reducing the processing load at the end of epochs.

Three of the eight bits are [currently used](constantsn#participation-flag-indices); five are reserved for future use.

#### References

 - A primer on Merkle roots: https://www.mycryptopedia.com/merkle-tree-merkle-root-explained/
   - See also Wikipedia: https://en.wikipedia.org/wiki/Merkle_tree
 - Details of the BLS12-381 elliptic curve: https://hackmd.io/@benjaminion/bls12-381

### Constants <!-- /part2/config/constants -->

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
| `ENDIANNESS` | `'little'` |

##### `GENESIS_SLOT`

The very first slot number for the beacon chain is zero.

This might seem uncontroversial, but it actually featured heavily in the Great Integer Wars mentioned [previously](types#custom-types). The issue was that calculations on unsigned integers might have negative intermediate values, which would cause problems. A proposed work-around for this was to start the chain at a non-zero slot number. It was initially chosen to be [2^19](https://github.com/ethereum/eth2.0-specs/commit/656eae6f6ad85de5f4b9493ca0a4f8ca16d2e261#diff-51a43328a58414e132a744f3771f018cR193), then [2^63](https://github.com/ethereum/eth2.0-specs/commit/7f39f79b2e72654920b2e12127cfdfe6ad0088c6), then [2^32](https://github.com/ethereum/eth2.0-specs/commit/9b7b35bc9d18d0fac92ee142f1ea66ab289d3175), and finally [back to zero](https://github.com/ethereum/eth2.0-specs/commit/8c32128ffbda5c7e056c218cdb78ab76d856c5f5#diff-51a43328a58414e132a744f3771f018cR219).[^1]

[^1]: In my view, this madness only confirms that we should have been using signed integers all along.

##### `GENESIS_EPOCH`

Similar to the above, but widely used in the beacon chain spec. When the chain starts, it starts at epoch zero.

##### `FAR_FUTURE_EPOCH`

A candidate for the dullest constant. It's used as a default initialiser for validators' activation and exit times before they are properly set. No epoch number is bigger than this one.

##### `DEPOSIT_CONTRACT_TREE_DEPTH`

`DEPOSIT_CONTRACT_TREE_DEPTH` specifies the size of the (sparse) Merkle tree used by the Eth1 deposit contract to store deposits made. With a value of 32, this allows for $\smash{2^{32}}$ = 4.3 billion deposits. Given that the minimum deposit it 1 Ether, that number is clearly enough for quite a while.

##### `JUSTIFICATION_BITS_LENGTH`

As an optimisation to Casper FFG&mdash;the process by which finality is conferred on epochs&mdash;Eth2 uses a "k-finality" rule. We will describe this properly when we look at processing justification and finalisation. For now, this constant is just the number of bits we need to store in state to implement k-finality. For k&nbsp;=&nbsp;2 we track the justification status of the last four epochs.

[TODO: link to justification and finalisation]::

##### `ENDIANNESS`

[Endianness](https://en.wikipedia.org/wiki/Endianness) refers to the order of bytes in the binary representation of a number: most significant byte first is big-endian; least significant byte first is little-endian. For the most part these details are hidden by compilers, and we don't need to worry about endianness. But endianness matters when converting between integers and bytes, which is relevant to shuffling and proposer selection, the RANDAO, and when serialising with SSZ.

The spec began life as big-endian, but the Nimbus team from Status successfully campaigned for it to be changed to little-endian to better match processor hardware implementations, and the endianness [of WASM](https://webassembly.org/docs/portability/). SSZ was changed [first](https://github.com/ethereum/eth2.0-specs/pull/139), and then the rest of the spec [followed](https://github.com/ethereum/eth2.0-specs/pull/564).

#### Altair

##### Participation flag indices

| Name | Value |
| - | - |
| `TIMELY_SOURCE_FLAG_INDEX` | `0` |
| `TIMELY_TARGET_FLAG_INDEX` | `1` |
| `TIMELY_HEAD_FLAG_INDEX` | `2` |

TODO

##### Incentivization weights

| Name | Value |
| - | - |
| `TIMELY_SOURCE_WEIGHT` | `uint64(14)` |
| `TIMELY_TARGET_WEIGHT` | `uint64(26)` |
| `TIMELY_HEAD_WEIGHT` | `uint64(14)` |
| `SYNC_REWARD_WEIGHT` | `uint64(2)` |
| `PROPOSER_WEIGHT` | `uint64(8)` |
| `WEIGHT_DENOMINATOR` | `uint64(64)` |

These weights are used to calculate the total reward received by a validator performing its duties. There are five duties in total. Three relate to making attestations, and are attesting to the source epoch, attesting to the target epoch, and attesting to the head block. There are also rewards for participating in sync committees, and for proposing blocks.

The calculation of rewards was overhauled in the Altair upgrade. The total reward amount remains the same, but the weights were adjusted, and the gradual inclusion delay factor was removed in favour of a cliff after which no reward is payable for that duty. Previously, ignoring the inclusion delay factor, the weights (roughly) corresponded to 16 for correct source, 16 for correct target, 16 for correct head, 14 for inclusion (equivalent to correct source), and 2 for the block proposer. The factor of four increase in the proposer reward addressed a long-standing [spec bug](https://github.com/ethereum/consensus-specs/issues/2152#issuecomment-747465241).

Note that the sum of five the weights is equal to `WEIGHT_DENOMINATOR`.

<div class="image">
<img src="md/images/weights.svg" style="width:50%" /><br />
<span>The proportion of the total reward derived from each of the micro-rewards.</span>
</div>

#### Withdrawal Prefixes

| Name | Value |
| - | - |
| `BLS_WITHDRAWAL_PREFIX` | `Bytes1('0x00')` |
| `ETH1_ADDRESS_WITHDRAWAL_PREFIX` | `Bytes1('0x01')` |

##### `BLS_WITHDRAWAL_PREFIX`

Not actually used in this core beacon chain spec, but used in the [deposit contract spec](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/deposit-contract.md#withdrawal-credentials).

Validators need to register two public/private key pairs. The signing key is used constantly for signing attestations and blocks. The withdrawal key will be used in future after a validator has exited to allow the validator's Ether balance to be transferred to an Eth2 account. The withdrawal credentials are stored in the validator's record so that, in future, the owner of the validator can lay claim to the original stake and accrued rewards. The withdrawal credentials is the 32 byte SHA256 hash of the validators withdrawal public key, with the first byte set to `BLS_WITHDRAWAL_PREFIX` as a version number, in case of future changes.

##### `ETH1_ADDRESS_WITHDRAWAL_PREFIX`

TODO

#### Domain types

<a id="domain_beacon_proposer"></a>
<a id="domain_beacon_attester"></a>
<a id="domain_randao"></a>
<a id="domain_deposit"></a>
<a id="domain_voluntary_exit"></a>
<a id="domain_selection_proof"></a>
<a id="domain_aggregate_and_proof"></a>

| Name | Value |
| - | - |
| `DOMAIN_BEACON_PROPOSER`     | `DomainType('0x00000000')` |
| `DOMAIN_BEACON_ATTESTER`     | `DomainType('0x01000000')` |
| `DOMAIN_RANDAO`              | `DomainType('0x02000000')` |
| `DOMAIN_DEPOSIT`             | `DomainType('0x03000000')` |
| `DOMAIN_VOLUNTARY_EXIT`      | `DomainType('0x04000000')` |
| `DOMAIN_SELECTION_PROOF`     | `DomainType('0x05000000')` |
| `DOMAIN_AGGREGATE_AND_PROOF` | `DomainType('0x06000000')` |

These domain types are used in two ways: for signatures and for seeds.

As a cryptographic nicety, each of the protocol's five signature types is augmented with the appropriate Domain before being signed:
 - Signed block proposals incorporate `DOMAIN_BEACON_PROPOSER`
 - Signed attestations incorporate `DOMAIN_BEACON_ATTESTER`
 - RANDAO reveals are BLS signatures, and use `DOMAIN_RANDAO`
 - Deposit data mesages from Ethereum 1 incorporate `DOMAIN_DEPOSIT`
 - Validator voluntary exit messages incorporate `DOMAIN_VOLUNTARY_EXIT`

In each case, except for Eth1 deposits, the fork version is also incorporated before signing. Deposits are valid across forks, but other messages are not. Note that this would allow validators to participate, if they wish, in two independent forks of the beacon chain without fear of being slashed.

In addition, the first two domains are also used to separate the seeds for random number generation. The [original motivation](https://github.com/ethereum/eth2.0-specs/pull/1415) was to avoid occasional collisions between Phase&nbsp;0 committees and Phase&nbsp;1 persistent committees. So, when computing the beacon block proposer, `DOMAIN_BEACON_PROPOSER` is hashed into the seed, and when computing committees, `DOMAIN_BEACON_ATTESTER` is hashed into the seed.

The last two domains [were introduced](https://github.com/ethereum/eth2.0-specs/pull/1615) to implement [attestation subnet validations](https://github.com/ethereum/eth2.0-specs/issues/1595) for denial of service resistance. They are not part of the consensus-critical state-transition. In short, each slot, validators are selected to aggregate attestations from their committee. The selection is done based on the validator's signature over the slot number, mixing in `DOMAIN_SELECTION_PROOF`. Then the validator signs the whole aggregated attestation using `DOMAIN_AGGREGATE_AND_PROOF`. See the [Honest Validator](https://github.com/ethereum/eth2.0-specs/blob/v1.0.0/specs/phase0/validator.md) spec for more on this.

### Presets <!-- /part2/config/presets -->

[TODO: Update for Altair]::
[TODO: Insert headings]::

In the normal course of things, configuration parameters might not be the most exciting part of a specification. However, to gain an understanding of these parameters is to gain a huge insight into what kind of beast we are dealing with in the beacon chain.

You'll notice that most of these values are powers of two. There's no huge significance to this. Computer scientists think it's neat, and it ensures that things cleanly divide other things in general. There is a [view](https://github.com/ethereum/eth2.0-specs/issues/1633#issuecomment-592949297) that this practice helps to minimise [bike-shedding](https://en.wikipedia.org/wiki/Law_of_triviality) (endless arguments over trivial matters).

Some of the configuaration parameters below are quite technical and perhaps obscure. I'll take the opportunity here to introduce some concepts, and give more detailed explanations when they appear in later chapters.

The values of these parameters listed below are those applicable to the beacon chain mainnet. To facilitate easier initial interoperability testing and testnets, a much lighter-weight [`minimal` configuration]() has also been defined. This runs more quickly, with lower resource use (at least, with small numbers of validators) than the `mainnet` configuration here. The `minimal` configuration has fewer, smaller committees, less shuffling, six-second rather than twelve-second slots, eight-slot rather than sixty-four-slot epochs, among other changes. The available configurations can be found in the [_configs_](https://github.com/ethereum/consensus-specs/tree/dev/configs) directory of the specification.

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

##### `TARGET_COMMITTEE_SIZE`

To achieve a desirable level of security, committees need to be larger than a certain size. This is to make it infeasible for an attacker to randomly end up with a majority in a committee even if they control a significant number of validators. This target is a kind of lower-bound on committee size. If there are not enough validators to make all committees have at least 128 members, then, as a first measure, the number of committees per slot is reduced to maintain this minimum. Only if there are fewer than `SLOTS_PER_EPOCH` * `TARGET_COMMITTEE_SIZE` = 4096 validators in total will the committee size be reduced below `TARGET_COMMITTEE_SIZE`. With so few validators, the system would be insecure in any case.

[TODO: rework the following]::

> - For the safety of committees, `TARGET_COMMITTEE_SIZE` exceeds [the recommended minimum committee size of 111](http://web.archive.org/web/20190504131341/https://vitalik.ca/files/Ithaca201807_Sharding.pdf); with sufficient active validators (at least `SLOTS_PER_EPOCH * TARGET_COMMITTEE_SIZE`), the shuffling algorithm ensures committee sizes of at least `TARGET_COMMITTEE_SIZE`. (Unbiasable randomness with a Verifiable Delay Function (VDF) will improve committee robustness and lower the safe minimum committee size.)

Given a proportion of the validators controlled by an attacker, what is the probability that the attacker ends up controlling a 2/3 majority in a randomly selected committee drawn from the full set of validators? This is what Vitalik looks at in the presentation, and where the 111 number comes from (a $\smash{2^{-40}}$ chance, one-in-a-trillion, of an attacker with 1/3 of the validators gaining by chance a 2/3 majority in any one committee).

Another issue is that the randomness that we are using (a RANDAO) is not unbiasable. If an attacker happens to control a number of block proposers at the end of an epoch, they can decide to reveal or not to reveal their blocks, gaining one bit of influence per validator on the next random number. This might allow an attacker to gain more control in the next round and so on. In this way, an attacker can gain some influence over committee selection. Having a good lower-bound on committee size (`TARGET_COMMITTEE_SIZE`) helps to defend against this. Alternatively, we could use an unbiasable source of randomness such as a verifiable delay function (VDF). Use of a VDF is _not_ currently planned for Eth2, but may be implemented in future.

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

##### `INACTIVITY_PENALTY_QUOTIENT`

If the beacon chain hasn't finalised an epoch for longer than [`MIN_EPOCHS_TO_INACTIVITY_PENALTY`](#min_epochs_to_inactivity_penalty) epochs, then it enters "leak" mode. In this mode, any validator that does not vote (or votes for an incorrect target) is penalised an amount each epoch of `effective_balance * finality_delay // INACTIVITY_PENALTY_QUOTIENT`. The effect of this is the inactivity leak described [below](#inactivity_penalty_quotient_exp).

This value [was increased](https://github.com/ethereum/eth2.0-specs/commit/157f7e8ef4be3675543980e68581eb4b73284763) from 2**24 for the beacon chain launch, with the intention of resetting it in a hardfork after a few months. The goal is to penalise validators less severely in case of non-finalisation due to implementation problems in the early days.

##### `MIN_SLASHING_PENALTY_QUOTIENT`

When a validator is first convicted of a slashable offence, an initial penalty is applied. This is calculated as,

`validator.effective_balance // MIN_SLASHING_PENALTY_QUOTIENT`

Thus, the initial slashing penalty is between 0.125 Ether and 0.25 Ether depending on the validator's effective balance (which is between 16 and 32 Ether; note that effective balance is denominated in Gwei).

A further slashing penalty is applied later based on the total amount of balance slashed during a period of [`EPOCHS_PER_SLASHINGS_VECTOR`](#epochs_per_slashings_vector).

This value [was increased](https://github.com/ethereum/eth2.0-specs/commit/157f7e8ef4be3675543980e68581eb4b73284763) from 2**5 for the beacon chain launch, with the intention of resetting it in a hardfork after a few months. The goal is to punish validators less severely in case of slashing due to implementation problems in the early days.

##### `PROPORTIONAL_SLASHING_MULTIPLIER`

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

### Configuration <!-- /part2/config/params -->

TODO

#### Genesis Settings 

| Name | Value |
| - | - |
| `MIN_GENESIS_ACTIVE_VALIDATOR_COUNT` | `uint64(2**14)` (= 16,384) |
| `MIN_GENESIS_TIME` | `uint64(1606824000)` (Dec 1, 2020, 12pm UTC) |
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

Forks/upgrades are expected, if only when we move to Phase&nbsp;1. This is the fork version the beacon chain starts with at its "Genesis" event: the point at which the chain first starts producing blocks.

##### `GENESIS_DELAY`

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

## Data Structures <!-- /part2/datastructures* -->

TODO

## Consensus <!-- /part2/consensus* -->

TODO: Intro

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

TODO

### Proposing <!-- /part2/slot/proposing* -->

TODO

### Proposing <!-- /part2/slot/attesting* -->

TODO

### Aggregating <!-- /part2/slot/aggregating* -->

TODO

### Sync Committee Participation <!-- /part2/slot/sync* -->

TODO

## The Progress of an Epoch <!-- /part2/epoch* -->

TODO

### Applying Rewards and Penalties <!-- /part2/epoch/rewards* -->

TODO

### Justification and Finalisation <!-- /part2/epoch/finality* -->

TODO

### Other State Updates <!-- /part2/epoch/finality* -->

TODO

## Validator Lifecycle <!-- /part2/validator* -->

TODO

## Deposit Handling <!-- /part2/deposits* -->

TODO

### The Deposit Contract <!-- /part2/deposits/contract* -->

TODO

### Deposit Receipts <!-- /part2/deposits/receipts* -->

TODO

### Eth1 Voting and Follow Distance <!-- /part2/deposits/voting* -->

TODO

### Merkle Proofs <!-- /part2/deposits/voting* -->

TODO

### Deposit processing <!-- /part2/deposits/processing* -->

TODO

### Withdrawal Credentials <!-- /part2/deposits/credentials* -->

TODO

## Economics <!-- /part2/economics* -->

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

TODO

### Hard Forks <!-- /part2/upgrades/forks* -->

TODO

### Fork Digest <!-- /part2/upgrades/fork_digest* -->

TODO

## Networking <!-- /part2/networking* -->

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

# Ethereum's future <!-- /part3* -->

## The Merge <!-- /part3/the_merge* -->

TODO

### Rationale <!-- /part3/the_merge/rationale* -->

TODO

### Architecture <!-- /part3/the_merge/architecture* -->

TODO

### The Transition <!-- /part3/the_merge/transition* -->

TODO

## Secret Shared Validators <!-- /part3/ssv* -->

TODO

### Rationale <!-- /part3/ssv/rationale* -->

TODO

### Multi-party Compute <!-- /part3/ssv/mpc* -->

TODO

### Consensus <!-- /part3/ssv/consensus* -->

TODO

## Light Clients <!-- /part3/light_clients* -->

TODO

### Syncing <!-- /part3/light_clients/syncing* -->

TODO

### Protocol <!-- /part3/light_clients/protocol* -->

## Sharding <!-- /part3/sharding* -->

TODO

### Data Availability <!-- /part3/sharding/data_availability* -->

TODO

### Pricing <!-- /part3/sharding/pricing* -->

TODO

## Active Research Topics <!-- /part3/research* -->

TODO

### Builder / proposer split <!-- /part3/research/builders_proposers* -->

TODO

### Consensus changes <!-- /part3/research/consensus* -->

TODO

### Executable shards <!-- /part3/research/executable_shards* -->

TODO

### Verkle trees <!-- /part3/research/verkle_trees* -->

TODO

### Statelessness <!-- /part3/research/statelessness* -->

TODO

### Single Secret Leader Election <!-- /part3/research/ssle* -->

TODO

### Verifiable Delay Function <!-- /part3/research/vdf* -->

TODO

### Post-quantum crypto <!-- /part3/research/post-quantum* -->

TODO

### S[NT]ARK-friendly state transitions <!-- /part3/research/snark* -->

TODO

# Appendices <!-- /appendices* -->

TODO

## Glossary <!-- /appendices/glossary* -->

TODO

## Staking <!-- /appendices/staking* -->

TODO

### Ways to Stake <!-- /appendices/staking/ways* -->

TODO

### Client Diversity <!-- /appendices/staking/diversity* -->

TODO

### FAQ <!-- /appendices/staking/faq* -->

TODO
