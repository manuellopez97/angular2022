import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteName'
})
export class QuoteNamePipe implements PipeTransform {

  transform(quotes: any[], name: string): any[] {
    if(quotes && quotes.length && name != ""){
      return quotes.filter(q => q.author.toLowerCase().includes(name.toLowerCase()))
    }
    else return quotes
  }
}
