import React from 'react'
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import BigTitle from '../subComponents/BigTitlte'
const api = () => {
 /* const [formStatus, setFormStatus] = React.useState('Send')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }

    console.log(conFom)
  }*/
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "eb7d49f0-e422-41cf-be29-1b6994bcb258");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully")
        event.target.reset();
      } else {
        alert("Error", data);
        setResult(data.message);
      }
    };
  return (
    
    <div className="container mt-5"><br/><br/><br/><br/><br/><br/>
      <h2 className="mb-3">Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit"name='submit'value='submit'>
    Submit
        </button>
       
      </form>
      <span>{result}</span>
    <PowerButton/>
    <SocialIcons theme='light'/>
    <LogoComponent theme='light'/>
    <BigTitle text="CONTACT ME" top="80%" right="30%" />
    
    </div>
    
  )
}

export default api;