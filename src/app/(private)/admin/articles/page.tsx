"use client";

import Button from "@/components/Button";
import Table from "@/components/Table";
import { ROUTES_PATHS } from "@/routes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { mockPosts } from "./mock";

function Articles() {
	const router = useRouter();

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
					<Table.Cell>Autor</Table.Cell>
					<Table.Cell>Categoria</Table.Cell>
					<Table.Cell>Tags</Table.Cell>
					<Table.Cell>Data de Publicação</Table.Cell>
					<Table.Cell>Ações</Table.Cell>
				</Table.Header>

				<Table.Body>
					{mockPosts.map((post) => (
						<Table.Row key={post.title}>
							<Table.Cell>{post.title}</Table.Cell>
							<Table.Cell>{post.author}</Table.Cell>
							<Table.Cell>{post.category}</Table.Cell>
							<Table.Cell>
								{post.tags.map((tags) => {
									return (
										<span key={tags} className="mr-2">
											{tags}
										</span>
									);
								})}
							</Table.Cell>
							<Table.Cell>{post.publishedAt}</Table.Cell>
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
