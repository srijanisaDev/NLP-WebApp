## What is parts of speech tagging?

In simple words , we can say that POS tagging is a task of labelling each word in a sentence with its appropriate part of speech

In traditional grammar , a part of speech is a category of words that have similar grammatical properties.

## Applications of POS tagging

1. Named entitiy Recognition
2. Question Answering System
3 . Word Sense Disambiguation
4 . chatbots


```python
import spacy
```


```python
nlp = spacy.load('en_core_web_sm')
```


```python
doc = nlp(u"i will google about facebook")
```


```python
doc.text
```




    'i will google about facebook'




```python
doc[2]
```




    google




```python
doc[2].pos_  ## It is assigned as a verb because google here according to this context is 'searching'.
```




    'VERB'




```python
doc[0].tag_
```




    'PRP'




```python
spacy.explain('PRP')
```




    'pronoun, personal'




```python
for word in doc:
    print(word.text,"------->",word.pos_ ,word.tag_,spacy.explain(word.tag_))
```

    i -------> PRON PRP pronoun, personal
    will -------> AUX MD verb, modal auxiliary
    google -------> VERB VB verb, base form
    about -------> ADP IN conjunction, subordinating or preposition
    facebook -------> PROPN NNP noun, proper singular
    


```python
doc1 = nlp(u"The quick brown fox jumped over the lazy dog")
```


```python
from spacy import displacy
```


```python
displacy.render(doc1,style='dep',jupyter=True)
```


<span class="tex2jax_ignore"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:lang="en" id="ebcd7728aaad4175b7b4c951d19a71c7-0" class="displacy" width="1625" height="399.5" direction="ltr" style="max-width: none; height: 399.5px; color: #000000; background: #ffffff; font-family: Arial; direction: ltr">
<text class="displacy-token" fill="currentColor" text-anchor="middle" y="309.5">
    <tspan class="displacy-word" fill="currentColor" x="50">The</tspan>
    <tspan class="displacy-tag" dy="2em" fill="currentColor" x="50">DET</tspan>
</text>

<text class="displacy-token" fill="currentColor" text-anchor="middle" y="309.5">
    <tspan class="displacy-word" fill="currentColor" x="225">quick</tspan>
    <tspan class="displacy-tag" dy="2em" fill="currentColor" x="225">ADJ</tspan>
</text>

<text class="displacy-token" fill="currentColor" text-anchor="middle" y="309.5">
    <tspan class="displacy-word" fill="currentColor" x="400">brown</tspan>
    <tspan class="displacy-tag" dy="2em" fill="currentColor" x="400">ADJ</tspan>
</text>

<text class="displacy-token" fill="currentColor" text-anchor="middle" y="309.5">
    <tspan class="displacy-word" fill="currentColor" x="575">fox</tspan>
    <tspan class="displacy-tag" dy="2em" fill="currentColor" x="575">NOUN</tspan>
</text>

<text class="displacy-token" fill="currentColor" text-anchor="middle" y="309.5">
    <tspan class="displacy-word" fill="currentColor" x="750">jumped</tspan>
    <tspan class="displacy-tag" dy="2em" fill="currentColor" x="750">VERB</tspan>
</text>

<text class="displacy-token" fill="currentColor" text-anchor="middle" y="309.5">
    <tspan class="displacy-word" fill="currentColor" x="925">over</tspan>
    <tspan class="displacy-tag" dy="2em" fill="currentColor" x="925">ADP</tspan>
</text>

<text class="displacy-token" fill="currentColor" text-anchor="middle" y="309.5">
    <tspan class="displacy-word" fill="currentColor" x="1100">the</tspan>
    <tspan class="displacy-tag" dy="2em" fill="currentColor" x="1100">DET</tspan>
</text>

<text class="displacy-token" fill="currentColor" text-anchor="middle" y="309.5">
    <tspan class="displacy-word" fill="currentColor" x="1275">lazy</tspan>
    <tspan class="displacy-tag" dy="2em" fill="currentColor" x="1275">ADJ</tspan>
</text>

<text class="displacy-token" fill="currentColor" text-anchor="middle" y="309.5">
    <tspan class="displacy-word" fill="currentColor" x="1450">dog</tspan>
    <tspan class="displacy-tag" dy="2em" fill="currentColor" x="1450">NOUN</tspan>
</text>

<g class="displacy-arrow">
    <path class="displacy-arc" id="arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-0" stroke-width="2px" d="M70,264.5 C70,2.0 575.0,2.0 575.0,264.5" fill="none" stroke="currentColor"/>
    <text dy="1.25em" style="font-size: 0.8em; letter-spacing: 1px">
        <textPath xlink:href="#arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-0" class="displacy-label" startOffset="50%" side="left" fill="currentColor" text-anchor="middle">det</textPath>
    </text>
    <path class="displacy-arrowhead" d="M70,266.5 L62,254.5 78,254.5" fill="currentColor"/>
</g>

<g class="displacy-arrow">
    <path class="displacy-arc" id="arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-1" stroke-width="2px" d="M245,264.5 C245,89.5 570.0,89.5 570.0,264.5" fill="none" stroke="currentColor"/>
    <text dy="1.25em" style="font-size: 0.8em; letter-spacing: 1px">
        <textPath xlink:href="#arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-1" class="displacy-label" startOffset="50%" side="left" fill="currentColor" text-anchor="middle">amod</textPath>
    </text>
    <path class="displacy-arrowhead" d="M245,266.5 L237,254.5 253,254.5" fill="currentColor"/>
</g>

<g class="displacy-arrow">
    <path class="displacy-arc" id="arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-2" stroke-width="2px" d="M420,264.5 C420,177.0 565.0,177.0 565.0,264.5" fill="none" stroke="currentColor"/>
    <text dy="1.25em" style="font-size: 0.8em; letter-spacing: 1px">
        <textPath xlink:href="#arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-2" class="displacy-label" startOffset="50%" side="left" fill="currentColor" text-anchor="middle">amod</textPath>
    </text>
    <path class="displacy-arrowhead" d="M420,266.5 L412,254.5 428,254.5" fill="currentColor"/>
</g>

<g class="displacy-arrow">
    <path class="displacy-arc" id="arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-3" stroke-width="2px" d="M595,264.5 C595,177.0 740.0,177.0 740.0,264.5" fill="none" stroke="currentColor"/>
    <text dy="1.25em" style="font-size: 0.8em; letter-spacing: 1px">
        <textPath xlink:href="#arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-3" class="displacy-label" startOffset="50%" side="left" fill="currentColor" text-anchor="middle">nsubj</textPath>
    </text>
    <path class="displacy-arrowhead" d="M595,266.5 L587,254.5 603,254.5" fill="currentColor"/>
</g>

<g class="displacy-arrow">
    <path class="displacy-arc" id="arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-4" stroke-width="2px" d="M770,264.5 C770,177.0 915.0,177.0 915.0,264.5" fill="none" stroke="currentColor"/>
    <text dy="1.25em" style="font-size: 0.8em; letter-spacing: 1px">
        <textPath xlink:href="#arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-4" class="displacy-label" startOffset="50%" side="left" fill="currentColor" text-anchor="middle">prep</textPath>
    </text>
    <path class="displacy-arrowhead" d="M915.0,266.5 L923.0,254.5 907.0,254.5" fill="currentColor"/>
</g>

<g class="displacy-arrow">
    <path class="displacy-arc" id="arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-5" stroke-width="2px" d="M1120,264.5 C1120,89.5 1445.0,89.5 1445.0,264.5" fill="none" stroke="currentColor"/>
    <text dy="1.25em" style="font-size: 0.8em; letter-spacing: 1px">
        <textPath xlink:href="#arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-5" class="displacy-label" startOffset="50%" side="left" fill="currentColor" text-anchor="middle">det</textPath>
    </text>
    <path class="displacy-arrowhead" d="M1120,266.5 L1112,254.5 1128,254.5" fill="currentColor"/>
</g>

<g class="displacy-arrow">
    <path class="displacy-arc" id="arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-6" stroke-width="2px" d="M1295,264.5 C1295,177.0 1440.0,177.0 1440.0,264.5" fill="none" stroke="currentColor"/>
    <text dy="1.25em" style="font-size: 0.8em; letter-spacing: 1px">
        <textPath xlink:href="#arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-6" class="displacy-label" startOffset="50%" side="left" fill="currentColor" text-anchor="middle">amod</textPath>
    </text>
    <path class="displacy-arrowhead" d="M1295,266.5 L1287,254.5 1303,254.5" fill="currentColor"/>
</g>

<g class="displacy-arrow">
    <path class="displacy-arc" id="arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-7" stroke-width="2px" d="M945,264.5 C945,2.0 1450.0,2.0 1450.0,264.5" fill="none" stroke="currentColor"/>
    <text dy="1.25em" style="font-size: 0.8em; letter-spacing: 1px">
        <textPath xlink:href="#arrow-ebcd7728aaad4175b7b4c951d19a71c7-0-7" class="displacy-label" startOffset="50%" side="left" fill="currentColor" text-anchor="middle">pobj</textPath>
    </text>
    <path class="displacy-arrowhead" d="M1450.0,266.5 L1458.0,254.5 1442.0,254.5" fill="currentColor"/>
</g>
</svg></span>


## Hidden Markov models and viterbi algorithm (optimality)

-> To be studied in depth .. youtube link -> https://www.youtube.com/watch?v=269IGagoJfs&t=1205s .... watch the full video .


```python

```
