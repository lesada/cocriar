"use client";

import Button from "@/components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

function AdminPanel() {
	const router = useRouter();

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
					<p className="flex items-center gap-1 font-medium text-blue-800">
						<Icon icon="hugeicons:google-doc" width={20} height={20} /> 5
						artigos
					</p>
					<p className="flex items-center gap-1 font-medium text-blue-800">
						<Icon
							icon="material-symbols:mode-comment-outline"
							width={20}
							height={20}
						/>
						3 depoimentos
					</p>
					<p className="flex items-center gap-1 font-medium text-blue-800">
						<Icon
							icon="material-symbols:event-outline"
							width={20}
							height={20}
						/>
						2 eventos
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<h3 className="font-poppins font-medium text-neutral-900 text-2xl">
						Ações rápidas
					</h3>
					<Button onClick={() => router.push("/admin/artigos")}>
						Adicionar novo artigo
					</Button>
					<Button outlined onClick={() => router.push("/admin/eventos")}>
						Adicionar novo evento
					</Button>
				</div>
			</div>
		</main>
	);
}

export default AdminPanel;
