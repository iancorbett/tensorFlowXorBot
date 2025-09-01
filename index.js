
import * as tf from "@tensorflow/tfjs";

// XOR truth table
const inputs = tf.tensor2d([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ]);

  const outputs = tf.tensor2d([
    [0],
    [1],
    [1],
    [0],
  ]);

  async function runXOR() {
    const model = tf.sequential();
    //4 neurons in a layer, 2 numbers as input, use sigmoid to create a range from 0-1
    model.add(tf.layers.dense({ units: 4, inputShape: [2], activation: "sigmoid" }));

  }

  runXOR();
  
  