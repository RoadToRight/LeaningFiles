#include <stdio.h>

int FactorialCal(int number)
{
    // if(number == 0 || number == 1){

    //     return 1;

    // }
    // else{
    //     return (number * FactorialCal(number - 1));
    // }
    int result;
    for (int i = 1; i <= number; i++)
    {

        result  *= i;
    }
    return result;
}

int main()
{
    int num;
    printf("Enter A Number You Want To Calculate Factorial\n");
    scanf("%d", &num);
    printf("The Factorial of  %d is %d \n", num, FactorialCal(num));

    return 0;
}