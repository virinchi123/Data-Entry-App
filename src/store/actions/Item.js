import * as actionTypes from './actionTypes';

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