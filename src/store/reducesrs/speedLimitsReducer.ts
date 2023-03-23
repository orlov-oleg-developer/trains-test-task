import { SpeedLimits, SetSpeedLimitsActionTypes, SpeedLimitsAction } from "../../types/speedLimit";

const initialState: SpeedLimits = {
  speedLimits: [{
    name: '',
    speedLimit: 0,
  }]
}

export const speedLimitsReducer = (state: SpeedLimits = initialState, action: SpeedLimitsAction): SpeedLimits => {
  switch (action.type) {
    case SetSpeedLimitsActionTypes.SET_SPEED_LIMITS:
      return { ...state, speedLimits: action.payload }
    default:
      return state
  }
}
