// import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const Csc = () => {
  // const [mydata, setmyData] = useState([]);
  // const [getcity, setgetCity] = useState([]);

  return (
    <Container>
      <Form.Select aria-label="Default select example" size="lg">
        <option>Select Country</option>
      </Form.Select>
      <Form.Select aria-label="Default select example" size="lg">
        <option>Select city</option>
      </Form.Select>
    </Container>
  );
};

export default Csc;
