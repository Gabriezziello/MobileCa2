import { Injectable } from '@angular/core'; 
import { Storage } from '@ionic/storage'; 

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private storage: Storage) { }   
    
  isFavourite(Id, key) {    
    return this.storage.get(key).then(result => {      
      return result && result.indexOf(Id) !== -1;    });  
  } 

  favourite(Id, key) {
   return this.storage.get(key).then(result => {      
     if (result) {        
       result.push(Id);        
       return this.storage.set(key, result); 
      } else {
        return this.storage.set(key, [Id]);
      }
    });
  }

  unfavourite(Id, key) {
    return this.storage.get(key).then(result => {
      if (result) {
        var index = result.indexOf(Id);
        result.splice(index, 1);
        return this.storage.set(key, result);
      }
    });
  } 
     
}
