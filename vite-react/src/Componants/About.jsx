

function About() {
    const profession = "Full Stack Developer";
    const name = "Sunil";

    return (
 <section id='about' className='about-section'>
             <h2>About Me</h2>
             <p>Hello! I am {name}, a passionate {profession}. I Love building
              web application that solves real world user problems.
             </p>
          </section>
    );
}
export default About;