import { LocalImageStorage } from "./local-image-storage";
import path from "node:path";

export const listingsPath = path.join("public", "uploads", "listings")
export const listingsImageStorage = new LocalImageStorage(listingsPath);

export const avatarsPath = path.join("public", "uploads", "avatars");
export const avatarsImageStorage = new LocalImageStorage(avatarsPath);