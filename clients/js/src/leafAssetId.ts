import {
  Context,
  Pda,
  PublicKey,
  TransactionSignature,
} from '@metaplex-foundation/umi';
import { publicKey, string, u64 } from '@metaplex-foundation/umi/serializers';
import {
  LeafSchema,
  PRIMITIVES_PROTRACTOR_PROGRAM_ID,
  getLeafSchemaSerializer,
} from './generated';

export function findLeafNodeOrEdgeIdPda(
  context: Pick<Context, 'programs' | 'eddsa'>,
  seeds: {
    merkleTree: PublicKey;
    leafIndex: number | bigint;
  }
): Pda {
  const programId = context.programs.getPublicKey(
    'primitivesProtractor',
    PRIMITIVES_PROTRACTOR_PROGRAM_ID
  );
  return context.eddsa.findPda(programId, [
    string({ size: 'variable' }).serialize('asset'),
    publicKey().serialize(seeds.merkleTree),
    u64().serialize(seeds.leafIndex),
  ]);
}

export async function parseLeafFromMintNodeV1Transaction(
  context: Pick<Context, 'programs' | 'eddsa' | 'rpc'>,
  signature: TransactionSignature
): Promise<LeafSchema> {
  const transaction = await context.rpc.getTransaction(signature);
  const innerInstructions = transaction?.meta.innerInstructions;

  if (innerInstructions) {
    const leaf = getLeafSchemaSerializer().deserialize(
      innerInstructions[0].instructions[0].data.slice(8)
    );
    return leaf[0];
  }

  throw new Error('Could not parse leaf from transaction');
}
