import React from 'react';
import Modal from '@mui/material/Modal';
import './Footer.css';
import emailjs from 'emailjs-com';



export default function Footer() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_b1vf16u', 'template_ff11dpf', e.target, 'mdBob8vYGPRR7po0R')
            .then((result) => {
                alert(`Your email was sending 😎,
                thank you for your trust. 😊`);
                // console.log(result.text);
            }, (error) => {
                alert(`Try again 😥`);
            });
        e.target.reset();
    }


    return (
        <footer className='Footer'>
            <h5 onClick={handleOpen}>Contact uS</h5>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className='Form'>
                        <h3>Contact Form</h3>
                        <form onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name.." required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="Your email.." required />
                            </div>
                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject.." required />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" placeholder="Write something.." cols="30" rows="5" required></textarea>
                            </div>
                            <div>
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>

                </Modal>
            </div>
        </footer>
    );
}






