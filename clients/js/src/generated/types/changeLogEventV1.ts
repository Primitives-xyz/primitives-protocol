/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, PublicKey, Serializer } from '@metaplex-foundation/umi';
import { PathNode, PathNodeArgs, getPathNodeSerializer } from '.';

export type ChangeLogEventV1 = {
  /** Public key of the ConcurrentMerkleTree */
  id: PublicKey;
  /** Nodes of off-chain merkle tree needed by indexer */
  path: Array<PathNode>;
  /**
   * Index corresponding to the number of successful operations on this tree.
   * Used by the off-chain indexer to figure out when there are gaps to be backfilled.
   */
  seq: bigint;
  /** Bitmap of node parity (used when hashing) */
  index: number;
};

export type ChangeLogEventV1Args = {
  /** Public key of the ConcurrentMerkleTree */
  id: PublicKey;
  /** Nodes of off-chain merkle tree needed by indexer */
  path: Array<PathNodeArgs>;
  /**
   * Index corresponding to the number of successful operations on this tree.
   * Used by the off-chain indexer to figure out when there are gaps to be backfilled.
   */
  seq: number | bigint;
  /** Bitmap of node parity (used when hashing) */
  index: number;
};

export function getChangeLogEventV1Serializer(
  context: Pick<Context, 'serializer'>
): Serializer<ChangeLogEventV1Args, ChangeLogEventV1> {
  const s = context.serializer;
  return s.struct<ChangeLogEventV1>(
    [
      ['id', s.publicKey()],
      ['path', s.array(getPathNodeSerializer(context))],
      ['seq', s.u64()],
      ['index', s.u32()],
    ],
    { description: 'ChangeLogEventV1' }
  ) as Serializer<ChangeLogEventV1Args, ChangeLogEventV1>;
}