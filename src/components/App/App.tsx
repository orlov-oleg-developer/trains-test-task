import './App.css';
import React, { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import TrainsTable from '../TrainsTable/TrainsTable';
import SpeedLimitsTable from '../SpeedLimitsTable/SpeedLimitsTable';
import Preloader from '../Preloader/Preloader';

const App: FC = () => {
  const { trains, loading } = useTypedSelector(state => state.trains)
  const { getTrainsInfo } = useActions();
  const [selectedTrainName, setSelectedTrainName] = useState('');

  const errors = useTypedSelector(state => state.errors)

  const onSubmit = () => {
    let isValidData = true;

    for (const property in errors) {
      if (errors[property] === false) isValidData = false;
    }

    if (isValidData) {
      console.log(trains);
    } else console.log('Данные не валидны')
  }

  useEffect(() => {
    getTrainsInfo();
  }, [])

  { loading && <Preloader /> }

  return (
    <div className="App">
      <div className='App__tables'>
        <TrainsTable setSelectedTrainName={setSelectedTrainName} />
        {selectedTrainName && <div className='App__speed'>
          <SpeedLimitsTable selectedTrainName={selectedTrainName} />
          <button
            className='App__button'
            onClick={onSubmit}
          >Отправить данные</button>
        </div>}
      </div>
    </div >
  );
};

export default App;
