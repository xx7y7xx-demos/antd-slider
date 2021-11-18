// import logo from './logo.svg';
// import './App.css';
import { Slider } from 'antd'
import 'antd/dist/antd.css';

function App() {
  const marks = {
    10: {
      style: { color: 'red' },
      label: (
        <div>
          10
        </div>
      )
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Slider min={0} max={100} defaultValue={30} marks={marks} />
      </header>
    </div>
  );
}

export default App;
