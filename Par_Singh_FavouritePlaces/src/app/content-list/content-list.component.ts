import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  
    
  contentList:Content[] =[
    {
      id: 0,
      title: "Harmander Sahib",
      description: "Holy place of sikhs also known as Golden Temple",
      creator: "Guru Ramdas Ji",
      imgURL: "assets/img/harmandersahib.jpg",
      type:""
    },
    {
      id: 1,
      title: "Burj Khalifa",
      description: "Largest Building in the world",
      creator: "Skidmore, Owings & Merrill",
      imgURL: "assets/img/Burj.jpg",
      type: ""
    },
    {
      id: 2,
      title: "Taj Mehal",
      description: "Ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      creator: "Shahjahan",
      imgURL: "assets/img/taj.jpg",
      type: ""
    },
    {
      id: 3,
      title: "Kesgarh Sahib",
      description: "Ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      creator: "Guru Teg Bahadur Sahib Ji",
      imgURL: "assets/img/Kesgarhsahib.jpg",
      type: ""
      
    },
    {
      id: 4,
      title: "Punjbi University",
      description: "Ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      creator: "Shahjahan",
      imgURL: "assets/img/Desktop.jpeg",
      type: ""
      
    },

    {
      id: 5,
      title: "Toronto",
      description: "Ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      creator: "People",
      imgURL: "assets/img/toronto.jpeg",
      type: ""
    }
    
    ];
    findTitle : string ='';
    filterResult: boolean = false;
    searchResult: string = '';
    isContentFound: boolean = false;

    findContent() {
      this.filterResult = this.contentList.some(content => content.title === this.findTitle);
      this.isContentFound = !!this.filterResult;
      this.searchResult = this.isContentFound ? 'Content item found!' : 'Content item not found!';
      }

  }