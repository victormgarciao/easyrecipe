import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/organisms/Header/Header'


export function HeaderContainer() {
    const [position, setPosition] = useState(0);

    useEffect(
        function onScroll() {
            function checkPosition() { setPosition(window.scrollY); }
            document.addEventListener('scroll', checkPosition);

            return function cleanup() {
                document.removeEventListener('scroll', checkPosition);
            }
        }
    );

    return <Header position={position} />;
}
