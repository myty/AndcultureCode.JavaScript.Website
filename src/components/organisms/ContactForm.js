import React from 'react'

class ContactForm extends React.Component {

    render() {
        return (
            <div>
            <form className = "o-contact-form">
                <h6>Get In Touch</h6>
                <header>what can we help you with today?</header>
                <fieldset>
                    <input className = "a-radio" type="radio" name="type" value="project" id="project"/>
                    <label htmlFor="project">start a project together</label>
                </fieldset>
                <fieldset>
                    <input className = "a-radio" type="radio" name="type" value="quick-info" id="quick-info"/>
                    <label htmlFor="quick-info">get quick info</label>
                </fieldset>
                <fieldset>
                    <input className = "a-radio" type="radio" name="type" value="join-team" id="join-team"/>
                    <label htmlFor="join-team">join the team</label>
                </fieldset>
                <fieldset>
                    <input className = "a-radio" type="radio" name="type" value="start-ups" id="start-ups"/>
                    <label htmlFor="start-ups">talk start-ups (catamaran)</label>
                </fieldset>
            </form>

<form name="contact" method="POST" data-netlify="true">
<p>
  <label>Your Name: <input type="text" name="name" /></label>   
</p>
<p>
  <label>Your Email: <input type="email" name="email" /></label>
</p>
<p>
  <label>Your Role: <select name="role[]" multiple>
    <option value="leader">Leader</option>
    <option value="follower">Follower</option>
  </select></label>
</p>
<p>
  <label>Message: <textarea name="message"></textarea></label>
</p>
<p>
  <button type="submit">Send</button>
</p>
</form></div>
        )
    }
}

export default ContactForm;
