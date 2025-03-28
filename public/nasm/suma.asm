;nasm -f elf32 suma.asm -o suma.o
;ld -m elf_i386 suma.o -o suma
;./suma


; Sección .bss, variables no inicializadas
;Dentro de esta sección se declaran y se reserva espacio para las variables de
;nuestro programa para las cuales no queremos dar un valor inicial.


;resb: reserva espacio en unidades de byte
;resw: reserva espacio en unidades de palabra, 2 bytes
;resd: reserva espacio en unidades de doble palabra, 4 bytes
;resq: reserva espacio en unidades de cuádruple palabra, 8 bytes


;var1 resb 1 ;reserva 1 byte
;var2 resb 4 ;reserva 4 bytes
;var3 resw 2 ;reserva 2 palabras = 4 bytes, equivalente al caso anterior
;var3 resd 1 ;reserva una cuádruple palabra = 4 bytes


section .bss
    num1 resb 2    ; Reservar espacio para num1
    num2 resb 2    ; Reservar espacio para num2
    resultado resb 64  ; Reservar espacio para el resultado

section .data
    msg1 db "Ingresa el primer número?", 0
    msg2 db "Ingresa el segundo número?", 0
    msg_result db "La suma es: ", 0
    newline db 10, 0  ; Salto de línea

section .text
    global _start

_start:
    ; Mostrar mensaje 1
    mov eax, 4          ; syscall write
    mov ebx, 1          ; stdout
    mov ecx, msg1       ; Dirección del mensaje
    mov edx, 25         ; Longitud del mensaje
    int 0x80            ; Llamado al sistema

    ; Leer primer número
    mov eax, 3          ; syscall read
    mov ebx, 0          ; stdin
    mov ecx, num1       ; Dirección donde guardar el número
    mov edx, 2          ; Longitud (1 dígito + Enter)
    int 0x80            ; Llamado al sistema

    ; Mostrar mensaje 2
    mov eax, 4
    mov ebx, 1
    mov ecx, msg2
    mov edx, 26
    int 0x80

    ; Leer segundo número
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 2
    int 0x80

    ; Convertir caracteres ASCII a números
    mov al, [num1]  
    sub al, '0'      ; Convierte de ASCII a valor numérico
    mov bl, [num2]  
    sub bl, '0'

    ; Sumar los números
    add al, bl
    add al, '0'      ; Convertir resultado de vuelta a ASCII
    mov [resultado], al

    ; Mostrar mensaje del resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 13
    int 0x80

    ; Mostrar el resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, resultado
    mov edx, 1
    int 0x80

    ; Imprimir salto de línea
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ; Salir del programa
    mov eax, 1          ; syscall exit
    xor ebx, ebx        ; Código de salida 0
    int 0x80
