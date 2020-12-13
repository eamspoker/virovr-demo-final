'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroAnimations
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {
      run_animation: false
    }; // Set initial state here

    this._onClick = this._onClick.bind(this);
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/guadalupe_360.jpg')} />
        <ViroText
          text="Hello World!"
          width={2} height={2}
          position={[0, 0, -2]}
          style={styles.helloWorldTextStyle}
          animation={{name:'animateText',
            run: this.state.run_animation,
            loop:true}}
          onClick={this._onClick}
          />
      </ViroScene>
    );
  }

  _onClick() {
    console.log(this.state.run_animation);
    this.setState({
      run_animation: !this.state.run_animation
    });
  }


}



var animations = ViroAnimations.registerAnimations({
  animateText: {
    properties:{rotateY:"+=45"},
    duration:1000
  }
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldScene;
