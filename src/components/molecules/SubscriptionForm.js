import React                   from 'react';
import Input                   from '../atoms/Input';
import Textarea                from '../atoms/Textarea';
import {SubmitLandingFormOne}  from '../../../lambda/fauna-create';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const SubscriptionForm = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {},
        }
    }

    // _onNextClick() {
    //     if (this.state.activeQuestion === this.state.totalQuestions) {
    //         this._caclulateProgress(1);
    //         return;
    //     }

    //     this.setState({
    //         activeQuestion:  this.state.activeQuestion + 1,
    //     }, this._caclulateProgress(1));
    // }

    // _onBackClick() {
    //     if (this.state.activeQuestion === 1) {
    //         this._caclulateProgress(0);
    //         return;
    //     }

    //     this.setState({
    //         activeQuestion:  this.state.activeQuestion  - 1,
    //     }, this._caclulateProgress(0));
    // }

    _onSubmitClick = (e) => {
        // fetch("/", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //     body: encode({ "form-name": "contact-info", ...this.state.formData })
        // })
        //     .then(() =>
        //         this._caclulateProgress(1)
        //     )
        //     .catch(error => alert(error));
        SubmitLandingFormOne(this.state.formData, this.props.fingerprint);

        e.preventDefault();
    }

    _validateFormData = () => {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.activeQuestion === 1 && this.state.formData.name && this.state.formData.name !== "") {
            return false;
        }

        if (this.state.activeQuestion === 2 && this.state.formData.email && this.state.formData.email !== "" && pattern.test(this.state.formData.email)) {
            return false;
        }

        if (!pattern.test(this.state.formData.email)) {
            return true;
        }

        return true;
    }

    // _caclulateProgress(direction) {
    //     let percentComplete = this.state.activeQuestion / this.state.totalQuestions * 100;
    //     if (this.state.activeQuestion === this.state.totalQuestions && direction === 1) {
    //         this.props.isSubmittedCallback(true);
    //     }

    //     if (this.state.activeQuestion === 1 && direction === 0) {
    //         this.props.isSubmittedCallback(false);
    //     }

    //     if (direction === 0) {
    //         percentComplete = (this.state.activeQuestion - 2) / this.state.totalQuestions * 100;
    //     }

    //     this._sendData(percentComplete);
    // }

    // _sendData(percentComplete) {
    //     this.props.progressCallback(percentComplete);
    // }

    _setInputValue = (name, value) => {
        this.setState({ formData: {...this.state.formData, [name]: value }});
    }

    render() {
        let formClass   = 'o-subscription-form';

        let buttonClass = 'a-button';
        buttonClass += this.props.lightTheme ? ' -light ' : '';

        const headerClass = this.props.lightTheme ? " -light " : "";

        return (
            <form style={{paddingLeft: '30px'}} className = { formClass } name="subscription-info" method="POST" data-netlify="true">
                <div className = "o-subscription-form__container">
                    <div className = "o-subscription-form__wrapper">
                        <header className={ headerClass } aria-label="Info form header">{ this.props.header }</header>
                        <p style={{ margin: '-36px', marginLeft: '0px'}}>
                            Enter your email to receive new blog post notifications
                        </p>
                        <input type = "hidden" data-netlify="true" />
                        <input type="hidden" name="form-name" value="subscription-info" />
                        <Input
                            description        = "Enter your email to receive new blog post notifications."
                            type               = "email"
                            // className          = { this.state.activeQuestion === 1 ? '-active': '' }
                            name               = "email address"
                            inputValueCallback = { this._setInputValue }
                            isRequired         = { true }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.email }
                            id                 = "info-name" />
                        <div className = "o-subscription-form__buttons">
                            <button
                                type      = "submit"
                                onClick   = { this._onSubmitClick }
                                className = { buttonClass }>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default SubscriptionForm
