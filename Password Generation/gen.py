import sys
import random

def main():
    password_length = 15
    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "+", "=", "-", "_", "?"]
    possible_characters = letters + numbers + symbols
    random_character_list = [random.choice(possible_characters) for i in range(password_length)]
    random_password="".join(random_character_list)

    letter_count = 0
    number_count = 0
    symbol_count = 0

    for i in range(0, len(random_password)):
        if i in letters:
            letter_count = letter_count + 1
        if i in numbers:
            number_count = number_count + 1
        if i in symbols:
            symbol_count = symbol_count + 1

    if letter_count == 0:
        add = random.choice(letters)
        random_password = random_password + add

    if number_count == 0:
        add = random.choice(numbers)
        random_password = random_password + add

    if symbol_count == 0:
        add = random.choice(symbols)
        random_password = random_password + add

    print(random_password)


if __name__ == '__main__':
    main()
