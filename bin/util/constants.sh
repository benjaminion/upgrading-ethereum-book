#!/bin/bash

config=$(mktemp)
phase0=$(mktemp)
altair=$(mktemp)

wget -O $config https://raw.githubusercontent.com/ethereum/consensus-specs/v1.1.1/configs/mainnet.yaml
wget -O $phase0 https://raw.githubusercontent.com/ethereum/consensus-specs/v1.1.1/presets/mainnet/phase0.yaml
wget -O $altair https://raw.githubusercontent.com/ethereum/consensus-specs/v1.1.1/presets/mainnet/altair.yaml

cat $config $phase0 $altair | awk '
BEGIN {
    print "{"
}

# Skip comment lines
/^#/ { next }

/: / {
    key   = gensub(/^(.+): .+$/, "\\1", "1")
    value = gensub(/^.+: (.+)$/, "\\1", "1")

    print "  \"" key "\": \"" value "\","
}

END {
    # Lift constants from the spec manually
    print "  \"GENESIS_SLOT\": \"Slot(0)\","
    print "  \"GENESIS_EPOCH\": \"Epoch(0)\","
    print "  \"FAR_FUTURE_EPOCH\": \"Epoch(2**64 - 1)\","
    print "  \"BASE_REWARDS_PER_EPOCH\": \"uint64(4)\","
    print "  \"DEPOSIT_CONTRACT_TREE_DEPTH\": \"uint64(2**5) (= 32)\","
    print "  \"JUSTIFICATION_BITS_LENGTH\": \"uint64(4)\","
    print "  \"ENDIANNESS\": \"'little'\","
    print "  \"BLS_WITHDRAWAL_PREFIX\": \"Bytes1('0x00')\","
    print "  \"ETH1_ADDRESS_WITHDRAWAL_PREFIX\": \"Bytes1('0x01')\","
    print "  \"TIMELY_SOURCE_FLAG_INDEX\": \"0\","
    print "  \"TIMELY_TARGET_FLAG_INDEX\": \"1\","
    print "  \"TIMELY_HEAD_FLAG_INDEX\": \"2\","
    print "  \"TIMELY_SOURCE_WEIGHT\": \"uint64(14)\","
    print "  \"TIMELY_TARGET_WEIGHT\": \"uint64(26)\","
    print "  \"TIMELY_HEAD_WEIGHT\": \"uint64(14)\","
    print "  \"SYNC_REWARD_WEIGHT\": \"uint64(2)\","
    print "  \"PROPOSER_WEIGHT\": \"uint64(8)\","
    print "  \"WEIGHT_DENOMINATOR\": \"uint64(64)\","
    print "  \"DOMAIN_SYNC_COMMITTEE\": \"DomainType('0x07000000')\","
    print "  \"DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF\": \"DomainType('0x08000000')\","
    print "  \"DOMAIN_CONTRIBUTION_AND_PROOF\": \"DomainType('0x09000000')\","
    print "  \"DOMAIN_BEACON_PROPOSER\": \"DomainType('0x00000000')\","
    print "  \"DOMAIN_BEACON_ATTESTER\": \"DomainType('0x01000000')\","
    print "  \"DOMAIN_RANDAO\": \"DomainType('0x02000000')\","
    print "  \"DOMAIN_DEPOSIT\": \"DomainType('0x03000000')\","
    print "  \"DOMAIN_VOLUNTARY_EXIT\": \"DomainType('0x04000000')\","
    print "  \"DOMAIN_SELECTION_PROOF\": \"DomainType('0x05000000')\","
    print "  \"DOMAIN_AGGREGATE_AND_PROOF\": \"DomainType('0x06000000')\""
    print "}"
}'
