## Stemming

Stemming is the process of reducing a word to its word stem that affixes to suffixes and prefixes to the roots of words known as lemma . Stemming is important in natural language understanding (NLU) and natural lnaguage processing (NLP).


```python
words = ["eating" , "eats" , "eaten" , "writing" , "writes" , "programming" , "programs" , "running" , "runs" , "dancing" , "dances" , "laughing" , "laughs","Finally" , "history"]
```

## Porter Stemmer


```python
from nltk.stem import PorterStemmer
```


```python
stemming = PorterStemmer()
```


```python
for word in words:
    print(word + " ------>" +stemming.stem(word))
```

    eating ------>eat
    eats ------>eat
    eaten ------>eaten
    writing ------>write
    writes ------>write
    programming ------>program
    programs ------>program
    running ------>run
    runs ------>run
    dancing ------>danc
    dances ------>danc
    laughing ------>laugh
    laughs ------>laugh
    Finally ------>final
    history ------>histori
    

This is the disadvantage of stemming as we can see that some words produce different stems or root word ...this all can be fixed using lemmatization.

## RegexpStemmer class

NLTK has regexpstemmer class with the help of which we can easily implement regular expression stemmer algorithms .
It basically takes a single regular expression and removes any prefix or sufix that matches the expression.


```python
from nltk.stem import RegexpStemmer

```


```python
reg_stemmer = RegexpStemmer('ing$|s$|e$|able$', min=4)
```


```python
reg_stemmer.stem("eating")
```




    'eat'




```python
reg_stemmer.stem("doable")
```




    'do'




```python
reg_stemmer.stem("ingeating") ## the $ sign in the last means that the 'ing' if present in last will be removed
```




    'ingeat'



## Snowball Stemmer

The snowball stemmer provides more accuracy or better stemming of words than porter stemmer . That is why it is used more than the porter stemmer 


```python
from nltk.stem import SnowballStemmer
```


```python
snowball_stemmer = SnowballStemmer('english')
```


```python
for word in words:
    print(word + " ------>" +snowball_stemmer.stem(word))
```

    eating ------>eat
    eats ------>eat
    eaten ------>eaten
    writing ------>write
    writes ------>write
    programming ------>program
    programs ------>program
    running ------>run
    runs ------>run
    dancing ------>danc
    dances ------>danc
    laughing ------>laugh
    laughs ------>laugh
    Finally ------>final
    history ------>histori
    

But we can see that there is no better than porter stemmer ... let's try one more example


```python
stemming.stem('fairly') , stemming.stem("sportingly")
```




    ('fairli', 'sportingli')




```python
snowball_stemmer.stem('fairly') , snowball_stemmer.stem("sportingly")
```




    ('fair', 'sport')



so from the above example we can clearly see the differnce.

## conclusion :

we can say conclude that stemming is not the most efficient way in text pre-processing....and clearly useless when we are into making chatbots . 

So there arrives the concept of "lemmatization" which has the dictionary of all the root words and is better than stemming .


```python

```
