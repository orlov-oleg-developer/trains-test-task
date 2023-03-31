import { SpeedLimits, SpeedLimitsActionTypes, SpeedLimitsAction } from "../../types/speedLimit";

const initialState: SpeedLimits = {
  speedLimits: [{
    name: '',
    speedLimit: 0,
  }],
  updatedSpeedLimits: []
}

export const speedLimitsReducer = (state: SpeedLimits = initialState, action: SpeedLimitsAction): SpeedLimits => {
  switch (action.type) {
    case SpeedLimitsActionTypes.SET_SPEED_LIMITS:
      return { ...state, speedLimits: action.payload }
    case SpeedLimitsActionTypes.UPDATE_SPEED_LIMITS:
      return { ...state, updatedSpeedLimits: action.payload }
    default:
      return state
  }
}
