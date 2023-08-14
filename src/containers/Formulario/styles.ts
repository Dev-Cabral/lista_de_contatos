import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  color: #666665;
  border-color: #666665;
  font-size: 14x;

  input {
    margin-bottom: 8px;
  }

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }

  input {
    cursor: pointer;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
