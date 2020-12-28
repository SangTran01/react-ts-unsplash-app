import React from 'react';

interface IProps {
  searchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface IState {
  input?: string;
}

class SearchBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      input: '',
    };
  }

  onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      input: e.currentTarget.value,
    });
  };

  render = () => {
    const { searchSubmit } = this.props;

    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={searchSubmit}>
          <div className='ui fluid icon input'>
            <input
              id='search-input'
              type='text'
              name='search'
              placeholder='Search a very wide input...'
              onChange={this.onInputChange}
              value={this.state.input}
            />
            <i className='search icon'></i>
          </div>
        </form>
      </div>
    );
  };
}

export default SearchBar;
