-- CreateTable
CREATE TABLE "User_data" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_data_username_key" ON "User_data"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_data_email_key" ON "User_data"("email");
