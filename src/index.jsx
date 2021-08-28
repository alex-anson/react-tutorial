// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     if (calculateWinner(squares) || squares[i]) return;
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [
//         {
//           squares: Array(9).fill(null),
//         },
//       ],
//       xIsNext: true,
//     };
//   }
//   render() {
//     const history = this.state.history;
//     const current = history[history.length - 1];
//     const winner = calculateWinner(current.squares);
//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board squares={current.squares} onClick={i => this.handleClick(i)} />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// // ========================================

// ReactDOM.render(<Game />, document.getElementById('root'));

// BEGIN DOCS --
import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, World!</h1>;

// const name = 'Alex';
// const element = <h2>hey {name}</h2>;

// function formatUser(user) {
//   return user.firstName + ' ' + user.lastName;
// }
// const userSelf = {
//   firstName: 'Alex',
//   lastName: 'Anson',
// };
// const element = <h2>hey, {formatUser(userSelf)}</h2>;

// function getGreeting(user) {
//   if (user) {
//     return <h2>Hello, {formatUser(user)}!</h2>;
//   } else {
//     return <h2>Hello, Stranger!</h2>;
//   }
// }

// const element = getGreeting(userSelf);

// const element = <h1 className="greeting">Hello, world!</h1>;
// const element = React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Hello world!'
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// function component
// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }
// class component
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const element = <Welcome name="Alex" />;

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Alex" />
//       <Welcome name="Reid" />
//       <Welcome name="Kayla" />
//     </div>
//   );
// }
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }
// const comment = {
//   author: {
//     name: 'Alex',
//     avatarUrl: '/BYTU8833_edit-min.jpg',
//   },
//   text: 'hello world',
//   date: new Date(),
// };
//
// ReactDOM.render(
//   <Comment author={comment.author} date={comment.date} text={comment.text} />,
//   document.getElementById('root')
// );

const element = <h1>wanted to make vsc stop yelling at me</h1>;
ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
