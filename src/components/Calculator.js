import React from 'react';

import style from './Calculator.module.css';

const KEYS = [
  {
    id: 'zero',
    className: `${style.key} ${style.keydigit} ${style.keyzero}`,
    text: '0'
  },
  {
    id: 'one',
    className: `${style.key} ${style.keydigit} ${style.keyone}`,
    text: '1'
  },
  {
    id: 'two',
    className: `${style.key} ${style.keydigit} ${style.keytwo}`,
    text: '2'
  },
  {
    id: 'three',
    className: `${style.key} ${style.keydigit} ${style.keythree}`,
    text: '3'
  },
  {
    id: 'four',
    className: `${style.key} ${style.keydigit} ${style.keyfour}`,
    text: '4'
  },
  {
    id: 'five',
    className: `${style.key} ${style.keydigit} ${style.keyfive}`,
    text: '5'
  },
  {
    id: 'six',
    className: `${style.key} ${style.keydigit} ${style.keysix}`,
    text: '6'
  },
  {
    id: 'seven',
    className: `${style.key} ${style.keydigit} ${style.keyseven}`,
    text: '7'
  },
  {
    id: 'eight',
    className: `${style.key} ${style.keydigit} ${style.keyeight}`,
    text: '8'
  },
  {
    id: 'nine',
    className: `${style.key} ${style.keydigit} ${style.keynine}`,
    text: '9'
  },
  {
    id: 'decimal',
    className: `${style.key} ${style.keydigit} ${style.keydkeyecimal}`,
    text: '.'
  },
  {
    id: 'add',
    className: `${style.key} ${style.keyoperator} ${style.keyadd}`,
    text: '+'
  },
  {
    id: 'subtract',
    className: `${style.key} ${style.keyoperator} ${style.keysubtract}`,
    text: '-'
  },
  {
    id: 'multiply',
    className: `${style.key} ${style.keyoperator} ${style.keymultiply}`,
    text: 'x'
  },
  {
    id: 'divide',
    className: `${style.key} ${style.keyoperator} ${style.keydivide}`,
    text: '÷'
  },
  {
    id: 'equals',
    className: `${style.key} ${style.keyoperator} ${style.keyequals}`,
    text: '='
  },
  {
    id: 'clear',
    className: `${style.key} ${style.keycancel} ${style.keyclear}`,
    text: 'C'
  }
];

const Status = props => {
  return <div className={style.status}>{props.operator !== undefined ? props.operator : ' '}</div>;
};

const Display = props => {
  return (
    <div id='display' className={style.display}>
      {props.text}
    </div>
  );
};

const Keyboard = props => {
  const key = KEYS.map(e => (
    <button id={e.id} className={e.className} type='button' onClick={props.onClick}>
      {e.text}
    </button>
  ));
  return <div className={style.keyboard}>{key}</div>;
};

const Calculator = () => {
  return (
    <div className={style.calculator}>
      <Status operator='{this.state.operator}' />
      <Display text='{this.state.displayText}' />
      <Keyboard onClick={() => {}} />
    </div>
  );
};

export default Calculator;
