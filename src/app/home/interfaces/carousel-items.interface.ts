export interface CarouselItem {
    title_h1:       string;
    title_span:     string;
    paragraph:      string;
    buttons:        Boton[] | null | undefined;
    imageUrl:       string;
}

export interface Boton {
    texto: string;
    clase: string;
    enlace: string;
}

export interface ResponsiveOptions {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}