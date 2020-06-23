import React from 'react';
import classes from './Item.module.css'
import {connect} from 'react-redux'

const Item  = props =>{
    return(
        <div className={classes.container}>
            <h2>{props.name}</h2>
            <p>Damage: {props.damage}</p>
            <p>Damage Type: {props.type}</p>
            <p>Description: {props.desc}</p>
            <p>Level: {props.level}</p>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        items:state.item.items,
        name: state.item.name,
        damage: state.item.damage,
        type: state.item.damageType,
        level: state.item.level,
        desc: state.item.description
    }
}

export default connect(mapStateToProps)(Item);