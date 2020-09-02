import React from 'react';
import { connect } from 'react-redux'
import {fetchStream,editStream} from '../../actions'
import StreamForm from './StreamForm'

import _ from 'lodash'
import history from '../../history';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log('edit stream', formValues)
        this.props.editStream(this.props.match.params.id,formValues)
        history.push('/')
    }

    render(){
        console.log(this.props)

        if(!this.props.stream) {
            return <div>Loading</div>
        }

        return (
            <div>
               <h3>Edit a Stream</h3>
               <StreamForm 
               initialValues={_.pick(this.props.stream,'title','description')}
               onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    console.log(ownProps)
    return { stream : state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps , 
    {fetchStream ,editStream})(StreamEdit)