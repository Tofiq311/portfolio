import React from "react"

import Reveal from "./Reveal"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8f4c5325-0c29-453d-805c-e120e864d2fb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message Send Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">Contact <span>Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    I am a technology enthusiast and thrive upon designing and building
                    innovative applications, always trying to come out of my comfort zone
                    to acquire a new skill constantly. Bringing 3+ years of experience in
                    implementing enterprise applications from concept to deployment.
                    </p>
                </div>

            </div>

            <form onSubmit={onSubmit}
                className=" max-w-6xl p-5 md:p-12"
                id="form"
            >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            
          </form>

          <span>{result}</span>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact