## Bag of words



```python
import numpy as np
import pandas as pd

```


```python
df = pd.DataFrame({'text':['people watch anime','anime watch anime','people write comment','anime write comment'],'output':[1,1,0,0]})
```


```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>text</th>
      <th>output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>people watch anime</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>anime watch anime</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>people write comment</td>
      <td>0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>anime write comment</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div>




```python
from sklearn.feature_extraction.text import CountVectorizer
```


```python
cv = CountVectorizer()
```


```python
bow = cv.fit_transform(df['text'])
```


```python
print(cv.vocabulary_)
```

    {'people': 2, 'watch': 3, 'anime': 0, 'write': 4, 'comment': 1}
    


```python
print(bow[0].toarray())
print(bow[1].toarray())
```

    [[1 0 1 1 0]]
    [[2 0 0 1 0]]
    

## N-grams

Benefits:
Able to capture the semantic of the sentence in a better way
easy implementation

Disadvantages :
when we are using n - grams as we increase the value of n .... the dimentionality increases and therefore it slows down the algo and computation time is more



```python
cv = CountVectorizer(ngram_range=(2,2))
```


```python
bow = cv.fit_transform(df['text'])
```


```python
print(cv.vocabulary_)
```

    {'people watch': 2, 'watch anime': 4, 'anime watch': 0, 'people write': 3, 'write comment': 5, 'anime write': 1}
    

## Tf-idf

if a word appears more in a document and it doesnot appear with that much frequency in other document then the 'word' is somewhat important to the document.

Tf-idf is differnt from others is because it assigns weightage to individual word in a dcoument .

Tf - stands for Term frequency

idf - stands for inverse document frequency

so in order to find the weightage of a word we need to find the tf and then idf and then multiply both of them .

## Formula

TF(t,d) = (Number of occurences of a tern t in document d) / (Total number of terms in the documnt d)

IDF(t) = log (Total number of docuements in the corpus) / (Number of documents with term t in them)


```python
from sklearn.feature_extraction.text import TfidfVectorizer
tfidf = TfidfVectorizer()
tfidf.fit_transform(df['text']).toarray()
```




    array([[0.49681612, 0.        , 0.61366674, 0.61366674, 0.        ],
           [0.8508161 , 0.        , 0.        , 0.52546357, 0.        ],
           [0.        , 0.57735027, 0.57735027, 0.        , 0.57735027],
           [0.49681612, 0.61366674, 0.        , 0.        , 0.61366674]])




```python
print(tfidf.idf_)
print(tfidf.get_feature_names_out())
```

    [1.22314355 1.51082562 1.51082562 1.51082562 1.51082562]
    ['anime' 'comment' 'people' 'watch' 'write']
    


```python

```
