import { type InferType, object, string } from "yup";

export const schemaContactForm = object({
	name: string().required("Digite seu nome."),
	email: string()
		.email("Digite um e-mail válido.")
		.required("Digite um e-mail válido."),
	phone: string().required("Digite seu celular"),
	help: string().required("Digite sua dúvida"),
});

export type TSchemaContactForm = InferType<typeof schemaContactForm>;
