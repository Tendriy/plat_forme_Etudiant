-- CreateEnum
CREATE TYPE "StatutAmitie" AS ENUM ('EN_ATTENTE', 'ACCEPTEE', 'REFUSEE');

-- CreateTable
CREATE TABLE "Etudiant" (
    "id" SERIAL NOT NULL,
    "prenom" VARCHAR(150),
    "nom" VARCHAR(150) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "motDePasse" VARCHAR(255) NOT NULL,
    "dateInscription" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" VARCHAR(250),
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "isAuthGoogle" BOOLEAN NOT NULL DEFAULT false,
    "otpCode" VARCHAR(6),
    "otpExpiresAt" TIMESTAMP(3),

    CONSTRAINT "Etudiant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "contenu" VARCHAR(150),
    "date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "etudiantId" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recevoire" (
    "etudiantId" INTEGER NOT NULL,
    "messageId" INTEGER NOT NULL,

    CONSTRAINT "Recevoire_pkey" PRIMARY KEY ("etudiantId","messageId")
);

-- CreateTable
CREATE TABLE "Annonce" (
    "id" SERIAL NOT NULL,
    "titre" VARCHAR(150) NOT NULL,
    "contenu" TEXT,
    "image" VARCHAR(250),
    "dateDePublication" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "etudiantId" INTEGER,

    CONSTRAINT "Annonce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commentaire" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "etudiantId" INTEGER,
    "annonceId" INTEGER,
    "contenu" TEXT,

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Signaler" (
    "annonceId" INTEGER NOT NULL,
    "etudiantId" INTEGER NOT NULL,

    CONSTRAINT "Signaler_pkey" PRIMARY KEY ("annonceId","etudiantId")
);

-- CreateTable
CREATE TABLE "Amitie" (
    "id" SERIAL NOT NULL,
    "demandeurId" INTEGER NOT NULL,
    "receveurId" INTEGER NOT NULL,
    "statut" "StatutAmitie" NOT NULL DEFAULT 'EN_ATTENTE',
    "dateDemande" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateAcceptation" TIMESTAMP(3),

    CONSTRAINT "Amitie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Groupe" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Groupe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EtudiantGroupe" (
    "etudiantId" INTEGER NOT NULL,
    "groupeId" INTEGER NOT NULL,

    CONSTRAINT "EtudiantGroupe_pkey" PRIMARY KEY ("etudiantId","groupeId")
);

-- CreateTable
CREATE TABLE "MessageGroupe" (
    "id" SERIAL NOT NULL,
    "contenu" VARCHAR(300) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "auteurId" INTEGER NOT NULL,
    "groupeId" INTEGER NOT NULL,

    CONSTRAINT "MessageGroupe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_email_key" ON "Etudiant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_nom_prenom_email_key" ON "Etudiant"("nom", "prenom", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Amitie_demandeurId_receveurId_key" ON "Amitie"("demandeurId", "receveurId");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recevoire" ADD CONSTRAINT "Recevoire_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recevoire" ADD CONSTRAINT "Recevoire_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annonce" ADD CONSTRAINT "Annonce_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signaler" ADD CONSTRAINT "Signaler_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signaler" ADD CONSTRAINT "Signaler_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amitie" ADD CONSTRAINT "Amitie_demandeurId_fkey" FOREIGN KEY ("demandeurId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amitie" ADD CONSTRAINT "Amitie_receveurId_fkey" FOREIGN KEY ("receveurId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EtudiantGroupe" ADD CONSTRAINT "EtudiantGroupe_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EtudiantGroupe" ADD CONSTRAINT "EtudiantGroupe_groupeId_fkey" FOREIGN KEY ("groupeId") REFERENCES "Groupe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageGroupe" ADD CONSTRAINT "MessageGroupe_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageGroupe" ADD CONSTRAINT "MessageGroupe_groupeId_fkey" FOREIGN KEY ("groupeId") REFERENCES "Groupe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
