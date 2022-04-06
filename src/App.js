import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <h4> <code>Hello, World! I am </code> </h4>
          <h2> Aishwarya Kumaraswamy</h2>  
        </p>
        <div class="socialbtns">
          <ul>
              <li><a href="https://twitter.com/TheTweetOfGod" class="fa fa-lg fa-twitter"></a></li>
              <li><a href="https://github.com/aishwarya-1" class="fa fa-lg fa-github"></a></li>
              <li><a href="https://www.linkedin.com/in/aishwarya-kumaraswamy-9721a617a/" class="fa fa-lg fa-linkedin"></a></li>
          </ul>
      </div>
      </header>
    </div>
  );
}

export default App;
