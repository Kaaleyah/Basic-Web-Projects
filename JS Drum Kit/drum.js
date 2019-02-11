var keys = {
  a: {
    sound: clap,
    btn: clapA
  },
  s: {
    sound: hihat,
    btn: hihatS
  },
  d: {
    sound: kick,
    btn: kickD
  },
  f: {
    sound: openhat,
    btn: openhatF
  },
  g: {
    sound: boom,
    btn: boomG
  },
  h: {
    sound: ride,
    btn: rideH
  },
  j: {
    sound: snare,
    btn: snareJ
  },
  k: {
    sound: tom,
    btn: tomK
  },
  l: {
    sound: tink,
    btn: tinkL
  }
}

document.addEventListener("keydown", function(e) {
    if (e.key = keys[e.key]) {
      keys[e.key].sound.currentTime = 0;
      keys[e.key].sound.play();
      keys[e.key].btn.classList.add("playing");
      setTimeout(function(){keys[e.key].btn.classList.remove("playing")}, 50);
    }
})
