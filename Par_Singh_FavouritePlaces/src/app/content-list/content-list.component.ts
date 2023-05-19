import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  template: `
    <div class="content-list">
      <app-content-card *ngFor="let content of contents" [content]="content"></app-content-card>
    </div>
  `,
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents = [
    {
      id: 1,
      title: "Harmander Sahib",
      description: "Holy place of sikhs also known as Golden Temple",
      creator: "Guru Ramdas Ji",
      image: "assets/img/harmandersahib.jpg",
      type:"Religious Place"
    },
    {
      id: 2,
      title: "Burj Khalifa",
      description: "Largest Building in the world",
      creator: "Skidmore, Owings & Merrill",
      image: "assets/img/Burj.jpg",
      type: "Tourest Attrection"
    },
    {
      id: 3,
      title: "Taj Mehal",
      description: "Ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      creator: "Shahjahan",
      image: "assets/img/taj.jpg",
      type: "Historical Place"
    },

    {
      id: 4,
      title: "Kesgarh Sahib",
      description: "Ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      creator: "Guru Teg Bahadur Sahib Ji",
      image: "assets/img/Kesgarhsahib.jpg",
      type: "Religious Place"
    },

    {
      id: 5,
      title: "Punjbi University",
      description: "Ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      creator: "Shahjahan",
      image: "assets/img/Desktop.jpeg",
      type: "Educational"
    },

    {
      id: 6,
      title: "Toronto",
      description: "Ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
      creator: "People",
      image: "assets/img/toronto.jpeg",
      type: "Residential area"
    },
    // Add more content items here
  ];
}