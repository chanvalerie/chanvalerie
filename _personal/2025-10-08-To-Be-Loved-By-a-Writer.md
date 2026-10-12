---
layout: post
title: "To Be Loved By a Writer"
date: 2026-10-08
---

# To Be Loved By a Writer

<style>
  .writer-player {
    width: 100%;
    max-width: 700px;
    margin: 1em 0;
    padding: 0.85rem 1rem 0.75rem;
    border-radius: 14px;
    background: rgba(164, 200, 225, 0.12);
    border: 1px solid rgba(164, 200, 225, 0.35);
    box-shadow: 0 8px 24px rgba(33, 54, 68, 0.06);
  }

  .writer-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .writer-play {
    appearance: none;
    border: none;
    border-radius: 999px;
    background: linear-gradient(135deg, #a4c8e1, #8bb5d3);
    color: #163247;
    font-weight: 700;
    font-size: 0.82rem;
    padding: 0.6rem 0.9rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(107, 145, 171, 0.26);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .writer-play:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(107, 145, 171, 0.25);
  }

  .writer-track {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    min-width: 0;
  }

  .writer-seek {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 999px;
    background: linear-gradient(
      to right,
      #a4c8e1 0%,
      #a4c8e1 var(--seek-progress, 0%),
      rgba(164, 200, 225, 0.28) var(--seek-progress, 0%),
      rgba(164, 200, 225, 0.28) 100%
    );
    outline: none;
    cursor: pointer;
  }

  .writer-seek::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #7daec7;
    border: 2px solid #f5fbff;
    box-shadow: 0 0 0 2px rgba(125, 174, 199, 0.22);
  }

  .writer-seek::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border: 2px solid #f5fbff;
    border-radius: 50%;
    background: #7daec7;
    box-shadow: 0 0 0 2px rgba(125, 174, 199, 0.22);
  }

  .writer-time {
    min-width: 42px;
    text-align: right;
    font-size: 0.8rem;
    color: #355b74;
    letter-spacing: 0.02em;
  }

  @media (max-width: 560px) {
    .writer-controls {
      gap: 0.5rem;
    }

    .writer-play {
      padding: 0.55rem 0.75rem;
      font-size: 0.75rem;
    }

    .writer-time {
      min-width: 36px;
      font-size: 0.72rem;
    }
  }
</style>

<div class="writer-player" aria-label="Audio player for To Be Loved By a Writer">
  <audio id="writer-audio" preload="auto" src="https://github.com/user-attachments/files/33355157/Rex.Orange.County.feat.Daniel.Ca[...]"></audio>

  <div class="writer-controls">
    <button class="writer-play" type="button" id="writer-play" aria-label="Play or pause audio">Play</button>
    <div class="writer-track">
      <input class="writer-seek" id="writer-seek" type="range" min="0" max="100" value="0" aria-label="Seek through audio" />
    </div>
    <span class="writer-time" id="writer-time">0:00</span>
  </div>
</div>

<script>
  (function () {
    const audio = document.getElementById('writer-audio');
    const playButton = document.getElementById('writer-play');
    const seek = document.getElementById('writer-seek');
    const time = document.getElementById('writer-time');

    if (!audio || !playButton || !seek || !time) return;

    audio.volume = 0.9;

    const formatTime = (seconds) => {
      if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
      return `${minutes}:${remainingSeconds}`;
    };

    const updateSeek = () => {
      const duration = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
      const progress = duration > 0 ? (audio.currentTime / duration) * 100 : 0;
      seek.value = progress;
      seek.style.setProperty('--seek-progress', `${progress}%`);
      time.textContent = formatTime(audio.currentTime);
    };

    playButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    });

    audio.addEventListener('play', () => {
      playButton.textContent = 'Pause';
    });

    audio.addEventListener('pause', () => {
      playButton.textContent = 'Play';
    });

    audio.addEventListener('timeupdate', updateSeek);
    audio.addEventListener('loadedmetadata', updateSeek);

    seek.addEventListener('input', (event) => {
      const progress = Number(event.target.value) || 0;
      const duration = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
      audio.currentTime = duration > 0 ? (progress / 100) * duration : 0;
      updateSeek();
    });

    const tryPlay = () => {
      audio.play().catch(() => {
        // Autoplay is often blocked until the user interacts with the page.
      });
    };

    tryPlay();
    document.addEventListener('pointerdown', tryPlay, { once: true });
    document.addEventListener('keydown', tryPlay, { once: true });
    document.addEventListener('touchstart', tryPlay, { once: true });
  })();
</script>
<sup>Indecision – Rex Orange County and Daniel Ceaser</sup>

&nbsp; 

*To be loved by a writer is to be condemned to eternity — for as long as I have words, you will continue to exist between the lines of my poems and within the pages of my prose.*

You will never die; I have already made you immortal.

Not in the way religions promise heaven, nor in the way monuments pretend stone can resist time. You exist now in language, and language has always been humanity’s most beautiful refusal to accept death.

I write you the way historians write civilisations they are terrified will be forgotten. Thoroughly. Obsessively. With the desperate precision of someone cataloguing ruins before the last wall collapses.

You could disappear from photographs. Your footprints could be erased by rain. Years could pass over your name until no one remembers how it once sounded in the mouth of the person who loved you.

But it would not matter. I would still have the page.

That is the terrifying privilege of being loved by a writer: I do not need eternity to keep you alive; I only need words. Ink does not resurrect the body, but it can resurrect presence — the impression of a soul on paper, the memory of a voice made visible.

Science tells us that matter changes form. Nothing truly vanishes; it becomes something else. Ash becomes earth. Light travels long after its star has disappeared. Energy moves through the universe, reshaping itself in ways we still cannot fully name.

So I suppose writing is my version of physics.

You become language.

Your laughter becomes punctuation. Your silence becomes white space. Your eyes become imagery. Your existence becomes metaphor, and metaphor is a strange afterlife because it allows the dead to keep breathing in the minds of the living.

I could write you into a poem tonight, and centuries from now someone could read it without knowing your face, your voice, or the years you existed. They would still encounter you. Not as history, but as a feeling that once had a body.

*That is how I will betray death.*

*I will give you a thousand lives.*

In one poem, you will be the constellation I keep mistaking for a way home. In another, you will be the abandoned cathedral where every prayer I never said continues to echo. In my prose, you will walk through rooms I still cannot bear to enter without thinking of you.

And every time someone reads you, you will happen again. That is the closest thing to resurrection I know.

To be loved by a writer is to be condemned to eternity — not because the writer possesses some divine power over death, but because writers are incapable of letting the things that ruin them disappear entirely from the world.

*You may outlive your body. You may outlive your photograph. You may even outlive the memory of the people who knew you.*

But for as long as I have words, you will continue to exist.

Not exactly as you were, but something permanent. Something made entirely of language and therefore impossible to bury.

You will remain between the lines of my poems, inside the margins of my notebooks, beneath the fingerprints of every sentence that tried to explain why losing you felt like losing an entire universe.

And when I am gone too, perhaps someone will find these pages.

They will read your name. They will not know you, but for a moment, you will breathe again.

And that will be enough.

Because I cannot promise you immortality in the heavens. I can only promise you this:

*I will keep writing.*
