import React from 'react'

export default function Contact() {
  return (
    <div id= 'contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type="text" placeholder='Full Name' required />
            <input type="text" placeholder='Type Your E-Mail' required/>
            <textarea placeholder='Write here ......' name="massage"></textarea>
            <input type="submit" value='Send' />
        </form>
    </div>
  )
}
