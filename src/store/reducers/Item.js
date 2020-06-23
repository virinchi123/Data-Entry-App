import * as actionTypes from '../actions/actionTypes';
import sortByName from '../../functions/sortByName'

const initialState = {
    items: [],
    name: '',
    damage: '',
    damageType: '',
    level:'',
    description:'',
}

const findByName=(items,name)=>{
    let index = 0;
    for(let item of items){
        if(item.name===name){
            index= items.indexOf(item)
            return index;
        }
    }
}

const reducer = (state=initialState, action) =>{
    switch (action.type){
        case actionTypes.addItem:
            for(let element of state.items){
                if(element.name===action.payload.name){
                    console.log('element already exists')
                    return {
                        ...state
                    }
                }
            }
            const newItem={
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
            return {
                items: itemList,
                name:'',
                damage:'',
                damageType: '',
                level:'',
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
            const toggleIndex = findByName(state.items, action.payload)
            const toggleItem= {...state.items[toggleIndex]};
            toggleItem.highlight=!toggleItem.highlight;
            const toggleItems = [...state.items];
            toggleItems[toggleIndex]=toggleItem;
            return{
                ...state,
                items:toggleItems
            }

        case actionTypes.setName:
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

        default:
            return state
    }
}

export default reducer;