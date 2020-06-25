import React from 'react';
import classes from './Item.module.css'
import Tooltip from '@material-ui/core/Tooltip'
import {Zoom} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const Item  = props =>{
    console.log(props)
    let description=props.description;
    if(description.length>200){
        description = description.slice(0,196);
        description=description+'...';
    }

    const MyTooltip = withStyles((theme) => ({
        tooltip: {
            fontSize: 20,
        },
    }))(Tooltip);
    //console.log(props.level)
    return(
        <MyTooltip TransitionComponent={Zoom} placement="top" title={"Description: "+props.description} interactive>
            <div className={classes.container}>
                <h2>{props.name}</h2>
                <p>Damage: {props.damage}</p>
                <p>Damage Type: {props.damageType}</p>
                <p>Level: {props.level}</p>
                <p>Description: {description}</p>
            </div>
        </MyTooltip>  
    )
}

export default Item;