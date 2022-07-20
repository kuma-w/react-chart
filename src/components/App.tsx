import React from 'react';

interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
};

function App() {
  return <div className='App'>{nav.about.title}</div>;
}

export default App;
