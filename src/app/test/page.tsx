"use client"
import { useState } from "react"

export default function Test() {
    const [test, settest] = useState("");
    const [test1, settest2] = useState([]);
    function settest3(hikisuu)
         { return (<p>{hikisuu}</p>) }


    function submit() {
      settest2([...test1, test])
      settest("")

    }

    return (
        <>

            <input id="text" type="test" value={test} onChange={(event) => (settest(event.target.value))} />
            <p className="Karaage">{test}</p>
            <style>{`.Karaage{ margin: 30px 15px; }`}</style>

            <button onClick={submit}>test button</button>

            {test1.map(settest3)}

        </>

    )




}