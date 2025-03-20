section .bss
    num1 resb 2
    num2 resb 2
    ops resb 2
    resultado resb 2

section .data
    msg1 db "Ingresa el primer numero: ", 0
    msg2 db "Ingresa el segundo numero: ", 0
    ms3_1 db "1. Suma ", 0
    ms3_2 db "2. Resta ", 0
    ms3_3 db "3. Multiplicar ", 0
    ms3_4 db "4. Dividir ", 0
    ms3_5 db "Ingresa la operacion: ", 0
    msg_result db "El resultado es: ", 0
    newLine db 10, 0

section .text
    global _start

_start:
    ; Pedir primer número
    mov eax, 4
    mov ebx, 1
    mov ecx, msg1
    mov edx, 26
    int 0x80

    ; Leer primer número
    mov eax, 3
    mov ebx, 0
    mov ecx, num1
    mov edx, 2
    int 0x80

    ; Pedir segundo número
    mov eax, 4
    mov ebx, 1
    mov ecx, msg2
    mov edx, 27
    int 0x80

    ; Leer segundo número
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 2
    int 0x80

    ; Mostrar menú 1
    mov eax, 4
    mov ebx, 1
    mov ecx, ms3_1
    mov edx, 7
    int 0x80

    ; salto de linea
    mov eax, 4
    mov ebx, 1
    mov ecx, newLine
    mov edx, 1
    int 0x80

    ; Mostrar menú 2
    mov eax, 4
    mov ebx, 1
    mov ecx, ms3_2
    mov edx, 10
    int 0x80

    ; salto de linea
    mov eax, 4
    mov ebx, 1
    mov ecx, newLine
    mov edx, 1
    int 0x80

    ; Mostrar menú 3
    mov eax, 4
    mov ebx, 1
    mov ecx, ms3_3
    mov edx, 15
    int 0x80

    ; salto de linea
    mov eax, 4
    mov ebx, 1
    mov ecx, newLine
    mov edx, 1
    int 0x80

    ; Mostrar menú 4
    mov eax, 4
    mov ebx, 1
    mov ecx, ms3_4
    mov edx, 10
    int 0x80

    ; salto de linea
    mov eax, 4
    mov ebx, 1
    mov ecx, newLine
    mov edx, 1
    int 0x80

    ; Mostrar menú 5
    mov eax, 4
    mov ebx, 1
    mov ecx, ms3_5
    mov edx, 22
    int 0x80

    ; salto de linea
    mov eax, 4
    mov ebx, 1
    mov ecx, newLine
    mov edx, 1
    int 0x80

    ; Leer operación
    mov eax, 3
    mov ebx, 0
    mov ecx, ops
    mov edx, 2
    int 0x80

    ; Convertir caracteres ASCII a números
    mov al, [ops]
    sub al, '0'

    cmp al, 1
    je suma
    cmp al, 2
    je resta
    cmp al, 3
    je multiplicar
    cmp al, 4
    je dividir
    jmp fin

suma:
    mov al, [num1]
    sub al, '0'
    mov bl, [num2]
    sub bl, '0'
    add al, bl
    add al, '0'
    mov [resultado], al
    jmp mostrar_resultado

resta:
    mov al, [num1]
    sub al, '0'
    mov bl, [num2]
    sub bl, '0'
    sub al, bl
    add al, '0'
    mov [resultado], al
    jmp mostrar_resultado

multiplicar:
    mov al, [num1]
    sub al, '0'
    mov bl, [num2]
    sub bl, '0'
    mul bl
    add al, '0'
    mov [resultado], al
    jmp mostrar_resultado

dividir:
    mov al, [num1]
    sub al, '0'
    mov bl, [num2]
    sub bl, '0'
    cmp bl, 0
    je fin    ; Evitar división por cero
    mov ah, 0
    div bl
    add al, '0'
    mov [resultado], al
    jmp mostrar_resultado

mostrar_resultado:
    ; Mostrar mensaje "El resultado es: "
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 17
    int 0x80

    ; Mostrar resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, resultado
    mov edx, 1
    int 0x80

    ; Salto de línea
    mov eax, 4
    mov ebx, 1
    mov ecx, newLine
    mov edx, 1
    int 0x80

fin:
    mov eax, 1
    xor ebx, ebx
    int 0x80
