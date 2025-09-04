# Protractor Program - Deployment & Handoff Guide

## Quick Deploy

Ready to ship? Here's the mainnet deployment command:

```bash
solana program deploy programs/.bin/protractor.so \
  --program-id GraphU.json \
  --keypair keypair.json \
  --fee-payer name.json \
  --with-compute-unit-price 1000 \
  --use-rpc \
  --max-sign-attempts 1000 \
  --url "https://mainnet.helius-rpc.com/?api-key=f30d6a96-5fa2-4318-b2da-0f6d1deb5c83"
```

## What You're Deploying

Protractor is a Solana program that creates and manages on-chain social graphs using compressed NFT technology (similar to Metaplex Bubblegum). Think of it as infrastructure for building relationship networks on Solana - users, content, connections, all stored efficiently using Merkle trees.

### Core Concepts

The program handles two main primitives:

- **Nodes**: Individual entities in the graph (users, posts, content, etc.)
- **Edges**: Connections between nodes (follows, likes, relationships, etc.)

Both are stored as compressed NFTs in Merkle trees, making them incredibly cheap to create while maintaining cryptographic security.

## Pre-Deployment Checklist

### 1. Key Files You Need

Make sure these are in place:

- `keypair.json` - Upgrade authority wallet (keep this VERY safe)
- `name.json` - Fee payer wallet (needs SOL for deployment)
- `GraphU.json` - Program ID configuration
- `programs/.bin/protractor.so` - The compiled program binary

### 2. Build the Program

If you need to rebuild from source:

```bash
# Install dependencies first
pnpm install

# Build the program
pnpm programs:build
```

This creates the binary at `programs/.bin/protractor.so`

### 3. Test Everything

Run the test suite before deploying:

```bash
# BPF tests
pnpm programs:test

# Start local validator for JS tests
pnpm validator

# In another terminal, run JS tests
cd clients/js
pnpm install
pnpm build && pnpm test
```

## Program Architecture

### Instructions Available

The program exposes these main operations:

1. **create_tree** - Initialize a new Merkle tree for storing graph data
2. **mint_node_v1** - Create a new node (entity) in the graph
3. **mint_edge_v1** - Create a connection between nodes
4. **set_tree_delegate** - Delegate tree authority
5. **verify_creator** / **unverify_creator** - Manage creator verification
6. **update_metadata** - Update node/edge properties
7. **burn** - Remove nodes from the tree

### Key Features

- **Compression**: Uses SPL Account Compression for cost-efficient storage
- **Flexible Permissions**: Trees can be public or controlled by delegates
- **Creator Verification**: Built-in creator authentication system
- **Mutable Metadata**: Nodes and edges can have updateable properties

### Program ID

The program is deployed at: `GraphUyqhPmEAckWzi7zAvbvUTXf8kqX7JtuvdGYRDRh`

## Working with the Program

### TypeScript SDK

Install the client library:

```bash
npm install @primitives-xyz/protractor
```

Basic usage:

```typescript
import { createTree, mintNodeV1 } from '@primitives-xyz/protractor';

// Create a tree
const tree = await createTree(context, {
  maxDepth: 14,
  maxBufferSize: 64,
  public: true
});

// Mint a node
const node = await mintNodeV1(context, {
  merkleTree: tree.publicKey,
  message: {
    label: "User Profile",
    properties: [],
    isMutable: true,
    creators: [...]
  }
});
```

### Rust Integration

The Rust client is coming soon, but you can interact directly using Anchor:

```rust
use protractor::{NodeArgs, EdgeArgs};

// Interact with the program using CPI
```

## Deployment Notes

### Mainnet Deployment

The deployment command uses several important flags:

- `--with-compute-unit-price 1000` - Priority fee for faster processing
- `--max-sign-attempts 1000` - Retries for network issues
- `--use-rpc` - Uses RPC endpoint instead of default

### Post-Deployment

After deploying:

1. **Verify the deployment**:

```bash
solana program show GraphUyqhPmEAckWzi7zAvbvUTXf8kqX7JtuvdGYRDRh
```

2. **Set upgrade authority** (if needed):

```bash
solana program set-upgrade-authority GraphUyqhPmEAckWzi7zAvbvUTXf8kqX7JtuvdGYRDRh \
  --new-upgrade-authority <NEW_AUTHORITY> \
  --keypair keypair.json
```

3. **Initialize your first tree** to test everything works

## Cost Considerations

- Tree creation: ~0.2 SOL (depends on tree size)
- Node/Edge minting: ~0.00001 SOL per item (compressed)
- Updates: Minimal transaction fees

The compression makes this extremely cost-effective at scale. A tree with depth 20 can store over 1 million items.

## Security & Best Practices

### Critical Security Points

1. **Upgrade Authority**: The `keypair.json` controls program upgrades. Store it offline after deployment.
2. **Tree Delegates**: Only trusted addresses should be tree delegates
3. **Creator Verification**: Always verify creators for important nodes/edges

### Recommended Setup

For production:

- Use a multisig for upgrade authority
- Implement rate limiting at the application layer
- Monitor tree capacity (can't be increased after creation)

## Monitoring & Maintenance

### Track Your Trees

Trees have fixed capacity. Monitor usage:

```typescript
const treeAccount = await getTreeConfig(context, treeAddress);
console.log(
  `Used: ${treeAccount.numMinted} / ${treeAccount.totalMintCapacity}`
);
```

### RPC Requirements

This program requires an RPC that supports:

- Account compression indexing
- GetAssetProof API
- Transaction history

Recommended providers: Helius, Triton, GenesysGo

## Troubleshooting

### Common Issues

1. **"Insufficient mint capacity"** - Tree is full, create a new one
2. **"Tree authority incorrect"** - Check delegate/creator permissions
3. **"Creator did not verify"** - Signer must be in creators array

### Debug Mode

For detailed logs during testing:

```bash
RUST_LOG=debug pnpm programs:test
```

## Resources

- [Account Compression Docs](https://docs.solana.com/developing/guides/compressed-nfts)
- [Merkle Tree Implementation](https://github.com/solana-labs/solana-program-library/tree/master/account-compression)
- Program Tests: `/programs/protractor/program/tests/`
- JS Examples: `/clients/js/test/`

## Support & Questions

The codebase is structured for clarity:

- `/programs/protractor/program/src/` - Core program logic
- `/clients/js/src/` - TypeScript SDK
- `/idls/` - Program interfaces

Start with the test files to understand usage patterns. The processor modules show how each instruction works under the hood.

---

Ready to build the social graph of Solana? This program gives you the primitives. The rest is up to your imagination.
