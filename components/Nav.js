export default links => `
<section id="nav-bar">
     <header>
       <div class="wrapper">
         <div class="logo">
           <a href="#">REACH</a>
         </div>
         <nav>
         ${links
           .map(link => `<a href="/${link.title}" data-navigo>${link.text}</a>`)
           .join("")}
           <div class="burger">
           <div class="line1"></div>
           <div class="line2"></div>
           <div class="line3"></div>
           </div>
         </nav>
       </div>
     </header>
    </section>
`;
