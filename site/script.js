var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i=0;i<names.length;i++)
{
    if(names[i].charAt(0)=="J"||names[i].charAt(0)=="j")
    {
        speakWord= "Good Bye";
    }
    else 
    {
        speakWord= "Hello";
    }
    speak(names[i]);
}