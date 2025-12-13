


function Header() {
    //const name = "Sunil";
    const profession = "Full Stack Developer";
    const name = "Sunil ";
    return(
         <header className='header'>
          <h1>{name}</h1>
          <p>{profession}</p>
          <nav>
            <a href='#about'>About</a>
            <a href='#Project'>Project</a>
            <a href='#contact'>Contact</a>
          </nav>
        </header> 
    );
}

export default Header;