import './App.css';


function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://i.pinimg.com/1200x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" />
      </header>
      <nav className='nav'>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>

      </nav>
      <div className='content'>
        <div>
          <img src="https://learnopencv.com/wp-content/uploads/2021/04/image-15.png" />
        </div>
        <div>
          ava + decription
        </div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
