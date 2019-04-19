import styled, { css } from "styled-components";


const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  flex: 1;
  height: 42px;
  color: #8d8d8d;
  border-radius: 3px;
  background-color: white;
  border: solid 1px #dedede;
  padding: 0 0 0 12px;
  outline: none;

  &::placeholder {
    color: #c2c2c2;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #eee;
  }

  ${props =>
    props.requiredError &&
    css`
      border-color: #dd6c6c;
    `};
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

const Segment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    flex: 1;
  }
`;

const Select = styled.select`
  flex: 1;
  line-height: 42px;
  color: #8d8d8d;
  border-radius: 3px;
  background-color: white;
  border: solid 1px #dedede;
  margin: 0 12px 0 0;
  outline: none;

  ${props =>
    props.requiredError &&
    css`
      border-color: #dd6c6c;
    `};
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  color: #fff;
  border: 0;
  border-radius: 3px;
  background: linear-gradient(to right, #15aed8, #44cbef);
  cursor: pointer;
  outline: none;
  &:hover {
    background: #44cbef;
  }
`;

export { Container, Input, Columns, Segment, Select, Button };
