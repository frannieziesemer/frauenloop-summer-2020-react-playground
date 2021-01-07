import React from 'react';
import ReactDOM from 'react-dom';

//import tick from "./SimpleClock/tick";
// setInterval(tick, 1000);

import Clock from "./Clock/Clock";
import Comment from "./Comment/Comment";

import * as serviceWorker from './serviceWorker';

// function tick() {
//   ReactDOM.render(
//     <Clock  />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);


const comment = {
  date: new Date(),
  text: 'Have a nice day!',
  author: {
    name: 'Frannie',
    avatarUrl: 'https://placekitten.com/g/64/64',
  }
};

  ReactDOM.render(
    
      <Comment 
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />,

    document.getElementById('root')
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
