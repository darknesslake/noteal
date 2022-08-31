import numpy as np

cardssuit = np.array(['Clubs', 'Diamonds', 'Hearts', 'Spades'])
cardssuit2 = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
cardsset = np.array(['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'])
cardsset2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']


# result = [card + cardssuit for card in cardsset]
# l3 = [l + r for (l, r) in zip(cardsset, cardssuit)]

new_list1 = [x+' Clubs' for x in cardsset]
new_list2 = [x+' Diamonds' for x in cardsset]
new_list3 = [x+' Hearts' for x in cardsset]
new_list4 = [x+' Spades' for x in cardsset]

print(new_list1)
print(new_list2)
print(new_list3)
print(new_list4)