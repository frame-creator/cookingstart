import React, {useState} from 'react';
import './Contact.css';



  
const Contact = () => {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


function onTitleChange(e)  {
        setTitle( e.target.value)
    }
function onEmailChange(e) {
        setEmail(e.target.value)
    }
function onMessageChange(e) {
        setMessage(e.target.value)
    }

function resetInput (e) {
    setTitle( '');
    setEmail('');
    setMessage('');

}
function handleSubmit(event) {
    event.preventDefault();
    console.log(message, email, title);

    fetch('https://re-backend.herokuapp.com/send', {
        method: "POST",
        body: JSON.stringify(
            {title: title,
            email:email,
            message: message}

            ),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then (
        (response) => (response.json())
       
).then((response) => {
        resetInput();
        if (response.status === 'success') {
            alert("메세지가 전송되었습니다.");
            

        }
        else if (response.status === 'fail') {
            alert("메세지 전송이 되지 않았습니다. 다시 시도해주세요.")
        }
    })
}
    



    

return (
    <React.Fragment>


<section class="section-form" >
    <div class = "section-title">
           
                <h2 className="form-title">문의하기</h2>
           
            </div>
            <div class="row">
                <form method="POST" action="#" class="contact-form" onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="name" class="form-label">제목</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="text" name="name" id="name" placeholder="제목" value={title} onChange={onTitleChange} required/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="email"  class="form-label">이메일 주소</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="email" name="email" id="email" placeholder="답변 수령용 이메일 주소" value={email} onChange={onEmailChange} required/>
                        </div>
                    </div>
                   
                        
                   
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label  class="form-label">문의 내용</label>
                        </div>
                        <div class="col span-2-of-3">
                            <textarea name="message" placeholder="문의 내용" value={message} onChange={onMessageChange}></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>&nbsp;</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="submit" value="문의하기"/>
                        </div>
                    </div>
                   
                </form>
                
            </div>
        </section>
</React.Fragment>
);

}

export default Contact;
