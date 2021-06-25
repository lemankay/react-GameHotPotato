import React from 'react';
//import {Link} from "react-router-dom";

let Header = () => {
    return (
        <div>
            <header style={headerStyle}>
            <h1>HotPotato</h1>
            {/* <Link style={linkStyle} to="/hotpotato">HotPotato</Link> */}
           </header>

        </div>


    )
}
const headerStyle = {
     background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10p'
}
// const linkStyle = {
//     color: '#fff',
//     textDecoration: 'none'
// }
export default Header;


// hengeInput2 = (event) => {
//     this.setState({
//         title2: event.target.value
//     })
// };
// markComplete = (idTo) => {
//     this.setState({
//             todos: this.state.todos.map((todo) => {
//                 if (todo.id === idTo) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo;
//             })
//         }
//     )
// }
// delTodo = (toid) => {
//     this.setState({
//         todos:[...this.state.todos.filter((yotodo) => yotodo.id !== toid)]
//     })
// }