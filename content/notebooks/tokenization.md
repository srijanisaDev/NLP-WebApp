## TOKENIZATION -> converting the corpus/paragraph into sentences....So how this works is that we look for characters like "." full stop/ commas and then 
   ## segregate them into separate sentences



## Now we can futher perform tokenization on sentences and this will convert them into words .....and then after futher processing we convert the words into VECTORS. which play a very important role in deep learning




```python
corpus = """ Hello i am srijan. I am studying tokenization in NLP right now  . I am really excited about it .
"""
```


```python
print(corpus)
```

     Hello i am srijan. I am studying tokenization in NLP right now  . I am really excited about it .
    
    


```python
## Tokenization
from nltk.tokenize import sent_tokenize
```


```python
documents = sent_tokenize(corpus)   ## sent tokenize returns a list of sentence sfrom a paragraph
```


```python
for sentence in documents:
    print(sentence)
```

     Hello i am srijan.
    I am studying tokenization in NLP right now  .
    I am really excited about it .
    


```python
## now tokenizing from word or paragraph we use word_tokeinzer

from nltk.tokenize import word_tokenize
```


```python
word_tokenize(corpus)
```




    ['Hello',
     'i',
     'am',
     'srijan',
     '.',
     'I',
     'am',
     'studying',
     'tokenization',
     'in',
     'NLP',
     'right',
     'now',
     '.',
     'I',
     'am',
     'really',
     'excited',
     'about',
     'it',
     '.']




```python
for sentences in documents:
    print(word_tokenize(sentences))
```

    ['Hello', 'i', 'am', 'srijan', '.']
    ['I', 'am', 'studying', 'tokenization', 'in', 'NLP', 'right', 'now', '.']
    ['I', 'am', 'really', 'excited', 'about', 'it', '.']
    


```python
## there is this another library we use when we want to tokenize the punctuation marks also
## this library is known as wordpunct_tokenize

from nltk.tokenize import wordpunct_tokenize


```


```python
wordpunct_tokenize(corpus)
```




    ['Hello',
     'i',
     'am',
     'srijan',
     '.',
     'I',
     'am',
     'studying',
     'tokenization',
     'in',
     'NLP',
     'right',
     'now',
     '.',
     'I',
     'am',
     'really',
     'excited',
     'about',
     'it',
     '.']




```python
## TreebankwordTokenizer.... so in this type of tokenizer there is a very minute difference between the word_punct tokenizer
## the difference is that in word_punct_tokeinzer every punctuation is treated safely but in treebank when a punctuation occurs then 
## it uses the last word attached to it as a complete token


from nltk.tokenize import TreebankWordTokenizer
```


```python
tokenizer  = TreebankWordTokenizer()
```


```python
tokenizer.tokenize(corpus)
```




    ['Hello',
     'i',
     'am',
     'srijan.',
     'I',
     'am',
     'studying',
     'tokenization',
     'in',
     'NLP',
     'right',
     'now',
     '.',
     'I',
     'am',
     'really',
     'excited',
     'about',
     'it',
     '.']




```python

```
