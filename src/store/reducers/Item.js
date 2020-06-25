import * as actionTypes from '../actions/actionTypes';
import sortByName from '../../functions/sortByName';
import axios from 'axios';

const initialState = {
    items: [],
    name: '',
    damage: '',
    damageType: '',
    level:'',
    description:'',
    itemListLoading: true
}

const findByName=(items,obj)=>{
    let index = 0;
    for(let item of items){
        console.log(item.name)
        console.log(obj.name)
        if(item.name===obj.name){
            index= items.indexOf(item)
            return index;
        }
    }
}

const reducer = (state=initialState, action) =>{
    console.log('in reducer')
    switch (action.type){
        case actionTypes.addItem:
            console.log('adding item')
            for(let element of state.items){
                if(element.name===action.payload.name){
                    console.log('element already exists')
                    return {
                        ...state
                    }
                 }
            }
            const newItem={
                id:state.items.length,
                name:action.payload.name,
                damage:action.payload.damage,
                damageType: action.payload.damageType,
                level:action.payload.level,
                description: action.payload.description,
                highlight: false
            }
            let itemList= [...state.items]
            itemList.push(newItem)
            itemList=sortByName(itemList)
            console.log('posing')
            axios.post('/db/items',newItem).then(res=>{
                return {
                    items: itemList,
                    name: '',
                    damage: '',
                    damageType: '',
                    level: '',
                    description: '',
                }
            }).catch(err=>{
                console.log(err)
                return {...state}
            })
            return {
                items: itemList,
                name: '',
                damage: '',
                damageType: '',
                level: '',
                description: '',
            }  
        case actionTypes.removeItem:
            const itemsList = state.items.filter(
                item => item.name!==action.payload.name)
                return {
                    ...state,
                    items: itemsList
                }
        case actionTypes.addHighlight:
                const index=findByName(state.items,action.payload);
                const highlightedItem = {...state.items[index]};
                highlightedItem.highlight = true;
                const newItems = [...state.items];
                newItems[index]=highlightedItem;
                return{
                    ...state,
                    items:newItems
                }
        case actionTypes.removeHighlight:
            const highlightedIndex = findByName(state.items, action.payload);
            const newHighlightedItem = { ...state.items[highlightedIndex] };
            newHighlightedItem.highlight = false;
            const highlightRemovedItems = [...state.items];
            highlightRemovedItems[highlightedIndex] = newHighlightedItem;
            return {
                ...state,
                items: highlightRemovedItems
            }
        
        case actionTypes.toggleHighlight:
            console.log(action)
            const toggleIndex = findByName(state.items, action.payload)
            const toggleItems = [...state.items];
            const toggleItem = toggleItems[toggleIndex]
            console.log(toggleIndex)
            console.log(toggleItems)
            console.log(toggleItem.highlight)
            toggleItem.highlight = !toggleItem.highlight;
            console.log(toggleItem.highlight)
            console.log(toggleItems)
            toggleItems[toggleIndex]=toggleItem;
            console.log(toggleItems)
            return{
                ...state,
                items:toggleItems
            }

        case actionTypes.setName:
            console.log('setting name')
            return{
                ...state,
                name:action.payload
            }
        case actionTypes.setDamage:
            return{
                ...state,
                damage:action.payload
            }
        case actionTypes.setDamageType:
            return{
                ...state,
                damageType:action.payload
            }
        case actionTypes.setLevel:
            return{
                ...state,
                level:action.payload
            }
        case actionTypes.setDescription:
            return{
                ...state,
                description: action.payload
            }
        
        case actionTypes.setItems:
            console.log(action.payload)
            return{
                ...state,
                items:action.payload.body,
                itemListLoading: false
            }
            

        default:
            console.log('default')
            return state
    }
}

export default reducer;