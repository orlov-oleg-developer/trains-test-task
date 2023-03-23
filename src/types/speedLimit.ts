export interface ISpeedLimit {
  name: string;
  speedLimit: number
}

export interface SpeedLimits {
  speedLimits: ISpeedLimit[]
}

export enum SetSpeedLimitsActionTypes {
  SET_SPEED_LIMITS = 'SET_SPEED_LIMITS'
}

interface SetSpeedLimitsAction {
  type: SetSpeedLimitsActionTypes.SET_SPEED_LIMITS;
  payload: ISpeedLimit[];
}

export type SpeedLimitsAction = SetSpeedLimitsAction;