// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
// import First from './Components/First';
// import Userefexample from './Components/Userefexample';
import UseMemoExample from './Components/UseMemoExample';
import UseReducer from './Components/UseReducer';
import CustomHooks from './Components/CustomHooks';
// import Second from './Components/Second';
// import Third from './Components/Third';

function App() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(()=>{
    alert("Button is clicked");
  },[num])
  return ( 
  <div className="App"> 
  <div>
  {num}
  <br></br>
  <button onClick={(()=>
  {
    setNum(num+1);
  // },()=>
  // {
  //   alert("Button is clicked");
  })
  }>Click</button>
  </div>
  <div>
  {nums}
  <br></br>
  <button onClick={(()=>
  {
    setNums(nums+1);
  // },()=>
  // {
  //   alert("Button is clicked");
  })
  }>Click1</button>
  </div>
    {/* <First/> */}
    {/* <Userefexample/> */}
    
    {/* <UseMemoExample/>
    <UseReducer/> */}
    <CustomHooks/>
    
  </div>
  );
}

export default App;
