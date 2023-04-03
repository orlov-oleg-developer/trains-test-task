import './App.css';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import TrainsTable from '../TrainsTable/TrainsTable';
import SpeedLimitsTable from '../SpeedLimitsTable/SpeedLimitsTable';
import Preloader from '../Preloader/Preloader';

const App: FC = () => {
  const { trains, loading } = useTypedSelector(state => state.trains)
  const { getTrainsInfo } = useActions();

  const [selectedTrainName, setSelectedTrainName] = useState('');

  const onEnter = useCallback((event: any) => {
    if (event.key === 'Enter') {
      console.log(trains)
    }
  }, [trains])

  useEffect(() => {
    getTrainsInfo();
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onEnter);
    return () => {
      document.removeEventListener('keydown', onEnter);
    }
  }, [onEnter])

  { loading && <Preloader /> }

  return (
    <div className="App">
      <div className='App__tables'>
        <TrainsTable setSelectedTrainName={setSelectedTrainName} />
        {selectedTrainName && <SpeedLimitsTable selectedTrainName={selectedTrainName} />}
      </div>
    </div>
  );
};

export default App;
