import React from 'react';
import { Button, Col, Container, Form, Row, Jumbotron } from 'react-bootstrap';

const App = () => {
	const [state, setState] = React.useState({
		number: ''
	});
	const [factorial, setFactorial] = React.useState('');

	const calculateFactorial = (e: any) => {
		e.preventDefault();
		let factorial = 1;
		let num = parseInt(state.number);
		let str = '';
		if (isNaN(num)) return null;

		for (let i = 1; i <= num; i++) {
			factorial *= i;
		}
		str = factorial.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');

		setFactorial(`Factorial of ${num}! is: ${str}`);
	};

	return (
		<>
			<Jumbotron>
				<h1>Factoralize a number</h1>
				<p>Takes a number from an input and factoralizes it</p>
			</Jumbotron>
			<Container fluid>
				<Row>
					<Col md={6}>
						<Form onSubmit={calculateFactorial}>
							<Form.Group controlId='formNumber'>
								<Form.Label>Enter a number:</Form.Label>
								<Form.Control
									type='text'
									value={state.number}
									name='number'
									onChange={(e: any) => setState({ number: e.target.value })}
								/>
							</Form.Group>
						</Form>
						<Button type='submit' variant='primary'>
							Submit
						</Button>{' '}
						<Button
							type='reset'
							variant='outline-secondary'
							onClick={() => {
								setState({
									number: ''
								});
								setFactorial('');
							}}
						>
							Clear
						</Button>
					</Col>
				</Row>
				<p>&nbsp;</p>
				<Row p-25>
					<Col md='auto'>
						<p>{factorial}</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default App;
