"use client";

import { getSummary } from "@/api/requests/summary/get-summary";
import Button from "@/components/Button";
import ShimmerSkeleton from "@/components/ShimmerSkeleton";
import { ROUTES_PATHS } from "@/routes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

function AdminPanel() {
	const router = useRouter();
	const { data: summary, isSuccess } = useQuery({
		queryKey: ["summary"],
		queryFn: getSummary,
	});

	return (
		<main className="flex flex-col flex-1 bg-blue-50 px-6 py-36 min-h-screen">
			<h1 className="mb-12 font-poppins font-medium text-neutral-900 text-5xl">
				Painel de Controle
			</h1>
			<div className="flex justify-between bg-neutral-0 m-4 p-6">
				<div className="flex flex-col gap-4">
					<h2 className="font-poppins font-medium text-neutral-900 text-3xl">
						Informações
					</h2>
					<ShimmerSkeleton className="w-24 h-5" show={isSuccess}>
						<p className="flex items-center gap-1 font-medium text-blue-800">
							<Icon
								icon="hugeicons:google-doc"
								width={20}
								height={20}
								className="shrink-0"
							/>
							{summary?.articles} artigos
						</p>
					</ShimmerSkeleton>

					<ShimmerSkeleton show={isSuccess} className="w-32 h-5">
						<p className="flex items-center gap-1 font-medium text-blue-800">
							<Icon
								icon="material-symbols:mode-comment-outline"
								width={20}
								height={20}
								className="shrink-0"
							/>
							{summary?.testimonials} comentários
						</p>
					</ShimmerSkeleton>
					<ShimmerSkeleton show={isSuccess} className="w-32 h-5">
						<p className="flex items-center gap-1 font-medium text-blue-800">
							<Icon
								icon="material-symbols:event-outline"
								width={20}
								height={20}
								className="shrink-0"
							/>
							{summary?.events} eventos
						</p>
					</ShimmerSkeleton>
				</div>
				<div className="flex flex-col gap-4">
					<h3 className="font-poppins font-medium text-neutral-900 text-2xl">
						Ações rápidas
					</h3>
					<Button onClick={() => router.push(ROUTES_PATHS.ADMIN_ARTICLES)}>
						Adicionar novo artigo
					</Button>
					<Button
						outlined
						onClick={() => router.push(ROUTES_PATHS.ADMIN_EVENTS)}
					>
						Adicionar novo evento
					</Button>
				</div>
			</div>
		</main>
	);
}

export default AdminPanel;
