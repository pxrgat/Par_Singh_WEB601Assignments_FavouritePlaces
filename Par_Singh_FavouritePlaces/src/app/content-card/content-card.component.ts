import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  template: `
    <div class="content-card" [style.border]="borderStyle" (click)="showContentDetails()">
      <h1>{{ content.title }}</h1>
      <ng-container *ngIf="content.image">
        <img [src]="content.image" alt="Content Image">
      </ng-container>
      <p>{{ content.description }}</p>
      <p *ngIf="content.creator">Creator: {{ content.creator }}</p>
      <p *ngIf="content.type">Type: {{ content.type }}</p>
      <p *ngIf="content.tags && content.tags.length > 0">Tags: {{ content.tags.join(', ') }}</p>
    </div>
  `,
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content: any;
  borderStyle: string;

  constructor() {
    this.borderStyle = '1px solid black';
  }

  showContentDetails() {
    console.log('Content ID:', this.content.id);
    console.log('Content Title:', this.content.title);
  }
}