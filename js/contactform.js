//Getting all the needed elements from the DOM (contactform.html)

const contactForm = document.
querySelector("#contact-form");

const submitBtn = document.querySelector(".submit-btn");

const nameInput = document.querySelector("#user_name");

const emailInput = document.querySelector("#user_email");

const phonenumInput = document.querySelector("#user_phonenum");

const eventdateInput = document.querySelector("#user_eventdate");

const eventvenueInput = document.querySelector("#user_eventvenue");

const eventlocationInput = document.querySelector("#user_eventlocation");

const eventguestInput = document.querySelector("#user_eventguest");

const eventguestbudgetInput = document.querySelector("#user_guestbudget");

const messageInput = document.querySelector("#message");

//Getting all the needed elements from Email.js 

const publicKey = "ufNtJPhjxa2rL3vWV";
const serviceID = "service_rdd8dn3";
const templateID = "template_a70b84y";

//initializing email js with public Key

emailjs.init(publicKey);

//Add submit event to form 

contactForm.addEventListener("submit", e => {
    // Prevent from default behaviour 
    e.preventDefault();

    //Change button text
    submitBtn.innerHTML = "Just A Moment....";

    // Get all input field values 
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phonenumInput.value,
        eventdate: eventdateInput.value,
        eventvenue: eventvenueInput.value,
        eventlocation: eventlocationInput.value,
        eventguest: eventguestInput.value,
        eventguestbudget: eventguestbudgetInput.value,
        message: messageInput.value
    }

    /* Send the email (Add Service, template ID and input field values)*/

    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            // change button text
            submitBtn.innerHTML = "Message Sent Successfully";

            // clear out the input fields

            nameInput.value = "";
            emailInput.value = "";
            phonenumInput.value = "";
            eventdateInput.value = "";
            eventvenueInput.value = "";
            eventlocationInput.value = "";
            eventguestInput.value = "";
            eventguestbudgetInput.value = "";
            messageInput.value = "";
        }, (error) => { 
            //console log the error
            console.log(error);

            //change button text 

            submitBtn.innerHTML = "Something went wrong"
        });
});