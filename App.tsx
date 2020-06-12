import React from 'react';
import './App.css';
import { Button, Card, CardColumns, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ExampleBox } from './ExampleBox'
import { SkillsCard } from './SkillsCard'
import { EmailView } from './EmailView'

function App() {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Amaranth:wght@700&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"></link>

    <div className="Header">
        <img src={require('./Pictures/Logo.svg')} alt={"Logo"} />
        <EmailView />
        {/* <Button className="ContactButton" variant="outline-primary" size="lg">Contact Me!</Button> */}
    </div>
    <div className="App">
      <h1 className="Title_1">Full-Stack Developer, Programming Nerd & Forever Learner</h1>
      <h4 className="Title_2">A student developer passionate for coding.</h4>
      <img className="Profile" src={require('./Pictures/Profile.svg')} alt={"Profile"} />
    </div>

    <div className="AboutMe">
      <h1 className="Title_1" style={{paddingTop:'10rem'}}>Hi, I'm Evan!</h1>
      <p className="AboutMe_Paragraph">
        Ever since I started learning Web Development I have loved every moment of it! 
        I love creating helpful and beautiful websites and have had both the opportunity
        of making enhancements to large monolith sites as well as creating small web apps
        from the ground up. No matter the task I am confident I can create an amazing product 
        through persistance and natural curiosity!
      </p>
    </div>

    <div className="SectionWhite">
      <h1 className="Title_1">Interested? Here are my skills:</h1>
      <CardColumns>
        <SkillsCard title="Web Based Languages"
          items={['JavaScript','TypeScript','JQuery','VB.net']} />

        <SkillsCard title="Frameworks"
          items={['ASP.net','React']} />

        <SkillsCard title="Web Technologies"
          items={['Html','CSS','Bootstrap','Font Awesome']} />

        <SkillsCard title="Databases"
          items={['Oracle','MySql','DynamoDB']} />

        <SkillsCard title="Server Technologies"
          items={['AWS API Gateway','AWS Lambda','NodeJS']} />

        <SkillsCard title="Other Languages"
          items={['Python','Java','C/C++']} />
      </CardColumns>
    </div>
    
    <div className="SectionGreen">
      <h1 className="Title_1" style={{paddingTop:'10rem'}}>Take a look at what I've done.</h1>  
      
      <div className="examples-div">
        <ExampleBox 
          imageFile={require("./Pictures/DatabaseConversion.svg")} 
          title={"Database Conversion Tool"}
          description={"Used to sync data between an old and new database."} 
          skills={['Javascript','Html5','CSS','ASP.net','VB.net']}
          paragraphs={<p className="modal-p">
              The company I was working for was having me transfer their website from
              ASP.net to a 'low code' framework called Mendix. They also wanted their new database
              to be more organized while still being able to save their current data. In order to accomplosh this 
              I created a database conversion tool in order to easily setup the data conversion process.
              <br/><br/>
              The tool allowed users to create 'conversion objects' to set the data conversion from one table in the
              old database to another table in the new database. It supported testing the conversion process by
              sending test requests to the new database and also by parsing all data to ensure parallel format.
              <br/><br/>
              The pictures below depict the grid with all the conversion objects and the page where the user could edit / make
              objects. 
            </p>} 
          images={[{image:require("./Pictures/MendixControls.png"),size:-1}, {image:require("./Pictures/ConversionObjectPage.png"),size:35}]}
        />

         <ExampleBox
          imageFile={require("./Pictures/Charges.svg")}
          title={"Charges Customization"}
          description={"Created dynamic display and options for charges screen."}
          skills={['Html5','ASP.net','VB.net','Javascript']}
          paragraphs={<p className="modal-p">
              The charges screen shows the different charges residents were assigned due to damages, lost keys, etc.
              Multiple groups use the screen for various purposes. My improvements consisted of adding a permissions 
              system where users saw different things and had different abilities.
            </p>}
          images={[]}
          />

        <ExampleBox
          imageFile={require("./Pictures/Twitter.svg")}
          title={"Twitter Copy"}
          description={"Recreated Twitter using React and AWS."}
          skills={['React','Javascript','Html5','CSS', 'AWS API Gateway', 'AWS Lambda', 'AWS DynamoDB', 'NodeJS']}
          paragraphs={<p className="modal-p">
            This was a class project to recreate the functionality of Twitter. UI was not given consideration which
            is why the app was not styled much. The front end was created in ReactJS. The backend was created using AWS API Gateway, 
            AWS Lambda, and nodejs with DynamoDB for the database.
            <br/><br/>
            Below you will see the feed page of the app.
          </p>}
          images={[{image:require("./Pictures/TwitterExample.png"),size:-1}]}

          />

        <ExampleBox
          imageFile={require("./Pictures/LogoBox.svg")}
          title={"This Website"}
          description={"Created using React and is hosted on Firebase."}
          skills={['React','TypeScript','Html5','CSS','Bootstrap']}
          paragraphs={<p className="modal-p">
            This website was created with React with custom CSS and the use of Bootstrap. 
            Graphics were custom made using Inkscape (a free vector drawing tool).
            I won't show any pictures as you have already seen everything! Instead click 
            <a href='https://github.com/edj4960/Portfolio' target='_blank'> here </a> 
            to see the code used for the website.
            </p>}
          images={[]}
        />
      </div>
    </div>

    <div className="SectionWhite">
      <h1 className="Title_1" style={{paddingTop:'1rem'}}>Thanks for Visiting!</h1> 
      <p className="AboutMe_Paragraph">
        If you need a Web Developer who loves what he does and always delivers than look no further.
        Feel free to contact me by emailing me at evandj423@gmail.com.
      </p> 

    </div>
    </>
  );
}


export default App;