import { useState, type ChangeEvent, type FormEvent } from "react";

const TodoApp = () => {
  // TODO1: กำหนด Type ให้ state
  // string[] = รายการ todo เป็น array ของข้อความ
  // "" = input เป็น string และมีค่าเริ่มต้นว่าง
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  // TODO2: ใส่ type ให้ event
  // ChangeEvent<HTMLInputElement> = event จาก <input>
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // อ่านค่าที่พิมพ์ในช่อง input
  };

  // TODO3: ใส่ type ให้ event
  // FormEvent<HTMLFormElement> = event จาก <form> ตอน submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // กันไม่ให้หน้า refresh
    setTodos([...todos, input]); // เพิ่ม todo ใหม่ต่อท้าย list
    setInput(""); // เคลียร์ช่อง input หลังเพิ่มแล้ว
  };

  return (
    <div>
      <h1>Todo App ✅</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {/* วนแสดง todo แต่ละตัว */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

// TODO4: Render ออกมาใน App.tsx
export default TodoApp;
