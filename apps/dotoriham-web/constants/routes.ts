import { QueryParams, createQueryParams } from '../utils/query-params';

export const ROUTES = {
  signin: (query?: QueryParams) => `/auth/sign-in${createQueryParams(query)}`,
} as const;
