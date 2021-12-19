# Bitodo

- react to-do-list application

## 실행

[github](https://github.com/gimdongwon/Todo_list_hook)
[page_deploy]

## 주요기능

1. 현재 시간 조회
2. 할일 조회
3. 할일 등록
4. 할일 수정
5. 할일 삭제

## 숙제

1. class 컴포넌트를 function 컴포넌트로 변경.
2. 한일은 체크 추가.

## 고민했던 점.

체크박스를 추가해야하는 도중 각 todoItem의 체크 유무의 state를 저장해야하는 위치에 대해서 고민이 되었다. 처음에는 최하단 TodoRow에 생성해서 각자의 state를 별개로 생성하였으나 새로고침하거나 다른 item을 클릭했다 돌아올 시 기존에 클릭하였어도 다시 false값으로 초기화되는 이슈가 있어 고민 끝에 localStorage에 text를 담을 시 checked의 state값도 담는 방식을 택하였다.
