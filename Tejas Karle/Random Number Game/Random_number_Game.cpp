#include<iostream>
#include<time.h>
using namespace std;

int main(){ 
    cout<< "***  RANDOM NUMBER GAME  ***"<<endl;
    srand(time(0));
    int num = rand()%100 + 1;
    int guess,attempts=1;
    // cout << "Random number is : "<<num<<endl;
    do{
        cout<< "Guess the number between 1 to 100 : ";
        cin >> guess;
        if(guess > num ){
            cout<<"Lower number please !"<<endl;
        }
        else if(guess < num){
            cout<<"Greater number plaese ! "<<endl;
        }
        else{
            cout<<"You completed the game in "<<attempts<<endl;
        }
        attempts++;
    }while(guess != num);
    cout << " Game End "<<endl;
    return 0;
}