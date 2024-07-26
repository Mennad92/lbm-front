import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';


fetch('http://localhost:8000/api/users/1/').then((response)=> {
  response = response.json()
  response.then((result) => {
    console.log(result)
  })
})

const Profile = () => {

  const [user, setUser] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: {
      rue: '',
      codePostal: '',
      ville: '',
      pays: ''
    }
  });


  const [formData, setFormData] = useState({ ...user });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      adresse: {
        ...prevData.adresse,
        [name]: value
      }
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...formData });
    alert('Les informations ont été mises à jour !');
  };

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={8} lg={6} className="mx-auto">
          <Card>
            <Card.Header as="h5">Profil de l'utilisateur</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col sm={4}><strong>Nom :</strong></Col>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Nom"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={4}><strong>Prénom :</strong></Col>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Prénom"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={4}><strong>Email :</strong></Col>
                  <Col sm={8}>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={4}><strong>Téléphone :</strong></Col>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="Téléphone"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={4}><strong>Adresse :</strong></Col>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      name="rue"
                      value={formData.adresse.rue}
                      onChange={handleAddressChange}
                      placeholder="Rue"
                    />
                    <Form.Control
                      type="text"
                      name="codePostal"
                      value={formData.adresse.codePostal}
                      onChange={handleAddressChange}
                      placeholder="Code Postal"
                      className="mt-2"
                    />
                    <Form.Control
                      type="text"
                      name="ville"
                      value={formData.adresse.ville}
                      onChange={handleAddressChange}
                      placeholder="Ville"
                      className="mt-2"
                    />
                    <Form.Control
                      type="text"
                      name="pays"
                      value={formData.adresse.pays}
                      onChange={handleAddressChange}
                      placeholder="Pays"
                      className="mt-2"
                    />
                  </Col>
                </Row>
                <div className='text-center'>
                  <Button variant="outline-dark" className='' type="submit">
                    Mettre à jour
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
