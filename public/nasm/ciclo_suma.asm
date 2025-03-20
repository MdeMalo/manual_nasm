section .bss
    num1 resb 2
    num2 resb 2
    resultado resb 1

section .data
    msg1 db "Ingresa el primer numero: ", 0
    msg2 db "Ingresa el segundo numero: ", 0
    msg_bucle db "Hell0 worD", 0
    newLine db 10, 0

section _start
    global _start

_start:

    ; --- Mostrar mensaje para el primer número ---
    mov eax, 4         ; syscall: sys_write (número 4 en Linux)
    mov ebx, 1         ; file descriptor: 1 (stdout)
    mov ecx, msg1      ; dirección de la cadena msg1
    mov edx, 26        ; longitud del mensaje (número de bytes a escribir)
    int 0x80           ; llamada al sistema

    ; --- Leer primer número ---
    mov eax, 3         ; syscall: sys_read (número 3)
    mov ebx, 0         ; file descriptor: 0 (stdin)
    mov ecx, num1      ; dirección donde se almacenará el dato leído
    mov edx, 2         ; número de bytes a leer
    int 0x80           ; llamada al sistema

    ; --- Mostrar mensaje para el segundo número ---
    mov eax, 4         ; syscall: sys_write
    mov ebx, 1         ; stdout
    mov ecx, msg2      ; dirección de la cadena msg2
    mov edx, 27        ; longitud del mensaje
    int 0x80           ; llamada al sistema

    ; --- Leer segundo número ---
    mov eax, 3         ; syscall: sys_read
    mov ebx, 0         ; stdin
    mov ecx, num2      ; dirección de la variable num2 (corregido error de escritura)
    mov edx, 2         ; número de bytes a leer
    int 0x80           ; llamada al sistema

    ; --- Conversión de caracteres ASCII a dígitos y suma ---
    mov al, [num1]     ; carga el primer byte de num1 en AL
    sub al, '0'        ; convierte el carácter ASCII a su valor numérico (ej: '5' - '0' = 5)
    mov bl, [num2]     ; carga el primer byte de num2 en BL
    sub bl, '0'        ; convierte el carácter ASCII a número
    add al, bl         ; suma los dos números
    mov [resultado], al; almacena el resultado en la variable 'resultado'

    ; --- Hace valor numerico ---
    movzx ecx, byte [resultado]

.loop:
    push ecx

    mov edx, 11
    mov ecx, msg_bucle
    mov ebx, 1
    mov eax, 4
    int 0x80

    mov eax, 4
    mov ebx, 1
    mov ecx, newLine
    mov edx, 1
    int 0x80

    pop ecx
    loop .loop

    mov eax, 1
    xor ebx, ebx
    int 0x80
