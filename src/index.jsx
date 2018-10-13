// @flow
import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  name: string,
};

const App = ({ name }: Props) => <div>{`${name}'s Portfolio`}</div>;

const root: ?Element = document.getElementById('app');

if (root != null) {
  ReactDOM.render(<App name="Yoni" />, root);
}

module.hot.accept();
