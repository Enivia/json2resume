import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Components from './src/components';
import Demos from './src/demos';

const App = () => {
  return (
    <div>
      <h3>components</h3>
      <Components />
      <h3>demos</h3>
      <Demos />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
