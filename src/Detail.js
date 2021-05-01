import React, {useEffect, useState} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding:20px;
`;

let 제목 = styled.h4`
  font-size:25px;
  color:${props => props.색상}
`;

function Detail(props){

  
  let history = useHistory();
  let { id } = useParams();
  let [alert, alert변경] = useState(true);
  let [input값, imput값변경] = useState('');

    useEffect( ()=>{

      setTimeout(()=>{ alert변경(false) },2000)
      console.log('안뇽');
      //return function f(){}
    }, 
    [
      //useEffect가 실행될 조건 입력가능, 암것도 없으면 최초 1번만 실행됨.
    ]);

    return(
    <div className="container">
        <박스>
          <제목 className="red">Detail</제목>
        </박스>

        {
          alert === true
          ?(<div className="my_alert">
            <p>재고가 얼마 남지 않았습니다!</p>
            </div>)
          :null
        }

        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[0].content}</p>
            <p>{props.shoes[0].price}</p>
            <Info stock={props.stock}></Info>
            <button className="btn btn-danger" onClick={()=>{ props.stock변경(...stock, ) }}>주문하기</button>  
            <button className="btn btn-danger">뒤로가기</button> 
          </div>
        </div>
  </div> 
    )
  }



  function Info(props){
    return(
      <p>재고 : { props.stock[0] } </p>
    );
  }

  export default Detail;