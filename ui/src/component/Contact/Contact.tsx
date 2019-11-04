import React, {useState} from 'react'
import Button from '@material-ui/core/Button';

const Contact: React.FC<{}> = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e: any) => {
    setName(e.target.value);
  }

  const handlePhone = (e: any) => {
    setPhone(e.target.value);
  }

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    
    const newContact = {
      name,
      phone,
      email
    }  
    
    // console.log(newContact)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add Contact: </label>
        <input name="name" placeholder="name" value={name} onChange={handleName} />
        <input name="phone" placeholder="Phone Number" value={phone} onChange={handlePhone} />
        <input name="email" placeholder="Email" value={email} onChange={handleEmail} />
        
        <Button variant="contained" color="primary">
          ADD CONTACT
        </Button>
      </form>
    </div>
  )
}

export  default Contact;