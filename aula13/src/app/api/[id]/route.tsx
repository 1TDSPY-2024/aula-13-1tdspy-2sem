import { NextResponse } from "next/server";
import { promises as fs } from "fs";

interface Produto {
    id: number;
    nome: string;
    descricao: string;
}

export async function GET(request: Request, { params }: { params: { id: number } }) {   
    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
    const dados: TipoProduto[] = JSON.parse(file);

    const produto = dados.find((p: Produto) => p.id === parseInt(id));

    if (!produto) {
        return NextResponse.json({ message: "Produto não encontrado" }, { status: 404 });
    }

    return NextResponse.json(produto);
}
