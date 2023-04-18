import './App.css';
import { Global } from "./components/noteFiles/Global"
import { GlobalTodo } from './components/TodoFiles/GlobalTodo';
function App() {
  return (
    <div className="App">
      <Global />
      <GlobalTodo />     
    </div>
  );
}

export default App;