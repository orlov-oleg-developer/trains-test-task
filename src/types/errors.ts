export interface IErrorObject {
  [key: string]: boolean
}

export enum ErrorsActionTypes {
  SET_ERRORS = 'SET_ERRORS'
}

interface SetErrorsAction {
  type: ErrorsActionTypes.SET_ERRORS;
  payload: IErrorObject;
}

export type ErrorsAction = SetErrorsAction