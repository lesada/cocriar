import { InferType, object, string } from 'yup'

export const schemaEmail = object({
  email: string().email('Digite um e-mail válido.').default('').optional()
})

export type TSchemaEmail = InferType<typeof schemaEmail>
