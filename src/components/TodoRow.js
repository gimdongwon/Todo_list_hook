import React, { useState } from 'react';
import styled from 'styled-components';

// Icons
import editIcon from '../img/edit.png';
import deleteIcon from '../img/delete.png';

function TodoRow({
  index,
  todo,
  setButton,
  updateItem,
  removeItem,
  handleCheckBox,
}) {
  const changeCheckedState = (idx) => {
    handleCheckBox(idx);
  };
  return (
    <Container>
      <Item>
        <span
          style={{ textDecoration: todo.is_checked ? 'line-through' : 'none' }}
          onClick={() => setButton(index)}
        >{`${index + 1}. ${todo.text}`}</span>
        {todo.is_select ? (
          <ButtonBox>
            <CheckBox
              type="checkbox"
              onClick={() => changeCheckedState(index)}
              checked={todo.is_checked}
              readOnly
            />
            <button className="edit" onClick={() => updateItem(index)} />
            <button className="delete" onClick={() => removeItem(index)} />
          </ButtonBox>
        ) : (
          ''
        )}
      </Item>
    </Container>
  );
}

export default TodoRow;

// styled-components
const Container = styled.div`
  margin: 13px 0;
  padding-bottom: 10px;
  width: 80%;
  text-align: left;
  border-bottom: 1px solid #afafaf;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  font-size: 24px;
  &:hover {
    top: -2px;
  }

  span {
    width: 100%;
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;

  button {
    margin: 0 5px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    filter: invert(100);
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    &.edit {
      background-image: url(${editIcon});
      background-size: 100% 100%;
    }
    &.delete {
      background-image: url(${deleteIcon});
      background-size: 100% 100%;
    }
  }
`;

const CheckBox = styled.input`
  margin: 0 5px;
  width: 20px;
  height: 20px;
`;
