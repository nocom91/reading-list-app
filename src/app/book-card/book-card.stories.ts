import { BookCardComponent } from './book-card.component';
import { Book } from '../models/book.model';

const demoBook: Book = {
  id: 1,
  name: 'The Pragmatic Programmer',
  author: 'Andrew Hunt & David Thomas',
};

export default {
  title: 'Book Card',
  component: BookCardComponent,
};

export const Default = {
  render: (args: any) => ({
    component: BookCardComponent,
    props: args,
  }),
  args: {
    book: demoBook,
  },
};
