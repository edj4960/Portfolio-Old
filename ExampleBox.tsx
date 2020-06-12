import React, {Component, DOMElement, ReactComponentElement} from 'react';
import { Button, Card, Modal, ModalBody } from 'react-bootstrap';
import './ExampleBox.css';

interface img_info {
	image:any
	size:number
}

interface PageProps {
	imageFile: any
	title: String
	description: String
	skills: String[]
	paragraphs: any
	images: img_info[]
}

interface PageState {
	displayInfo: boolean
	showModal: boolean
}

export class ExampleBox extends Component<PageProps, PageState> {
	constructor(props:PageProps) {
		super(props)

		this.state = {
			displayInfo: false,
			showModal: false
		}

		this.displayBoxInfo = this.displayBoxInfo.bind(this)
		this.displayBoxTitle = this.displayBoxTitle.bind(this)
		this.setShow = this.setShow.bind(this)
	}

	displayBoxInfo() {
		this.setState({
			displayInfo: true
		})
	}

	displayBoxTitle() {
		this.setState({
			displayInfo: false
		})
	}

	setShow(show:boolean) {
		this.setState({
			showModal: show
		})
	}

	render () {
		return(
			<>
			<div className="box" 
				onMouseEnter={this.displayBoxInfo}
				onMouseLeave={this.displayBoxTitle}>
				
				<Card.Img 
					variant="top" 
					className={this.state.displayInfo ? 'box-image-hidden':'box-image'}  
					src={this.props.imageFile} />
				
				<p className={this.state.displayInfo ? 'box-text hidden':'box-text visible'}>{this.props.title}</p>
				<p style={{top:'40%'}} className={this.state.displayInfo ? 'box-text visible':'box-text hidden'}>{this.props.description}</p>
				
				<Button 
					className={this.state.displayInfo ? 'box-button visible':'box-button hidden'}
					variant="info"
					onClick={() => this.setShow(true)}>View Here</Button>
			</div>

			<Modal dialogClassName="example-modal" show={this.state.showModal} onHide={() => this.setShow(false)}>
				<Modal.Header className="modal-header" closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<div>
					<h3 className="Title_3">Skills Used</h3>
					<div className="card-holder">
						{this.props.skills.map((value) => <div className="card-div">{value}</div>)}
					</div>
				</div>

				<div>
					<h3 className="Title_3">Overview</h3>
					{this.props.paragraphs}
				</div>

				<div style={this.props.images.length === 0 ? {display:'none'}:{}} >
					<h3 className="Title_3">Pictures</h3>
					<div style={{textAlign:'center'}}>
						{this.props.images.map((item) => <img src={item.image} className="img-lg" style={item.size != -1 ? {width:item.size + 'rem'}:{} } />)}
					</div>
				</div> 
				</Modal.Body>
			</Modal>
			</>
		);
	}
}