const categories = {
    life: [
      "What is the meaning of life to you?",
      "How do you define happiness?",
      "What advice would you give to your younger self?",
      "If you could live in any era of history, which one would you choose and why?",
      "What do you think happens after we die?",
      "If you could have dinner with any three people, dead or alive, who would they be?",
      "What motivates you to get out of bed in the morning?",
      "If you could travel anywhere in the world, where would you go and why?",
      "What do you believe is the key to a successful and fulfilling life?",
      "How do you want to be remembered after you're gone?"
    ],
  
    "take-three-nouns": [
      "The sun, a hat, and a beach towel",
      "A book, a cozy chair, and a warm cup of tea",
      "A bicycle, a helmet, and a scenic trail",
      "A paintbrush, a canvas, and a color palette",
      "A skateboard, a park, and a group of friends",
      "A piano, a music sheet, and a quiet room",
      "A tent, a campfire, and a starlit sky",
      "A yoga mat, a peaceful corner, and a meditation playlist",
      "A cooking pot, a sharp knife, and a basket of fresh produce",
      "A sketchbook, a pencil, and a source of inspiration"
    ],
  
    random: [
      "What if people could teleport, but only to places they've been before?",
      "How would society evolve if everyone had photographic memory?",
      "Can you imagine a world where animals could communicate with humans?",
      "What if mirrors showed glimpses of alternate realities?",
      "How would life change if humans could photosynthesize like plants?",
      "What if every object had a unique, sentient consciousness?",
      "How would society function if there were no concept of time?",
      "Can you describe a world where music has tangible, physical effects?",
      "What happens when people gain the ability to manipulate elements with their minds?",
      "How would history differ if certain mythical creatures were real?"
    ]
  };
  
  const categorySelect = document.getElementById("category-select");
  const promptBtn = document.getElementById("prompt-btn");
  
  categorySelect.addEventListener("change", () => {
    promptBtn.disabled = false;
  });
  
  promptBtn.addEventListener("click", () => {
    const category = categorySelect.value;
    if (!category) {
      alert("Please select a category");
      return;
    }
  
    const prompts = categories[category];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    document.getElementById("prompt").textContent = randomPrompt;
  });