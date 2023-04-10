import React, { ChangeEvent, FocusEvent, useCallback, useEffect, useMemo, useState } from 'react';
// import commonStyles from '../../../styles/commonStyles.scss';
import { Form } from 'react-bootstrap';
// import { setClasses } from '../../utils/SetClasses';
// import { useSelector } from 'react-redux'
// import { stateType } from '../../pages/AppPage/store'

export type tValidatingInputBS = {
  value: string;
  error?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  divClassName?: string;
  validClassName?: string;
  notValidClassName?: string;
  showError?: boolean;
  maxChars?: number;
  withBrowse?: boolean;
  withCancel?: boolean;
  onBrowse?: () => void;
  onCancel?: () => void;
  browseTitle?: string;
  cancelTitle?: string;
  browseChar?: string;
  onChangeValidationFunc?: (value: string) => boolean;
  prevStateValidation?: string;
  onBlurValidationFunc?: (value: string) => boolean;
  id?: string,
  onValidate?: (
    error: string | undefined,
    props?: {
      [key: string]: any;
    }
  ) => void;
  userRef?: any;
  divTitle?: string;
  reducerError?: boolean,
  [key: string]: any;
};
export const ValidatingInputBS: React.FC<tValidatingInputBS> = React.memo(
  ({
    value,
    fieldName,
    error,
    id,
    onChange,
    onBlur,
    divClassName,
    validClassName,
    notValidClassName,
    className,
    showError = true,
    withBrowse = false,
    withCancel = false,
    maxChars = 150,
    onBrowse,
    onCancel,
    browseTitle = '',
    cancelTitle = '',
    browseChar = '\u{1f50d}',
    onChangeValidationFunc,
    prevStateValidation,
    onBlurValidationFunc,
    onValidate,
    userRef,
    reducerError,
    divTitle,
    ...props
  }) => {
    const [val, setVal] = useState(value);
    // const errorFromReducer = useSelector<any, string>(state => {
    //   return reducerError && state.errorsState[id]
    // })
    const newOnChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.currentTarget.value.trim();
        let res = true;
        if (onChangeValidationFunc) {
          res = onChangeValidationFunc(value);
        }
        if (res) {
          setVal(event.currentTarget.value);
        }
        onChange && onChange(event);
      },
      [onChange, maxChars, onChangeValidationFunc]
    );

    const newOnBlur = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        let value = event.currentTarget.value.trim();
        let res = true;
        if (onBlurValidationFunc) {
          res = onBlurValidationFunc(value);
        }
        if (!res) {
          // setVal(prevStateValidation);
        } else onBlur && onBlur(event);
      },
      [onBlur, maxChars, onBlurValidationFunc]
    );

    const onBrowseHandler = useCallback(() => {
      onBrowse && onBrowse();
    }, [onBrowse]);
    const onCancelHandler = useCallback(() => {
      onCancel && onCancel();
    }, [onBrowse]);
    const style = useMemo(() => {
      let val = 0;
      if (withCancel) val += 30;
      if (withBrowse) val += 30;

      return {
        paddingRight: `calc(0.75rem + ${val}px)`,
      };
    }, [withBrowse, withCancel]);

    useEffect(() => {
      setVal(value);
      if (onValidate) {
        return onValidate(error || undefined, props);
      }
    }, [value]);
    return (
      <div id={id}
      >
        <Form.Control
          as={'input'}
          value={val}
          onChange={newOnChange}
          onBlur={newOnBlur}
          style={style}
          ref={userRef}
          maxLength={props.maxLength ? props.maxLength : maxChars}
          {...props}
        />
        {(withBrowse || withCancel) && (
          <div >
            {withBrowse && (
              <button

                title={browseTitle}
                onClick={onBrowseHandler}
              >
                {browseChar}
              </button>
            )}
            {withCancel && (
              <button

                title={cancelTitle}
                onClick={onCancelHandler}
              >
                {'\u{1F5D9}'}
              </button>
            )}
          </div>
        )}
        {
          props.disabled &&
          <div />
        }
      </div>
    );
  }
)
  ;
ValidatingInputBS.displayName = 'ValidatingInputBS';

