import { customAlphabet } from "nanoid";
import connectToDatabase from "@/app/utils/mongodb";
import { filterDifferentKeys } from "./filterDifferentKeys";

export enum COLLECTION_NAMES {
  "url-info" = "url-info",
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const getHash = customAlphabet(characters, 4);

export default async function createLink(props: FormData) {
  try {
    const link = props.get("url");
    const title = props.get("title");
    const description = props.get("description");
    const alias = props.get("alias");
    const database = await connectToDatabase();
    const urlInfoCollection = database.collection(COLLECTION_NAMES["url-info"]);
    const hash = alias ?? getHash();
    const linkExists = await urlInfoCollection.findOne({ link });
    const shortUrl = `${process.env.HOST}/${hash}`;
    const payload = { link, title, description, alias, hash, shortUrl };
    if (!linkExists) {
      const created = await urlInfoCollection.insertOne({
        ...payload,
        createdAt: new Date(),
      });
      return {
        shortUrl: shortUrl,
        link,
        created: created.acknowledged,
        update: false,
      };
    } else {
      const diffObj = filterDifferentKeys(payload, linkExists);
      if (Object.keys(diffObj).length) {
        const update = await urlInfoCollection.updateOne(
          {
            link,
          },
          {
            $set: {
              ...diffObj,
              updatedAt: new Date(),
            },
          }
        );
        return {
          shortUrl: linkExists?.shortUrl || shortUrl,
          link,
          created: false,
          update: update.acknowledged,
          ...diffObj,
        };
      }
    }

    return {
      shortUrl: linkExists?.shortUrl || shortUrl,
      link,
      created: !linkExists,
      update: false,
    };
  } catch (e: any) {
    return null;
  }
}
