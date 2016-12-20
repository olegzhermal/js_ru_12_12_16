import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'
import Accordion from '../decorators/Accordion'

class ArticleList extends React.Component {
    render() {
        const {articles} = this.props

        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={this.props.openArticleId == article.id}
                         onClick={this.props.toggleOpenArticle(article.id)}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }
}

export default Accordion(ArticleList)

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.string,
    toggleOpenArticle: PropTypes.func.isRequired
}
