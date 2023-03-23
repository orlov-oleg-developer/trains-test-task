import { SetSpeedLimitsActionTypes } from "../../types/speedLimit";
import { ISpeedLimit } from "../../types/speedLimit"


export const setSpeedLimits = (speedLimits: ISpeedLimit[]) => {
  return { type: SetSpeedLimitsActionTypes.SET_SPEED_LIMITS, payload: speedLimits }
}
