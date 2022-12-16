import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './Actions';
import styled from 'styled-components';

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 130px;
  justify-content: space-between;
`;

const Btn = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  color: #292c33;
  font-size: 24px;
  background-color: #82d7f7;
  cursor: pointer;
`;

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const plusNum = () => {
    dispatch(increase());
  };

  const minusNum = () => {
    dispatch(decrease());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Count: ${state}`}</p>
        <BtnWrap>
          <Btn onClick={plusNum}>+</Btn>
          <Btn onClick={minusNum}>-</Btn>
        </BtnWrap>
      </header>
    </div>
  );
}

export default App;
