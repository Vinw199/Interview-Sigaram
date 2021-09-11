import { useState, useEffect } from 'react'

function App() {
  const rows = [1,2,3,4]
  const columns = [1,2,3,4]

  const [red, setRed] = useState(0)
  const [selected, setSelected] = useState(1)
  const [currentCell, setCurrentCell] = useState(0)
  const [prev1, setPrev1 ] = useState(0)
  const [prev2, setPrev2 ] = useState(0)

  

  const getId = (row, col) => {
    return col+ (4*(row-1))
  }

  const onCellClick = (id) => {
   
      setSelected(selected+1)
      console.log('selected', selected)
    
      if(selected==1){
      console.log('1')
      setCurrentCell(id)
      const cell = document.getElementById(id)
      cell.style.background = 'red'
    }

    else if(selected===2){
      console.log('2')
      setPrev1(currentCell)
      setCurrentCell(id)
      const cell = document.getElementById(id)
      cell.style.background = 'red'
    }

    else if (selected<=16){
      console.log('3')
      setPrev2(prev1)
      setPrev1(currentCell)
      setCurrentCell(id)
      const cell1 = document.getElementById(id)
      const cell2 = document.getElementById(prev2)
      cell1.style.background = 'red'
      console.log('prev2:', prev2)
    }
   
  }

  const getColumns = (row) => {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {columns.map((col, j)=>{
          return (
            <div  style={{background: 'blue', border: '1px solid black', color: 'white', width: '8rem', height: '4rem'}}>
              <button onClick={(e)=> onCellClick(e.target.id)} id={`${getId(row,col)}`}  style={{width: '100%', height: '100%', background: 'none', cursor: 'pointer', border: 'none'}}>{getId(row, col)}</button>
            </div>
          )
        })}
      </div>
    )}

  return (
    <div className="" style={{display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <div>
      {rows.map((row, i)=>{
         return (
           <div>{getColumns(row)}</div>
         )
        
      })}
      </div>
    </div>
  );
}

export default App;
