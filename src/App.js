import './App.css';
import DataAnalysis from './Components/Data-Analysis/DataAnalysis';
import Header from './Components/Header/Header';
import MenaChart from './Components/MenaChart/MenaChart';

function App() {
  return (
    <div className="App">
      <Header />
      <DataAnalysis />
      <MenaChart />
    </div>
  );
}

export default App;
