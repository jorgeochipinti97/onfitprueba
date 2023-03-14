export interface IProduct {
    description: string;
    images: string[];
    price: number;
    slug: string;
    title: string;
    type: IType;
}

export type IType = 'suplementos' | 'ropa' | 'tecnologías'| 'maquinas' | 'entrenamiento personalizado' | 'accesorios'