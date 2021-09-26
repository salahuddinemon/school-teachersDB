// Import essextial file
import './App.css';
import Header from './components/Header/Header';
import Teachers from './components/Teachers/Teachers';

function App() {
  // Main two components call
  return (
    <div className="app-container">
      <Header></Header>
      <Teachers></Teachers>
    </div>
  );
}

export default App;
