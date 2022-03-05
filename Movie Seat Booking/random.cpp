#include <iostream>
using namespace std;
class c_no
{
    int r, i;
public:
    void get_data();
    void show_data();
    c_no sum(c_no a);
};
void c_no ::get_data()
{
    cout << "Enter the real no: ";
    cin >> r;
    cout << "Enter the imaginary no: ";
    cin >> i;
}
void c_no::show_data()
{
    cout << r << "+"<< i << "i\n";
}
c_no c_no::sum(c_no a)
{
    c_no b;
    b.r = r + a.r;
    b.i = i + a.i;
    return b;
}
int main()
{
    c_no a, c;
    a.get_data();
    c.get_data();
    c_no d = a.sum(c);
    d.show_data();
    return 0;
}