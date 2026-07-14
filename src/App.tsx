// 1) import component TodoApp เข้ามาใช้งาน
import TodoApp from "./TodoApp";

function App() {
  // TODO4: Render ออกมาใน App.tsx
  // 2) เรียกใช้ <TodoApp /> เพื่อแสดงหน้า Todo ทั้งชุด
  //    (ไม่มี props ต้องส่ง เพราะ TodoApp จัดการ state เอง)
  return <TodoApp />;
}

export default App;
