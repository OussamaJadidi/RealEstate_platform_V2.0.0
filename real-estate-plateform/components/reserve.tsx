// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id       String  @id @default(uuid())
  name     String?
  email    String  @unique
  password String
  image    String?
  phone    String?

  ownedPropertiesToSell PropertyToSell[] @relation("ownedPropertiesToSell")
  ownedPropertiesToRent PropertyToRent[] @relation("ownedPropertiesToRent")

  bookedVisits          Json?
  FavoritesPropertiesId Json?
}

model PropertyToSell {
  id          String   @id @default(uuid())
  title       String
  description String
  price       Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  country String
  city    String
  address String
  latAndLng Json

  propertyType String
  bedsNumber   String
  bathsNumber  String
  furniture    String
  surface      Int
  Hashtags     Json

  globalLikesNumber Int? @default(0)
  ViewByNumber      Int? @default(0)
  clickedBy         Int? @default(0)
  User              User @relation("ownedPropertiesToSell", fields: [ownerId], references: [id])

  ownerId       String
  ownerEmail    String
  ownerPhone    String
  ownerUsedName String

  ownerFacebookContact  String?
  ownerInstagramContact String?
  ownerTwitterContact   String?

  images Json

  isBoosted Boolean @default(false)
  BostedTill DateTime?
  @@unique(fields: [address, ownerEmail])
}

model PropertyToRent {
  id           String   @id @default(uuid())
  title        String
  description  String
  price        Int
  rentalPeriod String
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  country String
  city    String
  address String
  latAndLng Json

  propertyType String
  bedsNumber   String
  bathsNumber  String
  furniture    String
  surface      Int
  Hashtags     Json

  globalLikesNumber Int? @default(0)
  ViewByNumber      Int? @default(0)
  clickedBy         Int? @default(0)
  User              User @relation("ownedPropertiesToRent", fields: [ownerId], references: [id])

  ownerId String
  ownerEmail    String
  ownerPhone    String
  ownerUsedName String

  ownerFacebookContact  String?
  ownerInstagramContact String?
  ownerTwitterContact   String?

  images Json

  isBoosted Boolean @default(false)
  BostedTill DateTime?
  @@unique(fields: [address, ownerEmail])
}
