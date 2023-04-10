 import React, { useEffect } from 'react';
 import { useSelector, useDispatch } from "react-redux";


import {
  ShoppingListHeader,
  HeaderText,
  NumberRemoveWrap,
  ShoppingListItem,
  ProductNameAndImgWrap,
  NumberAndDelWrap,
  Img,
  ProductName,
  NumberWrap,
  Number,
  Btn,
  BtnWrap,
} from './styled';

import { getShoppingListThunk,removeIngredientFromShoppingListThunk } from '../../redux/shoppingList/shoppingList.thunk'

const ShopingListSection = () => {
  
    const { list, statuses, errors } = useSelector(
      // (state) => console.log(state)
      state => state.shoppingList
    );

    const dispatch = useDispatch();

    const onDelete = ingredientId => {
      dispatch(removeIngredientFromShoppingListThunk(ingredientId));
    };
  
  useEffect(() => {
    dispatch(getShoppingListThunk());
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <ShoppingListHeader>
        <HeaderText>Product</HeaderText>
        <NumberRemoveWrap>
          <HeaderText>Number</HeaderText>
          <HeaderText>Remove</HeaderText>
        </NumberRemoveWrap>
      </ShoppingListHeader>
      <ul>
        {list.map(({ _id, number, ttl, thb }) => {
          return (
            <ShoppingListItem key={_id}>
              <ProductNameAndImgWrap>
                <Img src={thb} alt="" />
                <ProductName>{ttl}</ProductName>
              </ProductNameAndImgWrap>
              <NumberAndDelWrap>
                <NumberWrap>
                  <Number>{number}</Number>
                </NumberWrap>
                <BtnWrap>
                  <Btn type="button" onClick={() => onDelete(_id)}>
                    x
                  </Btn>
                </BtnWrap>
              </NumberAndDelWrap>
            </ShoppingListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopingListSection;
