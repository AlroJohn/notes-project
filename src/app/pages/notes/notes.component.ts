import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-notes',
    standalone: true,
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css',
    imports: [CommonModule, ModalComponent],
    animations: [
      trigger('modalAnimation', [
        state('void', style({
          opacity: 0
        })),
        transition(':enter, :leave', [
          animate('0.2s ease-in-out')
        ])
      ]),
      [
        trigger('fadeInOut', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('500ms', style({ opacity: 1 })),
            transition(':leave', [
              animate('600ms', style({ opacity: 0 }))
            ])
  
          ])
        ])
      ]
    ],
})
export class NotesComponent implements OnInit {
  showModal: boolean = false;

  paragraphs = Array(10).fill({
    date: '2024-04-21',
    title: 'Example Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, laboriosam corporis sit consequuntur eos, officiis culpa illo similique quam eligendi cum, reiciendis repellendus? Facilis iste excepturi commodi quos id dolorum. reiciendis repellendus? Facilis iste excepturi commodi quos id dolorum. reiciendis repellendus? Facilis iste excepturi commodi quos id dolorum. reiciendis repellendus? Facilis iste excepturi commodi quos id dolorum.'
  });

  openModal() {
    this.showModal = !this.showModal
  }

  addNewNote() {

  }
  ngOnInit(): void {

  }
}
