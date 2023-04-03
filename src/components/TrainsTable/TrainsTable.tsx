import './TrainsTable.css'
import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface TrainsTableProps {
  setSelectedTrainName: (name: string) => void;
}

const TrainsTable: FC<TrainsTableProps> = React.memo(({ setSelectedTrainName }) => {
  const { trains } = useTypedSelector(state => state.trains)
  const { getTrainsInfo } = useActions();

  useEffect(() => {
    getTrainsInfo();
  }, [])

  if (trains[0].name === '') return <div></div>;

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
            trains.map((train, i) =>
              <tr className='trains-table__row' key={train.name} onClick={() => setSelectedTrainName(train.name)}>
                <td className='trains-table__cell'>{train.name}</td>
                <td className='trains-table__cell'>{train.description}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
})

export default TrainsTable;