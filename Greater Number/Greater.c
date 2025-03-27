#include <stdio.h>

int main()
{
    
    int num1 , num2;

    scanf("%d" ,&num1);
    scanf("%d",&num2);

  if(num1 > num2){
    printf("%d",num1);
  }else if(num2 > num1){
      printf("%d",num2);
  }
  else{
       printf("BOTH ARE EQUAL");
  }



    return 0;
}
