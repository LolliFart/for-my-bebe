// =========================================================
    // EASY CUSTOMIZATION — EDIT THESE 3 LINES ONLY
    // =========================================================
    const girlfriendName = "Bebe";
    const boyfriendName = "Your Bebeee Gelo";
    const personalMessage =
      "Bebeee, jokes aside, gusto ko talagang magsorry sa’yo nang buong puso. Alam kong hindi sapat yung simpleng “sorry” sa lahat ng pagkakataong napaiyak kita, nasaktan kita, at pinagtampo kita. Mas masakit isipin na ako, na dapat isa sa mga taong nagbibigay sa’yo ng comfort at saya, minsan ako pa yung dahilan kung bakit ka umiiyak. I’m really sorry, bebe. Hindi mo deserve na paulit-ulit kang masaktan dahil sa mga ginagawa o nasasabi ko. Ayokong masanay tayo na masasaktan kita tapos magsosorry lang ako pagkatapos. I want to be better for you—not just through words, but through the way I treat you, listen to you, and consider your feelings. Hindi ko ine-expect na mawala agad lahat ng tampo at sakit dahil lang ginawa ko itong website. Ginawa ko lang ito kasi gusto kitang mapangiti kahit kaunti, pero higit sa lahat, gusto kong malaman mo na mahalaga sa akin yung nararamdaman mo. Thank you for still loving me, being patient with me, and staying even during the times when I make things difficult. I’m sorry for the tears I caused, bebe. I’ll do my best to give you more reasons to smile than reasons to cry. Mahal na mahal kita. And I don’t just want to keep saying that, cause I want to make you feel it. — Your Bebe Gelo ❤️";

    // =========================================================

    document.getElementById("girlfriendName").textContent = girlfriendName;
    document.getElementById("boyfriendName").textContent = boyfriendName;
    document.getElementById("personalMessage").textContent = personalMessage;
    document.title = `Sorry ${girlfriendName} 🥺❤️`;

    const stillMadBtn = document.getElementById("stillMadBtn");
    const forgiveBtn = document.getElementById("forgiveBtn");
    const buttonZone = document.getElementById("buttonZone");
    const runawayHint = document.getElementById("runawayHint");

    let escapeCount = 0;

    function moveStillMadButton(){
      escapeCount++;
      runawayHint.style.display = "block";

      const zone = buttonZone.getBoundingClientRect();
      const btn = stillMadBtn.getBoundingClientRect();

      const maxX = Math.max(0, zone.width - btn.width);
      const maxY = Math.max(0, zone.height - btn.height);

      stillMadBtn.style.position = "absolute";
      stillMadBtn.style.left = Math.random() * maxX + "px";
      stillMadBtn.style.top = Math.random() * maxY + "px";

      const phrases = [
        "Oo 😤",
        "Sure ka? 😭",
        "Bebe pls 🥺",
        "Hindi valid 😌",
        "Try again 😂",
        "Bawal yan ❤️"
      ];

      stillMadBtn.textContent = phrases[Math.min(escapeCount, phrases.length - 1)];
    }

    ["mouseenter","touchstart","pointerdown"].forEach(evt=>{
      stillMadBtn.addEventListener(evt,(e)=>{
        if(evt !== "mouseenter") e.preventDefault();
        moveStillMadButton();
      },{passive:false});
    });

    forgiveBtn.addEventListener("click",()=>{
      burstHearts(20);
      confetti(55);

      document.getElementById("application").classList.add("show");
      document.getElementById("meterSection").classList.add("show");

      setTimeout(()=>{
        document.getElementById("application").scrollIntoView({
          behavior:"smooth",
          block:"start"
        });
      },180);
    });

    const choices = [...document.querySelectorAll(".choice")];
    const receipt = document.getElementById("receipt");
    const selectedChoice = document.getElementById("selectedChoice");

    choices.forEach(choice=>{
      choice.addEventListener("click",()=>{
        choices.forEach(c=>c.classList.remove("selected"));
        choice.classList.add("selected");
        selectedChoice.textContent = choice.textContent;
        receipt.classList.add("show");
        burstHearts(8);
      });
    });

    let tampo = 100;

    const fill = document.getElementById("meterFill");
    const meterText = document.getElementById("meterText");
    const meterEmoji = document.getElementById("meterEmoji");
    const reduceBtn = document.getElementById("reduceBtn");
    const finalMessage = document.getElementById("finalMessage");

    const states = {
      100:"😡",
      80:"😠",
      60:"😒",
      40:"😑",
      20:"🙂",
      0:"🥰"
    };

    reduceBtn.addEventListener("click",()=>{
      tampo = Math.max(0,tampo-20);

      fill.style.width = tampo + "%";
      meterText.textContent =
        tampo === 0 ? "0% Tampo — SAFE NA 😭❤️" : `${tampo}% Tampo`;
      meterEmoji.textContent = states[tampo] || "🥺";
      meterEmoji.style.transform = "scale(1.25)";
      setTimeout(()=>meterEmoji.style.transform="scale(1)",160);

      if(tampo === 0){
        reduceBtn.disabled = true;
        reduceBtn.textContent = "Tampo Removed ✅";
        finalMessage.classList.add("show");
        confetti(95);
        burstHearts(30);

        setTimeout(()=>{
          finalMessage.scrollIntoView({
            behavior:"smooth",
            block:"center"
          });
        },250);
      }else{
        burstHearts(5);
      }
    });

    document.getElementById("loveBtn").addEventListener("click",()=>{
      confetti(130);
      burstHearts(45);
      document.getElementById("loveBtn").textContent = "YEHEYYYY 😭❤️❤️❤️";
    });

    function burstHearts(count=12){
      const hearts=["❤️","💗","💖","💕","💘","🌷","✨"];
      for(let i=0;i<count;i++){
        const el=document.createElement("div");
        el.className="heart";
        el.textContent=hearts[Math.floor(Math.random()*hearts.length)];
        el.style.left=Math.random()*100+"vw";
        el.style.fontSize=(16+Math.random()*20)+"px";
        el.style.animationDuration=(2.3+Math.random()*2.4)+"s";
        el.style.opacity=.65+Math.random()*.35;
        document.body.appendChild(el);
        setTimeout(()=>el.remove(),5200);
      }
    }

    function confetti(count=60){
      const palette=["#ff6f9f","#ffd166","#7bdff2","#b2f7ef","#cdb4db","#ffffff"];
      for(let i=0;i<count;i++){
        const el=document.createElement("span");
        el.className="confetti";
        el.style.left=Math.random()*100+"vw";
        el.style.background=palette[Math.floor(Math.random()*palette.length)];
        el.style.animationDuration=(2.3+Math.random()*2.7)+"s";
        el.style.animationDelay=(Math.random()*.6)+"s";
        document.body.appendChild(el);
        setTimeout(()=>el.remove(),6000);
      }
    }

    setInterval(()=>{
      if(document.hidden) return;

      const el=document.createElement("div");
      el.className="heart";
      el.textContent=Math.random()>.45?"💗":"✨";
      el.style.left=Math.random()*100+"vw";
      el.style.fontSize=(12+Math.random()*11)+"px";
      el.style.animationDuration=(5+Math.random()*4)+"s";
      el.style.opacity=.35;
      document.body.appendChild(el);

      setTimeout(()=>el.remove(),9500);
    },1350);

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

bgMusic.volume = 0.5;

// Toggle music on button click
musicToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                musicToggle.textContent = "🎵 Music ON";
                console.log("Music started ❤️");
            })
            .catch(error => {
                console.log("Could not play music:", error);
            });
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🎵 Music OFF";
    }
});

// Try autoplay first
window.addEventListener("load", () => {
    bgMusic.play().catch(() => {
        console.log("Mobile browser blocked autoplay. User can click button to play.");
    });
});

// Start music automatically after first user interaction
function startMusic() {
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                musicToggle.textContent = "🎵 Music ON";
                console.log("Music started ❤️");
            })
            .catch(error => {
                console.log("Could not play music:", error);
            });
    }

    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchend", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("touchend", startMusic);
