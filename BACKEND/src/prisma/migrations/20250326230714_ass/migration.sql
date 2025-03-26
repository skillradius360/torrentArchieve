-- CreateTable
CREATE TABLE "games" (
    "title" TEXT NOT NULL,
    "gameId" SERIAL NOT NULL,
    "gameContent" TEXT NOT NULL,
    "gameCover" TEXT,
    "gameLinks" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "games_gameId_key" ON "games"("gameId");
