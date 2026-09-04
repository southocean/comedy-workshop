/* Writing Craft.
   Three layers:
     CW.CRAFT.principles - the distilled canon. Each carries a QA question,
                           which is the thing you actually run against a draft.
     CW.CRAFT.notes      - longer working essays on our own method.
     CW.CRAFT.toolkit    - named devices, as a lookup table.
     CW.CRAFT.sources    - where this came from. */

CW.CRAFT = {

/* ==================================================================== */
principles: [

/* ---- MECHANISM: why anything is funny at all ---- */
{
  id: "two-readings", group: "Mechanism",
  title: "One thing, two readings",
  body: [
    "A joke is a single element the audience can interpret two ways. The setup sells the first reading so confidently that nobody notices a second one exists. The punchline reveals the second and retroactively destroys the first.",
    "This is Greg Dean's model and it is the most useful thing in the field, because it turns a vague question - is this funny? - into a locatable one: what is the connector, and does it genuinely carry both meanings? If you cannot point at the specific word, image or assumption that flips, you do not have a joke. You have an observation that sounds like one."
  ],
  qa: "Point at the connector. What single thing means one thing in the setup and a different thing in the punch?",
  lineage: "Greg Dean, Step by Step to Stand-Up Comedy"
},
{
  id: "benign-violation", group: "Mechanism",
  title: "Something must be wrong, and it must be survivable",
  body: [
    "Laughter needs a violation - a norm broken, an expectation betrayed, a thing said that should not be said - and it needs that violation to be simultaneously okay. Only one of the two and you get nothing: no violation is a pleasant sentence, no permission is a gasp.",
    "The practical value is that when a joke dies you can diagnose which half failed. Polite silence means there was no violation. A held breath, a single loud laugh, a room going quiet and protective - that means the violation landed without the permission."
  ],
  qa: "Name the violation. Then name what makes it safe - distance, absurdity, who the target is, or your own stake in it.",
  lineage: "McGraw & Warren, benign violation theory; Veatch"
},
{
  id: "prediction", group: "Mechanism",
  title: "Surprise is measured against prediction, not novelty",
  body: [
    "Weird is not funny. A sentence nobody could have predicted is not surprising, it is random - the room has nothing to be wrong about. Surprise requires that they were already, confidently, wrong.",
    "So the writing question is never 'what is an unexpected thing to say here'. It is 'what were they about to think, and what is the most satisfying way to be wrong about it'."
  ],
  qa: "Write the sentence the room would have finished for you. If you cannot, there is no prediction to violate.",
  lineage: "Incongruity-resolution theory; standard across the literature"
},

/* ---- SETUP ---- */
{
  id: "concentrate", group: "The setup",
  title: "Concentrate the expectation before you break it",
  body: [
    "Every setup produces a distribution, not a single expectation. Some of the room thinks one thing, some think another. This workshop records that distribution as percentages, because the number tells you whether the joke is even possible yet.",
    "Above 85% on one reading you have a clean target. Around 60/40 you have two audiences, and whichever one you subvert the other half hears a non sequitur. Below that you do not have a setup, you have an opinion."
  ],
  table: [
    ["90%+", "Ideal. One thing to break, and breaking it surprises nearly everyone at once."],
    ["70-85%", "Workable. Expect a ragged laugh - a chunk of the room was somewhere else."],
    ["50-70%", "Split room. Fix the setup, not the punchline."],
    ["under 50%", "No dominant reading. Nothing solid to push against."]
  ],
  qa: "What percentage of the room is thinking the primary thing? If it is under 70%, the setup is the bug.",
  lineage: "Our own method, formalised"
},
{
  id: "specificity", group: "The setup",
  title: "Specificity is load-bearing, not decoration",
  body: [
    "Kevin. Kirk. Belinda. Reggie. Butter noodles. Daffodils. Soresi's hour is built out of proper nouns, and they are not colour - they are doing two jobs at once.",
    "First, a specific setup produces a specific prediction, and specific predictions are easier to break cleanly than vague ones. Second, specificity is evidence. Detail makes the room believe the thing happened, and belief raises the stake of the violation. 'My mum was upset' is a claim. 'My mum brought daffodils because she remembered my dad is allergic' is a conviction.",
    "The generic version of a joke is almost never the funnier version. It is just the version you wrote first."
  ],
  qa: "Replace every category noun with a proper noun or a brand. If the joke gets worse, you had the wrong detail, not too much detail.",
  lineage: "Universal; most visible in Soresi, Birbiglia, Mulaney"
},
{
  id: "true-misdirect", group: "The setup",
  title: "Misdirect with the truth",
  body: [
    "The strongest setup is not a lie. It is a completely true statement whose most natural reading happens to be the wrong one. You are not deceiving the room, you are letting them deceive themselves, which they will forgive and even enjoy.",
    "Lies get caught. A room can feel a constructed premise, and the moment they suspect the setup was engineered backwards from the punchline, they stop being surprised and start being impressed - which is a much quieter sound."
  ],
  qa: "Is every word of the setup true? If you had to invent a detail to make the punch work, the punch is not earned yet.",
  lineage: "Vorhaus; general practice"
},
{
  id: "refuse-obvious", group: "The setup",
  title: "The obvious take is a free setup - refuse it out loud",
  body: [
    "Some topics come with a comedy response pre-installed. Modern art is a scam. Airline food. Dating apps. When the predictable take is that strong, the room's expectation is enormously concentrated, and somebody else built that setup for you at no cost.",
    "Do not quietly do something else. Name their prediction and deny it in the same breath. Soresi does this constantly - he tells you what he is not going to say, and the refusal itself is the turn. It is faster than misdirection and it flatters the room by acknowledging they were ahead of you."
  ],
  qa: "What joke is the room braced for? Can you say out loud that you are not doing it?",
  lineage: "Gianmarco Soresi; also Jeselnik, Norm Macdonald"
},

/* ---- THE PUNCH ---- */
{
  id: "punch-word-last", group: "The punch",
  title: "The word that flips it goes last",
  body: [
    "The laugh fires on the word that reveals the second reading. Anything after that word is the audience waiting for you to finish so they can react, and the wait shrinks the laugh.",
    "This is the single most mechanical rule in comedy and the one most often broken by writers, because written sentences want to end on rhythm and spoken jokes want to end on information."
  ],
  example: { lines: [
    { tag: "weak", text: "It's a diagnosis, this costume, that's what it is." },
    { tag: "better", text: "I didn't rent this. I was assigned it." }
  ]},
  qa: "Read the punch aloud. Is the flipping word the last word? If not, restructure - do not just move it.",
  lineage: "Universal craft rule"
},
{
  id: "compress", group: "The punch",
  title: "Every unnecessary word is time for them to get ahead of you",
  body: [
    "Comedy is compression. This is not an aesthetic preference - a joke is a race between your reveal and the audience's own inference, and each superfluous word gives them another beat to solve it themselves.",
    "Seinfeld's whole stated method is editing: cut, cut, then cut the connective tissue you thought was load-bearing. Most punchlines improve by 20% of their word count."
  ],
  qa: "Delete a third of the words. Which deletions actually broke it? Restore only those.",
  lineage: "Jerry Seinfeld; standard"
},
{
  id: "past-comfortable", group: "The punch",
  title: "Go one step past where a reasonable person stops",
  body: [
    "Most comparisons get abandoned the moment they stop flattering the speaker. The laugh is usually one step past that point.",
    "'A banana peaks after everyone gives up on it' is a hopeful metaphor and the room will happily accept it as one. Taking it literally - year two, brown; year three, someone desperate finds me at the back of a cupboard - is the same fact pointed away from comfort. You did not invent anything. You just refused to stop.",
    "This is also where the material that is actually yours lives. Everyone stops at the same place. Past it, the field is empty."
  ],
  qa: "If a metaphor is making you look good, you stopped too early. Where does it go if you keep following it?",
  lineage: "Vorhaus, comedy = truth + pain; UCB heightening"
},
{
  id: "act-out", group: "The punch",
  title: "Show it. Do not report it.",
  body: [
    "An act-out beats a description almost every time. Soresi's biggest physical laugh in an hour of very well written jokes is a wordless scene of a man finding a body in a dumpster - almost no text, enormous laugh.",
    "Reported speech is the flattest possible delivery of a funny thing someone said. Give the other person a voice and a posture. Two voices in a bit is a scene; one voice is a report.",
    "A set with no act-outs in it is a set the audience listens to rather than watches, and listening is more work."
  ],
  qa: "Count the act-outs. If a five-minute set has none, you are reading an essay at people.",
  lineage: "Greg Dean; universal stage practice"
},
{
  id: "vary-shape", group: "The punch",
  title: "Vary the shape of the punchline, not only its content",
  body: [
    "A room learns your cadence far faster than it learns your subject matter. If four punchlines in a row resolve as an antithesis - 'this isn't X, it's Y' - then by the third one the audience can feel the landing coming even though they cannot predict the words. Surprise dies at the structural level while the writing still looks fine on the page.",
    "This is the most common failure in material that reads well and plays flat, and it is the specific tell of machine-generated comedy: the ideas vary, the syntax does not. Antithesis, tricolon, and the tidy reversal are all real devices, and all of them are ruined by repetition.",
    "Audit the shapes, not the jokes. Then deliberately build some punchlines out of the wrong material: a plain flat statement, a piece of dialogue, a number, a physical move, a single word, an unfinished sentence."
  ],
  example: { lines: [
    { tag: "shape", text: "not X - Y  ....  This isn't a costume, it's a diagnosis." },
    { tag: "same", text: "not X - Y  ....  That's not ridiculous, that's a business model." },
    { tag: "same", text: "not X - Y  ....  I'm not saying it worked, I'm saying it scaled." },
    { tag: "fix", text: "Break the run. Make one of them a flat sentence, one an act-out, one a number." }
  ]},
  qa: "Write out only the grammatical shape of each punchline in order. Any shape appearing twice in ninety seconds is a problem.",
  lineage: "Ours, from QA on this repo's own drafts"
},

/* ---- STRUCTURE ---- */
{
  id: "tags", group: "Structure",
  title: "Tags are compound interest",
  body: [
    "A tag is a second laugh bought with a setup you have already paid for. It does not re-subvert; it escalates along the axis the punchline opened, and the surprise is structural - the room had filed the joke as finished.",
    "Tags are the cheapest runtime in comedy. A new joke costs a setup, a turn and a landing. A tag costs one line. In a five-minute set that ratio decides whether you get four jokes or nine laughs.",
    "They decay. Three is usually the ceiling before the room hears 'he has run out of material' instead of 'there is more'."
  ],
  qa: "Every punchline that works: what else is true on that axis? Never leave a working laugh after one hit.",
  lineage: "Universal; our own method"
},
{
  id: "heighten", group: "Structure",
  title: "Heighten by asking what else must be true",
  body: [
    "The UCB question - if this unusual thing is true, then what else is true? - is the engine for tags, runs and act-two of any bit. You are not looking for another joke about the topic. You are looking for the next consequence of the one absurd premise you have already established.",
    "This is why a run feels inevitable rather than assembled. Each beat is derived from the last, so the room is being led rather than handed a list."
  ],
  qa: "Is each beat in the run derived from the previous one, or are they siblings? Siblings feel like a list. Derivatives feel like an argument.",
  lineage: "UCB, game of the scene"
},
{
  id: "handle", group: "Structure",
  title: "Plant a handle, cash it late",
  body: [
    "A callback needs something to grab: a distinctive word, image or number that the room can recognise instantly when it returns. Vague jokes cannot be called back, because there is nothing to recognise.",
    "The plant should be a functioning joke on its own - nobody should be able to tell it was a deposit. Its real value is thirty seconds from the end, when three of them land in a row and the ending feels designed even though no new material has appeared.",
    "Soresi runs one across an entire hour: a phrase in the title, planted as a friend's tattoo, cashed as his own tattoo, and cashed again as the reason the special exists at all."
  ],
  qa: "Name your handles. Are they specific enough to survive four minutes? Write the ending first, then go back and plant what it needs.",
  lineage: "Standard; Soresi as the worked example"
},
{
  id: "rhyme", group: "Structure",
  title: "Make the set rhyme with itself",
  body: [
    "If the opener turns compassion into self-interest, the closer should turn compassion into self-interest, bigger. The audience will not consciously register the repeated move. They will register that the ending feels inevitable, which is the same sensation as satisfying.",
    "This is the cheapest way to make five unrelated minutes feel like one thing: not a shared topic, a shared move."
  ],
  qa: "What turn did you make in the first ninety seconds? Are you making it again at the end?",
  lineage: "Ours"
},
{
  id: "budget-silence", group: "Structure",
  title: "Budget silence, not words",
  body: [
    "Five minutes is not five minutes of talking. A working set spends roughly a fifth of its runtime not talking - laughs you must not step on, and the pauses that make punchlines legible.",
    "So a five-minute set is about 550 spoken words, not 700. Running long and getting lit is the most avoidable way to lose a room."
  ],
  table: [
    ["Speaking pace", "140-150 wpm on stage. Nerves push it to 170."],
    ["Punchline laugh", "3-4s if it lands. Budget it or you will talk over it."],
    ["Tag laugh", "2-3s, decaying with each tag."],
    ["The big one", "Give the strongest beat a real pause before it - usually 0.8s."]
  ],
  qa: "Does the estimate include laughter and pauses? Write to 80% of the slot.",
  lineage: "Ours"
},

/* ---- PERMISSION & VOICE ---- */
{
  id: "attitude", group: "Permission & voice",
  title: "Attitude is the through-line, not topic",
  body: [
    "A set coheres because of a consistent stance, not a consistent subject. Soresi moves from divorce to Judaism to suicide to open-heart surgery in one hour and it reads as one thing, because the attitude never changes: everything sincere gets undercut within a line, and he is always the most pathetic person in his own story.",
    "Topic-based structure is the beginner's instinct and it produces sets that feel like folders. Attitude-based structure lets you go anywhere."
  ],
  qa: "State your attitude in one sentence, without naming a topic. Does every bit express it?",
  lineage: "Standard persona/POV teaching"
},
{
  id: "own-stake", group: "Permission & voice",
  title: "Pay for the violation with your own stake",
  body: [
    "The darkest material in Soresi's hour is about his own family, his own body, his own failure - and that is what buys the permission for it. The room grants enormous licence to someone who is visibly the one being damaged.",
    "This is the practical form of the benign half of a benign violation. You do not make a hard joke safe by softening it. You make it safe by being inside it."
  ],
  qa: "Who pays for this joke? If it is not you, are you sure the room will let you spend it?",
  lineage: "McGraw & Warren applied; general practice"
},
{
  id: "pre-empt", group: "Permission & voice",
  title: "Name the objection before the room does",
  body: [
    "When the audience is forming a criticism, they have stopped listening. Saying it for them collapses the objection and converts a defensive room into a complicit one.",
    "Soresi does it structurally: before a joke about his girlfriend he explains, at length, the thing male comedians do wrong with jokes about their girlfriends. Then he does it deliberately. The pre-empt is not an apology - it is a setup, and the joke it enables is bigger than the one it protected."
  ],
  qa: "What is the room's objection to this bit? Can the objection itself be the setup?",
  lineage: "Soresi; widely used"
},
{
  id: "say-its-safe", group: "Permission & voice",
  title: "When you go dark, tell the room it is allowed",
  body: [
    "The permission half of a benign violation can be supplied explicitly. A single line of framing - acknowledging the discomfort, or noting who is not in the room to be hurt - visibly releases an audience that was holding its breath.",
    "It also buys you a longer run than you would otherwise get. Soresi counts his own dark run out loud and invites the room to treat twelve jokes as one joke, which is both a laugh and a licence."
  ],
  qa: "On the darkest beat: have you given the room an explicit reason it is okay to laugh?",
  lineage: "Soresi; benign violation theory"
},

/* ---- TRUTH & FINISH ---- */
{
  id: "truth-pain", group: "Truth & finish",
  title: "Truth plus pain",
  body: [
    "Vorhaus's formula: comedy is truth and pain. The truth is the part the audience recognises; the pain is what gives them permission to laugh rather than nod.",
    "If nothing is at stake, nothing is funny - observations without cost produce agreement, not laughter. The most reliable diagnostic for a bit that is going nowhere is that it costs the performer nothing to say."
  ],
  qa: "What does this bit cost you? If the answer is nothing, that is why it is getting nods instead of laughs.",
  lineage: "John Vorhaus, The Comic Toolbox"
},
{
  id: "puncture", group: "Truth & finish",
  title: "Sincerity needs a puncture",
  body: [
    "A five-minute set can carry exactly one genuinely sincere moment, and only if it has been earned. Even then, sincerity left standing reads as a plea. Sincerity you undercut yourself reads as conviction - the room concludes you meant it precisely because you were unwilling to milk it.",
    "So the message goes second-to-last and a punchline goes after it. The puncture should be petty rather than clever; a small, mean, specific thing lands better than a witty one, because wit re-establishes the distance the sincerity just closed."
  ],
  qa: "Is there anything after your sincere beat? Is it petty enough?",
  lineage: "Ours; visible throughout Soresi"
},
{
  id: "land-on-one-word", group: "Truth & finish",
  title: "Land it on one word",
  body: [
    "The best closers are a single pivot that is simultaneously the biggest laugh and the emotional thesis of the whole hour. Soresi ends sixty-six minutes of family damage on a homophone that is also the entire point of the show, and it lands because everything before it built the second meaning.",
    "You cannot write this first. You find it by noticing that two of your threads already share a word."
  ],
  qa: "Do any two of your threads share a word or image? That is your ending.",
  lineage: "Soresi, Thief of Joy"
},
{
  id: "cut-list", group: "Truth & finish",
  title: "Decide what dies before you need to kill it",
  body: [
    "You will run long. Deciding what to cut on stage, mid-adrenaline, is how good jokes get thrown away and weak ones survive by accident.",
    "Mark cuttable lines in the script and check dependencies: a tag that plants a callback is not cuttable unless you also change the callback."
  ],
  qa: "Is every line marked cuttable actually free? Check what later beats depend on it.",
  lineage: "Ours"
},
{
  id: "not-written-yet", group: "Truth & finish",
  title: "It is not written until it has been wrong in front of people",
  body: [
    "Everything above is a way of making better first drafts. None of it substitutes for the only real instrument, which is a room. Rock, Seinfeld and Chappelle all work the same way - small rooms, many attempts, ruthless cutting of anything that got a nod instead of a laugh.",
    "The value of a written analysis is that it tells you what to change when the room says no. It cannot tell you whether the room will say no."
  ],
  qa: "Has this been said out loud to strangers? Until then every percentage on this page is a hypothesis.",
  lineage: "Seinfeld (Comedian, 2002); Rock; general"
}
],

/* ==================================================================== */
notes: [
  {
    id: "n-expectation", title: "A joke is a managed expectation",
    body: [
      "Nothing is funny in isolation. A punchline is only a punchline relative to a prediction the room was already making. So the unit of writing is not the line, it is the gap between what they expect and what arrives.",
      "This means the setup is the part you actually control. If you can steer the room into one confident, specific prediction, almost anything that violates it will get a laugh. If they are split three ways, nothing violates anything and the line just sits there being a sentence."
    ],
    example: { lines: [
      { tag: "setup", text: "One year ago today, I did my first ever stand-up gig." },
      { tag: "expects", text: "88% - a milestone story, he is about to tell us how far he has come." },
      { tag: "punch", text: "One year. Look at me now." },
      { tag: "gets", text: "A grown man in a banana suit at a free open mic." }
    ]},
    rule: "Before you write the punchline, write the sentence the room would finish for you."
  },
  {
    id: "n-wear-it", title: "The strongest punchline is often the one you never say",
    body: [
      "Anything visible is doing work whether you use it or not. A costume, a prop, a limp, a bad haircut. If the room can see it and you have not addressed it, you are holding unpaid tension you can spend later.",
      "The corollary is discipline: no glancing at it, no gesturing at it, no early acknowledgement. One look sells the answer for free."
    ],
    rule: "Let the room hold a question. Silence is a setup you do not have to write."
  },
  {
    id: "n-tags-axis", title: "Tags carry no subversion, and that is the point",
    body: [
      "A tag rides the axis the punchline already opened. It needs no second turn, which is exactly why it is cheap and why an off-axis tag feels like a new joke starting badly.",
      "In this workshop's data model, tags deliberately have no subversion field. If you find yourself wanting to write one, you have written a punchline and it needs its own setup."
    ],
    rule: "If your tag needs a new subversion, it is not a tag."
  },
  {
    id: "n-axis", title: "Name the axis, or it is not a punchline",
    body: [
      "A subversion moves along an axis: from one thing, to another thing. Generosity to transaction. Critic to applicant. Ambition to decomposition. If you cannot write the two ends of that arrow in plain language, the line is not a punchline - it is a funny-sounding sentence, and it will die on stage while reading fine on paper."
    ],
    rule: "Write the arrow before you polish the words. If you cannot draw it, cut the line."
  }
],

/* ==================================================================== */
toolkit: [
  {
    group: "Dikkers' eleven funny filters",
    blurb: "Scott Dikkers' claim is that essentially every joke runs through at least one of these. Useful less as theory than as a generator: take a flat premise and push it through each filter in turn.",
    items: [
      ["Irony", "The opposite of what is expected or appropriate; small made large, large made small."],
      ["Character", "A established personality behaving exactly, or catastrophically, in character."],
      ["Shock", "Content that jolts - taboo, obscenity, the unsayable said plainly."],
      ["Hyperbole", "Exaggeration pushed to the absurd, then held there seriously."],
      ["Wordplay", "Puns, double meanings, invented words. Garnish, rarely the meal."],
      ["Reference", "Shared cultural knowledge the room recognises instantly."],
      ["Madcap", "Non sequitur, silliness, physical chaos with no logical spine."],
      ["Parody", "Mimicking the form and conventions of an existing thing."],
      ["Analogy", "Mapping one domain onto another so the hidden shape shows."],
      ["Misplaced focus", "The right reaction to the wrong detail, or the wrong thing in the right frame."],
      ["Meta-humour", "Commenting on the joke, the form, or the fact that you are telling one."]
    ]
  },
  {
    group: "Joke mechanics",
    blurb: "The parts, named.",
    items: [
      ["Connector", "The one element carrying both readings. Greg Dean's term; the thing the joke pivots on."],
      ["Target assumption", "The interpretation the setup installs, so the punch can destroy it."],
      ["Reinterpretation", "The second reading the punchline reveals."],
      ["Tag", "An extra laugh on the same axis, no new setup required."],
      ["Act-out", "Performing the scene rather than reporting it. Voices, posture, physicality."],
      ["Callback", "Reactivating an earlier, specific handle late in the set."],
      ["Run", "A sequence of beats derived from one premise by heightening."],
      ["Rule of three", "Two items establish a pattern, the third breaks it. The third is where the specific goes."],
      ["Clash of context", "A forced union of incompatibles - Vorhaus. Lunar golf course."],
      ["Pre-empt", "Naming the audience's objection and using it as the setup."],
      ["Saver", "A prepared line for when a joke dies. Being visibly unbothered is itself the joke."]
    ]
  }
],

/* ==================================================================== */
sources: [
  ["Greg Dean", "Step by Step to Stand-Up Comedy", "The setup/punch mechanism: connector, target assumption, reinterpretation. The most rigorous joke anatomy in print."],
  ["Scott Dikkers", "How to Write Funny (The Onion)", "The eleven funny filters, developed for a Second City curriculum. Best used as a generator."],
  ["John Vorhaus", "The Comic Toolbox", "Comedy = truth + pain. Clash of context, the law of comic opposites."],
  ["McGraw & Warren", "Benign violation theory", "Why anything is funny at all: a violation that is simultaneously benign. Builds on Veatch and on incongruity-resolution."],
  ["UCB", "Game of the scene", "First unusual thing, then heightening: if this is true, what else is true?"],
  ["Jerry Seinfeld", "Comedian (2002), interviews", "Editing as the whole craft. Build small things under one bigger thing."],
  ["Gianmarco Soresi", "Thief of Joy", "Worked example for pre-empting objections, hour-length callbacks, act-outs, and undercutting sincerity. Analysed in Case Studies."]
]

};
