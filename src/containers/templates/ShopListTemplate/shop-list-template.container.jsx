import React from 'react';
import { observer } from 'mobx-react';
import { SecondaryTitle } from '../../../components/atoms/SecondaryTitle/secondary-title';
import { ShopList } from '../../../components/organisms/ShopList/shop-list';
import store from '../../../store/main.store';

function ShopListTemplateContainer() {
    return(
        <>
            <SecondaryTitle>Shop List</SecondaryTitle>
            <ShopList ingredientsList={store.allIngredients} />
        </>
    );
};

export default observer(ShopListTemplateContainer);