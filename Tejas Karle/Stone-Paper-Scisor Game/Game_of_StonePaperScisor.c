#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int conditions(char you, char comp)
{
    //0 for draw ,1 for you win, +1 for you lose
    if (you == comp)
    {
        return 0;
    }
    //for stone and paper
    if (you == 's' && comp == 'p')
    {
        return -1;
    }
    else if (you == 'p' && comp == 's')
    {
        return 1;
    }
    //for paper and scisor
    if (you == 'p' && comp == 'c')
    {
        return -1;
    }
    else if (you == 'c' && comp == 'p')
    {
        return 1;
    } //for stone and scisor
    if (you == 's' && comp == 'c')
    {
        return 1;
    }
    else if (you == 'c' && comp == 's')
    {
        return -1;
    }
}

int main()
{
    char name[30];
    int in=0,playerScore=0,compScore=0;
    printf("\n\n\t\t\t\t***** Game of Stone Paper Scisor *****\n\n");
    printf("Enter your name : ");
    gets(name);
    do{
        fflush(stdin);
        char you, comp;
        srand(time(NULL));
        int num = rand() % 3 + 1;
        fflush(stdin);
        printf("\nChoose s for stone , p for paper, c for scisor : ");
        scanf("%c", &you);

        if (num == 1)
        {
            comp = 's';
        }
        else if (num == 2)
        {
            comp = 'p';
        }
        else if (num == 3)
        {
            comp = 'c';
        }
        int result = conditions(you, comp);
        if (result == 0)
        {
            printf("\n\t\t\t\t***** Round DRAW *****\n");
        }
        else if (result == 1)
        {
            printf("\n\t\t\t\tYou win the round  \n");
            playerScore++;
        }
        else if (result == -1)
        {
            printf("\n\t\t\t\tComp win the round \n");
            compScore++;
        }
        printf("\t\t\t\tYour Score : %d\n\t\t\t\tComp score : %d\n",playerScore,compScore);
        printf("\nYou choose %c and comp choose %c\n", you, comp);
        printf("___________________________________________________\n");
        in++;

    }while(in < 3);
        if(playerScore>compScore){
            printf("\n\t\t\t\t***** You WIN %d out of 3 *****\n",playerScore);
        }
        else if(playerScore<compScore){
            printf("\n\t\t\t\t***** You lose Game *****\n\t\t\t\tComp Win %d out of 3 \n",compScore);
        }
        else
        {
            printf("\t\t\t\t***** !! Game is Draw !! *****");
        }
        
    printf("\n\t\t\t\tThank you For Playing Game\n");
    return 0;
}