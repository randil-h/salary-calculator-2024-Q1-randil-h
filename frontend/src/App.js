import './App.css';
import CalculationBar from './components/CalculationBar';
import DataInput from './components/DataInput';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <DataInput />
      <CalculationBar />
    </div>
  );
}

export default App;
