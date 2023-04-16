import Table, { IHeader, ISelect } from '../molecules/Table/Table';
import './App.css';
import React, { FC, useEffect, useState } from 'react';
// import { useTypedSelector } from '../../hooks/useTypedSelector'
// import { useActions } from '../../hooks/useActions'

// import TrainsTable from '../TrainsTable/TrainsTable';
// import SpeedLimitsTable from '../SpeedLimitsTable/SpeedLimitsTable';
// import Preloader from '../Preloader/Preloader';

const App: FC = () => {
  // const { trains, loading } = useTypedSelector(state => state.trains)
  // const { getTrainsInfo } = useActions();
  // const [selectedTrainName, setSelectedTrainName] = useState('');

  // const errors = useTypedSelector(state => state.errors)

  // const onSubmit = () => {
  //   let isValidData = true;

  //   for (const property in errors) {
  //     if (errors[property] === false) isValidData = false;
  //   }

  //   if (isValidData) {
  //     console.log(trains);
  //   } else console.log('Данные не валидны')
  // }

  // useEffect(() => {
  //   getTrainsInfo();
  // }, [])

  // { loading && <Preloader /> }

  const [disabled, setDisabled] = useState(true);

  const headers: IHeader[] = [
    {
      title: 'Рост',
      type: 'number',
    },
    {
      title: 'Имя',
      type: 'string',
    },
    {
      title: 'Параметр',
      type: 'select',
      selectVariants: ['первый', 'второй', 'третий']
    }
  ]

  const [data, setData] = useState([
    {
      height: 25,
      name: 'имя',
      parametr: 'второй'
    },
    {
      height: 85,
      name: 'что-то',
      parametr: 'первый'
    },
  ]);

  const onChangeCb = (arrayIndex: number, objectKey: any, value: any) => {
    setData(data.map((obj: any, i) => {
      if (i === arrayIndex) {
        return {
          ...obj,
          [objectKey]: value,
        }
      } else return obj
    }))
  }

  return (
    <div style={{ maxWidth: '70%', margin: '0 auto' }}>
      <Table
        headers={headers}
        data={data}
        disabled={disabled}
        onBlur={(props: any) => console.log(props)}
        onChange={onChangeCb}
      />
    </div>
  );
};

export default App;
