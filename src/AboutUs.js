


function AboutUs(props){
    return(<div align="center"><b>Contact Us at </b><br/>
    {props.companyName}<br/>
    {props.companyAddress}<br/>
    <a href="mailto:aboutus@gmail.com">About</a>
    <a class="fa fa-facebook" href="https://www.facebook.com/"></a>
    </div>);
}
export default AboutUs;
