// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

// type Props = {
//   name: string,
// };

// const App = ({ name }: Props) => <div>{`${name}'s Portfolio`}</div>;

const root: ?Element = document.getElementById('app');

if (root != null) {
  ReactDOM.render(<Button bg="blue">Button</Button>, root);
}

module.hot.accept();
