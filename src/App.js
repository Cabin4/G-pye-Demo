
import './App.css';
import  './styles/global.css';
import Appbar from './components/Appbar'
import Appbar2 from './components/Appbar2'
import Coding from './components/Coding';
import Superapp from './components/Superapp';
import Innovative from './components/Innovative';
import Classses from './components/Classses';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Appbar2/>
      <Coding/>
      <Superapp/>
      <Innovative/>
      <Classses/>
    </div>
  );
}

export default App;
