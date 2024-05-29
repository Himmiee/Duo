import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 3,
        title: "Croatian",
        imageSrc: "/hr.svg",
      },
      {
        id: 4,
        title: "French",
        imageSrc: "/fr.svg",
      },
    ]);
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of spanish",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Nouns",
        order: 1,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        question: "What is the means man?",
        order: 1,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        correct: true,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.mp3",
        text: "el gato",
      },
      {
        id: 2,
        challengeId: 1,
        correct: false,
        imageSrc: "/woman.svg",
        audioSrc: "/es_woman.mp3",
        text: "el perro",
      },
      {
        id: 3,
        challengeId: 1,
        correct: false,
        imageSrc: "/robot.svg",
        audioSrc: "/robot.mp3",
        text: "el robot",
      },
    ]);


    console.log("Seeding finished!");
  } catch (e) {
    console.error(e);
    throw new Error("Failed to seed database");
  }
};

main();
