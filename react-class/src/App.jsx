import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


// Function Component (S-1)

// task-1
function Welcome() {
  return (
    <>
      <h1>Welcome to react</h1>
      <p>Start Learning React Today !</p>
      <h1>One</h1>
    </>
  );
}

// task-2
function Student() {
  return (
    <>
      <h2>Students Details:</h2>
      <p>Name: Gowtham R</p>
      <p>Course: B.Sc Computee Science</p>
      <p>Duration: 3 Years.</p>
    </>
  );
}

// task-3
function Header() {
  return (
    <>
      <h1>My React Application</h1>
      <a href="#">Home</a>{'|'}
      <a href="#">About</a>{'|'}
      <a href="#">Contact</a>
    </>
  );
}

// task-4
function HEader() {
  return (
    <>
      <h1>My React Application</h1>
      <a href="#">Home</a>{'|'}
      <a href="#">About</a>{'|'}
      <a href="#">Contact</a>
    </>
  );
}
function Content() {
  return (
    <>
      <h1>Heading:</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, dolorem!</p>
    </>
  );
}
function Footer() {
  return (
    <>
      <footer>2026 My Website.</footer>
    </>
  );
}

// Props (s-2)
// task-5
function STudents(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </>
  );
}

//task-6
function Employee({ name, role, salary, department }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Role: {role}</p>
      <p>Salary: {salary}</p>
      <p>Department: {department}</p>
    </>
  );
}

// task-7
function Book({ title, author, price }) {
  return (
    <>
      <h1>Title: {title}</h1>
      <p>Author: {author}</p>
      <p>Price: {price}</p>
    </>
  );
}

// task-8
function UserProfile({ name, mail, city }) {
  return (
    <>
      <h1>Name: {name}</h1>
      <p>Mail: {mail}</p>
      <p>City: {city}</p>
    </>
  );
}


// Events - No Props and No Hooks
// tassk-9
function Task9() {
  function Alert() {
    alert("Button Clicked.");
  }
  return (
    <>
      <button onClick={Alert}>Click</button>
    </>
  );
}

// task-10
function WelcomeMsg() {
  function ALert() {
    alert("Welcome to React...");
  }
  return (
    <>
      <button onClick={ALert}>Show message</button>
    </>
  );
}

// task-11
function Buttons() {
  function ShowHome() {
    alert("Home Button Clicked.");
  }
  function ShowAbout() {
    alert("About Button Clicked.");
  }
  function ShowContact() {
    alert("Contact Button Clicked.")
  }

  return (
    <>
      <button onClick={ShowHome}>Home</button>
      <button onClick={ShowAbout}>About</button>
      <button onClick={ShowContact}>Contact</button>
    </>
  )
}


// task-12
function Task12() {
  function Change(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <h1>Example Heading</h1>
      <input type="text"
        placeholder="Enter Your name"
        onClick={Change} />
    </>
  );
}

// task-13
function Task13() {
  function selected(event) {
    console.log("Selected:", event.target.value);
  }
  return (
    <>
      <h1>Select Course</h1>
      <select onClick={selected}>
        <option value="Select here">Select here</option>
        <option value="MERN">MERN</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="Testing">Testing</option>
      </select>
    </>
  )
}


// task-14
function Task14() {
  function submit(event) {
    event.preventDefault();
    alert("Form submitted");
  }
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="Enter Your Name" required />
        <br />
        <input type="email" placeholder="Enter Your Mail" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

// task-15
function Task15() {
  function task15(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");

    alert(`Register Successful! \nName: $ {name}\nEmail: ${email}`);
  }
  return (
    <>
      <h1>Register Form</h1>

      <form onSubmit={task15}>
        <input type="text" name="name" placeholder="Enter Your Name:" required />
        <br /><br />
        <input type="email" name="email" placeholder="ENTER YOUR EMAIL:" required />
        <br /><br />
        <input type="password" name="password" placeholder="Enter Password:" required />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </>
  )
}



function Mini() {
  function msg() {
    alert("Button Clicked")
  }

  return (
    <>
    <h1>MINI Project</h1>
      <button onClick={msg}>Click</button>
    </>
  )
}
  
  








// main component
function App() {
  return (
    <div>
      {/* Section-1 */}
      <Welcome />
      <hr></hr>
      <Student />
      <hr></hr>
      <Header />
      <hr></hr>

      {/* task-4 */}
      <HEader />
      <hr />

      <Content />
      <hr />

      <Footer />
      <hr />


      {/* section-2 */}
      {/* task-5 */}
      <STudents
        name="Gowtham R"
        age={21}
        course="Computer Science"
      />
      <STudents
        name="Rajini"
        age={70}
        course="Bca"
      />
      <STudents
        name="Kamal"
        age={72}
        course="Computer Science"
      />
      <hr />

      {/* task-6 */}
      <Employee
        name="Gowtham"
        role="Frontend Developer"
        salary={200000}
        department="CS"
      />
      <Employee
        name="Rajini"
        role="Backend Developer"
        salary={300000}
        department="Bca"
      />
      <hr />


      {/* task-7 */}
      <Book
        title="Ponniyin Selvan"
        author="Kalki"
        price={500}
      />
      <hr />

      {/* task-8 */}
      <UserProfile
        name="Gowtham R"
        mail="gowtham.dev5080@gmail.com"
        city="Karur"
      />
      <hr />

      {/* task-9 */}
      <Task9 />
      <hr />


      {/* task-10 */}
      <WelcomeMsg />
      <hr />

      {/* task-11 */}
      <Buttons />
      <hr />

      {/* task-12 */}
      <Task12 />
      <hr />

      {/* task-13 */}
      <Task13 />
      <hr />

      {/* task-14 */}
      <Task14 />

      {/* task-15 */}
      <Task15 />
      <br /><br />
      <hr />

      <Mini />







      <br /><br /><br />
    </div>
  );
}
export default App;