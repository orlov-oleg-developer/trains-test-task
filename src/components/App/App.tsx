import './App.css';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import TrainsTable from '../TrainsTable/TrainsTable';
import SpeedLimitsTable from '../SpeedLimitsTable/SpeedLimitsTable';

import { ISpeedLimit } from "../../types/speedLimit"
import { ITrain } from "../../types/trains"

const App: FC = () => {
  const { trains, error, loading } = useTypedSelector(state => state.trains)
  const { setSpeedLimits } = useActions();
  const [isSpeedLimitsTableActive, setIsSpeedLimitsTableActive] = useState(false);

  const onTrainClick = (item: ITrain) => {
    const speedLimitsArray: ISpeedLimit[] = trains.filter((train) => train.name === item.name)[0].speedLimits
    setSpeedLimits(speedLimitsArray)
    setIsSpeedLimitsTableActive(true)
  }

  return (
    <div className="App">
      <h1 className='App__title'>Информация о поездах и их скоростях</h1>
      <div className='App__tables'>
        <TrainsTable onTrainClick={onTrainClick} />
        <SpeedLimitsTable isSpeedLimitsTableActive={isSpeedLimitsTableActive} />
      </div>
    </div>
  );
};

export default App;
