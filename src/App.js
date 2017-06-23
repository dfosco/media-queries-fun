import React, { Component } from 'react';
import tachyons from 'tachyons';

class App extends Component {
  render() {
    return (
      <main className="App bg-near-black vh-100">
        <nav className="bg-near-white">
          <ul className="dn flex-l ma0 flex-wrap flex-column flex-row-l ph4 pv4">
            <li className="list mh2 mv2 mv0-l br2 fw6 sans-serif bg-black-10">
              <a className="link pa3 db near-black" href="#">Header Item</a>
            </li>
            <li className="list mh2 mv2 mv0-l br2 fw6 sans-serif bg-black-10">
              <a className="link pa3 db near-black" href="#">Welcome to React</a>
            </li>
            <li className="list mh2 mv2 mv0-l br2 fw6 sans-serif bg-black-10">
              <a className="link pa3 db near-black" href="#">Welcome to React</a>
            </li>
            <li className="list mh2 mv2 mv0-l br2 fw6 sans-serif bg-black-10">
              <a className="link pa3 db near-black" href="#">Welcome to React</a>
            </li>
            <li className="list mh2 mv2 mv0-l br2 fw6 sans-serif bg-black-10">
              <a className="link pa3 db near-black" href="#">Welcome to React</a>
            </li>
          </ul>
        </nav>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </main>
    );
  }
}

export default App;
