import React, { Component } from 'react';
import FaqsBlock from 'containers/faqsBlock';
import { withRouter } from 'react-router-dom';
class faqs extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div>
                <FaqsBlock />
             
     
            </div>
            )   
    }
}
export default withRouter(faqs)
