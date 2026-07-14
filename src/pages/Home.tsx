import { useNavigate } from "react-router-dom";

// TODO1: กำหนด Type สำหรับ prop 'name'
// ประกาศว่า Home รับ props อะไรบ้าง และ type เป็นอะไร
interface HomeProps {
  name: string; // ชื่อผู้ใช้ต้องเป็นข้อความ
}

// ใส่ HomeProps ให้ props เพื่อให้ TypeScript ตรวจ type ตอนส่งค่าเข้ามา
const Home = ({ name }: HomeProps) => {
  // useNavigate = hook สำหรับเปลี่ยนหน้าโดยไม่ต้องใช้ <Link>
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome, {name}!</h1>
      <button
        // กดแล้วไปหน้า /users
        onClick={() => navigate("/users")}
        className="px-4 py-2 bg-blue-500  rounded hover:bg-blue-600 transition"
      >
        Go to Users List
      </button>
    </div>
  );
};

export default Home;
