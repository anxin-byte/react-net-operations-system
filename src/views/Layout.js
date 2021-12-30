import * as React from 'react';
import Menu from "../components/layout-menu";
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
function Layouts(){
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Menu/>
            </Layout>
        </Layout>
    )
}
export default Layouts