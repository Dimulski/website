const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const { Paginate, Match, Index } = faunadb.query;

export default async (req, res) => {
  try {
    const docs = await client.query(
      Map(
        Paginate(Match(Index("blogposts"))),
        Lambda(["title", "description", "created_at", "read_time"], {
          title: Var("title"),
          description: Var("description"),
          created_at: Var("created_at"),
          read_time: Var("read_time")
        }
      ))
    );

    res.json(docs);
  } catch (error) {
    res.status(500).json({ error });
  }
};
