// AUTO-GENERATED — jangan edit manual.
// Sumber: scripts/data/heroes-list.json + scripts/data/heroes-details.json
// Regenerate: node scripts/merge-data.mjs
//
// Total hero: 120 | counter edges: 236 | synergy edges: 233
// frequentlyPairedWith: 659 entri | hero dengan build: 116

export interface Hero {
  id: string;
  name: string;
  role: 'Roam' | 'Clash' | 'Mid' | 'Farm' | 'Jungle';
  avatarUrl: string;
  counters: string[];
  counteredBy: Array<{ id: string; name: string; reason?: string }>;
  synergies: Array<{ id: string; name: string; reason?: string }>;
  frequentlyPairedWith?: Array<{ names: string[]; matchRate: string }>;
  equipment?: { build: string[]; arcana: string[]; spell?: string };
  tags: string[];
}

export const HOK_HEROES: Hero[] = [
  {
    "id": "agudo",
    "name": "Agudo",
    "role": "Jungle",
    "avatarUrl": "/heroes/agudo.webp",
    "counters": [
      "wukong"
    ],
    "counteredBy": [
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin still holds a second leap once Agudo has spent her only roll, leaving her no way out."
      },
      {
        "id": "lam",
        "name": "Lam",
        "reason": "Lam's Death From Below drags Agudo in, and once she is low the Prey mark adds true damage."
      }
    ],
    "synergies": [
      {
        "id": "dr-bian",
        "name": "Dr Bian",
        "reason": "Dr Bian's poison pool slows whoever stands in it, so Agudo's Tumble, Furball! is much harder to dodge."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield covers Agudo, so she can stay on the front line and keep landing Basic Attacks."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Zhou Yu"
        ],
        "matchRate": "3.53%"
      },
      {
        "names": [
          "Liu Shan"
        ],
        "matchRate": "3.38%"
      },
      {
        "names": [
          "Guan Yu"
        ],
        "matchRate": "3.03%"
      },
      {
        "names": [
          "Dr Bian",
          "Bai Qi"
        ],
        "matchRate": "8.53%"
      },
      {
        "names": [
          "Zhou Yu",
          "Guan Yu"
        ],
        "matchRate": "4.25%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Shadow Ripper",
        "Eternity Blade",
        "Bloodweeper",
        "Daybreaker's Virtue"
      ],
      "arcana": [
        "Calamity",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Marksman",
      "Jungle",
      "Tank"
    ]
  },
  {
    "id": "alessio",
    "name": "Alessio",
    "role": "Farm",
    "avatarUrl": "/heroes/alessio.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "li-bai",
        "name": "Li Bai",
        "reason": "Li Bai cannot be targeted during his ultimate, so Alessio's attacks find nothing at all."
      },
      {
        "id": "lady-sun",
        "name": "Lady Sun",
        "reason": "Lady Sun's Frag Grenade slows Alessio hard, so her Ultimate Shell is far harder for him to dodge."
      }
    ],
    "synergies": [
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria attaches and shields Alessio, so he can hold a forward position and keep firing."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies into one stunned cluster, so Alessio's area shots hit the whole group at once."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "5.00%"
      },
      {
        "names": [
          "Flowborn (Mage)"
        ],
        "matchRate": "1.52%"
      },
      {
        "names": [
          "Kongming",
          "Ming"
        ],
        "matchRate": "6.73%"
      },
      {
        "names": [
          "Nakoruru",
          "Ming"
        ],
        "matchRate": "6.53%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Shadow Ripper",
        "Eternity Blade",
        "Bloodweeper",
        "Daybreaker's Virtue",
        "Doomsday"
      ],
      "arcana": [
        "Calamity",
        "Unparalleled",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "Nimble"
    ]
  },
  {
    "id": "allain",
    "name": "Allain",
    "role": "Clash",
    "avatarUrl": "/heroes/allain.webp",
    "counters": [
      "kongming",
      "li-xin"
    ],
    "counteredBy": [
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's Forsaken Contract suppresses Allain outright, cutting off his attack chain and the Fury it builds."
      }
    ],
    "synergies": [
      {
        "id": "lam",
        "name": "Lam",
        "reason": "Lam drags enemies into one spot, and Death at Sunset hits harder the closer they are."
      },
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria attaches to Allain with a shield and stays untargetable, following him straight through his dashes."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Kongming"
        ],
        "matchRate": "1.34%"
      },
      {
        "names": [
          "Sun Bin",
          "Meng Ya"
        ],
        "matchRate": "5.12%"
      },
      {
        "names": [
          "Garuda",
          "Dolia"
        ],
        "matchRate": "3.77%"
      },
      {
        "names": [
          "Luban No.7",
          "Kongming"
        ],
        "matchRate": "2.83%"
      },
      {
        "names": [
          "Hou Yi",
          "Kongming"
        ],
        "matchRate": "2.64%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Fortitude",
        "Sparkforged Dagger",
        "Blazing Cape",
        "Blood Rage",
        "Frigid Charge",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Fate",
        "Stealth",
        "Void"
      ],
      "spell": "Execute"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Berserker"
    ]
  },
  {
    "id": "angela",
    "name": "Angela",
    "role": "Mid",
    "avatarUrl": "/heroes/angela.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin leaps in and launches Angela before she can even start firing, pinning her down."
      },
      {
        "id": "daji",
        "name": "Daji",
        "reason": "Daji stuns Angela, shreds her Magical Defense while she is held, and wins the trade outright."
      }
    ],
    "synergies": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's slow keeps enemies from escaping, so Angela's Chaos Cinder vortex keeps ticking on them."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield covers Angela as she steps up, letting her keep firing instead of retreating."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Kui"
        ],
        "matchRate": "2.27%"
      },
      {
        "names": [
          "Mi Yue"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Gao Changgong"
        ],
        "matchRate": "1.38%"
      },
      {
        "names": [
          "Mi Yue",
          "Kui"
        ],
        "matchRate": "5.46%"
      },
      {
        "names": [
          "Consort Yu",
          "Kui"
        ],
        "matchRate": "4.15%"
      },
      {
        "names": [
          "Luban No.7",
          "Kui"
        ],
        "matchRate": "4.05%"
      },
      {
        "names": [
          "Wukong",
          "Kui"
        ],
        "matchRate": "3.88%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Scepter of Reverberation",
        "Savant's Wrath",
        "Insatiable Tome",
        "Void Staff",
        "Sage's Tome"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Artillery"
    ]
  },
  {
    "id": "annette",
    "name": "Annette",
    "role": "Roam",
    "avatarUrl": "/heroes/annette.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "gan-mo",
        "name": "Gan & Mo",
        "reason": "Gan & Mo instantly refill their flying swords with Freshly Forged, closing the window Annette needs to step up."
      },
      {
        "id": "kongming",
        "name": "Kongming",
        "reason": "Kongming's Spirit Bomb hits harder the more Health Annette has lost, so a chipped Annette only gets easier to kill."
      }
    ],
    "synergies": [
      {
        "id": "hou-yi",
        "name": "Hou Yi",
        "reason": "Hou Yi has to stand still to keep firing, and Hurricane Wall covers exactly that window."
      },
      {
        "id": "consort-yu",
        "name": "Consort Yu",
        "reason": "Consort Yu needs a wind-up before Oak Bolt fires, and Annette's shield carries that charge through."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Di Renjie"
        ],
        "matchRate": "2.37%"
      },
      {
        "names": [
          "Huang Zhong"
        ],
        "matchRate": "2.31%"
      },
      {
        "names": [
          "Di Renjie",
          "Nakoruru"
        ],
        "matchRate": "5.53%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Redemption",
        "Boots of Deftness",
        "Dawnlight",
        "Frozen Breath",
        "Venomous Staff",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Roam"
    ]
  },
  {
    "id": "aoyin",
    "name": "Ao'yin",
    "role": "Farm",
    "avatarUrl": "/heroes/aoyin.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "arli",
        "name": "Arli",
        "reason": "Arli blinks off with the speed she gains from dropping her parasol, then shoves Ao'yin back out of range."
      },
      {
        "id": "consort-yu",
        "name": "Consort Yu",
        "reason": "Consort Yu can go immune to physical attacks, and nearly everything Ao'yin deals is physical."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield and knockback hold the front line, letting Ao'yin attack through all of True Dragon Sword."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "2.76%"
      },
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "2.25%"
      },
      {
        "names": [
          "Dyadia"
        ],
        "matchRate": "2.05%"
      },
      {
        "names": [
          "Yuhuan"
        ],
        "matchRate": "1.60%"
      },
      {
        "names": [
          "Dolia",
          "Jing"
        ],
        "matchRate": "6.01%"
      },
      {
        "names": [
          "Lu Bu",
          "Dolia"
        ],
        "matchRate": "5.94%"
      },
      {
        "names": [
          "Luna",
          "Dyadia"
        ],
        "matchRate": "5.32%"
      },
      {
        "names": [
          "Sun Bin",
          "Augran"
        ],
        "matchRate": "4.08%"
      },
      {
        "names": [
          "Dolia",
          "Umbrosa"
        ],
        "matchRate": "4.01%"
      }
    ],
    "equipment": {
      "build": [
        "Eternity Blade",
        "Boots of Resistance",
        "Shadow Ripper",
        "Daybreaker's Virtue",
        "Doomsday",
        "Overlord's Might"
      ],
      "arcana": [
        "Calamity",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "Artillery"
    ]
  },
  {
    "id": "arke",
    "name": "Arke",
    "role": "Jungle",
    "avatarUrl": "/heroes/arke.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "arthur",
        "name": "Arthur",
        "reason": "Arthur's enhanced attack dashes in and silences Arke, cutting her combo off partway through."
      },
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu's ring of slaughter spikes his defenses, and its edge slows Arke as she tries to leave."
      }
    ],
    "synergies": [
      {
        "id": "bai-qi",
        "name": "Bai Qi",
        "reason": "Bai Qi's taunt turns the target toward him, leaving their back open for Arke's guaranteed crit."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's camouflage covers Arke too, so she reaches a target's back without ever being seen coming."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Heino"
        ],
        "matchRate": "1.92%"
      },
      {
        "names": [
          "Huang Zhong"
        ],
        "matchRate": "1.48%"
      },
      {
        "names": [
          "Lian Po",
          "Huang Zhong"
        ],
        "matchRate": "4.59%"
      },
      {
        "names": [
          "Luban No.7",
          "Kui"
        ],
        "matchRate": "3.95%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Tranquility",
        "Axe of Torment",
        "Eternity Blade",
        "Master Sword",
        "Starbreaker"
      ],
      "arcana": [
        "Unparalleled",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Burst"
    ]
  },
  {
    "id": "arli",
    "name": "Arli",
    "role": "Farm",
    "avatarUrl": "/heroes/arli.webp",
    "counters": [
      "aoyin",
      "augran",
      "charlotte",
      "devara",
      "haya",
      "lorion"
    ],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression pins Arli in place, and her blink cannot answer it while the hold lasts."
      },
      {
        "id": "daji",
        "name": "Daji",
        "reason": "Daji's Strike a Pose is aimed straight at its target, so Arli's Lithe Step cannot dodge the stun."
      }
    ],
    "synergies": [
      {
        "id": "da-qiao",
        "name": "Da Qiao",
        "reason": "Da Qiao's Eye of the Whirlpool gives Arli a way home, so she can dive in far deeper."
      },
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's slow holds enemies still, letting Arli chain Basic Attacks into a full set of Maple stacks."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "9.13%"
      },
      {
        "names": [
          "Da Qiao"
        ],
        "matchRate": "5.07%"
      },
      {
        "names": [
          "Shi"
        ],
        "matchRate": "2.66%"
      },
      {
        "names": [
          "Dyadia"
        ],
        "matchRate": "2.56%"
      },
      {
        "names": [
          "Sakeer"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Menki",
          "Yaria"
        ],
        "matchRate": "13.16%"
      },
      {
        "names": [
          "Wang Zhaojun",
          "Yaria"
        ],
        "matchRate": "12.53%"
      },
      {
        "names": [
          "Musashi",
          "Yaria"
        ],
        "matchRate": "12.26%"
      },
      {
        "names": [
          "Yaria",
          "Shi"
        ],
        "matchRate": "11.11%"
      },
      {
        "names": [
          "Musashi",
          "Da Qiao"
        ],
        "matchRate": "8.04%"
      }
    ],
    "equipment": {
      "build": [
        "Sparkforged Dagger",
        "Boots of Dexterity",
        "Doomsday",
        "Daybreaker's Virtue",
        "Eternity Blade",
        "Sunchaser"
      ],
      "arcana": [
        "Red Moon",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Frenzy"
    },
    "tags": [
      "Marksman",
      "Farm",
      "Nimble"
    ]
  },
  {
    "id": "arthur",
    "name": "Arthur",
    "role": "Clash",
    "avatarUrl": "/heroes/arthur.webp",
    "counters": [
      "arke",
      "charlotte",
      "flowborn-assassin",
      "lam",
      "mayene",
      "ukyo-tachibana"
    ],
    "counteredBy": [
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu always carries either true damage or physical pierce, so Arthur's bulk buys him nothing."
      },
      {
        "id": "mi-yue",
        "name": "Mi Yue",
        "reason": "Mi Yue vanishes into Umbral Moon immune to everything, so Might of Excalibur lands on nothing."
      }
    ],
    "synergies": [
      {
        "id": "luban-no-7",
        "name": "Luban No.7",
        "reason": "Luban No.7's bombs only fall on enemies standing inside the area, and Arthur's launch keeps them there."
      },
      {
        "id": "arke",
        "name": "Arke",
        "reason": "Arke only crits from behind, and Arthur's launch freezes the target long enough for her to circle around."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Daji"
        ],
        "matchRate": "1.62%"
      },
      {
        "names": [
          "Ming"
        ],
        "matchRate": "1.61%"
      },
      {
        "names": [
          "Hou Yi",
          "Ming"
        ],
        "matchRate": "6.07%"
      },
      {
        "names": [
          "Daji",
          "Kui"
        ],
        "matchRate": "5.50%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Frostscar's Embrace",
        "Blazing Cape",
        "Spikemail",
        "Succubus Cloak",
        "Cuirass of Savagery"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Execute"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Charger"
    ]
  },
  {
    "id": "ata",
    "name": "Ata",
    "role": "Clash",
    "avatarUrl": "/heroes/ata.webp",
    "counters": [
      "gao-changgong",
      "jing",
      "sun-ce"
    ],
    "counteredBy": [
      {
        "id": "shouyue",
        "name": "Shouyue",
        "reason": "Shouyue's Wild Wind scales off max Health, so the more Health Ata stacks, the harder it hits."
      },
      {
        "id": "lady-sun",
        "name": "Lady Sun",
        "reason": "Lady Sun's rolls come back faster with every Basic Attack she lands, so Ata struggles to close the gap."
      }
    ],
    "synergies": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan needs repeated hits to build her marks, and Ata's Ghost Ship wall pens enemies in place."
      },
      {
        "id": "xiao-qiao",
        "name": "Xiao Qiao",
        "reason": "Xiao Qiao's Meteor Storm keeps raining on whoever is nearby, and Ata's Sea Anchor slow keeps them there."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "2.07%"
      },
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "1.73%"
      },
      {
        "names": [
          "Lady Sun",
          "Ming"
        ],
        "matchRate": "7.18%"
      },
      {
        "names": [
          "Sun Bin",
          "Dr Bian"
        ],
        "matchRate": "6.14%"
      },
      {
        "names": [
          "Mai Shiranui",
          "Chano"
        ],
        "matchRate": "5.90%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Fortitude",
        "Blazing Cape",
        "Ominous Premonition",
        "Eye of the Phoenix",
        "Spikemail",
        "Longnight Guardian"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Execute"
    },
    "tags": [
      "Tank",
      "Clash",
      "Vanguard"
    ]
  },
  {
    "id": "athena",
    "name": "Athena",
    "role": "Jungle",
    "avatarUrl": "/heroes/athena.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's Time Lapse interrupts and silences Athena, so her engage stops dead on the spot."
      },
      {
        "id": "guan-yu",
        "name": "Guan Yu",
        "reason": "Guan Yu in Charge Stance keeps knocking Athena back, so her combo never gets to land."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's Unbridled Outburst stuns whoever it flings to the far end, right as Athena's Immovable Aegis counterattacks."
      },
      {
        "id": "dharma",
        "name": "Dharma",
        "reason": "Dharma pins enemies against a wall and stuns them, so Athena's enhanced Unstoppable Spear attack lands cleanly."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Meng Ya"
        ],
        "matchRate": "2.93%"
      },
      {
        "names": [
          "Ming"
        ],
        "matchRate": "2.08%"
      },
      {
        "names": [
          "Hou Yi"
        ],
        "matchRate": "1.79%"
      },
      {
        "names": [
          "Hou Yi",
          "Ming"
        ],
        "matchRate": "10.06%"
      },
      {
        "names": [
          "Lady Sun",
          "Ming"
        ],
        "matchRate": "6.64%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Frostscar's Embrace",
        "Axe of Torment",
        "Doomsday",
        "Blood Rage"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Assassin"
    ]
  },
  {
    "id": "augran",
    "name": "Augran",
    "role": "Jungle",
    "avatarUrl": "/heroes/augran.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "arli",
        "name": "Arli",
        "reason": "Arli blinks away and speeds up without her parasol, so Augran's Soul Resonance never stays connected."
      }
    ],
    "synergies": [
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's slow clumps enemies, so Augran can mark them with Death's Precipice and link Soul Resonance to several."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "1.8%"
      },
      {
        "names": [
          "Sun Bin",
          "Ao'yin"
        ],
        "matchRate": "4.08%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Shadow Ripper",
        "Doomsday",
        "Ominous Premonition",
        "Pure Sky"
      ],
      "arcana": [
        "Calamity",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Assassin"
    ]
  },
  {
    "id": "bai-qi",
    "name": "Bai Qi",
    "role": "Clash",
    "avatarUrl": "/heroes/bai-qi.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu's enchanted halberd adds true damage on top, which Bai Qi's stacked defense cannot cut down."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's barrier stuns anything touching it, so Bai Qi's Lay Waste jump leaves him locked in place."
      }
    ],
    "synergies": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan needs repeat casts on the same targets, and Bai Qi's taunt buys her exactly that time."
      },
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria's shield scales with the target's extra Health, so it grows thickest on a Health-stacking Bai Qi."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "3.82%"
      },
      {
        "names": [
          "Dr Bian"
        ],
        "matchRate": "3.57%"
      },
      {
        "names": [
          "Yuhuan"
        ],
        "matchRate": "2.13%"
      },
      {
        "names": [
          "Sun Bin",
          "Dr Bian"
        ],
        "matchRate": "10.60%"
      },
      {
        "names": [
          "Dr Bian",
          "Agudo"
        ],
        "matchRate": "8.53%"
      },
      {
        "names": [
          "Yuhuan",
          "Pei"
        ],
        "matchRate": "4.09%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Deftness",
        "Blazing Cape",
        "Overlord's Platemail",
        "Longnight Guardian",
        "Frigid Charge",
        "Ominous Premonition"
      ],
      "arcana": [
        "Fate",
        "Stealth",
        "Void"
      ],
      "spell": "Execute"
    },
    "tags": [
      "Tank",
      "Clash",
      "Vanguard"
    ]
  },
  {
    "id": "biron",
    "name": "Biron",
    "role": "Clash",
    "avatarUrl": "/heroes/biron.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "menki",
        "name": "Menki",
        "reason": "Menki stacks Dream Bubble slows and walks away from Biron before he can catch up."
      },
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu's enchanted halberd deals true damage that ignores defenses, so Biron's bulk counts for nothing."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies into one pile with The Animist and stuns them, so Force Field Suppression lands on all of them."
      },
      {
        "id": "liu-bang",
        "name": "Liu Bang",
        "reason": "Liu Bang's shield and arrival heal stack onto Biron's own shield, letting him hold the front line."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "1.52%"
      },
      {
        "names": [
          "Gao",
          "Sun Bin"
        ],
        "matchRate": "3.89%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Blazing Cape",
        "Eye of the Phoenix",
        "Pure Sky",
        "Glacial Buckler",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Fate",
        "Stealth",
        "Hunt",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Heavy"
    ]
  },
  {
    "id": "butterfly",
    "name": "Butterfly",
    "role": "Jungle",
    "avatarUrl": "/heroes/butterfly.webp",
    "counters": [
      "heino"
    ],
    "counteredBy": [
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu's ring of slaughter raises both his defenses, so Butterfly struggles to trade with him."
      },
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan keeps trimming Petals in the Wind's cooldown, so she blinks away before Butterfly can close."
      }
    ],
    "synergies": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's Butterfly Effect clears crowd control and grants immunity, so Butterfly can dive without being locked down."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's Cannon Blast stuns whoever it hits, so Butterfly's Death Dealer lands on a target that cannot move."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "3.74%"
      },
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "3.19%"
      },
      {
        "names": [
          "Liu Shan",
          "Di Renjie"
        ],
        "matchRate": "6.60%"
      },
      {
        "names": [
          "Sun Bin",
          "Erin"
        ],
        "matchRate": "4.89%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Axe of Torment",
        "Destiny",
        "Master Sword",
        "Pure Sky"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Assassin"
    ]
  },
  {
    "id": "cai-yan",
    "name": "Cai Yan",
    "role": "Roam",
    "avatarUrl": "/heroes/cai-yan.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "musashi",
        "name": "Musashi",
        "reason": "Musashi's Duel to the Death delays all recovery on his target, so Cai Yan's healing arrives only after the duel ends."
      },
      {
        "id": "lady-zhen",
        "name": "Lady Zhen",
        "reason": "Lady Zhen's Destructive Deluge pool denies Cai Yan a place to heal from, and its slow keeps her from leaving."
      }
    ],
    "synergies": [
      {
        "id": "hou-yi",
        "name": "Hou Yi",
        "reason": "Hou Yi keeps attacking with no way to disengage, so Tune of Tranquility's heal and defense are what keep him alive."
      },
      {
        "id": "gao",
        "name": "Gao",
        "reason": "Gao keeps performing deep in the enemy team, so Tune of Tranquility's heal and defense cover his whole song."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Huang Zhong"
        ],
        "matchRate": "3.08%"
      },
      {
        "names": [
          "Hou Yi"
        ],
        "matchRate": "2.78%"
      },
      {
        "names": [
          "Luban No.7"
        ],
        "matchRate": "2.39%"
      },
      {
        "names": [
          "Ying"
        ],
        "matchRate": "1.62%"
      },
      {
        "names": [
          "Li Bai"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Daji",
          "Hou Yi"
        ],
        "matchRate": "6.23%"
      },
      {
        "names": [
          "Li Bai",
          "Huang Zhong"
        ],
        "matchRate": "6.21%"
      },
      {
        "names": [
          "Zilong",
          "Hou Yi"
        ],
        "matchRate": "5.96%"
      },
      {
        "names": [
          "Mai Shiranui",
          "Chano"
        ],
        "matchRate": "5.32%"
      },
      {
        "names": [
          "Xiao Qiao",
          "Zilong"
        ],
        "matchRate": "4.33%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Redemption",
        "Boots of Resistance",
        "Holy Grail",
        "Venomous Staff",
        "Augur's Word",
        "Ardent Dominion"
      ],
      "arcana": [
        "Saint",
        "Harmony",
        "Tribute"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Support",
      "Roam",
      "Buff"
    ]
  },
  {
    "id": "chano",
    "name": "Chano",
    "role": "Farm",
    "avatarUrl": "/heroes/chano.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong closes in from stealth, so the spacing Chano takes from the brush counts for nothing."
      },
      {
        "id": "musashi",
        "name": "Musashi",
        "reason": "Musashi knocks projectiles out of the air with Illuminating Slash, so Chano's airborne shot dies in flight."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's gust blows enemies back, so they land right where Chano's traps are already waiting."
      },
      {
        "id": "lapulapu",
        "name": "Lapulapu",
        "reason": "Lapulapu launches enemies and slows them on landing, so they sit still for Chano's traps and wolf spirits."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Mai Shiranui"
        ],
        "matchRate": "1.99%"
      },
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "1.56%"
      },
      {
        "names": [
          "Mai Shiranui",
          "Ata"
        ],
        "matchRate": "5.90%"
      },
      {
        "names": [
          "Mai Shiranui",
          "Cai Yan"
        ],
        "matchRate": "5.32%"
      },
      {
        "names": [
          "Nuwa",
          "Flowborn (Tank)"
        ],
        "matchRate": "1.63%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Eternity Blade",
        "Daybreaker's Virtue",
        "Shadow Ripper",
        "Doomsday",
        "Sunchaser"
      ],
      "arcana": [
        "Calamity",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "Artillery"
    ]
  },
  {
    "id": "charlotte",
    "name": "Charlotte",
    "role": "Clash",
    "avatarUrl": "/heroes/charlotte.webp",
    "counters": [
      "fuzi"
    ],
    "counteredBy": [
      {
        "id": "arthur",
        "name": "Arthur",
        "reason": "Arthur's silence breaks the Follow-Up chain Charlotte relies on, and her own slow only speeds his healing."
      },
      {
        "id": "arli",
        "name": "Arli",
        "reason": "Arli's Autumn Storm knocks Charlotte away, cutting short the close-range pressure Charlotte needs to build."
      }
    ],
    "synergies": [
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui's launch freezes enemies in place, letting Charlotte's enhanced Basic Attack land in full."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies into one stunned clump, so Charlotte's Power Gradation catches several of them at once."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "1.48%"
      },
      {
        "names": [
          "Liu Shan"
        ],
        "matchRate": "1.46%"
      },
      {
        "names": [
          "Liu Shan",
          "Shouyue"
        ],
        "matchRate": "3.33%"
      },
      {
        "names": [
          "Kui",
          "Shouyue"
        ],
        "matchRate": "3.28%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Axe of Torment",
        "Frostscar's Embrace",
        "Pure Sky",
        "Eye of the Phoenix",
        "Ominous Premonition"
      ],
      "arcana": [
        "Mutation",
        "Harmony",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Charger"
    ]
  },
  {
    "id": "chicha",
    "name": "Chicha",
    "role": "Clash",
    "avatarUrl": "/heroes/chicha.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "dun",
        "name": "Dun",
        "reason": "Dun chains a slow into a launch, stalling Chicha's attacks until her Fighting Spirit falls off."
      },
      {
        "id": "lam",
        "name": "Lam",
        "reason": "Lam dashes right back in after every knockback, healing himself as he closes the gap again."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei shields her and knocks divers away, so Chicha's Basic Attacks never have to stop."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies into one spot, so Chicha's Overkill Form arrows lock onto the whole group."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "2.35%"
      },
      {
        "names": [
          "Shi"
        ],
        "matchRate": "2.30%"
      },
      {
        "names": [
          "Zhang Fei",
          "Shi"
        ],
        "matchRate": "6.18%"
      },
      {
        "names": [
          "Zhang Fei",
          "Nuwa"
        ],
        "matchRate": "4.03%"
      }
    ],
    "equipment": {
      "build": [
        "Sparkforged Dagger",
        "Boots of Dexterity",
        "Doomsday",
        "Destiny",
        "Tempest",
        "Blood Rage"
      ],
      "arcana": [
        "Fate",
        "Stealth",
        "Beast Scar",
        "Eagle Eye"
      ],
      "spell": "Frenzy"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Charger"
    ]
  },
  {
    "id": "cirrus",
    "name": "Cirrus",
    "role": "Jungle",
    "avatarUrl": "/heroes/cirrus.webp",
    "counters": [
      "hou-yi"
    ],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression also denies the cleanse on Soaring Whirlwind, leaving Cirrus with no way out."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang splits all damage taken during his suppression, so a diving Cirrus goes down with him."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's camouflage covers teammates too, so Cirrus can slip into the enemy back line unseen."
      },
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria attaches and hands Cirrus a true-damage shield, so he can absorb the first shot after diving in."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "1.67%"
      },
      {
        "names": [
          "Marco Polo",
          "Yaria"
        ],
        "matchRate": "18.63%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Axe of Torment",
        "Doomsday",
        "Overlord's Might",
        "Pure Sky"
      ],
      "arcana": [
        "Red Moon",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Burst"
    ]
  },
  {
    "id": "consort-yu",
    "name": "Consort Yu",
    "role": "Farm",
    "avatarUrl": "/heroes/consort-yu.webp",
    "counters": [
      "aoyin",
      "luban-no-7",
      "marco-polo",
      "shouyue"
    ],
    "counteredBy": [
      {
        "id": "erin",
        "name": "Erin",
        "reason": "Erin's skill damage is magical, so it ignores Consort Yu's physical immunity, and Forest Whisper shrugs off the slows."
      },
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan blinks straight in, and her magical and true damage ignores Consort Yu's physical immunity entirely."
      }
    ],
    "synergies": [
      {
        "id": "lapulapu",
        "name": "Lapulapu",
        "reason": "Lapulapu's launch and slowing fissures freeze enemies in place, so Consort Yu's charged bolt pierces the group."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's suppression pins an enemy completely still, giving Consort Yu a free target for her charged bolt."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dian Wei"
        ],
        "matchRate": "1.54%"
      },
      {
        "names": [
          "Xiang Yu"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Han Xin"
        ],
        "matchRate": "1.45%"
      },
      {
        "names": [
          "Liu Shan",
          "Milady"
        ],
        "matchRate": "5.53%"
      },
      {
        "names": [
          "Dian Wei",
          "Ziya"
        ],
        "matchRate": "4.63%"
      },
      {
        "names": [
          "Angela",
          "Kui"
        ],
        "matchRate": "4.15%"
      },
      {
        "names": [
          "Xiang Yu",
          "Milady"
        ],
        "matchRate": "3.07%"
      },
      {
        "names": [
          "Xiang Yu",
          "Han Xin"
        ],
        "matchRate": "2.89%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Eternity Blade",
        "Shadow Ripper",
        "Daybreaker's Virtue",
        "Mortal Punisher",
        "Sunchaser"
      ],
      "arcana": [
        "Calamity",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "DPS"
    ]
  },
  {
    "id": "da-qiao",
    "name": "Da Qiao",
    "role": "Roam",
    "avatarUrl": "/heroes/da-qiao.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin is immune to crowd control during The Unrivaled Spear, so Da Qiao's koi launches do nothing."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's Forbidden Domain knocks heroes back, scattering the team Da Qiao just gathered into Eye of the Whirlpool."
      }
    ],
    "synergies": [
      {
        "id": "di-renjie",
        "name": "Di Renjie",
        "reason": "Di Renjie's Imperial Order halves a target's defenses, so the allies Da Qiao teleports in hit far harder."
      },
      {
        "id": "mulan",
        "name": "Mulan",
        "reason": "Mulan needs time to stack Balance, and Da Qiao's tide explosion slows enemies so they cannot slip away."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Arli"
        ],
        "matchRate": "5.07%"
      },
      {
        "names": [
          "Fuzi"
        ],
        "matchRate": "2.97%"
      },
      {
        "names": [
          "Sun Ce"
        ],
        "matchRate": "1.44%"
      },
      {
        "names": [
          "Yao"
        ],
        "matchRate": "1.37%"
      },
      {
        "names": [
          "Musashi",
          "Arli"
        ],
        "matchRate": "8.04%"
      },
      {
        "names": [
          "Fuzi",
          "Pei"
        ],
        "matchRate": "6.13%"
      },
      {
        "names": [
          "Arli",
          "Yao"
        ],
        "matchRate": "3.83%"
      },
      {
        "names": [
          "Di Renjie",
          "Yao"
        ],
        "matchRate": "3.39%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Redemption",
        "Boots of Resistance",
        "Dawnlight",
        "Ominous Premonition",
        "Succubus Cloak",
        "Augur's Word"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Mage",
      "Roam",
      "Tactical",
      "Support"
    ]
  },
  {
    "id": "daji",
    "name": "Daji",
    "role": "Mid",
    "avatarUrl": "/heroes/daji.webp",
    "counters": [
      "angela",
      "arli",
      "guan-yu",
      "jing",
      "ming",
      "umbrosa"
    ],
    "counteredBy": [
      {
        "id": "mulan",
        "name": "Mulan",
        "reason": "Mulan stacks Balance until it detonates and silences Daji, cutting off her skills entirely."
      },
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong strikes out of stealth, and Daji has nothing but her stun to answer with."
      }
    ],
    "synergies": [
      {
        "id": "wukong",
        "name": "Wukong",
        "reason": "Wukong's enhanced Basic Attack is hard to land, but Daji's stun holds the target still for it."
      },
      {
        "id": "arke",
        "name": "Arke",
        "reason": "Arke only crits from behind, and Daji's stun freezes the target long enough for her to get there."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Kui"
        ],
        "matchRate": "2.51%"
      },
      {
        "names": [
          "Wuyan"
        ],
        "matchRate": "1.78%"
      },
      {
        "names": [
          "Zilong"
        ],
        "matchRate": "1.71%"
      },
      {
        "names": [
          "Arthur"
        ],
        "matchRate": "1.62%"
      },
      {
        "names": [
          "Yang Jian"
        ],
        "matchRate": "1.38%"
      },
      {
        "names": [
          "Hou Yi",
          "Ming"
        ],
        "matchRate": "9.39%"
      },
      {
        "names": [
          "Lian Po",
          "Han Xin"
        ],
        "matchRate": "8.7%"
      },
      {
        "names": [
          "Hou Yi",
          "Cai Yan"
        ],
        "matchRate": "6.23%"
      },
      {
        "names": [
          "Arthur",
          "Kui"
        ],
        "matchRate": "5.50%"
      },
      {
        "names": [
          "Wukong",
          "Donghuang"
        ],
        "matchRate": "5.2%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Scepter of Reverberation",
        "Savant's Wrath",
        "Insatiable Tome",
        "Sage's Tome",
        "Void Staff"
      ],
      "arcana": [
        "Saint",
        "Hunt",
        "Tribute"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Artillery"
    ]
  },
  {
    "id": "devara",
    "name": "Devara",
    "role": "Clash",
    "avatarUrl": "/heroes/devara.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "gan-mo",
        "name": "Gan & Mo",
        "reason": "Gan & Mo knock enemies back while stepping away, so the melee range Devara relies on disappears."
      },
      {
        "id": "arli",
        "name": "Arli",
        "reason": "Arli blinks away and speeds up with her parasol down, so Devara struggles to hold melee range."
      }
    ],
    "synergies": [
      {
        "id": "kongming",
        "name": "Kongming",
        "reason": "Kongming's magic fields slow enemies to a crawl, letting Devara stay in the melee range he wants."
      },
      {
        "id": "li-bai",
        "name": "Li Bai",
        "reason": "Li Bai's dashes stun enemies in place, so the delayed blast of Divine Judgment lands on them."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Shi"
        ],
        "matchRate": "2.46%"
      },
      {
        "names": [
          "Dyadia"
        ],
        "matchRate": "2.03%"
      },
      {
        "names": [
          "Kaizer",
          "Shi"
        ],
        "matchRate": "5.94%"
      },
      {
        "names": [
          "Zhang Fei",
          "Shi"
        ],
        "matchRate": "5.33%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Sparkforged Dagger",
        "Tempest",
        "Doomsday",
        "Sunchaser",
        "Daybreaker's Virtue"
      ],
      "arcana": [
        "Fate",
        "Red Moon",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Purify"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Berserker"
    ]
  },
  {
    "id": "dharma",
    "name": "Dharma",
    "role": "Clash",
    "avatarUrl": "/heroes/dharma.webp",
    "counters": [
      "dolia"
    ],
    "counteredBy": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi cleanses crowd control and blocks it for his whole team, so Dharma's wall slams never connect."
      },
      {
        "id": "di-renjie",
        "name": "Di Renjie",
        "reason": "Di Renjie's Legal Immunity shrugs off crowd control and clears debuffs, so even a wall stun cannot hold him."
      }
    ],
    "synergies": [
      {
        "id": "zilong",
        "name": "Zilong",
        "reason": "Zilong's Skysplitter shocks enemies, and Dharma's dash launches those at the center, making a wall slam easier to land."
      },
      {
        "id": "daji",
        "name": "Daji",
        "reason": "Daji's point-and-click stun is hard to miss, so Dharma can land his punch flurry on a target who cannot move."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Gan & Mo"
        ],
        "matchRate": "1.57%"
      },
      {
        "names": [
          "Gan & Mo",
          "Shouyue"
        ],
        "matchRate": "3.62%"
      },
      {
        "names": [
          "Gan & Mo",
          "Donghuang"
        ],
        "matchRate": "3.27%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Axe of Torment",
        "Frostscar's Embrace",
        "Pure Sky",
        "Starbreaker",
        "Demonsbane"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Charger"
    ]
  },
  {
    "id": "di-renjie",
    "name": "Di Renjie",
    "role": "Farm",
    "avatarUrl": "/heroes/di-renjie.webp",
    "counters": [
      "dharma",
      "fang",
      "umbrosa",
      "xiang-yu",
      "ying"
    ],
    "counteredBy": [
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong's dagger mark lets him stun Di Renjie and heal himself while cutting him down."
      },
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin is crowd control immune during The Unrivaled Spear, so Imperial Order's stun cannot stop the flurry."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei leaps in and shields every teammate in range, so Di Renjie can hold his ground and keep throwing tokens."
      },
      {
        "id": "dolia",
        "name": "Dolia",
        "reason": "Dolia's Celestial Melody resets whichever skill has the longest cooldown left, so Di Renjie can fire Imperial Order again."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Sakeer"
        ],
        "matchRate": "2.37%"
      },
      {
        "names": [
          "Annette"
        ],
        "matchRate": "2.37%"
      },
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "1.99%"
      },
      {
        "names": [
          "Jing"
        ],
        "matchRate": "1.97%"
      },
      {
        "names": [
          "Dr Bian"
        ],
        "matchRate": "1.77%"
      },
      {
        "names": [
          "Dolia",
          "Shangguan"
        ],
        "matchRate": "8.00%"
      },
      {
        "names": [
          "Sun Bin",
          "Dr Bian"
        ],
        "matchRate": "6.67%"
      },
      {
        "names": [
          "Liu Shan",
          "Butterfly"
        ],
        "matchRate": "6.60%"
      },
      {
        "names": [
          "Zhang Fei",
          "Jing"
        ],
        "matchRate": "5.89%"
      },
      {
        "names": [
          "Nakoruru",
          "Annette"
        ],
        "matchRate": "5.53%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Doomsday",
        "Sparkforged Dagger",
        "Daybreaker's Virtue",
        "Succubus Cloak",
        "Sunchaser"
      ],
      "arcana": [
        "Calamity",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "DPS"
    ]
  },
  {
    "id": "dian-wei",
    "name": "Dian Wei",
    "role": "Jungle",
    "avatarUrl": "/heroes/dian-wei.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "mi-yue",
        "name": "Mi Yue",
        "reason": "Mi Yue's Ravenous Tether keeps draining Dian Wei's physical attack until he can no longer win a trade."
      },
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's Power Word - Control pins Dian Wei in place and burns him down with magical damage before he can swing back."
      }
    ],
    "synergies": [
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's Time Flux speeds up teammates too, letting Dian Wei close his opening gap in one go."
      },
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's marks raise teammates' Movement Speed, so Dian Wei can stay glued to whoever he jumps on."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ziya"
        ],
        "matchRate": "2.85%"
      },
      {
        "names": [
          "Mozi"
        ],
        "matchRate": "1.67%"
      },
      {
        "names": [
          "Consort Yu"
        ],
        "matchRate": "1.54%"
      },
      {
        "names": [
          "Mozi",
          "Shouyue"
        ],
        "matchRate": "7.89%"
      },
      {
        "names": [
          "Hou Yi",
          "Ming"
        ],
        "matchRate": "5.95%"
      },
      {
        "names": [
          "Ziya",
          "Consort Yu"
        ],
        "matchRate": "4.63%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Fortitude",
        "Axe of Torment",
        "Spikemail",
        "Master Sword",
        "Pure Sky"
      ],
      "arcana": [
        "Calamity",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Berserker"
    ]
  },
  {
    "id": "diaochan",
    "name": "Diaochan",
    "role": "Mid",
    "avatarUrl": "/heroes/diaochan.webp",
    "counters": [
      "butterfly",
      "consort-yu",
      "dun",
      "han-xin",
      "lian-po",
      "luara",
      "musashi",
      "nezha",
      "pei",
      "sun-bin",
      "yang-jian",
      "yango",
      "yixing",
      "zhang-fei"
    ],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression locks Diaochan in place, so even her blink cannot break her out of it."
      },
      {
        "id": "mulan",
        "name": "Mulan",
        "reason": "Mulan's Balance stacks detonate into a silence, cutting off Diaochan's skills and her blink escape."
      }
    ],
    "synergies": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's Butterfly Effect clears and blocks crowd control, so Diaochan can dive without being stopped."
      },
      {
        "id": "bai-qi",
        "name": "Bai Qi",
        "reason": "Bai Qi's pull and taunt hold enemies still, letting Diaochan stack her floral marks to detonation."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "2.42%"
      },
      {
        "names": [
          "Shouyue"
        ],
        "matchRate": "2.12%"
      },
      {
        "names": [
          "Marco Polo",
          "Yaria"
        ],
        "matchRate": "19.02%"
      },
      {
        "names": [
          "Wukong",
          "Shouyue"
        ],
        "matchRate": "7.08%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Holy Grail",
        "Insatiable Tome",
        "Breakthrough Robe",
        "Augur's Word",
        "Savant's Wrath"
      ],
      "arcana": [
        "Nightmare",
        "Harmony",
        "Beast Scar",
        "Compassion"
      ],
      "spell": "Purify"
    },
    "tags": [
      "Mage",
      "Mid",
      "Formation"
    ]
  },
  {
    "id": "dolia",
    "name": "Dolia",
    "role": "Roam",
    "avatarUrl": "/heroes/dolia.webp",
    "counters": [
      "mozi"
    ],
    "counteredBy": [
      {
        "id": "dharma",
        "name": "Dharma",
        "reason": "Dharma slams Dolia into a wall for a stun, and that wall powers up his follow-up kick."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi stacks stuns from his shell and barrier, and they keep interrupting Dolia's Celestial Melody channel."
      }
    ],
    "synergies": [
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu's ultimate has a long cooldown, and Celestial Melody hands it right back after he leaps."
      },
      {
        "id": "shangguan",
        "name": "Shangguan",
        "reason": "Shangguan's Finishing Stroke sits at its longest cooldown right after a full dash chain, exactly what Celestial Melody resets."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Lu Bu"
        ],
        "matchRate": "7.40%"
      },
      {
        "names": [
          "Shangguan"
        ],
        "matchRate": "4.53%"
      },
      {
        "names": [
          "Haya"
        ],
        "matchRate": "3.49%"
      },
      {
        "names": [
          "Ao'yin"
        ],
        "matchRate": "2.76%"
      },
      {
        "names": [
          "Lorion"
        ],
        "matchRate": "2.11%"
      },
      {
        "names": [
          "Gao",
          "Lu Bu"
        ],
        "matchRate": "11.74%"
      },
      {
        "names": [
          "Lu Bu",
          "Yixing"
        ],
        "matchRate": "11.5%"
      },
      {
        "names": [
          "Lu Bu",
          "Shangguan"
        ],
        "matchRate": "8.68%"
      },
      {
        "names": [
          "Garuda",
          "Lu Bu"
        ],
        "matchRate": "8.35%"
      },
      {
        "names": [
          "Di Renjie",
          "Shangguan"
        ],
        "matchRate": "8.00%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Redemption",
        "Boots of Resistance",
        "Holy Grail",
        "Dawnlight",
        "Succubus Cloak",
        "Ominous Premonition"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Hunt",
        "Void"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Support",
      "Roam",
      "Buff"
    ]
  },
  {
    "id": "donghuang",
    "name": "Donghuang",
    "role": "Roam",
    "avatarUrl": "/heroes/donghuang.webp",
    "counters": [
      "allain",
      "cirrus",
      "feyd",
      "florentino",
      "gao",
      "haya",
      "kaizer",
      "lady-sun",
      "li-bai",
      "nezha",
      "yao"
    ],
    "counteredBy": [
      {
        "id": "shouyue",
        "name": "Shouyue",
        "reason": "Shouyue's Wild Wind scales with Donghuang's max Health, so building tanky only makes the snipe hit harder."
      },
      {
        "id": "gan-mo",
        "name": "Gan & Mo",
        "reason": "Gan & Mo's Guard Her Grave knocks Donghuang back, breaking the close range Forsaken Contract needs."
      }
    ],
    "synergies": [
      {
        "id": "angela",
        "name": "Angela",
        "reason": "Angela's Blazing Brilliance is a long channel, and Forsaken Contract keeps a target pinned in place while it lands."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's camouflage hides Donghuang's approach, so he reaches Forsaken Contract range before anyone sees him coming."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Wukong"
        ],
        "matchRate": "1.93%"
      },
      {
        "names": [
          "Luban No.7"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Mayene"
        ],
        "matchRate": "1.43%"
      },
      {
        "names": [
          "Daji",
          "Wukong"
        ],
        "matchRate": "5.2%"
      },
      {
        "names": [
          "Dharma",
          "Gan & Mo"
        ],
        "matchRate": "3.27%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Breakthrough Robe",
        "Savant's Wrath",
        "Augur's Word",
        "Insatiable Tome",
        "Sage's Tome"
      ],
      "arcana": [
        "Nightmare",
        "Harmony",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Tank",
      "Roam",
      "Offensive",
      "Support"
    ]
  },
  {
    "id": "dr-bian",
    "name": "Dr Bian",
    "role": "Mid",
    "avatarUrl": "/heroes/dr-bian.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "yang-jian",
        "name": "Yang Jian",
        "reason": "Yang Jian's damage scales with the Health Dr Bian has already lost, so every trade makes the next one worse."
      },
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui strips magical defense before she dashes in, leaving Dr Bian no room to reset the distance."
      }
    ],
    "synergies": [
      {
        "id": "bai-qi",
        "name": "Bai Qi",
        "reason": "Bai Qi taunts and pulls enemies into one clump, so Dr Bian's detonated marks hit the whole group."
      },
      {
        "id": "xiang-yu",
        "name": "Xiang Yu",
        "reason": "Xiang Yu cannot be defeated during his ultimate, so Dr Bian's healing has time to land and hold the line."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Bai Qi"
        ],
        "matchRate": "3.57%"
      },
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "3.4%"
      },
      {
        "names": [
          "Di Renjie"
        ],
        "matchRate": "1.77%"
      },
      {
        "names": [
          "Sun Bin",
          "Bai Qi"
        ],
        "matchRate": "10.60%"
      },
      {
        "names": [
          "Bai Qi",
          "Agudo"
        ],
        "matchRate": "8.53%"
      },
      {
        "names": [
          "Sun Bin",
          "Di Renjie"
        ],
        "matchRate": "6.67%"
      },
      {
        "names": [
          "Sun Bin",
          "Ata"
        ],
        "matchRate": "6.14%"
      },
      {
        "names": [
          "Sun Bin",
          "Kaizer"
        ],
        "matchRate": "4.35%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Holy Grail",
        "Augur's Word",
        "Breakthrough Robe",
        "Savant's Wrath",
        "Sage's Tome"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Formation"
    ]
  },
  {
    "id": "dun",
    "name": "Dun",
    "role": "Clash",
    "avatarUrl": "/heroes/dun.webp",
    "counters": [
      "chicha",
      "fang"
    ],
    "counteredBy": [
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu brings true damage or Physical Pierce either way, so Dun's Health and defense stop neither."
      },
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan stacks floral marks from outside Dun's reach, and their true damage detonation ignores his defense."
      }
    ],
    "synergies": [
      {
        "id": "li-bai",
        "name": "Li Bai",
        "reason": "Li Bai can dash in on Dun's stun, build Sword Energy, and then return to where he started."
      },
      {
        "id": "arli",
        "name": "Arli",
        "reason": "Arli can spend her parasol-less speed window attacking rather than escaping, since Dun dives in ahead of her."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ziya"
        ],
        "matchRate": "2.68%"
      },
      {
        "names": [
          "Ming"
        ],
        "matchRate": "1.97%"
      },
      {
        "names": [
          "Milady"
        ],
        "matchRate": "1.67%"
      },
      {
        "names": [
          "Garuda"
        ],
        "matchRate": "1.42%"
      },
      {
        "names": [
          "Hou Yi",
          "Ming"
        ],
        "matchRate": "9.66%"
      },
      {
        "names": [
          "Kongming",
          "Ming"
        ],
        "matchRate": "7.59%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Blazing Cape",
        "Frostscar's Embrace",
        "Eye of the Phoenix",
        "Ominous Premonition",
        "Blood Rage"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Hunt",
        "Void"
      ],
      "spell": "Execute"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Guardian",
      "Tank"
    ]
  },
  {
    "id": "dunshan",
    "name": "Dunshan",
    "role": "Roam",
    "avatarUrl": "/heroes/dunshan.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "garo",
        "name": "Garo",
        "reason": "Garo's Basic Attacks and skills deal 50% extra damage against shields, so she strips the shields Dunshan hands out with Bastion quickly."
      },
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's Butterfly Effect cleanses crowd control from his teammates and makes them immune for 1.5s, undoing the stun after a Collision Course toss and blanking Allshield's knockback during that window."
      }
    ],
    "synergies": [
      {
        "id": "hou-yi",
        "name": "Hou Yi",
        "reason": "Hou Yi has no movement skill and struggles to escape divers on his own. While Dunshan shelters him, Dunshan's Basic Attacks turn ranged and slow each enemy they hit as it closes in."
      },
      {
        "id": "wang-zhaojun",
        "name": "Wang Zhaojun",
        "reason": "Allshield knocks enemies back and slows them by 25–50% for 1s, so if Wang Zhaojun drops Frigid Prison where they land, they struggle to walk out before the delayed freeze hits."
      }
    ],
    "tags": [
      "Tank",
      "Roam",
      "Offensive",
      "Support"
    ]
  },
  {
    "id": "dyadia",
    "name": "Dyadia",
    "role": "Roam",
    "avatarUrl": "/heroes/dyadia.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong stays in stealth far longer than the exposure from Bitter Farewell lasts, so it expires first."
      },
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's Power Word - Control locks Dyadia in place, and fated bond simply expires while she stands there."
      }
    ],
    "synergies": [
      {
        "id": "lady-sun",
        "name": "Lady Sun",
        "reason": "Lady Sun's Ultimate Shell needs a target that cannot move, and Destined Encounter pins enemies already carrying bitter bond."
      },
      {
        "id": "jing",
        "name": "Jing",
        "reason": "Jing's Mirror Domain gathers enemies into one spot and pins them, so Destined Encounter sweeps the whole clump."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Arli"
        ],
        "matchRate": "2.56%"
      },
      {
        "names": [
          "Ao'yin"
        ],
        "matchRate": "2.05%"
      },
      {
        "names": [
          "Devara"
        ],
        "matchRate": "2.03%"
      },
      {
        "names": [
          "Yixing"
        ],
        "matchRate": "1.94%"
      },
      {
        "names": [
          "Feyd"
        ],
        "matchRate": "1.81%"
      },
      {
        "names": [
          "Luna",
          "Ao'yin"
        ],
        "matchRate": "5.32%"
      },
      {
        "names": [
          "Lady Sun",
          "Musashi"
        ],
        "matchRate": "5.01%"
      },
      {
        "names": [
          "Yixing",
          "Feyd"
        ],
        "matchRate": "3.60%"
      },
      {
        "names": [
          "Yango",
          "Pei"
        ],
        "matchRate": "3.57%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Redemption",
        "Boots of Resistance",
        "Holy Grail",
        "Ominous Premonition",
        "Frozen Breath",
        "Succubus Cloak"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Roam",
      "Buff",
      "Support"
    ]
  },
  {
    "id": "erin",
    "name": "Erin",
    "role": "Farm",
    "avatarUrl": "/heroes/erin.webp",
    "counters": [
      "consort-yu"
    ],
    "counteredBy": [
      {
        "id": "lam",
        "name": "Lam",
        "reason": "Lam's pull drags Erin in regardless of her slow immunity, so she cannot hold her distance."
      },
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui's low-cooldown KACHOUSEN strips Erin's magical defense and keeps chipping her down."
      }
    ],
    "synergies": [
      {
        "id": "dun",
        "name": "Dun",
        "reason": "Dun's stun and launch pin enemies in place, letting Erin fire freely from the back line."
      },
      {
        "id": "xiang-yu",
        "name": "Xiang Yu",
        "reason": "Xiang Yu peels divers off Erin and cuts enemy damage output, so she survives being focused."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Gao Changgong"
        ],
        "matchRate": "1.96%"
      },
      {
        "names": [
          "Lu Bu"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Nakoruru",
          "Ming"
        ],
        "matchRate": "6.25%"
      },
      {
        "names": [
          "Sun Bin",
          "Butterfly"
        ],
        "matchRate": "4.89%"
      },
      {
        "names": [
          "Liu Shan",
          "Milady"
        ],
        "matchRate": "3.60%"
      },
      {
        "names": [
          "Liu Shan",
          "Ukyo Tachibana"
        ],
        "matchRate": "2.89%"
      },
      {
        "names": [
          "Nuwa",
          "Flowborn (Tank)"
        ],
        "matchRate": "1.46%"
      }
    ],
    "equipment": {
      "build": [
        "Sparkforged Dagger",
        "Boots of the Arcane",
        "Doomsday",
        "Void Staff",
        "Tempest",
        "Blood Rage"
      ],
      "arcana": [
        "Fate",
        "Reaver",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "Nimble"
    ]
  },
  {
    "id": "fang",
    "name": "Fang",
    "role": "Farm",
    "avatarUrl": "/heroes/fang.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "dun",
        "name": "Dun",
        "reason": "Dun chains a launch into a stun, leaving Fang no window to shoot back."
      },
      {
        "id": "di-renjie",
        "name": "Di Renjie",
        "reason": "Di Renjie's Legal Immunity gives him a brief window where nothing lands, so Fang's burst whiffs on him."
      }
    ],
    "synergies": [
      {
        "id": "liu-shan",
        "name": "Liu Shan",
        "reason": "Liu Shan's stun pins enemies in place, letting Fang land Bladestorm's double-damage center right on them."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield lets Fang hold his ground under fire and finish stacking Dark Marks."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Lapulapu"
        ],
        "matchRate": "2.31%"
      },
      {
        "names": [
          "Liu Shan"
        ],
        "matchRate": "2.23%"
      },
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "1.8%"
      },
      {
        "names": [
          "Milady"
        ],
        "matchRate": "1.8%"
      },
      {
        "names": [
          "Lian Po"
        ],
        "matchRate": "1.2%"
      },
      {
        "names": [
          "Liu Shan",
          "Milady"
        ],
        "matchRate": "6.52%"
      },
      {
        "names": [
          "Lian Po",
          "Flowborn (Mage)"
        ],
        "matchRate": "3.68%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Axe of Torment",
        "Mortal Punisher",
        "Cuirass of Savagery",
        "Daybreaker's Virtue"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Marksman",
      "Farm",
      "Artillery"
    ]
  },
  {
    "id": "fatih",
    "name": "Fatih",
    "role": "Clash",
    "avatarUrl": "/heroes/fatih.webp",
    "counters": [
      "kui"
    ],
    "counteredBy": [
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu's ring of Tremble, Mortals hands him heavy defenses, so Fatih's purely physical damage cannot break him."
      },
      {
        "id": "mulan",
        "name": "Mulan",
        "reason": "Mulan's Balance stacks detonate into a silence, and Fatih cannot answer with Sacred Tree Blessing."
      }
    ],
    "synergies": [
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's suppression freezes a target completely, so Fatih can land every slash of The King's Blade on it."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's pull bunches enemy heroes together, so Sacred Tree Blessing grants Fatih more max Health for each one nearby."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "2.06%"
      },
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "1.75%"
      },
      {
        "names": [
          "Sun Bin",
          "Di Renjie"
        ],
        "matchRate": "3.71%"
      },
      {
        "names": [
          "Marco Polo",
          "Dolia"
        ],
        "matchRate": "3.17%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Axe of Torment",
        "Frostscar's Embrace",
        "Pure Sky",
        "Succubus Cloak",
        "Doomsday"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Berserker"
    ]
  },
  {
    "id": "feyd",
    "name": "Feyd",
    "role": "Jungle",
    "avatarUrl": "/heroes/feyd.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression lasts even longer on Feyd while he stands on a wall, leaving him stuck."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "While Donghuang suppresses Feyd, the two share all damage, so even Feyd's allies end up hurting him."
      }
    ],
    "synergies": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan's marks detonate into a slow, which is exactly when Feyd's dash lands cleanly."
      },
      {
        "id": "mulan",
        "name": "Mulan",
        "reason": "Mulan's Balance detonation silences and heavily slows enemies, so Feyd can seal the whole group at once."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dyadia"
        ],
        "matchRate": "1.81%"
      },
      {
        "names": [
          "Flowborn (Marksman)"
        ],
        "matchRate": "1.81%"
      },
      {
        "names": [
          "Shi"
        ],
        "matchRate": "1.69%"
      },
      {
        "names": [
          "Zhang Fei",
          "Flowborn (Marksman)"
        ],
        "matchRate": "6.49%"
      },
      {
        "names": [
          "Di Renjie",
          "Cai Yan"
        ],
        "matchRate": "4.06%"
      },
      {
        "names": [
          "Yixing",
          "Dyadia"
        ],
        "matchRate": "3.60%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Axe of Torment",
        "Master Sword",
        "Pure Sky",
        "Doomsday"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Roving"
    ]
  },
  {
    "id": "florentino",
    "name": "Florentino",
    "role": "Clash",
    "avatarUrl": "/heroes/florentino.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's Forsaken Contract suppresses Florentino, cutting off Triple Threat's chain and his bouquet pickups."
      },
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's Power Word - Barrier walls off the approach, and the stun on contact cuts Florentino's dash short."
      }
    ],
    "synergies": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's Butterfly Effect strips crowd control from allies, so a pinned Florentino can move and fight again."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's The Animist pulls enemies into one spot, so Blossom's bouquets land right in that pile and keep refreshing Triple Threat."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Guiguzi"
        ],
        "matchRate": "3.03%"
      },
      {
        "names": [
          "Liang"
        ],
        "matchRate": "2.56%"
      },
      {
        "names": [
          "Wang Zhaojun",
          "Guiguzi"
        ],
        "matchRate": "6.70%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Pure Sky",
        "Frostscar's Embrace",
        "Dawnlight",
        "Succubus Cloak",
        "Overlord's Might"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash"
    ]
  },
  {
    "id": "flowborn-assassin",
    "name": "Flowborn (Assassin)",
    "role": "Jungle",
    "avatarUrl": "/heroes/flowborn-assassin.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "musashi",
        "name": "Musashi",
        "reason": "Musashi's duel delays Flowborn's healing until it ends, so Claw Flurry's recovery can't keep them in the fight."
      },
      {
        "id": "arthur",
        "name": "Arthur",
        "reason": "Arthur dashes in with a silencing strike, and Flowborn, whose healing and dashes all come from skills, loses both while silenced."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's ultimate camouflages nearby teammates too, so Flowborn can get within Claw Flurry range unseen."
      },
      {
        "id": "kui",
        "name": "Kui",
        "reason": "Kui hooks an enemy and keeps it stunned with his ultimate, so Flowborn can chain Claw Flurry on a pinned target."
      }
    ],
    "tags": [
      "Assassin",
      "Jungle",
      "Roving"
    ]
  },
  {
    "id": "flowborn-mage",
    "name": "Flowborn (Mage)",
    "role": "Mid",
    "avatarUrl": "/heroes/flowborn-mage.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "jing",
        "name": "Jing",
        "reason": "Jing's paired marks reset the dash she engages with, so Flowborn can never keep her at range."
      },
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's circles claim the ground, and a turret mage like Flowborn gets whittled down standing in them."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield and his wind's stun buy the stationary Flowborn the time to finish Arcane Arts."
      },
      {
        "id": "lian-po",
        "name": "Lian Po",
        "reason": "Lian Po's crowd control immunity guarantees the launch at the end of Tremor Smash, pinning targets for Starflow Cascade."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Lian Po"
        ],
        "matchRate": "1.54%"
      },
      {
        "names": [
          "Alessio"
        ],
        "matchRate": "1.52%"
      },
      {
        "names": [
          "Lian Po",
          "Fang"
        ],
        "matchRate": "3.68%"
      },
      {
        "names": [
          "Lian Po",
          "Huang Zhong"
        ],
        "matchRate": "3.32%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Frozen Breath",
        "Venomous Staff",
        "Twilight Stream",
        "Insatiable Tome",
        "Mask of Agony"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Artillery"
    ]
  },
  {
    "id": "flowborn-marksman",
    "name": "Flowborn (Marksman)",
    "role": "Farm",
    "avatarUrl": "/heroes/flowborn-marksman.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong opens from stealth and stuns Flowborn through his dagger mark, leaving no room to fire back."
      },
      {
        "id": "jing",
        "name": "Jing",
        "reason": "Jing pressures from two sides at once, and every mark shatter refreshes her skills, so the chase never stops."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield and stun let Flowborn stand in the fight and finish a full arrow chain."
      },
      {
        "id": "cai-yan",
        "name": "Cai Yan",
        "reason": "Cai Yan's sound wave chains stuns down the enemy line, opening a clean window for Arrowstorm."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "2.59%"
      },
      {
        "names": [
          "Haya"
        ],
        "matchRate": "2.24%"
      },
      {
        "names": [
          "Feyd"
        ],
        "matchRate": "1.81%"
      },
      {
        "names": [
          "Dolia",
          "Haya"
        ],
        "matchRate": "7.59%"
      },
      {
        "names": [
          "Zhang Fei",
          "Feyd"
        ],
        "matchRate": "6.49%"
      },
      {
        "names": [
          "Zhang Fei",
          "Kongming"
        ],
        "matchRate": "6.20%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Doomsday",
        "Shadow Ripper",
        "Daybreaker's Virtue",
        "Eternity Blade",
        "Overlord's Might"
      ],
      "arcana": [
        "Calamity",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "Nimble"
    ]
  },
  {
    "id": "flowborn-roamer",
    "name": "Flowborn (Roamer)",
    "role": "Roam",
    "avatarUrl": "/heroes/flowborn-roamer.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "musashi",
        "name": "Musashi",
        "reason": "Musashi's duel delays all of the target's recovery, so Flowborn cannot lean on self-healing to outlast him."
      },
      {
        "id": "wang-zhaojun",
        "name": "Wang Zhaojun",
        "reason": "Wang Zhaojun's snowstorm lingers on the ground, grinding down Flowborn and allies who hold position on the casting platform."
      }
    ],
    "synergies": [
      {
        "id": "huang-zhong",
        "name": "Huang Zhong",
        "reason": "Huang Zhong is immobile in Turret Mode, so he can sit on the casting platform and keep its shield and range."
      },
      {
        "id": "lady-zhen",
        "name": "Lady Zhen",
        "reason": "Lady Zhen's launch and heavy slow leave enemies barely moving, so Flowborn's stream of sound waves is hard to dodge."
      }
    ],
    "tags": [
      "Mage",
      "Roam",
      "Buff",
      "Support"
    ]
  },
  {
    "id": "flowborn-tank",
    "name": "Flowborn (Tank)",
    "role": "Clash",
    "avatarUrl": "/heroes/flowborn-tank.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo's Destroyed Defense adds true damage, which slips straight past Flowborn's stacked defenses."
      },
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu ignores crowd control while diving with Tremble, Mortals, so Flowborn's launches cannot stop him."
      }
    ],
    "synergies": [
      {
        "id": "hou-yi",
        "name": "Hou Yi",
        "reason": "Hou Yi has no escape, so Flowborn's knockbacks peel the divers off him while he keeps firing."
      },
      {
        "id": "kongming",
        "name": "Kongming",
        "reason": "Kongming's Spirit Bomb needs a channel, and Flowborn's launch buys exactly that window."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Nuwa"
        ],
        "matchRate": "1.76%"
      },
      {
        "names": [
          "Lorion"
        ],
        "matchRate": "1.63%"
      },
      {
        "names": [
          "Chano",
          "Nuwa"
        ],
        "matchRate": "1.63%"
      },
      {
        "names": [
          "Erin",
          "Nuwa"
        ],
        "matchRate": "1.46%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Blazing Cape",
        "Frostscar's Embrace",
        "Blood Rage",
        "Longnight Guardian",
        "Ominous Premonition"
      ],
      "arcana": [
        "Fate",
        "Stealth",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Vanguard",
      "Tank"
    ]
  },
  {
    "id": "fuzi",
    "name": "Fuzi",
    "role": "Clash",
    "avatarUrl": "/heroes/fuzi.webp",
    "counters": [
      "guan-yu",
      "han-xin"
    ],
    "counteredBy": [
      {
        "id": "charlotte",
        "name": "Charlotte",
        "reason": "Charlotte's final enhanced strike scales with Fuzi's missing Health, so the longer he holds the harder it hits."
      },
      {
        "id": "guan-yu",
        "name": "Guan Yu",
        "reason": "Guan Yu's Charge Stance attack knocks Fuzi back, denying the melee range Fuzi needs."
      }
    ],
    "synergies": [
      {
        "id": "da-qiao",
        "name": "Da Qiao",
        "reason": "Da Qiao's whirlpool warps the team onto the hero Fuzi has pinned, turning his solo dive into a fight."
      },
      {
        "id": "li-bai",
        "name": "Li Bai",
        "reason": "Li Bai needs a target that stays put to hold Sword Energy, and Fuzi's bind keeps one there."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Da Qiao"
        ],
        "matchRate": "2.97%"
      },
      {
        "names": [
          "Pei"
        ],
        "matchRate": "1.61%"
      },
      {
        "names": [
          "Nuwa"
        ],
        "matchRate": "1.57%"
      },
      {
        "names": [
          "Da Qiao",
          "Pei"
        ],
        "matchRate": "6.13%"
      },
      {
        "names": [
          "Nuwa",
          "Pei"
        ],
        "matchRate": "2.95%"
      }
    ],
    "equipment": {
      "build": [
        "Sparkforged Dagger",
        "Boots of Dexterity",
        "Frigid Charge",
        "Succubus Cloak",
        "Pure Sky",
        "Doomsday"
      ],
      "arcana": [
        "Fate",
        "Hunt",
        "Void",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Berserker"
    ]
  },
  {
    "id": "gan-mo",
    "name": "Gan & Mo",
    "role": "Mid",
    "avatarUrl": "/heroes/gan-mo.webp",
    "counters": [
      "annette",
      "devara",
      "donghuang",
      "yaria",
      "ziya"
    ],
    "counteredBy": [
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui strips magical defense, then dashes in and launches Gan & Mo, who cannot answer while airborne."
      },
      {
        "id": "sun-ce",
        "name": "Sun Ce",
        "reason": "Sun Ce keeps super armor while piloting his ship, so the knockback on Guard Her Grave cannot stop him."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's pull bunches enemies into one spot and stuns them, so every flying sword lands at once."
      },
      {
        "id": "dolia",
        "name": "Dolia",
        "reason": "Dolia's Celestial Melody refunds Freshly Forged, so Gan & Mo get another full set of flying sword charges."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Shouyue"
        ],
        "matchRate": "2.62%"
      },
      {
        "names": [
          "Wukong"
        ],
        "matchRate": "2.52%"
      },
      {
        "names": [
          "Kaizer"
        ],
        "matchRate": "1.58%"
      },
      {
        "names": [
          "Dharma"
        ],
        "matchRate": "1.57%"
      },
      {
        "names": [
          "Gao Changgong"
        ],
        "matchRate": "1.44%"
      },
      {
        "names": [
          "Wukong",
          "Shouyue"
        ],
        "matchRate": "8.19%"
      },
      {
        "names": [
          "Gao Changgong",
          "Shouyue"
        ],
        "matchRate": "3.93%"
      },
      {
        "names": [
          "Dharma",
          "Shouyue"
        ],
        "matchRate": "3.62%"
      },
      {
        "names": [
          "Dharma",
          "Donghuang"
        ],
        "matchRate": "3.27%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Scepter of Reverberation",
        "Sage's Tome",
        "Savant's Wrath",
        "Void Staff",
        "Insatiable Tome"
      ],
      "arcana": [
        "Nightmare",
        "Beast Scar",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Artillery"
    ]
  },
  {
    "id": "gao",
    "name": "Gao",
    "role": "Mid",
    "avatarUrl": "/heroes/gao.webp",
    "counters": [
      "wukong"
    ],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang can suppress Gao outright, cutting off Rock Out! long before the drawn-out performance finishes."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's suppression shares all damage taken, so allies rushing in to free Gao end up hurting him instead."
      }
    ],
    "synergies": [
      {
        "id": "bai-qi",
        "name": "Bai Qi",
        "reason": "Bai Qi's pull and taunt hold enemies in one clump, so Rock Out! and Wild Chord's ricochets keep landing."
      },
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's speed boost carries Gao into the enemy line, where Rock Out! grows tougher with each enemy hero nearby."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Guiguzi"
        ],
        "matchRate": "3.54%"
      },
      {
        "names": [
          "Mozi"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "1.60%"
      },
      {
        "names": [
          "Lu Bu",
          "Dolia"
        ],
        "matchRate": "11.74%"
      },
      {
        "names": [
          "Mozi",
          "Luban No.7"
        ],
        "matchRate": "4.88%"
      },
      {
        "names": [
          "Sun Bin",
          "Biron"
        ],
        "matchRate": "3.89%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Insatiable Tome",
        "Ardent Dominion",
        "Savant's Wrath",
        "Sage's Tome",
        "Void Staff"
      ],
      "arcana": [
        "Omen",
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Frenzy"
    },
    "tags": [
      "Mage",
      "Mid",
      "Formation"
    ]
  },
  {
    "id": "gao-changgong",
    "name": "Gao Changgong",
    "role": "Jungle",
    "avatarUrl": "/heroes/gao-changgong.webp",
    "counters": [
      "chano",
      "daji",
      "di-renjie",
      "dyadia",
      "flowborn-marksman",
      "garo",
      "garuda",
      "luara",
      "nuwa",
      "yango",
      "ziya"
    ],
    "counteredBy": [
      {
        "id": "shouyue",
        "name": "Shouyue",
        "reason": "Shouyue builds Ambush stacks while out of combat, so his pierce-boosted shots chip Gao Changgong down as he approaches."
      },
      {
        "id": "ata",
        "name": "Ata",
        "reason": "Ata heals back from the damage he deals, so trading blows with him gets Gao Changgong nowhere."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi strips their armor and pulls them into a stun, so Gao Changgong's dive lands on a helpless target."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei shields the dive and stuns enemies at the edge of his wind, so Gao Changgong lands on a frozen target."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Erin"
        ],
        "matchRate": "1.96%"
      },
      {
        "names": [
          "Zhou Yu"
        ],
        "matchRate": "1.64%"
      },
      {
        "names": [
          "Gan & Mo"
        ],
        "matchRate": "1.44%"
      },
      {
        "names": [
          "Angela"
        ],
        "matchRate": "1.38%"
      },
      {
        "names": [
          "Gan & Mo",
          "Shouyue"
        ],
        "matchRate": "3.93%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Tranquility",
        "Axe of Torment",
        "Overlord's Might",
        "Cuirass of Savagery",
        "Starbreaker"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Burst"
    ]
  },
  {
    "id": "garo",
    "name": "Garo",
    "role": "Farm",
    "avatarUrl": "/heroes/garo.webp",
    "counters": [
      "dunshan",
      "yaria"
    ],
    "counteredBy": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo blinks in again and again, erasing the range advantage Garo's longbow is built on."
      },
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong closes the gap in stealth, and his mark turns into a stun that leaves Garo pinned."
      }
    ],
    "synergies": [
      {
        "id": "ming",
        "name": "Ming",
        "reason": "Ming's link hands Garo Attack Speed, filling in the slower attack interval her longbow stance costs her."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield and knockback give Garo the escape her own kit never provides."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "7.21%"
      },
      {
        "names": [
          "Zhuangzi"
        ],
        "matchRate": "1.99%"
      },
      {
        "names": [
          "Kongming",
          "Ming"
        ],
        "matchRate": "7.97%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Shadow Ripper",
        "Eternity Blade",
        "Daybreaker's Virtue",
        "Bloodweeper",
        "Sage's Sanctuary"
      ],
      "arcana": [
        "Red Moon",
        "Stealth",
        "Reaver",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "DPS"
    ]
  },
  {
    "id": "garuda",
    "name": "Garuda",
    "role": "Mid",
    "avatarUrl": "/heroes/garuda.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong opens from stealth, and his charge hits Garuda before Garuda can shield or reposition."
      },
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin leaps in twice in quick succession, and Garuda's single shield can only cover one of those arrivals."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei shields his teammates, so Garuda can stand through the whole of Wings of Judgment."
      },
      {
        "id": "lian-po",
        "name": "Lian Po",
        "reason": "Lian Po's slow and launch pin enemies down, so the arrows of Wings of Judgment keep landing."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dun"
        ],
        "matchRate": "1.42%"
      },
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "1.23%"
      },
      {
        "names": [
          "Lu Bu",
          "Dolia"
        ],
        "matchRate": "8.35%"
      },
      {
        "names": [
          "Dolia",
          "Allain"
        ],
        "matchRate": "3.77%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Venomous Staff",
        "Frozen Breath",
        "Twilight Stream",
        "Savant's Wrath",
        "Void Staff"
      ],
      "arcana": [
        "Nightmare",
        "Red Moon",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Artillery"
    ]
  },
  {
    "id": "guan-yu",
    "name": "Guan Yu",
    "role": "Clash",
    "avatarUrl": "/heroes/guan-yu.webp",
    "counters": [
      "athena",
      "fuzi"
    ],
    "counteredBy": [
      {
        "id": "fuzi",
        "name": "Fuzi",
        "reason": "Fuzi's slow drags Guan Yu's Movement Speed down, which strips him of Charge Stance."
      },
      {
        "id": "daji",
        "name": "Daji",
        "reason": "Daji's stun freezes Guan Yu in place, and her burst lands on him while he cannot move."
      }
    ],
    "synergies": [
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's speed buff builds Guan Yu's charge faster, so he reaches the fight already in Charge Stance."
      },
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria's shield scales with the target's extra Health, so Guan Yu keeps charging forward instead of pulling back."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Agudo"
        ],
        "matchRate": "3.03%"
      },
      {
        "names": [
          "Pei"
        ],
        "matchRate": "1.49%"
      },
      {
        "names": [
          "Zhou Yu",
          "Agudo"
        ],
        "matchRate": "4.25%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Fortitude",
        "Blazing Cape",
        "Frigid Charge",
        "Cuirass of Savagery",
        "Longnight Guardian",
        "Ominous Premonition"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Sprint"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Charger"
    ]
  },
  {
    "id": "guiguzi",
    "name": "Guiguzi",
    "role": "Roam",
    "avatarUrl": "/heroes/guiguzi.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "li-bai",
        "name": "Li Bai",
        "reason": "Li Bai clears debuffs and turns untargetable with two skills, so Guiguzi's long channeled pull rarely connects."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi stacks a shield just by casting, so it soaks up Guiguzi's enhanced Basic Attack entirely."
      }
    ],
    "synergies": [
      {
        "id": "gao",
        "name": "Gao",
        "reason": "Gao grows tankier the more enemies stand near him, so Guiguzi's pull packs them into Rock Out! for him."
      },
      {
        "id": "angela",
        "name": "Angela",
        "reason": "Angela's beam only pays out on a target that cannot move, and Guiguzi's pull and stun freeze one for her."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Gao"
        ],
        "matchRate": "3.54%"
      },
      {
        "names": [
          "Florentino"
        ],
        "matchRate": "3.03%"
      },
      {
        "names": [
          "Liu Bei"
        ],
        "matchRate": "2.90%"
      },
      {
        "names": [
          "Luara"
        ],
        "matchRate": "1.76%"
      },
      {
        "names": [
          "Marco Polo",
          "Sima Yi"
        ],
        "matchRate": "6.81%"
      },
      {
        "names": [
          "Wang Zhaojun",
          "Florentino"
        ],
        "matchRate": "6.70%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Radiance",
        "Boots of Deftness",
        "Frigid Charge",
        "Longnight Guardian",
        "Venomous Staff",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Fate",
        "Hunt",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Support",
      "Roam",
      "Offensive"
    ]
  },
  {
    "id": "han-xin",
    "name": "Han Xin",
    "role": "Jungle",
    "avatarUrl": "/heroes/han-xin.webp",
    "counters": [
      "agudo",
      "angela",
      "da-qiao",
      "di-renjie",
      "garuda",
      "nuwa",
      "sima-yi",
      "ukyo-tachibana",
      "xiao-qiao",
      "yixing",
      "yuhuan",
      "zhou-yu"
    ],
    "counteredBy": [
      {
        "id": "fuzi",
        "name": "Fuzi",
        "reason": "Fuzi binds Han Xin to his lamppost and blunts The Unrivaled Spear with heavy damage reduction."
      },
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan blinks away on a short cooldown, so Han Xin's dive rarely pins her down."
      }
    ],
    "synergies": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression locks a hero in place, letting Han Xin land every strike of The Unrivaled Spear."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's Cannon Blast and barrier keep enemies stunned in place, so Han Xin's leap lands cleanly."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "1.58%"
      },
      {
        "names": [
          "Consort Yu"
        ],
        "matchRate": "1.45%"
      },
      {
        "names": [
          "Marco Polo",
          "Yaria"
        ],
        "matchRate": "18.62%"
      },
      {
        "names": [
          "Lian Po",
          "Daji"
        ],
        "matchRate": "8.7%"
      },
      {
        "names": [
          "Lady Zhen",
          "Yaria"
        ],
        "matchRate": "3.78%"
      },
      {
        "names": [
          "Xiang Yu",
          "Consort Yu"
        ],
        "matchRate": "2.89%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Fortitude",
        "Axe of Torment",
        "Master Sword",
        "Overlord's Might",
        "Bloodweeper"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Roving"
    ]
  },
  {
    "id": "haya",
    "name": "Haya",
    "role": "Mid",
    "avatarUrl": "/heroes/haya.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "arli",
        "name": "Arli",
        "reason": "Arli blinks away and snaps back to her parasol, breaking Haya's Moonscape Mirage link."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's suppression locks Haya out of Moonscape Mirage and her shield, leaving her no way out."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies in and holds them still, so Haya's Crescent Wave and Wayward Rays both land."
      },
      {
        "id": "nakoruru",
        "name": "Nakoruru",
        "reason": "Nakoruru's charge slows the enemies it hits, so a hero Haya links to cannot walk out of Moonscape Mirage."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "3.49%"
      },
      {
        "names": [
          "Flowborn (Marksman)"
        ],
        "matchRate": "2.24%"
      },
      {
        "names": [
          "Dolia",
          "Yang Jian"
        ],
        "matchRate": "7.72%"
      },
      {
        "names": [
          "Dolia",
          "Flowborn (Marksman)"
        ],
        "matchRate": "7.59%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Venomous Staff",
        "Twilight Stream",
        "Insatiable Tome",
        "Savant's Wrath",
        "Void Staff"
      ],
      "arcana": [
        "Nightmare",
        "Reincarnation",
        "Hunt",
        "Tribute"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Artillery"
    ]
  },
  {
    "id": "heino",
    "name": "Heino",
    "role": "Mid",
    "avatarUrl": "/heroes/heino.webp",
    "counters": [
      "luna"
    ],
    "counteredBy": [
      {
        "id": "butterfly",
        "name": "Butterfly",
        "reason": "Butterfly's Death Dealer cuts Basic Attack damage, so Heino's melee scepter swings barely hurt her."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei carries a huge shield from Unbridled Outburst for so long that Heino cannot chew through him."
      }
    ],
    "synergies": [
      {
        "id": "dolia",
        "name": "Dolia",
        "reason": "Dolia refreshes an ally's longest cooldown, which on Heino is his heavy ultimate Fate Rewind."
      },
      {
        "id": "da-qiao",
        "name": "Da Qiao",
        "reason": "Da Qiao's koi launches a whole group, giving Heino an opening to dive in with Leap of Fate and heal more."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Shouyue"
        ],
        "matchRate": "2.08%"
      },
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "2.03%"
      },
      {
        "names": [
          "Arke"
        ],
        "matchRate": "1.92%"
      },
      {
        "names": [
          "Dolia",
          "Kaizer"
        ],
        "matchRate": "3.63%"
      },
      {
        "names": [
          "Musashi",
          "Dolia"
        ],
        "matchRate": "3.48%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Holy Grail",
        "Insatiable Tome",
        "Twilight Stream",
        "Augur's Word",
        "Savant's Wrath"
      ],
      "arcana": [
        "Nightmare",
        "Harmony",
        "Void"
      ],
      "spell": "Frenzy"
    },
    "tags": [
      "Fighter",
      "Mid",
      "Formation",
      "Mage"
    ]
  },
  {
    "id": "hou-yi",
    "name": "Hou Yi",
    "role": "Farm",
    "avatarUrl": "/heroes/hou-yi.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "cirrus",
        "name": "Cirrus",
        "reason": "Cirrus ignores terrain when he dives in, and Hou Yi has no dash to break away."
      },
      {
        "id": "mulan",
        "name": "Mulan",
        "reason": "Mulan is immune to crowd control during her heavy-sword skills, so Hou Yi's stun cannot stop her."
      }
    ],
    "synergies": [
      {
        "id": "cai-yan",
        "name": "Cai Yan",
        "reason": "Cai Yan keeps healing while Earworm stuns the enemies closing in, so Hou Yi can hold position and keep firing."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield and knockback break up dives, so Hou Yi never has to stop attacking."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "6.18%"
      },
      {
        "names": [
          "Zhuangzi"
        ],
        "matchRate": "3.17%"
      },
      {
        "names": [
          "Cai Yan"
        ],
        "matchRate": "2.78%"
      },
      {
        "names": [
          "Liu Bang"
        ],
        "matchRate": "2.46%"
      },
      {
        "names": [
          "Athena"
        ],
        "matchRate": "1.79%"
      },
      {
        "names": [
          "Liu Bang",
          "Ming"
        ],
        "matchRate": "11.70%"
      },
      {
        "names": [
          "Athena",
          "Ming"
        ],
        "matchRate": "10.06%"
      },
      {
        "names": [
          "Dun",
          "Ming"
        ],
        "matchRate": "9.66%"
      },
      {
        "names": [
          "Daji",
          "Ming"
        ],
        "matchRate": "9.39%"
      },
      {
        "names": [
          "Kongming",
          "Ming"
        ],
        "matchRate": "7.48%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Doomsday",
        "Shadow Ripper",
        "Eternity Blade",
        "Sunchaser",
        "Daybreaker's Virtue"
      ],
      "arcana": [
        "Calamity",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "DPS"
    ]
  },
  {
    "id": "huang-zhong",
    "name": "Huang Zhong",
    "role": "Farm",
    "avatarUrl": "/heroes/huang-zhong.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo adds true damage against targets with Destroyed Defense, slipping past the defenses Turret Mode grants."
      },
      {
        "id": "shouyue",
        "name": "Shouyue",
        "reason": "Shouyue's snipe scales off max Health, and Huang Zhong cannot dodge it while locked in Turret Mode."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield soaks the damage aimed at Huang Zhong, so he keeps firing while stuck in Turret Mode."
      },
      {
        "id": "lian-po",
        "name": "Lian Po",
        "reason": "Lian Po's slow and launch pin enemies at the turret's center, where Huang Zhong's shots hit hardest."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Cai Yan"
        ],
        "matchRate": "3.08%"
      },
      {
        "names": [
          "Lapulapu"
        ],
        "matchRate": "2.57%"
      },
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "2.53%"
      },
      {
        "names": [
          "Annette"
        ],
        "matchRate": "2.31%"
      },
      {
        "names": [
          "Arke"
        ],
        "matchRate": "1.48%"
      },
      {
        "names": [
          "Li Bai",
          "Cai Yan"
        ],
        "matchRate": "6.21%"
      },
      {
        "names": [
          "Lian Po",
          "Arke"
        ],
        "matchRate": "4.59%"
      },
      {
        "names": [
          "Zilong",
          "Lapulapu"
        ],
        "matchRate": "4.46%"
      },
      {
        "names": [
          "Lian Po",
          "Flowborn (Mage)"
        ],
        "matchRate": "3.32%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Shadow Ripper",
        "Eternity Blade",
        "Mortal Punisher",
        "Tempest",
        "Daybreaker's Virtue"
      ],
      "arcana": [
        "Calamity",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "DPS"
    ]
  },
  {
    "id": "jing",
    "name": "Jing",
    "role": "Jungle",
    "avatarUrl": "/heroes/jing.webp",
    "counters": [
      "flowborn-mage",
      "flowborn-marksman"
    ],
    "counteredBy": [
      {
        "id": "ata",
        "name": "Ata",
        "reason": "Ata is immune to crowd control during Wavewalking, and he heals back much of what Jing chips off."
      },
      {
        "id": "daji",
        "name": "Daji",
        "reason": "Daji stuns Jing in place while Captivate stacks strip Magical Defense, so the burst that follows lands clean."
      }
    ],
    "synergies": [
      {
        "id": "lady-zhen",
        "name": "Lady Zhen",
        "reason": "Lady Zhen's launch and icicles pin enemies down, so Jing lands both her marks and shatters them."
      },
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui's HISHOU RYUUENJIN launches the enemy, opening the window Jing needs to dive in with Reflective Assault."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Di Renjie"
        ],
        "matchRate": "1.97%"
      },
      {
        "names": [
          "Wang Zhaojun"
        ],
        "matchRate": "1.9%"
      },
      {
        "names": [
          "Arli",
          "Shi"
        ],
        "matchRate": "7.72%"
      },
      {
        "names": [
          "Dolia",
          "Ao'yin"
        ],
        "matchRate": "6.01%"
      },
      {
        "names": [
          "Di Renjie",
          "Zhang Fei"
        ],
        "matchRate": "5.89%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Axe of Torment",
        "Master Sword",
        "Overlord's Might",
        "Starbreaker"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Roving"
    ]
  },
  {
    "id": "kaizer",
    "name": "Kaizer",
    "role": "Clash",
    "avatarUrl": "/heroes/kaizer.webp",
    "counters": [
      "kui"
    ],
    "counteredBy": [
      {
        "id": "mi-yue",
        "name": "Mi Yue",
        "reason": "Mi Yue's Umbral Moon makes her immune to everything, so Kaizer's launch and slow simply do not land."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's Forsaken Contract suppresses Kaizer, burning the enhanced window of Invincible Warrior while Kaizer cannot act."
      }
    ],
    "synergies": [
      {
        "id": "ming",
        "name": "Ming",
        "reason": "Ming's link raises Kaizer's attack, so the bonus damage his passive gives on single-target hits climbs further."
      },
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria's shield stacks on top of Kaizer's own Block, so he can keep pushing into the front line."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "1.85%"
      },
      {
        "names": [
          "Gan & Mo"
        ],
        "matchRate": "1.58%"
      },
      {
        "names": [
          "Shi",
          "Devara"
        ],
        "matchRate": "5.94%"
      },
      {
        "names": [
          "Sun Bin",
          "Dr Bian"
        ],
        "matchRate": "4.35%"
      },
      {
        "names": [
          "Dolia",
          "Heino"
        ],
        "matchRate": "3.63%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Axe of Torment",
        "Spikemail",
        "Master Sword",
        "Demonsbane"
      ],
      "arcana": [
        "Calamity",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Assassin"
    ]
  },
  {
    "id": "kongming",
    "name": "Kongming",
    "role": "Mid",
    "avatarUrl": "/heroes/kongming.webp",
    "counters": [
      "annette"
    ],
    "counteredBy": [
      {
        "id": "wukong",
        "name": "Wukong",
        "reason": "Wukong's Protective Shroud eats the first skill Kongming throws and turns it into invincibility and a shield."
      },
      {
        "id": "allain",
        "name": "Allain",
        "reason": "Allain builds Fury with every hit he lands, growing steadily tankier, so Kongming's chip damage never finishes him."
      }
    ],
    "synergies": [
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's Forsaken Contract locks an enemy hero in place, so Kongming's slow-channeling Spirit Bomb lands without fail."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "3.9%"
      },
      {
        "names": [
          "Shouyue"
        ],
        "matchRate": "1.98%"
      },
      {
        "names": [
          "Allain"
        ],
        "matchRate": "1.34%"
      },
      {
        "names": [
          "Ming",
          "Garo"
        ],
        "matchRate": "7.97%"
      },
      {
        "names": [
          "Lady Sun",
          "Ming"
        ],
        "matchRate": "7.87%"
      },
      {
        "names": [
          "Dun",
          "Ming"
        ],
        "matchRate": "7.59%"
      },
      {
        "names": [
          "Hou Yi",
          "Ming"
        ],
        "matchRate": "7.48%"
      },
      {
        "names": [
          "Ming",
          "Alessio"
        ],
        "matchRate": "6.73%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Insatiable Tome",
        "Ardent Dominion",
        "Venomous Staff",
        "Savant's Wrath",
        "Void Staff"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Purify"
    },
    "tags": [
      "Mage",
      "Mid",
      "Ambush"
    ]
  },
  {
    "id": "kui",
    "name": "Kui",
    "role": "Roam",
    "avatarUrl": "/heroes/kui.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "fatih",
        "name": "Fatih",
        "reason": "Fatih cleanses his own crowd control with Sacred Tree Blessing, so Kui's Into the Void stun falls off him."
      },
      {
        "id": "kaizer",
        "name": "Kaizer",
        "reason": "Kaizer turns durable under Invincible Warrior, so Join Me just hauls that buffed form into Kui's own lap."
      }
    ],
    "synergies": [
      {
        "id": "huang-zhong",
        "name": "Huang Zhong",
        "reason": "Huang Zhong cannot move in Turret Mode, and Join Me drags enemies to Kui, who stands in front of the turret."
      },
      {
        "id": "lady-sun",
        "name": "Lady Sun",
        "reason": "Lady Sun's Ultimate Shell needs a target that stays put, and Into the Void stuns marked enemies through the whole channel."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Daji"
        ],
        "matchRate": "2.51%"
      },
      {
        "names": [
          "Wukong"
        ],
        "matchRate": "2.35%"
      },
      {
        "names": [
          "Angela"
        ],
        "matchRate": "2.27%"
      },
      {
        "names": [
          "Lian Po"
        ],
        "matchRate": "2.12%"
      },
      {
        "names": [
          "Li Xin"
        ],
        "matchRate": "2.0%"
      },
      {
        "names": [
          "Daji",
          "Arthur"
        ],
        "matchRate": "5.50%"
      },
      {
        "names": [
          "Mi Yue",
          "Angela"
        ],
        "matchRate": "5.46%"
      },
      {
        "names": [
          "Wukong",
          "Li Xin"
        ],
        "matchRate": "4.33%"
      },
      {
        "names": [
          "Shouyue",
          "Li Xin"
        ],
        "matchRate": "4.18%"
      },
      {
        "names": [
          "Angela",
          "Consort Yu"
        ],
        "matchRate": "4.15%"
      }
    ],
    "equipment": {
      "build": [
        "Guardian - Redemption",
        "Boots of Tranquility",
        "Glacial Buckler",
        "Frigid Charge",
        "Longnight Guardian",
        "Ominous Premonition"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Stun"
    },
    "tags": [
      "Mage",
      "Roam",
      "Offensive",
      "Support"
    ]
  },
  {
    "id": "lady-sun",
    "name": "Lady Sun",
    "role": "Farm",
    "avatarUrl": "/heroes/lady-sun.webp",
    "counters": [
      "alessio",
      "ata",
      "ying"
    ],
    "counteredBy": [
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's Forsaken Contract suppresses Lady Sun outright, shutting down her rolls and her attacks alike."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's barrier stuns anything that touches it, so Lady Sun has no safe line to roll in on."
      }
    ],
    "synergies": [
      {
        "id": "lian-po",
        "name": "Lian Po",
        "reason": "Lian Po's Tremor Smash launches the whole pile, giving Lady Sun a free window to fire into it."
      },
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu's Tremble, Mortals launches the group and its edge slows escapes, so Ultimate Shell lands cleanly."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "6.71%"
      },
      {
        "names": [
          "Liu Bang",
          "Ming"
        ],
        "matchRate": "8.96%"
      },
      {
        "names": [
          "Kongming",
          "Ming"
        ],
        "matchRate": "7.87%"
      },
      {
        "names": [
          "Nakoruru",
          "Ming"
        ],
        "matchRate": "7.43%"
      },
      {
        "names": [
          "Ming",
          "Ata"
        ],
        "matchRate": "7.18%"
      },
      {
        "names": [
          "Xuance",
          "Ming"
        ],
        "matchRate": "6.67%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Axe of Torment",
        "Eternity Blade",
        "Shadow Ripper",
        "Daybreaker's Virtue",
        "Bloodweeper"
      ],
      "arcana": [
        "Calamity",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "Artillery"
    ]
  },
  {
    "id": "lady-zhen",
    "name": "Lady Zhen",
    "role": "Mid",
    "avatarUrl": "/heroes/lady-zhen.webp",
    "counters": [
      "cai-yan",
      "liu-bei"
    ],
    "counteredBy": [
      {
        "id": "li-bai",
        "name": "Li Bai",
        "reason": "Li Bai goes untargetable and cleanses every debuff during Stroke of Genius and Flickering Flurry, so Lady Zhen's control never sticks."
      },
      {
        "id": "sima-yi",
        "name": "Sima Yi",
        "reason": "Sima Yi heals off magical damage, and Lady Zhen's entire kit is magical, so she cannot out-trade him."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's gust knocks enemies back and stuns them, giving Lady Zhen a still target to stack skills on."
      },
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's field only pays off if enemies stay inside, and Lady Zhen's icicles wall off their escape."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "2.76%"
      },
      {
        "names": [
          "Marco Polo"
        ],
        "matchRate": "2.05%"
      },
      {
        "names": [
          "Marco Polo",
          "Yaria"
        ],
        "matchRate": "29.82%"
      },
      {
        "names": [
          "Yaria",
          "Lam"
        ],
        "matchRate": "6.63%"
      },
      {
        "names": [
          "Han Xin",
          "Yaria"
        ],
        "matchRate": "3.78%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Frozen Breath",
        "Mask of Agony",
        "Venomous Staff",
        "Void Staff",
        "Savant's Wrath"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Compassion"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Control"
    ]
  },
  {
    "id": "lam",
    "name": "Lam",
    "role": "Jungle",
    "avatarUrl": "/heroes/lam.webp",
    "counters": [
      "agudo",
      "chicha",
      "erin",
      "xiang-yu"
    ],
    "counteredBy": [
      {
        "id": "arthur",
        "name": "Arthur",
        "reason": "Arthur's silence shuts off both the submerge and the dash Lam lives on, and slowing Arthur only makes him heal faster."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi stacks shields that soak Lam's opening burst, and his barrier stuns anything that tries to close in."
      }
    ],
    "synergies": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression locks a hero in place, so Lam's Death From Below cannot be dodged at all."
      },
      {
        "id": "liu-shan",
        "name": "Liu Shan",
        "reason": "Liu Shan's stun holds enemies still, letting Lam land Space Split and heal off the follow-up hits."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "2.38%"
      },
      {
        "names": [
          "Xiao Qiao"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Marco Polo",
          "Yaria"
        ],
        "matchRate": "28.87%"
      },
      {
        "names": [
          "Lady Zhen",
          "Yaria"
        ],
        "matchRate": "6.63%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Axe of Torment",
        "Pure Sky",
        "Ominous Premonition",
        "Demonsbane"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Roving",
      "Assassin"
    ]
  },
  {
    "id": "lapulapu",
    "name": "Lapulapu",
    "role": "Roam",
    "avatarUrl": "/heroes/lapulapu.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo blinks away on a short cooldown, slipping out of Raging Sea's line before the wind-up ends."
      },
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu gains Physical Pierce with his halberd unenchanted, walking straight past Lapulapu's passive defense."
      }
    ],
    "synergies": [
      {
        "id": "huang-zhong",
        "name": "Huang Zhong",
        "reason": "Huang Zhong cannot move in Turret Mode, and Lapulapu's fissures stall enemies closing in on the turret."
      },
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan needs enemies to stay in range to stack her floral marks, and Lapulapu's fissures slow them there."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Huang Zhong"
        ],
        "matchRate": "2.57%"
      },
      {
        "names": [
          "Fang"
        ],
        "matchRate": "2.31%"
      },
      {
        "names": [
          "Luban No.7",
          "Mi Yue"
        ],
        "matchRate": "5.52%"
      },
      {
        "names": [
          "Zilong",
          "Huang Zhong"
        ],
        "matchRate": "4.46%"
      }
    ],
    "equipment": {
      "build": [
        "Guardian - Redemption",
        "Boots of Resistance",
        "Glacial Buckler",
        "Longnight Guardian",
        "Spikemail",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Tank",
      "Roam",
      "Defensive",
      "Support"
    ]
  },
  {
    "id": "li-bai",
    "name": "Li Bai",
    "role": "Jungle",
    "avatarUrl": "/heroes/li-bai.webp",
    "counters": [
      "alessio",
      "guiguzi",
      "lady-zhen",
      "liang",
      "luban-no-7",
      "ming"
    ],
    "counteredBy": [
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's barrier stuns anything touching it, so Li Bai, who can only close by dashing, gets locked down on entry."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's Forsaken Contract suppresses Li Bai when he dives in alone, forcing him to share all damage taken."
      }
    ],
    "synergies": [
      {
        "id": "lian-po",
        "name": "Lian Po",
        "reason": "Lian Po's Tremor Smash launches everyone in range, opening the exact window Li Bai needs for Flickering Flurry."
      },
      {
        "id": "dun",
        "name": "Dun",
        "reason": "Dun's Wind Slash chains a slow into a launch, holding targets still long enough for Li Bai to close in."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "1.78%"
      },
      {
        "names": [
          "Cai Yan"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Marco Polo",
          "Yaria"
        ],
        "matchRate": "18.69%"
      },
      {
        "names": [
          "Cai Yan",
          "Huang Zhong"
        ],
        "matchRate": "6.21%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Axe of Torment",
        "Mortal Punisher",
        "Deepfrost Siege",
        "Overlord's Might"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Roving"
    ]
  },
  {
    "id": "li-xin",
    "name": "Li Xin",
    "role": "Clash",
    "avatarUrl": "/heroes/li-xin.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei shoves Li Xin back the moment he closes, then shrugs off the trade behind a shield and invincibility."
      },
      {
        "id": "allain",
        "name": "Allain",
        "reason": "Allain stacks damage reduction and healing with Fury, so the longer the duel runs the more Li Xin loses."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies into one spot, so Li Xin's sword energy cuts through several of them at once."
      },
      {
        "id": "cai-yan",
        "name": "Cai Yan",
        "reason": "Cai Yan's bouncing stuns open the gap Li Xin cannot make himself, and her healing keeps him up front."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Kui"
        ],
        "matchRate": "2.0%"
      },
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "1.83%"
      },
      {
        "names": [
          "Wukong",
          "Kui"
        ],
        "matchRate": "4.33%"
      },
      {
        "names": [
          "Kui",
          "Shouyue"
        ],
        "matchRate": "4.18%"
      },
      {
        "names": [
          "Liu Shan",
          "Shouyue"
        ],
        "matchRate": "3.92%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Sparkforged Dagger",
        "Doomsday",
        "Shadow Ripper",
        "Eternity Blade",
        "Bloodweeper"
      ],
      "arcana": [
        "Fate",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Purify"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Berserker"
    ]
  },
  {
    "id": "lian-po",
    "name": "Lian Po",
    "role": "Clash",
    "avatarUrl": "/heroes/lian-po.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan blinks away again and again, so Lian Po's dashes never manage to catch her."
      },
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo's Destroyed Defense lets his shots deal true damage, so Lian Po's armor counts for nothing."
      }
    ],
    "synergies": [
      {
        "id": "alessio",
        "name": "Alessio",
        "reason": "Alessio's smoke hides allies too, so Lian Po can close the distance before anyone sees him coming."
      },
      {
        "id": "arli",
        "name": "Arli",
        "reason": "Arli can keep hitting whatever Lian Po launches, so her Maple stacks reach the detonation easily."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Mozi"
        ],
        "matchRate": "4.7%"
      },
      {
        "names": [
          "Kui"
        ],
        "matchRate": "2.12%"
      },
      {
        "names": [
          "Flowborn (Mage)"
        ],
        "matchRate": "1.54%"
      },
      {
        "names": [
          "Fang"
        ],
        "matchRate": "1.2%"
      },
      {
        "names": [
          "Daji",
          "Han Xin"
        ],
        "matchRate": "8.7%"
      },
      {
        "names": [
          "Arke",
          "Huang Zhong"
        ],
        "matchRate": "4.59%"
      },
      {
        "names": [
          "Fang",
          "Flowborn (Mage)"
        ],
        "matchRate": "3.68%"
      },
      {
        "names": [
          "Huang Zhong",
          "Flowborn (Mage)"
        ],
        "matchRate": "3.32%"
      },
      {
        "names": [
          "Daji",
          "Hou Yi"
        ],
        "matchRate": "2.86%"
      }
    ],
    "equipment": {
      "build": [
        "Guardian - Radiance",
        "Boots of Fortitude",
        "Frigid Charge",
        "Longnight Guardian",
        "Ominous Premonition",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Tank",
      "Clash",
      "Vanguard"
    ]
  },
  {
    "id": "liang",
    "name": "Liang",
    "role": "Mid",
    "avatarUrl": "/heroes/liang.webp",
    "counters": [
      "arli",
      "cirrus",
      "dian-wei",
      "diaochan",
      "dyadia",
      "feyd",
      "florentino",
      "flowborn-mage",
      "gao",
      "luna",
      "mai-shiranui",
      "mayene",
      "mulan",
      "musashi",
      "sakeer",
      "shangguan",
      "yao",
      "zilong"
    ],
    "counteredBy": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei is immune to crowd control and invincible while roaring, so Liang's suppression is wasted entirely."
      },
      {
        "id": "li-bai",
        "name": "Li Bai",
        "reason": "Li Bai's sword formation clears his debuffs and turns him untargetable, so Liang's suppression never lands."
      }
    ],
    "synergies": [
      {
        "id": "ming",
        "name": "Ming",
        "reason": "Ming can land his defense-shredding instrument for certain on a hero pinned by Liang's suppression."
      },
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria's attached shield soaks the incoming damage, so Liang can hold the full suppression instead of dying mid-channel."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Florentino"
        ],
        "matchRate": "2.56%"
      },
      {
        "names": [
          "Zilong"
        ],
        "matchRate": "1.75%"
      },
      {
        "names": [
          "Lu Bu"
        ],
        "matchRate": "1.56%"
      },
      {
        "names": [
          "Luban No.7",
          "Lu Bu"
        ],
        "matchRate": "5.09%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Mask of Agony",
        "Scepter of Reverberation",
        "Savant's Wrath",
        "Void Staff",
        "Sage's Tome"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Control"
    ]
  },
  {
    "id": "liu-bang",
    "name": "Liu Bang",
    "role": "Clash",
    "avatarUrl": "/heroes/liu-bang.webp",
    "counters": [
      "shouyue",
      "xuance"
    ],
    "counteredBy": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo's Destruction stacks strip defense and add true damage that Liu Bang's armor cannot reduce."
      },
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu is immune to crowd control while diving, and his landing knock-up breaks Liu Bang's ultimate channel."
      }
    ],
    "synergies": [
      {
        "id": "di-renjie",
        "name": "Di Renjie",
        "reason": "Di Renjie exposes the target's location, so Liu Bang can land his fully charged Staggering Charge after teleporting."
      },
      {
        "id": "butterfly",
        "name": "Butterfly",
        "reason": "Butterfly only halves Basic Attack damage after diving in, and Liu Bang's ultimate shield covers the skill damage she still takes."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "3.25%"
      },
      {
        "names": [
          "Hou Yi"
        ],
        "matchRate": "2.46%"
      },
      {
        "names": [
          "Hou Yi",
          "Ming"
        ],
        "matchRate": "11.70%"
      },
      {
        "names": [
          "Lady Sun",
          "Ming"
        ],
        "matchRate": "8.96%"
      },
      {
        "names": [
          "Ming",
          "Meng Ya"
        ],
        "matchRate": "5.71%"
      }
    ],
    "equipment": {
      "build": [
        "Guardian - Radiance",
        "Boots of Tranquility",
        "Blazing Cape",
        "Breakthrough Robe",
        "Augur's Word",
        "Staves of Sorcery"
      ],
      "arcana": [
        "Nightmare",
        "Harmony",
        "Mind's Eye"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Tank",
      "Clash",
      "Guardian"
    ]
  },
  {
    "id": "liu-bei",
    "name": "Liu Bei",
    "role": "Jungle",
    "avatarUrl": "/heroes/liu-bei.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "lady-zhen",
        "name": "Lady Zhen",
        "reason": "Lady Zhen's icicles wall heroes off and launch them, stopping Liu Bei before he can close."
      },
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui's ultimate knocks Liu Bei back and strips the very physical attack Hearts and Minds just gave him."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's pull and stun hold enemies in place, so every shotgun shell lands and stacks Liu Bei's pierce."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's suppression pins a hero in place, so Liu Bei keeps firing and feeds the damage back into his shield."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Guiguzi"
        ],
        "matchRate": "2.90%"
      },
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "2.07%"
      },
      {
        "names": [
          "Lady Sun",
          "Ming"
        ],
        "matchRate": "6.22%"
      },
      {
        "names": [
          "Dolia",
          "Shangguan"
        ],
        "matchRate": "5.08%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Axe of Torment",
        "Master Sword",
        "Doomsday",
        "Ominous Premonition"
      ],
      "arcana": [
        "Red Moon",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Berserker"
    ]
  },
  {
    "id": "liu-shan",
    "name": "Liu Shan",
    "role": "Roam",
    "avatarUrl": "/heroes/liu-shan.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo's Destroyed Defense adds true damage to every hit, so Liu Shan's armor does nothing against it."
      },
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's Time Flux speeds up his whole team, so Liu Shan's charge lands on empty ground."
      }
    ],
    "synergies": [
      {
        "id": "garo",
        "name": "Garo",
        "reason": "Garo's Silent Arrow detonates on a delay, so Robo Smash's stun holds the target in place for it."
      },
      {
        "id": "hou-yi",
        "name": "Hou Yi",
        "reason": "Hou Yi's enhanced Arrow Volley also damages structures, pairing with Liu Shan, whose skills hit towers just as hard."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Agudo"
        ],
        "matchRate": "3.38%"
      },
      {
        "names": [
          "Milady"
        ],
        "matchRate": "2.5%"
      },
      {
        "names": [
          "Shouyue"
        ],
        "matchRate": "2.28%"
      },
      {
        "names": [
          "Fang"
        ],
        "matchRate": "2.23%"
      },
      {
        "names": [
          "Mi Yue"
        ],
        "matchRate": "2.01%"
      },
      {
        "names": [
          "Di Renjie",
          "Butterfly"
        ],
        "matchRate": "6.60%"
      },
      {
        "names": [
          "Fang",
          "Milady"
        ],
        "matchRate": "6.52%"
      },
      {
        "names": [
          "Consort Yu",
          "Milady"
        ],
        "matchRate": "5.53%"
      },
      {
        "names": [
          "Luban No.7",
          "Mi Yue"
        ],
        "matchRate": "3.99%"
      },
      {
        "names": [
          "Shouyue",
          "Li Xin"
        ],
        "matchRate": "3.92%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Radiance",
        "Boots of Resistance",
        "Axe of Torment",
        "Blazing Cape",
        "Blood Rage",
        "Longnight Guardian"
      ],
      "arcana": [
        "Fate",
        "Hunt",
        "Void"
      ],
      "spell": "Purify"
    },
    "tags": [
      "Tank",
      "Roam",
      "Tactical",
      "Support"
    ]
  },
  {
    "id": "lorion",
    "name": "Lorion",
    "role": "Mid",
    "avatarUrl": "/heroes/lorion.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi cycles through crowd control immunity, so he can shrug off Starry Night's delayed launch."
      },
      {
        "id": "arli",
        "name": "Arli",
        "reason": "Arli's Maple Dance knocks down the projectile Lorion leaves outside him, and his whole kit runs through it."
      }
    ],
    "synergies": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo's Fevered Barrage hits for as long as enemies stay in range, and Starry Night's launch keeps them there."
      },
      {
        "id": "lian-po",
        "name": "Lian Po",
        "reason": "Lian Po's Tremor Smash slows enemies so they cannot walk away, letting Starry Night's delayed detonation land."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "2.11%"
      },
      {
        "names": [
          "Flowborn (Tank)"
        ],
        "matchRate": "1.63%"
      },
      {
        "names": [
          "Zilong",
          "Dolia"
        ],
        "matchRate": "5.36%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Insatiable Tome",
        "Scepter of Reverberation",
        "Mask of Agony",
        "Savant's Wrath",
        "Sage's Tome"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid"
    ]
  },
  {
    "id": "lu-bu",
    "name": "Lu Bu",
    "role": "Clash",
    "avatarUrl": "/heroes/lu-bu.webp",
    "counters": [
      "arke",
      "arthur",
      "bai-qi",
      "biron",
      "butterfly",
      "dun",
      "fatih",
      "flowborn-tank",
      "lapulapu",
      "liu-bang",
      "zhang-fei"
    ],
    "counteredBy": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo's true damage ignores the defense of Lu Bu's ring, and his blinks keep him out of reach."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei knocks Lu Bu out of his own ring, and Unbridled Outburst makes Zhang Fei immune while roaring."
      }
    ],
    "synergies": [
      {
        "id": "dolia",
        "name": "Dolia",
        "reason": "Dolia's Celestial Melody resets the longest cooldown, which for Lu Bu means a second Tremble, Mortals."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies into one spot and stuns them, so Tremble, Mortals lands on the whole group."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "7.40%"
      },
      {
        "names": [
          "Yixing"
        ],
        "matchRate": "2.3%"
      },
      {
        "names": [
          "Liang"
        ],
        "matchRate": "1.56%"
      },
      {
        "names": [
          "Erin"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Gao",
          "Dolia"
        ],
        "matchRate": "11.74%"
      },
      {
        "names": [
          "Dolia",
          "Yixing"
        ],
        "matchRate": "11.5%"
      },
      {
        "names": [
          "Dolia",
          "Shangguan"
        ],
        "matchRate": "8.68%"
      },
      {
        "names": [
          "Garuda",
          "Dolia"
        ],
        "matchRate": "8.35%"
      },
      {
        "names": [
          "Marco Polo",
          "Dolia"
        ],
        "matchRate": "7.17%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Pure Sky",
        "Overlord's Might",
        "Cuirass of Savagery",
        "Demonsbane",
        "Mortal Punisher"
      ],
      "arcana": [
        "Red Moon",
        "Inheritance",
        "Stealth",
        "Hunt",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Heavy"
    ]
  },
  {
    "id": "luara",
    "name": "Luara",
    "role": "Farm",
    "avatarUrl": "/heroes/luara.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan's blink keeps refunding its own cooldown, so Luara can never hold her kiting distance."
      },
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong speeds up while closing in, so Luara cannot walk away before his mark stuns her."
      }
    ],
    "synergies": [
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu's ultimate bunches enemies up and pins them, so Furtive Attack's line runs through the whole group."
      },
      {
        "id": "menki",
        "name": "Menki",
        "reason": "Menki's stacking slows leave enemies unable to walk out of Luara's serpent blades."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "2.89%"
      },
      {
        "names": [
          "Guiguzi"
        ],
        "matchRate": "1.76%"
      },
      {
        "names": [
          "Wang Zhaojun",
          "Ming"
        ],
        "matchRate": "3.85%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Fortitude",
        "Sparkforged Dagger",
        "Doomsday",
        "Deepfrost Siege",
        "Cuirass of Savagery",
        "Blood Rage"
      ],
      "arcana": [
        "Calamity",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Frenzy"
    },
    "tags": [
      "Marksman",
      "Farm",
      "DPS"
    ]
  },
  {
    "id": "luban-no-7",
    "name": "Luban No.7",
    "role": "Farm",
    "avatarUrl": "/heroes/luban-no-7.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "li-bai",
        "name": "Li Bai",
        "reason": "Li Bai clears every debuff as Stroke of Genius forms, so the Blowfish Grenade slow vanishes."
      },
      {
        "id": "consort-yu",
        "name": "Consort Yu",
        "reason": "Consort Yu is immune to physical attacks during Protecting Winds, and the scattershot is just an enhanced Basic Attack."
      }
    ],
    "synergies": [
      {
        "id": "agudo",
        "name": "Agudo",
        "reason": "Agudo's Gorge Mobilization stuns a cluster, so Air Support's untargeted bombs keep finding someone."
      },
      {
        "id": "lian-po",
        "name": "Lian Po",
        "reason": "Lian Po's Tremor Smash launches the whole group, so Air Support keeps bombing them where they stand."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Cai Yan"
        ],
        "matchRate": "2.39%"
      },
      {
        "names": [
          "Donghuang"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Mi Yue",
          "Lapulapu"
        ],
        "matchRate": "5.52%"
      },
      {
        "names": [
          "Lu Bu",
          "Liang"
        ],
        "matchRate": "5.09%"
      },
      {
        "names": [
          "Mozi",
          "Gao"
        ],
        "matchRate": "4.88%"
      },
      {
        "names": [
          "Angela",
          "Kui"
        ],
        "matchRate": "4.05%"
      },
      {
        "names": [
          "Liu Shan",
          "Mi Yue"
        ],
        "matchRate": "3.99%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Sparkforged Dagger",
        "Eternity Blade",
        "Daybreaker's Virtue",
        "Doomsday",
        "Overlord's Might"
      ],
      "arcana": [
        "Calamity",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "DPS"
    ]
  },
  {
    "id": "luna",
    "name": "Luna",
    "role": "Jungle",
    "avatarUrl": "/heroes/luna.webp",
    "counters": [
      "yang-jian"
    ],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's ultimate simply suppresses Luna, so she cannot dash, mark, or fight back at all."
      },
      {
        "id": "heino",
        "name": "Heino",
        "reason": "Heino heals more the more enemy heroes stand near him, so Luna's own melee pressure feeds his sustain."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi drags enemies into one clump, so a single Crescent Slice marks them all and New Moon keeps resetting."
      },
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's ultimate hands out crowd control immunity and a shield, so Luna can dive in without being stopped."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Mulan"
        ],
        "matchRate": "1.56%"
      },
      {
        "names": [
          "Marco Polo"
        ],
        "matchRate": "1.49%"
      },
      {
        "names": [
          "Marco Polo",
          "Yaria"
        ],
        "matchRate": "29.62%"
      },
      {
        "names": [
          "Ao'yin",
          "Dyadia"
        ],
        "matchRate": "5.32%"
      },
      {
        "names": [
          "Mulan",
          "Yaria"
        ],
        "matchRate": "4.23%"
      }
    ],
    "equipment": {
      "build": [
        "Runeblade",
        "Boots of Resistance",
        "Augur's Word",
        "Insatiable Tome",
        "Breakthrough Robe",
        "Savant's Wrath"
      ],
      "arcana": [
        "Red Moon",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Charger"
    ]
  },
  {
    "id": "mai-shiranui",
    "name": "Mai Shiranui",
    "role": "Mid",
    "avatarUrl": "/heroes/mai-shiranui.webp",
    "counters": [
      "dr-bian",
      "erin",
      "gan-mo",
      "liu-bei",
      "meng-ya",
      "milady",
      "wang-zhaojun"
    ],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang can suppress a lone diver outright, so Mai Shiranui gets picked off the moment she goes in."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi stacks a shield with every skill he casts, so Mai Shiranui's opening burst is absorbed before it lands."
      }
    ],
    "synergies": [
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's suppression pins a hero in place, so Mai Shiranui can land her dash on a target that cannot move."
      },
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's Time Flux buffs nearby allies, so Mai Shiranui gets in and back out faster."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Chano"
        ],
        "matchRate": "1.99%"
      },
      {
        "names": [
          "Di Renjie"
        ],
        "matchRate": "1.72%"
      },
      {
        "names": [
          "Zhuangzi"
        ],
        "matchRate": "1.68%"
      },
      {
        "names": [
          "Chano",
          "Ata"
        ],
        "matchRate": "5.90%"
      },
      {
        "names": [
          "Zhuangzi",
          "Di Renjie"
        ],
        "matchRate": "5.37%"
      },
      {
        "names": [
          "Chano",
          "Cai Yan"
        ],
        "matchRate": "5.32%"
      }
    ],
    "equipment": {
      "build": [
        "Insatiable Tome",
        "Boots of Resistance",
        "Venomous Staff",
        "Savant's Wrath",
        "Void Staff",
        "Sage's Tome"
      ],
      "arcana": [
        "Nightmare",
        "Harmony",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Ambush"
    ]
  },
  {
    "id": "marco-polo",
    "name": "Marco Polo",
    "role": "Farm",
    "avatarUrl": "/heroes/marco-polo.webp",
    "counters": [
      "flowborn-tank",
      "garo",
      "huang-zhong",
      "lapulapu",
      "lian-po",
      "liu-bang",
      "liu-shan",
      "lu-bu",
      "mi-yue",
      "wuyan"
    ],
    "counteredBy": [
      {
        "id": "consort-yu",
        "name": "Consort Yu",
        "reason": "Consort Yu turns immune to physical attacks under Protecting Winds, and Marco Polo's bullets are all physical."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's knockback shoves Marco Polo out of the close range where Roaming Gun pays its damage bonus."
      }
    ],
    "synergies": [
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria attaches to Marco Polo with a true-damage shield, letting him close in and keep firing."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "25.01%"
      },
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "19.67%"
      },
      {
        "names": [
          "Lady Zhen"
        ],
        "matchRate": "2.05%"
      },
      {
        "names": [
          "Luna"
        ],
        "matchRate": "1.49%"
      },
      {
        "names": [
          "Lady Zhen",
          "Yaria"
        ],
        "matchRate": "29.82%"
      },
      {
        "names": [
          "Luna",
          "Yaria"
        ],
        "matchRate": "29.62%"
      },
      {
        "names": [
          "Yaria",
          "Lam"
        ],
        "matchRate": "28.87%"
      },
      {
        "names": [
          "Diaochan",
          "Yaria"
        ],
        "matchRate": "19.02%"
      },
      {
        "names": [
          "Wang Zhaojun",
          "Yaria"
        ],
        "matchRate": "18.83%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Sparkforged Dagger",
        "Doomsday",
        "Frigid Charge",
        "Daybreaker's Virtue",
        "Succubus Cloak"
      ],
      "arcana": [
        "Red Moon",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Stun"
    },
    "tags": [
      "Marksman",
      "Farm",
      "Nimble"
    ]
  },
  {
    "id": "mayene",
    "name": "Mayene",
    "role": "Clash",
    "avatarUrl": "/heroes/mayene.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "arthur",
        "name": "Arthur",
        "reason": "Arthur's silence shuts Mayene down, since she fights entirely in chained skill combos."
      },
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression locks Mayene in place and cuts her combo chain apart halfway through."
      }
    ],
    "synergies": [
      {
        "id": "kongming",
        "name": "Kongming",
        "reason": "Kongming's Spirit Bomb scales with Health already lost, so Mayene's combo damage sets up his finisher."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's stuns freeze the target in place, giving Mayene a clean opening to start her combo on."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Donghuang"
        ],
        "matchRate": "1.43%"
      },
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "1.16%"
      },
      {
        "names": [
          "Lady Sun",
          "Sun Bin"
        ],
        "matchRate": "4.13%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Axe of Torment",
        "Pure Sky",
        "Overlord's Might",
        "Cuirass of Savagery",
        "Demonsbane"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Charger"
    ]
  },
  {
    "id": "meng-ya",
    "name": "Meng Ya",
    "role": "Farm",
    "avatarUrl": "/heroes/meng-ya.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui's dash launch interrupts Meng Ya mid-strafe, so his long channel never gets to finish."
      },
      {
        "id": "pei",
        "name": "Pei",
        "reason": "Pei closes in with a dash and a shield, so Meng Ya loses the straight trade at close range."
      }
    ],
    "synergies": [
      {
        "id": "menki",
        "name": "Menki",
        "reason": "Menki brawls deep in the enemy line, so Missile Mayhem keeps finding fresh targets to mark."
      },
      {
        "id": "agudo",
        "name": "Agudo",
        "reason": "Agudo's Furball stuns enemies in place, giving Meng Ya a still target to strafe down."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Athena"
        ],
        "matchRate": "2.93%"
      },
      {
        "names": [
          "Sun Bin"
        ],
        "matchRate": "2.69%"
      },
      {
        "names": [
          "Liu Bang",
          "Ming"
        ],
        "matchRate": "5.71%"
      },
      {
        "names": [
          "Sun Bin",
          "Allain"
        ],
        "matchRate": "5.12%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Shadow Ripper",
        "Daybreaker's Virtue",
        "Eternity Blade",
        "Mortal Punisher",
        "Overlord's Might"
      ],
      "arcana": [
        "Calamity",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Marksman",
      "Farm",
      "DPS"
    ]
  },
  {
    "id": "menki",
    "name": "Menki",
    "role": "Jungle",
    "avatarUrl": "/heroes/menki.webp",
    "counters": [
      "biron"
    ],
    "counteredBy": [
      {
        "id": "sima-yi",
        "name": "Sima Yi",
        "reason": "Sima Yi feeds on nearby skill casts, and Menki must keep casting to hold his Mass."
      },
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi cycles through crowd control immunity, so Menki's roam-ending launch often does nothing at all."
      }
    ],
    "synergies": [
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's Time Flux speeds up nearby allies, letting Menki close in before his own shield expires."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei leaps in and shields nearby allies, so Menki can stack that on his own and stay in the fray."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "2.58%"
      },
      {
        "names": [
          "Ming"
        ],
        "matchRate": "1.92%"
      },
      {
        "names": [
          "Arli",
          "Yaria"
        ],
        "matchRate": "13.16%"
      },
      {
        "names": [
          "Lady Sun",
          "Ming"
        ],
        "matchRate": "6.47%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Shadow Ripper",
        "Pure Sky",
        "Deepfrost Siege",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Red Moon",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Formation",
      "Mage"
    ]
  },
  {
    "id": "mi-yue",
    "name": "Mi Yue",
    "role": "Clash",
    "avatarUrl": "/heroes/mi-yue.webp",
    "counters": [
      "arthur",
      "dian-wei",
      "kaizer",
      "mulan"
    ],
    "counteredBy": [
      {
        "id": "sun-ce",
        "name": "Sun Ce",
        "reason": "Sun Ce stacks slows and then launches with his ship explosion, leaving Mi Yue nowhere to move."
      },
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo stacks Destruction with every hit, and the true damage that follows cuts straight through Mi Yue's defenses."
      }
    ],
    "synergies": [
      {
        "id": "dolia",
        "name": "Dolia",
        "reason": "Dolia's Celestial Melody resets Mi Yue's longest cooldown, handing her a second Umbral Moon."
      },
      {
        "id": "bai-qi",
        "name": "Bai Qi",
        "reason": "Bai Qi pulls enemies in and taunts them, so Mi Yue's Ravenous Tether stays linked instead of snapping."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Liu Shan"
        ],
        "matchRate": "2.01%"
      },
      {
        "names": [
          "Angela"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Luban No.7",
          "Lapulapu"
        ],
        "matchRate": "5.52%"
      },
      {
        "names": [
          "Angela",
          "Kui"
        ],
        "matchRate": "5.46%"
      },
      {
        "names": [
          "Luban No.7",
          "Liu Shan"
        ],
        "matchRate": "3.99%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Fortitude",
        "Golden Blade",
        "Insatiable Tome",
        "Breakthrough Robe",
        "Staves of Sorcery",
        "Augur's Word"
      ],
      "arcana": [
        "Red Moon",
        "Beast Scar",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Frenzy"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Formation",
      "Mage"
    ]
  },
  {
    "id": "milady",
    "name": "Milady",
    "role": "Mid",
    "avatarUrl": "/heroes/milady.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui strips Milady's magical defense with KACHOUSEN, then dashes straight in on top of her."
      },
      {
        "id": "ziya",
        "name": "Ziya",
        "reason": "Ziya's lingering area damage and follow-up explosion sweep away Milady's mechanical minions all at once."
      }
    ],
    "synergies": [
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's Time Flux speeds Milady into range, and his heavy slow leaves the target easy to mark with Chaos Field."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shield and knockback let Milady hold her spot until Chaos Field's mark finishes."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Liu Shan"
        ],
        "matchRate": "2.5%"
      },
      {
        "names": [
          "Fang"
        ],
        "matchRate": "1.8%"
      },
      {
        "names": [
          "Dun"
        ],
        "matchRate": "1.67%"
      },
      {
        "names": [
          "Liu Shan",
          "Fang"
        ],
        "matchRate": "6.52%"
      },
      {
        "names": [
          "Liu Shan",
          "Consort Yu"
        ],
        "matchRate": "5.53%"
      },
      {
        "names": [
          "Liu Shan",
          "Erin"
        ],
        "matchRate": "3.60%"
      },
      {
        "names": [
          "Liu Shan",
          "Ukyo Tachibana"
        ],
        "matchRate": "3.32%"
      },
      {
        "names": [
          "Xiang Yu",
          "Consort Yu"
        ],
        "matchRate": "3.07%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Scepter of Reverberation",
        "Frozen Breath",
        "Twilight Stream",
        "Savant's Wrath",
        "Mask of Agony"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Tribute",
        "Mind's Eye"
      ],
      "spell": "Purify"
    },
    "tags": [
      "Mage",
      "Mid",
      "Formation"
    ]
  },
  {
    "id": "ming",
    "name": "Ming",
    "role": "Roam",
    "avatarUrl": "/heroes/ming.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "li-bai",
        "name": "Li Bai",
        "reason": "Li Bai strips his own debuffs with two of his skills, so the shred from Mastery - Glide never sticks."
      },
      {
        "id": "daji",
        "name": "Daji",
        "reason": "Daji shreds magical defense, so she can finish Ming while he is down on the health Peace - Longevity cost him."
      }
    ],
    "synergies": [
      {
        "id": "garo",
        "name": "Garo",
        "reason": "Garo's Silent Arrow casts faster the more Attack Speed she carries, which is exactly what Time - Carefree hands her."
      },
      {
        "id": "arli",
        "name": "Arli",
        "reason": "Arli builds her Maple stacks with Basic Attacks, so the attack boost from Time - Carefree rides into the detonation."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Garo"
        ],
        "matchRate": "7.21%"
      },
      {
        "names": [
          "Lady Sun"
        ],
        "matchRate": "6.71%"
      },
      {
        "names": [
          "Hou Yi"
        ],
        "matchRate": "6.18%"
      },
      {
        "names": [
          "Alessio"
        ],
        "matchRate": "5.00%"
      },
      {
        "names": [
          "Kongming"
        ],
        "matchRate": "3.9%"
      },
      {
        "names": [
          "Liu Bang",
          "Hou Yi"
        ],
        "matchRate": "11.70%"
      },
      {
        "names": [
          "Hou Yi",
          "Athena"
        ],
        "matchRate": "10.06%"
      },
      {
        "names": [
          "Dun",
          "Hou Yi"
        ],
        "matchRate": "9.66%"
      },
      {
        "names": [
          "Daji",
          "Hou Yi"
        ],
        "matchRate": "9.39%"
      },
      {
        "names": [
          "Lady Sun",
          "Liu Bang"
        ],
        "matchRate": "8.96%"
      }
    ],
    "equipment": {
      "build": [
        "Guardian - Redemption",
        "Boots of Resistance",
        "Augur's Word",
        "Succubus Cloak",
        "Savant's Wrath",
        "Sage's Tome"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Support",
      "Roam",
      "Buff"
    ]
  },
  {
    "id": "mozi",
    "name": "Mozi",
    "role": "Mid",
    "avatarUrl": "/heroes/mozi.webp",
    "counters": [
      "bai-qi",
      "dolia",
      "guiguzi",
      "lady-sun",
      "lam",
      "li-bai",
      "mai-shiranui",
      "wuyan",
      "xiao-qiao",
      "zhou-yu",
      "zilong"
    ],
    "counteredBy": [
      {
        "id": "dolia",
        "name": "Dolia",
        "reason": "Standing in the river, Dolia heals nonstop and her Ode shoves Mozi away."
      },
      {
        "id": "nezha",
        "name": "Nezha",
        "reason": "Nezha's Universe Ring reveals Mozi anywhere, letting Skyfall dive on him from across the map."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi drags enemies into one spot, so Mozi's self-centered barrier keeps stunning all of them."
      },
      {
        "id": "dyadia",
        "name": "Dyadia",
        "reason": "Dyadia's snares pin the target in place, so Mozi's Cannon Blast is easy to land."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Shouyue"
        ],
        "matchRate": "8.97%"
      },
      {
        "names": [
          "Lian Po"
        ],
        "matchRate": "4.7%"
      },
      {
        "names": [
          "Gao"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Dian Wei"
        ],
        "matchRate": "1.67%"
      },
      {
        "names": [
          "Wukong",
          "Shouyue"
        ],
        "matchRate": "14.12%"
      },
      {
        "names": [
          "Dian Wei",
          "Shouyue"
        ],
        "matchRate": "7.89%"
      },
      {
        "names": [
          "Luban No.7",
          "Gao"
        ],
        "matchRate": "4.88%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Radiance",
        "Boots of Resistance",
        "Holy Grail",
        "Dawnlight",
        "Ominous Premonition",
        "Succubus Cloak"
      ],
      "arcana": [
        "Fate",
        "Hunt",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Mid",
      "Control",
      "Mage"
    ]
  },
  {
    "id": "mulan",
    "name": "Mulan",
    "role": "Clash",
    "avatarUrl": "/heroes/mulan.webp",
    "counters": [
      "daji",
      "diaochan",
      "fatih",
      "hou-yi",
      "sun-bin"
    ],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's barriers stun the first enemy to touch them, so Mulan's dashes only lock her down."
      },
      {
        "id": "mi-yue",
        "name": "Mi Yue",
        "reason": "Mi Yue vanishes with Umbral Moon and wipes the debuffs, so Balance rarely builds to its detonation."
      }
    ],
    "synergies": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's Butterfly Effect strips crowd control and grants immunity, so Mulan can dive in without hesitation."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Shi"
        ],
        "matchRate": "2.39%"
      },
      {
        "names": [
          "Sima Yi"
        ],
        "matchRate": "1.66%"
      },
      {
        "names": [
          "Luna"
        ],
        "matchRate": "1.56%"
      },
      {
        "names": [
          "Luna",
          "Yaria"
        ],
        "matchRate": "4.23%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Fortitude",
        "Axe of Torment",
        "Cuirass of Savagery",
        "Pure Sky",
        "Succubus Cloak",
        "Starbreaker"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Harmony",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Assassin"
    ]
  },
  {
    "id": "musashi",
    "name": "Musashi",
    "role": "Jungle",
    "avatarUrl": "/heroes/musashi.webp",
    "counters": [
      "cai-yan",
      "chano",
      "flowborn-assassin",
      "flowborn-roamer"
    ],
    "counteredBy": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan cycles her skills far faster inside Flowery Potential, so Musashi dives in and she simply blinks away."
      },
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression lands the moment Musashi's super armor ends and the trade begins."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies into one spot, so Musashi's ultimate catches several of them as he lands."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei slows nearby enemies with every skill once he transforms, so Musashi's duel target has nowhere to run."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Xiao Qiao"
        ],
        "matchRate": "1.65%"
      },
      {
        "names": [
          "Arli",
          "Yaria"
        ],
        "matchRate": "12.26%"
      },
      {
        "names": [
          "Da Qiao",
          "Arli"
        ],
        "matchRate": "8.04%"
      },
      {
        "names": [
          "Lady Sun",
          "Dyadia"
        ],
        "matchRate": "5.01%"
      },
      {
        "names": [
          "Dolia",
          "Heino"
        ],
        "matchRate": "3.48%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Axe of Torment",
        "Frostscar's Embrace",
        "Pure Sky",
        "Bloodweeper"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Reaver",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Assassin"
    ]
  },
  {
    "id": "nakoruru",
    "name": "Nakoruru",
    "role": "Jungle",
    "avatarUrl": "/heroes/nakoruru.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's spear sweep knocks enemy heroes away, so Nakoruru gets shoved back when she dives him head-on."
      },
      {
        "id": "wukong",
        "name": "Wukong",
        "reason": "Wukong's Protective Shroud eats one of Nakoruru's skills outright and hands him a shield in return."
      }
    ],
    "synergies": [
      {
        "id": "lady-zhen",
        "name": "Lady Zhen",
        "reason": "Lady Zhen's Destructive Deluge slows enemies down, leaving them easy targets for Nakoruru's AMUBE YATORO."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's The Animist clumps enemies together and stuns them, so KAMUI MUTSUBE's charge hits the whole group."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "3.35%"
      },
      {
        "names": [
          "Xiao Qiao"
        ],
        "matchRate": "1.39%"
      },
      {
        "names": [
          "Lady Sun",
          "Ming"
        ],
        "matchRate": "7.43%"
      },
      {
        "names": [
          "Hou Yi",
          "Ming"
        ],
        "matchRate": "7.12%"
      },
      {
        "names": [
          "Ming",
          "Alessio"
        ],
        "matchRate": "6.53%"
      },
      {
        "names": [
          "Erin",
          "Ming"
        ],
        "matchRate": "6.25%"
      },
      {
        "names": [
          "Di Renjie",
          "Annette"
        ],
        "matchRate": "5.53%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Axe of Torment",
        "Overlord's Might",
        "Cuirass of Savagery",
        "Starbreaker"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Burst"
    ]
  },
  {
    "id": "nezha",
    "name": "Nezha",
    "role": "Clash",
    "avatarUrl": "/heroes/nezha.webp",
    "counters": [
      "mozi"
    ],
    "counteredBy": [
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's Forsaken Contract makes the two share damage, so Nezha's own team ends up hitting him."
      },
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan heals each time her floral marks trigger and burns Nezha with true damage for staying close."
      }
    ],
    "synergies": [
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's Time Flux gives the diving Nezha the speed to stay on a target and then get out."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's Leaping Savior shields teammates around his landing spot, so a Nezha diving in with him holds the line longer."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ying"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Nuwa",
          "Yaria"
        ],
        "matchRate": "2.94%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Fortitude",
        "Axe of Torment",
        "Frostscar's Embrace",
        "Pure Sky",
        "Overlord's Might",
        "Demonsbane"
      ],
      "arcana": [
        "Fate",
        "Stealth",
        "Void"
      ],
      "spell": "Execute"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Charger"
    ]
  },
  {
    "id": "nuwa",
    "name": "Nuwa",
    "role": "Mid",
    "avatarUrl": "/heroes/nuwa.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin leaps in over the ground, so Nuwa's matrices never stand between him and her."
      },
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong chains a heavy slow into a stun, and Nuwa has only one escape to answer with."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's slows bog enemies down, so Nuwa's ground-laid matrix explosions land on them."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's barrier stuns enemies where they stand, so Nuwa can box them in with her matrices."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Flowborn (Tank)"
        ],
        "matchRate": "1.76%"
      },
      {
        "names": [
          "Fuzi"
        ],
        "matchRate": "1.57%"
      },
      {
        "names": [
          "Di Renjie",
          "Sakeer"
        ],
        "matchRate": "5.46%"
      },
      {
        "names": [
          "Zhang Fei",
          "Chicha"
        ],
        "matchRate": "4.03%"
      },
      {
        "names": [
          "Fuzi",
          "Pei"
        ],
        "matchRate": "2.95%"
      },
      {
        "names": [
          "Nezha",
          "Yaria"
        ],
        "matchRate": "2.94%"
      },
      {
        "names": [
          "Chano",
          "Flowborn (Tank)"
        ],
        "matchRate": "1.63%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Tranquility",
        "Scepter of Reverberation",
        "Sage's Tome",
        "Savant's Wrath",
        "Void Staff",
        "Splendor"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Artillery"
    ]
  },
  {
    "id": "pei",
    "name": "Pei",
    "role": "Jungle",
    "avatarUrl": "/heroes/pei.webp",
    "counters": [
      "meng-ya",
      "zhuangzi"
    ],
    "counteredBy": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan blinks out of range and heals off her floral marks, so a drawn-out trade only favors her."
      },
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin heals back part of the damage taken during Time Flux, so Pei's burst simply gets refunded."
      }
    ],
    "synergies": [
      {
        "id": "lapulapu",
        "name": "Lapulapu",
        "reason": "Lapulapu launches enemies and leaves them crawling, so Pei can dash in and finish the kill uninterrupted."
      },
      {
        "id": "shouyue",
        "name": "Shouyue",
        "reason": "Shouyue's scouting devices keep the enemy on screen, so Pei can choose exactly which fight to jump into."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "1.96%"
      },
      {
        "names": [
          "Wang Zhaojun"
        ],
        "matchRate": "1.70%"
      },
      {
        "names": [
          "Fuzi"
        ],
        "matchRate": "1.61%"
      },
      {
        "names": [
          "Guan Yu"
        ],
        "matchRate": "1.49%"
      },
      {
        "names": [
          "Fuzi",
          "Da Qiao"
        ],
        "matchRate": "6.13%"
      },
      {
        "names": [
          "Bai Qi",
          "Yuhuan"
        ],
        "matchRate": "4.09%"
      },
      {
        "names": [
          "Yango",
          "Dyadia"
        ],
        "matchRate": "3.57%"
      },
      {
        "names": [
          "Fuzi",
          "Nuwa"
        ],
        "matchRate": "2.95%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Axe of Torment",
        "Frostscar's Embrace",
        "Pure Sky",
        "Doomsday"
      ],
      "arcana": [
        "Conflict",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Roving"
    ]
  },
  {
    "id": "sakeer",
    "name": "Sakeer",
    "role": "Roam",
    "avatarUrl": "/heroes/sakeer.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's circles hold vision over the brushes, so Sakeer's next hop is read before he takes it."
      },
      {
        "id": "wukong",
        "name": "Wukong",
        "reason": "Wukong's Protective Shroud simply absorbs Mulberry Power, the one cast Sakeer's setup depends on."
      }
    ],
    "synergies": [
      {
        "id": "luban-no-7",
        "name": "Luban No.7",
        "reason": "Luban No.7's scattershot only hits enemies caught in a straight line, and Sakeer's launch pins them in place."
      },
      {
        "id": "bai-qi",
        "name": "Bai Qi",
        "reason": "Bai Qi amplifies the healing he receives, and Sakeer's fireflies always chase the lowest-Health ally, usually him."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Di Renjie"
        ],
        "matchRate": "2.37%"
      },
      {
        "names": [
          "Yango"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Arli"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Di Renjie",
          "Nuwa"
        ],
        "matchRate": "5.46%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Redemption",
        "Boots of Deftness",
        "Overlord's Platemail",
        "Eye of the Phoenix",
        "Ominous Premonition",
        "Breakthrough Robe"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Roam",
      "Buff",
      "Support"
    ]
  },
  {
    "id": "shangguan",
    "name": "Shangguan",
    "role": "Mid",
    "avatarUrl": "/heroes/shangguan.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression halts the dash chain, so Shangguan never reaches the untargetable leap that cleanses crowd control."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies into one spot and stuns them, so Shangguan's intersecting brush strokes land on the whole group."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "4.53%"
      },
      {
        "names": [
          "Di Renjie"
        ],
        "matchRate": "1.64%"
      },
      {
        "names": [
          "Lu Bu",
          "Dolia"
        ],
        "matchRate": "8.68%"
      },
      {
        "names": [
          "Di Renjie",
          "Dolia"
        ],
        "matchRate": "8.00%"
      },
      {
        "names": [
          "Dolia",
          "Liu Bei"
        ],
        "matchRate": "5.08%"
      },
      {
        "names": [
          "Dolia",
          "Umbrosa"
        ],
        "matchRate": "4.35%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Venomous Staff",
        "Insatiable Tome",
        "Scepter of Reverberation",
        "Savant's Wrath",
        "Void Staff"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Frenzy"
    },
    "tags": [
      "Mage",
      "Mid",
      "Ambush"
    ]
  },
  {
    "id": "shi",
    "name": "Shi",
    "role": "Mid",
    "avatarUrl": "/heroes/shi.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's passive cleanses crowd control and grants immunity, so the hold from Shi's Silk Imprint does not last."
      },
      {
        "id": "sima-yi",
        "name": "Sima Yi",
        "reason": "Sima Yi's silence cuts off the second tap of Silk Imprint, so Shi never completes the pull."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi camouflages the whole team, letting Shi open with Silk Imprint from the long range her passive rewards."
      },
      {
        "id": "huang-zhong",
        "name": "Huang Zhong",
        "reason": "Huang Zhong cannot move in Turret Mode, so Shi drags enemies into the center where his shots hit hardest."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Arli"
        ],
        "matchRate": "2.66%"
      },
      {
        "names": [
          "Devara"
        ],
        "matchRate": "2.46%"
      },
      {
        "names": [
          "Mulan"
        ],
        "matchRate": "2.39%"
      },
      {
        "names": [
          "Chicha"
        ],
        "matchRate": "2.30%"
      },
      {
        "names": [
          "Feyd"
        ],
        "matchRate": "1.69%"
      },
      {
        "names": [
          "Arli",
          "Yaria"
        ],
        "matchRate": "11.11%"
      },
      {
        "names": [
          "Arli",
          "Jing"
        ],
        "matchRate": "7.72%"
      },
      {
        "names": [
          "Zhang Fei",
          "Chicha"
        ],
        "matchRate": "6.18%"
      },
      {
        "names": [
          "Kaizer",
          "Devara"
        ],
        "matchRate": "5.94%"
      },
      {
        "names": [
          "Zhang Fei",
          "Devara"
        ],
        "matchRate": "5.33%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Deftness",
        "Frozen Breath",
        "Mask of Agony",
        "Breakthrough Robe",
        "Insatiable Tome",
        "Splendor"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Control"
    ]
  },
  {
    "id": "shouyue",
    "name": "Shouyue",
    "role": "Farm",
    "avatarUrl": "/heroes/shouyue.webp",
    "counters": [
      "ata",
      "donghuang",
      "gao-changgong",
      "huang-zhong",
      "yuhuan"
    ],
    "counteredBy": [
      {
        "id": "consort-yu",
        "name": "Consort Yu",
        "reason": "Consort Yu turns immune to physical damage with Protecting Winds, so Shouyue's snipe and basic attacks do nothing."
      },
      {
        "id": "liu-bang",
        "name": "Liu Bang",
        "reason": "Liu Bang's Battlefield Command shields the exact target Shouyue is aiming at, so the snipe lands into a shield."
      }
    ],
    "synergies": [
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's barrier stuns enemies over and over, so Shouyue can finish his long aim before firing."
      },
      {
        "id": "lian-po",
        "name": "Lian Po",
        "reason": "Lian Po's Tremor Smash slows and then launches enemies, giving Shouyue time to complete his aim and land Wild Wind."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Mozi"
        ],
        "matchRate": "8.97%"
      },
      {
        "names": [
          "Wukong"
        ],
        "matchRate": "3.04%"
      },
      {
        "names": [
          "Gan & Mo"
        ],
        "matchRate": "2.62%"
      },
      {
        "names": [
          "Liu Shan"
        ],
        "matchRate": "2.28%"
      },
      {
        "names": [
          "Diaochan"
        ],
        "matchRate": "2.12%"
      },
      {
        "names": [
          "Mozi",
          "Wukong"
        ],
        "matchRate": "14.12%"
      },
      {
        "names": [
          "Wukong",
          "Gan & Mo"
        ],
        "matchRate": "8.19%"
      },
      {
        "names": [
          "Mozi",
          "Dian Wei"
        ],
        "matchRate": "7.89%"
      },
      {
        "names": [
          "Diaochan",
          "Wukong"
        ],
        "matchRate": "7.08%"
      },
      {
        "names": [
          "Kui",
          "Li Xin"
        ],
        "matchRate": "4.18%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Dexterity",
        "Eternity Blade",
        "Shadow Ripper",
        "Daybreaker's Virtue",
        "Sunchaser",
        "Mortal Punisher"
      ],
      "arcana": [
        "Calamity",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Assassin",
      "Farm",
      "Artillery",
      "Marksman"
    ]
  },
  {
    "id": "sima-yi",
    "name": "Sima Yi",
    "role": "Jungle",
    "avatarUrl": "/heroes/sima-yi.webp",
    "counters": [
      "lady-zhen",
      "menki",
      "shi",
      "wang-wei",
      "xuance"
    ],
    "counteredBy": [
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin is crowd control immune through The Unrivaled Spear, so Sima Yi cannot interrupt the flurry."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei soaks Sima Yi's burst behind a huge shield and an invincible roar that ignores crowd control."
      }
    ],
    "synergies": [
      {
        "id": "kongming",
        "name": "Kongming",
        "reason": "Kongming's Spirit Bomb scales with Health already lost, so Sima Yi's burst makes it hit much harder."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies into one clump with The Animist and stuns them, so Sima Yi's area skills hit everyone."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Liu Shan"
        ],
        "matchRate": "1.67%"
      },
      {
        "names": [
          "Mulan"
        ],
        "matchRate": "1.66%"
      },
      {
        "names": [
          "Marco Polo",
          "Guiguzi"
        ],
        "matchRate": "6.81%"
      },
      {
        "names": [
          "Sun Bin",
          "Lu Bu"
        ],
        "matchRate": "4.47%"
      },
      {
        "names": [
          "Sun Bin",
          "Marco Polo"
        ],
        "matchRate": "4.13%"
      }
    ],
    "equipment": {
      "build": [
        "Runeblade",
        "Boots of the Arcane",
        "Insatiable Tome",
        "Staves of Sorcery",
        "Savant's Wrath",
        "Void Staff"
      ],
      "arcana": [
        "Nightmare",
        "Fate",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Mage",
      "Jungle",
      "Burst",
      "Assassin"
    ]
  },
  {
    "id": "sun-bin",
    "name": "Sun Bin",
    "role": "Roam",
    "avatarUrl": "/heroes/sun-bin.webp",
    "counters": [
      "athena",
      "liu-shan",
      "pei"
    ],
    "counteredBy": [
      {
        "id": "mulan",
        "name": "Mulan",
        "reason": "Mulan ignores crowd control while casting in heavy sword form, so Time Lapse never interrupts or silences her."
      },
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan keeps blinking to new positions, so Sun Bin's skill shots rarely find her at all."
      }
    ],
    "synergies": [
      {
        "id": "lady-sun",
        "name": "Lady Sun",
        "reason": "Lady Sun's rotation speeds up with every Basic Attack that lands, and Sun Bin's slow keeps enemies in range."
      },
      {
        "id": "luban-no-7",
        "name": "Luban No.7",
        "reason": "Luban No.7's scattershot only lands on enemies lined up ahead, and Sun Bin's slow holds them there."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Bai Qi"
        ],
        "matchRate": "3.82%"
      },
      {
        "names": [
          "Dr Bian"
        ],
        "matchRate": "3.4%"
      },
      {
        "names": [
          "Butterfly"
        ],
        "matchRate": "3.19%"
      },
      {
        "names": [
          "Meng Ya"
        ],
        "matchRate": "2.69%"
      },
      {
        "names": [
          "Ao'yin"
        ],
        "matchRate": "2.25%"
      },
      {
        "names": [
          "Dr Bian",
          "Bai Qi"
        ],
        "matchRate": "10.60%"
      },
      {
        "names": [
          "Dr Bian",
          "Di Renjie"
        ],
        "matchRate": "6.67%"
      },
      {
        "names": [
          "Dr Bian",
          "Ata"
        ],
        "matchRate": "6.14%"
      },
      {
        "names": [
          "Allain",
          "Meng Ya"
        ],
        "matchRate": "5.12%"
      },
      {
        "names": [
          "Erin",
          "Butterfly"
        ],
        "matchRate": "4.89%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Redemption",
        "Boots of the Arcane",
        "Dawnlight",
        "Ominous Premonition",
        "Succubus Cloak",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Mage",
      "Roam",
      "Tactical",
      "Support"
    ]
  },
  {
    "id": "sun-ce",
    "name": "Sun Ce",
    "role": "Clash",
    "avatarUrl": "/heroes/sun-ce.webp",
    "counters": [
      "gan-mo",
      "mi-yue"
    ],
    "counteredBy": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi wipes crowd control on a cycle, so every launch Sun Ce lands on him simply disappears."
      },
      {
        "id": "ata",
        "name": "Ata",
        "reason": "Ata shrugs off launches during Wavewalking and heals back from the damage he deals in a brawl."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi drags enemies into one spot and stuns them, so Sun Ce's ship explosion catches the whole group."
      },
      {
        "id": "dolia",
        "name": "Dolia",
        "reason": "Dolia's Celestial Melody resets the teammate's longest cooldown, so Sun Ce's spent ultimate comes straight back."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Da Qiao"
        ],
        "matchRate": "1.44%"
      },
      {
        "names": [
          "Xiao Qiao"
        ],
        "matchRate": "1.42%"
      },
      {
        "names": [
          "Xiao Qiao",
          "Cai Yan"
        ],
        "matchRate": "3.08%"
      },
      {
        "names": [
          "Daji",
          "Hou Yi"
        ],
        "matchRate": "2.95%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Axe of Torment",
        "Pure Sky",
        "Frostscar's Embrace",
        "Succubus Cloak",
        "Starbreaker"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Stun"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Charger"
    ]
  },
  {
    "id": "ukyo-tachibana",
    "name": "Ukyo Tachibana",
    "role": "Jungle",
    "avatarUrl": "/heroes/ukyo-tachibana.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "arthur",
        "name": "Arthur",
        "reason": "Arthur's silence cuts Ukyo's combo short, and the quick-draw slash's slow only adds to his passive healing."
      },
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin can chain his leaps back to back, so any distance Ukyo opens up closes again at once."
      }
    ],
    "synergies": [
      {
        "id": "lian-po",
        "name": "Lian Po",
        "reason": "Lian Po's Tremor Smash launches enemies and holds them still, so Ukyo's tip-range damage finally connects."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's Unbridled Outburst stuns enemies at the end of its wind, so Ukyo lands every Snowfall Slash and heals."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Liu Shan"
        ],
        "matchRate": "1.16%"
      },
      {
        "names": [
          "Liu Shan",
          "Milady"
        ],
        "matchRate": "3.32%"
      },
      {
        "names": [
          "Liu Shan",
          "Erin"
        ],
        "matchRate": "2.89%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Axe of Torment",
        "Pure Sky",
        "Ominous Premonition",
        "Starbreaker"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Assassin"
    ]
  },
  {
    "id": "umbrosa",
    "name": "Umbrosa",
    "role": "Clash",
    "avatarUrl": "/heroes/umbrosa.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "di-renjie",
        "name": "Di Renjie",
        "reason": "Di Renjie's Legal Immunity blocks damage and crowd control, so Umbrosa's dive lands on nothing."
      },
      {
        "id": "daji",
        "name": "Daji",
        "reason": "Daji's Strike a Pose is a targeted stun that cuts Umbrosa's dance short before it finishes."
      }
    ],
    "synergies": [
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria attaches and shields Umbrosa, letting her finish the full dance deep in the enemy line."
      },
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's ultimate grants crowd control immunity and a shield, so Umbrosa keeps dancing instead of getting locked down."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dolia"
        ],
        "matchRate": "1.40%"
      },
      {
        "names": [
          "Dolia",
          "Shangguan"
        ],
        "matchRate": "4.35%"
      },
      {
        "names": [
          "Dolia",
          "Ao'yin"
        ],
        "matchRate": "4.01%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Fortitude",
        "Axe of Torment",
        "Spikemail",
        "Deepfrost Siege",
        "Overlord's Might",
        "Starbreaker"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Purify"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Charger"
    ]
  },
  {
    "id": "wang-wei",
    "name": "Wang Wei",
    "role": "Mid",
    "avatarUrl": "/heroes/wang-wei.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's Butterfly Effect grants teammates crowd control immunity, so Wang Wei's Endless River cannot pull them into the mountain."
      },
      {
        "id": "sima-yi",
        "name": "Sima Yi",
        "reason": "Sima Yi heals from magical damage taken, and every Wang Wei skill is magical, so the poke struggles to finish him."
      }
    ],
    "synergies": [
      {
        "id": "wang-zhaojun",
        "name": "Wang Zhaojun",
        "reason": "Wang Zhaojun's Frigid Prison freezes enemies in place, so they cannot dodge the Misty Mountain Wang Wei conjures at the target location."
      },
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi's The Animist pulls enemies to him and stuns them, so Wang Wei's Misty Mountain hits the whole group at once."
      }
    ],
    "tags": [
      "Mage",
      "Mid",
      "Formation"
    ]
  },
  {
    "id": "wang-zhaojun",
    "name": "Wang Zhaojun",
    "role": "Mid",
    "avatarUrl": "/heroes/wang-zhaojun.webp",
    "counters": [
      "flowborn-roamer"
    ],
    "counteredBy": [
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui keeps dashing to new ground, so Frigid Prison's delayed detonation catches nothing."
      },
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi's passive cycles into crowd control immunity, so Frigid Prison's freeze slides off him while that immunity is up."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's stun pins the target down, so Frigid Prison's delayed freeze lands every time."
      },
      {
        "id": "zhou-yu",
        "name": "Zhou Yu",
        "reason": "Zhou Yu's fire domain only burns those who stay in it, and Frigid Prison's freeze holds them there."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Ming"
        ],
        "matchRate": "2.23%"
      },
      {
        "names": [
          "Jing"
        ],
        "matchRate": "1.9%"
      },
      {
        "names": [
          "Pei"
        ],
        "matchRate": "1.70%"
      },
      {
        "names": [
          "Marco Polo",
          "Yaria"
        ],
        "matchRate": "18.83%"
      },
      {
        "names": [
          "Arli",
          "Yaria"
        ],
        "matchRate": "12.53%"
      },
      {
        "names": [
          "Guiguzi",
          "Florentino"
        ],
        "matchRate": "6.70%"
      },
      {
        "names": [
          "Ming",
          "Luara"
        ],
        "matchRate": "3.85%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Deftness",
        "Venomous Staff",
        "Frozen Breath",
        "Mask of Agony",
        "Twilight Stream",
        "Splendor"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Control"
    ]
  },
  {
    "id": "wukong",
    "name": "Wukong",
    "role": "Jungle",
    "avatarUrl": "/heroes/wukong.webp",
    "counters": [
      "kongming",
      "nakoruru",
      "sakeer"
    ],
    "counteredBy": [
      {
        "id": "agudo",
        "name": "Agudo",
        "reason": "Agudo rolls straight through hard crowd control, so Wukong's Golden Cudgel launch simply vanishes."
      },
      {
        "id": "gao",
        "name": "Gao",
        "reason": "Gao chips away nonstop while String Bender heals him on every hit, so a diving Wukong wears out first."
      }
    ],
    "synergies": [
      {
        "id": "kongming",
        "name": "Kongming",
        "reason": "Kongming's Winning Strategy hits harder the more Health the target has lost, so Wukong's opening damage feeds it."
      },
      {
        "id": "heino",
        "name": "Heino",
        "reason": "Heino's melee Scepter of Fate slows enemies, giving Wukong a clean run straight at them."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Shouyue"
        ],
        "matchRate": "3.04%"
      },
      {
        "names": [
          "Gan & Mo"
        ],
        "matchRate": "2.52%"
      },
      {
        "names": [
          "Kui"
        ],
        "matchRate": "2.35%"
      },
      {
        "names": [
          "Donghuang"
        ],
        "matchRate": "1.93%"
      },
      {
        "names": [
          "Mozi",
          "Shouyue"
        ],
        "matchRate": "14.12%"
      },
      {
        "names": [
          "Gan & Mo",
          "Shouyue"
        ],
        "matchRate": "8.19%"
      },
      {
        "names": [
          "Diaochan",
          "Shouyue"
        ],
        "matchRate": "7.08%"
      },
      {
        "names": [
          "Daji",
          "Donghuang"
        ],
        "matchRate": "5.2%"
      },
      {
        "names": [
          "Kui",
          "Li Xin"
        ],
        "matchRate": "4.33%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Fortitude",
        "Eternity Blade",
        "Shadow Ripper",
        "Axe of Torment",
        "Bloodweeper"
      ],
      "arcana": [
        "Unparalleled",
        "Reaver",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Burst"
    ]
  },
  {
    "id": "wuyan",
    "name": "Wuyan",
    "role": "Clash",
    "avatarUrl": "/heroes/wuyan.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo blinks away on a short cooldown, so Wuyan's dash can never stay on him."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's cannon stuns and leaves a burning crater, so Wuyan is chipped down the entire walk in."
      }
    ],
    "synergies": [
      {
        "id": "daji",
        "name": "Daji",
        "reason": "Daji's stun pins a target in place, letting Wuyan land her hammer's center, where it hits hardest."
      },
      {
        "id": "luban-no-7",
        "name": "Luban No.7",
        "reason": "Luban No.7's slows leave enemies struggling to escape the area Wuyan covers while spinning her hammer."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Daji"
        ],
        "matchRate": "1.78%"
      },
      {
        "names": [
          "Daji",
          "Kui"
        ],
        "matchRate": "3.93%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Axe of Torment",
        "Cuirass of Savagery",
        "Pure Sky",
        "Overlord's Might",
        "Longnight Guardian"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Heavy"
    ]
  },
  {
    "id": "xiang-yu",
    "name": "Xiang Yu",
    "role": "Clash",
    "avatarUrl": "/heroes/xiang-yu.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "lam",
        "name": "Lam",
        "reason": "Lam brands low-Health enemies and piles on true damage, turning the very window Xiang Yu fights in into Lam's hunting ground."
      },
      {
        "id": "di-renjie",
        "name": "Di Renjie",
        "reason": "Di Renjie speeds up with every Basic Attack and shakes off crowd control with Legal Immunity, so Xiang Yu never catches him."
      }
    ],
    "synergies": [
      {
        "id": "luban-no-7",
        "name": "Luban No.7",
        "reason": "Luban No.7 has no escape, so the longer Xiang Yu pins enemies in place, the more of his scattershot lands."
      },
      {
        "id": "nakoruru",
        "name": "Nakoruru",
        "reason": "Nakoruru's dive weakens enemy damage just as No Retreat does, hitting the dive target as well as the front line."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Consort Yu"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Consort Yu",
          "Milady"
        ],
        "matchRate": "3.07%"
      },
      {
        "names": [
          "Han Xin",
          "Consort Yu"
        ],
        "matchRate": "2.89%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Resistance",
        "Axe of Torment",
        "Frostscar's Embrace",
        "Frigid Charge",
        "Overlord's Might",
        "Succubus Cloak"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Guardian",
      "Tank"
    ]
  },
  {
    "id": "xiao-qiao",
    "name": "Xiao Qiao",
    "role": "Mid",
    "avatarUrl": "/heroes/xiao-qiao.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin is immune to crowd control during his ultimate, so Honeysweet Breeze's knockup does nothing."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi stacks a shield with every skill he casts, so Blossoming Fan's first hit is absorbed outright."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi drags enemies into a clump and stuns them, so Xiao Qiao's meteors keep raining on stationary targets."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang suppresses a hero in place, so Xiao Qiao's Blossoming Fan lands its full first hit."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Musashi"
        ],
        "matchRate": "1.65%"
      },
      {
        "names": [
          "Lam"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Sun Ce"
        ],
        "matchRate": "1.42%"
      },
      {
        "names": [
          "Nakoruru"
        ],
        "matchRate": "1.39%"
      },
      {
        "names": [
          "Zilong",
          "Cai Yan"
        ],
        "matchRate": "4.33%"
      },
      {
        "names": [
          "Cai Yan",
          "Sun Ce"
        ],
        "matchRate": "3.08%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Scepter of Reverberation",
        "Insatiable Tome",
        "Savant's Wrath",
        "Void Staff",
        "Sage's Tome"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Artillery"
    ]
  },
  {
    "id": "xuance",
    "name": "Xuance",
    "role": "Jungle",
    "avatarUrl": "/heroes/xuance.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "liu-bang",
        "name": "Liu Bang",
        "reason": "Liu Bang teleports onto an ally and lands with a stun, cutting in before Xuance can finish the kill."
      },
      {
        "id": "sima-yi",
        "name": "Sima Yi",
        "reason": "Sima Yi gains vision of nearby enemies who cast skills, so Xuance is spotted the moment he starts charging."
      }
    ],
    "synergies": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression freezes a target, giving Xuance time to charge Nightmare Hooks and land it cleanly."
      },
      {
        "id": "zhuangzi",
        "name": "Zhuangzi",
        "reason": "Zhuangzi grants crowd control immunity, so Xuance can dive the enemy line and shrug off the stuns that follow."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "1.90%"
      },
      {
        "names": [
          "Ming"
        ],
        "matchRate": "1.59%"
      },
      {
        "names": [
          "Arli",
          "Yaria"
        ],
        "matchRate": "6.72%"
      },
      {
        "names": [
          "Lady Sun",
          "Ming"
        ],
        "matchRate": "6.67%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Dexterity",
        "Axe of Torment",
        "Bloodweeper",
        "Master Sword",
        "Sage's Sanctuary"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Assassin",
      "Jungle",
      "Roving"
    ]
  },
  {
    "id": "yang-jian",
    "name": "Yang Jian",
    "role": "Clash",
    "avatarUrl": "/heroes/yang-jian.webp",
    "counters": [
      "dr-bian"
    ],
    "counteredBy": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan's blink keeps shortening its own cooldown, so chasing her down seldom works for Yang Jian."
      },
      {
        "id": "luna",
        "name": "Luna",
        "reason": "Luna's dash resets its cooldown on every marked target, so she keeps diving Yang Jian without pause."
      }
    ],
    "synergies": [
      {
        "id": "erin",
        "name": "Erin",
        "reason": "Erin builds damage the more Basic Attacks she lands, and Yang Jian holding the front line buys her that time."
      },
      {
        "id": "huang-zhong",
        "name": "Huang Zhong",
        "reason": "Huang Zhong cannot move in Turret Mode, so Yang Jian stopping divers in front keeps him firing."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Daji"
        ],
        "matchRate": "1.38%"
      },
      {
        "names": [
          "Dolia",
          "Haya"
        ],
        "matchRate": "7.72%"
      },
      {
        "names": [
          "Daji",
          "Kui"
        ],
        "matchRate": "3.56%"
      },
      {
        "names": [
          "Zilong",
          "Daji"
        ],
        "matchRate": "2.96%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Axe of Torment",
        "Dragon's Rage",
        "Eye of the Phoenix",
        "Blazing Cape"
      ],
      "arcana": [
        "Mutation",
        "Red Moon",
        "Hunt",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Clash",
      "Assassin"
    ]
  },
  {
    "id": "yango",
    "name": "Yango",
    "role": "Clash",
    "avatarUrl": "/heroes/yango.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan's area damage never stops, so Yango's fragile puppet dies and leaves him stunned."
      },
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong stuns and heals off his marked target, undoing whatever Health Yango chips away."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's wind knocks enemies back and pins them in place, so Yango's strings and paper birds all connect."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Zhang Fei"
        ],
        "matchRate": "2.05%"
      },
      {
        "names": [
          "Sakeer"
        ],
        "matchRate": "1.88%"
      },
      {
        "names": [
          "Zhang Fei",
          "Kongming"
        ],
        "matchRate": "3.79%"
      },
      {
        "names": [
          "Pei",
          "Dyadia"
        ],
        "matchRate": "3.57%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of Fortitude",
        "Axe of Torment",
        "Deepfrost Siege",
        "Overlord's Might",
        "Starbreaker",
        "Pure Sky"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Assassin",
      "Clash",
      "Roving"
    ]
  },
  {
    "id": "yao",
    "name": "Yao",
    "role": "Jungle",
    "avatarUrl": "/heroes/yao.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang's suppression locks out Return to Dust, so the Star Reduction Yao has banked eats straight through his Health."
      },
      {
        "id": "donghuang",
        "name": "Donghuang",
        "reason": "Donghuang's suppression shuts down Yao's casts, which also cuts off the passive healing those skills would bring."
      }
    ],
    "synergies": [
      {
        "id": "guiguzi",
        "name": "Guiguzi",
        "reason": "Guiguzi pulls enemies together and stuns them, so Yao's Starlight Slice catches the whole group at once."
      },
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's speed boost lets Yao close the gap without spending Star Rush, keeping that dash in reserve."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Da Qiao"
        ],
        "matchRate": "1.37%"
      },
      {
        "names": [
          "Da Qiao",
          "Arli"
        ],
        "matchRate": "3.83%"
      },
      {
        "names": [
          "Di Renjie",
          "Da Qiao"
        ],
        "matchRate": "3.39%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Tranquility",
        "Axe of Torment",
        "Cuirass of Savagery",
        "Overlord's Might",
        "Master Sword"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Assassin"
    ]
  },
  {
    "id": "yaria",
    "name": "Yaria",
    "role": "Roam",
    "avatarUrl": "/heroes/yaria.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "garo",
        "name": "Garo",
        "reason": "Garo's attacks deal bonus damage to shields, so the shield Yaria puts on an ally drains fast."
      },
      {
        "id": "gan-mo",
        "name": "Gan & Mo",
        "reason": "Gan & Mo double every sword volley onto one spot, so the ally Yaria rides takes it all alone."
      }
    ],
    "synergies": [
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo's Fevered Barrage carries an attached Yaria into the enemy team, putting her Skill 2 in range."
      },
      {
        "id": "cirrus",
        "name": "Cirrus",
        "reason": "Cirrus ignores terrain once airborne, so an attached Yaria rides over walls straight into ganks."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Marco Polo"
        ],
        "matchRate": "25.01%"
      },
      {
        "names": [
          "Marco Polo"
        ],
        "matchRate": "19.67%"
      },
      {
        "names": [
          "Arli"
        ],
        "matchRate": "9.13%"
      },
      {
        "names": [
          "Butterfly"
        ],
        "matchRate": "3.74%"
      },
      {
        "names": [
          "Lady Zhen"
        ],
        "matchRate": "2.76%"
      },
      {
        "names": [
          "Lady Zhen",
          "Marco Polo"
        ],
        "matchRate": "29.82%"
      },
      {
        "names": [
          "Marco Polo",
          "Luna"
        ],
        "matchRate": "29.62%"
      },
      {
        "names": [
          "Marco Polo",
          "Lam"
        ],
        "matchRate": "28.87%"
      },
      {
        "names": [
          "Marco Polo",
          "Diaochan"
        ],
        "matchRate": "19.02%"
      },
      {
        "names": [
          "Marco Polo",
          "Wang Zhaojun"
        ],
        "matchRate": "18.83%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Starspring",
        "Boots of Tranquility",
        "Dawnlight",
        "Frigid Charge",
        "Venomous Staff",
        "Frozen Breath"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Support",
      "Roam",
      "Buff"
    ]
  },
  {
    "id": "ying",
    "name": "Ying",
    "role": "Jungle",
    "avatarUrl": "/heroes/ying.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "di-renjie",
        "name": "Di Renjie",
        "reason": "Di Renjie's Legal Immunity blocks damage and crowd control alike, so Ying's engage lands on nothing."
      },
      {
        "id": "lady-sun",
        "name": "Lady Sun",
        "reason": "Lady Sun keeps shaving time off Rolling Raid with every Basic Attack, so Ying struggles to close the gap."
      }
    ],
    "synergies": [
      {
        "id": "dyadia",
        "name": "Dyadia",
        "reason": "Dyadia's immobilize pins enemies in place, so Ying's Cloudchaser dash lands cleanly every time."
      },
      {
        "id": "yaria",
        "name": "Yaria",
        "reason": "Yaria attaches to Ying and shields her from true damage, letting her stay in the fight."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Cai Yan"
        ],
        "matchRate": "1.62%"
      },
      {
        "names": [
          "Yaria"
        ],
        "matchRate": "1.60%"
      },
      {
        "names": [
          "Nezha"
        ],
        "matchRate": "1.53%"
      },
      {
        "names": [
          "Marco Polo",
          "Yaria"
        ],
        "matchRate": "18.69%"
      },
      {
        "names": [
          "Sun Bin",
          "Dr Bian"
        ],
        "matchRate": "4.06%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Dragon's Rage",
        "Axe of Torment",
        "Frostscar's Embrace",
        "Overlord's Might"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Assassin"
    ]
  },
  {
    "id": "yixing",
    "name": "Yixing",
    "role": "Mid",
    "avatarUrl": "/heroes/yixing.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin gains crowd control immunity during The Unrivaled Spear, so Yixing's launch simply does not land."
      },
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan's blink shortens its own cooldown, so she slips away from the stones Yixing lays down."
      }
    ],
    "synergies": [
      {
        "id": "liu-shan",
        "name": "Liu Shan",
        "reason": "Liu Shan can spin and stun at once, holding enemies still long enough for Yixing's board to close."
      },
      {
        "id": "nakoruru",
        "name": "Nakoruru",
        "reason": "Nakoruru flies in over terrain and drops her charge on whoever Yixing's board has locked in."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Lu Bu"
        ],
        "matchRate": "2.3%"
      },
      {
        "names": [
          "Dyadia"
        ],
        "matchRate": "1.94%"
      },
      {
        "names": [
          "Lu Bu",
          "Dolia"
        ],
        "matchRate": "11.5%"
      },
      {
        "names": [
          "Arli",
          "Yaria"
        ],
        "matchRate": "7.01%"
      },
      {
        "names": [
          "Feyd",
          "Dyadia"
        ],
        "matchRate": "3.60%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Venomous Staff",
        "Frozen Breath",
        "Insatiable Tome",
        "Void Staff",
        "Savant's Wrath"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Tribute",
        "Compassion"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Formation"
    ]
  },
  {
    "id": "yuhuan",
    "name": "Yuhuan",
    "role": "Mid",
    "avatarUrl": "/heroes/yuhuan.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin has crowd control immunity during The Unrivaled Spear, so Yuhuan's stun cannot stop him."
      },
      {
        "id": "shouyue",
        "name": "Shouyue",
        "reason": "Shouyue's Wild Wind carves out a share of max Health, so stacking Health does nothing to soften it."
      }
    ],
    "synergies": [
      {
        "id": "bai-qi",
        "name": "Bai Qi",
        "reason": "Bai Qi's Shadow Power amplifies healing, so Melody of Peace restores far more Health on him."
      },
      {
        "id": "sun-bin",
        "name": "Sun Bin",
        "reason": "Sun Bin's Time Lapse field detonates on a delay, and Tragic Beauty's slow holds enemies inside it until then."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Bai Qi"
        ],
        "matchRate": "2.13%"
      },
      {
        "names": [
          "Ao'yin"
        ],
        "matchRate": "1.60%"
      },
      {
        "names": [
          "Bai Qi",
          "Pei"
        ],
        "matchRate": "4.09%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Radiance",
        "Boots of the Arcane",
        "Frostscar's Embrace",
        "Eye of the Phoenix",
        "Breakthrough Robe",
        "Frozen Breath"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Formation"
    ]
  },
  {
    "id": "zhang-fei",
    "name": "Zhang Fei",
    "role": "Roam",
    "avatarUrl": "/heroes/zhang-fei.webp",
    "counters": [
      "da-qiao",
      "heino",
      "li-xin",
      "liang",
      "lu-bu",
      "marco-polo",
      "nakoruru",
      "sima-yi"
    ],
    "counteredBy": [
      {
        "id": "diaochan",
        "name": "Diaochan",
        "reason": "Diaochan cuts her blink's cooldown on every hit, so she slips out of Zhang Fei's knockback and gust alike."
      },
      {
        "id": "lu-bu",
        "name": "Lu Bu",
        "reason": "Lu Bu is immune to crowd control during his dive, so Zhang Fei's knockback cannot protect the ally he is covering."
      }
    ],
    "synergies": [
      {
        "id": "garo",
        "name": "Garo",
        "reason": "Garo has no escape skill, so Zhang Fei can stand in front of her and knock divers away."
      },
      {
        "id": "lady-sun",
        "name": "Lady Sun",
        "reason": "Lady Sun rolls right up to enemies, so Zhang Fei can leap to that same spot and shield her."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Flowborn (Marksman)"
        ],
        "matchRate": "2.59%"
      },
      {
        "names": [
          "Huang Zhong"
        ],
        "matchRate": "2.53%"
      },
      {
        "names": [
          "Chicha"
        ],
        "matchRate": "2.35%"
      },
      {
        "names": [
          "Yango"
        ],
        "matchRate": "2.05%"
      },
      {
        "names": [
          "Di Renjie"
        ],
        "matchRate": "1.99%"
      },
      {
        "names": [
          "Feyd",
          "Flowborn (Marksman)"
        ],
        "matchRate": "6.49%"
      },
      {
        "names": [
          "Kongming",
          "Flowborn (Marksman)"
        ],
        "matchRate": "6.20%"
      },
      {
        "names": [
          "Chicha",
          "Shi"
        ],
        "matchRate": "6.18%"
      },
      {
        "names": [
          "Di Renjie",
          "Jing"
        ],
        "matchRate": "5.89%"
      },
      {
        "names": [
          "Shi",
          "Devara"
        ],
        "matchRate": "5.33%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Redemption",
        "Boots of Tranquility",
        "Blazing Cape",
        "Succubus Cloak",
        "Ominous Premonition",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Tank",
      "Roam",
      "Defensive",
      "Support"
    ]
  },
  {
    "id": "zhou-yu",
    "name": "Zhou Yu",
    "role": "Mid",
    "avatarUrl": "/heroes/zhou-yu.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "han-xin",
        "name": "Han Xin",
        "reason": "Han Xin shrugs off crowd control during The Unrivaled Spear, so Zhou Yu's stun cannot interrupt the flurry."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi stacks a fresh shield with every skill, absorbing the small ticks Zhou Yu's fire domains chip away."
      }
    ],
    "synergies": [
      {
        "id": "kui",
        "name": "Kui",
        "reason": "Kui drags enemies to him and stuns them nonstop, holding them inside Zhou Yu's fire domain the whole time."
      },
      {
        "id": "liu-bang",
        "name": "Liu Bang",
        "reason": "Liu Bang teleports in with Staggering Charge fully charged, and its stun pins enemies right on top of Zhou Yu's flames."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Agudo"
        ],
        "matchRate": "3.53%"
      },
      {
        "names": [
          "Gao Changgong"
        ],
        "matchRate": "1.64%"
      },
      {
        "names": [
          "Shouyue"
        ],
        "matchRate": "1.19%"
      },
      {
        "names": [
          "Guan Yu",
          "Agudo"
        ],
        "matchRate": "4.25%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Venomous Staff",
        "Mask of Agony",
        "Frozen Breath",
        "Twilight Stream",
        "Sage's Tome"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Formation"
    ]
  },
  {
    "id": "zhuangzi",
    "name": "Zhuangzi",
    "role": "Roam",
    "avatarUrl": "/heroes/zhuangzi.webp",
    "counters": [
      "dharma",
      "dunshan",
      "lorion",
      "menki",
      "shi",
      "sun-ce",
      "wang-wei",
      "wang-zhaojun"
    ],
    "counteredBy": [
      {
        "id": "pei",
        "name": "Pei",
        "reason": "Pei's Guarding Stance burns everyone around him, so Zhuangzi cannot stay close enough to protect his carry."
      }
    ],
    "synergies": [
      {
        "id": "lady-sun",
        "name": "Lady Sun",
        "reason": "Lady Sun only speeds up when she rolls beside an enemy, while Zhuangzi's marks keep her quick everywhere else."
      },
      {
        "id": "marco-polo",
        "name": "Marco Polo",
        "reason": "Marco Polo fires from inside the enemy line, and Zhuangzi's Butterfly Effect keeps crowd control from cutting it short."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Hou Yi"
        ],
        "matchRate": "3.17%"
      },
      {
        "names": [
          "Garo"
        ],
        "matchRate": "1.99%"
      },
      {
        "names": [
          "Mai Shiranui"
        ],
        "matchRate": "1.68%"
      },
      {
        "names": [
          "Di Renjie",
          "Mai Shiranui"
        ],
        "matchRate": "5.37%"
      }
    ],
    "equipment": {
      "build": [
        "Crimson Shadow - Redemption",
        "Boots of Fortitude",
        "Blazing Cape",
        "Succubus Cloak",
        "Ominous Premonition",
        "Overlord's Platemail"
      ],
      "arcana": [
        "Fate",
        "Harmony",
        "Void"
      ],
      "spell": "Heal"
    },
    "tags": [
      "Tank",
      "Roam",
      "Defensive",
      "Support"
    ]
  },
  {
    "id": "zilong",
    "name": "Zilong",
    "role": "Jungle",
    "avatarUrl": "/heroes/zilong.webp",
    "counters": [],
    "counteredBy": [
      {
        "id": "liang",
        "name": "Liang",
        "reason": "Liang lines Zilong's dash paths with barriers, and touching any of them stuns him on the spot."
      },
      {
        "id": "mozi",
        "name": "Mozi",
        "reason": "Mozi's barrier keeps stunning whatever touches it, and Zilong has to stand in melee to finish his jabs."
      }
    ],
    "synergies": [
      {
        "id": "mai-shiranui",
        "name": "Mai Shiranui",
        "reason": "Mai Shiranui launches enemies into the air, so Zilong's Skysplitter lands on targets that cannot move."
      },
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei leaps in after Zilong's dive and shields him deep in the enemy line."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Liang"
        ],
        "matchRate": "1.75%"
      },
      {
        "names": [
          "Daji"
        ],
        "matchRate": "1.71%"
      },
      {
        "names": [
          "Hou Yi",
          "Cai Yan"
        ],
        "matchRate": "5.96%"
      },
      {
        "names": [
          "Dolia",
          "Lorion"
        ],
        "matchRate": "5.36%"
      },
      {
        "names": [
          "Lapulapu",
          "Huang Zhong"
        ],
        "matchRate": "4.46%"
      },
      {
        "names": [
          "Xiao Qiao",
          "Cai Yan"
        ],
        "matchRate": "4.33%"
      },
      {
        "names": [
          "Daji",
          "Yang Jian"
        ],
        "matchRate": "2.96%"
      }
    ],
    "equipment": {
      "build": [
        "Rapacious Bite",
        "Boots of Resistance",
        "Axe of Torment",
        "Frostscar's Embrace",
        "Blood Rage",
        "Eye of the Phoenix"
      ],
      "arcana": [
        "Mutation",
        "Stealth",
        "Eagle Eye"
      ],
      "spell": "Smite"
    },
    "tags": [
      "Fighter",
      "Jungle",
      "Assassin"
    ]
  },
  {
    "id": "ziya",
    "name": "Ziya",
    "role": "Mid",
    "avatarUrl": "/heroes/ziya.webp",
    "counters": [
      "milady"
    ],
    "counteredBy": [
      {
        "id": "gao-changgong",
        "name": "Gao Changgong",
        "reason": "Gao Changgong picks his moment from stealth, and the mark's stun leaves Ziya no way out."
      },
      {
        "id": "gan-mo",
        "name": "Gan & Mo",
        "reason": "Gan & Mo strip Ziya's Magical Defense with Guard Her Grave, then stack flying swords until he falls first."
      }
    ],
    "synergies": [
      {
        "id": "zhang-fei",
        "name": "Zhang Fei",
        "reason": "Zhang Fei's shields and slows let Ziya hold a forward spot and keep firing his skills."
      },
      {
        "id": "erin",
        "name": "Erin",
        "reason": "Erin finishes off the lowest-Health enemies, so Ziya's Sanctification turns his chip damage into EXP orbs."
      }
    ],
    "frequentlyPairedWith": [
      {
        "names": [
          "Dian Wei"
        ],
        "matchRate": "2.85%"
      },
      {
        "names": [
          "Dun"
        ],
        "matchRate": "2.68%"
      },
      {
        "names": [
          "Dian Wei",
          "Consort Yu"
        ],
        "matchRate": "4.63%"
      }
    ],
    "equipment": {
      "build": [
        "Boots of the Arcane",
        "Frozen Breath",
        "Venomous Staff",
        "Mask of Agony",
        "Void Staff",
        "Twilight Stream"
      ],
      "arcana": [
        "Nightmare",
        "Hunt",
        "Mind's Eye"
      ],
      "spell": "Flash"
    },
    "tags": [
      "Mage",
      "Mid",
      "Artillery"
    ]
  }
];
