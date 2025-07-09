// Tipos para Hive CheckBlock

export type HiveAccount = {
  id: number;
  name: string;
  [key: string]: unknown;
};

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
}

export function isTransferOp(data: unknown): data is TransferOp {
  return typeof data === "object" && data !== null && "from" in data && "to" in data && "amount" in data;
}
export function isVoteOp(data: unknown): data is VoteOp {
  return typeof data === "object" && data !== null && "voter" in data && "author" in data && "permlink" in data && "weight" in data;
}
export function isCommentOp(data: unknown): data is CommentOp {
  return typeof data === "object" && data !== null && "parent_author" in data && "parent_permlink" in data;
} 