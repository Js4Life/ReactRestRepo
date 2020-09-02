import React from 'react';
// field - component uppercase and redux- function
import {Field,reduxForm} from 'redux-form';

// import {connect} from 'react-redux';
// import {createStream} from '../../actions'

class StreamForm extends React.Component{

    renderError({error,touched}){
        if(touched&&error) {
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput =( {input , label , meta})  => {
      console.log('formPorps child',{input})
      console.log('meta error',meta)

      const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            {/* <div>{meta.error}</div> */}

            {this.renderError(meta)}
        </div>
        );

    }


    onSubmit = (formValues) => {
      console.log('form-Values',formValues);
      this.props.onSubmit(formValues)

    }
    
    render() {
        console.log('props stream create',this.props)
        return (

            <form 
            className="ui form error" 
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            > 
                <Field name="title" component={this.renderInput} label="Enter Title "/>

                <Field name="description" 
                component={this.renderInput} 
                label="Enter description" />

                <button className="ui button primary">Submit</button>

            </form>
            
            );
}
}

const validate = (formValues) => {

    const errors = {};

        if(!formValues.title) {
            errors.title = 'You must enter a title'
        }

        if(!formValues.description) {
            errors.description = 'you must description'
        }
        
        return errors;
}

//()();IIFY
export default reduxForm({
    form:'streamForm',
    validate:validate
})(StreamForm);
