import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any,filterString:string) {
    if(value.length===0 || filterString===''){
      return value;
    }
    const users: any[]=[];
    for(const user of value){
     if( user['region']===filterString){
       users.push(user)
      
     }
    }
    console.log(users)
    return users
  }

}
