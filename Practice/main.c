// #include <stdio.h>
// #define PI 3.14
// int main()
// {
//     const float a = 10.1;
//     // scanf("%f", &a);
//     printf("You \a  entered: %.100f\n", PI); // Print the value with a message
  
//     return 0;
// }
 #include <stdio.h>

int FactFun(int num) {

    if(num == 0 && num == 1){
        return 1;
    }else{

        return (num * FactFun(num-1));

    }



}

int main()
{
   
   int num ; 

   printf("Enter A Number you want to calculate factorial \n");
   scanf("%d",&num);
   printf("The Factorial of %d is %d",num,FactFun(num));

    return 0;
}