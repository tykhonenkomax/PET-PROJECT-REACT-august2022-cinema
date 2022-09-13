import React, {Component} from 'react';


class Search extends Component {
  state = {
    search: '', type: 'all',
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (event) => {
    this.setState(
        ()=>({
          type: event.target.dataset.type}),()=>this.props.searchMovies(this.state.search,this.state.type))
  }

  render() {
    const {search} = this.state

    return (

        <form>
          <div className="row">
            <div className="col s12">
              <div className="input-field">
                <input id="email_inline"
                       type="text"
                       placeholder='Search' value={search}
                       onChange={(e) => this.setState({search: e.target.value})}
                       onKeyDown={this.handleKey}
                />
                <a className="waves-effect waves-light btn"
                   onClick={() => this.props.searchMovies(
                       this.state.search,
                       this.state.type
                   )}>Search</a>
                <label htmlFor="email_inline"></label>
              </div>
            </div>
          </div>
          <div className='radioButtonStyle'>
            <p>
              <label>
                <input className="with-gap"
                       name="group3"
                       type="radio"
                       data-type='all'
                       onClick={this.handleFilter}
                       checked={this.state.type === 'all'}
                />

                <span>All</span>
              </label>
            </p>
            <p>
              <label>
                <input className="with-gap"
                       name="group3"
                       type="radio"
                       data-type='movie'
                       onClick={this.handleFilter}
                       checked={this.state.type === 'movie'}
                />
                <span>Series Only</span>
              </label>
            </p>
            <p>
              <label>
                <input className="with-gap"
                       name="group3" type="radio"
                       data-type='series'
                       onClick={this.handleFilter}
                       checked={this.state.type === 'series'}
                />
                <span>Episode Only</span>
              </label>
            </p>
          </div>
        </form>);
  }
}

export {Search};