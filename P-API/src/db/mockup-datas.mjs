let books = [
    {
      "titre": "Anna Karénine",
      "catégorie": "Roman réaliste",
      "nombre_de_pages": 864,
      "extrait": "chemin/vers/anna_karenine.pdf",
      "résumé": "Le drame de l'adultère d'Anna Karénine, qui entraîne des conséquences tragiques dans la haute société russe.",
      "auteur": {
        "nom": "Tolstoï",
        "prénom": "Léon"
      },
      "éditeur": "The Russian Messenger",
      "année_d'édition": 1877,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/anna_karenine.jpg"
    },
    {
      "titre": "Le Procès",
      "catégorie": "Roman philosophique",
      "nombre_de_pages": 304,
      "extrait": "chemin/vers/le_proces.pdf",
      "résumé": "Joseph K. est accusé d'un crime mystérieux et se retrouve pris dans un système judiciaire kafkaïen.",
      "auteur": {
        "nom": "Kafka",
        "prénom": "Franz"
      },
      "éditeur": "Verlag Die Schmiede",
      "année_d'édition": 1925,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/le_proces.jpg"
    },
    {
      "titre": "Don Quichotte",
      "catégorie": "Roman satirique",
      "nombre_de_pages": 1056,
      "extrait": "chemin/vers/don_quichotte.pdf",
      "résumé": "Les aventures de Don Quichotte et de son fidèle écuyer Sancho Panza, qui parcourent l'Espagne en quête d'idéalisme.",
      "auteur": {
        "nom": "Cervantès",
        "prénom": "Miguel de"
      },
      "éditeur": "Francisco de Robles",
      "année_d'édition": 1605,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/don_quichotte.jpg"
    },
    {
      "titre": "Le Comte de Monte-Cristo",
      "catégorie": "Roman d'aventure",
      "nombre_de_pages": 1248,
      "extrait": "chemin/vers/le_comte_de_monte_cristo.pdf",
      "résumé": "Edmond Dantès cherche vengeance après avoir été trahi et emprisonné à tort.",
      "auteur": {
        "nom": "Dumas",
        "prénom": "Alexandre"
      },
      "éditeur": "Baudry",
      "année_d'édition": 1844,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/le_comte_de_monte_cristo.jpg"
    },
    {
      "titre": "Moby Dick",
      "catégorie": "Roman d'aventure",
      "nombre_de_pages": 544,
      "extrait": "chemin/vers/moby_dick.pdf",
      "résumé": "L'obsession du capitaine Achab pour traquer la baleine blanche, Moby Dick, à travers les océans.",
      "auteur": {
        "nom": "Melville",
        "prénom": "Herman"
      },
      "éditeur": "Harper & Brothers",
      "année_d'édition": 1851,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/moby_dick.jpg"
    },
    {
      "titre": "Les Hauts de Hurlevent",
      "catégorie": "Roman gothique",
      "nombre_de_pages": 342,
      "extrait": "chemin/vers/les_hauts_de_hurlevent.pdf",
      "résumé": "La passion destructrice entre Catherine Earnshaw et Heathcliff, dans les landes sauvages du Yorkshire.",
      "auteur": {
        "nom": "Brontë",
        "prénom": "Emily"
      },
      "éditeur": "Thomas Cautley Newby",
      "année_d'édition": 1847,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/les_hauts_de_hurlevent.jpg"
    },
    {
      "titre": "L'Odyssée",
      "catégorie": "Épopée, Mythe",
      "nombre_de_pages": 384,
      "extrait": "chemin/vers/l_odyssee.pdf",
      "résumé": "Les aventures d'Ulysse, roi d'Ithaque, lors de son long voyage de retour après la guerre de Troie.",
      "auteur": {
        "nom": "Homère",
        "prénom": ""
      },
      "éditeur": "Inconnu",
      "année_d'édition": -700,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/l_odyssee.jpg"
    },
    {
      "titre": "Les Trois Mousquetaires",
      "catégorie": "Roman d'aventure",
      "nombre_de_pages": 640,
      "extrait": "chemin/vers/les_trois_mousquetaires.pdf",
      "résumé": "Les aventures de d'Artagnan et de ses amis, les mousquetaires du roi, dans la France du XVIIe siècle.",
      "auteur": {
        "nom": "Dumas",
        "prénom": "Alexandre"
      },
      "éditeur": "Baudry",
      "année_d'édition": 1844,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/les_trois_mousquetaires.jpg"
    },
    {
      "titre": "Frankenstein",
      "catégorie": "Roman gothique, Science-fiction",
      "nombre_de_pages": 280,
      "extrait": "chemin/vers/frankenstein.pdf",
      "résumé": "Le scientifique Victor Frankenstein crée une créature monstrueuse qui échappe à son contrôle.",
      "auteur": {
        "nom": "Shelley",
        "prénom": "Mary"
      },
      "éditeur": "Lackington, Hughes, Harding, Mavor & Jones",
      "année_d'édition": 1818,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/frankenstein.jpg"
    },
    {
      "titre": "Les Aventures de Tom Sawyer",
      "catégorie": "Roman d'apprentissage",
      "nombre_de_pages": 272,
      "extrait": "chemin/vers/les_aventures_de_tom_sawyer.pdf",
      "résumé": "Les aventures de Tom Sawyer, un garçon espiègle, dans le Mississippi du XIXe siècle.",
      "auteur": {
        "nom": "Twain",
        "prénom": "Mark"
      },
      "éditeur": "Chatto & Windus",
      "année_d'édition": 1876,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/les_aventures_de_tom_sawyer.jpg"
    },
    {
      "titre": "Les Quatre Filles du docteur March",
      "catégorie": "Roman de formation",
      "nombre_de_pages": 528,
      "extrait": "chemin/vers/les_quatre_filles_du_docteur_march.pdf",
      "résumé": "Les aventures et les épreuves des quatre sœurs March pendant la guerre de Sécession.",
      "auteur": {
        "nom": "Alcott",
        "prénom": "Louisa May"
      },
      "éditeur": "Roberts Brothers",
      "année_d'édition": 1868,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/les_quatre_filles_du_docteur_march.jpg"
    },
    {
      "titre": "Dracula",
      "catégorie": "Roman gothique, Horreur",
      "nombre_de_pages": 418,
      "extrait": "chemin/vers/dracula.pdf",
      "résumé": "Le compte terrifiant du vampire Dracula qui s'installe en Angleterre pour semer le chaos.",
      "auteur": {
        "nom": "Stoker",
        "prénom": "Bram"
      },
      "éditeur": "Archibald Constable and Company",
      "année_d'édition": 1897,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/dracula.jpg"
    },
    {
      "titre": "Vingt mille lieues sous les mers",
      "catégorie": "Roman d'aventure, Science-fiction",
      "nombre_de_pages": 624,
      "extrait": "chemin/vers/vingt_mille_lieues_sous_les_mers.pdf",
      "résumé": "Les aventures du professeur Aronnax à bord du sous-marin Nautilus, commandé par le mystérieux capitaine Nemo.",
      "auteur": {
        "nom": "Verne",
        "prénom": "Jules"
      },
      "éditeur": "Pierre-Jules Hetzel",
      "année_d'édition": 1870,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/vingt_mille_lieues_sous_les_mers.jpg"
    },
    {
      "titre": "Orgueil et Préjugés",
      "catégorie": "Roman romantique",
      "nombre_de_pages": 435,
      "extrait": "chemin/vers/orgueil_et_prejuges.pdf",
      "résumé": "L'histoire d'amour entre Elizabeth Bennet et Mr. Darcy, confrontés à l'orgueil et aux préjugés sociaux de l'Angleterre du XIXe siècle.",
      "auteur": {
        "nom": "Austen",
        "prénom": "Jane"
      },
      "éditeur": "T. Egerton, Whitehall",
      "année_d'édition": 1813,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/orgueil_et_prejuges.jpg"
    },
    {
      "titre": "Crime et Châtiment",
      "catégorie": "Roman psychologique",
      "nombre_de_pages": 551,
      "extrait": "chemin/vers/crime_et_chatiment.pdf",
      "résumé": "Les tourments mentaux de Raskolnikov après avoir commis un meurtre, et sa quête de rédemption.",
      "auteur": {
        "nom": "Dostoïevski",
        "prénom": "Fiodor"
      },
      "éditeur": "The Russian Messenger",
      "année_d'édition": 1866,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/crime_et_chatiment.jpg"
    },
    {
      "titre": "Les Misérables",
      "catégorie": "Roman historique",
      "nombre_de_pages": 1900,
      "extrait": "chemin/vers/les_miserables.pdf",
      "résumé": "L'histoire de Jean Valjean, un ancien bagnard, et de ses rencontres avec d'autres personnages dans la France du XIXe siècle.",
      "auteur": {
        "nom": "Hugo",
        "prénom": "Victor"
      },
      "éditeur": "A. Lacroix, Verboeckhoven & Cie",
      "année_d'édition": 1862,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/les_miserables.jpg"
    },
    {
      "titre": "Les Voyages de Gulliver",
      "catégorie": "Roman d'aventure, Satire",
      "nombre_de_pages": 372,
      "extrait": "chemin/vers/les_voyages_de_gulliver.pdf",
      "résumé": "Les aventures de Lemuel Gulliver dans des terres étranges, peuplées de créatures fantastiques.",
      "auteur": {
        "nom": "Swift",
        "prénom": "Jonathan"
      },
      "éditeur": "Benjamin Motte",
      "année_d'édition": 1726,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/les_voyages_de_gulliver.jpg"
    },
    {
      "titre": "La Lettre écarlate",
      "catégorie": "Roman historique",
      "nombre_de_pages": 238,
      "extrait": "chemin/vers/la_lettre_ecarlate.pdf",
      "résumé": "L'histoire d'Hester Prynne, une femme condamnée pour adultère dans la Puritanisme de la Nouvelle-Angleterre.",
      "auteur": {
        "nom": "Hawthorne",
        "prénom": "Nathaniel"
      },
      "éditeur": "Ticknor, Reed & Fields",
      "année_d'édition": 1850,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/la_lettre_ecarlate.jpg"
    },
    {
      "titre": "Les Liaisons dangereuses",
      "catégorie": "Roman épistolaire",
      "nombre_de_pages": 528,
      "extrait": "chemin/vers/les_liaisons_dangereuses.pdf",
      "résumé": "Les intrigues et les manipulations des personnages aristocratiques dans la France pré-révolutionnaire.",
      "auteur": {
        "nom": "de Laclos",
        "prénom": "Pierre Choderlos"
      },
      "éditeur": "Durand Neveu",
      "année_d'édition": 1782,
      "moyenne_d'appréciation": null,
      "commentaires": [],
      "image_de_couverture": "chemin/vers/les_liaisons_dangereuses.jpg"
    }
  ]
  