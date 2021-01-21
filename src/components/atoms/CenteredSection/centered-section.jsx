import React from 'react';


export function CenteredSection({ classes, children}) {

    return(
        <section className={`flex flex-jc-c ${classes}`}>
            {children}
        </section>
    );
};
