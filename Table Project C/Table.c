#include <stdio.h>

int main()
{

    int number;
    printf("Enter A Number You Want To Print  Table \n");
    scanf("%d", &number);
   
    for (int  i = 1; i <= 10; i++)
    {
        
        // printf("%d",number);
        // printf("x");
        // printf("%d",i);
        // printf("=");
        // printf("%d\n",number * i);

        if(number > 2){
            continue;
        }

    printf("%d x %d =%d\n",number,i,number*i);

    }
    


    return 0;
}