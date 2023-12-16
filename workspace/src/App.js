import logo from './logo.svg';
import video from './assets/background_test.mp4'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand light-text" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link light-text" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link light-text" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link light-text" href="#">Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link light-text disabled" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="video-container">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted className="background-video"></video>
        <h1 className="video-heading">Lorem ipsum dolor</h1>
      </div>
      <div class="spacer"></div>
      <div class="typewriter container" id="#">
        <h1>The cat and the hat.</h1>
      </div>
    </div>
  );
}

export default App;
