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

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Signaler" (
    "annonceId" INTEGER NOT NULL,
    "etudiantId" INTEGER NOT NULL,

    CONSTRAINT "Signaler_pkey" PRIMARY KEY ("annonceId","etudiantId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_email_key" ON "Etudiant"("email");

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
