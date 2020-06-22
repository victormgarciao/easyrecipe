import React, { useState } from 'react';
import { useLinkEffects } from '../../../useEffects/link.effects';
import { RecipeSearch } from '../../../components/molecules/RecipeSearch/recipe-search';

export function RecipeSearchContainer() {
    const { handleDataFromLink } = useLinkEffects();
    const [link, setLink] = useState('');

    function setLinkValue(event) {
        setLink(event.target.value);
    }

    function handleSearch() {
        setLink('');
        handleDataFromLink(link);
    }

    return(
        <RecipeSearch
            link={link}
            handleSearch={handleSearch}
            setLinkValue={setLinkValue}
        />
    );
};