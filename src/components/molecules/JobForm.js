import React                   from 'react';
import Input                   from '../atoms/Input';
import Textarea                from '../atoms/Textarea';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const JobForm = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeQuestion:  1,
            totalQuestions:  5,
            formData:        {},
        }

        this._onNextClick       = this._onNextClick.bind(this);
        this._onBackClick       = this._onBackClick.bind(this);
        this._onSubmitClick     = this._onSubmitClick.bind(this);
        this._caclulateProgress = this._caclulateProgress.bind(this);
        this._setInputValue     = this._setInputValue.bind(this);
    }

    _onNextClick() {
        if (this.state.activeQuestion === this.state.totalQuestions) {
            this._caclulateProgress(1);
            return;
        }

        this.setState({
            activeQuestion:  this.state.activeQuestion + 1,
        }, this._caclulateProgress(1));
    }

    _onBackClick() {
        if (this.state.activeQuestion === 1) {
            this._caclulateProgress(0);
            return;
        }

        this.setState({
            activeQuestion:  this.state.activeQuestion  - 1,
        }, this._caclulateProgress(0));
    }

    _onSubmitClick(e) {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-job", ...this.state.formData })
        })
            .then(() =>
                this._caclulateProgress(1)
            )
            .catch(error => alert(error));

        e.preventDefault();
    }

    _validateFormData() {
        const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (this.state.activeQuestion === 1 && this.state.formData.name && this.state.formData.name !== "") {
            return false;
        }

        if (this.state.activeQuestion === 2 && this.state.formData.email && this.state.formData.email !== "" && pattern.test(this.state.formData.email)) {
            return false;
        }

        if (this.state.activeQuestion === 3 && this.state.formData.phone && this.state.formData.phone !== "") {
            return false;
        }

        return true;
    }

    _caclulateProgress(direction) {
        let percentComplete = this.state.activeQuestion / this.state.totalQuestions * 100;
        if (this.state.activeQuestion === this.state.totalQuestions && direction === 1) {
            this.props.isSubmittedCallback(true);
        }

        if (this.state.activeQuestion === 1 && direction === 0) {
            this.props.isSubmittedCallback(false);
        }

        if (direction === 0) {
            percentComplete = (this.state.activeQuestion - 2) / this.state.totalQuestions * 100;
        }

        this._sendData(percentComplete);
    }

    _sendData(percentComplete) {
        this.props.progressCallback(percentComplete);
    }

    _setInputValue(name, value) {
        this.setState({ formData: {...this.state.formData, [name]: value }});
    }

    render() {
        let formClass   = 'o-contact-form';
        formClass += this.props.isActive ? ' -active' : '';

        let buttonClass = 'a-button';
        buttonClass += this.props.lightTheme ? ' -light ' : '';

        let nextButtonClass = 'a-button';
        formClass += this.props.isActive ? ' -active' : '';

        if (this.state.activeQuestion === this.state.totalQuestions) {
            buttonClass += ' -active'
        }

        if (this._validateFormData()) {
            nextButtonClass += ' -disabled'
        }

        nextButtonClass += this.props.lightTheme ? ' -light ' : '';

        return (
            <form className = { formClass } name = "contact-job" method = "POST" data-netlify = "true">
                <div className = "o-rhythm__container">
                    <div className = "o-contact-form__wrapper">
                        <header>join the team</header>
                        <Input
                            className          = { this.state.activeQuestion === 1 ? '-active': '' }
                            type               = "text"
                            name               = "name"
                            inputValueCallback = { this._setInputValue }
                            isRequired         = { true }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.name } />
                        <Input
                            className          = { this.state.activeQuestion === 2 ? '-active': '' }
                            type               = "email"
                            name               = "email"
                            inputValueCallback = { this._setInputValue }
                            isRequired         = { true }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.email } />
                        <Input
                            className          = { this.state.activeQuestion === 3 ? '-active': '' }
                            type               = "text"
                            name               = "phone"
                            inputValueCallback = { this._setInputValue }
                            isRequired         = { true }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.phone } />
                        <Input
                            className          = { this.state.activeQuestion === 4 ? '-active': '' }
                            type               = "text"
                            name               = "linkedin_profile"
                            inputValueCallback = { this._setInputValue }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.linkedin_profile } />
                        <Textarea
                            className          = { this.state.activeQuestion === 5 ? '-active': '' }
                            name               = "message"
                            inputValueCallback = { this._setInputValue }
                            value              = { this.state.formData.message }
                            lightTheme         = { this.props.lightTheme } />
                        <fieldset className = { this.state.activeQuestion === 6 ? '-active': '' }>
                            <input
                                className = "a-checkbox"
                                type      = "checkbox"
                                name      = "acknowledge"
                                value     = "acknowledge"
                                id        = "acknowledge"/>
                            <label
                                className = "a-label"
                                htmlFor   = "acknowledge">
                                    I acknoledge that this position is located in Harrisburg, PA
                            </label>
                        </fieldset>
                        <div className = "o-contact-form__buttons">
                            <a
                                onClick   = { this._onBackClick }
                                className = {  buttonClass }>
                                Go Back
                            </a>
                            {  // if
                                this.state.activeQuestion !== this.state.totalQuestions &&
                                <a
                                    onClick   = { this._onNextClick }
                                    className = { nextButtonClass }>
                                    Next
                                </a>
                            }
                            <button
                                type      = "submit"
                                onClick   = { this._onSubmitClick }
                                className = {  buttonClass }>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default JobForm
