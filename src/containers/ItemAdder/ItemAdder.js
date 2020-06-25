import React,{useEffect} from 'react';
import Form from '../Form/Form';
import FormElement from '../../components/FormElement/FormElement';
import * as ItemActions from '../../store/actions/allActions';
import {connect} from 'react-redux';

const ItemAdder = props =>{

    /*const initItems =()=>{
        props.initItems()
    }*/

    useEffect(()=>{
        //initItems();
        console.log('hi')
        props.initItems()
    },[props])

    let disabled = false;

    if (props.name === '' || props.damage === '' || isNaN(props.damage)||props.damageType === '' || props.level === 0 ||isNaN(props.level)|| props.description === '' || props.level=== ''){
        disabled = true
    }
    else{
        disabled=false
    }


    const nameChangedHandler = event=>{
        console.log('changing name')
        props.setName(event.target.value.toLowerCase())
    }

    const damageChangedHandler = event => {
        props.setDamage(parseInt(event.target.value))
    }

    const damageTypeChangedHandler = event => {
        props.setDamageType(event.target.value.toLowerCase())
    }

    const levelChangedHandler = event => {
        props.setLevel(parseInt(event.target.value))
    }

    const descriptionChangedHandler = event => {
        props.setDescription(event.target.value)
    }

    const submitHandler = event=>{

        //if(props.name==''||props.damage==''||props.damageType==''||props.level==0||props.description=='')
        const newItem ={
            name:props.name,
            damage:props.damage,
            damageType:props.damageType,
            level:props.level,
            description: props.description
        }

        console.log('adding')

        props.addItem(newItem)

    }

    return(
        <Form disabled={disabled} submit={submitHandler}>
            <FormElement value={props.name} name="Name" onChange={nameChangedHandler}/>
            <FormElement value={props.damage} name="Damage" onChange={damageChangedHandler}/>
            <FormElement value={props.damageType} name="Damage Type" onChange={damageTypeChangedHandler}/>
            <FormElement value={props.level} name="Level" onChange={levelChangedHandler}/>
            <FormElement value={props.description} type="textarea" name="Description" style={{ width: '40vw', height: '3em', maxWidth: '48vw' }} onChange={descriptionChangedHandler} />
        </Form>
    )
}

const mapStateToProps = state =>{
    return {
        name:state.name,
        damage:state.damage,
        damageType:state.damageType,
        level:state.level,
        description:state.description
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setName: (name)=>{
            console.log('dispatching')
            dispatch(ItemActions.setName(name))
        },
        setDamage: dmg=>dispatch(ItemActions.setDamage(dmg)),
        setDamageType: dtype=>dispatch(ItemActions.setDamageType(dtype)),
        setLevel:level=>dispatch(ItemActions.setLevel(level)),
        setDescription:desc=>dispatch(ItemActions.setDescription(desc)),
        addItem:Item=>{dispatch(ItemActions.addItem(Item))},
        initItems:()=>{dispatch(ItemActions.initItems())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemAdder);