import  React  from "react";
import  Header  from "../components/Header";
import { Button }  from 'react-bootstrap';
import {Cart, Product, CheckoutButton, cartLocalization, cartreducer, setCartCurrency} from 'react-shopping-cart';
//import {Container, Row, Col} from 'react-amazing-grid'

const Sale = () => <Header title="sale" />

//
 //   render() {
  //      return  <div>
  //          <Container>
                //<Row className="react-amazing-grid">
                   // <Col xs={12} md={8}>Tea</Col>
                  //  <Col xs={6} md={4}>Tea</Col>
                //</Row>

                //<Row className="react-amazing-grid">
                   // <Col xs={12} md={8}>Honey</Col>
                    //<Col xs={6} md={4}>Honey</Col>
                //</Row>

                //<Row className="react-amazing-grid">
                  //  <Col xs={12} md={8}>Spices</Col>
                  //  <Col xs={6} md={4}>Spices</Col>
               // </Row>
           // </Container>
       // </div>
    //}
//}
export default class Shop extends Product{
    render(){
        return (
		<div>
			<Button
			onPress={this.onPressAddToCart}
			title="Add To Cart"
			color="#595862"
			accessibilityLabel="ADD THIS TO THE CART YA JIVE TURKEY"
			/>
			<img src="https://www.sonnentor.com/var/sonnentor/storage/images/onlineshop/tee/kraeuter-mischungen/pure-leichtigkeit-tee-bio-doppelkammerbeutel/5202337-324-ger-AT/pure-leichtigkeit-tee-bio-doppelkammerbeutel86_w413.png" />
		</div>
        )
	}
} ;

//export default Sale 