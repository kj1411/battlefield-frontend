import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SideMenuRight from './components/SideMenuRight';

function App () {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <div class="wrapper  viewport">
        <Content />
      </div>
      <SideMenuRight />
    </div>
    );
}

export default App;
