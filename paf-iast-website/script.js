// const programs={
//   ug:["BS Computer Science","BS AI","BBA","BS Engineering"],
//   pg:["MS Computer Science","MS Data Science","MBA","PhD Engineering"],
//   short:["AI Bootcamp","Web Development","Data Analytics"]
// };

// function loadPrograms(type){
//   const list=document.getElementById("programList");
//   list.innerHTML="";
//   programs[type].forEach(p=>{
//     const div=document.createElement("div");
//     div.className="card";
//     div.textContent=p;
//     list.appendChild(div);
//   });
// }
// loadPrograms("ug");

// const testimonials=[
//   "PAF-IAST helped shape my career.",
//   "Modern labs and professional faculty.",
//   "Best environment for research and innovation."
// ];

// let i=0;
// setInterval(()=>{
//   document.getElementById("testimonial").innerText=testimonials[i];
//   i=(i+1)%testimonials.length;
// },3000);

// document.getElementById("contactForm").addEventListener("submit",e=>{
//   e.preventDefault();
//   const name=nameInput=document.getElementById("name").value.trim();
//   const email=document.getElementById("email").value.trim();
//   const msg=document.getElementById("message").value.trim();

//   if(!name || !email || !msg){
//     alert("Please fill all fields");
//     return;
//   }
//   if(!email.includes("@")){
//     alert("Invalid email address");
//     return;
//   }

//   document.getElementById("successMsg").innerText="Message sent successfully!";
//   e.target.reset();
// });
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // prevent actual form submission

//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let message = document.getElementById("message").value.trim();
//     let successMsg = document.getElementById("successMsg");

//     // Basic validation
//     if(name === "" || email === "" || message === "") {
//         alert("Please fill in all fields.");
//         return;
//     }

//     // Simulate sending message
//     successMsg.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
//     successMsg.style.color = "green";

//     // Clear form
//     document.getElementById("contactForm").reset();
// });
// const connectWalletBtn = document.getElementById('connectWallet');
// const walletAddress = document.getElementById('walletAddress');

// connectWalletBtn.addEventListener('click', async () => {
//     if (window.ethereum) {
//         try {
//             const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//             walletAddress.textContent = `Connected: ${accounts[0]}`;
//         } catch (error) {
//             console.error("User denied wallet connection");
//         }
//     } else {
//         alert('Please install MetaMask!');
//     }x
// });
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  
  formMsg.style.color = "green";
  formMsg.innerText = "✅ Message Sent Successfully!";
  form.reset();
});