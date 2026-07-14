import "./App.css";
// 1) import component Greeting เข้ามาใช้งาน
import Greeting from "./Greeting";

function App() {
  // TODO4 : Render ออกมาใน App.tsx
  // 2) เรียกใช้ <Greeting /> แล้วส่ง props ตาม type ที่ประกาศใน Greeting.tsx
  //    - name ต้องเป็น string
  //    - age ต้องเป็น number (ไม่ใส่ quotes)
  return <Greeting name="Atkae" age={25} />;
}

export default App;
