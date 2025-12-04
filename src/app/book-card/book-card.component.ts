import { ChangeDetectionStrategy, Component, input, output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';
import { ButtonIcon } from 'primeng/button';

@Component({
  selector: 'rl-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonIcon],
})
export class BookCardComponent {
  book = input.required<Book>();
  onDelete = output<void>();

  handleDelete() {
    this.onDelete.emit();
  }
}
