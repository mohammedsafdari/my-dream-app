import { Pipe, PipeTransform } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, gender: string): any {

    if(gender == 'male'){
      return 'Mr. ' + value;
    }
    else{
      return 'Ms. ' + value;
    }
  }

}
