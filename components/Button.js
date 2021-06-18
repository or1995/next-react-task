import React from 'react';
import classes from '../styles/Button.module.scss';

const button = (props) => {
    return props.link ? 
    (<a className={props.type === 'primary' ? classes.primary : classes.secondary} href={props.link}>{props.children}</a>) 
    : (<button className={props.type === 'primary' ? classes.primary : classes.secondary} onClick={props.click}>{props.children}</button>)
}

export default button;