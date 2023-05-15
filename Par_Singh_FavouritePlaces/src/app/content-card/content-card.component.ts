import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  myList: ContentList;
  constructor(){

    this.myList = new ContentList();
 

    this.myList.addItem({
      id: 0,
      title: "Harmander Sahib",
      description: "Holy place of sikhs also known as Golden Temple",
      creator: "Guru Ramdas Ji",
      imgURL: "assets/img/harmandersahib.jpg",
      type:"Religious Place"
    });
    this.myList.addItem({
      id: 1,
      title: "Burj Khalifa",
      description: "Largest Building in the world",
      creator: "Skidmore, Owings & Merrill",
      imgURL: "assets/img/Burj.jpg",
      type: "Tourest Attrection"
    });
    this.myList.addItem({
      id: 2,
      title: "Taj Mehal",
      description: "Ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      creator: "Shahjahan",
      imgURL: "assets/img/taj.jpg",
      type: "Historical Place"
    });

  

   
  }


  
}