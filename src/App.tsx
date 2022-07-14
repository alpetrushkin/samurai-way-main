import React from 'react';
import './App.css';
import {Accordion} from "./component/Accordion/Accordion";
import {Rating} from "./component/Rating/Rating";

function hello() {
    debugger
    alert('Hello IT-Kamasutra')
}

// hello()

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={'This is APP Component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={5}/>
            <Accordion/>
            Article 2
            <Rating value={2}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}



export default App;
