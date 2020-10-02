---
title: Concept Constrained Learning from Demonstration
date: "2018-10-26T00:00:00.000Z"
type: research
authors: ["Carl Mueller"]
draft: false
featuredImage: "./Placement.jpeg"
coverDesc: "Sawyer hoping to avoid spilling coffee..."
tags: ["LfD", "research"]
---

## Why is this important?

My PhD research's seminal work is called **Concept Constrained Learning from Demonstration** \cite{mueller2018robust}. It is this work that motivates my current research into constrained motion planning and human-robot interfaces, specifically augmented reality interfaces. Ultimately, I want to figure out how to make robots easily trainable and usable by non-roboticists. Physical automation is a wide-open frontier in the world of information technology. However, the introduction of collaborative robots into human environments presents a number of challenges often not required of large-scale industrial robots: safety in shared workspaces, rapidly changing task requirements, decision-making, and, perhaps most challenging, adhering to human expectations of behavior. As such, the foundational motivation behind this work is to provide human users the means to easily train collaborative robots to execute dynamic skills while adhering to important behavioral restrictions.


## Background

### Learning from Demonstration

Robot Learning from Demonstration (LfD) consists of methods that attempt to learn successful robot behavior models from human input. A human operator interacts with a robotic system through some mode of demonstration, usually through kinesthetic demonstration (e.g. physical interaction), teleoperation (e.g. remote control), or passive observation (e.g. motion tracking observation). Demonstration ideally communicates information about the nature of the skill that the robotic learning system uses to build a learned model that resembles some latent (i.e. hidden) ground truth model. The methods by which robotic systems learn such models spans across the spectrum of machine learning. However there are three broad cateogrizations for robot LfD systems: 1) plan learning, 2) functional optimization, and 3) policy learning  \cite{ravichandar2020recent}.

![A human user (me) kinestheticaly demonstrating a skill.](ActionShot.jpeg)


The ultimate goal of these learning methods is to facilitate the transfer of information from a non-roboticist, with some expert intuition about the skill, to the robotic learning system. This information is then used by robot skill learning methods to produce successful learned models of the task. Plan learning methods attempt to learn models that operate at high levels of task abstraction, either learning a primitive sequence or hierarchy. Functional optimization methods either directly optimize a candidate trajectory (potentially one derived from demonstration) using a known objective function, or they attempt to learn an objective from demonstration. These approaches often emulate or directly draw from Reinforcement Learning and Inverse Reinforcement Learning techniques. Lastly, policy learning methods produce models that output either trajectories or low-level actions directly.

### Keyframe Learning from Demonstration

CC-LfD is an augnmentation of a learning method called Keyframe LfD (KLfD) \cite{akgun2012keyframe}. In traditional KLfD, human operators teach a skill by providing distinct waypoints of robot state data. This represents a coarse trajectory for the robot to follow. This approach is powerful because it very easily allows users to specify robot motion, but it is somewhat brittle as the learned skill is really a concrete instantiation of one robot trajectory. Any variation to the environment or to changes in user expecations cannot be accomodated.

Keyframe LfD can be make more robust through automating keyframe generation and through statistical learning. To automate this approach, users first provide high-rate-of-sampling demosntration trajectories of the skill, ideally expressing subtle variation. Demonstration trajectories are aligned using a technique called Dynamic Time Warping \cite{}, which is an algorithmic method to align similar-structural regions in sequential data from one sequence to another. The data points of these temporally aligned demonstration trajectories are clustered into sequential groups across demonstrations. These clusters of robot state data are fitted to learned *keyframe distributions*, which are used to generate waypoints that the robot follows sequentially to perform a skill. Forming statistical distributions to represent keyframes, as opposed to single points, enables the LfD algorithm to adapt to behavioral restrictions the human operator migth decide to place on the robot.

## Concept Constrained Learning from Demonstration
Intents are global properties of a text document (or user query) that map the document to an assigned goal or desire of the user. They can map to very broad concepts such as ‘weather’, ‘banking’, ‘location search’ or to specific concepts such as ‘get product info’, ‘schedule meeting, etc,. These intents are sometimes called user actions and it is the goal of Bolt to categorize queries into a set number of intents. The following query would be categorized to the given intent:

> **Query**: What is the shipping information for order #2314?<br>
**Intent**: get-order-shipping-information  

#### Slots
Slots are regions or spans within a text document, sometimes overlapping, that map to a specific type of information. They often constitute a semantically loaded region of the text.  An NLP system must correctly detect the right span/region that contains these semantic slots of information. The following date-time phrase provides an example of a slot:

> **Query**: How many returning customers did I have in [the first quarter of 2015]?<br>
**Slot Type**: Date-time<br>
**Extraction Information**: 1/1/2015 - 4/1/2015

#### Entities
Entities are also regions of text that contain semantic information but often boil down to a single word or compound. They can be thought of as a highly specific slot. Generally, entities encompass names, organizations, locations, and domain specific pieces of information. It is the goal of a named entity recognition system to identify these entities. For example:
  
> **Query**: Get me [Winona Snyder’s] most recent order.<br>
**Entity**: Customer Name = Winona Snyder

## Implementation

#### Model Generality vs Specificity
Often a goal of the design of an NLU system, especially one designed for a targeted domain, is to provide as much generality as possible. This often means that the system’s goal centers around supporting as many users and/or as many use cases as possible with a minimal amount of model generation and methods. The reason being is that the implementation of certain NLP features can be reused and shared. Share models are easier to maintain (no management of devoted models). Additionally, new training data generated by user behavior effectively crowd sourced. For example, in Bolt, the mechanism that determines a user’s intent is shared amongst all users. This way, new data (such as new variations of a similar query) can be incorporated into a newly trained model for which all users share the benefit.

However, there are certain times when specificity takes precedence over generality. In our case, each one of our Shoppy Bot users has a store with a wide range of products, each with unique names. When parsing a query for slots and entities, an NLU system has to return information that is specific to that user. Avoiding returning information from one user to another is also a requirement as our customers expect their data and analytics to be protected. Bolt employs a fast dictionary/gazetteer algorithm that utilizes distinct data structures specific to each of our users.

The following outlines three specific implementation details of the Bolt NLU system developed for Shoppy Bot in terms of the intent-slot NLU paradigm.

#### Intent Classification
Intent categorization is achieved most commonly through state-of-the-art text classifiers. Bolt uses a discriminative classifier known as a support vector machine. Briefly, support vector machines (SVMs) are classifiers that construct non-probabilistic models represented in a geometric manner. Data is mapped into a geometric space. The different categories or classes of data are separated by a hyperplane optimized for achieving the largest distance between the closest data points of two different categories. The technical details of support vector machines are beyond the scope of this post, but they are the soup du jour for text classifiers (especially for smaller datasets) and are fairly robust against outlier data. 
Bolt uses the fantastic library Scikit-learn and its implementation of an SVM. Specifically we use the class [LinearSVC](http://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC). It supports multi-class classification and scales to larger datasets decently by employing [liblinear](https://www.csie.ntu.edu.tw/~cjlin/liblinear/) instead of [libsvm](https://www.csie.ntu.edu.tw/~cjlin/libsvm/). One challenge is that many SVM’s underlying implementations, such as libsvm, are quadratic in their algorithmic complexity which can make datasets >10000 samples highly inefficient. LinearSVC performs well as it does not use any kernel function to turn a dataset that is non-linear into a linearly interpretable dataset, thus dramatically enhancing the algorithmic efficiency.

Any machine learning technique is powerless without data. Data must be curated in a way that best represents pertinent information about your problem. Bolt’s intent classification challenge is first and foremost a text classification problem. We take a user’s text query and classify that text into an intent category. Determining what type of data you give your machine learning algorithm is a process called feature generation. One of the most common ways to generate features (data tailored for use in a machine learning algorithm) from text is to employ a simple technique known as the ‘bag-of-words’ technique. The frequency (number of occurrences) of all the words for each text category are used as specific values for data points in the geometric space we generate. 

Similar words are used repeatedly for similar user intents. It plays to Bolt’s advantage that queries are often specific to the task at hand, which limits the amount of noise (overlap of categories) and number of outliers (single data points invading deep into the region of a different category). This means that the distinction between one category and another in our geometric space is sharp. I won’t go too deep into how SVM’s work, but I suggest Wikipedia as a good starting point.

![Hyperplane separating two categories](hyperplane.png)
*A hyperplane (which is a standard flat plane in three dimensions) separating two categories distinguished by red and blue spheres. [Source](https://i.stack.imgur.com/zeRTm.png)*

#### Slot Detection
Slot detection sometimes blurs the line between entity parsing and recognition. It can help to think of named entity recognition (NER), where one parses a product name, city and state etc., as a subset of slot detection. Slots can be a feature of the entire piece of text being analyzed or a localized span of text. One example of a slot that spans the entirety of a user query would be plurality. For example, if the user asks, “Who is my top customer?”, Bolt is able to recognize that the person is asking for only one customer, without needing any explicit number to exist in the query. These results are passed back to Shoppy Bot where a response is sent to the user with the results for one customer. 

Bolt actually uses a binary classifier to determine the query’s plurality. We use a similar ‘bag of words’ technique as the intent classifier but also employ a technique that emphasizes particular features. The emphasized features are words associated with plurality. For example, verb conjugation plays an obvious role in identifying whether or not the query is asking for plural results. The verbs ‘is/are’, ‘was/were’ greatly increase the accuracy of the classification model without the need for large amounts of data. It is a case where smart feature engineering helped defeat a lack of data on our end. As the slot detection of plurality is independent of any specific user, it is a generalizable model.

#### Named Entity Recognition
Named entity recognition is the probably the most well-known aspect of information retrieval and slot detection in terms of NLP. Shoppy Bot users each have a large set of product names associated with their Shopify store. These "named entities" must be identified and parsed specific to the user. Bolt employs a set of data structures and a specialized string comparison algorithm to successfully parse product names from a user’s query.

The data structure that Bolt’s gazetteer uses is called a trie. In this scenario, a trie is an ordered tree structure that stores strings compactly, where each node of the tree is an object or structure that stores the current letter, potentially a word, and references or pointers to the next node. The idea is that in traversing a branch of the trie, you slowly build up a word letter by letter. Words that share the same prefix will start along the same branch.

![String search trie](search_trie.jpg)
*[Source](http://images.slideplayer.com/32/9814580/slides/slide_5.jpg)*

This data structure allows one to check if a word is in a dictionary extremely quickly but also allows for additional algorithms to function during the search process. Hash lookups for words are generally the fastest mechanism for dictionary lookups. However, if you want to perform string similarity comparisons while searching for a word in a dictionary at the same time, the search trie is your best bet. This allows for robust dictionary lookup of words pulled from the query to see if they match (or are close to matching) the words stored in the trie. Ultimately this is a very robust way to perform fuzzy dictionary lookups. 

The string similarity mechanism Bolt’s gazetteer uses is the [Levenshtein](https://people.cs.pitt.edu/~kirk/cs1501/Pruhs/Spring2006/assignments/editdistance/Levenshtein%20Distance.htm) string similarity algorithm. Briefly, it is an algorithm that outputs an integer value called the string distance representing the number of insertions, switches, and deletions it takes to convert one word into another. After removing common words and certain specialty words from the query, the remaining words are grouped in a number of combinations. These combinations of words are each run through the gazetteer’s search algorithm to find matches within a certain Levenshtein string distance. The algorithm traverses down the trie building test words from the letters along the nodes in the path. The algorithm can dynamically append or remove new letters from the current current trie word so that the Levenshtein algorithm only has to readjust for the new letter in its comparison with the test word from the query. Thus we are not constantly performing and reperforming the entire Levenshtein algorithm for every word in the trie.

One additional step Bolt takes to ensure robustness is to add n-grams and skip-grams of the product names into the trie. For example, ‘sally sells sea shells’ as n-grams of length 3 (tri-grams) would be split into ‘sally sells sea’ and ‘sells sea shells’. Skip-grams of length skip distance 1 would result in ‘sally sea shells’ and ‘sally sells shells’. The purpose of these n-grams and skip grams is to account for the different ways a user might express a product name. Perhaps they don’t type every single word if it is a long product name.

#### The Big Picture
Bolt first classifies the user’s query to an intent. Each intent is associated with a set of possible slots/entities that can be parsed for that intent. Those slots/entities are then parsed. In summary, Bolt generally operates with the following procedure:

1. Classify User Query to Intent:
    > **Query**: What is the shipping information for order #2314?<br>
    **Intent**: get-order-shipping-information<br>
    **Associated Slots/Entities**: Order Number  

2. Perform slot/entity detection
    > **Query**: What is the shipping information for order #2314?<br>
    **Entities**: Order Number = #2314

3. Return information to Shoppy Bot server

## Conclusion

This post provided a fairly indepth overview of some of the theory and implementation details that go into making the Bolt NLU system function. Natural language understanding is exploding and becoming more advanced day by day. The intent-slot paradigm for NLU is a robust and relatively simplistic approach to NLU that can be achieved fairly easily with some simple and clever algorithms and engineering. With this approach, we're able to provide an NLU system that outperforms other cloud-based solutions on the market, and offer a more sophisticated chatbot experience.

<bibliography></bibliography>