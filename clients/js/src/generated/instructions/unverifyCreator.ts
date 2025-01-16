/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  bytes,
  mapSerializer,
  struct,
  u32,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { resolveCreatorHash, resolveDataHash } from '../../hooked';
import { findTreeConfigPda } from '../accounts';
import {
  PickPartial,
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  expectSome,
  getAccountMetasAndSigners,
} from '../shared';
import { NodeArgs, NodeArgsArgs, getNodeArgsSerializer } from '../types';

// Accounts.
export type UnverifyCreatorInstructionAccounts = {
  treeConfig?: PublicKey | Pda;
  leafOwner: PublicKey | Pda;
  leafDelegate?: PublicKey | Pda;
  merkleTree: PublicKey | Pda;
  payer?: Signer;
  creator: Signer;
  logWrapper?: PublicKey | Pda;
  compressionProgram?: PublicKey | Pda;
  systemProgram?: PublicKey | Pda;
};

// Data.
export type UnverifyCreatorInstructionData = {
  discriminator: Array<number>;
  root: Uint8Array;
  dataHash: Uint8Array;
  creatorHash: Uint8Array;
  nonce: bigint;
  index: number;
  metadata: NodeArgs;
};

export type UnverifyCreatorInstructionDataArgs = {
  root: Uint8Array;
  dataHash: Uint8Array;
  creatorHash: Uint8Array;
  nonce: number | bigint;
  index: number;
  metadata: NodeArgsArgs;
};

export function getUnverifyCreatorInstructionDataSerializer(): Serializer<
  UnverifyCreatorInstructionDataArgs,
  UnverifyCreatorInstructionData
> {
  return mapSerializer<
    UnverifyCreatorInstructionDataArgs,
    any,
    UnverifyCreatorInstructionData
  >(
    struct<UnverifyCreatorInstructionData>(
      [
        ['discriminator', array(u8(), { size: 8 })],
        ['root', bytes({ size: 32 })],
        ['dataHash', bytes({ size: 32 })],
        ['creatorHash', bytes({ size: 32 })],
        ['nonce', u64()],
        ['index', u32()],
        ['metadata', getNodeArgsSerializer()],
      ],
      { description: 'UnverifyCreatorInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [107, 178, 57, 39, 105, 115, 112, 152],
    })
  ) as Serializer<
    UnverifyCreatorInstructionDataArgs,
    UnverifyCreatorInstructionData
  >;
}

// Extra Args.
export type UnverifyCreatorInstructionExtraArgs = { proof: Array<PublicKey> };

// Args.
export type UnverifyCreatorInstructionArgs = PickPartial<
  UnverifyCreatorInstructionDataArgs & UnverifyCreatorInstructionExtraArgs,
  'dataHash' | 'creatorHash' | 'proof'
>;

// Instruction.
export function unverifyCreator(
  context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>,
  input: UnverifyCreatorInstructionAccounts & UnverifyCreatorInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'primitivesProtractor',
    'GraphUyqhPmEAckWzi7zAvbvUTXf8kqX7JtuvdGYRDRh'
  );

  // Accounts.
  const resolvedAccounts = {
    treeConfig: {
      index: 0,
      isWritable: false as boolean,
      value: input.treeConfig ?? null,
    },
    leafOwner: {
      index: 1,
      isWritable: false as boolean,
      value: input.leafOwner ?? null,
    },
    leafDelegate: {
      index: 2,
      isWritable: false as boolean,
      value: input.leafDelegate ?? null,
    },
    merkleTree: {
      index: 3,
      isWritable: true as boolean,
      value: input.merkleTree ?? null,
    },
    payer: {
      index: 4,
      isWritable: false as boolean,
      value: input.payer ?? null,
    },
    creator: {
      index: 5,
      isWritable: false as boolean,
      value: input.creator ?? null,
    },
    logWrapper: {
      index: 6,
      isWritable: false as boolean,
      value: input.logWrapper ?? null,
    },
    compressionProgram: {
      index: 7,
      isWritable: false as boolean,
      value: input.compressionProgram ?? null,
    },
    systemProgram: {
      index: 8,
      isWritable: false as boolean,
      value: input.systemProgram ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: UnverifyCreatorInstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.treeConfig.value) {
    resolvedAccounts.treeConfig.value = findTreeConfigPda(context, {
      merkleTree: expectPublicKey(resolvedAccounts.merkleTree.value),
    });
  }
  if (!resolvedAccounts.leafDelegate.value) {
    resolvedAccounts.leafDelegate.value = expectSome(
      resolvedAccounts.leafOwner.value
    );
  }
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }
  if (!resolvedAccounts.logWrapper.value) {
    resolvedAccounts.logWrapper.value = context.programs.getPublicKey(
      'splNoop',
      'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV'
    );
    resolvedAccounts.logWrapper.isWritable = false;
  }
  if (!resolvedAccounts.compressionProgram.value) {
    resolvedAccounts.compressionProgram.value = context.programs.getPublicKey(
      'splAccountCompression',
      'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK'
    );
    resolvedAccounts.compressionProgram.isWritable = false;
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    );
    resolvedAccounts.systemProgram.isWritable = false;
  }
  if (!resolvedArgs.dataHash) {
    resolvedArgs.dataHash = resolveDataHash(
      context,
      resolvedAccounts,
      resolvedArgs,
      programId,
      false
    );
  }
  if (!resolvedArgs.creatorHash) {
    resolvedArgs.creatorHash = resolveCreatorHash(
      context,
      resolvedAccounts,
      resolvedArgs,
      programId,
      false
    );
  }
  if (!resolvedArgs.proof) {
    resolvedArgs.proof = [];
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Remaining Accounts.
  const remainingAccounts = resolvedArgs.proof.map((value, index) => ({
    index,
    value,
    isWritable: false,
  }));
  orderedAccounts.push(...remainingAccounts);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getUnverifyCreatorInstructionDataSerializer().serialize(
    resolvedArgs as UnverifyCreatorInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
