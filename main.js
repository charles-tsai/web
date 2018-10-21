'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Vocaburary</h1>
        <nav>
          <a href="#">test</a>
          <a href="#">TOEIC</a>
        </nav>
        <hr />
        <section>
          <h1>word practices</h1>
          <button>test</button>
        </section>
        <hr />
        <footer>
          <small>charles's blog</small>
        </footer>
      </div>
    );
  }
}
ReactDOM.render(<App />,
  document.getElementById('app')
);
