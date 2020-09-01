export default st => {
  return `
<div class="card">
  <img src="https://github.com/Foreveryoungx/ReachCapstone/blob/master/Images/avatar.png?raw=true" alt="Avatar">
  <h1 id="usernameCon">${st.Rolodex[0].fname} ${st.Rolodex[0].lname}</h1>
  <p class="title" id="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <a href="https://twitter.com/" id="twitter"><i class="fa fa-twitter"></i></a>
  <a href="https://linkedin.com/" id="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="https://facebook.com/" id="facebook"><i class="fa fa-facebook"></i></a>
  <p><button id="contactBtn">Contact</button></p>
</div>`;
};
