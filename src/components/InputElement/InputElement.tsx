import './InputElement.css'
import React, { FC, useEffect, useState } from 'react';
import useInput from "../../hooks/useInput";

interface InputElementProps {
  inputType: string;
  value: number;
}

const InputElement: FC<InputElementProps> = ({ inputType, value }) => {

  const input = useInput(
    value,
    {
      isInt: true,
      isPositive: true,
    }
  )

  useEffect(() => {
    console.log(input.isInt)
  }, [input])


  return (
    <label className="form_label">
      <input
        type={`${inputType}`}
        className='form_input'
        value={input.value}
        onChange={(event) => input.onChange(event.target.value)}
        onBlur={() => input.onBlur()}
      />
      {(input.isDirty && input.isInt.state) &&
        <span className="form__input-error">{input.isInt.errorMessage}</span>
      }
      {(input.isDirty && input.isPositive.state) &&
        <span className="form__input-error">{input.isPositive.errorMessage}</span>
      }
    </label>

  );
}

export default InputElement;