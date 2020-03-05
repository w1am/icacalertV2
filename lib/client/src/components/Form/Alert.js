import styled from 'styled-components';

export const CheckBox = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  display: inline-block;
  @media (max-width: 850px) {
    margin: 10px 0px;
  }
`

export const Check = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

export const CheckBoxList = styled.li`
  display: inline;
  cursor: pointer;
  padding: 0px 10px;
  &:first-child {
    padding-left: 0px;
  }
`

export const Note = styled.p`
  font-size: 14px;
  @media (max-width: 850px) {
    font-size: 12px;
  }
`