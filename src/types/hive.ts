// Tipos para Hive CheckBlock

// Tipos para Hive CheckBlock

export interface HiveAccount {
  id: number;
  name: string;
  created: string;
  active: {
    weight_threshold: number;
    account_auths: unknown[];
    key_auths: unknown[];
  };
  posting: {
    weight_threshold: number;
    account_auths: unknown[];
    key_auths: unknown[];
  };
  memo_key: string;
  json_metadata: string;
  posting_json_metadata: string;
  proxy: string;
  last_account_update: string;
  last_account_recovery: string;
  last_owner_update: string;
  last_active_proved: string;
  last_posting_proved: string;
  recovery_account: string;
  reset_account: string;
  comment_count: number;
  lifetime_vote_count: number;
  post_count: number;
  can_vote: boolean;
  voting_manabar: {
    current_mana: string;
    last_update_time: number;
  };
  downvote_manabar: {
    current_mana: string;
    last_update_time: number;
  };
  balance: string;
  savings_balance: string;
  hbd_balance: string;
  hbd_savings_balance: string;
  hbd_seconds: string;
  hbd_seconds_last_update: string;
  hbd_last_interest_payment: string;
  savings_hbd_seconds: string;
  savings_hbd_seconds_last_update: string;
  savings_hbd_last_interest_payment: string;
  savings_withdraw_requests: number;
  reward_hbd_balance: string;
  reward_hive_balance: string;
  reward_vesting_balance: string;
  reward_vesting_hive: string;
  vesting_shares: string;
  delegated_vesting_shares: string;
  received_vesting_shares: string;
  vesting_withdraw_rate: string;
  next_vesting_withdrawal: string;
  withdrawn: string;
  to_withdraw: string;
  withdraw_routes: number;
  curation_rewards: string;
  posting_rewards: string;
  proxied_vsf_votes: string[];
  witnesses_voted_for: number;
  last_post: string;
  last_root_post: string;
  last_vote_time: string;
  post_bandwidth: number;
  pending_claimed_accounts: number;
  [key: string]: unknown;
}

export interface HiveOperation {
  id: number;
  block: number;
  timestamp: string;
  op: [string, unknown];
}

export interface HiveError {
  error: string;
}

export interface TransferOp {
  from: string;
  to: string;
  amount: string;
  memo?: string;
}

export interface VoteOp {
  voter: string;
  author: string;
  permlink: string;
  weight: number;
}

export interface CommentOp {
  title?: string;
  parent_author: string;
  parent_permlink: string;
  author: string;
  permlink: string;
  body: string;
  json_metadata: string;
}

// Type Guards con mejor validación
export function isTransferOp(data: unknown): data is TransferOp {
  if (typeof data !== "object" || data === null) return false;
  const obj = data as Record<string, unknown>;
  return (
    typeof obj.from === "string" &&
    typeof obj.to === "string" &&
    typeof obj.amount === "string"
  );
}

export function isVoteOp(data: unknown): data is VoteOp {
  if (typeof data !== "object" || data === null) return false;
  const obj = data as Record<string, unknown>;
  return (
    typeof obj.voter === "string" &&
    typeof obj.author === "string" &&
    typeof obj.permlink === "string" &&
    typeof obj.weight === "number"
  );
}

export function isCommentOp(data: unknown): data is CommentOp {
  if (typeof data !== "object" || data === null) return false;
  const obj = data as Record<string, unknown>;
  return (
    typeof obj.parent_author === "string" &&
    typeof obj.parent_permlink === "string" &&
    typeof obj.author === "string" &&
    typeof obj.permlink === "string"
  );
}