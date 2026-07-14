// Exercise1.tsx
import { useState } from "react";

// TODO1: ประกาศ Type ด้วย type หรือ interface
// กำหนดว่า Greeting รับ props อะไรบ้าง และแต่ละตัวเป็น type อะไร
interface GreetingProps {
  name: string; // ชื่อต้องเป็นข้อความ
  age: number;  // อายุต้องเป็นตัวเลข
}

// TODO2: กำหนด Type ให้ props
// บอก TypeScript ว่า props ของ component นี้คือ GreetingProps
const Greeting = (props: GreetingProps) => {
  // TODO3: กำหนด Type ให้ useState
  // <number> = state นี้เก็บตัวเลขเท่านั้น, ค่าเริ่มต้นคือ 0
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>
        Hello {props.name}, you are {props.age} years old 👋
      </h1>
      <p>You clicked {count} times</p>
      {/* คลิกแล้วเพิ่ม count ทีละ 1 */}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

// TODO4 : Render ออกมาใน App.tsx
export default Greeting;
