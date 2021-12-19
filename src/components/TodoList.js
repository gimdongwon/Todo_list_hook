import React from 'react';
import styled from 'styled-components';

// Components
import TodoRow from './TodoRow';

function TodoList({ list, setButton, updateItem, removeItem, handleCheckBox }) {
  return (
    <Container>
      {list.map((item, i) => (
        <TodoRow
          key={i}
          index={i}
          todo={item}
          setButton={setButton}
          updateItem={updateItem}
          removeItem={removeItem}
          handleCheckBox={handleCheckBox}
        />
      ))}
      {list.length < 1 && <span>새로운 일정을 등록해보세요</span>}
    </Container>
  );
}

export default TodoList;

// styled-components
const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
