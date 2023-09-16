import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ReservationForm.css';

const ReservationForm = () => {
  return (
    <div className="reservation-form-container">
      <Container>
        <Row className="justify-content-center align-items-center form-row">
            <Row>
                <form className="reservation-form">
                  <h3>Departure</h3>
                  <div className="form-group">
                    <label htmlFor="departure-location">Location:</label>
                    <select id="departure-location" name="departure-location" className="form-control">
                      <option value="New York, USA">New York, USA</option>
                      <option value="London, UK">London, UK</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="departure-date">Date:</label>
                    <input type="date" id="departure-date" name="departure-date" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="departure-time">Time:</label>
                    <input type="time" id="departure-time" name="departure-time" className="form-control" />
                  </div>
                </form>
            </Row>

            {/* Arrival Section */}
            <Row>
                <form className="reservation-form">
                  <h3>Arrival</h3>
                  <div className="form-group">
                    <label htmlFor="arrival-location">Location:</label>
                    <select id="arrival-location" name="arrival-location" className="form-control">
                      <option value="Los Angeles, USA">Los Angeles, USA</option>
                      <option value="Beijing, China">Beijing, China</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="arrival-date">Date:</label>
                    <input type="date" id="arrival-date" name="arrival-date" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="arrival-time">Time:</label>
                    <input type="time" id="arrival-time" name="arrival-time" className="form-control" />
                  </div>
                </form>
            </Row>

            {/* Check Button */}
            <Row>
              <Col lg="12" className="text-right">
                <button type="button" className="btn-primary">CHECK</button>
              </Col>
            </Row>
        </Row>
      </Container>
    </div>
  );
};

export default ReservationForm;
