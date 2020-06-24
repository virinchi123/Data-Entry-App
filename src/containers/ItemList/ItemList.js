import React from 'react';
import Item from '../../components/Item/Item';
import {connect} from 'react-redux';
import classes from './ItemList.module.css'

const ItemList = props =>{
    let items = null;
    console.log(props.itemList)
    items=props.itemList.map((itemx,index)=>{
        //console.log(itemx)
        return (<Item name={itemx.name}
            key={index}
            damage={itemx.damage}
            damageType = {itemx.damageType}
            level={itemx.level}
            description={itemx.description}
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