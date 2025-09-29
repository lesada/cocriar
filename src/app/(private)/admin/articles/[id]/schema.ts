import * as yup from "yup";

export const articleSchema = yup.object().shape({
	title: yup.string().required("Title is required"),
	category: yup.string().required("Category is required"),
	content: yup.string().required("Content is required"),
});

export type ArticleFormData = yup.InferType<typeof articleSchema>;
