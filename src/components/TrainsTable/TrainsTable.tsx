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
    <ul className="trains">
      <li key={'abcd'} className='trains__item trains__item_header'>
        <p className='trains__item-text'>Название</p>
        <p className='trains__item-text'>Описание</p>
      </li>
      {trains &&
        trains.map((item, i) =>
          <li key={getAUniqueKey(i)} className='trains__item' onClick={() => onTrainClick(item)}>
            <p className='trains__item-text'>{item.name}</p>
            <p className='trains__item-text'>{item.description}</p>
          </li>
        )
      }
      {error && <p>Произошла ошибка при отправке запроса на сервер</p>}
    </ul>
  );
}

export default TrainsTable;