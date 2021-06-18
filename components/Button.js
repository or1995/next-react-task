import React from 'react';
import Link from 'next/link';

import classes from '../styles/Button.module.scss';

const button = (props) => {
    return props.link ? 
    (<Link href={props.link}><a  className={props.type === 'primary' ? classes.primary : classes.secondary}>{props.children}</a></Link>) 
    : (<button className={props.type === 'primary' ? classes.primary : classes.secondary} onClick={props.click}>{props.children}</button>)
}

export default button;