//decorator === HOC(Higher Order Component)
import React from 'react'

export default function toggleOpen2(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            //суть декораторов в переисползовании кода, не привязывайся к названиям сущностей. Лучше openItemId
            openArticleId: null
        }
        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpenArticle = id => ev => {
            //ок, но я б предпочел в один setState записать
            if (id === this.state.openArticleId) return this.setState({openArticleId: null})
            this.setState({
                openArticleId: id
            })
        }
    }
}
