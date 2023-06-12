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
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { addObjectProperty, isWritable } from '../shared';
import {
  MetadataArgs,
  MetadataArgsArgs,
  getMetadataArgsSerializer,
} from '../types';

// Accounts.
export type SetAndVerifyCollectionInstructionAccounts = {
  treeAuthority: PublicKey;
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
  logWrapper: PublicKey;
  compressionProgram: PublicKey;
  tokenMetadataProgram?: PublicKey;
  systemProgram?: PublicKey;
};

// Data.
export type SetAndVerifyCollectionInstructionData = {
  discriminator: Array<number>;
  root: Uint8Array;
  dataHash: Uint8Array;
  creatorHash: Uint8Array;
  nonce: bigint;
  index: number;
  message: MetadataArgs;
  collection: PublicKey;
};

export type SetAndVerifyCollectionInstructionDataArgs = {
  root: Uint8Array;
  dataHash: Uint8Array;
  creatorHash: Uint8Array;
  nonce: number | bigint;
  index: number;
  message: MetadataArgsArgs;
  collection: PublicKey;
};

export function getSetAndVerifyCollectionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  SetAndVerifyCollectionInstructionDataArgs,
  SetAndVerifyCollectionInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    SetAndVerifyCollectionInstructionDataArgs,
    any,
    SetAndVerifyCollectionInstructionData
  >(
    s.struct<SetAndVerifyCollectionInstructionData>(
      [
        ['discriminator', s.array(s.u8(), { size: 8 })],
        ['root', s.bytes({ size: 32 })],
        ['dataHash', s.bytes({ size: 32 })],
        ['creatorHash', s.bytes({ size: 32 })],
        ['nonce', s.u64()],
        ['index', s.u32()],
        ['message', getMetadataArgsSerializer(context)],
        ['collection', s.publicKey()],
      ],
      { description: 'SetAndVerifyCollectionInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [235, 242, 121, 216, 158, 234, 180, 234],
    })
  ) as Serializer<
    SetAndVerifyCollectionInstructionDataArgs,
    SetAndVerifyCollectionInstructionData
  >;
}

// Args.
export type SetAndVerifyCollectionInstructionArgs =
  SetAndVerifyCollectionInstructionDataArgs;

// Instruction.
export function setAndVerifyCollection(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: SetAndVerifyCollectionInstructionAccounts &
    SetAndVerifyCollectionInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'bubblegum',
      'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvingAccounts = {};
  const resolvingArgs = {};
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
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
    getSetAndVerifyCollectionInstructionDataSerializer(context).serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}