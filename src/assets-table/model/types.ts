export type Nullable<T> = T | null;

export type ApiResponseGeneric<T = any> = {
  data: T;
  errorMessage: Nullable<string>;
  message: Nullable<string>;
  status: string;
  total: number;
};

export interface AssetInfo {
  active: boolean;
  asset: string;
  availableStakingBalance: number;
  bonusAmount: number;
  bonusStatus: number;
  changelly: null;
  changenow: null;
  crossMarginAvailable: boolean;
  crossMarginLeverage: number;
  explorerUrl: string;
  fullName: string;
  id: number;
  internal: boolean;
  multiplier: number;
  name: string;
  pairId: number;
  parentId: null;
  postfix: number;
  shortName: string;
  stakingBalance: number;
  stopOutLevel: number;
  system: boolean;
  title: string;
  totalStakingBalance: number;
  withdrawalCommission: number;
  withdrawalMinSum: number;
}

/**
 * s - asset id
 * p - asset price
 */
export interface AssetPriceInfo {
  s: number;
  p: number;
}

/**
 * key - asset id, value - current price
 */
export type PriceMap = Record<number, number>;
