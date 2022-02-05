const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const { Get, Match, Index } = faunadb.query;

export default async function getBlogpostBySlug(slug) {
  const doc = await client.query(
    Get(Match(Index('blogpost_by_slug'), slug))
  );
  return doc.data;
};
