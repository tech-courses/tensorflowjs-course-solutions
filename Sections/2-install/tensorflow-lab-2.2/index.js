const tf = require('@tensorflow/tfjs-node');

console.log("TensorFlow.js version information: ");
console.log(tf.version);

console.log(`TensorFlow.js backend: ${tf.getBackend()}`);

console.log(`Next we will run the sample code from the website`);

/* The sample code below is from https://www.tensorflow.org/js/tutorials/setup#see-sample-code-for-node.js-usage
 * and licensed under the Apache 2.0 license.
 */

// Train a simple model:
const model = tf.sequential();
model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
model.add(tf.layers.dense({units: 1, activation: 'linear'}));
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

const xs = tf.randomNormal([100, 10]);
const ys = tf.randomNormal([100, 1]);

model.fit(xs, ys, {
	epochs: 100,
	callbacks: {
		onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log.loss}`)
	}
});
