#include <iostream>
using namespace std;

int main(){
    double fahrenheit;
    cin >> fahrenheit;

    double celcius = (fahrenheit - 32) * (5/9);
    cout << celcius << endl;

    return 0;
}