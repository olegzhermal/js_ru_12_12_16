import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'
import { connect } from 'react-redux'
import { filterArticlesByTitle, filterArticlesByDate } from '../AC'
// import { articles } from '../fixtures'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
      const {filterArticlesByDate, filterArticlesByTitle} = this.props;

        return (
            <div>
                <ArticlesSelect articles = {this.props.articles} filterFunc={filterArticlesByTitle}/>
                <DateRange filterFunc={filterArticlesByDate} />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            articles: state.articles.articlesArray
        }
    },
    {filterArticlesByDate, filterArticlesByTitle}
)(Filters)
