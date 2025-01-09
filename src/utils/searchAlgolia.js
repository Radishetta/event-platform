import { algoliasearch } from "algoliasearch";

export const searchWithAlgolia = async (search) => {
  try {
    const client = algoliasearch(import.meta.env.VITE_APPLICATION_ID, import.meta.env.VITE_API_KEY);
    const indexName = import.meta.env.VITE_INDEX_NAME;

    const { results } = await client.search({
      requests: [
        {
          indexName,
          query: search,
        },
      ],
    });

    return results;
  } catch (error) {
    console.error("Error:", error);
  }
};
