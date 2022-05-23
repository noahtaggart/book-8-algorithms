export const isPrime = (num) => {
        if (num < 2) return false;
    
        /**
         * An integer is prime if it is not divisible by any prime less than or equal to its square root
         **/
    
        var q = Math.floor(Math.sqrt(num));
    
        for (var i = 2; i <= q; i++)
        {
            if (num % i == 0)
            {
                return false;
            }
        }
    
        return true;
    }