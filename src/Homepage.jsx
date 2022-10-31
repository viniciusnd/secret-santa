import { useState } from 'react'
import './index.css'
import AddInput from './AddInput'
import ConfirmPlayInput from './ConfirmPlayInput'
import { Link } from "react-router-dom"

let addParticipants = []
var listOfParticipants = []
let finalList = []
let sort = undefined
var participants


export default function Homepage() {
  const [displayResult, sortName] =
    useState(function initialState() {
      return (
        <Link to="/rules"><button className="text-xl border rounded-xl border-none w-100 h-10 px-2 uppercase font-bold text-rose-900 bg-amber-200 ease-in-out duration-300 hover:scale-110">Click to see how to use</button></Link>

      )
    })


  function sorting() {
    participants = Math.floor(Math.random() * addParticipants.length)
    sort = addParticipants[participants]
    let gettingConfirmPlayInput = document.getElementById('confirmPlayInput')
    let valor2 = gettingConfirmPlayInput.value
    if (sort == valor2 || listOfParticipants.indexOf(valor2) <= -1 ) {
      sortName(
        <span className="text-xl md:text-3xl text-amber-200 font-bold uppercase">Click on raffle again</span>
      )
    } else if (sort !== valor2 && listOfParticipants.indexOf(valor2) > -1) {
      sortName(sort)
    } else {
      sortName(<span className="text-xl md:text-3xl text-amber-200 font-bold uppercase">Invalid Name!</span>)
    }
    if (sort === undefined) {
      sortName(
        <span className="text-xl md:text-3xl text-amber-200 font-bold uppercase">There are no names in the list</span>
      )
    }
  }
  function clickOnAdd(e) {
    let gettingAddInput = document.getElementById('addInput')
    let valor = gettingAddInput.value
    if (valor == "" || valor == " ") {
      sortName(<span className="text-xl md:text-3xl text-amber-200 font-bold uppercase">Add a name to the list</span>)
    } else {
      var adding = addParticipants.push(valor)
      console.log(addParticipants)
      var addingToList = listOfParticipants.push(valor)
      console.log(listOfParticipants)
    }
  }


  function clickOnPlay(e) {
    sorting()
  }

  function clickOnConfirm(e) {
    let gettingConfirmPlayInput = document.getElementById('confirmPlayInput')
    let valor2 = gettingConfirmPlayInput.value
    let result = displayResult
    let objectValue = { name: valor2, id: result }
    if (valor2 == "" || valor2 == " ") {
      sortName(<span className="text-xl md:text-3xl text-amber-200 font-bold uppercase">Type your name</span>)
    } else {
      addParticipants.splice(participants, 1)
      console.log(addParticipants)
      listOfParticipants.splice(listOfParticipants.indexOf(valor2),1)
      console.log(listOfParticipants)
      var adding = finalList.push(objectValue)
      console.log(finalList)
      sortName(<span className="text-xl md:text-3xl text-amber-200 font-bold uppercase">Confirmed!</span>)
    }
  }
  return (
    <div className="min-h-screen bg-red-700">
      <div className="flex flex-row justify-center">
        <header className="mt-5 font-caveat font-bold text-3xl md:text-10xl text-amber-200 tracking-widest">Secret Santa</header>
      </div>

      <div className="flex flex-row justify-center mt-16">
        <header className="mt-5 font-bold text-3xl md:text-9xl uppercase">{displayResult}</header>
      </div>

      <div className="flex flex-row justify-center items-center mt-40 space-x-1.5 md:space-x-5">
        <h1 className="flex flex-col justify-center items-center"><ConfirmPlayInput />
          <div className="flex flex-row space-x-3 text-sm md:text-base">
            <button onClick={clickOnPlay} className="mt-5 border rounded-xl border-none w-16 md:w-28 h-9 md:h-10 uppercase font-bold text-rose-900 bg-rose-400 ease-in-out duration-300 hover:scale-110">raffle</button>
            <button onClick={clickOnConfirm} className="mt-5 border rounded-xl border-none w-20 md:w-28 md:h-10 uppercase font-bold text-rose-900 bg-rose-400 ease-in-out duration-300 hover:scale-110">Confirm</button>
          </div>
        </h1>

        <h1 className="flex flex-col justify-center items-center text-sm md:text-base"><AddInput />
          <button onClick={clickOnAdd} className="mt-5 border rounded-xl border-none w-20 md:w-20 h-9 md:h-10 uppercase font-bold text-rose-900 bg-rose-400 ease-in-out duration-300 hover:scale-110">Add</button>
        </h1>
      </div>
    </div>
  )
}