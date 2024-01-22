export type QueryParams = typeof URLSearchParams extends new (
  init: infer P,
) => any
  ? P
  : never;

export const createQueryParams = (query: QueryParams) => {
  const queryString = new URLSearchParams(query).toString();
  return queryString ? `?${queryString}` : '';
};
