import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    customBtn?: string;
    containerStyle?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;

}