const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const { Get, Match, Index } = faunadb.query;

export default async function getBlogpostBySlug(req, res) {
  const doc = await client.query(
    Get(Match(Index('blogpost_by_slug'), req.query.slug))
  );
  return doc.data;
};
