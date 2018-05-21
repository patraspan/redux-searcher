import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountries, searchCountries } from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component.jsx';



class CountryFlagContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }
    search(event){
        this.props.dispatch(searchCountries(event.target.value));
    }
    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <CountryFlagList countries = {this.props.visibleCountries} />
            </div>
        );
    }
};

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    }
};

export default connect(mapStateToProps) (CountryFlagContainer);
