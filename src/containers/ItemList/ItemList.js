import React from 'react';
import Item from '../../components/Item/Item';
import {connect} from 'react-redux';
import classes from './ItemList.module.css'

const ItemList = props =>{
    let items = null;
    items=props.itemList.map((item,index)=>{
        return (<Item name={item.name}
            key={index}
            damage={item.damage}
            damageType = {item.damageType}
            level={item.level}
            description={item.description}
            />)
    })

    return(
        <div className={classes.container}>
            {items}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        itemList: state.item.items
    }
}

export default connect(mapStateToProps)(ItemList);