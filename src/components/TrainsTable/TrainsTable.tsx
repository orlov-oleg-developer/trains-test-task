import './TrainsTable.css'
import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ITrain } from "../../types/trains"

import getAUniqueKey from '../../utils/getAUniqueKey'

interface TrainsTableProps {
  onTrainClick: (item: ITrain) => void;
}

const TrainsTable: FC<TrainsTableProps> = ({ onTrainClick }) => {
  const { trains, error } = useTypedSelector(state => state.trains)
  const { getTrainsInfo } = useActions();

  useEffect(() => {
    getTrainsInfo();
  }, [])

  return (
    <div className='trains-table__container'>
      <h2 className='trains-table__title'>Поезда</h2>
      <table className='trains-table'>
        <thead className='trains-table__head'>
          <tr className='trains-table__row'>
            <th className='trains-table__cell trains-table__cell_place_head'>Название</th>
            <th className='trains-table__cell trains-table__cell_place_head'>Описание</th>
          </tr>
        </thead>
        <tbody className='trains-table__body'>
          {trains &&
            trains.map((item, i) =>
              <tr className='trains-table__row' key={getAUniqueKey(i)} onClick={() => onTrainClick(item)}>
                <td className='trains-table__cell'>{item.name}</td>
                <td className='trains-table__cell'>{item.description}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default TrainsTable;