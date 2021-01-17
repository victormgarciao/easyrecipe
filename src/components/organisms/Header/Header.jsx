import React from 'react';

import { Logo } from "../../atoms/Header/Logo/Logo";
import { HeaderActions } from "../../molecules/Header/HeaderActions/HeaderActions";

export function Header() {
    return (
        <header className="flex flex-jc-sb flex-ai-c">
            <Logo />
            <HeaderActions />
        </header>
    );
}