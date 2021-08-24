import './Contact.css';
import computer from '../images/code.jpg';
import React, {useState} from 'react';

const Contact = () => {
 
        const [message, setMessage] = useState({});

        const loadMessage = (event) => {
            setMessage({name: document.getElementById("name").value, 
                        message: document.getElementById("message").value,
                        subject: document.getElementById("subject").value,
                        email: document.getElementById("email").value });
         
        }

    return (
        <div name="contact" id="contact"  className='Contact'>
            <h1>Contact me</h1>
            <div className='contact-container'>          
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <h4> Email:</h4>  
                        <a href = "mailto: matiasmedrano@hotmail.com"><i class="bi bi-mailbox"></i></a> 
                        <h6>matiasmedrano@hotmail.com</h6>
                        <br />
                        <h4>Whatsapp:</h4>
                        <a class="whatsappLink mobile" href="whatsapp://send?text=Hello Matías! I ..&phone=+543515159949&abid=+543515159949"><i class="bi bi-whatsapp"></i> </a>
                        <a class="whatsappLink desktop" href="http://web.whatsapp.com/send?text=Hola Matías! Quiero contactarme contigo..&phone=+543515159949&abid=+543515159949"><i class="bi bi-whatsapp"></i></a>  
                        <h6>+543515159949</h6>
                        <img className='computer-image' src={computer} ></img>

                    </div>
                    <div className='col-sm-12 col-lg-6'>
                        <div class="form-area">  
                            <form id="form" action={`mailto: matiasmedrano@hotmail.com?subject=${message.subject}&body=${"Mi nombre es " + message.name + ' ' + message.message}`} method="POST" enctype="text/html">
                         
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group">
                                        <textarea onChange={loadMessage} className="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7" required></textarea>
                                        </div>
                                    <button type="submit"  id="submit" name="submit" className="btn sub-contact-btn btn-secondary pull-right">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;