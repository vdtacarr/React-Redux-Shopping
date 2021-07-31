import React, { Component } from 'react'
import {Row,Col} from 'reactstrap'
import CategoryList from '../categories/CategoryList'
import ProducList from '../products/ProductList'

export default class DashBoard extends Component {
    render() {
        return (
            <div>
                <Row>
               <Col xs="3">
                   <CategoryList></CategoryList>
               </Col>
               <Col xs="9">
                   <ProducList></ProducList>
               </Col>


                </Row>
            </div>
        )
    }
}
