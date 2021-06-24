import {db} from './Firebase'
import React,{useState,useEffect} from 'react';

function Gallery() {
    const [notes,setNotes]=useState(
        []
      );
      const [data,setData]=useState(
        []
      );
     
const searchData=()=>{
      // useEffect(() => {
       let empid=document.getElementById("empid").value;
       let date=document.getElementById("date").value;
       setUserData(empid);
       console.log(empid,date);
        db.child("users").child(empid)
        .child("activity_images").child(date).on("value", snapshot => {
          let allNotes = [];
          snapshot.forEach(snap => {
            allNotes.push({id:snap.key,...snap.val()});
          });
          setNotes(allNotes);
          console.log("allNotes",allNotes);
        })
        
      // },[])
      }
      console.log("Notes",notes); 

      
      const setUserData=(empid)=>{
     // useEffect(() => {
        let date=document.getElementById("date").value;
        // var userId="BjM2jV19NcTeNpV9SjKR38CdX0s2";
        db.child("users").child(empid).child(date).child("count").get().then(
          (snapshot=>{
            setData(snapshot.val())
          })
        )
      }
      //}, [])

  return (
    <div>
      <div>
        {/* <form> */}
          <div className="searchbox input-field">
            <input
              type="text"
              placeholder="EMP ID"
              id="empid"
  
              
              // focus
              // value={aEmpid}
              // onChange={(e) => {
              //   setAEmpid(e.target.value);
              // }}
            />
            <input
              type="text"
              placeholder="Date"
              id="date"
              // focus
              // value={aDate}
              // onChange={(e) => {
              //   setADate(e.target.value);
              // }}
            />
            <button
              className="btn-floating #ef5350 red lighten-1"
              onClick={() => {
                searchData();
              
              }}
            >
              <i className="material-icons right">search</i>
            </button>
          </div>
        {/* </form> */}
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "18px 18px",
            borderBottom: "0.5px solid #ef5350",
          }}
        >
          <div
            style={{
              margin: "20px",
            }}
          >
            {/* <img
              style={{ width: "150px", height: "150px", borderRadius: "80px" }}
              src="https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMHNxdWFyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            /> */}
          </div>
          <div>
            {/* <h4>Barbara Palvin</h4> */}
            <div>
              <h6 id="char">
                <strong>Char Count: {data.char}</strong>
              </h6>
              <h6 id="digit">
                <strong>Digit Count: {data.digit}</strong>
              </h6>
              <h6 id="arrow">
                <strong>Arrow Count: {data.arrow}</strong>
              </h6>
              <h6 id="spl">
                <strong>Spl Key Count: {data.spl}</strong>
              </h6>
            </div>
          </div>
        </div>
        <div className="img-grid">
          {notes.map(note => (
                <div key={note.id} className="img-wrap">
                  <a href={note.url}>
                    <img  src={note.url} className="images" alt="upload pic"/>
                  </a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
