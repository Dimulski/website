const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const { Paginate, Match, Index, Map, Lambda, Var } = faunadb.query;

export default async function getBlogpostsSlugs() {
  const docs = await client.query(
    Map(
      Paginate(Match(Index("blogposts_slugs")), { size: 100000 }),
      Lambda(["slug"], {
        slug: Var("slug")
      })
    )
  );
  return docs.data;
};
