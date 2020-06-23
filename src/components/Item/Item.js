import React from 'react';
import classes from './Item.module.css'

const Item  = props =>{
    //console.log(props)
    //console.log(props.level)
    return(
        <div className={classes.container}>
            <h2>{props.name}</h2>
            <p>Damage: {props.damage}</p>
            <p>Damage Type: {props.damageType}</p>
            <p>Description: {props.description}</p>
            <p>Level: {props.level}</p>
        </div>
    )
}

export default Item;