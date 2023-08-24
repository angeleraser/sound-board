const container = document.getElementById("container") as HTMLDivElement;
let currentSoundName = "";

function getAudioElementBy(id: string) {
  return document.getElementById(`sound-${id}`) as HTMLAudioElement;
}

function handlePlaySound(btn: HTMLButtonElement) {
  if (currentSoundName) {
    const currentSong = getAudioElementBy(currentSoundName);
    currentSong.pause();
    currentSong.currentTime = 0;
  }

  const { sound: name } = btn.dataset;
  const audioEl = getAudioElementBy(name as string);

  audioEl.currentTime = 0;
  audioEl.play();
  currentSoundName = name as string;
}

window.addEventListener("load", function () {
  const soundNames = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

  soundNames.forEach((name) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.dataset["sound"] = name;
    btn.textContent = name;
    container.append(btn);
  });

  container.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.tagName === "BUTTON") {
      handlePlaySound(event.target as HTMLButtonElement);
    }
  });
});
