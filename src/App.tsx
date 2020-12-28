import React from 'react';
import './App.css';
import unsplash from './api/Unsplash';
import ImageDetail from './Model/ImageDetail';

import SearchBar from './components/SearchBar/SearchBar.component';
import ImageList from './components/ImageList/ImageList.component';

const url = 'https://api.unsplash.com/search/photos';

interface IState {
  images?: ImageDetail[];
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      images: [],
    };
  }
  render() {
    return (
      <div className='App'>
        <SearchBar searchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }

  onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const val = e.currentTarget['search-input'].value;

    const response = await unsplash.get('/search/photos', {
      params: {
        per_page: 10,
        query: val,
      },
    });

    console.log(response.data.results);

    this.setState({
      images: response.data.results as ImageDetail[],
    });
  };
}

export default App;
