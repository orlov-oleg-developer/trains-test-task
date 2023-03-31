export interface ISpeedLimit {
  name: string;
  speedLimit: number
}

export interface SpeedLimits {
  speedLimits: ISpeedLimit[];
  updatedSpeedLimits: ISpeedLimit[];
}

export enum SpeedLimitsActionTypes {
  SET_SPEED_LIMITS = 'SET_SPEED_LIMITS',
  UPDATE_SPEED_LIMITS = 'UPDATE_SPEED_LIMITS'
}

interface SetSpeedLimitsAction {
  type: SpeedLimitsActionTypes.SET_SPEED_LIMITS;
  payload: ISpeedLimit[];
}

interface UpdateSpeedLimitsAction {
  type: SpeedLimitsActionTypes.UPDATE_SPEED_LIMITS;
  payload: ISpeedLimit[];
}

export type SpeedLimitsAction = SetSpeedLimitsAction | UpdateSpeedLimitsAction;