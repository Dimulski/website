const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const { Paginate, Match, Index } = faunadb.query;

export default async (req, res) => {
  try {
    const docs = await client.query(
      Paginate(
        Match(
          Index("blogposts")
        )
      )
    );

    res.json(docs);
  } catch (error) {
    res.status(500).json({ error });
  }
};
