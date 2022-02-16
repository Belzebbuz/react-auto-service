import axios from 'axios';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { urlProducts } from '../endpoints';
import EditGoodsForm from './EditGoodsForm';
import { productCreationDTO } from './product.model';

export default function CreateGoods() {
    
    const history = useHistory();
    async function create(product:productCreationDTO) {
        try {
            await axios.post(urlProducts, product);
            
            history.push('/goods');
        } catch (error: any) {
            if(error && error.response.data){
                console.log(error.response.data);
            }
        }
    }
    return (
        <EditGoodsForm model={{name:''}} onSubmit = {async values => await create(values)} 
            displayTitle='Создание товара'/>
    )
}
