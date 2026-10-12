---
layout: post
title: "To Be Loved By a Writer"
date: 2026-10-08
---

# To Be Loved By a Writer

<style>
  .writer-track {
    display: flex;
    align-items: center;
    gap: 0.75rem; /* slightly tighter */
    max-width: 560px; /* slightly smaller container */
    padding: 0.6rem 0.75rem; /* reduced padding */
    margin: 1em 0;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 10px;
    background: rgba(16, 24, 40, 0.03);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  }

  .writer-cover {
    width: 56px;
    height: 56px;
    border-radius: 8px;
    background-color: #f0f0f0;
    background-position: center;
    background-size: cover;
    display: block;
    flex-shrink: 0;
  }

  .writer-track-meta {
    min-width: 0;
    flex: 1;
  }

  .writer-track-title {
    font-weight: 700;
    font-size: 0.95rem; /* slightly smaller title */
    line-height: 1.25;
  }

  .writer-track-artist {
    font-size: 0.8rem; /* slightly smaller artist */
    color: rgba(0, 0, 0, 0.7);
    line-height: 1.3;
  }

  /* Make the audio sit nicely inside the meta box */
  .writer-track-meta audio {
    width: 100%;
    margin-top: 0.5rem; /* reduced gap */
    display: block;
  }

  /* Small screens: make sure it still fits */
  @media (max-width: 420px) {
    .writer-track { max-width: 100%; padding: 0.5rem; }
    .writer-cover { width: 48px; height: 48px; }
    .writer-track-title { font-size: 0.9rem; }
    .writer-track-artist { font-size: 0.75rem; }
  }
</style>

<div class="writer-track">
  <div class="writer-cover" aria-label="Album art for Indecision" style="background-image: url('https://raw.githubusercontent.com/chanvalerie/chanvalerie/main/assets/ab67616d0000b2736a05d5befdde1b244f3fb4e6.jpeg');"></div>
  <div class="writer-track-meta">
    <div class="writer-track-title">Indecision</div>
    <div class="writer-track-artist">Rex Orange County ft. Daniel Caesar</div>

    <audio id="writer-audio" controls preload="none" data-src="https://raw.githubusercontent.com/chanvalerie/chanvalerie/main/assets/Rex.Orange.County.feat.Daniel.Caesar.-.Indecision.Official.Video.-.Rex.Orange.County.mp3">
      Your browser does not support the audio element.
    </audio>
  </div>
</div>

<script>
  (function () {
    const audio = document.getElementById('writer-audio');
    if (!audio) return;

    audio.volume = 0.9;

    const ensureSrc = () => {
      if (!audio.src || audio.src === window.location.href) {
        const ds = audio.dataset && audio.dataset.src;
        if (ds) {
          audio.src = ds;
        }
      }
    };

    const tryPlay = () => {
      ensureSrc();
      audio.play().catch(() => {
        // Silent fail if autoplay is blocked.
      });
    };

    tryPlay();

    const onFirstInteraction = () => {
      tryPlay();
      document.removeEventListener('pointerdown', onFirstInteraction);
      document.removeEventListener('keydown', onFirstInteraction);
      document.removeEventListener('touchstart', onFirstInteraction);
    };

    document.addEventListener('pointerdown', onFirstInteraction);
    document.addEventListener('keydown', onFirstInteraction);
    document.addEventListener('touchstart', onFirstInteraction);
  })();
</script>

&nbsp;

*To be loved by a writer is to be condemned to eternity — for as long as I have words, you will continue to exist between the lines of my poems and within the pages of my prose.*

You will never die; I have already made you immortal.

Not in the way religions promise heaven, nor in the way monuments pretend stone can resist time. You exist now in language, and language has always been humanity’s most beautiful refusal to accept death.

I write you the way historians write civilisations they are terrified will be forgotten. Thoroughly. Obsessively. With the desperate precision of someone cataloguing ruins before the last wall collapses.

You could disappear from photographs. Your footprints could be erased by rain. Years could pass over your name until no one remembers how it once sounded in the mouth of the person who loved you.

But it would not matter. I would still have the page.

That is the terrifying privilege of being loved by a writer: I do not need eternity to keep you alive; I only need words. Ink does not resurrect the body, but it can resurrect presence — the impression of someone in the world.

Science tells us that matter changes form. Nothing truly vanishes; it becomes something else. Ash becomes earth. Light travels long after its star has disappeared. Energy moves through the universe, making grief a kind of physics.

So I suppose writing is my version of physics.

You become language.

Your laughter becomes punctuation. Your silence becomes white space. Your eyes become imagery. Your existence becomes metaphor, and metaphor is a strange afterlife because it allows the dead to keep changing shapes.

I could write you into a poem tonight, and centuries from now someone could read it without knowing your face, your voice, or the years you existed. They would still encounter you. Not as history, but as presence.

*That is how I will betray death.*

*I will give you a thousand lives.*

In one poem, you will be the constellation I keep mistaking for a way home. In another, you will be the abandoned cathedral where every prayer I never said continues to echo. In my prose, you will be the small, ordinary cruelty that taught me what longing looks like.

And every time someone reads you, you will happen again. That is the closest thing to resurrection I know.

To be loved by a writer is to be condemned to eternity — not because the writer possesses some divine power over death, but because writers are incapable of letting the things that ruin them disappear.

*You may outlive your body. You may outlive your photograph. You may even outlive the memory of the people who knew you.*

But for as long as I have words, you will continue to exist.

Not exactly as you were, but something permanent. Something made entirely of language and therefore impossible to bury.

You will remain between the lines of my poems, inside the margins of my notebooks, beneath the fingerprints of every sentence that tried to explain why losing you felt like losing an entire unive[...]
