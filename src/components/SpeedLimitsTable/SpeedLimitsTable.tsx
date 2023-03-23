import './SpeedLimitsTable.css'
import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import InputElement from '../InputElement/InputElement';
import getAUniqueKey from '../../utils/getAUniqueKey'


interface SpeedLimitsTableProps {
  isSpeedLimitsTableActive: boolean;
}

interface input {
  name: string,
  isValid: boolean
}

const SpeedLimitsTable: FC<SpeedLimitsTableProps> = ({ isSpeedLimitsTableActive }) => {
  const { speedLimits } = useTypedSelector(state => state.speedLimits)
  let speedLimitsArray = speedLimits;

  const onSubmit = () => {
    const errors = document.querySelectorAll('.form__input-error');
    if (Array.from(errors).length <= 0) {
      const sortedData = speedLimitsArray.sort(function (a, b) {
        return a.speedLimit - b.speedLimit;
      });
      console.log(sortedData)
    } else console.log('Данные не валидны, поэтому не отправлены')
  }

  const onInputChange = (name: string, speedValue: number) => {
    speedLimitsArray = speedLimitsArray.map((speedLimit) => {
      if (speedLimit.name === name) {
        return {
          name: name,
          speedLimit: speedValue,
        }
      } else return speedLimit
    })
  }

  return (
    <ul className={`speedLimitsTable ${isSpeedLimitsTableActive && 'speedLimitsTable_active'}`}>
      <li key={'abc'} className='speedLimitsTable__item speedLimitsTable__item_header'>
        <p className='speedLimitsTable__item-text'>Название</p>
        <p className='speedLimitsTable__item-text'>Ограничение скорости</p>
      </li>
      {speedLimits &&
        speedLimits.map((item, i) =>
          <li key={getAUniqueKey(i)} className='speedLimitsTable__item' >
            <p className='speedLimitsTable__item-text'>{item.name}</p>
            <InputElement
              onInputChange={onInputChange}
              inputType='number'
              value={item.speedLimit}
              name={item.name}
            />
          </li>
        )
      }
      <button
        className='speedLimitsTable__button'
        onClick={onSubmit}
      >Обновить данные</button>
    </ul>
  );
}

export default SpeedLimitsTable;