import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
}
body,
html {
    min-height:100vh;
    font-family:"Poppins";
}

body {
    padding: 0 15px;
    /* column-gap: 10px; */
    background: linear-gradient(180deg, #A3CEF1 0%, #274C77 100%);
}

.App {
    display: flex;
    flex-direction: column;
    min-height:100vh;
    /* margin: 0 15px; */
    /* margin:15px 15px; */
}

.header,
.footer {

    height:5vh;

    margin: 15px auto;
    border-radius: 15px;
    width:100%;
    max-width: 1200px;
    flex: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header {
    background-color: whitesmoke;
    display:flex;
    padding:0
}

.footer {
    background-color: whitesmoke;
}

.sections {
    /* background-color: lightgray; */
    flex: auto;
    width:100%;
    max-width: 1200px;
    margin: auto;
    border-radius: 15px;
    overflow: scroll;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    scroll-snap-type: y mandatory;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    min-height: 100%;
    height:78vh;
}

.sections::-webkit-scrollbar{
    display:none;
}

.Section1 {
    background-color: whitesmoke;
    border-radius: 15px;
    margin-bottom: 15px;

    margin-top: 10px;
    height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    scroll-snap-align: start;
    display:flex;
    min-width:100%;
    align-items:center;
    justify-content: center;
    /* text-align:center; */
    vertical-align:center;
}
.Section1-1{
    width:45%;
    /* padding:10%; */
    /* background:lightcoral; // Check */
    height:100%;
    /* display:flex; */
    /* flex-direction:column; */
    /* align-items:center; */
    /* justify-items:center; */
    margin:auto;
    padding-top:5%;
    padding-left:5%;
    
}

h1 {
    color:rgba(155, 181, 205, 1);
    font-size:4rem;
    font-family: 'Poppins script=latin rev=1';
    /* font-weight: 700; */
    /* font-size: 72px; */
    line-height: 108px;
    /* background:red; // Check */
    /* margin-bottom:30px; */
    /* padding: 0 10%; */
    text-align:center;
}

h1 span,h2 span{
    color:#4B5EBE;
}
.iconrow1{
    margin-top:1.2rem;
    height:150px;
    width:150px;
}

.iconrow2{
    margin-top:1.2rem;
    height:150px;
    width:150px;
}
.iconrow3{
    margin-top:1.2rem;
    height:150px;
    width:150px;
    margin-left:1.2rem ;
}


.Section1-2{
    /* display:inline-grid; */
    width:50%;
    /* background:lightblue; */
    height:100%;
    padding-top:5%;
    display:flex;
    flex-direction:column;
    align-items:center;




}

.AboutMe {
    background-color: #EDF2F7;
    border-radius: 15px;
    margin-bottom: 15px;
    height: 100%;
    min-height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    scroll-snap-align: start;
}

.AboutMe h1 {
    height:20%;
}

.AboutMeFlex{
    display:flex;
    height:max-content;
    /* background-color: lightcyan; */
    height:80%;
    color:rgba(155, 181, 205, 1);


}

.AboutMeFlexText {
    width:30%;
    /* background-color: lightpink; */
    align-self:center;
    padding: 0 10%;
    font-family:lato;
    line-height:2.3rem;
    text-align: center;


}   

.AboutMeFlexImg {
    height:100%;
    margin-top:5%;
    /* align-items:center; */
    width:40%;
    /* background-color: lightpink; */
    display:flex;
    flex-direction:column;
    padding:0 5%;
    text-align:center;

}

.hamzaPicture{
    height:200px;
    /* text-align:center; */
    align-self:center;
    margin-bottom:10%;
}
.AboutMeFlexImg{
    font-family:'Poppins script=latin rev=1';
    font-size:24px;
}



.Section3 {
    background-color: lightcyan;
    border-radius: 15px;
    height: 100%;
    min-height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    scroll-snap-align: start;
}
`