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
import { addAccountMeta, addObjectProperty } from '../shared';
import {
  DecompressionPermission,
  DecompressionPermissionArgs,
  getDecompressionPermissionSerializer,
} from '../types';

// Accounts.
export type SetDecompressionPermissionInstructionAccounts = {
  treeConfig: PublicKey | Pda;
  treeCreator?: Signer;
};

// Data.
export type SetDecompressionPermissionInstructionData = {
  discriminator: Array<number>;
  permission: DecompressionPermission;
};

export type SetDecompressionPermissionInstructionDataArgs = {
  permission: DecompressionPermissionArgs;
};

/** @deprecated Use `getSetDecompressionPermissionInstructionDataSerializer()` without any argument instead. */
export function getSetDecompressionPermissionInstructionDataSerializer(
  _context: object
): Serializer<
  SetDecompressionPermissionInstructionDataArgs,
  SetDecompressionPermissionInstructionData
>;
export function getSetDecompressionPermissionInstructionDataSerializer(): Serializer<
  SetDecompressionPermissionInstructionDataArgs,
  SetDecompressionPermissionInstructionData
>;
export function getSetDecompressionPermissionInstructionDataSerializer(
  _context: object = {}
): Serializer<
  SetDecompressionPermissionInstructionDataArgs,
  SetDecompressionPermissionInstructionData
> {
  return mapSerializer<
    SetDecompressionPermissionInstructionDataArgs,
    any,
    SetDecompressionPermissionInstructionData
  >(
    struct<SetDecompressionPermissionInstructionData>(
      [
        ['discriminator', array(u8(), { size: 8 })],
        ['permission', getDecompressionPermissionSerializer()],
      ],
      { description: 'SetDecompressionPermissionInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [37, 232, 198, 199, 64, 102, 128, 49],
    })
  ) as Serializer<
    SetDecompressionPermissionInstructionDataArgs,
    SetDecompressionPermissionInstructionData
  >;
}

// Args.
export type SetDecompressionPermissionInstructionArgs =
  SetDecompressionPermissionInstructionDataArgs;

// Instruction.
export function setDecompressionPermission(
  context: Pick<Context, 'programs' | 'identity'>,
  input: SetDecompressionPermissionInstructionAccounts &
    SetDecompressionPermissionInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplBubblegum',
    'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    treeConfig: [input.treeConfig, true] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'treeCreator',
    input.treeCreator
      ? ([input.treeCreator, false] as const)
      : ([context.identity, false] as const)
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.treeConfig, false);
  addAccountMeta(keys, signers, resolvedAccounts.treeCreator, false);

  // Data.
  const data =
    getSetDecompressionPermissionInstructionDataSerializer().serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
