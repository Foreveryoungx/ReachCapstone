export default () =>
  `<div class="container">
<form name="myForm" class="Container" action=""https://gformspree.io/xnqgyege" method="POST" onsubmit="return validForm()">
  <label for="fname">First Name</label>
  <input type="text" id="fname"name="fname" placeholder="Input First Name.." autofocus required>

  <label for="lname">Last Name</label>
  <input type="text" id="lname" name="lname" placeholder="Input Last Name.." required>

  <label for="country">Country</label>
  <select name="country" id="country">
  </select>

  <label for="subject">Comments</label>
  <textarea id="subject" name="subject" placeholder="Comments .." required maxlength="300" minlength="1"></textarea>
  <input type="submit" value="Submit">
</form>`;
