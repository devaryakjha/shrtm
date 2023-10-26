import { COLLECTION_NAMES } from "./create-link";
import connectToDatabase from "./mongodb";

export default async function getLinkData(
  alias: string
): Promise<string | null> {
  const database = await connectToDatabase();
  const urlInfoCollection = database.collection(COLLECTION_NAMES["url-info"]);
  const linkData = await urlInfoCollection.findOne({ alias });
  if (!linkData) {
    return null;
  }
  return linkData.link;
}
