import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Helmet } from 'react-helmet-async';
import { Form, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../compoment/CheckoutSteps';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [ville, setVille] = useState(shippingAddress.ville || '');
  const [pays, setPays] = useState(shippingAddress.pays || '');
  const [codePostal, setCodePostal] = useState(
    shippingAddress.codePostal || ''
  );
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        ville,
        codePostal,
        pays,
      },
    });
    localStorage.sertItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        ville,
        codePostal,
        pays,
      })
    );
    navigate('/payment');
  };
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mu-3" controlId="fullName">
            <Form.Label>full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mu-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mu-3" controlId="ville">
            <Form.Label>ville</Form.Label>
            <Form.Control
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mu-3" controlId="codePostal">
            <Form.Label>Code Postal</Form.Label>
            <Form.Control
              value={codePostal}
              onChange={(e) => setCodePostal(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mu-3" controlId="pays">
            <Form.Label>pays</Form.Label>
            <Form.Control
              value={pays}
              onChange={(e) => setPays(e.target.value)}
              required
            />
          </Form.Group>
          <div>
            <Button variant="primary" type="submi">
              continue
            </Button>
          </div>
        </Form>
      </div>
      <h1 className="my-3">Shipping Address</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mu-3" controlId="fullName">
          <Form.Label>full Name</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mu-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mu-3" controlId="ville">
          <Form.Label>ville</Form.Label>
          <Form.Control
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mu-3" controlId="codePostal">
          <Form.Label>Code Postal</Form.Label>
          <Form.Control
            value={codePostal}
            onChange={(e) => setCodePostal(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mu-3" controlId="pays">
          <Form.Label>pays</Form.Label>
          <Form.Control
            value={pays}
            onChange={(e) => setPays(e.target.value)}
            required
          />
        </Form.Group>
        <div>
          <Button variant="primary" type="submi">
            continue
          </Button>
        </div>
      </Form>
    </div>
  );
}
