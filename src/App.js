import './App.css';
import { Global } from "./components/noteFiles/Global"
import { GlobalTodo } from './components/TodoFiles/GlobalTodo';

function App() {
  return (
    <div className="App">
      <div className="left">
        <Global />
      </div>
      <div className="right">
        <GlobalTodo />
      </div>     
    </div>
  );
}

export default App;