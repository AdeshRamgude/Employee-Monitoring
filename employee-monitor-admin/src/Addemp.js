import React, {useState,useEffect} from 'react'
import { at, db } from './Firebase';

function Addemp() {
    const [d,setData]=useState(
        []
      );

      useEffect(() => {
        db.child('empdata').on('value',snapshot =>{
            let ad=[];
            snapshot.forEach(snap => {
                ad.push({id:snap.key,...snap.val()});
            });
            setData(ad);
        })
      }, [])

    const add=()=>{
    let mailid=document.getElementById('email');
    let pass=document.getElementById('pass');
    let name=document.getElementById('name');

    at.createUserWithEmailAndPassword(mailid.value,pass.value)
    .then(function(response){
        console.log(response);
        db.child('empdata').push({
            username: name.value,
            empid: at.currentUser.uid,
            email: at.currentUser.email
        })
        at.signOut();
        mailid.value='';
        pass.value='';
        name.value='';
    })
    // .catch(function(error){
    //     var errorCode=error.code;
    //     var errorMessage=error.message;
    //     console.log(errorCode);
    //     console.log(errorMessage);
    // });

}

    return (
        <div>
            <div className='card auth-card input-field'>
                <input
                    type="text"
                    placeholder="email"
                    id="email"
                />
                <input
                    type="text"
                    placeholder="password"
                    id="pass"
                />
                <input
                    type="text"
                    placeholder="Name"
                    id="name"
                />
                
                <button className="btn waves-effect waves-light #ef5350 red lighten-1" 
                    onClick={() => {
                        add();
                      }}
                >
                    Add Employee
                </button>   
          </div>
                <div>
                    {/* <h4>Barbara Palvin</h4> */}
                    <table>
                        <thead>
                            <tr>
                                <th>EMP ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {d.map(dat => (
                            <tr key={dat.id}>
                                <td>{dat.empid}</td>
                                <td>{dat.username}</td>
                                <td>{dat.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {/* <div> 
                        {d.map(dat => (
                            <div key={dat.id}>
                                <h6 id="char">
                                    <strong>Char Count: {dat.username}</strong>
                                </h6>
                                <h6 id="digit">
                                    <strong>Digit Count: {dat.email}</strong>
                                </h6>
                                <h6 id="arrow">
                                    <strong>Arrow Count: {dat.empid}</strong>
                                </h6>
                            </div>
                        ))}
                    </div> */}
                </div>
        </div>
        
    );
}

export default Addemp
