import './App.css';
import News from './Components/News';
import Pagination from './Components/Pagination';
import Search from './Components/Search'

function App() {
  return (
    <div className="App">
      <Search/>
      <Pagination/>
      <News/>
     
    </div>
  );
}

export default App;
