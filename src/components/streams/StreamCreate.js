import React from 'react';
// field - component uppercase and redux- function
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        console.log('formValues', formValues);
        this.props.createStream(formValues)

    }

    render() {
        console.log('props stream create', this.props)
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, {
    createStream
})(StreamCreate);