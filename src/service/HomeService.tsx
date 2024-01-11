import axios from 'axios';
import { encrypt } from '../helper/encryption_decryption';

export const customerData:any = (headers:any, custData:any) => {
    var encryptdata = encrypt(custData);
    let url = "http://192.168.1.27:2703/api/SMS/getsmsmasterlist ";
    axios.post(url, JSON.parse(encryptdata) ,{headers})
    .then((res) => {
      
    if(res.status===200){
       
        return res.data[0].SMS_Master_list;
    }
    })
    .catch((err) => {
   
    });
}