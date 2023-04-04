import { IErrorObject, ErrorsActionTypes } from '../../types/errors'

export const setErrors = (error: IErrorObject) => {
  return { type: ErrorsActionTypes.SET_ERRORS, payload: error }
}
