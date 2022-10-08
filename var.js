// var mergeTwoLists = function (list1, list2) {
//   let array = list1.concat(list2);
//   array.sort();
//   return array;
// };
// (list1 = []), (list2 = []);
// console.log(mergeTwoLists(list1, list2));

var mergeTwoLists = function (list1, list2) {
  //   if (!list1) return list2;
  //   if (!list2) return list1;

  if (list1.val() < list2.val()) {
    list1.next = mergeTwoLists(list1.next, list2);
    console.log(list2.val);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
(list1 = [1, 3, 2]), (list2 = [1, 4, 5]);

console.log(mergeTwoLists(list1, list2));
