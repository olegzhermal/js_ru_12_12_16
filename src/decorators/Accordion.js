//decorator === HOC(Higher Order Component)
import React from 'react'

export default function toggleOpen2(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openArticleId: null
        }
        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpenArticle = id => ev => {
            if (id === this.state.openArticleId) return this.setState({openArticleId: null})
            this.setState({
                openArticleId: id
            })
        }
    }
}
