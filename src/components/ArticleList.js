import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import moment from 'moment'

class ArticleList extends React.Component {
    render() {
        const {articles, isOpenItem, toggleOpenItem, dateFilter, titleFilter} = this.props
        // const {from, to} = dateFilter
        const from = dateFilter[0]
        const to = dateFilter[1]

        const filteredArticles = articles.filter(article => {
          const titleFilterCheck = (titleFilter.length !== 0) ? titleFilter.includes(article.id) : true
          const dateFilterCheck = (from !== null || to !== null) ? moment(article.date).isBetween(from, to) : true
          console.log(dateFilterCheck);
          return titleFilterCheck && dateFilterCheck
        })
        const articleElements = filteredArticles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={isOpenItem(article.id)}
                         onClick={toggleOpenItem(article.id)}
                         ref = {this.getArticleRef}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
            </div>
        )
    }

    getArticleRef = (article) => {
        this.article = article
        console.log('---', findDOMNode(article))
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

export default connect(
    (state) => {
        const {articlesArray, dateFilter, titleFilter} = state.articles
        return {
            articles: articlesArray,
            dateFilter: dateFilter,
            titleFilter: titleFilter
        }
    }
)(accordion(ArticleList))
