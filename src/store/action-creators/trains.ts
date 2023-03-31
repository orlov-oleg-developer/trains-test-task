import { URL } from '../../config/config'
import { Dispatch } from "redux";
import { ITrain, TrainsAction, TrainsActionTypes } from "../../types/trains";

export const getTrainsInfo = () => {
  return async (dispatch: Dispatch<TrainsAction>) => {
    try {
      dispatch({ type: TrainsActionTypes.FETCH_TRAINS })
      const res = await fetch(`${URL}`,
        {
          method: 'GET',
        })
      if (res.ok) {
        const trains = await res.json();
        dispatch({ type: TrainsActionTypes.FETCH_TRAINS_SUCCESS, payload: trains })
      } else await Promise.reject(res)
    } catch (e: any) {
      dispatch({
        type: TrainsActionTypes.FETCH_TRAINS_ERROR,
        payload: e
      })
    }
  }
}

export const setTrains = (trains: ITrain[]) => {
  return { type: TrainsActionTypes.SET_TRAINS, payload: trains }
}
