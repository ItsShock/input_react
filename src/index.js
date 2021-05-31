import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import * as serviceWorker from './serviceWorker';

const onClickFn = (data) => {
    console.log(data);
  }

ReactDOM.render(<Button onBtnClick={onClickFn} label={"test label"} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
