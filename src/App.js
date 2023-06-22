import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
// -1. UI 만들기
// ㄴ 인풋영역 만들기
// ㄴ 할일 목록, 완료 목록
// -2. state 만들어주기
// -3. state를 main에 map 으로 뿌려주고
// -4. 할일이랑 완료된 목록 필터링 해주고
// -5. input 값 할일 목록에 추가 리렌더링
// -ㄴ 타이틀이랑 컨텐츠에 해당하는 useState 함수 만들어주고
// -ㄴ 인풋에 value 값으로 onChange 줘서 저장 버튼을 눌렀을 때 리스트업 될 수 있게
// -6. 고유 아이디 값도 만들어주고 uuid
// -7. 버튼 만들어서 필터링해주고 -> 삭제구현, 완료->할일 할일->완료 기능구현

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "sample title 1",
      contents: "sample content 1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "sample title 1",
      contents: "sample content 1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "sample title 1",
      contents: "sample content 1",
      isDone: true,
    },
    {
      id: uuid(),
      title: "sample title 1",
      contents: "sample content 1",
      isDone: false,
    },
  ]);

  const style = {
    border: "1px solid black",
    margin: "10px",
  };

  return (
    <>
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <main>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newTodos = {
              id: uuid(),
              title,
              contents,
              isDone: false,
            };

            setTodos([...todos, newTodos]);
          }}
        >
          <input
            placeholder="title here"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            placeholder="contents here"
            value={contents}
            onChange={(event) => {
              setContents(event.target.value);
            }}
          />
          <button>저장</button>
        </form>
        <div style={{ color: "red", marginTop: "10px" }}>할일 목록</div>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <div style={style} key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const newTodos = todos.map((i) => {
                      if (i.id === todo.id) {
                        return { ...i, isDone: !i.isDone };
                      } else {
                        return i;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  완료
                </button>
                <button
                  onClick={() => {
                    const delTodos = todos.filter((i) => {
                      return i.id !== todo.id;
                    });

                    setTodos(delTodos);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
        <div style={{ color: "red", marginTop: "10px" }}>완료된 목록</div>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <div style={style} key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const newTodos = todos.map((i) => {
                      if (i.id === todo.id) {
                        return { ...i, isDone: !i.isDone };
                      } else {
                        return i;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  완료 취소
                </button>
                <button
                  onClick={() => {
                    const delTodos = todos.filter((i) => {
                      return i.id !== todo.id;
                    });

                    setTodos(delTodos);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
