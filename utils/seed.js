const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { usersData, thoughtsData, reactionsData } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  try {
    //drop existing collections
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.create(usersData);

    const createdThoughts = await Thought.create(thoughtsData);

    // Seed reactions data
    for (let i = 0; i < reactionsData.length; i++) {
      const { _id: thoughtId } = createdThoughts[i % createdThoughts.length];
      const reaction = reactionsData[i];

      await Thought.findByIdAndUpdate(
        thoughtId,
        { $push: { reactions: reaction } },
        { new: true }
      );
    }

    console.log("Database seeded successfully");
    console.info("Seeding complete! 🌱");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
});
