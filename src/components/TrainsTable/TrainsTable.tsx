import './TrainsTable.css'
import React, { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ITrain } from "../../types/trains"


const TrainsTable: FC = () => {
  const { trains, error, loading } = useTypedSelector(state => state.trains)

  const handleClickItem = (item: ITrain) => {
    console.log(item.name)
  }

  return (
    <ul className="trains">
      <li className='trains__item trains__item_header'>
        <p className='trains__item-text'>Название</p>
        <p className='trains__item-text'>Описание</p>
      </li>
      {trains &&
        trains.map(item =>
          <li className='trains__item' onClick={() => handleClickItem(item)}>
            <p className='trains__item-text'>{item.name}</p>
            <p className='trains__item-text'>{item.description}</p>
          </li>
        )
      }
    </ul>
  );
}

export default TrainsTable;