export interface CardProps extends React.HTMLProps<{}> {
    title?: string;
    price?: string;
    location?: string;
    iconPark?: string;
    imageSrc: string;
    ratio: 'Wide' | 'Square';
}
