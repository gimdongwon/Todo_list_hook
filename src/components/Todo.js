import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

// Components
import TodoList from './TodoList';

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [nowText, setNowText] = useState('');
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    const todoList = localStorage.getItem('todoList');
    setTodoList(
      todoList !== null
        ? JSON.parse(todoList).map((t) => ({
            text: t.text,
            is_select: false,
            is_checked: t.is_checked,
          }))
        : []
    );
  }, []);

  const saveLocalStorage = useCallback(() => {
    localStorage.setItem(
      'todoList',
      JSON.stringify(
        todoList.map((t) => {
          return { text: t.text, is_checked: t.is_checked };
        })
      )
    );
  }, [todoList]);

  useEffect(() => {
    saveLocalStorage();
  }, [saveLocalStorage]);

  // 입력 후 엔터
  const handleInputKeyPress = ({ target, target: { value }, key }) => {
    if (key === 'Enter') {
      if (!value) return;
      const list =
        updateId === null
          ? todoList.concat({
              text: value,
              is_select: false,
              is_checked: false,
            })
          : todoList.map((t, i) => ({
              text: i === updateId ? nowText : t.text,
              is_select: false,
              is_checked: t.is_checked,
            }));
      setTodoList(list);
      setNowText('');
      setUpdateId(null);
    }
  };

  // 입력 시 nowText 변경
  const updateNowText = ({ target: { value } }) => {
    setNowText(value);
  };

  // 아이템 클릭 -> 해당 아이템 수정/삭제 버튼 생성
  const handleSetControlButtons = (id) => {
    setTodoList(todoList.map((t, i) => ({ ...t, is_select: i === id })));
  };

  // 수정버튼 클릭 -> input에 해당 값 넣기
  const handleClickEdit = (id) => {
    setNowText(todoList[id].text);
    setUpdateId(id);
  };

  // 수정 취소
  const handleCancelEdit = () => {
    setNowText('');
    setUpdateId(null);
  };

  // 삭제버튼 클릭 -> 값 삭제
  const handleClickRemove = (id) => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    setTodoList(todoList.filter((t, i) => i !== id));
    setNowText(id === updateId ? '' : nowText);
    setUpdateId(id === updateId ? null : updateId);
  };

  // 아이템 체크 박스 클릭
  const handleCheckBox = (id) => {
    setTodoList(
      todoList.map((t, i) => ({
        text: t.text,
        is_select: i === id ? true : false,
        is_checked: i === id ? !t.is_checked : t.is_checked,
      }))
    );
  };

  return (
    <Container>
      {updateId !== null && (
        <UpdateGuide>
          <span>{updateId + 1}번 수정중</span>
          <button onClick={handleCancelEdit}>X</button>
        </UpdateGuide>
      )}
      <Input
        type="text"
        placeholder="오늘의 할 일 기록"
        value={nowText}
        onChange={updateNowText}
        onKeyPress={handleInputKeyPress}
      />
      <TodoList
        list={todoList}
        setButton={handleSetControlButtons}
        updateItem={handleClickEdit}
        removeItem={handleClickRemove}
        handleCheckBox={handleCheckBox}
      />
    </Container>
  );
}

export default Todo;

// styled-components
const Container = styled.div`
  margin-top: 44px;
  text-align: center;
`;

const UpdateGuide = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  span {
    padding: 7px 10px;
    display: block;
    width: 70%;
    text-align: left;
    background: #fe9601;
  }

  button {
    width: 8%;
    color: #fff;
    font-size: 1.1em;
    border: none;
    background: #fe9601;
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 7px 10px;
  width: 80%;
  height: 33px;
  outline: none;
  color: #fff;
  font-size: 22px;
  border: 1px solid #f2f2f2;
  border-radius: 11px;
  background: transparent;
  &::placeholder {
    color: #f2f2f2;
  }
`;
