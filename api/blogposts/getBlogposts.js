const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const { Paginate, Match, Index, Map, Lambda, Var } = faunadb.query;

export default async (req, res) => {
  try {
    const docs = await client.query(
      Map(
        Paginate(Match(Index("blogposts"))),
        Lambda(["title", "description", "created_at", "read_time", "slug", "state"], {
          title: Var("title"),
          description: Var("description"),
          created_at: Var("created_at"),
          read_time: Var("read_time"),
          slug: Var("slug"),
          state: Var("state")
        }
      ))
    );
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.json(docs);
  } catch (error) {
    res.status(500).json({ error });
  }
};
