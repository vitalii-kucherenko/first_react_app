import React from 'react'
import './App.css';
import Body from "./components/body/body";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";

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
