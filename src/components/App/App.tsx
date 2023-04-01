import './App.css';
import React, { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import { ISpeedLimit } from "../../types/speedLimit"
import { ITrain } from "../../types/trains"

import TrainsTable from '../TrainsTable/TrainsTable';
import SpeedLimitsTable from '../SpeedLimitsTable/SpeedLimitsTable';

const App: FC = () => {
  const { trains } = useTypedSelector(state => state.trains)
  // const { speedLimits } = useTypedSelector(state => state.speedLimits)
  const { setTrains } = useActions();
  const [selectedTrain, setSelectedTrain] = useState('');
  const [isSpeedLimitsTableActive, setIsSpeedLimitsTableActive] = useState(false);

  const onTrainClick = (item: ITrain) => {
    // const speedLimitsArray: ISpeedLimit[] = trains.filter((train) => train.name === item.name)[0].speedLimits
    // setSpeedLimits(speedLimitsArray)
    if (isSpeedLimitsTableActive === false) setIsSpeedLimitsTableActive(true);
    setSelectedTrain(item.name);
  }

  let trainsArray: ITrain[] = trains;
  console.log('TrainsArray', trainsArray)

  const onSpeedChange = (name: string, value: number) => {
    trainsArray = trains.map((train) => {
      if (train.name === selectedTrain) {
        return {
          name: train.name,
          description: train.description,
          speedLimits: train.speedLimits.map((speedLinit) => {
            if (speedLinit.name === name) {
              return {
                name: name,
                speedLimit: value
              }
            } else return speedLinit
          })
        }
      } else return train
    })
  }

  useEffect(() => {
    // console.log('changeTrainsData')
    setTrains(trainsArray);
  }, [selectedTrain])

  // useEffect(() => {
  //   function onEnter(event: any) {
  //     if (event.key === 'Enter') {
  //       console.log('Enter')
  //       // onSpeedLimitsSubmit();
  //     }
  //   }

  //   document.addEventListener('keydown', onEnter);
  //   return () => {
  //     document.removeEventListener('keydown', onEnter);
  //   }
  // }, []);

  return (
    <div className="App">
      <div className='App__tables'>
        <TrainsTable onTrainClick={onTrainClick} />
        <SpeedLimitsTable isSpeedLimitsTableActive={isSpeedLimitsTableActive} selectedTrain={selectedTrain} onSpeedChange={onSpeedChange} />
      </div>
    </div>
  );
};

export default App;
