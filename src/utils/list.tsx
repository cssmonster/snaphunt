import { PageItem } from "type";

export const _getPageList = (total: number) => {
  const result: PageItem[] = [];
  for (let i = 0; i < total; i++) {
    result.push({
      id: i,
      title: "" + (i + 1),
    });
  }
  return result;
};
