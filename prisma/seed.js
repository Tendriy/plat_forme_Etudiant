import prisma from '../src/utils/prisma.js'

async function main() {
  await prisma.signaler.deleteMany()
  await prisma.commentaire.deleteMany()
  await prisma.recevoire.deleteMany()
  await prisma.message.deleteMany()
  await prisma.annonce.deleteMany()
  await prisma.etudiant.deleteMany()

  const etudiants = []
  const etudiantsData = [
    { nom: "Rakoto", prenom: "Jean", email: "jean.rakoto1@example.com", motDePasse: "pass123", dateInscription: new Date("2025-01-15"), image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { nom: "Randria", prenom: "Lucie", email: "lucie.randria2@example.com", motDePasse: "pass123", dateInscription: new Date("2025-01-16"), image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { nom: "Razanaka", prenom: "Eric", email: "eric.razanaka3@example.com", motDePasse: "pass123", dateInscription: new Date("2025-01-17"), image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { nom: "Andriamatoa", prenom: "Sara", email: "sara.andriamatoa4@example.com", motDePasse: "pass123", dateInscription: new Date("2025-01-18"), image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { nom: "Rakotobe", prenom: "Mickael", email: "mickael.rakotobe5@example.com", motDePasse: "pass123", dateInscription: new Date("2025-01-19"), image: "https://randomuser.me/api/portraits/men/5.jpg" }
  ]
  for (const etu of etudiantsData) {
    const created = await prisma.etudiant.create({ data: etu })
    etudiants.push(created)
  }

  const annoncesData = [
    { titre: "Offre covoiturage Antananarivo-Tamatave", contenu: "Place disponible pour ce weekend.", dateDePublication: new Date("2025-03-01"), etudiantId: etudiants[0].id, image: "https://picsum.photos/id/1011/400/200" },
    { titre: "Livre de maths à vendre", contenu: "Très bon état, 1ère année.", dateDePublication: new Date("2025-03-02"), etudiantId: etudiants[1].id, image: "https://picsum.photos/id/1012/400/200" },
    { titre: "Recherche colocataire Tanjombato", contenu: "Chambre meublée à partager.", dateDePublication: new Date("2025-03-03"), etudiantId: etudiants[2].id, image: "https://picsum.photos/id/1013/400/200" },
    { titre: "Cours soutien Python", contenu: "Débutants bienvenus, soirs et weekend.", dateDePublication: new Date("2025-03-04"), etudiantId: etudiants[3].id, image: "https://picsum.photos/id/1014/400/200" },
    { titre: "PC portable HP i5 à vendre", contenu: "8Go RAM, 256Go SSD.", dateDePublication: new Date("2025-03-05"), etudiantId: etudiants[4].id, image: "https://picsum.photos/id/1015/400/200" }
  ]
  const annonces = []
  for (const ann of annoncesData) {
    const created = await prisma.annonce.create({ data: ann })
    annonces.push(created)
  }

  const messagesData = [
    { contenu: "Salut, tu viens à la réunion ?", etudiantId: etudiants[0].id },
    { contenu: "As-tu fini le devoir ?", etudiantId: etudiants[1].id },
    { contenu: "Je cherche un binôme pour le projet React.", etudiantId: etudiants[2].id },
    { contenu: "Quelqu'un pour du soutien en maths ?", etudiantId: etudiants[3].id },
    { contenu: "Vends mes livres anciens.", etudiantId: etudiants[4].id }
  ]
  const messages = []
  for (const msg of messagesData) {
    const created = await prisma.message.create({ data: msg })
    messages.push(created)
  }

  await prisma.recevoire.create({ data: { etudiantId: etudiants[1].id, messageId: messages[0].id } })
  await prisma.recevoire.create({ data: { etudiantId: etudiants[2].id, messageId: messages[0].id } })
  await prisma.recevoire.create({ data: { etudiantId: etudiants[0].id, messageId: messages[1].id } })
  await prisma.recevoire.create({ data: { etudiantId: etudiants[2].id, messageId: messages[1].id } })
  await prisma.recevoire.create({ data: { etudiantId: etudiants[0].id, messageId: messages[2].id } })
  await prisma.recevoire.create({ data: { etudiantId: etudiants[1].id, messageId: messages[2].id } })
  await prisma.recevoire.create({ data: { etudiantId: etudiants[3].id, messageId: messages[4].id } })

  await prisma.commentaire.create({
    data: {
      date: new Date(),
      etudiantId: etudiants[1].id,
      annonceId: annonces[0].id
    }
  })
  await prisma.commentaire.create({
    data: {
      date: new Date(),
      etudiantId: etudiants[2].id,
      annonceId: annonces[1].id
    }
  })
  await prisma.commentaire.create({
    data: {
      date: new Date(),
      etudiantId: etudiants[0].id,
      annonceId: annonces[2].id
    }
  })

  await prisma.signaler.createMany({
    data: [
      { annonceId: annonces[0].id, etudiantId: etudiants[3].id },
      { annonceId: annonces[1].id, etudiantId: etudiants[4].id }
    ]
  })

  console.log("Seed terminé")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
