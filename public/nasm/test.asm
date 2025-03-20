; Esta sección define una sección de datos no inicializados (.bss) en el código ensamblador.
; La etiqueta 'buffer' reserva 10 bytes de espacio en memoria.
; 'resb' es una directiva del ensamblador que significa "reservar byte".

section .bss
    buffer resb 10

section .data
    msg db "Ingresa un numero: ", 0
    msg_result db "Numero ingresado: ", 0
    newline db 10, 0 ; salto de linea

section .text
    global _start

_start:
    ; Mostrar mensaje
    mov eax, 4
    mov ebx, 1
    mov ecx, msg
    mov edx, 17  ; Ajustado el tamaño del mensaje
    int 0x80

    ; Leer numero
    mov eax, 3
    mov ebx, 0
    mov ecx, buffer
    mov edx, 10
    int 0x80

    ; Mostrar mensaje de resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 18  ; Ajustado el tamaño del mensaje
    int 0x80

    ; Mostrar numero ingresado
    mov eax, 4
    mov ebx, 1
    mov ecx, buffer
    mov edx, 10
    int 0x80

    ; Imprimir salto de linea
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ; Salir del programa
    mov eax, 1
    xor ebx, ebx
    int 0x80
