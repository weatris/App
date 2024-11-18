import { commentType, Item } from './types';

export const sortItems = (sortId: string, items: Item[]): Item[] => {
  switch (sortId) {
    case 'name':
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    case 'name_reverse':
      return [...items].sort((a, b) => b.name.localeCompare(a.name));
    case 'count_lower':
      return [...items].sort((a, b) => a.count - b.count);
    case 'count_higher':
      return [...items].sort((a, b) => b.count - a.count);
    default:
      return items;
  }
};

export const getItemById = (id: string, items: Item[]): Item | undefined => {
  try {
    return items.find((item) => item.id === parseInt(id));
  } catch {
    return undefined;
  }
};

export const getCommentsByItemId = (
  id: string,
  items: Item[],
  comments: commentType[],
): commentType[] | undefined => {
  try {
    const item = items.find((item) => item.id === parseInt(id));
    const itemComments = comments.filter((comment) =>
      item?.comments.includes(comment.id),
    );
    return itemComments;
  } catch {
    return undefined;
  }
};
