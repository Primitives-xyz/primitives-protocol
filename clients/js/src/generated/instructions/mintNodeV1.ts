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
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findTreeConfigPda } from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  expectSome,
  getAccountMetasAndSigners,
} from '../shared';
import { NodeArgs, NodeArgsArgs, getNodeArgsSerializer } from '../types';

// Accounts.
export type MintNodeV1InstructionAccounts = {
  treeConfig?: PublicKey | Pda;
  leafOwner: PublicKey | Pda;
  leafDelegate?: PublicKey | Pda;
  merkleTree: PublicKey | Pda;
  payer?: Signer;
  treeCreatorOrDelegate?: Signer;
  logWrapper?: PublicKey | Pda;
  compressionProgram?: PublicKey | Pda;
  systemProgram?: PublicKey | Pda;
};

// Data.
export type MintNodeV1InstructionData = {
  discriminator: Array<number>;
  metadata: NodeArgs;
};

export type MintNodeV1InstructionDataArgs = { metadata: NodeArgsArgs };

export function getMintNodeV1InstructionDataSerializer(): Serializer<
  MintNodeV1InstructionDataArgs,
  MintNodeV1InstructionData
> {
  return mapSerializer<
    MintNodeV1InstructionDataArgs,
    any,
    MintNodeV1InstructionData
  >(
    struct<MintNodeV1InstructionData>(
      [
        ['discriminator', array(u8(), { size: 8 })],
        ['metadata', getNodeArgsSerializer()],
      ],
      { description: 'MintNodeV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [125, 111, 232, 245, 86, 29, 233, 87],
    })
  ) as Serializer<MintNodeV1InstructionDataArgs, MintNodeV1InstructionData>;
}

// Args.
export type MintNodeV1InstructionArgs = MintNodeV1InstructionDataArgs;

// Instruction.
export function mintNodeV1(
  context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>,
  input: MintNodeV1InstructionAccounts & MintNodeV1InstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'primitivesProtractor',
    '2NzwmRNVaGAy7hbRdJiJxUCcJRMu1iBFmJmZ87PG87yW'
  );

  // Accounts.
  const resolvedAccounts = {
    treeConfig: {
      index: 0,
      isWritable: true as boolean,
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
    treeCreatorOrDelegate: {
      index: 5,
      isWritable: false as boolean,
      value: input.treeCreatorOrDelegate ?? null,
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
  const resolvedArgs: MintNodeV1InstructionArgs = { ...input };

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
  if (!resolvedAccounts.treeCreatorOrDelegate.value) {
    resolvedAccounts.treeCreatorOrDelegate.value = context.identity;
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

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getMintNodeV1InstructionDataSerializer().serialize(
    resolvedArgs as MintNodeV1InstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
