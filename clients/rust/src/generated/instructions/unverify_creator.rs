//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::NodeArgs;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct UnverifyCreator {
    pub tree_config: solana_program::pubkey::Pubkey,

    pub leaf_owner: solana_program::pubkey::Pubkey,

    pub leaf_delegate: solana_program::pubkey::Pubkey,

    pub merkle_tree: solana_program::pubkey::Pubkey,

    pub payer: solana_program::pubkey::Pubkey,

    pub creator: solana_program::pubkey::Pubkey,

    pub log_wrapper: solana_program::pubkey::Pubkey,

    pub compression_program: solana_program::pubkey::Pubkey,

    pub system_program: solana_program::pubkey::Pubkey,
}

impl UnverifyCreator {
    pub fn instruction(
        &self,
        args: UnverifyCreatorInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: UnverifyCreatorInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(9 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.tree_config,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.leaf_owner,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.leaf_delegate,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.merkle_tree,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.creator,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.log_wrapper,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.compression_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = UnverifyCreatorInstructionData::new().try_to_vec().unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::PRIMITIVES_PROTRACTOR_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct UnverifyCreatorInstructionData {
    discriminator: [u8; 8],
}

impl UnverifyCreatorInstructionData {
    fn new() -> Self {
        Self {
            discriminator: [107, 178, 57, 39, 105, 115, 112, 152],
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct UnverifyCreatorInstructionArgs {
    pub root: [u8; 32],
    pub data_hash: [u8; 32],
    pub creator_hash: [u8; 32],
    pub nonce: u64,
    pub index: u32,
    pub metadata: NodeArgs,
}

/// Instruction builder.
#[derive(Default)]
pub struct UnverifyCreatorBuilder {
    tree_config: Option<solana_program::pubkey::Pubkey>,
    leaf_owner: Option<solana_program::pubkey::Pubkey>,
    leaf_delegate: Option<solana_program::pubkey::Pubkey>,
    merkle_tree: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    creator: Option<solana_program::pubkey::Pubkey>,
    log_wrapper: Option<solana_program::pubkey::Pubkey>,
    compression_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    root: Option<[u8; 32]>,
    data_hash: Option<[u8; 32]>,
    creator_hash: Option<[u8; 32]>,
    nonce: Option<u64>,
    index: Option<u32>,
    metadata: Option<NodeArgs>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl UnverifyCreatorBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn tree_config(&mut self, tree_config: solana_program::pubkey::Pubkey) -> &mut Self {
        self.tree_config = Some(tree_config);
        self
    }
    #[inline(always)]
    pub fn leaf_owner(&mut self, leaf_owner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.leaf_owner = Some(leaf_owner);
        self
    }
    #[inline(always)]
    pub fn leaf_delegate(&mut self, leaf_delegate: solana_program::pubkey::Pubkey) -> &mut Self {
        self.leaf_delegate = Some(leaf_delegate);
        self
    }
    #[inline(always)]
    pub fn merkle_tree(&mut self, merkle_tree: solana_program::pubkey::Pubkey) -> &mut Self {
        self.merkle_tree = Some(merkle_tree);
        self
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    #[inline(always)]
    pub fn creator(&mut self, creator: solana_program::pubkey::Pubkey) -> &mut Self {
        self.creator = Some(creator);
        self
    }
    /// `[optional account, default to 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV']`
    #[inline(always)]
    pub fn log_wrapper(&mut self, log_wrapper: solana_program::pubkey::Pubkey) -> &mut Self {
        self.log_wrapper = Some(log_wrapper);
        self
    }
    /// `[optional account, default to 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK']`
    #[inline(always)]
    pub fn compression_program(
        &mut self,
        compression_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.compression_program = Some(compression_program);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    #[inline(always)]
    pub fn root(&mut self, root: [u8; 32]) -> &mut Self {
        self.root = Some(root);
        self
    }
    #[inline(always)]
    pub fn data_hash(&mut self, data_hash: [u8; 32]) -> &mut Self {
        self.data_hash = Some(data_hash);
        self
    }
    #[inline(always)]
    pub fn creator_hash(&mut self, creator_hash: [u8; 32]) -> &mut Self {
        self.creator_hash = Some(creator_hash);
        self
    }
    #[inline(always)]
    pub fn nonce(&mut self, nonce: u64) -> &mut Self {
        self.nonce = Some(nonce);
        self
    }
    #[inline(always)]
    pub fn index(&mut self, index: u32) -> &mut Self {
        self.index = Some(index);
        self
    }
    #[inline(always)]
    pub fn metadata(&mut self, metadata: NodeArgs) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = UnverifyCreator {
            tree_config: self.tree_config.expect("tree_config is not set"),
            leaf_owner: self.leaf_owner.expect("leaf_owner is not set"),
            leaf_delegate: self.leaf_delegate.expect("leaf_delegate is not set"),
            merkle_tree: self.merkle_tree.expect("merkle_tree is not set"),
            payer: self.payer.expect("payer is not set"),
            creator: self.creator.expect("creator is not set"),
            log_wrapper: self.log_wrapper.unwrap_or(solana_program::pubkey!(
                "noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"
            )),
            compression_program: self.compression_program.unwrap_or(solana_program::pubkey!(
                "cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"
            )),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
        };
        let args = UnverifyCreatorInstructionArgs {
            root: self.root.clone().expect("root is not set"),
            data_hash: self.data_hash.clone().expect("data_hash is not set"),
            creator_hash: self.creator_hash.clone().expect("creator_hash is not set"),
            nonce: self.nonce.clone().expect("nonce is not set"),
            index: self.index.clone().expect("index is not set"),
            metadata: self.metadata.clone().expect("metadata is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `unverify_creator` CPI accounts.
pub struct UnverifyCreatorCpiAccounts<'a, 'b> {
    pub tree_config: &'b solana_program::account_info::AccountInfo<'a>,

    pub leaf_owner: &'b solana_program::account_info::AccountInfo<'a>,

    pub leaf_delegate: &'b solana_program::account_info::AccountInfo<'a>,

    pub merkle_tree: &'b solana_program::account_info::AccountInfo<'a>,

    pub payer: &'b solana_program::account_info::AccountInfo<'a>,

    pub creator: &'b solana_program::account_info::AccountInfo<'a>,

    pub log_wrapper: &'b solana_program::account_info::AccountInfo<'a>,

    pub compression_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `unverify_creator` CPI instruction.
pub struct UnverifyCreatorCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,

    pub tree_config: &'b solana_program::account_info::AccountInfo<'a>,

    pub leaf_owner: &'b solana_program::account_info::AccountInfo<'a>,

    pub leaf_delegate: &'b solana_program::account_info::AccountInfo<'a>,

    pub merkle_tree: &'b solana_program::account_info::AccountInfo<'a>,

    pub payer: &'b solana_program::account_info::AccountInfo<'a>,

    pub creator: &'b solana_program::account_info::AccountInfo<'a>,

    pub log_wrapper: &'b solana_program::account_info::AccountInfo<'a>,

    pub compression_program: &'b solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: UnverifyCreatorInstructionArgs,
}

impl<'a, 'b> UnverifyCreatorCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: UnverifyCreatorCpiAccounts<'a, 'b>,
        args: UnverifyCreatorInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            tree_config: accounts.tree_config,
            leaf_owner: accounts.leaf_owner,
            leaf_delegate: accounts.leaf_delegate,
            merkle_tree: accounts.merkle_tree,
            payer: accounts.payer,
            creator: accounts.creator,
            log_wrapper: accounts.log_wrapper,
            compression_program: accounts.compression_program,
            system_program: accounts.system_program,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(9 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.tree_config.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.leaf_owner.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.leaf_delegate.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.merkle_tree.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.creator.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.log_wrapper.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.compression_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = UnverifyCreatorInstructionData::new().try_to_vec().unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::PRIMITIVES_PROTRACTOR_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(9 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.tree_config.clone());
        account_infos.push(self.leaf_owner.clone());
        account_infos.push(self.leaf_delegate.clone());
        account_infos.push(self.merkle_tree.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.creator.clone());
        account_infos.push(self.log_wrapper.clone());
        account_infos.push(self.compression_program.clone());
        account_infos.push(self.system_program.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `unverify_creator` CPI instruction builder.
pub struct UnverifyCreatorCpiBuilder<'a, 'b> {
    instruction: Box<UnverifyCreatorCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> UnverifyCreatorCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(UnverifyCreatorCpiBuilderInstruction {
            __program: program,
            tree_config: None,
            leaf_owner: None,
            leaf_delegate: None,
            merkle_tree: None,
            payer: None,
            creator: None,
            log_wrapper: None,
            compression_program: None,
            system_program: None,
            root: None,
            data_hash: None,
            creator_hash: None,
            nonce: None,
            index: None,
            metadata: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn tree_config(
        &mut self,
        tree_config: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.tree_config = Some(tree_config);
        self
    }
    #[inline(always)]
    pub fn leaf_owner(
        &mut self,
        leaf_owner: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.leaf_owner = Some(leaf_owner);
        self
    }
    #[inline(always)]
    pub fn leaf_delegate(
        &mut self,
        leaf_delegate: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.leaf_delegate = Some(leaf_delegate);
        self
    }
    #[inline(always)]
    pub fn merkle_tree(
        &mut self,
        merkle_tree: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.merkle_tree = Some(merkle_tree);
        self
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    #[inline(always)]
    pub fn creator(
        &mut self,
        creator: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.creator = Some(creator);
        self
    }
    #[inline(always)]
    pub fn log_wrapper(
        &mut self,
        log_wrapper: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.log_wrapper = Some(log_wrapper);
        self
    }
    #[inline(always)]
    pub fn compression_program(
        &mut self,
        compression_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.compression_program = Some(compression_program);
        self
    }
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    #[inline(always)]
    pub fn root(&mut self, root: [u8; 32]) -> &mut Self {
        self.instruction.root = Some(root);
        self
    }
    #[inline(always)]
    pub fn data_hash(&mut self, data_hash: [u8; 32]) -> &mut Self {
        self.instruction.data_hash = Some(data_hash);
        self
    }
    #[inline(always)]
    pub fn creator_hash(&mut self, creator_hash: [u8; 32]) -> &mut Self {
        self.instruction.creator_hash = Some(creator_hash);
        self
    }
    #[inline(always)]
    pub fn nonce(&mut self, nonce: u64) -> &mut Self {
        self.instruction.nonce = Some(nonce);
        self
    }
    #[inline(always)]
    pub fn index(&mut self, index: u32) -> &mut Self {
        self.instruction.index = Some(index);
        self
    }
    #[inline(always)]
    pub fn metadata(&mut self, metadata: NodeArgs) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = UnverifyCreatorInstructionArgs {
            root: self.instruction.root.clone().expect("root is not set"),
            data_hash: self
                .instruction
                .data_hash
                .clone()
                .expect("data_hash is not set"),
            creator_hash: self
                .instruction
                .creator_hash
                .clone()
                .expect("creator_hash is not set"),
            nonce: self.instruction.nonce.clone().expect("nonce is not set"),
            index: self.instruction.index.clone().expect("index is not set"),
            metadata: self
                .instruction
                .metadata
                .clone()
                .expect("metadata is not set"),
        };
        let instruction = UnverifyCreatorCpi {
            __program: self.instruction.__program,

            tree_config: self
                .instruction
                .tree_config
                .expect("tree_config is not set"),

            leaf_owner: self.instruction.leaf_owner.expect("leaf_owner is not set"),

            leaf_delegate: self
                .instruction
                .leaf_delegate
                .expect("leaf_delegate is not set"),

            merkle_tree: self
                .instruction
                .merkle_tree
                .expect("merkle_tree is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            creator: self.instruction.creator.expect("creator is not set"),

            log_wrapper: self
                .instruction
                .log_wrapper
                .expect("log_wrapper is not set"),

            compression_program: self
                .instruction
                .compression_program
                .expect("compression_program is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct UnverifyCreatorCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    tree_config: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    leaf_owner: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    leaf_delegate: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    merkle_tree: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    creator: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    log_wrapper: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    compression_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    root: Option<[u8; 32]>,
    data_hash: Option<[u8; 32]>,
    creator_hash: Option<[u8; 32]>,
    nonce: Option<u64>,
    index: Option<u32>,
    metadata: Option<NodeArgs>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
