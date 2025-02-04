const wrapper = document.querySelector(".wrapper");
const question = document.querySelectorAll(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const newBtn = document.querySelector(".new-btn");
const img = document.querySelector(".img");  // Menambahkan pemilihan elemen gambar

yesBtn.addEventListener("click", () => {
  question[0].innerHTML = "Love you more baby💕";

  // Cek apakah ini halaman kedua, jika iya, hapus gambar GIF dan tambahkan video
  if (wrapper.contains(img)) {
    img.remove();  // Menghapus gambar GIF

    // Membuat container untuk video dan tombol "Send me a message"
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video-container");

    // Membuat elemen video
    let video = document.createElement("video");
    video.classList.add("video");
    video.setAttribute("width", "500");
    video.setAttribute("controls", "");

    const source = document.createElement("source");
    source.src = "lovee.mp4";
    source.type = "video/mp4";
    video.appendChild(source);
    video.load();
    video.play();

    // Menambahkan video ke dalam container
    videoContainer.appendChild(video);

    // Menambahkan tombol "Send me a message" ke dalam container
    videoContainer.appendChild(newBtn);

    // Menambahkan container ke dalam wrapper
    wrapper.appendChild(videoContainer);
  }

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  newBtn.style.display = "block";

  // Menambahkan CSS untuk memastikan tombol berada di tengah
  newBtn.style.position = "absolute";
  newBtn.style.left = "50%";
  newBtn.style.transform = "translateX(-50%)";
  newBtn.style.top = "70%"; // Atur jarak dari atas
  newBtn.style.bottom = "10"; // Atur jarak dari bawah
 
  
  newBtn.addEventListener("click", () => {
    window.location.href = "https://www.tiktok.com/@hatsunerama";
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});