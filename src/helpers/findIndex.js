export const findndex = (targetItem, array) => {
  let returnIndex = -1;
  array.forEach((element, index) => {
    
    if(element.id === targetItem.id) {
      returnIndex = index;
    } 
  });

  return returnIndex;
} 