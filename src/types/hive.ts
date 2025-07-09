// Tipos para Hive CheckBlock

export interface HiveAccount {
  id: number;
  name: string;
  [key: string]: any; // Para permitir campos adicionales
}

export interface HiveOperation {
  id: number;
  block: number;
  timestamp: string;
  op: [string, any];
}

export interface HiveError {
  error: string;
} 