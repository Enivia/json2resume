import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Demos from './src/demos';
import '../dist/json2resume.cjs.development.css';

const App = () => {
  return (
    <div>
      <Demos />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
