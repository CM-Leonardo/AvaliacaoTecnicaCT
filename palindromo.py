def is_palindrome(word):
    # Remove pontuação, espaços e põe em minúsculo
    cleaned = ''.join(c.lower() for c in word if c.isalnum())

    left = 0
    right = len(cleaned) - 1

    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1

    return True

# Pede uma palavra para o usuário
entrada = input("Digite uma uníca palavra para verificar se é um palíndromo: ")

# Verifica se tem espaço
if ' ' in entrada.strip():
    print("Erro: Digite apenas uma palavra, sem espaços.")
else:
    if is_palindrome(entrada):
        print("É um palíndromo!")
    else:
        print("Não é um palíndromo.")
