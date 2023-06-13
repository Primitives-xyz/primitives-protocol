/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { findTreeConfigPda } from '../accounts';
import { addObjectProperty, isWritable } from '../shared';
import {
  MetadataArgs,
  MetadataArgsArgs,
  getMetadataArgsSerializer,
} from '../types';

// Accounts.
export type UnverifyCollectionInstructionAccounts = {
  treeAuthority?: PublicKey;
  leafOwner: PublicKey;
  leafDelegate: PublicKey;
  merkleTree: PublicKey;
  payer?: Signer;
  treeDelegate: PublicKey;
  collectionAuthority: Signer;
  collectionAuthorityRecordPda: PublicKey;
  collectionMint: PublicKey;
  collectionMetadata: PublicKey;
  editionAccount: PublicKey;
  bubblegumSigner: PublicKey;
  logWrapper?: PublicKey;
  compressionProgram?: PublicKey;
  tokenMetadataProgram?: PublicKey;
  systemProgram?: PublicKey;
};

// Data.
export type UnverifyCollectionInstructionData = {
  discriminator: Array<number>;
  root: Uint8Array;
  dataHash: Uint8Array;
  creatorHash: Uint8Array;
  nonce: bigint;
  index: number;
  message: MetadataArgs;
};

export type UnverifyCollectionInstructionDataArgs = {
  root: Uint8Array;
  dataHash: Uint8Array;
  creatorHash: Uint8Array;
  nonce: number | bigint;
  index: number;
  message: MetadataArgsArgs;
};

export function getUnverifyCollectionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  UnverifyCollectionInstructionDataArgs,
  UnverifyCollectionInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UnverifyCollectionInstructionDataArgs,
    any,
    UnverifyCollectionInstructionData
  >(
    s.struct<UnverifyCollectionInstructionData>(
      [
        ['discriminator', s.array(s.u8(), { size: 8 })],
        ['root', s.bytes({ size: 32 })],
        ['dataHash', s.bytes({ size: 32 })],
        ['creatorHash', s.bytes({ size: 32 })],
        ['nonce', s.u64()],
        ['index', s.u32()],
        ['message', getMetadataArgsSerializer(context)],
      ],
      { description: 'UnverifyCollectionInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [250, 251, 42, 106, 41, 137, 186, 168],
    })
  ) as Serializer<
    UnverifyCollectionInstructionDataArgs,
    UnverifyCollectionInstructionData
  >;
}

// Args.
export type UnverifyCollectionInstructionArgs =
  UnverifyCollectionInstructionDataArgs;

// Instruction.
export function unverifyCollection(
  context: Pick<Context, 'serializer' | 'programs' | 'eddsa' | 'payer'>,
  input: UnverifyCollectionInstructionAccounts &
    UnverifyCollectionInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'mplBubblegum',
      'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvingAccounts = {};
  const resolvingArgs = {};
  addObjectProperty(
    resolvingAccounts,
    'treeAuthority',
    input.treeAuthority ??
      findTreeConfigPda(context, { merkleTree: publicKey(input.merkleTree) })
  );
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
  addObjectProperty(
    resolvingAccounts,
    'logWrapper',
    input.logWrapper ?? {
      ...context.programs.getPublicKey(
        'splNoop',
        'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'compressionProgram',
    input.compressionProgram ?? {
      ...context.programs.getPublicKey(
        'splAccountCompression',
        'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'tokenMetadataProgram',
    input.tokenMetadataProgram ?? {
      ...context.programs.getPublicKey(
        'mplTokenMetadata',
        'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'systemProgram',
    input.systemProgram ?? {
      ...context.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      ),
      isWritable: false,
    }
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };
  const resolvedArgs = { ...input, ...resolvingArgs };

  // Tree Authority.
  keys.push({
    pubkey: resolvedAccounts.treeAuthority,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.treeAuthority, false),
  });

  // Leaf Owner.
  keys.push({
    pubkey: resolvedAccounts.leafOwner,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.leafOwner, false),
  });

  // Leaf Delegate.
  keys.push({
    pubkey: resolvedAccounts.leafDelegate,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.leafDelegate, false),
  });

  // Merkle Tree.
  keys.push({
    pubkey: resolvedAccounts.merkleTree,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.merkleTree, true),
  });

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, false),
  });

  // Tree Delegate.
  keys.push({
    pubkey: resolvedAccounts.treeDelegate,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.treeDelegate, false),
  });

  // Collection Authority.
  signers.push(resolvedAccounts.collectionAuthority);
  keys.push({
    pubkey: resolvedAccounts.collectionAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.collectionAuthority, false),
  });

  // Collection Authority Record Pda.
  keys.push({
    pubkey: resolvedAccounts.collectionAuthorityRecordPda,
    isSigner: false,
    isWritable: isWritable(
      resolvedAccounts.collectionAuthorityRecordPda,
      false
    ),
  });

  // Collection Mint.
  keys.push({
    pubkey: resolvedAccounts.collectionMint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collectionMint, false),
  });

  // Collection Metadata.
  keys.push({
    pubkey: resolvedAccounts.collectionMetadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collectionMetadata, true),
  });

  // Edition Account.
  keys.push({
    pubkey: resolvedAccounts.editionAccount,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.editionAccount, false),
  });

  // Bubblegum Signer.
  keys.push({
    pubkey: resolvedAccounts.bubblegumSigner,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.bubblegumSigner, false),
  });

  // Log Wrapper.
  keys.push({
    pubkey: resolvedAccounts.logWrapper,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.logWrapper, false),
  });

  // Compression Program.
  keys.push({
    pubkey: resolvedAccounts.compressionProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.compressionProgram, false),
  });

  // Token Metadata Program.
  keys.push({
    pubkey: resolvedAccounts.tokenMetadataProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenMetadataProgram, false),
  });

  // System Program.
  keys.push({
    pubkey: resolvedAccounts.systemProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Data.
  const data =
    getUnverifyCollectionInstructionDataSerializer(context).serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
