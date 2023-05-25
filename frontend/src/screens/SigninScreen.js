import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className="small-container">
      <Helmet>
        <title>connexion</title>
      </Helmet>
      <h1 className="my-3">connexion</h1>
      <Form>
        <Form.Group className="my-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="my-3" controlId="password">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="my-3">
          <Button type="submit">Se connecter</Button>
        </div>
        <div className="my-3">
          Nouveau client?{''}
          <Link to={`/signup?redirect=${redirect}`}>Creer votre compte</Link>
        </div>
      </Form>
    </Container>
  );
}
