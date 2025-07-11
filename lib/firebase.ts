// Import các module Firebase cần dùng
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Cấu hình Firebase - thay thông tin bằng dự án của bạn nếu cần
const firebaseConfig = {
  apiKey: "AIzaSyDxFiV1pZ_0RkXXXXXXXXXXXXXXXXXXX",
  authDomain: "shop-acc-roblox.firebaseapp.com",
  projectId: "shop-acc-roblox",
  storageBucket: "shop-acc-roblox.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:xxxxxxxxxxxxxxxxxx",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Xuất các dịch vụ cần dùng
export const auth = getAuth(app);
export const db = getFirestore(app);
