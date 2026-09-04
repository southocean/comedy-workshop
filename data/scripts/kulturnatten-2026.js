/* Kulturnatten 2026 - 5 minute open mic set.
   Spine: one year in, twenty-one kroner, a banana suit, and Cattelan's 'Comedian'.
   Every punch carries a named subversion; tags ride the axis without one. */
CW.registerScript({
  id: "kulturnatten-2026",
  title: "Kulturnatten 2026",
  venue: "Kulturnatten open mic",
  date: "2026-10-09",
  slot: "5 minutes",
  targetSeconds: 300,
  status: "in rehearsal",
  premise:
    "You walk out already wearing the banana suit and refuse to explain it for fifty seconds. " +
    "The set spends those fifty seconds on the anniversary bit, so the costume works as unpaid tension " +
    "the whole time. Then the suit turns out to be literal, then cultural, then a business plan, " +
    "and finally the argument for the closing message.",
  warnings: [
    "The identity spine (banana = yellow outside, white inside) assumes this is your own story. " +
    "If it is not, swap segment 2 for the 'costume shop' alternate and the rest of the set still stands.",
    "Two Danish-specific beats (pant, Janteloven) are the biggest local laughs in the set. " +
    "At an English-language room, check that Janteloven reads."
  ],

  versions: [
    /* ===================================================================== */
    {
      id: "v1",
      label: "v1 - first pass",
      date: "2026-09-04",
      notes:
        "The bones. Opener works, banana reveal works, but the middle is thin and the ending " +
        "just stops. No callbacks doing any work. Written to be argued with.",
      segments: [
        {
          id: "open",
          title: "Cold open: one year in",
          intent: "Establish the anniversary, undercut it with the costume, then pivot to the ask.",
          beats: [
            { id: "b-stage-1", role: "stage",
              text: "You are already in the banana suit. Do not acknowledge it. Not once." },
            { id: "b-year", role: "setup", pauseAfter: 0.4,
              text: "One year ago today, I did my first ever stand-up gig.",
              expectations: [
                { label: "This is a milestone story - he is about to tell us how far he has come.", pct: 84 },
                { label: "He is going to describe bombing his first gig.", pct: 11 },
                { label: "This is somehow about the banana suit.", pct: 5 }
              ],
              note: "The costume is doing work you are not paying for. Every second you refuse to mention it, the room leans in harder." },
            { id: "b-lookatme", role: "punch", laugh: 4, pauseBefore: 0.8,
              text: "One year. [beat] Look at me now.",
              subversion: {
                from: "A year of grind means he has arrived somewhere.",
                to: "A year of grind means a grown man in a banana suit at a free open mic.",
                axis: "growth to visible decline",
                mechanism: "Visual literalisation - you never say the punchline, you wear it."
              },
              delivery: "Do not gesture at the suit. Just stop talking and let them look." },
            { id: "b-21kr", role: "tag", laugh: 2.5,
              text: "In a year of doing this, I have earned twenty-one kroner." },
            { id: "b-support", role: "transition", pauseAfter: 0.5,
              text: "Which is why you should support your local comedy scene.",
              expectations: [
                { label: "He means it - this is the sincere civic bit.", pct: 82 },
                { label: "This is a setup and something rude is coming.", pct: 18 }
              ] },
            { id: "b-notfunny", role: "punch", laugh: 3,
              text: "Because if I am not funny tonight, you still leave here having done something good.",
              subversion: {
                from: "Support the art form because it deserves support.",
                to: "Support the art form so my failure becomes your good deed.",
                axis: "generosity to transaction"
              } }
          ]
        },
        {
          id: "fruit",
          title: "The fruit in the room",
          intent: "Finally address the suit, and make it mean something instead of being random.",
          beats: [
            { id: "b-elephant", role: "setup",
              text: "Okay. Let us address the elephant in the room." },
            { id: "b-word", role: "setup", pauseAfter: 0.4,
              text: "Growing up, my family had a word for kids like me." },
            { id: "b-banana", role: "punch", laugh: 4,
              text: "Banana. Yellow on the outside, white on the inside.",
              subversion: {
                from: "A warm heritage nickname is coming.",
                to: "A clinical ethnic diagnosis, issued by the people who love him.",
                axis: "affection to assessment"
              } },
            { id: "b-diagnosis", role: "tag", laugh: 3,
              text: "So this is not a costume. This is a diagnosis." }
          ]
        },
        {
          id: "bread",
          title: "The banana bread plan",
          intent: "Turn the fruit into a career metaphor so the money theme keeps moving.",
          beats: [
            { id: "b-bread-setup", role: "setup",
              text: "The best thing a banana ever does is banana bread, and that only happens after it has gone brown and everyone has given up on it." },
            { id: "b-bread-punch", role: "punch", laugh: 3,
              text: "So there is still hope for me.",
              subversion: {
                from: "A depressing fact about rotting fruit.",
                to: "An optimistic reading of his own career.",
                axis: "decay to hope"
              },
              note: "Weak. The subversion runs the safe direction - decay to hope is the reading the room already had. v2 flips it." }
          ]
        },
        {
          id: "close",
          title: "Close: the six million dollar banana",
          intent: "Land the message about supporting local comedy.",
          beats: [
            { id: "b-art-setup", role: "setup",
              text: "In 2019 an artist duct-taped a banana to a wall and called it art.",
              expectations: [
                { label: "He is about to dunk on modern art.", pct: 91 },
                { label: "He will connect it to his costume.", pct: 9 }
              ] },
            { id: "b-art-punch", role: "punch", laugh: 3.5,
              text: "And I am not going to tell you that is ridiculous. It sold for a hundred and twenty thousand dollars, and then another one sold for six point two million.",
              subversion: {
                from: "The obligatory anti-modern-art take.",
                to: "Professional envy from a man dressed as the artwork.",
                axis: "critic to applicant"
              } },
            { id: "b-title", role: "punch", laugh: 4, pauseBefore: 0.6,
              text: "And the name of the piece is 'Comedian.'" },
            { id: "b-message", role: "sincere",
              text: "So please support your local comedy shows. That is really all I wanted to say." },
            { id: "b-out-v1", role: "transition",
              text: "Thank you, you have been lovely, good night." }
          ]
        }
      ]
    },

    /* ===================================================================== */
    {
      id: "v2",
      label: "v2 - working draft",
      date: "2026-09-04",
      notes:
        "Adds the Janteloven segment (the strongest local laugh in the set), flips the banana bread " +
        "subversion so it runs away from hope instead of toward it, and rebuilds the ending so the " +
        "message is earned by an argument rather than announced. Three callbacks now land in the last " +
        "thirty seconds: pant, donors, and twenty-one kroner. Runs long on purpose - cuttable lines are marked.",
      segments: [
        {
          id: "open",
          title: "Cold open: one year in",
          intent: "Establish the anniversary, undercut it with the costume, then pivot to the ask and make the ask selfish.",
          beats: [
            { id: "b-stage-1", role: "stage",
              text: "You are already in the banana suit. Do not acknowledge it. Not once, for the next fifty seconds." },

            { id: "b-year", role: "setup", pauseAfter: 0.4,
              text: "One year ago today, I did my first ever stand-up gig.",
              expectations: [
                { label: "This is a milestone story - he is about to tell us how far he has come.", pct: 88 },
                { label: "He is going to describe bombing his first gig.", pct: 8 },
                { label: "This is somehow about the banana suit.", pct: 4 }
              ],
              note: "88% is a good target to shoot at. The reason it is that concentrated is the word 'first' plus a date - anniversaries only get mentioned on stage when someone is about to be proud of one." },

            { id: "b-lookatme", role: "punch", laugh: 4, pauseBefore: 0.8,
              text: "One year. [beat] Look at me now.",
              subversion: {
                from: "A year of grind means he has arrived somewhere.",
                to: "A year of grind means a grown man in a banana suit at a free open mic.",
                axis: "growth to visible decline",
                mechanism: "Visual literalisation - the biggest laugh in the joke is a thing you never said out loud."
              },
              delivery: "Do not gesture at the suit and do not smile. Arms down. Let them do the work.",
              note: "This is the whole reason you walk on already dressed. If you put the suit on later you have to explain it; if you wear it in, the room explains it to itself." },

            { id: "b-21kr", role: "tag", laugh: 3,
              text: "A year of open mics. Career earnings, before tax: twenty-one kroner." },

            { id: "b-notpergig", role: "tag", laugh: 2.5, pauseBefore: 0.3,
              text: "That is not per gig. That is the career.",
              note: "The tag on the tag. The surprise is purely structural - they assumed 21 kr was a punchline number, and you reveal it was an accounting number." },

            { id: "b-pant", role: "tag", laugh: 3, optional: true,
              text: "Twenty-one kroner is seven bottles of pant. I have done a full year of stand-up for the same money as a guy working one bin at Roskilde. And he has the better story.",
              note: "Cuttable. Kept because it plants 'pant' for the last line of the set - if you cut this, change the closer too.",
              risk: "Dies instantly in an English-language room that does not know pant." },

            { id: "b-support", role: "transition", pauseAfter: 0.6,
              text: "Which is why you should support your local comedy scene.",
              expectations: [
                { label: "He means it - this is the sincere civic bit, he wants us to buy tickets.", pct: 87 },
                { label: "This is a setup and something rude is coming.", pct: 13 }
              ],
              delivery: "Mean it. Two full seconds of sincerity. If you telegraph the turn, the punch has nothing to push against.",
              note: "This line is the load-bearing beam of the set: it is the thesis, it is a setup, and at the end it comes back as the closer. Say it plainly here so the callback has something to be plain against." },

            { id: "b-notfunny", role: "punch", laugh: 3,
              text: "Because if I am not funny tonight, you still leave here having done something good.",
              subversion: {
                from: "Support the art form because the art form deserves support.",
                to: "Support the art form so that my failure retroactively becomes your good deed.",
                axis: "generosity to transaction",
                mechanism: "Reframe the audience's role mid-sentence - they came to receive, and you quietly recast them as having paid."
              } },

            { id: "b-donors", role: "tag", laugh: 3, pauseBefore: 0.3,
              text: "You are not an audience. You are donors.",
              note: "Plant. This exact word comes back in the last thirty seconds and is worth more there than here." }
          ]
        },

        {
          id: "fruit",
          title: "The fruit in the room",
          intent: "Address the suit at last, and convert it from a prop into a thesis - the costume is literal.",
          beats: [
            { id: "b-elephant", role: "setup",
              text: "Okay. Let us address the elephant in the room." },

            { id: "b-fruit", role: "punch", laugh: 2, optional: true, pauseBefore: 0.4,
              text: "Sorry. The fruit in the room.",
              subversion: {
                from: "A standard idiom introducing the obvious topic.",
                to: "The idiom corrected for present circumstances.",
                axis: "figurative to literal"
              },
              note: "Cheap, and cheap is fine here - it is a door, not a room. Cut first if you are over time." },

            { id: "b-word", role: "setup", pauseAfter: 0.5,
              text: "Growing up, my family had a word for kids like me.",
              expectations: [
                { label: "A Vietnamese word, some warm untranslatable family thing.", pct: 76 },
                { label: "Something insulting, because parents.", pct: 17 },
                { label: "'Banana' - they have connected the suit.", pct: 7 }
              ],
              delivery: "Hands still. Do not look down at the suit. A single glance at yourself here doubles that 7% and halves the laugh.",
              note: "Keeping the third reading under 10% is the entire job of this line. The suit has been on stage for a minute; the only thing stopping them solving it is that you have never once treated it as relevant." },

            { id: "b-banana", role: "punch", laugh: 4,
              text: "Banana. Yellow on the outside, white on the inside.",
              subversion: {
                from: "A warm heritage nickname is coming.",
                to: "A clinical ethnic diagnosis, issued by the people who love him.",
                axis: "affection to assessment",
                mechanism: "Retroactive reveal - the costume stops being random and becomes evidence. The room re-reads the last sixty seconds for free."
              },
              risk: "Only yours to tell. If this is not your experience, use the alternate and drop the segment title to 'Why the suit'.",
              alt: [
                { text: "So I asked the costume shop for something that says 'confident man in his thirties.' They gave me this.",
                  why: "Non-identity route. Keeps the segment, loses the depth - the rest of the set still works." }
              ] },

            { id: "b-diagnosis", role: "tag", laugh: 3.5, pauseBefore: 0.3,
              text: "So this is not a costume. This is a diagnosis.",
              note: "Best tag in the set. Same axis as the punch - literalising the metaphor - but it escalates from a word to a medical condition." },

            { id: "b-therapy", role: "tag", laugh: 3, optional: true,
              text: "Other people take that to therapy. Therapy is twelve hundred kroner an hour. This was ninety-nine on Amazon." },

            { id: "b-scaled", role: "tag", laugh: 3,
              text: "I am not saying it worked. I am saying it scaled.",
              note: "If you cut the therapy line, this still lands - 'scaled' is funny against a banana suit on its own." }
          ]
        },

        {
          id: "jante",
          title: "Janteloven, in fruit form",
          intent: "Widen the joke from him to the entire country. This is the biggest available laugh in the set.",
          beats: [
            { id: "b-research", role: "setup", laugh: 1.5, optional: true,
              text: "I did research for this. Because I commit." },

            { id: "b-clone", role: "setup", pauseAfter: 0.3,
              text: "Every banana you have ever eaten is the same banana. Cavendish. One plant, cloned, over and over - every single one genetically identical, everywhere on earth.",
              expectations: [
                { label: "A mildly interesting fruit fact, and then a joke about it.", pct: 81 },
                { label: "This is going somewhere about identity.", pct: 14 },
                { label: "Something about extinction.", pct: 5 }
              ],
              note: "You want them relaxed and mildly educated here. The 81% expecting 'fact, then joke' are correct about the shape and completely wrong about the target." },

            { id: "b-strategy", role: "punch", laugh: 3,
              text: "So the entire survival strategy of the banana is: look exactly like everyone else, never stand out, and quietly all get the same disease at the same time.",
              subversion: {
                from: "A fact about a fruit.",
                to: "A description of a society, delivered in the vocabulary of produce.",
                axis: "botany to sociology",
                mechanism: "The words never change register - you describe a plant accurately, and the room does the mapping before you name it."
              } },

            { id: "b-jante", role: "punch", laugh: 4.5, pauseBefore: 0.7,
              text: "Ladies and gentlemen. Janteloven. In fruit form.",
              subversion: {
                from: "He is describing bananas.",
                to: "He has been describing Denmark for twenty seconds and they helped.",
                axis: "them to us",
                mechanism: "Name the thing last. The laugh is the room realising it walked itself into the joke."
              },
              delivery: "Flat. Presentational. This is the only line in the set you are allowed to announce." },

            { id: "b-dusk", role: "actout", laugh: 4, pauseBefore: 0.4,
              text: "[to the suit, sternly] Du skal ikke tro, du er noget.",
              note: "Act-out tag. Same axis, no new subversion - the surprise is that you address the costume as a citizen.",
              risk: "Needs a room that knows the first law of Jante. In a mixed room, add 'the first rule of Jante' as a lead-in and accept a smaller laugh." },

            { id: "b-integrated", role: "tag", laugh: 3.5,
              text: "I have never felt more integrated than the day I found out my costume has a national philosophy.",
              note: "Ties the two spines together - the assimilation joke from segment 2 and the Jante joke here are now the same joke." }
          ]
        },

        {
          id: "bread",
          title: "The banana bread five-year plan",
          intent: "Bring it back to his own career and set the emotional floor the ending has to lift off.",
          beats: [
            { id: "b-bread-setup", role: "setup", pauseAfter: 0.3,
              text: "One more banana fact, and this one I take personally. The greatest thing a banana ever does - banana bread - only happens after it has gone brown, gone soft, and everyone in the house has given up on it.",
              expectations: [
                { label: "An inspirational late-bloomer point about himself is coming.", pct: 83 },
                { label: "A joke about his own decline.", pct: 12 },
                { label: "An actual recipe digression.", pct: 5 }
              ],
              note: "83% are braced for uplift. The whole value of this setup is how badly they want it to be about hope." },

            { id: "b-bread-punch", role: "punch", laugh: 4,
              text: "So that is the plan. Year one: twenty-one kroner. Year two: brown. Year three: somebody desperate finds me at the back of a cupboard and makes something out of me.",
              subversion: {
                from: "A late bloomer takes charge and gets his moment.",
                to: "A passive rotting-until-useful business strategy with no agency in it at all.",
                axis: "ambition to decomposition",
                mechanism: "Accept the metaphor completely instead of softening it. The joke is that he has followed the comparison further than the room was willing to."
              },
              note: "v1 had this running decay-to-hope, which is the reading they already had - no subversion, no laugh. Running it hope-to-decay is the same fact pointed the other way." },

            { id: "b-bank", role: "tag", laugh: 3.5,
              text: "That is a real five-year plan that I have said out loud to a Danish bank." }
          ]
        },

        {
          id: "close",
          title: "Close: the six million dollar banana",
          intent:
            "Prove the thesis instead of asserting it. The banana on the wall is worth six million because a room " +
            "decided it was - so the argument for supporting local comedy is arithmetic, not charity. Then undercut " +
            "the sincerity on exactly the same axis as the opener did, and cash the three plants.",
          beats: [
            { id: "b-art-setup", role: "setup", pauseAfter: 0.3,
              text: "Last thing. In 2019, an artist duct-taped a banana to a wall and called it art.",
              expectations: [
                { label: "He is about to dunk on modern art - 'my kid could do that'.", pct: 91 },
                { label: "He will connect it to his costume somehow.", pct: 7 },
                { label: "He will defend it.", pct: 2 }
              ],
              note: "91% is the most concentrated expectation in the set, and it is concentrated because the anti-modern-art take is the single most predictable response a comedian can have to this story. That predictability is the asset. Take the other side." },

            { id: "b-art-punch", role: "punch", laugh: 3.5,
              text: "And I am not going to do the bit about how that is ridiculous. Because it sold for a hundred and twenty thousand dollars. And then a second one sold for six point two million.",
              subversion: {
                from: "The obligatory sneer at modern art.",
                to: "Undisguised professional envy from a man dressed as the artwork.",
                axis: "critic to applicant",
                mechanism: "Refuse the expected joke out loud. Saying 'I am not going to do the bit' names their prediction and denies it in the same breath."
              } },

            { id: "b-model", role: "tag", laugh: 3.5,
              text: "That is not ridiculous. That is a business model. And I am dressed for it." },

            { id: "b-ate", role: "tag", laugh: 3.5, optional: true,
              text: "The buyer ate it. Six point two million dollars, and he ate the banana. Which is still more respect than I got on a Tuesday in Norrebro." },

            { id: "b-title", role: "punch", laugh: 4.5, pauseBefore: 0.8,
              text: "And the title of the piece - the actual name of the artwork - is 'Comedian.'",
              subversion: {
                from: "The story was about money and art.",
                to: "The story was about him, and has been the whole time.",
                axis: "anecdote to autobiography",
                mechanism: "A true detail withheld until it becomes a punchline. You have not invented anything; you have only chosen when they learn it."
              },
              delivery: "Let it sit. This is the longest pause in the set. Do not step on it." },

            { id: "b-compare", role: "callback", laugh: 4, callbackTo: "b-21kr", pauseBefore: 0.4,
              text: "A banana. Taped to a wall. Doing nothing. Called Comedian. Six point two million. [gesture at yourself] Twenty-one kroner.",
              note: "Callback, not a new joke. The number was funny at 0:40 because it was small; it is funny here because it is being compared." },

            { id: "b-only-diff", role: "sincere", pauseAfter: 0.3,
              text: "And the only difference between us is that somebody put him in a room full of people who decided he was worth something." },

            { id: "b-mechanism", role: "sincere",
              text: "That is the whole mechanism. The value was never in the banana. It is in the room.",
              note: "The one place in five minutes where you are not doing bits. It works because you have spent four minutes earning the right to be briefly serious about a banana." },

            { id: "b-youare", role: "sincere", laugh: 1, pauseBefore: 0.5, pauseAfter: 0.4,
              text: "You are the room.",
              delivery: "Quiet. Do not sell it." },

            { id: "b-pitch", role: "punch", laugh: 4,
              text: "So support your local comedy. Especially the bad local comedy - that is where the growth is. This is not charity, it is early stage, and I am pre-seed.",
              subversion: {
                from: "A sincere civic message about supporting the arts.",
                to: "A pitch deck.",
                axis: "gift to equity",
                mechanism: "The same move as the opener - compassion collapsing into self-interest - performed deliberately so the set rhymes with itself. The audience does not consciously notice the repeat; they notice that the ending feels inevitable."
              },
              note: "This is the beat that lets the message survive. Sincerity that is never punctured reads as a plea; sincerity you undercut yourself reads as conviction." },

            { id: "b-followup", role: "callback", laugh: 4, callbackTo: "b-donors",
              text: "And you already agreed to this. I said it in the first thirty seconds. You are donors. This is just the follow-up email." },

            { id: "b-out", role: "callback", laugh: 4, callbackTo: "b-pant", pauseBefore: 0.3,
              text: "I am Nam, my career has earned twenty-one kroner, and if you leave your bottles I will take it from there. Good night.",
              note: "Closes on the smallest number in the set instead of the biggest. Pays off pant, pays off 21 kroner, and leaves them with the image of you collecting deposits in a banana suit.",
              alt: [
                { text: "I am Nam, my career has earned twenty-one kroner, and I accept applause, cash, and duct tape. Good night.",
                  why: "Use if you cut the pant line in segment 1. Pays off the artwork instead of the deposit." }
              ] }
          ]
        }
      ]
    },

    /* ===================================================================== */
    {
      id: "v3",
      label: "v3 - de-AI pass",
      date: "2026-09-04",
      notes:
        "v2 read fine and would have played flat. Seven of its punchlines resolved as the same antithesis " +
        "- 'this isn't X, it's Y' - so by the third one the room can feel the landing coming even without " +
        "predicting the words. Surprise was dying at the level of syntax while the writing still looked " +
        "good on the page. v2 also had zero act-outs and no other human being in it for five minutes. " +
        "v3 keeps one antithesis (it becomes a callback), rebuilds the rest out of dialogue, flat " +
        "statements, fragments, numbers and two real scenes, and puts a mother in the set so the ending " +
        "has something small to land on.",
      segments: [
        {
          id: "open",
          title: "Cold open: one year in",
          intent: "Anniversary, undercut by the costume, then the ask - and make the ask self-serving. Plant the mother.",
          beats: [
            { id: "b-stage-1", role: "stage",
              text: "You are already in the banana suit. Do not acknowledge it. Not once, for the next fifty seconds." },

            { id: "b-year", role: "setup", pauseAfter: 0.4,
              text: "One year ago today, I did my first ever stand-up gig.",
              expectations: [
                { label: "This is a milestone story - he is about to tell us how far he has come.", pct: 88 },
                { label: "He is going to describe bombing his first gig.", pct: 8 },
                { label: "This is somehow about the banana suit.", pct: 4 }
              ],
              qa: ["concentrate", "prediction"],
              note: "Unchanged from v2. It works because 'first' plus a date is a construction people only use when they are about to be proud of something." },

            { id: "b-lookatme", role: "punch", laugh: 4, pauseBefore: 0.8,
              text: "One year. [beat] Look at me now.",
              subversion: {
                from: "A year of grind means he has arrived somewhere.",
                to: "A year of grind means a grown man in a banana suit at a free open mic.",
                axis: "growth to visible decline",
                mechanism: "Visual literalisation - the biggest laugh in the joke is a thing you never said out loud."
              },
              delivery: "Do not gesture at the suit and do not smile. Arms down.",
              qa: ["wear-it", "punch-word-last"] },

            { id: "b-21kr", role: "tag", laugh: 3,
              text: "A year of open mics. Total career earnings: twenty-one kroner." },

            { id: "b-permum", role: "actout", laugh: 3.5, pauseBefore: 0.3,
              text: "My mother asked if that was per gig. [beat] I said 'roughly.'",
              note: "Replaces v2's 'That is not per gig. That is the career.' Same information, but now it arrives as a small lie told to a specific person, which is funnier than an accounting correction and costs the same eight words. It also puts a second human being on stage forty seconds in.",
              qa: ["vary-shape", "specificity", "act-out"] },

            { id: "b-aunties", role: "tag", laugh: 3.5,
              text: "There is now a family group chat where I am doing very well.",
              note: "Plant. This is the handle the last line of the set grabs. Flat declarative on purpose - it has to pass as a throwaway.",
              qa: ["handle"] },

            { id: "b-pant", role: "tag", laugh: 3, optional: true,
              text: "Twenty-one kroner is seven bottles of pant. Somewhere in this city a man went through one bin and out-earned my entire career before lunch.",
              risk: "Dies in an English-language room that does not know pant.",
              note: "Cuttable, but it plants the bottles for the closer. Cut it and use the alternate closing line." },

            { id: "b-support", role: "transition", pauseAfter: 0.6,
              text: "Which is why you should support your local comedy scene.",
              expectations: [
                { label: "He means it - this is the sincere civic bit, he wants us to buy tickets.", pct: 87 },
                { label: "This is a setup and something rude is coming.", pct: 13 }
              ],
              delivery: "Mean it. Two full seconds of sincerity. If you telegraph the turn there is nothing to push against.",
              qa: ["concentrate", "rhyme"] },

            { id: "b-notfunny", role: "punch", laugh: 3,
              text: "Because if I'm not funny tonight, you still leave here having done something good.",
              subversion: {
                from: "Support the art form because the art form deserves support.",
                to: "Support the art form so that my failure retroactively becomes your good deed.",
                axis: "generosity to transaction",
                mechanism: "Recast the audience's role mid-sentence - they came to receive, and are quietly reclassified as having paid."
              },
              qa: ["truth-pain", "rhyme"] },

            { id: "b-deduction", role: "tag", laugh: 3, pauseBefore: 0.3,
              text: "Whatever happens in the next four minutes - you're a good person, and I'm a tax deduction.",
              note: "Replaces 'You are not an audience. You are donors.' This is the one antithesis left in the set, kept because it is the strongest and because it comes back at 4:40. Everything else got rebuilt out of a different shape.",
              qa: ["handle", "vary-shape"] }
          ]
        },

        {
          id: "fruit",
          title: "The fruit in the room",
          intent: "Address the suit and make it literal. Nobody in this segment says the joke out loud - the family already did.",
          beats: [
            { id: "b-elephant", role: "setup",
              text: "Okay. Let's address the elephant in the room." },

            { id: "b-fruit", role: "punch", laugh: 2, optional: true, pauseBefore: 0.4,
              text: "Sorry. The fruit in the room.",
              subversion: {
                from: "A standard idiom introducing the obvious topic.",
                to: "The idiom corrected for present circumstances.",
                axis: "figurative to literal"
              },
              note: "Cheap, and cheap is fine - it is a door, not a room. First to cut." },

            { id: "b-word", role: "setup", pauseAfter: 0.5,
              text: "There's a word my family uses for kids like me.",
              expectations: [
                { label: "A Vietnamese word, some warm untranslatable family thing.", pct: 76 },
                { label: "Something insulting, because parents.", pct: 17 },
                { label: "'Banana' - they have connected the suit.", pct: 7 }
              ],
              delivery: "Hands still. One glance down at yourself here doubles that 7% and halves the laugh.",
              qa: ["concentrate", "wear-it"] },

            { id: "b-banana", role: "punch", laugh: 4,
              text: "Banana. Yellow on the outside, white on the inside.",
              subversion: {
                from: "A warm heritage nickname is coming.",
                to: "A clinical ethnic diagnosis, issued by the people who love him.",
                axis: "affection to assessment",
                mechanism: "Retroactive reveal - the costume stops being random and becomes evidence. The room re-reads the last minute for free."
              },
              risk: "Only yours to tell. If it is not your experience, use the alternate and retitle the segment 'Why the suit'.",
              qa: ["own-stake", "specificity"],
              alt: [
                { text: "I asked the costume shop for something that says 'confident man in his thirties.' They gave me this.",
                  why: "Non-identity route. Keeps the segment, loses the depth. The rest of the set still stands." }
              ] },

            { id: "b-table", role: "tag", laugh: 4, pauseBefore: 0.3,
              text: "Someone said it at a dinner. The table laughed. Everyone went back to eating. Nobody looked up, nobody argued. [beat] It had already been agreed.",
              note: "New in v3, and the beat the segment now rests on. Four flat clauses and a cold four-word button - no reversal, no wordplay, and it is the darkest thing in the set. The laugh comes from how administrative it is.",
              qa: ["vary-shape", "specificity", "past-comfortable"] },

            { id: "b-assigned", role: "tag", laugh: 3.5,
              text: "The costume shop thought I was making a choice.",
              note: "Replaces 'This is not a costume, this is a diagnosis.' Says the identical thing from outside, through a stranger who has misunderstood the situation. Wry rather than epigrammatic.",
              qa: ["vary-shape"] },

            { id: "b-therapy", role: "tag", laugh: 3, optional: true,
              text: "Therapy is twelve hundred kroner an hour. This was ninety-nine on Amazon." },

            { id: "b-returns", role: "tag", laugh: 3,
              text: "Free returns. [beat] I've looked into it.",
              note: "Replaces 'I'm not saying it worked, I'm saying it scaled.' A fragment and an admission. It is sadder, shorter, and it is the first time the set suggests he would give the whole identity back.",
              qa: ["vary-shape", "truth-pain", "own-stake"] }
          ]
        },

        {
          id: "jante",
          title: "Janteloven, in fruit form",
          intent: "Widen from him to the country - then collide the country with his mother. Biggest available laugh in the set.",
          beats: [
            { id: "b-research", role: "setup", laugh: 1.5, optional: true,
              text: "I looked bananas up. Because I commit." },

            { id: "b-clone", role: "setup", pauseAfter: 0.4,
              text: "Every banana you have ever eaten is the same banana. Cavendish. One plant, cloned, over and over. Every single one identical. No variation. And when one of them gets sick, they all get sick - because there's nobody left who's different enough to survive it.",
              expectations: [
                { label: "A mildly interesting fruit fact, and then a joke about it.", pct: 81 },
                { label: "This is going somewhere about identity.", pct: 14 },
                { label: "Something about extinction.", pct: 5 }
              ],
              note: "Played completely straight, and the last clause is the one that does the work. Say it slightly sadly. Do not signal.",
              qa: ["true-misdirect", "specificity"] },

            { id: "b-dusk", role: "actout", laugh: 4.5, pauseBefore: 0.7,
              text: "[turn and address the suit, sternly, the way you would tell off a child] Du skal ikke tro, du er noget.",
              subversion: {
                from: "He is describing a fruit.",
                to: "He has been describing Denmark for twenty seconds and the room got there first.",
                axis: "botany to nationality",
                mechanism: "Never name it. v2 announced this as 'Ladies and gentlemen, Janteloven, in fruit form' - a presentational reveal that does the audience's work for them and reads as a written line. Turning to the costume and delivering the first law of Jante to it as if it were a person makes the room complete the connection, which is always a bigger laugh than being told."
              },
              risk: "Needs a room that knows Janteloven. In a mixed room add 'the first rule of Jante' as a lead-in and accept a smaller laugh.",
              qa: ["act-out", "compress", "vary-shape"] },

            { id: "b-national", role: "tag", laugh: 3.5, optional: true,
              text: "I found out my Halloween costume has a national philosophy.",
              note: "Cuttable. It is a good line, but the beat after it quotes the Jante laws directly, so this one is doing the same job twice. Cut it first when you need the time." },

            { id: "b-mother", role: "tag", laugh: 4.5, pauseBefore: 0.4,
              text: "Do not think you are special. Do not think you are better than anyone else. [beat] My mother has been fighting this country single-handed since 1993.",
              note: "The best joke in the set, and it only exists because the mother got planted in the cold open. Two cultures with exactly opposite instructions about whether you are allowed to be special, collided in one sentence, with a date on it. Nothing about it is reversible or epigrammatic - it is a flat statement of fact about a specific woman.",
              qa: ["specificity", "vary-shape", "truth-pain"],
              alt: [
                { text: "My mother has been fighting this country single-handed since she got here.",
                  why: "If the year is wrong. Weaker - the date is doing real work, because a number reads as testimony." }
              ] }
          ]
        },

        {
          id: "bread",
          title: "The banana bread five-year plan",
          intent: "Back to his own career, and set the floor the ending lifts off. Second act-out lives here.",
          beats: [
            { id: "b-bread-setup", role: "setup", pauseAfter: 0.3,
              text: "One more banana fact, and I take this one personally. The best thing a banana ever does - banana bread - only happens after it's gone brown, gone soft, and everyone in the house has given up on it.",
              expectations: [
                { label: "An inspirational late-bloomer point about himself is coming.", pct: 83 },
                { label: "A joke about his own decline.", pct: 12 },
                { label: "An actual recipe digression.", pct: 5 }
              ],
              note: "83% are braced for uplift. The value of this setup is entirely in how badly they want it to be about hope.",
              qa: ["concentrate", "past-comfortable"] },

            { id: "b-bread-punch", role: "punch", laugh: 4,
              text: "So that's the plan. Year one: twenty-one kroner. Year two: brown. Year three: somebody desperate finds me at the back of a cupboard and makes something out of me.",
              subversion: {
                from: "A late bloomer takes charge and gets his moment.",
                to: "A passive rotting-until-useful strategy with no agency in it at all.",
                axis: "ambition to decomposition",
                mechanism: "Accept the metaphor completely instead of softening it. The joke is that he has followed the comparison further than the room was willing to."
              },
              qa: ["past-comfortable", "truth-pain"] },

            { id: "b-advisor", role: "actout", laugh: 4.5, pauseBefore: 0.3,
              text: "I said that to a mortgage advisor. Out loud. With my mouth. [beat] [flat, professional] 'And your projected income for year three?' [beat] [as yourself] 'Someone finds me.'",
              note: "Replaces 'That is a real five-year plan I have said out loud to a Danish bank' - which reported a scene instead of playing it. Two voices, four seconds, and the laugh is in the advisor's silence. 'With my mouth' is deliberately redundant: real people say redundant things, and clean prose is what makes written comedy sound written.",
              qa: ["act-out", "vary-shape", "specificity"] }
          ]
        },

        {
          id: "close",
          title: "Close: the six million dollar banana",
          intent:
            "Prove the thesis instead of announcing it, then undercut it on the same axis as the opener, " +
            "then cash three handles and end on the smallest stake in the set.",
          beats: [
            { id: "b-art-setup", role: "setup", pauseAfter: 0.3,
              text: "Last thing. In 2019, an artist duct-taped a banana to a wall and called it art.",
              expectations: [
                { label: "He is about to dunk on modern art - 'my kid could do that'.", pct: 91 },
                { label: "He will connect it to his costume somehow.", pct: 7 },
                { label: "He will defend it.", pct: 2 }
              ],
              note: "The most concentrated expectation in the set, and it is concentrated precisely because the anti-modern-art take is the most predictable response a comedian can have. That predictability is the asset.",
              qa: ["refuse-obvious", "concentrate"] },

            { id: "b-art-punch", role: "punch", laugh: 3.5,
              text: "And I'm not going to do the bit about how that's ridiculous. Because it sold for a hundred and twenty thousand dollars. And then a second one sold for six point two million.",
              subversion: {
                from: "The obligatory sneer at modern art.",
                to: "Undisguised professional envy from a man dressed as the artwork.",
                axis: "critic to applicant",
                mechanism: "Refuse the expected joke out loud. Naming their prediction and denying it in the same breath is faster than misdirecting away from it."
              },
              qa: ["refuse-obvious"] },

            { id: "b-tape", role: "tag", laugh: 3.5,
              text: "Six point two million. For a banana and about forty centimetres of tape. [beat] I've priced the tape.",
              note: "Replaces 'That's not ridiculous, that's a business model, and I'm dressed for it.' Concrete measurement instead of an abstraction, and it ends on a three-word admission that he has genuinely costed this. Petty beats clever.",
              qa: ["vary-shape", "specificity", "compress"] },

            { id: "b-ate", role: "tag", laugh: 3.5, optional: true,
              text: "The man who bought it ate it. Six point two million dollars, and he ate it. [beat] Nobody has ever wanted me that much." },

            { id: "b-title", role: "punch", laugh: 4.5, pauseBefore: 0.8,
              text: "And the title of the piece - the actual name of the artwork - is 'Comedian.'",
              subversion: {
                from: "The story was about money and art.",
                to: "The story was about him, and has been the whole time.",
                axis: "anecdote to autobiography",
                mechanism: "A true detail withheld until it becomes a punchline. Nothing invented - you only chose when they learn it."
              },
              delivery: "Let it sit. Longest pause in the set. Do not step on it.",
              qa: ["land-on-one-word", "true-misdirect"] },

            { id: "b-compare", role: "callback", laugh: 4, callbackTo: "b-21kr", pauseBefore: 0.4,
              text: "A banana. Taped to a wall. Doing nothing. Called Comedian. Six point two million. [gesture at yourself] Twenty-one kroner.",
              note: "Not a new joke. The number was funny at 0:40 because it was small; it is funny here because it is being compared. Ends on a bare number - a shape used nowhere else in the set.",
              qa: ["handle", "vary-shape"] },

            { id: "b-decided", role: "sincere", pauseAfter: 0.3,
              text: "That banana is worth six million because a room full of people said it was. Out loud. That's the whole mechanism. There isn't another one.",
              note: "v2 had three sincere lines here in TED cadence, building to 'the value was never in the banana, it's in the room.' Too smooth. Real sincerity is flatter and slightly awkward, so this is one short paragraph of plain assertion and then it stops.",
              qa: ["puncture", "vary-shape"] },

            { id: "b-youare", role: "sincere", laugh: 1, pauseBefore: 0.5, pauseAfter: 0.4,
              text: "You're a room.",
              delivery: "Quiet. Do not sell it. Do not gesture.",
              note: "'A room', not 'the room'. Smaller, odder, and it gets a nervous laugh rather than a nod - which is what you want, because a nod means they heard a slogan." },

            { id: "b-pitch", role: "punch", laugh: 4,
              text: "So go to the bad comedy nights. Eleven people, a broken microphone, a man dressed as fruit. [beat] I'll be at that one. I'm at that one on Tuesday.",
              subversion: {
                from: "A civic message about supporting the arts.",
                to: "An advert for one specific man's Tuesday.",
                axis: "cause to appointment",
                mechanism: "The same move as the opener - compassion collapsing into self-interest - but performed by implication rather than announced. v2 said 'this is not charity, it's early stage, and I am pre-seed', which named the joke instead of doing it."
              },
              note: "The rhyme with the cold open survives; it is just no longer signposted. The audience will not notice the repeat consciously. They will notice the ending feels inevitable.",
              qa: ["rhyme", "vary-shape", "specificity"] },

            { id: "b-followup", role: "callback", laugh: 4, callbackTo: "b-deduction",
              text: "And you already agreed to this. I said it at the start. You're a good person and I'm a tax deduction. [beat] No refunds.",
              qa: ["handle"] },

            { id: "b-out", role: "callback", laugh: 4, callbackTo: "b-pant", pauseBefore: 0.3,
              text: "I'm Nam. My career has earned twenty-one kroner. If you leave your bottles, I'll take it from there.",
              alt: [
                { text: "I'm Nam. My career has earned twenty-one kroner, and I accept applause, cash, and duct tape.",
                  why: "Use if you cut the pant line. Pays off the artwork instead of the deposit." }
              ] },

            { id: "b-mum", role: "callback", laugh: 4, callbackTo: "b-aunties", pauseBefore: 0.4,
              text: "Don't tell my mother.",
              note: "The button. Four words, and the smallest possible stake immediately after a six-million-dollar comparison - which is the joke. It pays off the group chat, it pays off 'I said roughly', and it leaves the room with the image of a man in a banana suit collecting deposits and hiding it from his mum. End here. Do not add anything.",
              qa: ["handle", "land-on-one-word", "puncture"] }
          ]
        }
      ]
    }
  ]
});
