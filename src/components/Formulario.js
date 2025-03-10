import React, { useState } from 'react';
import { Alert, Button, Form, Col, Row } from 'react-bootstrap';

const Formulario = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  // Función para calcular la fórmula cuadrática
  const calcularFormula = (e) => {
    e.preventDefault();

    if (!a || !b || !c) {
      setError('Todos los campos deben ser llenados');
      setResultado(null);
      return;
    }

    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
      setError('No hay soluciones reales');
      setResultado(null);
    } else {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      setResultado(`Las soluciones son: x1 = ${x1} y x2 = ${x2}`);
      setError('');
    }
  };

  // Función para limpiar los campos y el estado
  const limpiarFormulario = () => {
    setA('');
    setB('');
    setC('');
    setResultado(null);
    setError('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Calculadora de Fórmula Cuadrática</h2>
      
      {/* Mostrar alertas si hay error o resultado */}
      {error && <Alert variant="danger">{error}</Alert>}
      {resultado && <Alert variant="success">{resultado}</Alert>}

      <Form onSubmit={calcularFormula}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="a">
            <Form.Label>a</Form.Label>
            <Form.Control
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="Ingrese valor de a"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="b">
            <Form.Label>b</Form.Label>
            <Form.Control
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="Ingrese valor de b"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="c">
            <Form.Label>c</Form.Label>
            <Form.Control
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
              placeholder="Ingrese valor de c"
            />
          </Form.Group>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit" className="mr-2">
            Calcular
          </Button>
          {/* Botón de limpiar */}
          <Button variant="secondary" onClick={limpiarFormulario}>
            Limpiar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
