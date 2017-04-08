import store from '../../store';
import { increment, decrement, reset, incrementIfOdd, decrementIfEven } from '../../actions/counter';

import template from './counter.html';

export const counter = (name) => {
  document.querySelector(`#${name}[data-counter]`).innerHTML = template;

  const render = () => {
    const { counter } = store.getState();
    document.querySelector('#value').innerHTML = counter
  };

  store.subscribe(render);
  render();

  document.querySelector('#increment').onclick = () => store.dispatch(increment());
  document.querySelector('#decrement').onclick = () => store.dispatch(decrement());
  document.querySelector('#reset').onclick = () => store.dispatch(reset());
  document.querySelector('#incrementIfOdd').onclick = () => store.dispatch(incrementIfOdd());
  document.querySelector('#decrementIfEven').onclick = () => store.dispatch(decrementIfEven());
};