import React from 'react'
import Styles from './sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={Styles.sidebar_base}>
            <div className={Styles.sidebar_item}>
                <a href="">Profile</a>
            </div>
            <div className={Styles.sidebar_item}>
                <a href="">Message</a>
            </div>
            <div className={Styles.sidebar_item}>
                <a href="">Music</a>
            </div>
        </div>
    );
}

export default Sidebar