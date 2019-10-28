import * as React from 'react';
import { View, Text, Button, Slider, StyleSheet, Image } from 'react-native';
import Sound from 'react-native-sound';

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    child: {
        padding: 10,
    }
  });


interface Props {
}

class AudioScreen extends React.Component<Props> {
    sound;
    state = {
        speed: 1,
        paused: false,
        progress: 0
    }

    componentDidMount() {
        this.sound = new Sound('http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3', null, (error) => {
            if (error) {
              // do something
            }
            
            // play when loaded
            this.sound.play();
            this.addTimer()
        });
    }

    addTimer = () => {
        setTimeout(() => {
            this.sound.getCurrentTime((sec) => {
                this.setState({
                    progress: sec /this.sound.getDuration()
                }, this.addTimer())
            })
        }, 100)
    }

    componentWillUnmount() {
        this.sound.stop();
    }

    changeSpeed = (plus) => {
        const { speed } = this.state

        this.sound.setSpeed( plus ? speed * 2 : speed /2)
        this.setState({
            speed: plus ? speed * 2 : speed /2
        })
    }

    playOrPause = () => {
        const { paused } = this.state
        
        paused ? this.sound.play() : this.sound.pause()

        this.setState({
            paused: !paused
        })
    }

    changeProgress = (value) => {
        this.sound.setCurrentTime(value * this.sound.getDuration());
    }

    changeVolume = (value) => {
        this.sound.setVolume(value);
    }

    changePan = (val) => {
        console.log(val)
        this.sound.setPan(val)
    }

    render() {
        const { speed, paused, progress } = this.state
        return (
            <View >
                <View  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image 
                        source={require('../../assets/images/note.png')}
                    />
                </View>
                
                <Slider 
                    value={progress}
                    onValueChange={this.changeProgress}
                />

                <View style={styles.child}>
                    <Button style={styles.child}
                        onPress={ this.playOrPause }
                        title={ paused ? 'Play' : 'Pause'}
                    />
                </View>
                
                <Text>
                    Volume
                </Text>
                <Slider 
                    value={1}
                    onValueChange={this.changeVolume}
                />
                {/* <Text>
                    Pan
                </Text>
                <Slider 
                    value={0.5}
                    onValueChange={this.changePan}
                /> */}
                <View style={{flexDirection:'row', flexWrap:'wrap', padding: 10}}>
                    <Button
                        onPress={ () => this.changeSpeed(false) }
                        title="-"
                    />
                    <Text> Speed: x{speed}</Text>
                    <Button
                        onPress={ () => this.changeSpeed(true) }
                        title="+"
                    />
                </View>
            </View>
        );
    }
}

export default AudioScreen