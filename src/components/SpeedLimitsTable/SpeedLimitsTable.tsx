import './SpeedLimitsTable.css'
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import InputElement from '../InputElement/InputElement';
import getAUniqueKey from '../../utils/getAUniqueKey'

interface SpeedLimitsTableProps {
  isSpeedLimitsTableActive: boolean;
  selectedTrain: string;
  onSpeedChange: (name: string, value: number) => void;
}

const SpeedLimitsTable: FC<SpeedLimitsTableProps> = ({ isSpeedLimitsTableActive, selectedTrain, onSpeedChange }) => {
  const { trains } = useTypedSelector(state => state.trains)
  const { setTrains } = useActions();
  const [speedLimits, setSpeedLimits] = useState<any[]>([])

  useEffect(() => {
    if (trains.length > 0) {
      setSpeedLimits(trains.filter(train => train.name === selectedTrain)[0].speedLimits)
    }
  }, [selectedTrain])

  return (
    <div className={`speedLimits-table__container ${isSpeedLimitsTableActive && 'speedLimits-table__container_active'}`}>
      <h2 className='speedLimits-table__title'>Ограничения по скорости</h2>
      <table className={`speedLimits-table`}>
        <thead className='speedLimits-table__head'>
          <tr key={'abc'} className='speedLimits-table__row'>
            <th className='speedLimits-table__cell speedLimits-table__cell_place_head'>Название</th>
            <th className='speedLimits-table__cell speedLimits-table__cell_place_head'>Ограничение скорости</th>
          </tr>
        </thead>
        <tbody className='speedLimits-table__body'>
          {speedLimits &&
            speedLimits.map((item, i) =>
              <tr key={getAUniqueKey(i)} className='speedLimits-table__row' >
                <td className='speedLimits-table__cell'>{item.name}</td>
                <td className='speedLimits-table__cell'>
                  <InputElement
                    onInputChange={onSpeedChange}
                    inputType='number'
                    value={item.speedLimit}
                    name={item.name} />
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      <button onClick={() => console.log('click')}>Clicker</button>
    </div>
  );
}

export default SpeedLimitsTable;