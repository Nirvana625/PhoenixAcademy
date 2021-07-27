import { Injectable } from '@angular/core';
import { Log } from './user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setData(adminId:string,firstName:string,lastName:string,token:string)
  {
    window.localStorage.setItem('adminId',adminId);
    window.localStorage.setItem('firstName',firstName);
    window.localStorage.setItem('lastName',lastName);
    window.localStorage.setItem('token',token);
  }

  getdata()
  {
    const alldata=[];
    let abc={
      adminId:window.localStorage.getItem('adminId'),
      firstName:window.localStorage.getItem('firstName'),
      lastName:window.localStorage.getItem('lastName')
    }
    alldata.push(abc);
    return alldata;
  }

  getToken()
  {
    return window.localStorage.getItem('token');
  }
 getDestroy()
 {
   return window.localStorage.clear();
 }
}

