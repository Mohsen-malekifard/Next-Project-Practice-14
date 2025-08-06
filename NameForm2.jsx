import {useState} from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const [isClicked , setIsClicked] = useState(false);
  function handlerSubmit(e) {
    e.preventDefault;
  }
  return (
    <form onSubmit = {handlerSubmit} >
      <input onChange = {(e) => setName(e.target.value)} />
      <button onClick = {setIsClicked(true)} type = "Submit" >Submit</button>
    </form>
    
  )
    
}
