## Wordnet Lemmatizer

Lemmatization technique is like stemming . The output we will get after lemmatization is called "lemma" , which is a root word rather than root stem , the output of stemming . After lemmatization , we will be getting a valid word that means the same thing.


```python
from nltk.stem import WordNetLemmatizer
```


```python
lemmatizer = WordNetLemmatizer()
```


```python
'''
pos-
Noun - n
verb - v
adjective - a
adverd - r
'''

lemmatizer.lemmatize("going" ,"v")


```




    'go'




```python
words = ["eating" , "eats" , "eaten" , "writing" , "writes" , "programming" , "programs" , "running" , "runs" , "dancing" , "dances" , "laughing" , "laughs","Finally" , "history"]
```


```python
for word in words:
    print(word+"------>"+lemmatizer.lemmatize(word,'v'))
```

    eating------>eat
    eats------>eat
    eaten------>eat
    writing------>write
    writes------>write
    programming------>program
    programs------>program
    running------>run
    runs------>run
    dancing------>dance
    dances------>dance
    laughing------>laugh
    laughs------>laugh
    Finally------>Finally
    history------>history
    


```python

```


```python

```
