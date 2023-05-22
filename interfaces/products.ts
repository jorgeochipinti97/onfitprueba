export interface IProduct {
    description: string;
    images: string[];
    price: number;
    slug: string;
    title: string;
    type: IType;
    subtype?: ISubtype
}

export type IType = 'hombre' | 'mujer' | 'suplementos' | 'equipamiento' | 'accesorios' | 'medias'
export type ISubtype = 'remera oversize' | 'remera deportiva' | 'musculosa' | 'buzo' | 'short' | 'pantalon' | 'top' | 'calza' | 'proteina' | 'creatina' | 'quemadores de grasa' | 'vitamina' | 'mancuerna' | 'maquinas' | 'training home' | 'gorro' | 'strap' | 'guante' | 'cinturon' | 'shaker' | 'botella'