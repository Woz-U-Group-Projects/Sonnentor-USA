import { React } from "react";
import { Header } from "../components/Header";

const Sale = () => <Header title="sale" />

import {Container, Row, Col} from 'react-amazing-grid'

class grid extends React.Component {
    render() {
        return  <div>
            <Container>
                <Row className="react-amazing-grid">
                    <Col xs={12} md={8}>Tea</Col>
                    <Col xs={6} md={4}>Tea</Col>
                </Row>

                <Row className="react-amazing-grid">
                    <Col xs={12} md={8}>Honey</Col>
                    <Col xs={6} md={4}>Honey</Col>
                </Row>

                <Row className="react-amazing-grid">
                    <Col xs={12} md={8}>Spices</Col>
                    <Col xs={6} md={4}>Spices</Col>
                </Row>
            </Container>
        </div>
    }
}

export default Sale;