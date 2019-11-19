function oddNumbers()
{
    // making a empty var and adding 0 to it.
        var i = 0;

        // checking weather i is greater than ten.
        while(i <= 10)
    {
        // checking for odd Numbers.
        if(i %2 != 0)
        {
            // printing out our odd Number.
            console.log(i);
        }
        // adding 1 to our i var.
            i++;
    }
}
    // calling the function.
    oddNumbers();