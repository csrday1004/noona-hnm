import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../redux/actions/authAction";
import { useState } from "react";

const Login = ({page}) => {

  console.log("login.js", page)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  return (
    <div className="login-page">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(authAction.login(id,pw))//만들어둔 미들웨어의 함수로 보냄
          if(page){
            navigate(page)
          }else{
            navigate('/')
          }
        }}
      >
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            아이디(이메일)
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="email" placeholder="이메일 주소를 입력하세요" onChange={(e)=>{setId(e.target.value)}}/>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={3}>
            비밀번호
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="password" placeholder="비밀번호를 입력하세요" onChange={(e)=>{setPw(e.target.value)}}/>
          </Col>
        </Form.Group>

      

        <Form.Group as={Row} className="mt-4">
          <Col sm={{ span: 10, offset: 3 }}>
            <Button variant="danger" type="submit">로그인</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
