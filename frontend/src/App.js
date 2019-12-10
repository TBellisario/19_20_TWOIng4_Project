import React from 'react';
import './App.css';
import Linechart from './Component/widget1/Linechart';
import Barchart from './Component/widget2/Barchart';
import Piechart from './Component/widget3/Piechart'; 
import Areachart from './Component/widget4/Areachart'

function App() {
  return (
    <div className="App">
      <Linechart></Linechart>
      <Barchart></Barchart>
      <Piechart></Piechart>
      <Areachart></Areachart>
      <Calendar></Calendar>
    </div>
  );
}

export default App;
