// app/paintings/getImages.ts
import { readFileSync } from "fs";
import { join } from "path";
import { type Category } from "./data";
import type { CategoryInfo, Painting } from "./types";

const FOLDER_MAP: Record<Category, string> = {
  metanoia: "metanoia",
  tasawwuf: "tasawwuf",
  mughal: "mughal",
  mythology: "myth",
  acceptance: "acceptance",
};

export function getCategoryData(category: Category): CategoryInfo {
  const folder = join(process.cwd(), "public/images", FOLDER_MAP[category]);
  const infoFile = join(folder, "info.json");

  let metadata: CategoryInfo = {
    title: "",
    description: "",
    paintings: [],
  };

  try {
    metadata = JSON.parse(readFileSync(infoFile, "utf-8"));
  } catch {
    console.warn("Missing info.json for:", category);
  }

  // 🔥 FIXED MAPPING (now supports extraImages + video)
  metadata.paintings = metadata.paintings.map((p) => ({
    ...p,
    src: `/images/${FOLDER_MAP[category]}/${p.file}`,

    // Add full paths if they exist
    extraImages: p.extraImages
      ? p.extraImages.map(
          (img: string) => `/images/${FOLDER_MAP[category]}/${img}`
        )
      : undefined,

    video: p.video
      ? `/images/${FOLDER_MAP[category]}/${p.video}`
      : undefined,
  })) as Painting[];

  return metadata;
}

export function getPainting(
  category: Category,
  slug: string
): Painting | undefined {
  const data = getCategoryData(category);
  return data.paintings.find((p) => p.slug === slug);
}
