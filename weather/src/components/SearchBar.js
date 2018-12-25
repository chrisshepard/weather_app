import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search by City</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;

