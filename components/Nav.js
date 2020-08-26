export default links => `
<section id="nav-bar">
     <header>
       <div class="wrapper">
         <div class="logo">
           <a href="#">REACH</a>
         </div>
         <nav>
         ${links
            .map(
              link =>
                `<a href="/${link.title}" data-navigo>${link.text}</a>`
            )
            .join("")}
         </nav>
       </div>
     </header>
    </section>
`;
