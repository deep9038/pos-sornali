import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Container, Row, Col } from "react-bootstrap"
import "./Bill.css"
import Button from '@material-ui/core/Button'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {AiOutlinePrinter} from 'react-icons/ai'

const Bill = ({setOpenBill,totalPrice,cartItem,customer}) => {
    return (
        <>
        <button style={{height:'60px',width:'100px',backgroundColor:'gray',margin:'10px',border:'none',borderRadius:'4px'}}>
        <IoMdArrowRoundBack style={{margin:'auto'}} size={30} onClick={()=>setOpenBill(false)} />
        </button>
           <button style={{height:'60px',width:'100px',backgroundColor:'#6460d6',margin:'10px',border:'none',borderRadius:'4px',float:'right'}}>
            <AiOutlinePrinter style={{margin:'auto',color:'white'}} size={30}  />
           </button>


            <Container style={{ textAlign: "center" }}>
                <Row>
                    <Col><h2>W T F</h2></Col>
                </Row>
                <Row>
                    <Col><h5>Ward No. 21, 416, Jessore Rd, Vivekananda Abasan, Amarpalli, Dum Dum, Kolkata, West Bengal 700055</h5></Col>
                </Row>
                <Row>
                    <Col><h5>W.B.T.D.C.LTD.PH:080138 65077</h5></Col>
                </Row>
                
                <Row>
                    {customer ? <Col>Customer Name :- {customer.CustomerName}</Col> :"" }
                    
                </Row>
                <Row>
                {customer ? <Col>Customer Contect :- {customer.CustomerNumber}</Col> :"" }

                </Row>

            </Container>
            <Container style={{ marginTop: "20px", textAlign: "center" }}>

                <h4> ............................................................CASH/BILL..............................................................</h4>

            </Container>

            <Container style={{ display: "flex", justifyContent: "center", alignIems: "center", marginTop: "10px" }}>
                <table class="table table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col" style={{ textAlign: "right" }}>QTY</th>
                            <th scope="col" style={{ textAlign: "right" }}>Rate</th>
                            <th scope="col" style={{ textAlign: "right" }}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th scope="row">Rice</th>
                            <td style={{ textAlign: "right" }}>5.00</td>
                            <td style={{ textAlign: "right" }}>60.00</td>
                            <td style={{ textAlign: "right" }}>300.00</td>
                        </tr>
                        <tr>
                            <th scope="row">FISH CHIP</th>
                            <td style={{ textAlign: "right" }}>5.00</td>
                            <td style={{ textAlign: "right" }}>60.00</td>
                            <td style={{ textAlign: "right" }}>300.00</td>
                        </tr>

                        <tr>
                            <th scope="row">EGG CURRY</th>
                            <td style={{ textAlign: "right" }}>5.00</td>
                            <td style={{ textAlign: "right" }}>60.00</td>
                            <td style={{ textAlign: "right" }}>300.00</td>
                        </tr>

                        <tr>
                            <th scope="row">DALL</th>
                            <td style={{ textAlign: "right" }}>5.00</td>
                            <td style={{ textAlign: "right" }}>60.00</td>
                            <td style={{ textAlign: "right" }}>300.00</td>
                        </tr>

                    </tbody>
                </table>
            </Container>
            <Container className='gstdot' style={{textAlign:"center"}}><h4>............................................................................................................................................</h4></Container>
            <Container style={{ display: "flex", justifyContent: "center", alignIems: "center", marginTop: "10px" }}>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">GST</th>
                            <th scope="col" style={{ textAlign: "right" }}>@ 2.50% ON</th>
                            <th scope="col" style={{ textAlign: "right" }}>966.00</th>
                            <th scope="col" style={{ textAlign: "right" }}>24.14</th>
                        </tr>

                    </thead>

                </table>
            </Container>

            <Container style={{ display: "flex", justifyContent: "center", alignIems: "center", marginTop: "10px" }}>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">TOTAL AMOUNT :-</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col" style={{ textAlign: "right" }}>1014.00</th>
                        </tr>
                    </thead>

                </table>
            </Container>

        </>
    )
}

export default Bill