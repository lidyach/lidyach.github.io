export interface NavBottomButtonProps extends  React.HTMLProps<HTMLElement> {
    label: string;
    icon: string;
    linkTo: string;
    disabled?: boolean;
    active?: boolean;
}
