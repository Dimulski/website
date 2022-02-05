const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const { Paginate, Match, Index, Map, Lambda, Var } = faunadb.query;

export default async function getBlogposts() {
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
      })
    )
  );
  return docs.data;
};
