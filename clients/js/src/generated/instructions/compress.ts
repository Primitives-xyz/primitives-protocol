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

// Accounts.
export type CompressInstructionAccounts = {
  treeAuthority: PublicKey;
  leafOwner: Signer;
  leafDelegate: PublicKey;
  merkleTree: PublicKey;
  tokenAccount: PublicKey;
  mint: PublicKey;
  metadata: PublicKey;
  masterEdition: PublicKey;
  payer?: Signer;
  logWrapper: PublicKey;
  compressionProgram: PublicKey;
  tokenProgram?: PublicKey;
  tokenMetadataProgram?: PublicKey;
  systemProgram?: PublicKey;
};

// Data.
export type CompressInstructionData = { discriminator: Array<number> };

export type CompressInstructionDataArgs = {};

export function getCompressInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<CompressInstructionDataArgs, CompressInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    CompressInstructionDataArgs,
    any,
    CompressInstructionData
  >(
    s.struct<CompressInstructionData>(
      [['discriminator', s.array(s.u8(), { size: 8 })]],
      { description: 'CompressInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [82, 193, 176, 117, 176, 21, 115, 253],
    })
  ) as Serializer<CompressInstructionDataArgs, CompressInstructionData>;
}

// Instruction.
export function compress(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: CompressInstructionAccounts
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
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
  addObjectProperty(
    resolvingAccounts,
    'tokenProgram',
    input.tokenProgram ?? {
      ...context.programs.getPublicKey(
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
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

  // Tree Authority.
  keys.push({
    pubkey: resolvedAccounts.treeAuthority,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.treeAuthority, false),
  });

  // Leaf Owner.
  signers.push(resolvedAccounts.leafOwner);
  keys.push({
    pubkey: resolvedAccounts.leafOwner.publicKey,
    isSigner: true,
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
    isWritable: isWritable(resolvedAccounts.merkleTree, false),
  });

  // Token Account.
  keys.push({
    pubkey: resolvedAccounts.tokenAccount,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: resolvedAccounts.mint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, true),
  });

  // Metadata.
  keys.push({
    pubkey: resolvedAccounts.metadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Master Edition.
  keys.push({
    pubkey: resolvedAccounts.masterEdition,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEdition, true),
  });

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, true),
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

  // Token Program.
  keys.push({
    pubkey: resolvedAccounts.tokenProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenProgram, false),
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
  const data = getCompressInstructionDataSerializer(context).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
