import './App.css';
import { Table, Space,Button } from 'antd';
import jsPDF from "jspdf"
// import { Router, Route,}from "react-router"

import {Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import LoginRegister from "./views/LoginRegister";
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_,record )=> (
            <>
                <Button onClick={()=>down(record)} type="primary">Primary Button</Button>
            </>
        ),
    },

];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const down = (record)=>{
        const pdf = new jsPDF("p", "mm", "a4",'JPEG', 0, 0, 100, 50);
        pdf.fromHTML(record.name+'----');
        pdf.save("pdf");
       console.log(record)
}
function App() {
  return (
      <Routes>
          <Route key='/' path="/" element={LoginRegister()}/>
          <Route key="/layout" path="/layout/*" element={Layout()}/>
      </Routes>
  );
}

export default App;
