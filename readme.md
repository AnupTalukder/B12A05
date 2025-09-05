1.

 getElementById: return a single element using id . if there are no  id like it give null value .

 getElementsByClassName: return multiple element which are  under same class. 

 querySelector : select first element under the selector . give null value if didn't find any element .

 querySelectorAll: select all element under the selector .



2.

create and insert a new element into the DOM:  using  createElement(), we can create a new element 
then we can use append() or prepened() for insert into dom .


3. 

 when an event occurs it's first run the handlers then bubble up using bottom up procedure until it reach the top .


4.

 using one parent listener to manage events on many children . its useful because it optimized code and
it improves performance better then compare to adding multiple event handler .


5. 
preventDefault()  = stop browser's default behavior  .
stopPropagation() = stop the bubling when an event occurs .