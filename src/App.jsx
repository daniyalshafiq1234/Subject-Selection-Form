import { menu } from './menu-details';
import MenuButton from './components/MenuButton';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [showAddSubject, setShowAddSubject] = useState(true)
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedSubjectLevel, setSelectedSubjectLevel] = useState('')

  useEffect(() => {
    if (subjects.length > 0) {
      setShowAddSubject(false)
    }
  }, [subjects])

  function openDialog() {
    const dialog = document.getElementById('subjectSelection')
    dialog.showModal()
  }

  function addSubjects() {
    setSubjects((prevState) => {
      return [
        { name: selectedSubject, level: selectedSubjectLevel }, ...prevState
      ]
    })

    const dialog = document.getElementById('subjectSelection')
    dialog.close()
  }

  function removeDialog() {
    const dialog = document.getElementById('subjectSelection')
    dialog.close()
  }

  return (
    <div>
      <header>
        <h1>TUITIONAL</h1>
      </header>
      <div className="containerStyle">
        {menu.map((title, index) => (
          <MenuButton
            index={index}
            menuTitle={title}
          />
        ))}
      </div>
      <div>
        <h3>Subjects & Pricing</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div style={{ display: showAddSubject ? 'flex' : 'none', justifyContent: 'space-between' }}>
          <p>Add Subject</p>
          <button className="buttonStyle"
            onClick={openDialog}
          >+</button>
        </div>
        {!showAddSubject &&
          <div>
            <p>Select Subject</p>
            {subjects.map((subject) => (
              <div style={{display: 'flex'}}>
                {subject.name} - {subject.level}
                <button>x</button>
              </div>
            ))}
          </div>}
        <div className="form-group">
          <label htmlFor="curriculum">Select Curriculum</label>
          <input type="text" id="curriculum" name="curriculum"/>
        </div>
        <div className="form-group">
          <div style={{flex: 1}}>
            <label htmlFor="hours">Hours/Week</label>
            <input type="text" id="hours" name="hours"/>
          </div>
          <label htmlFor="currency">Hourly rate</label>
          <select id="currency" name="currency" style={{marginTop: '21px', marginLeft: '73px'}}>
            <option value="" disabled selected hidden>AED</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            <option value="aed">AED</option>
          </select>
        </div>
      </div>
      <dialog id="subjectSelection">
        <h3>Add Subject</h3>
        <div>
          <p>Select Subject</p>
          <input type="text" onChange={(e) => {
            setSelectedSubject(e.target.value)
          }} />
        </div>
        <div>
          <p>Select Subject Level</p>
          <input type="text" onChange={(e) => {
            setSelectedSubjectLevel(e.target.value)
          }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={removeDialog}>Cancel</button>
          <button style={{ backgroundColor: "#007BFF" }} onClick={addSubjects}>Add</button>
        </div>
      </dialog>
    </div>
  );
}

export default App;
