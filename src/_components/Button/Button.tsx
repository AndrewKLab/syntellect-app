import React, { FunctionComponent } from "react";
import './index.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: React.ReactElement | React.ReactNode;
    className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, className, ...other }) => {
    return (
        <button type="button" className={`button${className ? ` ${className}` : ''}`} {...other}>{children}</button>
    );
} 