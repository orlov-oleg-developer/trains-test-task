import './InputElement.css'
import { ISpeedLimit } from "../../types/speedLimit"
import { ITrain } from "../../types/trains"
import React, { FC, useEffect } from 'react';

import useInput from '../../hooks/useInput';

interface InputElementProps {
  speedLimit: ISpeedLimit;
  trainList: ITrain[];
  setTrainList: (e: ITrain[]) => void;
  trainName: string;
}

const InputElement: FC<InputElementProps> = ({ speedLimit, trainList, setTrainList, trainName }) => {
  const input = useInput(
    speedLimit.speedLimit,
    {
      isInt: true,
      isPositive: true,
    }
  )

  const handleChange = (e: any) => {
    setTrainList(trainList.map(train => {
      if (trainName === train.name) {
        return ({
          ...train,
          speedLimits: train.speedLimits.
            map((speed) => {
              if (speed.name === speedLimit.name) {
                return ({ ...speed, speedLimit: Number(+e.target.value) })
              } else return speed
            })
            .sort((a, b) => { return a.speedLimit - b.speedLimit })
        })
      } else return train
    }))
  }

  return (
    <label className="form_label">
      <input
        className="form_input"
        type="number"
        value={input.value}
        onChange={handleChange}
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