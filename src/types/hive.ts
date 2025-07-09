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