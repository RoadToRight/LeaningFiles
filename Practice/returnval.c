#include <stdio.h>
#include <string.h>

int main() {
    char str1[50] = "Hello, "; // Destination (must have enough space)
    char str2[] = "world!";     // Source

    strcat(str1, str2);

    printf("%s\n", str1); // Output: Hello, world!

    return 0;
}