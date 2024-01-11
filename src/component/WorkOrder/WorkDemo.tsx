import React, {useState} from 'react';

import {Dropdown} from 'primereact/dropdown';
import { useTranslation } from "react-i18next";
import { Button } from 'primereact/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WorkDemo = () => {
 
    const[state, setState] = useState(false);
    const[value,setValue]=useState('');
    const { t, i18n } = useTranslation();
    const language= [
        
        {label: "English", value:'en'},
        {label : "Hindi", value:'hn'},
    ];
    
    const changeLanguageHandler=(e:any)=>{
        e.preventDefault();
        console.log(e, 'e');
        setValue(e.target.value);
        const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
    
    }
    const notify = () => toast(t('You_have_been_successfully_login'));
    return(
        <>
          <Dropdown  options={language} onChange={(e:any) => changeLanguageHandler(e)} value={value} />
        <h1>{t('intro.label')}</h1> 
        <ToastContainer />
        <Button onClick={notify} label="Show" />
        </>
    )
}




export default WorkDemo;
