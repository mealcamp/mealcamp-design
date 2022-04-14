import React from 'react';
import Ripple from "./Ripple";
import '../style/button.scss';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Button = ({
                           primary = false,
                           size = 'medium',
                           backgroundColor,
                           label,
                           ...props
                       }: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{backgroundColor, position: 'relative', overflow: 'hidden'}}
            {...props}
        >
            {label}
            <Ripple/>
        </button>
    );
};