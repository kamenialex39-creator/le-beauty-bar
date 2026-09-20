const modal=document.getElementById("bookingModal");
const openButtons=document.querySelectorAll(".book-trigger");
const closeBtn=document.getElementById("modalClose");
const mobileMenu=document.getElementById("mobileMenu");
const menuBtn=document.getElementById("menuBtn");

openButtons.forEach(btn=>btn.addEventListener("click",()=>{modal.classList.add("open");modal.setAttribute("aria-hidden","false")}));
closeBtn.addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
menuBtn.addEventListener("click",()=>mobileMenu.classList.toggle("open"));
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));

document.getElementById("bookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const phone="27814851647"; // REPLACE WITH THE REAL LE BEAUTY BAR WHATSAPP NUMBER
  const msg=`Hi Le Beauty Bar! I'd like to request an appointment.%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AService: ${data.get("service")}%0ADate: ${data.get("date")}%0ANote: ${data.get("message")||"None"}`;
  window.open(`https://wa.me/${phone}?text=${msg}`,"_blank");
});
