import React from 'react';
import { observer } from 'mobx-react';
import { SectionTitle } from '../../../components/atoms/SectionTitle/section-title';
import { ShopList } from '../../../components/organisms/ShopList/shop-list';
import store from '../../../store/main.store';

function ShopListTemplateContainer() {
    return(
        <>
            <SectionTitle>Shop List</SectionTitle>
            <ShopList ingredientsList={store.allIngredients} />
        </>
    );
};

export default observer(ShopListTemplateContainer);