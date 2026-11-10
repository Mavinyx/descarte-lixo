import MaterialData from "../data/materiais.json"
import type { Material } from "../types"
import CardMaterial from "../components/CardMaterial";

export default function Guias() {
    const materiais: Material[] = MaterialData;

    return (
        <div className="flex w-full justify-center px-4 py-6">
            <div className="w-full max-w-5xl rounded-2xl border border-base-300 bg-white/80 p-4 shadow-md ">
                <h1 className="text-center text-2xl font-bold text-custom-primary">Guias de descarte</h1>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {materiais.map((material) => (
                        <CardMaterial key={material.id} material={material} />
                    ))}
                </div>
            </div>
        </div>
    )
}