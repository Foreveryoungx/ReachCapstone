export default () =>
  `<form action=""
    method="POST" class="modal-content" id="msform">
    <div class="modal">
    <div class="container1" id="signup">
    <fieldset>
      <h1>SIGN UP</h1>
      <p>Complete form to create an account.</p>
      <input type="text" name="fname" id="fname" placeholder="First Name" />
      <input type="text" name="lname" id="lname" placeholder="Last Name" />
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>
      <input type="text" name="twitter" placeholder="Twitter"/>
      <input type="text" name="facebook" placeholder="Facebook" />
      <input type="text" name="gplus" placeholder="Google Plus" />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Confirm Password" name="psw-repeat" required>

      <label for="">
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
      </label>

      <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

      <div class="clearfix">
      <a href="/Home" data-naviago ><button type="button" class="cancelbtn">Cancel</button></a>

        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
      </fieldset>
    </div>
    </div>
  </form>`;
// `<!-- multistep form -->
// <form id="msform">
//   <!-- progressbar -->
//   <ul id="progressbar">
//     <li class="active">Account Setup</li>
//     <li>Social Profiles</li>
//     <li>Personal Details</li>
//   </ul>
//   <!-- fieldsets -->
//   <fieldset>
//     <h2 class="fs-title">Create your account</h2>
//     <h3 class="fs-subtitle">This is step 1</h3>
//     <input type="text" name="email" placeholder="Email" />
//     <input type="password" name="pass" placeholder="Password" />
//     <input type="password" name="cpass" placeholder="Confirm Password" />
//     <input type="button" name="next" class="next action-button" value="Next" />
//   </fieldset>
//   <fieldset>
//     <h2 class="fs-title">Social Profiles</h2>
//     <h3 class="fs-subtitle">Your presence on the social network</h3>
//     <input type="text" name="twitter" placeholder="Twitter"/>
//     <input type="text" name="facebook" placeholder="Facebook" />
//     <input type="text" name="gplus" placeholder="Google Plus" />
//     <input type="button" name="previous" class="previous action-button" value="Previous" />
//     <input type="button" name="next" class="next action-button" value="Next" />
//   </fieldset>
//   <fieldset>
//     <h2 class="fs-title">Personal Details</h2>
//     <h3 class="fs-subtitle">We will never sell it</h3>
//     <input type="text" name="fname" placeholder="First Name" />
//     <input type="text" name="lname" placeholder="Last Name" />
//     <input type="text" name="phone" placeholder="Phone" />
//     <textarea name="address" placeholder="Address"></textarea>
//     <input type="button" name="previous" class="previous action-button" value="Previous" />
//     <input type="submit" name="submit" class="submit action-button" value="Submit" />
//   </fieldset>
// </form>`;
