import React, { useEffect, useRef } from "react";

function InterMarksSheet() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();

  let engInputRef = useRef();
  let sanInputRef = useRef();
  let mathsaInputRef = useRef();
  let mathsbInputRef = useRef();
  let phyInputRef = useRef();
  let cheInputRef = useRef();
  let resultParaRef = useRef();
  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let englishResultRef = useRef();
  let sanskritResultRef = useRef();
  let mathsaResultRef = useRef();
  let mathsbResultRef = useRef();
  let physicsResultRef = useRef();
  let chemistryResultRef = useRef();

  let calculateResult = () => {
    console.log("inside calculateResult");
    let firstName = firstNameInputRef.current.value;
    let lastName = lastNameInputRef.current.value;
    let engMarks = Number(engInputRef.current.value);
    let sanMarks = Number(sanInputRef.current.value);
    let mathsaMarks = Number(mathsaInputRef.current.value);
    let mathsbMarks = Number(mathsbInputRef.current.value);
    let phyMarks = Number(phyInputRef.current.value);
    let cheMarks = Number(cheInputRef.current.value);
    let totalMarks =
      engMarks +
      sanMarks +
      mathsaMarks +
      mathsbMarks +
      phyMarks +
      cheMarks;

                let result;

                if(engMarks < 35 || sanMarks < 35 || mathsaMarks < 35 || mathsbMarks < 35 || phyMarks < 35 || cheMarks< 35){
                    result = "Failed";
                }else{
                    result = "Passed";
                }
                
                
                alert(` ${firstName} ${lastName} Total Marks are ${totalMarks}`);
                resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} in tenth and got total marks of ${totalMarks}`;
                console.log(totalMarks);
};

  useEffect(() => {
    alert("Welcome to our Appication");
  }, []);
  let firstNameOnFocus = ()=>{
    console.log("FirstName-onFocus");
                firstNameInputRef.current.style.backgroundColor = "orange";
                firstNameInputRef.current.style.color = "black";
};
let firstNameOnChange = ()=>{
    console.log("FirstName-onChange");
};
let firstNameOnBlur = ()=>{
    console.log("FirstName-onBlur");
                firstNameInputRef.current.style.backgroundColor = "";
                firstNameInputRef.current.style.color = "black";
};

let lastNameOnFocus = ()=>{
    console.log("LastName-onFocus");
                lastNameInputRef.current.style.backgroundColor = "orange";
                lastNameInputRef.current.style.color = "black";
};
let lastNameOnChange = ()=>{
    console.log("LastName-onChange");
};
let lastNameOnBlur = ()=>{
    console.log("LastName-onBlur");
    lastNameInputRef.current.style.backgroundColor = "";
    lastNameInputRef.current.style.color = "black";
};
let englishOnFocus = ()=>{
  console.log("English-onFocus");
  engInputRef.current.style.backgroundColor = "green";
  engInputRef.current.style.color = "white";
};
let englishOnChange = ()=>{
  if(engInputRef.current.value >= 0 && engInputRef.current.value <= 100){
      if(engInputRef.current.value >=35){
          englishResultRef.current.innerHTML = "Pass";
          englishResultRef.current.style.backgroundColor = "green";
          englishResultRef.current.style.color = "white";
      }else{
          englishResultRef.current.innerHTML = "Fail";
          englishResultRef.current.style.backgroundColor = "red";
          englishResultRef.current.style.color = "white";
      }

     }else{
      englishResultRef.current.innerHTML = "Invalid";
      englishResultRef.current.style.backgroundColor = "black";
      englishResultRef.current.style.color = "white";
     }
};
let englishOnBlur =() => {
  console.log("English-onBlur");
              engInputRef.current.style.backgroundColor = "";
              engInputRef.current.style.color = "black";
};
let sanskritOnFocus = ()=>{
console.log("Sanskrit-onFocus");
              sanInputRef.current.style.backgroundColor = "orange";
              sanInputRef.current.style.color = "white";
};
let sanskritOnChange = ()=>{
if(sanInputRef.current.value >= 0 && sanInputRef.current.value <= 100){
if(sanInputRef.current.value >=35){
  sanskritResultRef.current.innerHTML = "Pass";
  sanskritResultRef.current.style.backgroundColor = "green";
  sanskritResultRef.current.style.color = "white";
}else{
  sanskritResultRef.current.innerHTML = "Fail";
  sanskritResultRef.current.style.backgroundColor = "red";
  sanskritResultRef.current.style.color = "white";
}

}else{
  sanskritResultRef.current.innerHTML = "Invalid";
  sanskritResultRef.current.style.backgroundColor = "black";
  sanskritResultRef.current.style.color = "white";
}
};
let sanskritOnBlur =()=>{
console.log("Sanskrit-onBlur");
              sanInputRef.current.style.backgroundColor = "";
              sanInputRef.current.style.color = "black";
};
let mathsaOnFocus =()=>{
console.log("MathsA-onFocus");
              mathsaInputRef.current.style.backgroundColor = "orange";
              mathsaInputRef.current.style.color = "white";
};
let mathsaOnChange =()=>{
if(mathsaInputRef.current.value >= 0 && mathsaInputRef.current.value <= 100){
  if(mathsaInputRef.current.value >=35){
      mathsaResultRef.current.innerHTML = "Pass";
      mathsaResultRef.current.style.backgroundColor = "green";
      mathsaResultRef.current.style.color = "white";
  }else{
    mathsaResultRef.current.innerHTML = "Fail";
    mathsaResultRef.current.style.backgroundColor = "red";
    mathsaResultRef.current.style.color = "white";
  }

 }else{
  mathsaResultRef.current.innerHTML = "Invalid";
  mathsaResultRef.current.style.backgroundColor = "black";
  mathsaResultRef.current.style.color = "white";
 }
};
let mathsaOnBlur =()=>{
console.log("MathsA-onBlur");
              mathsaInputRef.current.style.backgroundColor = "";
              mathsaInputRef.current.style.color = "black";
};
let mathsbOnFocus = ()=>{
console.log("MathsB-onFocus");
              mathsbInputRef.current.style.backgroundColor = "orange";
              mathsbInputRef.current.style.color = "white";
};
let mathsbOnChange = ()=>{
if(mathsbInputRef.current.value >= 0 && mathsbInputRef.current.value <= 100){
  if(mathsbInputRef.current.value >=35){
      mathsbResultRef.current.innerHTML = "Pass";
      mathsbResultRef.current.style.backgroundColor = "green";
      mathsbResultRef.current.style.color = "white";
  }else{
    mathsbResultRef.current.innerHTML = "Fail";
    mathsbResultRef.current.style.backgroundColor = "red";
    mathsbResultRef.current.style.color = "white";
  }

 }else{
  mathsbResultRef.current.innerHTML = "Invalid";
  mathsbResultRef.current.style.backgroundColor = "black";
  mathsbResultRef.current.style.color = "white";
 }
};
let mathsbOnBlur = ()=>{
console.log("Maths-onBlur");
              mathsbInputRef.current.style.backgroundColor = "";
              mathsbInputRef.current.style.color = "black";
};
let physicsOnFocus =()=>{
console.log("Physics-onFocus");
              phyInputRef.current.style.backgroundColor = "orange";
              phyInputRef.current.style.color = "black";
};
let physicsOnChange =()=>{
if(phyInputRef.current.value >= 0 && phyInputRef.current.value <= 100){
  if(phyInputRef.current.value >=35){
      physicsResultRef.current.innerHTML = "Pass";
      physicsResultRef.current.style.backgroundColor = "green";
      physicsResultRef.current.style.color = "white";
  }else{
    physicsResultRef.current.innerHTML = "Fail";
    physicsResultRef.current.style.backgroundColor = "red";
    physicsResultRef.current.style.color = "white";
  }

 }else{
  physicsResultRef.current.innerHTML = "Invalid";
  physicsResultRef.current.style.backgroundColor = "black";
  physicsResultRef.current.style.color = "white";
 }
};
let physicsOnBlur =()=>{
console.log("Physics-onBlur");
              phyInputRef.current.style.backgroundColor = "";
              phyInputRef.current.style.color = "black";
};

let chemistryOnFocus = ()=>{
console.log("Chemistry-onFocus");
cheInputRef.current.style.backgroundColor = "orange";
cheInputRef.current.style.color = "white";
};
let chemistryOnChange = ()=>{
if(cheInputRef.current.value >= 0 && cheInputRef.current.value <= 100){
  if(cheInputRef.current.value >=35){
      chemistryResultRef.current.innerHTML = "Pass";
      chemistryResultRef.current.style.backgroundColor = "green";
      chemistryResultRef.current.style.color = "white";
  }else{
    chemistryResultRef.current.innerHTML = "Fail";
    chemistryResultRef.current.style.backgroundColor = "red";
    chemistryResultRef.current.style.color = "white";
  }

 }else{
  chemistryResultRef.current.innerHTML = "Invalid";
  chemistryResultRef.current.style.backgroundColor = "black";
  chemistryResultRef.current.style.color = "white";
 }
};
let chemistryOnBlur = ()=>{
console.log("Chemistry-onBlur");
cheInputRef.current.style.backgroundColor = "";
cheInputRef.current.style.color = "black";
};

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" ref={firstNameInputRef} onFocus={() => {
              
              firstNameOnFocus();
            }}
            onChange={() => {
              firstNameOnChange();
            }}
            onBlur={() => {
              firstNameOnBlur();
            }}></input>
            <span ref={firstNameResultRef}></span>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" ref={lastNameInputRef} onFocus={() => {
              
              lastNameOnFocus();
            }}
            onChange={() => {
              lastNameOnChange();
            }}
            onBlur={() => {
              lastNameOnBlur();
            }}></input>
            <span ref={lastNameResultRef}></span>
        </div>
        <div>
          <label>Engish</label>
          <input
            type="number"
            ref={engInputRef}
            onFocus={() => {
              
              englishOnFocus();
            }}
            onChange={() => {
              englishOnChange();
            }}
            onBlur={() => {
              englishOnBlur();
            }}
          ></input>
          <span ref={englishResultRef}></span>
        </div>
        <div>
          <label>Sanskrit</label>
          <input type="number" ref={sanInputRef} onFocus={() => {
              
              sanskritOnFocus();
            }}
            onChange={() => {
              sanskritOnChange();
            }}
            onBlur={() => {
              sanskritOnBlur();
            }}></input>
            <span ref={sanskritResultRef}></span>
        </div>
        <div>
          <label>Maths-A</label>
          <input type="number" ref={mathsaInputRef} onFocus={() => {
             
              mathsaOnFocus();
            }}
            onChange={() => {
              mathsaOnChange();
            }}
            onBlur={() => {
              mathsaOnBlur();
            }}></input>
            <span ref={mathsaResultRef}></span>
        </div>
        <div>
          <label>Maths-B</label>
          <input type="number" ref={mathsbInputRef} onFocus={() => {
              
              mathsbOnFocus();
            }}
            onChange={() => {
              mathsbOnChange();
            }}
            onBlur={() => {
              mathsbOnBlur();
            }}></input>
            <span ref={mathsbResultRef}></span>
        </div>
        <div>
          <label>Physics</label>
          <input type="number" ref={phyInputRef} onFocus={() => {
              
              physicsOnFocus();
            }}
            onChange={() => {
              physicsOnChange();
            }}
            onBlur={() => {
              physicsOnBlur();
            }}></input>
            <span ref={physicsResultRef}></span>
        </div>
        <div>
          <label>Chemistry</label>
          <input type="number" ref={cheInputRef} onFocus={() => {
              
              chemistryOnFocus();
            }}
            onChange={() => {
              chemistryOnChange();
            }}
            onBlur={() => {
              chemistryOnBlur();
            }}></input>
            <span ref={chemistryResultRef}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              calculateResult();
            }}
          >
            Calculate Result
          </button>
          <button onClick={() => {}}>Scope of Variables</button>
        </div>
        <p ref={resultParaRef}>Please Enter values and Click Calculate</p>
      </form>
    </div>
  );
}

export default InterMarksSheet;
