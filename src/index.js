import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = props => (
  <div>{`${props.name}'s`} Portfolio</div>
);

App.propTypes = {
  name: PropTypes.string,
};

ReactDOM.render(<App name={'Yoni'}/>, document.getElementById('app'));

module.hot.accept();
