import { NextResponse } from "next/server";
import {promises as fs} from "fs";

type Produto = {
    id: number; 
    nome: string; 
    preco: number; 
    qtd: number;
}

export async function GET(request: Request, { params }: { params: { id: number } }) {   

    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const dados: Produto[] = JSON.parse(file);
    const dado = dados.find((d) => d.id == params.id)
    return NextResponse.json(dado);

}