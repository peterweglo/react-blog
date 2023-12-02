const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Sport',
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('12-22-2022'),
      author: 'John Doe',
      category: 'News',
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-11-2023'),
      author: 'John Doe',
      category: 'Movies',
    },
  ],

  categories: [
    { id: 1, name: 'Sport' },
    { id: 2, name: 'News' },
    { id: 3, name: 'Movies' },
    { id: 4, name: 'Travel' },
  ],
};

export default initialState;
