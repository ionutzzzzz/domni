import logo from './logo.svg';
import video from './assets/background_test.mp4'
import './App.css';

function App() {
  return (
    <div className="App container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <video src={video} autoPlay loop muted>
      </video>
    </div>
  );
}

export default App;
