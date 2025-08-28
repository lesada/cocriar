"use client";

import { getArticles } from "@/api/requests/articles/get-articles";
import Button from "@/components/Button";
import ShimmerSkeleton from "@/components/ShimmerSkeleton";
import Table from "@/components/Table";
import { ROUTES_PATHS } from "@/routes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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
	const router = useRouter();
	const { data, isSuccess } = useQuery({
		queryKey: ["articles"],
		queryFn: getArticles,
	});

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
					{data?.articles.map((article) => (
						<Table.Row key={article.id}>
							<Table.Cell>{article.title}</Table.Cell>
							<Table.Cell>{article.category}</Table.Cell>
							<Table.Cell>{article.created_at}</Table.Cell>
							<Table.Actions>
								<button
									className="text-neutral-600 hover:text-neutral-800 cursor-pointer"
									type="button"
								>
									<Icon icon="mdi:pencil" width="16" height="16" />
								</button>
								<button
									className="text-neutral-600 hover:text-neutral-800 cursor-pointer"
									type="button"
								>
									<Icon icon="mdi:delete" width="16" height="16" />
								</button>
							</Table.Actions>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Container>
		</main>
	);
}

export default Articles;
