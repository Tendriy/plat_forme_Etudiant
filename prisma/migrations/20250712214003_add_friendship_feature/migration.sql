-- CreateEnum
CREATE TYPE "StatutAmitie" AS ENUM ('EN_ATTENTE', 'ACCEPTEE', 'REFUSEE');

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

-- CreateIndex
CREATE UNIQUE INDEX "Amitie_demandeurId_receveurId_key" ON "Amitie"("demandeurId", "receveurId");

-- AddForeignKey
ALTER TABLE "Amitie" ADD CONSTRAINT "Amitie_demandeurId_fkey" FOREIGN KEY ("demandeurId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amitie" ADD CONSTRAINT "Amitie_receveurId_fkey" FOREIGN KEY ("receveurId") REFERENCES "Etudiant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
