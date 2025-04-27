import { type InferType, object, string } from "yup";

export const schemaContactForm = object({
	name: string()
		.required("Digite seu nome.")
		.matches(
			/^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)+\s*$/,
			"Digite seu nome completo.",
		),
	email: string()
		.email("Digite um e-mail válido.")
		.required("Digite um e-mail válido."),
	phone: string()
		.required("Digite seu celular")
		.min(15, "Digite um número válido"),
	help: string().required("Digite sua dúvida"),
});

export type TSchemaContactForm = InferType<typeof schemaContactForm>;
