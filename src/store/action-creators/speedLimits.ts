import { SpeedLimitsActionTypes } from "../../types/speedLimit";
import { ISpeedLimit } from "../../types/speedLimit"

export const setSpeedLimits = (speedLimits: ISpeedLimit[]) => {
  return { type: SpeedLimitsActionTypes.SET_SPEED_LIMITS, payload: speedLimits }
}

export const updateSpeedLimits = (speedLimits: ISpeedLimit[]) => {
  return { type: SpeedLimitsActionTypes.UPDATE_SPEED_LIMITS, payload: speedLimits }
}
