import React, { ReactElement } from 'react'
import Loading from './Loading';

export default function Genericlist(props: genericListProps) {
    if(!props.list){
        if (props.loadingUI) {
            return props.loadingUI;
        }
        return <Loading/>
    } else if (props.list.length === 0){
        if (props.emptyListUI) {
            return props.emptyListUI;
        }
        return <h3>There are no data to display</h3>
    } else {
        return props.children;
    }
}
interface genericListProps{
    list: any;
    loadingUI? : ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}