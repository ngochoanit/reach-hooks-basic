import './App.scss';
import ColorBox from './Components/ColorBox/ColorBox';
import PostList from './Components/PostList/PostList';
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <ColorBox></ColorBox>
      <TodoList></TodoList>
      <PostList></PostList>
    </div>
  );
}

export default App;
