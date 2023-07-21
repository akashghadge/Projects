#include<bits/stdc++.h>
#include <unistd.h>
#include<iomanip>
using namespace std;

int seconds = 1; // Declare seconds as a global variable

void timer()
{
	while (seconds <= 5) {
		// sleep system call to sleep for 1 seconds
		sleep(1);
		// increment seconds
		seconds++;
	}
}

int main(){
    string setPassword,password;
    int i=0;
    cout <<setw(70)<< "===========================================\n";
    cout << setw(58) <<"PASSWORD  SECURITY\n";
    cout <<setw(70)<< "===========================================\n\n";
    // Used to set password
    cout<<setw(55)<<"Set Your password : ";   
    cin>>setPassword;
    cout <<setw(70)<< "-------------------------------------------\n";
    do{
        label:
        if(i == 3){
            cout <<setw(72)<< "----------------------------------------------\n";
            cout<<endl<<setw(60)<<"!!! Access denied !!!\n\n"<<setw(70)<<"Your security has been locked for 5 seconds";
            seconds = 0;
            timer(); // This function count 5 seconds 
            cout<<endl;
            cout <<setw(72)<< "----------------------------------------------\n";
            i=0;
            goto label;     // goto is used for restart after loop
            break;
        }
        cout<<"\n"<<setw(55)<<"Enter password : ";
        cin>>password;
         // Compair with user password with setpassword
        if(password != setPassword){
            cout<<setw(63)<<"~~~ Wrong password entered ~~~"<<endl;
        }
        else if(password == setPassword){
            cout <<endl<<setw(70)<< "==========================================="; 

            cout<<endl<<setw(61)<<"##### Access Granted #####"<<endl;
        }
        i++;

    }while(password != setPassword);
    
    cout<<setw(60)<<" Your security opened "<<endl;
    cout <<setw(70)<< "==========================================="; 

    
    
    return 0;
}