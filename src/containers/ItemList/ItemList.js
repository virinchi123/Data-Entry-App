import React from 'react';
import Item from '../../components/Item/Item';
import {connect} from 'react-redux';
import classes from './ItemList.module.css'
import * as ItemListActions from '../../store/actions/allActions';

const ItemList = props =>{
    let items = null;
    //console.log(props.itemList)
    if(!props.loading){
        items=props.itemList.map((itemx,index)=>{
            //console.log(itemx)
            return (
                    <Item name={itemx.name}
                        key={index}
                        damage={itemx.damage}
                        damageType={itemx.damageType}
                        level={itemx.level}
                        description={itemx.description}
                    />
            )
        })
    }
    else{
        items=<h2>Loading...</h2>
    }

    return(
        <div className={classes.container}>
            {items}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        itemList: state.items,
        loading:state.itemListLoading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        toggleHighlight: (item) => dispatch(ItemListActions.toggleHighlight(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemList);