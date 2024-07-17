import logo from './logo.svg';
import video from './assets/background_test2.mp4'
import picture from './assets/picture.gif'
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Menu Container Feed */}
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

      {/* Video Caption Container */}
      <div className="video-container">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted className="background-video"></video>
        <h1 className="video-heading">Lorem ipsum dolor</h1>
      </div>
      <div class="spacer"></div>

      {/* Company Descriptor Container */}
      <div class="container light-text underline"> 
        <h1>#What We Do</h1> 
      </div>
      <div class="container d-flex">
        <div class="w-75 mx-auto">
          <p class="light-text">What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className="w-25 d-sm-none d-md-block mx-auto">
          <img src={picture} class="img-fluid d-none d-lg-block picture-box"></img>
        </div>
      </div>
      <div class="spacer"></div>

      {/* Company Cards Container */}
      <div class="container light-text underline"> 
        <h1>#About Our Work</h1> 
      </div>
      <div class="container row force-center">

        <div class="card card-style col-3 mx-auto mb-4 mb-md-0">
          <div class="d-flex card-head">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-body-text icon-tag" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
            </svg>
          </div>
          <div class="card-body">
            <p class="card-text">Stim sa scriem cuvinte colorate pe un ecran negru si ies chestii</p>
          </div>
        </div>

        <div class="card card-style col-3 mx-auto mb-4 mb-md-0">
          <div class="d-flex card-head">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-file-lock2-fill icon-tag" viewBox="0 0 16 16">
              <path d="M7 6a1 1 0 0 1 2 0v1H7z"/>
              <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0"/>
            </svg>
          </div>
          <div class="card-body">
            <p class="card-text">Nu iti lasam gagika sa afle ca ai bagat bani la pacanele</p>
          </div>
        </div>

        <div class="card card-style col-3 mx-auto mb-4 mb-md-0">
          <div class="d-flex card-head">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-key-fill icon-tag" viewBox="0 0 16 16">
              <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
          </div>
          <div class="card-body">
            <p class="card-text">Lacatus mecanic profesionist</p>
          </div>
        </div>
        
        <div class="card card-style col-3 mx-auto">
          <div class="d-flex card-head">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-people-fill icon-tag" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
            </svg>
          </div>
          <div class="card-body">
            <p class="card-text">"Ce bine mirosi Marius, hai mai aproape"</p>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="container row force-center">

        <div class="card card-style col-3 mx-auto mb-4 mb-md-0">
          <div class="d-flex card-head">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone-fill  icon-tag" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
          </div>
          <div class="card-body">
            <p class="card-text">Te sifonam la garda daca nu ne platesti</p>
          </div>
        </div>

        <div class="card card-style col-3 mx-auto mb-4 mb-md-0">
          <div class="d-flex card-head">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-terminal-fill icon-tag" viewBox="0 0 16 16">
              <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5z"/>
            </svg>
          </div>
          <div class="card-body">
            <p class="card-text">"Stiu sa sparg parole cu HTML"</p>
          </div>
        </div>

        <div class="card card-style col-3 mx-auto mb-4 mb-md-0">
          <div class="d-flex card-head">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-tools icon-tag" viewBox="0 0 16 16">
              <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
            </svg>
          </div>
          <div class="card-body">
            <p class="card-text">Inginerie de inalta clasa (am facut un curs pe net)</p>
          </div>
        </div>
        
        <div class="card card-style col-3 mx-auto">
          <div class="d-flex card-head">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-ev-front-fill icon-tag" viewBox="0 0 16 16">
              <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848Zm6.75.51a.186.186 0 0 0-.23.034L6.05 7.246a.188.188 0 0 0 .137.316h1.241l-.673 2.195a.188.188 0 0 0 .085.218c.075.043.17.03.23-.034l2.88-3.187a.188.188 0 0 0-.137-.316H8.572l.782-2.195a.188.188 0 0 0-.085-.218Z"/>
            </svg>
          </div>
          <div class="card-body">
            <p class="card-text">Am logan 1.5 gaz</p>
          </div>
        </div>
      </div>
      <div class="spacer"></div>

      {/* Advantages Section */}
      <div class="container light-text underline"> 
        <h1>#Advantages That Define Us</h1>
      </div>
      <div class="container">
        <div class="d-inline">
          <h2 class="light-text"><i class="bi bi-globe"></i>Lorem Ipsum Dolor</h2>
        </div>
      </div>
      <div class="spacer"></div>
    </div>
  );
}

export default App;
