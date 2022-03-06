const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
const { Paginate, Match, Index, Map, Lambda, Var } = faunadb.query;

export default async function getBlogposts() {
  const docs = await client.query(
    Map(
      Paginate(Match(Index("blogposts"))),
      Lambda(["state", "created_at", "title", "description", "read_time", "slug"], {
        state: Var("state"),
        created_at: Var("created_at"),
        title: Var("title"),
        description: Var("description"),
        read_time: Var("read_time"),
        slug: Var("slug")
      })
    )
  );
  return docs.data;
};
