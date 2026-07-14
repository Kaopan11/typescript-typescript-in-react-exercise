import { Link } from "react-router-dom";

// TODO2: กำหนด Type สำหรับ user
// บอกว่า user แต่ละคนมี field อะไรบ้าง และ type เป็นอะไร
interface User {
  id: number; // รหัสผู้ใช้ เป็นตัวเลข
  name: string; // ชื่อผู้ใช้ เป็นข้อความ
}

const UsersList = () => {
  // ใส่ User[] = บอกว่า users เป็น array ของ User
  const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Users List</h1>
      <ul className="list-none p-0">
        {/* วนแต่ละ user แล้วแสดงชื่อ */}
        {users.map((user) => (
          <li key={user.id} className="my-2 text-lg">
            {user.name}
          </li>
        ))}
      </ul>
      {/* Link กลับไปหน้า Home (/) */}
      <Link to="/">
        <button className="mt-6 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default UsersList;
