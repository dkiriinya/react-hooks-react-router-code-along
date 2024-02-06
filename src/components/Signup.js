import React from "react";

function Signup(){
    return(
      <div>
        <h1>sign up</h1>
        <form>
          <div>
            <input type="text" name="newUsername" placeholder="Enter a new username" />
          </div>
          <div>
            <input type="text" name="emailAddress" placeholder="Enter your email address" />
          </div>
          <div>
            <input type="text" name="newPassword" placeholder="Enter a new password" />
          </div>
          <div>
            <input type="text" name="confirmPassword" placeholder="Enter your password again" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        </div>
    )
  }
export default Signup  