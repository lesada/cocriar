"use client";

import { deleteArticle } from "@/api/requests/articles/delete-article";
import { getArticles } from "@/api/requests/articles/get-articles";
import type { GetArticlesResponse } from "@/api/requests/articles/types";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import ShimmerSkeleton from "@/components/ShimmerSkeleton";
import Table from "@/components/Table";
import { queryClient } from "@/contexts/query-client";
import { ROUTES_PATHS } from "@/routes";
import { formatDate } from "@/utils/format-date";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ArticleSkeleton() {
	return (
		<Table.Row>
			<Table.Cell>
				<ShimmerSkeleton />
			</Table.Cell>
			<Table.Cell>
				<ShimmerSkeleton />
			</Table.Cell>
			<Table.Cell>
				<ShimmerSkeleton />
			</Table.Cell>
			<Table.Cell>
				<ShimmerSkeleton />
			</Table.Cell>
		</Table.Row>
	);
}

function Articles() {
	const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
	const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
		null,
	);

	const router = useRouter();
	const { data, isSuccess } = useQuery({
		queryKey: ["articles"],
		queryFn: getArticles,
	});

	const { mutateAsync: handleDeleteArticle } = useMutation({
		mutationFn: (id: string) => deleteArticle(id).then(() => id),
		onSuccess: (deletedId: string) => {
			queryClient.setQueryData(
				["articles"],
				(oldData: GetArticlesResponse) => ({
					...oldData,
					articles: oldData.articles.filter(
						(article) => article.id !== deletedId,
					),
				}),
			);
			setIsOpenConfirmModal(false);
		},
	});

	function handleClickDeleteArticle(id: string) {
		setIsOpenConfirmModal(true);
		setSelectedArticleId(id);
	}

	function handleEditArticle(id: string) {
		router.push(ROUTES_PATHS.ADMIN_ARTICLE.replace(":id", id));
	}

	return (
		<main className="flex flex-col flex-1 bg-blue-50 px-6 py-36 min-h-screen">
			<h1 className="mb-12 font-poppins font-medium text-neutral-900 text-5xl">
				Artigos
			</h1>
			<Button
				className="mb-10"
				onClick={() =>
					router.push(ROUTES_PATHS.ADMIN_ARTICLE.replace(":id", "novo"))
				}
			>
				Adicionar novo artigo
			</Button>
			<Table.Container>
				<Table.Header>
					<Table.Cell>Título</Table.Cell>
					<Table.Cell>Categoria</Table.Cell>
					<Table.Cell>Data de Criação</Table.Cell>
					<Table.Cell>Ações</Table.Cell>
				</Table.Header>
				<Table.Body>
					{!isSuccess && (
						<>
							<ArticleSkeleton />
							<ArticleSkeleton />
							<ArticleSkeleton />
							<ArticleSkeleton />
						</>
					)}
					{data?.articles?.map((article) => (
						<Table.Row key={article.id}>
							<Table.Cell>{article.title}</Table.Cell>
							<Table.Cell>{article.category}</Table.Cell>
							<Table.Cell>{formatDate(article.created_at)}</Table.Cell>
							<Table.Actions>
								<button
									className="text-neutral-600 hover:text-neutral-800 cursor-pointer"
									type="button"
									onClick={() => handleEditArticle(article.id)}
								>
									<Icon icon="mdi:pencil" width="16" height="16" />
								</button>
								<button
									className="text-neutral-600 hover:text-neutral-800 cursor-pointer"
									type="button"
									onClick={() => handleClickDeleteArticle(article.id)}
								>
									<Icon icon="mdi:delete" width="16" height="16" />
								</button>
							</Table.Actions>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Container>
			<Modal
				isOpen={isOpenConfirmModal}
				onCancel={() => {
					setIsOpenConfirmModal(false);
					setSelectedArticleId(null);
				}}
				onConfirm={() => handleDeleteArticle(selectedArticleId ?? "")}
				title="Confirmar exclusão do artigo"
			/>
		</main>
	);
}

export default Articles;
