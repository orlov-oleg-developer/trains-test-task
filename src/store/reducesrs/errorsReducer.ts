import { IErrorObject, ErrorsAction, ErrorsActionTypes } from '../../types/errors'

const initialState: IErrorObject = {}

export const errorsReducer = (state: IErrorObject = initialState, action: ErrorsAction): IErrorObject => {
  switch (action.type) {
    case ErrorsActionTypes.SET_ERRORS:
      return { ...state, [`${Object.keys(action.payload)[0]}`]: Object.values(action.payload)[0] }
    default:
      return state
  }
}