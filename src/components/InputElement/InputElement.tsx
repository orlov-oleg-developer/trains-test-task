import './InputElement.css'
import React, { FC, useEffect } from 'react';
import useInput from "../../hooks/useInput";

interface InputElementProps {
  onInputChange: (name: string, speedValue: number) => void;
  inputType: string;
  value: number;
  name: string;
}

const InputElement: FC<InputElementProps> = ({ onInputChange, inputType, value, name }) => {

  const input = useInput(
    value,
    {
      isInt: true,
      isPositive: true,
    }
  )

  useEffect(() => {
    onInputChange(name, input.value);
  }, [input.value])

  return (
    <label className="form_label">
      <input
        type={`${inputType}`}
        className='form_input'
        value={input.value}
        onChange={(event) => {
          input.onChange(event.target.value);
        }}
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