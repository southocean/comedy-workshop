/* Writing Craft - the principles this workshop scores scripts against.
   Rendered by craft/index.html. */
CW.CRAFT = [
  {
    id: "expectation",
    title: "A joke is a managed expectation",
    body: [
      "Nothing is funny in isolation. A punchline is only a punchline relative to a prediction the room was already making. So the unit of writing is not the line, it is the gap between what they expect and what arrives.",
      "This means the setup is the part you actually control. If you can steer the room into one confident, specific prediction, almost anything that violates it will get a laugh. If they are split three ways, nothing violates anything and the line just sits there being a sentence."
    ],
    example: {
      lines: [
        { tag: "setup", text: "One year ago today, I did my first ever stand-up gig." },
        { tag: "expects", text: "88% - a milestone story, he is about to tell us how far he has come." },
        { tag: "punch", text: "One year. Look at me now." },
        { tag: "gets", text: "A grown man in a banana suit at a free open mic." }
      ]
    },
    rule: "Before you write the punchline, write the sentence the room would finish for you."
  },
  {
    id: "concentration",
    title: "Concentration beats cleverness",
    body: [
      "Every setup produces a distribution, not a single expectation. Some of the room thinks one thing, some think another. The workshop records that distribution as percentages, because the number tells you whether the joke is even possible yet.",
      "Above 85% on one reading, you have a clean target. Around 60/40 you have two audiences and whichever one you subvert, the other half hears a non sequitur. Below that you do not have a setup, you have an opinion."
    ],
    table: [
      ["90%+", "Ideal. One thing to break, and breaking it surprises nearly everyone at once."],
      ["70-85%", "Workable. Expect a slightly ragged laugh - a chunk of the room was somewhere else."],
      ["50-70%", "Split room. Fix the setup, not the punchline."],
      ["<50%", "No dominant reading. There is nothing solid to push against."]
    ],
    rule: "If the laugh is soft, suspect the setup. The punchline is almost never the problem."
  },
  {
    id: "subversion",
    title: "Name the axis, or it is not a punchline",
    body: [
      "A subversion moves along an axis: from one thing, to another thing. Generosity to transaction. Critic to applicant. Ambition to decomposition. If you cannot write the two ends of that arrow in plain language, the line is not a punchline - it is a funny-sounding sentence, and it will die on stage while reading fine on paper.",
      "Naming the axis also tells you where the tags live. Tags run along the axis you already opened. That is why they need no subversion of their own and why an off-axis tag feels like a new joke starting badly."
    ],
    example: {
      lines: [
        { tag: "from", text: "Support the art form because the art form deserves support." },
        { tag: "to", text: "Support the art form so my failure becomes your good deed." },
        { tag: "axis", text: "generosity to transaction" }
      ]
    },
    rule: "Write the arrow before you polish the words. If you cannot draw it, cut the line."
  },
  {
    id: "tags",
    title: "Tags are compound interest",
    body: [
      "A tag is a second laugh bought with a setup you already paid for. It does not re-subvert - it escalates along the same axis, and the surprise is purely structural: the room had filed the joke as finished.",
      "Tags are also the cheapest runtime in comedy. A new joke costs a setup, a turn, and a landing. A tag costs one line. In a five-minute set that ratio decides whether you get four jokes or nine laughs.",
      "They decay. Three tags is usually the ceiling before the room starts hearing 'he has run out of material' instead of 'there is more'."
    ],
    example: {
      lines: [
        { tag: "punch", text: "Career earnings, before tax: twenty-one kroner." },
        { tag: "tag", text: "That is not per gig. That is the career." },
        { tag: "tag", text: "That is seven bottles of pant." }
      ]
    },
    rule: "Never leave a working punchline after one laugh. Ask what else is true on that axis."
  },
  {
    id: "misdirect",
    title: "The most predictable response is the best thing to refuse",
    body: [
      "When a topic has an obvious comedy take - modern art is stupid, airline food, dating apps - the room's prediction is enormously concentrated. That is not a reason to avoid the topic. That is a free 90% setup somebody else built for you.",
      "Take the other side, out loud. Saying 'I am not going to do the bit about how that is ridiculous' names their prediction and denies it in the same breath, which is faster and funnier than quietly doing something else."
    ],
    rule: "Find the joke the room is bracing for, then be visibly uninterested in it."
  },
  {
    id: "literal",
    title: "Follow the metaphor further than they will",
    body: [
      "Most comparisons get abandoned the moment they stop flattering the speaker. The laugh is usually one step past that point.",
      "'A banana peaks after everyone gives up on it' is a hopeful metaphor and the room will happily take it as one. Taking it literally - year two: brown; year three: somebody desperate finds me at the back of a cupboard - is the same fact pointed away from comfort."
    ],
    rule: "If a metaphor is making you look good, you stopped too early."
  },
  {
    id: "wear-it",
    title: "The strongest punchline is often the one you never say",
    body: [
      "Anything visible is doing work whether you use it or not. A costume, a prop, a limp, a bad haircut. If the room can see it and you have not addressed it, you are holding an unpaid tension you can spend later.",
      "The corollary is discipline: no glancing at it, no gesturing at it, no early acknowledgement. One look sells the answer for free."
    ],
    rule: "Let the room hold a question. Silence is a setup you do not have to write."
  },
  {
    id: "sincere",
    title: "Sincerity needs a puncture to survive",
    body: [
      "A five-minute set can carry exactly one genuinely sincere moment, and only if you have earned it. Even then, sincerity left standing reads as a plea. Sincerity you undercut yourself reads as conviction - the room concludes you meant it, because you were unwilling to milk it.",
      "So the message goes second-to-last, and a punchline goes after it on the same axis you have been using all set."
    ],
    example: {
      lines: [
        { tag: "sincere", text: "The value was never in the banana. It is in the room. You are the room." },
        { tag: "punch", text: "So support local comedy. Especially the bad local comedy. This is not charity, it is early stage, and I am pre-seed." }
      ]
    },
    rule: "Say the true thing once, plainly, then immediately prove you are not precious about it."
  },
  {
    id: "callback",
    title: "Callbacks are the cheapest ending you will ever write",
    body: [
      "A callback is not a repeat. It is a small deposit made early, on purpose, in a line whose real value is elsewhere. 'You are not an audience, you are donors' is a fine tag at 0:50 and a great closer at 4:40.",
      "Plant at least three, cash them inside the last thirty seconds, and the ending will feel designed even though nothing new happened. The room reads structure as confidence, and confidence as funnier."
    ],
    rule: "Write the ending first, then go back and plant what it needs."
  },
  {
    id: "rhyme",
    title: "Make the set rhyme with itself",
    body: [
      "If the opener turns compassion into self-interest, the closer should too. The audience will not consciously notice the repeated move - they will notice that the ending feels inevitable, which is the same feeling as satisfying.",
      "This is also the cheapest way to make five unrelated minutes feel like one thing: not a shared topic, a shared move."
    ],
    rule: "Whatever turn you made in the first minute, make it again at the end, bigger."
  },
  {
    id: "time",
    title: "Budget silence, not words",
    body: [
      "Five minutes is not five minutes of talking. At an open mic, a working set spends roughly a fifth of its runtime not talking - laughs you must not step on, and the pauses that make punchlines legible.",
      "So a five-minute set is about 550 spoken words, not 700. The runtime estimator in this workshop charges you for laughs and beats deliberately, because the fastest way to bomb at an open mic is to run long and get lit."
    ],
    table: [
      ["Speaking pace", "140-150 wpm is normal on stage. Nerves push it to 170."],
      ["Punchline laugh", "3-4s if it lands. Budget it or you will talk over it."],
      ["Tag laugh", "2-3s, decaying with each tag."],
      ["The big one", "Give the strongest beat a real pause before it. Usually 0.8s."]
    ],
    rule: "Write to 80% of your slot. The 20% is the laughter you are hoping for."
  },
  {
    id: "cuttable",
    title: "Mark what dies first, before you need to cut it",
    body: [
      "You will run long. Deciding what to cut while on stage, mid-adrenaline, is how good jokes get thrown away and weak ones survive by accident.",
      "So mark cuttable lines in the script and check the dependencies: a tag that plants a callback is not cuttable unless you also change the callback. This workshop marks those and the runtime recalculates with them off."
    ],
    rule: "A line is cuttable if nothing later in the set needs it. Check before you fall in love with it."
  }
];
