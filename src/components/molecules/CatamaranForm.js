import React                   from 'react';
import Input                   from '../atoms/Input';
import Select                  from '../atoms/Select';
import Textarea                from '../atoms/Textarea';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const CatamaranForm = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeQuestion:  1,
            totalQuestions:  4,
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
            body: encode({ "form-name": "contact-catamaran", ...this.state.formData })
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

        if (this.state.activeQuestion === 3 && this.state.formData.interest && this.state.formData.interest !== "") {
            return false;
        }

        if ([4].indexOf(this.state.activeQuestion) != -1) {
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
        console.log(this.state.formData);

        if (this._validateFormData()) {
            nextButtonClass += ' -disabled'
        }

        nextButtonClass += this.props.lightTheme ? ' -light ' : '';

        return (
            <form className = { formClass } name = "contact-catamaran" method = "POST" data-netlify = "true">
                <div className = "o-rhythm__container">
                    <div className = "o-contact-form__wrapper">
                        <header>talk start-ups (Catamaran)</header>
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
                        <Select
                            className          = { this.state.activeQuestion === 3 ? '-active': '' }
                            name               = "interest"
                            inputValueCallback = { this._setInputValue }
                            lightTheme         = { this.props.lightTheme }
                            value              = { this.state.formData.interest } />
                        <Textarea
                            className          = { this.state.activeQuestion === 4 ? '-active': '' }
                            name               = "message"
                            inputValueCallback = { this._setInputValue }
                            value              = { this.state.formData.message }
                            lightTheme         = { this.props.lightTheme } />
                        <div className = "o-contact-form__buttons">
                            <a
                                onClick   = { this._onBackClick }
                                className = { buttonClass }>
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

export default CatamaranForm;
