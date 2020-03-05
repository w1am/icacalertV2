import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = styled.tr`
  background-color: #F4F4F4;
`

export const HeaderFonts = styled.th`
  color: #C0C0C0;
  padding: 18px 30px;
  font-size: 16px;
  font-weight: 700;
`

export const Date = styled.p`
  margin: 0px;
`

export const City = styled.p`
  margin: 0px;
  color: #444444;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    color: #666666;
    text-decoration: underline;
  }
`

// here

export const FaTrashIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: #c83c32;
  padding: 0px 10px;
  &:hover {
    color: #873632;
    cursor: pointer;
  }
`;

export const FaEyeIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: #4ca855;
  padding: 0px 10px;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;

export const FaMapIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: #2d46b9;
  padding: 0px 10px;
  &:hover {
    color: #1f3368;
    cursor: pointer;
  }
`;

export const FaElipsisIcon = styled(FontAwesomeIcon)`
  color: #444449;
  position: relative;
  padding: 10px 20px 0px 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const InfoItem = styled.div`
  margin: 30px 0px;
`;

export const InfoContent = styled.p`
  color: #636363;
  display: table;
`;

export const Bold = styled.span`
  font-weight: 800;
  color: #444444;
`;

export const ListItem = styled.div`
  display: inline-block;
  :last-child {
    float: right;
  }
`;

export const MenuItem = styled.li`
  padding: 15px;
  &:hover {
    background-color: #e8e8e8;
    cursor: pointer;
  }
`;

export const Note = styled.p`
  color: #586069;
  font-size: 14px;
  text-align: center;
  padding: 20px;
`;

export const View = styled.button`
  display: inline;
  width: 70px;
  margin: 0px;
  padding: 10px;
`;

export const Confirm = styled.button`
  display: inline;
  width: 70px;
  margin-right: 10px;
  padding: 5px;
  background-color: #c83c32;
  border: 1px solid #c83c32;
  &:hover {
    background-color: #873632;
    border: 1px solid #873632;
  }
`;

export const Reject = styled.button`
  display: inline;
  width: 70px;
  margin-left: 10px;
  padding: 5px;
`;