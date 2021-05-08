import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export const Contacto = () => {


	return (
		<>
			<div className="contacto__container" id="contacto">
				<Row className="contacto__row">
					<h1 className="contacto__title mb-5">Contacta conmigo</h1>

					<Form action="https://formsubmit.co/lsanchoaragon@gmail.com"
						method="POST"
						className="contacto__form"
                        >
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Label>Introduce tu Email</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" name="email" />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Escribe aquí tu mensaje</Form.Label>
							<Form.Control as="textarea" rows={3} name="text" />
						</Form.Group>
                        <button type="submit" className="contacto__btn">Enviar</button>
					</Form>
				</Row>
			</div>
		</>
	);
};
