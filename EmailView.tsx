import React, {Component, DOMElement, ReactComponentElement} from 'react';
import { Button, Card, CardColumns, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';

interface EmailView_Props {}

interface EmailView_State {
	message: string,
	user_email: string,
	user_name: string,
	// email: string,
	display: boolean,
	disableSend: boolean
}

export class EmailView extends Component<EmailView_Props, EmailView_State> {
  constructor(props) {
		super(props);
		this.state = { 
				message: '', 
				user_email: '', 
				user_name: '',
				// email: 'evandj423@gmail.com', 
				display: false,
				disableSend: true
			};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.setShow = this.setShow.bind(this);
		this.checkIfCanSend = this.checkIfCanSend.bind(this);
	}

	setShow(show:boolean) {
		this.setState({
			display: show
		})
	}

  handleChange(event) {
		this.setState({message: event.target.value})
		this.checkIfCanSend()
	}
	
	handleNameChange(event) {
		this.setState({user_name: event.target.value})
		this.checkIfCanSend()
	}

	handleEmailChange(event) {
		this.setState({user_email: event.target.value})
		this.checkIfCanSend()
	}

	checkIfCanSend() {
		let disableSend = false
		if (this.validateEmail(this.state.user_email) == false ||
				this.state.user_name == '' ||
				this.state.message == '') {
					disableSend = true
		}

		this.setState({
			disableSend: disableSend						
		})
	}

	validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}

  handleSubmit() {
		const templateId = 'template_gxTuSbwt'
		this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.user_name, reply_to: this.state.user_email})
		this.setState({
			display: false
		})
		alert("Thank you for the email! I will reply as soon as I can.")
	}
	
	sendFeedback(templateId, variables) {
		emailjs.init('user_THrGUtS3StqoGfIMSTo0z')
		emailjs.send(
			'gmail', templateId,
			variables
		).then(res => {
			console.log('Email successfully sent!')
		}).catch(err => console.error('Email failed to send.'))
	}
  
  render() {
	return (
		<>
		<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
		<Button className="ContactButton" 
			variant="outline-primary" 
			onClick={() => this.setShow(true)} 
			size="lg">Contact Me!</Button>

		<Modal show={this.state.display} onHide={() => this.setShow(false)}>
			<Modal.Header className="modal-header" closeButton>
			</Modal.Header>
			<Modal.Body>
			<form className="test-mailing">
				<h1 className="form-title">Email Me Here!</h1>
				<div>
					<p className="formText">Name</p>
					<input type="text" 
						required={true} 
						onChange={this.handleNameChange} 
					/>

					<p className="formText">Write your message below</p>
					<textarea
						id="test-mailing"
						name="test-mailing"
						onChange={this.handleChange}
						// placeholder="Write your message here!"
						required
						value={this.state.message}
						style={{width: '100%', height: '150px'}}
					/>

					<p className="formText">Add your email so I can contact you</p>
					<input type="text"
						required={true}
						onChange={this.handleEmailChange}
						/>
				</div>
				<Button value="Submit" className="btn btn--submit" style={{marginTop:'1rem'}} 
					onClick={this.handleSubmit} disabled={this.state.disableSend}  >Send</Button>
  		</form>

			<h1 className="Title_3" style={{color:'darkgrey', fontSize:'28px'}}>~ OR ~</h1>
			<h1 className="form-title" >Email Me Anywhere:</h1>
			<h1 className="Title_3" style={{color:'darkgrey', fontSize:'28px'}}>evandj423@gmail.com</h1>
			</Modal.Body>
		</Modal>
		</>
    )
  } 
}