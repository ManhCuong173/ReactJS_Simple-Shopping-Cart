export const changeValueOfProps = (array, newPropItem ) {
  let prop = newPropItem.prop;
  let newValue = newPropItem.value;
  array.forEach(element => {
    if(element.prop === newPropItem.prop) element.prop = newValue;
  });
}