import React, {Component, DOMElement, ReactComponentElement} from 'react';
import {Card, ListGroupItem, ListGroup } from 'react-bootstrap';

interface SkillsCard_Props {
	title:String
  items:String[]
}
  
export class SkillsCard extends Component<SkillsCard_Props> {
	constructor(props:SkillsCard_Props) {
		super(props)
	}

	render() {
		return(
			<>
			<Card className="bg-secondary">
				<Card.Header className="text-white">{this.props.title}</Card.Header>
				<ListGroup className="list-group-flush">
					{this.props.items.map((item) => <ListGroupItem>{item}</ListGroupItem>)}
				</ListGroup>
			</Card>
			</>
		)
	}
}