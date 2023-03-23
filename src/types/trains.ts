import { ISpeedLimit } from './speedLimit'

export interface ITrain {
  name: string;
  description: string;
  speedLimits: ISpeedLimit[];
}

export interface TrainsState {
  trains: ITrain[];
  loading: boolean;
  error: null | string;
}

export enum TrainsActionTypes {
  FETCH_TRAINS = "FETCH_TRAINS",
  FETCH_TRAINS_SUCCESS = 'FETCH_TRAINS_SUCCESS',
  FETCH_TRAINS_ERROR = 'FETCH_TRAINS_ERROR',
  SET_TRAINS = 'SET_TRAINS'
}

interface FetchTrainsAction {
  type: TrainsActionTypes.FETCH_TRAINS;
}

interface FetchTrainsSuccessAction {
  type: TrainsActionTypes.FETCH_TRAINS_SUCCESS
  payload: ITrain[];
}

interface FetchTrainsErrorAction {
  type: TrainsActionTypes.FETCH_TRAINS_ERROR;
  payload: string;
}

interface SetTrainsAction {
  type: TrainsActionTypes.SET_TRAINS;
  payload: ITrain[];
}

export type TrainsAction = FetchTrainsAction | FetchTrainsSuccessAction | FetchTrainsErrorAction | SetTrainsAction
