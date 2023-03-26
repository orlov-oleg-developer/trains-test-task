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
    <table className='trains-table'>
      <thead className='trains-table-head'>
        <tr className='trains-table-row'>
          <th className='trains-table-cell'>Название</th>
          <th className='trains-table-cell'>Описание</th>
        </tr>
      </thead>
      <tbody className='trains-table-body'>
        {trains &&
          trains.map((item, i) =>
            <tr className='trains-table-row' key={getAUniqueKey(i)} onClick={() => onTrainClick(item)}>
              <td className='trains-table-cell'>{item.name}</td>
              <td className='trains-table-cell'>{item.description}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default TrainsTable;