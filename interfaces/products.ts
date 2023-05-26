export interface IProduct {
    description: string;
    images: string[];
    price: number;
    slug: string;
    title: string;
    type: IType;
    subtype?: ISubtype
}

export type IType = 'hombre' | 'mujer' | 'suplementos' | 'equipamiento' | 'accesorios'
export type ISubtype = 'remera oversize' | 'remera deportiva' | 'musculosa' | 'buzo' | 'short' | 'pantalon' | 'medias' | 'top' | 'calza' | 'proteina' | 'creatina' | 'quemadores' | 'vitaminas' | 'mancuernas' | 'bolsos' | 'maquinas' | 'training home' | 'gorros' | 'straps' | 'guantes' | 'cinturones' | 'shakers' | 'botellas'|'medias'