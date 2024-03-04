let livres = [ // Tableau de livres
  {
    idlivre:1,
    titre: "Anna Karenine",
    categorie: "Roman realiste",
    nombredepages: 864,
    extrait: "chemin/vers/annakarenine.pdf",
    resume:
      "Le drame de ladultere dAnna Karenine, qui entraine des consequences tragiques dans la haute societe russe.",
    auteur: {
      nom: "Tolstoi",
      prenom: "Leon",
    },
    editeur: "The Russian Messenger",
    "anneededition": 1877,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/annakarenine.jpg",
  },
  {
    idlivre:2,
    titre: "Le Proces",
    categorie: "Roman philosophique",
    nombredepages: 304,
    extrait: "chemin/vers/leproces.pdf",
    resume:
      "Joseph K. est accuse dun crime mysterieux et se retrouve pris dans un systeme judiciaire kafkaïen.",
    auteur: {
      nom: "Kafka",
      prenom: "Franz",
    },
    editeur: "Verlag Die Schmiede",
    "anneededition": 1925,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/leproces.jpg",
  },
  {
    idlivre:3,
    titre: "Don Quichotte",
    categorie: "Roman satirique",
    nombredepages: 1056,
    extrait: "chemin/vers/donquichotte.pdf",
    resume:
      "Les aventures de Don Quichotte et de son fidele ecuyer Sancho Panza, qui parcourent lEspagne en quete didealisme.",
    auteur: {
      nom: "Cervantes",
      prenom: "Miguel de",
    },
    editeur: "Francisco de Robles",
    "anneededition": 1605,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/donquichotte.jpg",
  },
  {
    idlivre:4,
    titre: "Le Comte de Monte-Cristo",
    categorie: "Roman daventure",
    nombredepages: 1248,
    extrait: "chemin/vers/lecomtedemontecristo.pdf",
    resume:
      "Edmond Dantes cherche vengeance apres avoir ete trahi et emprisonne a tort.",
    auteur: {
      nom: "Dumas",
      prenom: "Alexandre",
    },
    editeur: "Baudry",
    "anneededition": 1844,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/lecomtedemontecristo.jpg",
  },
  {
    idlivre:5,
    titre: "Moby Dick",
    categorie: "Roman daventure",
    nombredepages: 544,
    extrait: "chemin/vers/mobydick.pdf",
    resume:
      "Lobsession du capitaine Achab pour traquer la baleine blanche, Moby Dick, a travers les oceans.",
    auteur: {
      nom: "Melville",
      prenom: "Herman",
    },
    editeur: "Harper & Brothers",
    "anneededition": 1851,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/mobydick.jpg",
  },
  {
    idlivre:6,
    titre: "Les Hauts de Hurlevent",
    categorie: "Roman gothique",
    nombredepages: 342,
    extrait: "chemin/vers/leshautsdehurlevent.pdf",
    resume:
      "La passion destructrice entre Catherine Earnshaw et Heathcliff, dans les landes sauvages du Yorkshire.",
    auteur: {
      nom: "Bronte",
      prenom: "Emily",
    },
    editeur: "Thomas Cautley Newby",
    "anneededition": 1847,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/leshautsdehurlevent.jpg",
  },
  {
    idlivre:7,
    titre: "LOdyssée",
    categorie: "Epopée, Mythe",
    nombredepages: 384,
    extrait: "chemin/vers/lodyssee.pdf",
    resume:
      "Les aventures dUlysse, roi dIthaque, lors de son long voyage de retour apres la guerre de Troie.",
    auteur: {
      nom: "Homere",
      prenom: "",
    },
    editeur: "Inconnu",
    "anneededition": -700,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/lodyssee.jpg",
  },
  {
    idlivre:8,
    titre: "Les Trois Mousquetaires",
    categorie: "Roman daventure",
    nombredepages: 640,
    extrait: "chemin/vers/lestroismousquetaires.pdf",
    resume:
      "Les aventures de dArtagnan et de ses amis, les mousquetaires du roi, dans la France du XVIIe siecle.",
    auteur: {
      nom: "Dumas",
      prenom: "Alexandre",
    },
    editeur: "Baudry",
    "anneededition": 1844,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/lestroismousquetaires.jpg",
  },
  {
    idlivre:9,
    titre: "Frankenstein",
    categorie: "Roman gothique, Science-fiction",
    nombredepages: 280,
    extrait: "chemin/vers/frankenstein.pdf",
    resume:
      "Le scientifique Victor Frankenstein cree une creature monstrueuse qui echappe a son controle.",
    auteur: {
      nom: "Shelley",
      prenom: "Mary",
    },
    editeur: "Lackington, Hughes, Harding, Mavor & Jones",
    "anneededition": 1818,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/frankenstein.jpg",
  },
  {
    idlivre:10,
    titre: "Les Aventures de Tom Sawyer",
    categorie: "Roman dapprentissage",
    nombredepages: 272,
    extrait: "chemin/vers/lesaventuresdetomsawyer.pdf",
    resume:
      "Les aventures de Tom Sawyer, un garcon espiegle, dans le Mississippi du XIXe siecle.",
    auteur: {
      nom: "Twain",
      prenom: "Mark",
    },
    editeur: "Chatto & Windus",
    "anneededition": 1876,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/lesaventuresdetomsawyer.jpg",
  },
  {
    idlivre:11,
    titre: "Les Quatre Filles du docteur March",
    categorie: "Roman de formation",
    nombredepages: 528,
    extrait: "chemin/vers/lesquatrefillesdudocteurmarch.pdf",
    resume:
      "Les aventures et les epreuves des quatre soeurs March pendant la guerre de Secession.",
    auteur: {
      nom: "Alcott",
      prenom: "Louisa May",
    },
    editeur: "Roberts Brothers",
    "anneededition": 1868,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/lesquatrefillesdudocteurmarch.jpg",
  },
  {
    idlivre:12,
    titre: "Dracula",
    categorie: "Roman gothique, Horreur",
    nombredepages: 418,
    extrait: "chemin/vers/dracula.pdf",
    resume:
      "Le compte terrifiant du vampire Dracula qui sinstalle en Angleterre pour semer le chaos.",
    auteur: {
      nom: "Stoker",
      prenom: "Bram",
    },
    editeur: "Archibald Constable and Company",
    "anneededition": 1897,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/dracula.jpg",
  },
  {
    idlivre:13,
    titre: "Vingt mille lieues sous les mers",
    categorie: "Roman daventure, Science-fiction",
    nombredepages: 624,
    extrait: "chemin/vers/vingtmillelieuessouslesmers.pdf",
    resume:
      "Les aventures du professeur Aronnax a bord du sous-marin Nautilus, commande par le mysterieux capitaine Nemo.",
    auteur: {
      nom: "Verne",
      prenom: "Jules",
    },
    editeur: "Pierre-Jules Hetzel",
    "anneededition": 1870,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/vingtmillelieuessouslesmers.jpg",
  },
  {
    idlivre:14,
    titre: "Orgueil et Prejuges",
    categorie: "Roman romantique",
    nombredepages: 435,
    extrait: "chemin/vers/orgueiletprejuges.pdf",
    resume:
      "Lhistoire damour entre Elizabeth Bennet et Mr. Darcy, confrontes a lorgueil et aux prejuges sociaux de lAngleterre du XIXe siecle.",
    auteur: {
      nom: "Austen",
      prenom: "Jane",
    },
    editeur: "T. Egerton, Whitehall",
    "anneededition": 1813,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/orgueiletprejuges.jpg",
  },
  {
    idlivre:15,
    titre: "Crime et Chatiment",
    categorie: "Roman psychologique",
    nombredepages: 551,
    extrait: "chemin/vers/crimeetchatiment.pdf",
    resume:
      "Les tourments mentaux de Raskolnikov apres avoir commis un meurtre, et sa quete de redemption.",
    auteur: {
      nom: "Dostoievski",
      prenom: "Fiodor",
    },
    editeur: "The Russian Messenger",
    "anneededition": 1866,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/crimeetchatiment.jpg",
  },
  {
    idlivre:16,
    titre: "Les Miserables",
    categorie: "Roman historique",
    nombredepages: 1900,
    extrait: "chemin/vers/lesmiserables.pdf",
    resume:
      "Lhistoire de Jean Valjean, un ancien bagnard, et de ses rencontres avec dautres personnages dans la France du XIXe siecle.",
    auteur: {
      nom: "Hugo",
      prenom: "Victor",
    },
    editeur: "A. Lacroix, Verboeckhoven & Cie",
    "anneededition": 1862,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/lesmiserables.jpg",
  },
  {
    idlivre:17,
    titre: "Les Voyages de Gulliver",
    categorie: "Roman daventure, Satire",
    nombredepages: 372,
    extrait: "chemin/vers/lesvoyagesdegulliver.pdf",
    resume:
      "Les aventures de Lemuel Gulliver dans des terres etranges, peuplees de creatures fantastiques.",
    auteur: {
      nom: "Swift",
      prenom: "Jonathan",
    },
    editeur: "Benjamin Motte",
    "anneededition": 1726,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/lesvoyagesdegulliver.jpg",
  },
  {
    idlivre:18,
    titre: "La Lettre ecarlate",
    categorie: "Roman historique",
    nombredepages: 238,
    extrait: "chemin/vers/lalettreecarlate.pdf",
    resume:
      "Lhistoire dHester Prynne, une femme condamnee pour adultere dans la Puritanisme de la Nouvelle-Angleterre.",
    auteur: {
      nom: "Hawthorne",
      prenom: "Nathaniel",
    },
    editeur: "Ticknor, Reed & Fields",
    "anneededition": 1850,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/lalettreecarlate.jpg",
  },
  {
    idlivre:19,
    titre: "Les Liaisons dangereuses",
    categorie: "Roman epistolaire",
    nombredepages: 528,
    extrait: "chemin/vers/lesliaisonsdangereuses.pdf",
    resume:
      "Les intrigues et les manipulations des personnages aristocratiques dans la France pre-revolutionnaire.",
    auteur: {
      nom: "de Laclos",
      prenom: "Pierre Choderlos",
    },
    editeur: "Durand Neveu",
    "anneededition": 1782,
    "moyennedappreciation": null,
    commentaires: [],
    imagedecouverture: "chemin/vers/lesliaisonsdangereuses.jpg",
  },
];
export { livres };