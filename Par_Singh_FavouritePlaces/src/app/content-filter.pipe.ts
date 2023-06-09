import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';  

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {
  transform(contents: Content[], filterType?: string): Content[] {
    if (filterType) {
      return contents.filter(content => content.type === filterType);
    } else {
      return contents.filter(content => !content.type);
    }
  }
}