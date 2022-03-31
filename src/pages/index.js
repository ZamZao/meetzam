import * as React from "react";
import { GlobalStyles } from "../components/globalStyles";
import { Icon } from '@iconify/react';
import hamzaPicture from "../images/hamzaAboutUs.png"


const IndexPage = () => {
  return (
    <div className="App">
      <GlobalStyles/>
      <div className="header">
          <p>Hamza Mnyusiwalla</p>
      </div>
      <div className="sections">

        <div className="Section1">
          <div className="Section1-1 bg-red">
            <h1>  Hey, <br/>I am <span>Hamza</span></h1>  
            <br/>
            <h1>  I Code From <br/> <span>Back</span> To <span>Front</span></h1>  
          </div>
          <div className="Section1-2">
            <div>
            <Icon className="iconrow1" icon="logos:react"/>
            </div>
            <div>
            <Icon className="iconrow2" icon="logos:html-5"/>
            <Icon className="iconrow2" icon="logos:css-3"/>
            <Icon className="iconrow2" icon="logos:javascript"/>
            </div>
            <div>
            <Icon className="iconrow3" icon="logos:mongodb"/>
            <Icon className="iconrow3" icon="logos:express"/>
            <Icon className="iconrow3" icon="logos:nodejs"/>
            </div>

          </div>
        </div>
  

        <div className="AboutMe">
          <h1>About <span>Me</span></h1>
          <div className="AboutMeFlex">
              <div className="AboutMeFlexText">
                  <p>
                    I am making a career change from Civil Engineering to Software
                    Engineering.

                    I am deeply interested in computer science and love tackling new
                    technologies and languages.

                    I am looking for the next project to put my soul in for the next years, something that is intellectually challenging as well
                    as the possibility to make an impact.
                  </p>
              </div>
              <div className="AboutMeFlexImg">
                <img className="hamzaPicture" src={hamzaPicture}alt="Hamza Mnyusiwalla in Suit"></img>
                <p>
                I am a people’s person who makes people come together to achieve a single goal
                </p>

              </div>
          </div>

        </div>

        <div className="Section3">

        </div>
    </div>

    <div className="footer">
    </div>
    </div>
  )
}

export default IndexPage
