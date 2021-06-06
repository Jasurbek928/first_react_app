import React from 'react';
import {Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
import sneaker1 from '../images/img4.jpg';
import sneaker2 from '../images/img1.jpg';
import sneaker3 from '../images/img3.jpg'



const NewCollec = () => {
    return (
        <div className="newcollec">
            <Container>
                <Row>
                    <Col md="12 pageTitles">
                        <p>Straight From Nike</p>
                        <h4>New Collection</h4>
                    </Col>
                    <Col lg="6" md="12" className="cardsArea">
                        <Row>
                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker1} alt="sneaker image"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker2} alt="sneaker image"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker1} alt="sneaker image"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col className="cards" lg="6" md="6">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker2} alt="sneaker image"/>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg="6" md="12">
                        <Card>
                            <CardBody className="card-body">
                                <div className="cost">
                                    <span>SALE -50%</span>
                                    <span>99$</span>
                                </div>
                                <img src={sneaker3} alt="sneaker"/>
                            </CardBody>
                            <CardFooter className="leftcardfot">
                                <h4 className="productName">
                                    Nike Air Force 1 Shadow
                                </h4>
                                <p className="productBrand">
                                    Brand:Nike
                                </p>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="12" className="buttonArea">
                        <a href="#" className="exploreButton">
                            Explore Other Products
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};



export default NewCollec;