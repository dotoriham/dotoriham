import { ZodSchema, ZodTypeDef } from 'zod';

export const safeZodParse = <T>(
  schema: ZodSchema<T, ZodTypeDef, unknown>,
  data: unknown,
  fallbackValue: T,
): T => {
  try {
    const result = schema.safeParse(data);

    if (result.success === false) {
      throw result.error;
    }

    return result.data;
  } catch (e) {
    console.error(e);
    return fallbackValue;
  }
};
