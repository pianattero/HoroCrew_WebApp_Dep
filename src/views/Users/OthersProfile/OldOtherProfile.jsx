import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Aries from "../../../assets/images/SignsBack/aries.png"
import { useContext } from "react";
import AuthContext from '../../../context/AuthContext';


export const OtherProfile = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="vh-100" >
            <MDBContainer>
                <MDBRow className="justify-content-center">
                    <MDBCol md="9" lg="7" xl="5" className="mt-5">
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="p-4">
                                <div className="d-flex text-black">
                                    <div className="flex-shrink-0">
                                        <MDBCardImage
                                            style={{ width: '180px', borderRadius: '10px' }}
                                            src={Aries}
                                            alt='Generic placeholder image'
                                            fluid />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <MDBCardTitle> {currentUser.firstName} </MDBCardTitle>
                                        <MDBCardText>{currentUser.lastName}</MDBCardText>

                                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                            style={{ backgroundColor: '#efefef' }}>

                                            <div className="px-3">
                                                <p className="small text-muted mb-1">Followings</p>
                                                <p className="mb-0">1</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="small text-muted mb-1">Followers</p>
                                                <p className="mb-0">1</p>
                                            </div>
                                            <div>
                                                <p className="small text-muted mb-1">Rating</p>
                                                <p className="mb-0">8.5</p>
                                            </div>
                                        </div>
                                        <div >
                                            <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }} >
                                                Follow
                                            </MDBBtn>
                                        </div>

                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}