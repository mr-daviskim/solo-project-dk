import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import FinishedPieces from './FinishedPieces';
import WorksInProgress from './WorksInProgress';
import AddPiece from './AddPiece'
import Navbar from './Navbar'

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/finishedpieces" element={<FinishedPieces/>} />
            <Route path="/worksinprogress" element={<WorksInProgress/>} />
            <Route path="/addPiece" element={<AddPiece/>} />
        </Routes>
      </BrowserRouter>
    )
}

// class App extends Component {
//     state = {
//         counter: 0
//     };

//     handleClick = () => {
//         this.setState(prevState => {
//             return { counter: prevState.counter + 1 };
//         });
//     };
//     render() {
//         return (
//             <div className="App">
//                 <h1>I'm configuring setting up Webpack!!!</h1>
//                 <p>{`The count now is: ${this.state.counter}`}</p>
//                 <button onClick={this.handleClick}>Click me</button>
//             </div>
//         );
//     }
// }

export default App;