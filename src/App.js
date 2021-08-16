import { useState } from 'react';
import './App.scss';
import BetterClock from './Components/BetterClock/BetterClock';
import Clock from './Components/Clock/Clock';
import ColorBox from './Components/ColorBox/ColorBox';
import MagicColor from './Components/MagicColor/MagicColor';
import PostList from './Components/PostList/PostList';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [showClock, setShowClock] = useState(true)
  const handleShowClock = () => {
    setShowClock(!showClock)
  }
  return (
    <div className="App">
      {showClock && <Clock></Clock>}
      <button style={{ borderRadius: '4px', padding: '8px' }} onClick={handleShowClock}>Show Clock</button>
      <BetterClock></BetterClock>
      <MagicColor></MagicColor>
      <ColorBox></ColorBox>
      <TodoList></TodoList>
      <PostList></PostList>
    </div>
  );
}

export default App;
