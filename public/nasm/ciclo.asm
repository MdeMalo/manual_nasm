section .data ;Sección de datos
    hello db "Hell0 WorlD!", 10 ;Mensaje a imprimir
    helloLen equ $ - hello ;Longitud del mensaje
    N equ 10 ;Número de veces que se imprimirá el mensaje

section .text ;Sección de código
    global _start ;Declaración de la etiqueta de entrada (_start) para el enlazador

_start: ;Inicio del programa
    mov ecx, N ;Contador

.loop: ;Etiqueta de ciclo
    push ecx     ;Guardamos el valor del contador en ecx
    mov edx, helloLen ;Longitud del mensaje
    mov ecx, hello ;Dirección del mensaje
    mov ebx, 1 ;Descriptor de archivo (stdout)
    mov eax, 4 ;syscall: sys_write
    int 0x80 ;Llamada al sistema
    pop ecx ;Recuperamos el valor del contador
    loop .loop ;Decrementamos ecx y saltamos si no es cero

    mov eax, 1 ;syscall: sys_exit
    xor ebx, ebx ;Código de salida 0
    int 0x80 ;Llamada al sistema