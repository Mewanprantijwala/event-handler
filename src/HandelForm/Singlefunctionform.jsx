import React, { useState } from "react";

const Singlefunction = () => {
  const [user, setUser] = useState({ hobbies: [] }); // Ensure hobbies is an array

  function getInput(e) {
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked

    if (type === "checkbox") {
      setUser((prevUser) => {
        if (checked) {
          return { ...prevUser, hobbies: [...prevUser.hobbies, value] };
        } else {
          return {
            ...prevUser, hobbies
              : prevUser.hobbies.filter((hobby) => hobby !== value)
          };
        }
      });
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  }


  function signup(e) {
    e.preventDefault()
    console.log(user)
  }
  return (


    <>
      <form className="col-lg-6 mx-auto my-5 p-5 shadow btn-outline-secondary  formBKcolor" method="post" onSubmit={signup}>
        <h3 className="text-center fw-normal  ">ON  CHANGE</h3>
        <div className="mt-4 text-primary">
          <strong>Name:-</strong>
          <input type="text" onChange={(e) => getInput(e)} name="name" className="form-control" placeholder="Enter username" />

        </div>

        <div className="mt-4 text-primary">
          <strong>NUMBER:-</strong>
          <input type="number" onChange={(e) => getInput(e)} className="form-control" name="number" placeholder="Enter number" />
        </div>
        <div className="mt-4 text-primary">
          <strong>EMAIL:-</strong>
          <input type="Email" onChange={(e) => getInput(e)} className="form-control" name="email" placeholder="Enter Email" />
        </div>

        <div className="mt-4 text-primary">
          <strong>GENDER:-</strong>
          <input type="radio" onChange={(e) => getInput(e)} className="mx-2" value="male" name="gender" />Male
          <input type="radio" onChange={(e) => getInput(e)} className="mx-2" value="Female" name="gender" />Female
          <input type="radio" onChange={(e) => getInput(e)} className="mx-2" value="other" name="gender" />Other
        </div>

        <div className="mt-4 text-primary">
          <strong>HOBBIES:-</strong>
          <input type="checkbox" onChange={(e) => getInput(e)} className="mx-2" value="Cricket" name="Cricket" />Cricket
          <input type="checkbox" onChange={(e) => getInput(e)} className="mx-2" value="Football" name="Football" />Football
          <input type="checkbox" onChange={(e) => getInput(e)} className="mx-2" value="Reading" name="Reading" />Reading
          <input type="checkbox" onChange={(e) => getInput(e)} className="mx-2" value="Drawing" name="Drawing" />Drawing

        </div>

        <div className="mt-4 text-primary">
          <strong>PASSWORD:-</strong>
          <input type="password" onChange={(e) => getInput(e)} name="password" />
        </div>

        <div className="mt-4">
          <textarea name="address" id="" className="form-control" onChange={(e) => getInput(e)} placeholder="Enter address"></textarea>
        </div>


        <div className="mt-5 ">
          <button className="btn btn-outline-light text-primary m-3">Sumbit</button>



        </div>


      </form>
    </>

  )

}
export default Singlefunction




