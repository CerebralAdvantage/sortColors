# sortColors
Leetcode 75

Basically the Dutch National Flag Sort, but with a small twist
This can sort any number of colors - the fewer; the more efficient.
The "colors" in the sort routine represent all but the highest number
so in the case of 3 colors (0,1,2) the routine hard-wires [0,1]
this may be altered manually, for instance witha 5-color flag,
simply change colors to [0,1,2,3].  This could be parameterized...
