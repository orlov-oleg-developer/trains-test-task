import React, { ChangeEvent, useState } from 'react'
import useValidation from "./useValidation";

const useInput = (value: any, validations: any) => {
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  // const onChange = (value: any) => {
  //   setValue(value)
  // }

  const onBlur = () => {
    setIsDirty(true)
  }

  return {
    value,
    isDirty,
    // onChange,
    onBlur,
    ...valid,
  }
}

export default useInput;
