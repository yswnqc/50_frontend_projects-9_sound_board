const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const soundStop = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    soundStop();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

const drums = document.querySelectorAll(".drum");
const images = ["tom1", "tom2", "tom3", "tom4", "snare", "crash", "kick"];

drums.forEach((drum, idx) => {
  drum.style.backgroundImage = `url('images/${images[idx]}.png')`;
  drum.addEventListener("click", () => {
    const audio = new Audio(`sounds/1-${images[idx]}.mp3`);
    audio.play();
  });
});

document.addEventListener("keypress", (event) => {
  const btn = document.querySelector(`.${event.key}`);
  btn.click();
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 100);
});
