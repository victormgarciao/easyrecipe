import React from 'react';
import { observer } from 'mobx-react';
import { SecondaryTitle } from '../../../components/atoms/SecondaryTitle/secondary-title';
import { ShopList } from '../../../components/organisms/ShopList/shop-list';
// import store from '../../../store/main.store';

function ShopListTemplateContainer() {
    return(
        <>
            <SecondaryTitle>Shop List</SecondaryTitle>
            {/* <ShopList ingredientsList={store.allIngredients} /> */}
            <ShopList ingredientsList={[
                { recipeLink: 'tupiLink', ingredient: 'tupingredient', recipeTitle: 'tupiTitle'},
                { recipeLink: 'tupiLink', ingredient: 'tupingredient', recipeTitle: 'tupiTitle'},
                { recipeLink: 'tupiLink', ingredient: 'tupingredient', recipeTitle: 'tupiTitle'},
            ]} />
        </>
    );
};

export default observer(ShopListTemplateContainer);