# Solutions for Section 1
## Introducing TensorFlow.js and Machine Learning

These are the solutions for Section 1 of the **Machine Learning in JavaScript with TensorFlow.js** course. See [solutions index](../README.md) for solutions to other sections.


### Lab: TensorFlow Playground

This is an open lab - an opportunity for you to experiment. As such, there are no strict right and wrong answers.

However, the following links show possible solutions to the suggestions in the lab:

1. [Regression model requiring minimal epochs to train](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.1&regularizationRate=0&noise=0&networkShape=1&seed=0.82910&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=regression&initZero=false&hideText=false) - by reducing the complexity of the model (fewer layers and nodes), and increasing the learning rate, it typically takes around 12 epochs to reach loss of 0.001. Be careful, this solution won't work for any data, but does for this simple linear regression model.
2. [XOR (Exclusive Or) model](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=xor&regDataset=reg-plane&learningRate=0.1&regularizationRate=0&noise=0&networkShape=4&seed=0.26916&showTestData=false&discretize=false&percTrainData=80&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false) - one of many possible solutions.
3. [Spiral model](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=spiral&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=8,4&seed=0.13351&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=true&cosY=false&sinY=true&collectStats=false&problem=classification&initZero=false&hideText=false) - one of many possible solutions.

Each link will open a model configuration in the TensorFlow Playground. You can push the play button to watch the training process for the model.

---

See [solutions index](../README.md) for solutions to other sections.
