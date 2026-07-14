import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import หน้าต่างๆ ที่จะเอาไปใส่ใน Route
import Home from "./pages/Home";
import UsersList from "./pages/UserList";

function App() {
  return (
    // Router = ครอบทั้งแอป เพื่อให้เปลี่ยนหน้าได้
    <Router>
      {/* Routes = กลุ่มเส้นทางทั้งหมดของแอป */}
      <Routes>
        {/* TODO3: เพิ่ม Route ไป Home ตรงนี้
            path="/" = หน้าแรก
            element = แสดง component Home และส่ง prop name ตาม type ที่ประกาศไว้ */}
        <Route path="/" element={<Home name="Atkae" />} />

        {/* TODO4: เพิ่ม Route ไป UsersList ตรงนี้
            path="/users" = หน้ารายชื่อผู้ใช้
            element = แสดง component UsersList */}
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
