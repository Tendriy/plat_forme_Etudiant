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

-- AddForeignKey
ALTER TABLE "EtudiantGroupe" ADD CONSTRAINT "EtudiantGroupe_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EtudiantGroupe" ADD CONSTRAINT "EtudiantGroupe_groupeId_fkey" FOREIGN KEY ("groupeId") REFERENCES "Groupe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageGroupe" ADD CONSTRAINT "MessageGroupe_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageGroupe" ADD CONSTRAINT "MessageGroupe_groupeId_fkey" FOREIGN KEY ("groupeId") REFERENCES "Groupe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
