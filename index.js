
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
    model.add(tf.layers.dense({ units: 1, activation: "sigmoid" })); //output a single number

    model.compile({
        optimizer: "adam", //algorithm that adjusts weights intelligently
        loss: "binaryCrossentropy", //formula used for yes/no tasks
        metrics: ["accuracy"], //keeps track of % correct during training
      });

        
    console.log("Training...");
    await model.fit(inputs, outputs, { //trains neural net
        epochs: 200,//goes throug data set 200 times
        shuffle: true, //mixes rows each epoch
        verbose: 0, //no logs each epoch
    });

    
  }

  runXOR();
  
  