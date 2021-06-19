import React from 'react';

import Logo from './Logo';

import classes from '../styles/Footer.module.scss';

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_left}>
                <Logo/>
            </div>
            <div className={classes.footer_right}>
                <h3>Created by Omar Ali for Gebhaly in 2021</h3>
                <div className={classes.footer_right_social}>
                    <a href="https://omaralidev.com"  rel="noreferrer">My Website</a>
                    <a href="https://github.com/or1995" target="_blank" rel="noreferrer">My Github</a>
                    <a href="https://www.linkedin.com/in/omar-ali-webdevelopment" target="_blank" rel="noreferrer">My LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;