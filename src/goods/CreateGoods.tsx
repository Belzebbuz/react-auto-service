import { Formik } from 'formik';
import React from 'react'
import { useHistory } from 'react-router-dom';
import EditGoodForm from './EditGoodForm';

export default function CreateGoods() {
    
    const history = useHistory();
    return (
        <EditGoodForm model={{name:''}} onSubmit = {values => {
            console.log(values);
            history.push('/goods')
        }} 
            displayTitle='Создание товара'/>
    )
}
