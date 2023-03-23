import './SpeedLimitsTable.css'
import React, { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ISpeedLimit } from "../../types/speedLimit"
import InputElement from '../InputElement/InputElement';
import getAuniqueKey from '../../utils/getAUniqueKey'

interface SpeedLimitsTableProps {
  isSpeedLimitsTableActive: boolean;
}

const SpeedLimitsTable: FC<SpeedLimitsTableProps> = ({ isSpeedLimitsTableActive }) => {
  const { speedLimits } = useTypedSelector(state => state.speedLimits)

  return (
    <ul className={`speedLimitsTable ${isSpeedLimitsTableActive && 'speedLimitsTable_active'}`}>
      <li key={'abc'} className='speedLimitsTable__item speedLimitsTable__item_header'>
        <p className='speedLimitsTable__item-text'>Название</p>
        <p className='speedLimitsTable__item-text'>Ограничение скорости</p>
      </li>
      {speedLimits &&
        speedLimits.map((item, i) =>
          <li key={getAuniqueKey(i)} className='speedLimitsTable__item' >
            <p className='speedLimitsTable__item-text'>{item.name}</p>
            <InputElement
              inputType='number'
              value={item.speedLimit}
            />
          </li>
        )
      }
    </ul>
  );
}

export default SpeedLimitsTable;