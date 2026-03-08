```python
import pandas as pd
```


```python
df = pd.read_csv("IMDB Dataset.csv")
```


```python
df.head()
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
      <th>review</th>
      <th>sentiment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>One of the other reviewers has mentioned that ...</td>
      <td>positive</td>
    </tr>
    <tr>
      <th>1</th>
      <td>A wonderful little production. &lt;br /&gt;&lt;br /&gt;The...</td>
      <td>positive</td>
    </tr>
    <tr>
      <th>2</th>
      <td>I thought this was a wonderful way to spend ti...</td>
      <td>positive</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Basically there's a family where a little boy ...</td>
      <td>negative</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Petter Mattei's "Love in the Time of Money" is...</td>
      <td>positive</td>
    </tr>
  </tbody>
</table>
</div>



## Lower casing


```python
df['review'][3].lower()
```




    "basically there's a family where a little boy (jake) thinks there's a zombie in his closet & his parents are fighting all the time.<br /><br />this movie is slower than a soap opera... and suddenly, jake decides to become rambo and kill the zombie.<br /><br />ok, first of all when you're going to make a film you must decide if its a thriller or a drama! as a drama the movie is watchable. parents are divorcing & arguing like in real life. and then we have jake with his closet which totally ruins all the film! i expected to see a boogeyman similar movie, and instead i watched a drama with some meaningless thriller spots.<br /><br />3 out of 10 just for the well playing parents & descent dialogs. as for the shots with jake: just ignore them."




```python
df['review'] = df['review'].str.lower()
```


```python
df['review'][3]
```




    "basically there's a family where a little boy (jake) thinks there's a zombie in his closet & his parents are fighting all the time.<br /><br />this movie is slower than a soap opera... and suddenly, jake decides to become rambo and kill the zombie.<br /><br />ok, first of all when you're going to make a film you must decide if its a thriller or a drama! as a drama the movie is watchable. parents are divorcing & arguing like in real life. and then we have jake with his closet which totally ruins all the film! i expected to see a boogeyman similar movie, and instead i watched a drama with some meaningless thriller spots.<br /><br />3 out of 10 just for the well playing parents & descent dialogs. as for the shots with jake: just ignore them."



## Removing HTML tags


```python
text = "Please click <a href=https://example.com>this link</a> to visit the website."

```


```python
import re
def remove_html_tags(text):
    pattern = re.compile('<.*?>')
    return pattern.sub(r'', text)
```


```python
remove_html_tags(text)
```




    'Please click this link to visit the website.'




```python
df['review'] = df['review'].apply(remove_html_tags)
```


```python
df['review']
```




    0        one of the other reviewers has mentioned that ...
    1        a wonderful little production. the filming tec...
    2        i thought this was a wonderful way to spend ti...
    3        basically there's a family where a little boy ...
    4        petter mattei's "love in the time of money" is...
                                   ...                        
    49995    i thought this movie did a down right good job...
    49996    bad plot, bad dialogue, bad acting, idiotic di...
    49997    i am a catholic taught in parochial elementary...
    49998    i'm going to have to disagree with the previou...
    49999    no one expects the star trek movies to be high...
    Name: review, Length: 50000, dtype: object



## Remove URL's


```python
text_1 = "Check the documentation at https://developer.mozilla.org/ to learn modern web APIs and HTML basics."
text_2 = "Practice HTML links by visiting https://www.w3schools.com/ and trying out their interactive examples."
text_3 = "Explore programming tutorials and articles at www.geeksforgeeks.org for HTML and web-development topics."
text_4 = "Follow step-by-step coding lessons at https://www.codecademy.com/learn to build hands-on HTML skills."



```


```python
def remove_url(text):
    pattern = re.compile(r'https?://\S+|www\.\S+')
    return pattern.sub(r'', text)
```


```python
remove_url(text_1)
```




    'Check the documentation at  to learn modern web APIs and HTML basics.'



## Remove punctuation


```python
import string,time
string.punctuation
```




    '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'




```python
exclude = string.punctuation
```


```python
def remove_punc(text):
    for char in exclude:
        text = text.replace(char,'')
    return text    
```


```python
Texxt = "string.with? punctuation!!"

```


```python
start = time.time()
print(remove_punc(Texxt))
time1 = time.time() - start   ## This is very slow ....imagine if we have huge datasets ....for this simple task we have to wait for minutes which is not efficient 
print(time1)
```

    stringwith punctuation
    0.00017714500427246094
    


```python
## alternate fast technique
def remove_punc1(text):
    return text.translate(str.maketrans('','',exclude))
```


```python
start = time.time()
print(remove_punc1(Texxt))
time2 = time.time() - start   
print(time2)
```

    stringwith punctuation
    0.00019812583923339844
    


```python
time1/time2  ## 3 times faster
```




    0.8941034897713598



## Chatwords Treatment


```python

from pathlib import Path

# Read and parse the slang file
chat_words_text = Path("slang.txt").read_text(encoding="utf-8")
chat_words = {}

for line in chat_words_text.strip().split("\n"):
    if "=" in line:
        abbreviation, meaning = line.split("=", 1)
        chat_words[abbreviation.strip()] = meaning.strip()

print(chat_words)

```

    {'A3': 'Anytime, Anywhere, Anyplace', 'ADIH': 'Another Day In Hell', 'AFK': 'Away From Keyboard', 'AFAIK': 'As Far As I Know', 'ASAP': 'As Soon As Possible', 'ASL': 'Age, Sex, Location', 'ATK': 'At The Keyboard', 'ATM': 'At The Moment', 'BAE': 'Before Anyone Else', 'BAK': 'Back At Keyboard', 'BBL': 'Be Back Later', 'BBS': 'Be Back Soon', 'BFN': 'Bye For Now', 'B4N': 'Bye For Now', 'BRB': 'Be Right Back', 'BRUH': 'Bro', 'BRT': 'Be Right There', 'BSAAW': 'Big Smile And A Wink', 'BTW': 'By The Way', 'BWL': 'Bursting With Laughter', 'CSL': 'Can’t Stop Laughing', 'CU': 'See You', 'CUL8R': 'See You Later', 'CYA': 'See You', 'DM': 'Direct Message', 'FAQ': 'Frequently Asked Questions', 'FC': 'Fingers Crossed', 'FIMH': 'Forever In My Heart', 'FOMO': 'Fear Of Missing Out', 'FR': 'For Real', 'FWIW': "For What It's Worth", 'FYP': 'For You Page', 'FYI': 'For Your Information', 'G9': 'Genius', 'GAL': 'Get A Life', 'GG': 'Good Game', 'GMTA': 'Great Minds Think Alike', 'GN': 'Good Night', 'GOAT': 'Greatest Of All Time', 'GR8': 'Great!', 'HBD': 'Happy Birthday', 'IC': 'I See', 'ICQ': 'I Seek You', 'IDC': 'I Don’t Care', 'IDK': "I Don't Know", 'IFYP': 'I Feel Your Pain', 'ILU': 'I Love You', 'ILY': 'I Love You', 'IMHO': 'In My Honest/Humble Opinion', 'IMU': 'I Miss You', 'IMO': 'In My Opinion', 'IOW': 'In Other Words', 'IRL': 'In Real Life', 'IYKYK': 'If You Know, You Know', 'JK': 'Just Kidding', 'KISS': 'Keep It Simple, Stupid', 'L': 'Loss', 'L8R': 'Later', 'LDR': 'Long Distance Relationship', 'LMK': 'Let Me Know', 'LMAO': 'Laughing My A** Off', 'LOL': 'Laughing Out Loud', 'LTNS': 'Long Time No See', 'M8': 'Mate', 'MFW': 'My Face When', 'MID': 'Mediocre', 'MRW': 'My Reaction When', 'MTE': 'My Thoughts Exactly', 'NVM': 'Never Mind', 'NRN': 'No Reply Necessary', 'NPC': 'Non-Player Character', 'OIC': 'Oh I See', 'OP': 'Overpowered', 'PITA': 'Pain In The A**', 'POV': 'Point Of View', 'PRT': 'Party', 'PRW': 'Parents Are Watching', 'ROFL': 'Rolling On The Floor Laughing', 'ROFLOL': 'Rolling On The Floor Laughing Out Loud', 'ROTFLMAO': 'Rolling On The Floor Laughing My A** Off', 'RN': 'Right Now', 'SK8': 'Skate', 'STATS': 'Your Sex And Age', 'SUS': 'Suspicious', 'TBH': 'To Be Honest', 'TFW': 'That Feeling When', 'THX': 'Thank You', 'TIME': 'Tears In My Eyes', 'TLDR': 'Too Long, Didn’t Read', 'TNTL': 'Trying Not To Laugh', 'TTFN': 'Ta-Ta For Now!', 'TTYL': 'Talk To You Later', 'U': 'You', 'U2': 'You Too', 'U4E': 'Yours For Ever', 'W': 'Win', 'W8': 'Wait...', 'WB': 'Welcome Back', 'WTF': 'What The F**k', 'WTG': 'Way To Go!', 'WUF': 'Where Are You From?', 'WYD': 'What You Doing?', 'WYWH': 'Wish You Were Here', 'ZZZ': 'Sleeping, Bored, Tired'}
    


```python
def chat_conversion(text):
    new_text = []
    for w in text.split():
        word_clean = w.upper().strip(".,!?;:")
        if word_clean in chat_words:
            new_text.append(chat_words[word_clean])
        else:
            new_text.append(w)
    return " ".join(new_text)
```


```python
chat_conversion("IMHO he is the best")
```




    'In My Honest/Humble Opinion he is the best'



## Removing stopwords


```python
from nltk.corpus import stopwords
```


```python
stopwords.words('english')
```




    ['a',
     'about',
     'above',
     'after',
     'again',
     'against',
     'ain',
     'all',
     'am',
     'an',
     'and',
     'any',
     'are',
     'aren',
     "aren't",
     'as',
     'at',
     'be',
     'because',
     'been',
     'before',
     'being',
     'below',
     'between',
     'both',
     'but',
     'by',
     'can',
     'couldn',
     "couldn't",
     'd',
     'did',
     'didn',
     "didn't",
     'do',
     'does',
     'doesn',
     "doesn't",
     'doing',
     'don',
     "don't",
     'down',
     'during',
     'each',
     'few',
     'for',
     'from',
     'further',
     'had',
     'hadn',
     "hadn't",
     'has',
     'hasn',
     "hasn't",
     'have',
     'haven',
     "haven't",
     'having',
     'he',
     "he'd",
     "he'll",
     'her',
     'here',
     'hers',
     'herself',
     "he's",
     'him',
     'himself',
     'his',
     'how',
     'i',
     "i'd",
     'if',
     "i'll",
     "i'm",
     'in',
     'into',
     'is',
     'isn',
     "isn't",
     'it',
     "it'd",
     "it'll",
     "it's",
     'its',
     'itself',
     "i've",
     'just',
     'll',
     'm',
     'ma',
     'me',
     'mightn',
     "mightn't",
     'more',
     'most',
     'mustn',
     "mustn't",
     'my',
     'myself',
     'needn',
     "needn't",
     'no',
     'nor',
     'not',
     'now',
     'o',
     'of',
     'off',
     'on',
     'once',
     'only',
     'or',
     'other',
     'our',
     'ours',
     'ourselves',
     'out',
     'over',
     'own',
     're',
     's',
     'same',
     'shan',
     "shan't",
     'she',
     "she'd",
     "she'll",
     "she's",
     'should',
     'shouldn',
     "shouldn't",
     "should've",
     'so',
     'some',
     'such',
     't',
     'than',
     'that',
     "that'll",
     'the',
     'their',
     'theirs',
     'them',
     'themselves',
     'then',
     'there',
     'these',
     'they',
     "they'd",
     "they'll",
     "they're",
     "they've",
     'this',
     'those',
     'through',
     'to',
     'too',
     'under',
     'until',
     'up',
     've',
     'very',
     'was',
     'wasn',
     "wasn't",
     'we',
     "we'd",
     "we'll",
     "we're",
     'were',
     'weren',
     "weren't",
     "we've",
     'what',
     'when',
     'where',
     'which',
     'while',
     'who',
     'whom',
     'why',
     'will',
     'with',
     'won',
     "won't",
     'wouldn',
     "wouldn't",
     'y',
     'you',
     "you'd",
     "you'll",
     'your',
     "you're",
     'yours',
     'yourself',
     'yourselves',
     "you've"]




```python
def remove_stopwords(text):
    new_text = []

    for word in text.split():
        if word in stopwords.words('english'):
            new_text.append('')
        else:
            new_text.append(word)
    x = new_text[:]
    new_text.clear()
    return " ".join(x)            
```


```python
remove_stopwords("I was late because it was raining outside.")
```




    'I  late    raining outside.'




```python
df.head()
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
      <th>review</th>
      <th>sentiment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>one of the other reviewers has mentioned that ...</td>
      <td>positive</td>
    </tr>
    <tr>
      <th>1</th>
      <td>a wonderful little production. the filming tec...</td>
      <td>positive</td>
    </tr>
    <tr>
      <th>2</th>
      <td>i thought this was a wonderful way to spend ti...</td>
      <td>positive</td>
    </tr>
    <tr>
      <th>3</th>
      <td>basically there's a family where a little boy ...</td>
      <td>negative</td>
    </tr>
    <tr>
      <th>4</th>
      <td>petter mattei's "love in the time of money" is...</td>
      <td>positive</td>
    </tr>
  </tbody>
</table>
</div>




```python
# df['review'].apply(remove_stopwords)   ## we can do this but it takes some time

```


```python

```
