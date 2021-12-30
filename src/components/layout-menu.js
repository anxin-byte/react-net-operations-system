import * as React from 'react';
import {Layout, Menu} from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import {layoutChildren} from "../router";
import {Link,Routes,Route} from "react-router-dom";
// import PrivateRouter from "../utils/private-router"
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const main_route = layoutChildren.map(item=>item.children)
console.log(main_route)
function Menus(){
   const  handleClick = e => {
        console.log('click ', e);
    };
        return (
            <>
            <Sider>
                <Menu onClick={(e)=>handleClick(e)} selectedKeys={['1']}>
                    {
                        layoutChildren.map(item =>
                            <SubMenu key={item.path} icon={<SettingOutlined />} title={item.meta.title}  >
                            {
                                item.children.map(v=>
                                    <Menu.Item key={v.path}>
                                        <Link to={v.path}>  {v.meta.title}</Link>
                                    </Menu.Item>
                                )
                            }
                            </SubMenu>
                        )
                    }
                </Menu>
            </Sider>
            <Content>
                <Routes>
                    {
                        main_route.map(item => <Route key={item.path} path={item.path} element={item.component}/>)
                    }
                </Routes>
            </Content>
            </>
        );
}
export default Menus
