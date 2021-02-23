import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Json2Resume from '../src';

const App = () => {
  return <Json2Resume resume={{ sort: [], basicInfo: {} }} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
