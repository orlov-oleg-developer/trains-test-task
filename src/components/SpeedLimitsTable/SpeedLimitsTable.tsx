import './SpeedLimitsTable.css'
import React, { FC, ChangeEvent } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import InputElement from '../InputElement/InputElement';
import { ValidatingInputBS } from '../Inputs/ValidatingInputBS';
import { ISpeedLimit } from '../../types/speedLimit';

interface SpeedLimitsTableProps {
  selectedTrainName: string;
}

const SpeedLimitsTable: FC<SpeedLimitsTableProps> = React.memo(({ selectedTrainName }) => {
  const { trains } = useTypedSelector(state => state.trains);
  const { setTrains } = useActions();

  const speedLimitsArray = trains.filter(train => train.name === selectedTrainName)[0].speedLimits;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, speedLimit: ISpeedLimit) => {
    console.log('handle')
    setTrains(trains.map(train => {
      if (selectedTrainName === train.name) {
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
    <div className={`speedLimits-table__container speedLimits-table__container_active`}>
      <h2 className='speedLimits-table__title'>Ограничения по скорости</h2>
      <h2 className='speedLimits-table__title'>{selectedTrainName}</h2>
      <table className={`speedLimits-table`}>
        <thead className='speedLimits-table__head'>
          <tr key={'abc'} className='speedLimits-table__row'>
            <th className='speedLimits-table__cell speedLimits-table__cell_place_head'>Название</th>
            <th className='speedLimits-table__cell speedLimits-table__cell_place_head'>Ограничение скорости</th>
          </tr>
        </thead>
        <tbody className='speedLimits-table__body'>
          {speedLimitsArray.map((speedLimit, i) =>
            <tr key={speedLimit.name} className='speedLimits-table__row' >
              <td className='speedLimits-table__cell'>{speedLimit.name}</td>
              <td className='speedLimits-table__cell'>
                <InputElement
                  speedLimit={speedLimit}
                  trainList={trains}
                  setTrainList={setTrains}
                  trainName={selectedTrainName}
                />
                {/* <ValidatingInputBS
                  value={speedLimit.speedLimit.toString()}
                  onBlur={(event) => handleChange(event, speedLimit)}
                  onBlurValidationFunc={(value) => {
                    return (Number(value) >= 0 && Number.isInteger(Number(value)))
                  }}
                /> */}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
})

export default SpeedLimitsTable;