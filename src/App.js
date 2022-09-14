import './App.css';
import DataAnalysis from './Components/Data-Analysis/DataAnalysis';
import Header from './Components/Header/Header';
import MenaChart from './Components/MenaChart/MenaChart';
import Partners from './Components/Partners/Partners';

function App() {
  return (
    <div className="App">
      <Header />
      <DataAnalysis />
      <MenaChart />
      <Partners />
    </div>
  );
}

export default App;
