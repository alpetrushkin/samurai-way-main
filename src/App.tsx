import React from 'react';
import './App.css';

function hello() {
    debugger
    alert('Hello IT-Kamasutra')
}
// hello()

function App() {
    debugger
  return (
    <div>
        This is APP Component
        <Rating/>
        <Accordion/>
    </div>
  );
}

function Rating() {
    debugger
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return <div>star</div>
}

function Accordion() {
    debugger
    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default App;
