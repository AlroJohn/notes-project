import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-notes',
    standalone: true,
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css',
    animations: [
        trigger('modalAnimation', [
            state('void', style({
                opacity: 0
            })),
            transition(':enter, :leave', [
                animate('0.2s ease-in-out')
            ])
        ]),
        trigger('translateAnimation', [
            state('void', style({ opacity: 0, transform: 'translateY(500px)' })),
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(500px)' }),
                animate('0.2s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ]),
            transition(':leave', [
                animate('0.2s ease-in-out', style({ opacity: 0, transform: 'translateY(500px)' }))
            ])
        ])

    ],
    imports: [CommonModule, ModalComponent, HeaderComponent]
})
export class NotesComponent implements OnInit {
    
    darkMode: boolean = false;
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
