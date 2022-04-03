-- CreateTable
CREATE TABLE "EventTypes" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "length" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "EventTypes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventTypes" ADD CONSTRAINT "EventTypes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
