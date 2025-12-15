import { ChangeDetectionStrategy, Component, input, output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'rl-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule],
})
export class BookCardComponent {
  book = input.required<Book>();
  onDelete = output<Book['id']>();

  handleDelete() {
    this.onDelete.emit(this.book().id);
  }
}
