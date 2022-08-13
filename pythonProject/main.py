import os
import random

folder = input('Enter path to directory: ')
choice = int(input('Choose the type of renaming:\n1) Random\n2) Arranged\n-> '))

os.chdir(folder)
print('DIRECTORY HAS OPEN: ', os.getcwd())

match choice:
##### ПЕРЕМЕШИВАНИЕ С ПЕРЕИМЕНОВАНИЕМ #####
  case 1:
    item_counter = 0
    item_list = []
    index = 0

    print('Preparation...')

    for i in os.listdir(folder):
      item_counter += 1
      if ('.jpg'in i) or ('.png'in i):
        os.rename(i, 'temp' + str(item_counter) + '.jpg')
      else:
        os.rename(i, 'temp' + str(item_counter) + '.mp4')

    for i in range(1, item_counter + 1):
      item_list.append(i)

    random.shuffle(item_list)

    print('Renaming...')

    for i in os.listdir(folder):
      if ('.jpg'in i) or ('.png'in i):
        os.rename(i, str(item_list[index]) + '.jpg')
      else:
        os.rename(i, str(item_list[index]) + '.mp4')
      index += 1
      os.system('cls')
      print(index * 100 / len(item_list))

####### УПОРЯДОЧЕННОЕ ПЕРЕИМЕНОВАНИЕ #######
  case 2:
    item_index = int(input('Enter the start index\n-> '))

    print('\nPreparation...\n')
    item_counter = 0
    for i in os.listdir(folder):
      item_counter += 1

    print('\nRenaming...\n')
    for i in os.listdir(folder):
      if ('.jpg'in i) or ('.png'in i):
        os.rename(i, str(item_index) + '.jpg')
        item_index += 1
      else:
        os.rename(i, str(item_index) + '.mp4')
        item_index += 1
      os.system('cls')
      print(item_index * 100 / item_counter)



