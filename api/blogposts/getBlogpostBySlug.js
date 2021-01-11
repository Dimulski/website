const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const { Get, Match, Index } = faunadb.query;

export default async (req, res) => {
  try {
    const doc = await client.query(
      Get(Match(Index('blogpost_by_slug'), req.query.slug))
    );
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.json(doc);
  } catch (error) {
    res.status(500).json({ error });
  }
};
