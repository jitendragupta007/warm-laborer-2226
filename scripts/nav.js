let nav=`
<a href="#" ><img id="nav-img" src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="logo"/></a>
<input type=" text" id="location" Placeholder=" Your Location"/>
<input type="search" id="search" placeholder="Search for any delicious Product"/>
<a href="#" id="category"><img src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="Nav"/> Categories</a>
<a href="#" id="login"><img src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="Login"/> Login</a>   
<a href="#" id="cart"><img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="Category"/> Cart</a>`;



let navData=document.querySelector("#nav");
navData.innerHTML=nav;