import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';


export interface PropsT {
    dispatch : AppDispatch
    navigate : NavigateFunction
}