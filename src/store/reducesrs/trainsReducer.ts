import { TrainsAction, TrainsActionTypes, TrainsState } from "../../types/trains";

const initialState: TrainsState = {
  trains: [{
    name: '',
    description: '',
    speedLimits: [{
      name: '',
      speedLimit: 0,
    }],
  }],
  loading: false,
  error: null
}

export const trainsReducer = (state: TrainsState = initialState, action: TrainsAction): TrainsState => {
  switch (action.type) {
    case TrainsActionTypes.FETCH_TRAINS:
      return { ...state, loading: true, error: null }
    case TrainsActionTypes.FETCH_TRAINS_SUCCESS:
      return { loading: false, error: null, trains: action.payload }
    case TrainsActionTypes.FETCH_TRAINS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TrainsActionTypes.SET_TRAINS:
      return { loading: false, error: null, trains: action.payload }
    default:
      return state
  }
}
