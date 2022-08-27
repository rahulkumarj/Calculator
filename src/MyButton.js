import React, { useState } from "react";

const MyButton = () => {
  const [result, setResult] = useState("");
  // const [state,setstate]=useState("");
  // const [show,setShow]=useState(true);
  const oprators = {
    "/": "",
    "*": "",
    "+": "",
    "-": "",
    ".": "",
  };
  const numdigit = {
    "/": "",
    "*": "",
    "+": "",
    "-": "",
    ".": "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  };

  const handleOperators = (e) => {
    let last = result.slice(-1);

    console.log("last", last);
    // let str = result.slice(-1);
    if (!isNaN(last)) {
      if (last in oprators) {
        setResult(result + e.target.name);
      } else {
        const _result = eval(result);
        setResult(_result + e.target.name);
      }
    } else {
      console.log("last", last, "this is event name", e.target.name);
      result.replace(last, e.target.name);
      // console.log(changeop, "this is changeop");
      // let lastop = changeop.slice(-1);

      setResult(result.slice(0, result.length - 1) + e.target.name);
    }
  };

  const handlevaluate = (e) => {
    setResult(eval(result).toString());
  };

  const handleOnclick = (e) => {
    // const hasAnyOperator = !Number(result) && e.target.name in oprators;
    // if (hasAnyOperator) {
    // setResult(_result + e.target.name);
    // return;
    // }
    // let last = result.slice(-1);

    // let str = result.slice(-1);
    // if (!isNaN(last)) {
    //   if (last in oprators) {
    //     const _result = eval(result);
    //     setResult(_result + e.target.name);
    //   } else {
    //     setResult(result + e.target.name);
    //   }
    // } else {
    //   result.replace(last, e.target.name);
    // }
    // // else
    // if (hasAnyOperator && e.target.name === result.slice(-1)) {
    //   let str = result.slice(0, result.length(-1));
    //   console.log(str, "str");
    //   setResult(str + e.target.name);
    //   return;
    // }
    // setstate(state =>  state.splice())
    // const resultString = result.toString();
    // const newResult = resultString.slice(-1);
    // console.log(e.target.name, "result");

    // if (e.target.name in oprators && newResult in oprators) {
    // setstate(eval(result));
    //  setResult(false);
    // setResult(result.slice(0,result.length-1));

    // console.log("is in operators")
    //   switch(e.target.name)
    //   {
    //     case '+':
    //      console.log('myeval');
    //     break;
    //     case '-':console.log('this is minus operator')
    //      break;
    //     case '*':console.log('this is multiplication operator')
    //      break;
    //     case '/':console.log('this is division operator')
    //      break;
    //   }

    // return;
    // }
    //the code will not run thereafter
    setResult(result + e.target.name);
  };

  const handleOnchange = (e) => {
    const lastEl = e.target.value[e.target.value.length - 1];
    console.log(lastEl);
    if (!isNaN(lastEl) || lastEl in oprators) {
      setResult((prev) => prev + lastEl);
    }

    // }
    // console.log(result, "result");
    // }
  };
  const handleClear = () => {
    setResult("");
  };

  const handleplace = (e) => {
    setResult(e.target.name);
  };

  const handleBack = () => {
    let newResult = result.slice(0, result.length - 1);
    setResult(newResult);
    console.log(result, "c");
  };

  return (
    <div>
      <input
        className="myinput mx-3 "
        type="text"
        placeholder="0"
        onChange={(e) => handleOnchange(e)}
        value={result}
      />
      <div className="container">
        <button
          name="7"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          7
        </button>
        <button
          name="8"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          8
        </button>
        <button
          name="9"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          9
        </button>
        <button
          name="+"
          className="btn btn-dark border-white"
          onClick={(e) => handleOperators(e)}
        >
          +
        </button>
      </div>

      <div className="container">
        <button
          name="4"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          4
        </button>
        <button
          name="5"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          5
        </button>
        <button
          name="6"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          6
        </button>
        <button
          name="-"
          className="btn btn-dark border-white"
          onClick={(e) => handleOperators(e)}
        >
          -
        </button>
      </div>

      <div className="container">
        <button
          name="1"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          1
        </button>
        <button
          name="2"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          2
        </button>
        <button
          name="3"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          3
        </button>
        <button
          name="*"
          className="btn btn-dark border-white"
          onClick={(e) => handleOperators(e)}
        >
          *
        </button>
      </div>
      <div className="container">
        <button
          id="clear"
          className="btn btn-dark border-white"
          onClick={(e) => handleBack(e)}
        >
          c
        </button>
        <button
          name="0"
          className="btn btn-dark border-white"
          onClick={(e) => handleOnclick(e)}
        >
          0
        </button>
        <button
          name="."
          className="btn btn-dark border-white"
          onClick={(e) => handleOperators(e)}
        >
          .
        </button>
        <button
          name="/"
          className="btn btn-dark border-white "
          onClick={(e) => handleOperators(e)}
        >
          /
        </button>
      </div>
      <button
        className="btn btn-dark border-white highlight ml-3 clear"
        onClick={(e) => handleplace(e)}
      >
        CR
      </button>
      <button
        name="="
        className="btn btn-danger btn-border-white equal"
        onClick={(e) => handlevaluate(e)}
      >
        =
      </button>
      <button
        className="btn btn-primary border-white highlight clear"
        onClick={(e) => handleClear(e)}
      >
        CLEAR
      </button>
    </div>
  );
};

export default MyButton;
