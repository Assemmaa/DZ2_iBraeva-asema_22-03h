import Modal from './components/Modal/Modal';
import { useState } from 'react';
import classes from './App.module.css'
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import List from "./components/List/List";
import Input from "./components/Input/Input";
function App() {


  const [ isShow, setIsShow ]  = useState(false)

  const handleShow = () => {
    setIsShow(!isShow)
    console.log(isShow, 'isSHow');
  }



  return (
    <>
    <Container>
      <div className={classes.wrapper}>
      { isShow && <Modal handleShow={handleShow}  /> }
      <Button handleClick={handleShow}><p>Добавить</p></Button>
        <Input />
      </div>
    </Container>
      <List />
    </>
  );
}

export default App;
