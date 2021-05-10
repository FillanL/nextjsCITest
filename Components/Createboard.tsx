import { ReactElement } from "react";
import styled from "styled-components";
const Createboard = ():ReactElement => {
  return (
    <Form>
      <input type="text" />
      <input type="text" />
    </Form>
  );
};

export default Createboard;

const Form = styled.form``;