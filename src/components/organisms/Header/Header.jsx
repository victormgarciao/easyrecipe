import React from 'react';

import { Logo } from "../../atoms/Header/Logo/Logo";
import { HeaderActions } from "../../molecules/Header/HeaderActions/HeaderActions";

export function Header({ position }) {
    return (
        <header className="flex flex-jc-sb flex-ai-c" data-scroll={position}>
            <Logo />
            <HeaderActions />
        </header>
    );
}