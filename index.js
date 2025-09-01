
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
  }

  runXOR();
  
  