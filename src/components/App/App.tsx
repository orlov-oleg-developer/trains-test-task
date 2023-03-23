import './App.css';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions'

import TrainsTable from '../TrainsTable/TrainsTable';


const App: FC = () => {

  const { getTrainsInfo } = useActions();

  useEffect(() => {
    getTrainsInfo();
  }, [])

  return (
    <div className="App">
      <h1 className='App__title'>Информация о поездах и их скоростях</h1>
      <TrainsTable />
    </div>
  );
};

export default App;
