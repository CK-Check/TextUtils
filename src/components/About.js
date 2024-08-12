import React from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState(
    // {
    //     color: 'black',
    //     backgroundColor: 'white',
    // })

let myStyle = {
  color: props.mode ==='dark'? 'white':'black',
  backgroundColor: props.mode === 'dark'? '#787777': 'white',
}
    //const [btnText, setbtnText] = useState("Enable Dark mode");

    // const toggleStyle = () =>{
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //     setbtnText("Enable Dark mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '0.25px solid white',
    //         })
    //     setbtnText("Enable Light mode")
    //     }
    // }

  return (
    <div className="container py-2" style={myStyle}>
        <h2>About Us</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <strong>What is TextUtils?</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={myStyle}>
        TextUtils provides you with the utility to upscale your language presentation game by providing you the tools to enchance your writing skill. We help with bulk tranformation of the document, from scaling the documents from uppercase to lowering it down to lowercase.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>What is the thing that we can expect from these website?</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body" style={myStyle}>
        We are here to serve with best possible utility tools to play around your text document so that you can have a emersive and professional experience. We have plan out to bring more features to this website in order to it be more functional and helpful to students as well as professionals in their day-to-day documentation.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <strong>Question 3...</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body" style={myStyle}>
        Answer 3...
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
