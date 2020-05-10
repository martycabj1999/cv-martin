import { combineReducers } from 'redux';
import ColorsReducer from './modules/customization/colorPicker/store/ColorsReducer';
import LanguageReducer from './modules/customization/language/store/LanguageReducer';
export default combineReducers({
    customization: ColorsReducer, 
    language: LanguageReducer,
})