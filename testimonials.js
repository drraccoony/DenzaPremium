const testimonials = [
    {
      name: "Denza",
      imageURL: "images/denza.jpg",
      summary: "Overall I'm pretty happy with this service. A few bugs but outstanding customer service! Everytime there was a mishap Denza really took action and resolved the issue ASAP."
    },
    {
      name: "Rico Raccoon",
      imageURL: "https://drraccoon.me/main/user/pages/01.home/DrRaccoonIcon.png",
      summary: "I cant believe I paid for this. I wanted to give the trial a shot, but it started charging me on a weekly basis even though the paid teirs advertise being monthly. The support phone number goes to a disconnected phone line. Stay clear of this!!"
    },
    {
      name: "Remi",
      imageURL: "images/remi.jpg",
      summary: "I only subscribed so that the website would allow me to leave a poor review. Not only does the 'Denza Premium' tier APPARENTLY embolden him to show up to your house and wreck your kitchen He also takes it upon himself to flip all the toilet paper rolls in the house around *backward*. Who in the f*** does that?!?!?!"
    },
    {
      name: "Pico",
      imageURL: "images/pioc.webp",
      summary: "Subscribed to Denza Premium during the open beta, there were no tv shows or movies, only a singular podcast that sounds like it was recorded through a 1920s radio."
    },
    {
      name: "Vulan",
      imageURL: "images/vulan.gif",
      summary: "I recently subscribed to Denza Premium and was deeply disappointed by their service. Not only was their customer service unresponsive and unhelpful, but their overall support was abysmal. I strongly advise avoiding Denza Premium to save yourself from the frustration and wasted money."
    },
    {
      name: "Chio",
      imageURL: "images/chio.jpg",
      summary: "2 out of 5 stars. I would go lower, but Denza is my boyfriend, EVEN THOUGH HE MADE ME SIGN UP FOR DENZA PREMIUM TO CONTINUE OUR RELATIONSHIP! Customer service is poor since I KNOW he can never find his phone :( Definitely pay for this if you like being edged and disappointed"
    },
    {
      name: "Carmabella",
      imageURL: "images/carma.jpg",
      summary: "Who is denza?"
    }
  ];

const nameSigs= [
    'Previous Customer',
    'In Active Lawsuit',
    'Current Customer',
    'On hold with Better Business Bureau',
    'Vastly Regretful Customer',
    'Livid Previous Customer'];

function updateTestimonial() {
    var randomIndex = Math.floor(Math.random() * testimonials.length);
    var randomObject = testimonials[randomIndex];

    var randomIndexSigs = Math.floor(Math.random() * nameSigs.length);
    var randomSig = nameSigs[randomIndexSigs];
    
    var testimonialNameSigElement = document.getElementById("testi_namesub");
    var testimonialNameElement = document.getElementById("testi_name");
    var testimonialBodyElement = document.getElementById("testi_body");
    var testimonialImgElement = document.getElementById("testi_img");
    testimonialNameElement.textContent = randomObject.name;
    testimonialBodyElement.textContent = randomObject.summary;
    testimonialImgElement.src = randomObject.imageURL;
    if (randomIndex == 0) {
      testimonialNameSigElement.textContent = "Denza";
    } else {
      testimonialNameSigElement.textContent = randomSig;
    }
}

updateTestimonial();