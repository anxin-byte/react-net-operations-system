import * as React from 'react'
import {Link} from "react-router-dom";
import { Row, Col } from 'antd/lib'
function LoginRegister(){
    return (
        <>
            <Link to='/layout'>layout</Link>
            <Row className="grid-row">
                <Col span="12" className="grid-col">
                    haha
                </Col>
                <Col span="12" className="grid-col">
                    haha222
                </Col>
            </Row>
            <Row className="grid-row">
                <Col span="12" className="grid-col">
                    haha
                </Col>
                <Col span="6" offset="6" className="grid-col">
                    haha222
                </Col>
            </Row>
        </>
    )
}
export default LoginRegister