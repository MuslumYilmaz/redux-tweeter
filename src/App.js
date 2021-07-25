import './App.css';
import Input from './components/Input';
import Home from './components/Home';
import Header from './components/Header';
import TweetDetail from './components/TweetDetail';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Route exact path="/" render={() => (
    <div>
      <Header />
      <Input />
      <Home />
    </div>
    )} />
    <Route path="/create" component={TweetDetail}/>
    </div>

  );
}

export default App;
