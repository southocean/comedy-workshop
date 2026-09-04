/* Case study - Gianmarco Soresi, "Thief of Joy" (2025, 66 min).
   Source: youtube.com/watch?v=sB9eWtzTOq0

   COPYRIGHT: this is someone else's act. What is stored here is ANALYSIS.
   Quoted beats are short and present only where a specific craft point is
   being made about them. The full transcript is deliberately not in this repo.
   The value is the mark-up, not the text. */

CW.registerStudy({
  id: "soresi",
  comedian: "Gianmarco Soresi",
  title: "Gianmarco Soresi - Thief of Joy",
  source: "2025 special, 66 minutes, 44 premise-segments, ~9,200 words",
  status: "analysed",
  why:
    "An hour that goes from divorce to Judaism to a twelve-joke suicide run to open-heart surgery, and " +
    "reads as one thing the whole way. The cohesion is not topical - it is a single unchanging attitude, " +
    "applied without exception. He is always the most pathetic person in his own story, and every sincere " +
    "beat gets punctured inside one line. Worth studying because almost nothing here is a clever line; " +
    "it is nearly all structure.",

  watchFor: [
    "He implicates the room in the first fifteen seconds, turning a private premise into a shared one.",
    "He pre-empts objections and then uses the pre-empt as the setup for a bigger joke than the one it protected.",
    "Three handles run the full hour and all three are cashed in the last ten minutes.",
    "The biggest physical laugh in the hour has almost no words in it.",
    "Nothing sincere survives more than one line. Including, especially, the ending."
  ],

  /* Hour-level structure, no quoting required. */
  architecture: {
    shape: [
      ["00 - 12 min", "Family", "Divorce, both parents' dating lives, step-parents. Establishes the attitude and the damage before asking for anything."],
      ["12 - 20 min", "Identity", "Jewish material, religion-as-friendship-scheme, theatre kid. Widens from family to self."],
      ["20 - 28 min", "Career", "Extra work, the yoga-teacher mother, Little Shop of Horrors. Plants the theatre thread that pays off in the final line."],
      ["28 - 38 min", "Sexuality", "The straggot bit, conversion-camp inversion, and the long Straight Guy Steve narrative - the first-half centrepiece."],
      ["38 - 46 min", "Mortality", "The suicide run. Placed exactly where the room trusts him enough to take it."],
      ["46 - 58 min", "The relationship", "Therapists, the L tattoo, night terrors, kids, egg freezing. The tattoo bit reveals the special itself is the compromise."],
      ["58 - 66 min", "The father's heart attack", "Long-form closer. All threads converge."]
    ],
    threads: [
      { handle: "\"Comparison is the thief of joy\"",
        planted: "~25 min, as a friend's tattoo",
        cashed: "The L tattoo bit, then again as the title of the special you are watching",
        note: "The strongest structural move in the hour. The phrase is the title, so it is planted before you arrive - and the payoff reframes the entire special as a thing he made to avoid keeping a promise." },
      { handle: "Units of measurement",
        planted: "The 'legs for days' bit - feet, hands, the centimetre",
        cashed: "The fertility doctor says the side effects are like 'PMS times ten'",
        note: "A pure structural callback across ~25 minutes. The second laugh costs one clause because the first bit already did the work." },
      { handle: "\"Illegal immigrant\"",
        planted: "An entire bit about being told to say 'undocumented' and losing the laugh",
        cashed: "The gold-digger line a few minutes later",
        note: "Unusual direction: he pre-explains the joke he is about to tell, so when it arrives the room is complicit rather than judging. The pre-empt is the setup." },
      { handle: "Theatre / auditioning",
        planted: "Threaded from ~20 min onward",
        cashed: "The last line of the hour",
        note: "The closer only works because this thread has been running for forty minutes underneath material that appeared to be about something else." }
    ]
  },

  targetSeconds: null,

  versions: [{
    id: "analysis",
    label: "Annotated excerpts",
    date: "2026-09-04",
    notes:
      "Eight segments out of forty-four, chosen because each demonstrates a different principle cleanly. " +
      "Quotes are short and analytical - the full transcript is not stored here. Timings are estimates " +
      "from word count, not from the recording.",
    segments: [

      {
        id: "s-open",
        title: "01 - Cold open",
        intent: "Convert a private premise into a room premise before anyone can decide it is not about them.",
        beats: [
          { id: "so-1", role: "setup",
            text: "I come from a [bleep] up family.",
            expectations: [
              { label: "A personal confessional bit is starting - his family, not ours.", pct: 86 },
              { label: "He will make it universal.", pct: 11 },
              { label: "A dark turn immediately.", pct: 3 }
            ],
            note: "Deliberately the most generic opening premise available. Every comedian has this bit. The genericness is what makes the next line work." },

          { id: "so-2", role: "punch", laugh: 3,
            text: "And I know that doesn't make me special in this room.",
            subversion: {
              from: "He is telling us about his family.",
              to: "He is telling us about ours, and has pre-emptively refused the sympathy.",
              axis: "confession to accusation",
              mechanism: "Turn the premise on the audience in the second sentence. The room is now a character in the bit."
            },
            qa: ["refuse-obvious", "prediction"] },

          { id: "so-3", role: "punch", laugh: 4,
            text: "People from healthy families, they're out there laughing with their friends. But no, not you. You needed a professional.",
            subversion: {
              from: "The audience are here for entertainment.",
              to: "The audience are here because they have no one.",
              axis: "customer to patient",
              mechanism: "Reframe the transaction itself. He is insulting them for having bought a ticket, which is a violation they are structurally unable to deny."
            },
            note: "Fifteen seconds in and he has established the attitude for the whole hour: nobody in the building gets out clean, including him.",
            qa: ["own-stake", "attitude"] }
        ]
      },

      {
        id: "s-kevin",
        title: "02 - Kevin's house",
        intent: "Show the damage instead of claiming it, using someone else's normal as the measuring stick.",
        beats: [
          { id: "sk-1", role: "setup",
            text: "There's a moment where you realize everything's not quite right. And for me, it was seventh grade. I was at my friend Kevin's house for a sleepover.",
            expectations: [
              { label: "Something bad is about to happen at Kevin's house.", pct: 79 },
              { label: "Something bad happened at his own house and Kevin's is the contrast.", pct: 17 }
            ],
            note: "Kevin. Not 'my friend'. The name costs one syllable and buys the whole scene its credibility." ,
            qa: ["specificity"] },

          { id: "sk-2", role: "actout", laugh: 4,
            text: "[three voices: Kevin's dad, Kevin's mom, then Kevin] A parental disagreement about a film, conducted entirely reasonably, ending with Kevin apologising to him for having witnessed it.",
            subversion: {
              from: "We are about to see a dysfunctional family.",
              to: "We are watching an entirely functional one, through the eyes of a child who cannot parse it.",
              axis: "expected dysfunction to unbearable normality"
            },
            note: "Three distinct character voices in about twenty seconds. He never describes the family - he performs them, and the joke is carried by Kevin's apology, which only lands because the two parents were played straight.",
            qa: ["act-out", "true-misdirect"] },

          { id: "sk-3", role: "tag", laugh: 3,
            text: "That was the healthiest disagreement I ever heard in my life.",
            note: "The line that tells you what you just watched. Placed after the act-out, never before it - if he frames it first, the scene becomes an illustration of a thesis instead of a discovery." }
        ]
      },

      {
        id: "s-36th",
        title: "03 - The 36th floor",
        intent: "Answer the objection to the entire first act of the show.",
        beats: [
          { id: "s3-1", role: "setup",
            text: "A lot of people think that certainly by 36, you should stop blaming all your problems on your parents.",
            expectations: [
              { label: "He is going to defend himself, or concede.", pct: 88 }
            ],
            note: "He states the audience's objection more fairly than they would have. That fairness is what makes the rebuttal feel earned rather than defensive.",
            qa: ["pre-empt"] },

          { id: "s3-2", role: "punch", laugh: 4.5,
            text: "If you were in a building with a [bleep] up foundation, would you feel safer on the 36th floor?",
            subversion: {
              from: "Time heals; distance from the damage means safety.",
              to: "Time compounds; distance from the foundation means height, and height is worse.",
              axis: "recovery to accumulation",
              mechanism: "An analogy that uses his own age as the load-bearing number. The '36' in the objection and the '36' in the answer are the same 36."
            },
            note: "Textbook analogy filter. The joke is not the wording, it is that the metaphor is structurally exact - which is why it gets applause rather than a laugh.",
            qa: ["two-readings", "pre-empt"] }
        ]
      },

      {
        id: "s-women",
        title: "09 - 'Let's just call her women'",
        intent: "Spend ninety seconds building the objection, then commit the exact crime described.",
        beats: [
          { id: "sw-1", role: "setup",
            text: "What happens with a lot of male comedians is they'll notice something about their girlfriend, and then on stage they act like that trait applies to the entire gender.",
            expectations: [
              { label: "He is distancing himself - his bit will be respectful.", pct: 84 },
              { label: "He is setting up to do it anyway.", pct: 16 }
            ],
            note: "Delivered completely sincerely and at length. The sincerity is the setup; if he winks here the punch has nothing to violate.",
            qa: ["pre-empt", "true-misdirect"] },

          { id: "sw-2", role: "punch", laugh: 4.5,
            text: "I don't want to use her real name, so let's just call her women.",
            subversion: {
              from: "A disclaimer protecting the audience from a lazy generalisation.",
              to: "The lazy generalisation, formalised, named, and adopted as policy.",
              axis: "apology to constitution",
              mechanism: "Do the thing you just condemned, immediately, and treat it as a courtesy."
            },
            note: "The critical structural point: the pre-empt did not protect a joke, it MADE a bigger one. The disclaimer is the setup. Compare a version without the ninety-second build - the punch is nothing.",
            qa: ["pre-empt", "refuse-obvious"] }
        ]
      },

      {
        id: "s-suicide",
        title: "26 - The suicide run",
        intent: "Manage permission explicitly so a twelve-joke run on the least benign topic available can survive.",
        beats: [
          { id: "ss-1", role: "oneliner", laugh: 4,
            text: "You ever try talking to a friend out of killing themselves and realize you don't have any good arguments?",
            note: "Opens the darkest run in the hour with his own inadequacy rather than the friend's condition. He is the failure in the sentence, which is what buys the next four minutes.",
            qa: ["own-stake", "truth-pain"] },

          { id: "ss-2", role: "punch", laugh: 3,
            text: "Some of you brought them here tonight. Stay strong.",
            subversion: {
              from: "A general remark about a friend.",
              to: "A direct address to specific people in this room, right now.",
              axis: "anecdote to headcount"
            } },

          { id: "ss-3", role: "sincere",
            text: "Some of these jokes are going to be disrespectful to people who have actually taken their own lives. But none of them are here tonight. So I want you to just enjoy it.",
            note: "This is permission management, said out loud. He names the violation, then supplies the benign half explicitly - the harmed party is definitionally absent. The room visibly releases. Nothing about the jokes changed; the framing did all of it.",
            qa: ["say-its-safe", "benign-violation"] },

          { id: "ss-4", role: "punch", laugh: 4,
            text: "If you are struggling with suicidal thoughts, update your voicemail.",
            subversion: {
              from: "A public-service framing is arriving to make this okay.",
              to: "A public-service framing arrives and is about his inconvenience.",
              axis: "care to admin",
              mechanism: "Adopt the register of a helpline announcement and fill it with the wrong content."
            } },

          { id: "ss-5", role: "tag", laugh: 4, pauseBefore: 0.4,
            text: "That was like twelve suicide jokes in a row. If it's too much for you, try to think of it as one mass suicide joke.",
            note: "Meta-humour used as a pressure valve. He counts the run for them, which both acknowledges the discomfort and reframes it as a single unit - a laugh and a licence in the same line.",
            qa: ["say-its-safe", "vary-shape"] }
        ]
      },

      {
        id: "s-thief",
        title: "22 - Comparison is the thief of joy",
        intent: "Plant the title as a throwaway so it can be cashed twice, thirty minutes later.",
        beats: [
          { id: "st-1", role: "setup",
            text: "My actor friend, he's kind of intense. He got it tattooed on his arm. One line. Comparison is the thief of joy, just in case he forgets.",
            expectations: [
              { label: "A joke about the friend's earnestness.", pct: 81 },
              { label: "A joke about tattoos.", pct: 14 }
            ] },

          { id: "st-2", role: "punch", laugh: 4,
            text: "And I'm really thinking about getting the same tattoo, but bigger.",
            subversion: {
              from: "He is mocking the friend for needing the reminder.",
              to: "He is competing with the friend using the anti-competition slogan itself.",
              axis: "observer to competitor",
              mechanism: "Enact the vice the maxim warns against, using the maxim as the vehicle."
            },
            note: "Perfect handle: short, quotable, and it is the name of the special, so it is already in the room's head before he says it.",
            qa: ["handle", "land-on-one-word"] },

          { id: "st-3", role: "callback", laugh: 4,
            text: "[thirty minutes later, when the girlfriend objects to being 'number two'] Baby, comparison is the thief -",
            note: "Cashed mid-sentence and never finished, because it does not need to be. The audience completes it, which is always a bigger laugh than saying it.",
            callbackTo: "st-2",
            qa: ["handle", "compress"] }
        ]
      },

      {
        id: "s-svu",
        title: "38 - The Law & Order act-out",
        intent: "Demonstrate that the biggest laugh in an hour of very good writing can contain almost no writing.",
        beats: [
          { id: "sv-1", role: "setup",
            text: "There was this guy taking out the trash, and there was a dead body in the dumpster. And I swear to God this is the whole scene.",
            note: "The setup does one job: establishes that television underreacts. He performs the TV version flat and short." },

          { id: "sv-2", role: "actout", laugh: 6,
            text: "[a sustained wordless-to-profane physical scene: the discovery, the recoil, the dripping, the ruined shoes, the stairs]",
            subversion: {
              from: "He will say a funnier line than the one on television.",
              to: "He will not say a line at all. He will simply be correct for forty seconds.",
              axis: "commentary to demonstration"
            },
            note: "The single biggest laugh in the special and it is almost entirely non-verbal. On the page this beat is nothing. That gap is the whole lesson: material that reads flat can be the strongest thing in the set, and material that reads clever often is not.",
            qa: ["act-out", "past-comfortable"] },

          { id: "sv-3", role: "callback", laugh: 4,
            text: "[returning to the TV register] I don't remember throwing that away.",
            note: "Ends the act-out by snapping back to the flat original line. The contrast is the button, and it costs one sentence.",
            callbackTo: "sv-1" }
        ]
      },

      {
        id: "s-close",
        title: "43-44 - The heart attack, and the last word",
        intent: "Run the longest and most emotionally exposed story in the hour, without ever letting a sincere beat stand.",
        beats: [
          { id: "sc-1", role: "setup",
            text: "Last year my dad had a heart attack and it required an emergency quintuple bypass.",
            expectations: [
              { label: "The tone is about to change - this is the sincere closer.", pct: 87 }
            ],
            note: "He lets the room believe the tone has changed. It has not, and will not, and that consistency is what the ending depends on." },

          { id: "sc-2", role: "punch", laugh: 4,
            text: "[on the flight to see his dying father] It was very expensive, but I said [bleep] it, it's an emergency. So I sent my dad a Venmo request.",
            subversion: {
              from: "Grief overrides money.",
              to: "Money survives grief intact and is itemised.",
              axis: "devotion to invoicing",
              mechanism: "Puncture the sincere beat within the same sentence that created it. He does this roughly every twenty seconds for eight minutes."
            },
            qa: ["puncture", "own-stake"] },

          { id: "sc-3", role: "punch", laugh: 4.5,
            text: "[to his furious sister, about their father's much younger girlfriend] As opposed to what? His rock hard bod.",
            subversion: {
              from: "He will side with his sister against the gold-digger.",
              to: "He sides with the gold-digger, on the grounds that his father has nothing else to offer.",
              axis: "family loyalty to accurate valuation"
            },
            note: "Note who the joke costs: his father, and by extension himself. He never takes a shot he is not standing inside.",
            qa: ["own-stake"] },

          { id: "sc-4", role: "setup", pauseAfter: 0.4,
            text: "[after the surgery, watching a hospital instructional video in which a son buckles his recovering father into a car] My sister turned to me and said, oh my god, are you crying?",
            expectations: [
              { label: "The sincere landing has finally arrived - he was moved by the father-son image.", pct: 90 },
              { label: "One more undercut is coming.", pct: 10 }
            ],
            note: "90% concentration, sixty-five minutes in, on the single most-earned sincere moment of the hour. Everything in the special has been engineering this expectation.",
            qa: ["concentrate", "puncture"] },

          { id: "sc-5", role: "punch", laugh: 6,
            text: "And I was. Because I had auditioned to play the son.",
            subversion: {
              from: "He was crying about his father.",
              to: "He was crying about a lost acting job.",
              axis: "love to career",
              mechanism: "A homophone - son / sun - that is also the thesis. The theatre thread, the career-failure thread and the father thread all resolve on one word, and the word is the relationship."
            },
            note: "The whole hour lands on a single word that is simultaneously the biggest laugh and the most honest thing in the show: the damage and the ambition are the same damage. This cannot be written first. You find it by noticing that two threads already share a word.",
            qa: ["land-on-one-word", "handle", "puncture"] }
        ]
      }
    ]
  }],

  /* What we are stealing, stated plainly. */
  takeaways: [
    "Implicate the room inside the first twenty seconds. A premise about you is a premise they can opt out of.",
    "The pre-empt is not defence, it is setup. Build the objection sincerely and at length, then commit the crime.",
    "Permission can be stated out loud. Naming who is not in the room to be hurt releases an audience faster than softening the joke.",
    "An act-out can be the strongest thing in an hour while being nearly invisible on the page. Stop trusting the page.",
    "Never let a sincere beat stand. Puncture within the line, and make the puncture petty rather than clever.",
    "Find the word two of your threads already share. That is the ending, and you cannot write it first."
  ]
});
