;1.- ENSAMBLAMOS: nasm -f elf32 hola.asm -o hola.o
;2.- ENLAZAMOS: ld -m elf_i386 -s -o hola hola.o
;3.- EJECUTAMOS: ./hola


;db: define una variable de tipo byte, 8 bits.
;dw: define una variable de tipo palabra (word), 2 bytes = 16 bits.
;dd: define una variable de tipo doble palabra (double word), 2 palabras = 4 bytes = 32 bits.
;dq: define una variable de tipo cuádruple palabra (quad word), 4 palabras = 8 bytes = 64 bits.


;Nota: Si estás en un sistema de 64 bits, es posible que necesites ;instalar las bibliotecas de 32 bits:
;sudo apt install gcc-multilib


section .data
    mensaje db "Hell0 worD", 0xA  ; Mensaje con salto de línea (0xA representa un salto de línea (\n en ASCII).)
                                    ;msg db "Hola, mundo!", 10  ; Mensaje con salto de línea
    len equ $ - mensaje             ; Longitud del mensaje, $ representa la posición actual en la memoria. 
                                    ;len tendrá la cantidad de bytes del mensaje (incluyendo 0xA).

section .text
    global _start             ; seccion ELF
                              ; ELF es un formato de archivo que se utiliza para almacenar aplicaciones ejecutables en sistemas operativos como Linux y BSD. El lenguaje ensamblador es un lenguaje de programación que se utiliza en microprocesadores. 


_start:
    ; Llamada al sistema write (syscall número 1 en Linux)
    mov eax, 4       ; syscall número 4 -> sys_write (Carga el número de syscall 4 (sys_write))
    mov ebx, 1       ; File descriptor 1 -> stdout (Elige la salida estándar (stdout), que tiene el descriptor de archivo 1.)
    mov ecx, mensaje ; Dirección del mensaje ( Carga la dirección del mensaje en ecx.)
    mov edx, len     ; Longitud del mensaje ( Carga la longitud del mensaje en edx.)
    int 0x80         ; Llamado a la interrupción de Linux (Llama al kernel de Linux para ejecutar la syscall.)

    ; Llamada al sistema exit (syscall número 1 en Linux)
    mov eax, 1       ; syscall número 1 -> sys_exit ( Carga el número de syscall 1 (sys_exit).)
    xor ebx, ebx     ; Código de salida 0 (Coloca 0 en ebx, indicando que el programa terminó sin errores.)
    int 0x80         ; Llamado a la interrupción de Linux (Llama al kernel de Linux para ejecutar la syscall.)
