import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const addItem = Item =>{
    return {
        type:actionTypes.addItem,
        payload: Item
    }
}

export const removeItem = Item =>{
    return {
        type: actionTypes.removeItem,
        payload: Item
    }
}

export const addHighlight = Item =>{
    return {
        type: actionTypes.addHighlight,
        payload: Item
    }
}

export const removeHighLight = Item =>{
    return {
        type: actionTypes.removeHighlight,
        payload: Item
    }
}

export const toggleHighlight = Item=>{
    return{
        type: actionTypes.toggleHighlight,
        payload: Item
    }
}

export const setName = name =>{
    //console.log('returned action')
    return{
        type: actionTypes.setName,
        payload: name
    }
}

export const setDamage = dmg => {
    return {
        type: actionTypes.setDamage,
        payload: dmg
    }
}

export const setDamageType = dmgType => {
    return {
        type: actionTypes.setDamageType,
        payload: dmgType
    }
}

export const setLevel = level => {
    return {
        type: actionTypes.setLevel,
        payload: level
    }
}

export const setDescription = desc => {
    return {
        type: actionTypes.setDescription,
        payload: desc
    }
}

export const initItems = () =>dispatch=>{
    console.log('hi')
    Axios.get('/db/items').then(res=>{
        console.log(res)
        dispatch(setItems(res.data))
        console.log('dispatched')
    }).catch(error=>{
        console.log(error)
    })
}

export const setItems = (items) => {
    return {
        type: actionTypes.setItems,
        payload: items
    }
}



/*
export const initIngredients= () =>dispatch =>{
        axios.get("https://burger-builder-83d3a.firebaseio.com/Ingredients.json").then(response => {
            dispatch(setIngredients(response.data))
        }).catch(error => {
            dispatch(setIngredientsFailed())
        })

}
*/