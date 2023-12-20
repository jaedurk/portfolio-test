import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Calculator from "./chapter_12/Calculator";

// import Accommodate from "./chapter_07/accommodate";
// import ConfirmButton from "./chapter_08/confirmbutton";
// import Clock from "./chapter_04/Clock";

// const root = ReactDOM.createRoot(document.getElementById('root'));

// import CommentList from "./chapter_05/CommentList";
// import NotificationList from "./chapter_06/NotificationList";
// import LandingPage from "./chapter_09/LandingPage";
// import AttendanceBook from "./chapter_10/AttendanceBook";
// import Signup from "./chapter_11/Signup";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Calculator />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
