import React from 'react'
import './App.css';
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import Body from "./body/body";
const App = () => {
    return (
        <div className='app-wrapper'>
            <Navbar/>
            <Sidebar/>
            <Body/>
            <Footer/>
        </div>

    );
}


export default App;
