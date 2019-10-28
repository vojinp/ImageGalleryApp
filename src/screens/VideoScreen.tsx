import * as React from 'react';
import { View, StyleSheet, Button, Slider, Text } from 'react-native';
import Video from 'react-native-video';

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

class VideoScreen extends React.Component<Props> {
    state = {
        paused: false,
        volume: 1,
        fullscreen: false,
        progress: 0,
        duration: 0,
        speed: 1
    }

    player;

    playOrPause = () => {
        const { paused } = this.state

        this.setState({
            paused: !paused
        })
    }

    changeVolume = (volume) => {
        this.setState({
            volume
        })
    }

    changeProgress = (time) => {
        const { duration } = this.state
        this.player.seek(time * duration)
    }

    updateProgressBar = (progress) => {
        this.setState({
            progress: progress.currentTime / progress.playableDuration
        })
    }

    onFullScreen = () => {
        const { fullscreen } = this.state

        this.setState({
            fullscreen: !fullscreen
        })
    }

    onLoad = (data) => {
        this.setState({ duration: data.duration });
    };

    changeSpeed = (plus) => {
        let { speed } = this.state
        this.setState({
            speed: plus ? speed * 2 : speed / 2
        })
    }

    render() {
        const { paused, volume, fullscreen, progress, speed } = this.state

        return (
            <View>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    ref={(ref) => {
                        this.player = ref
                      }}  
                    onLoad={this.onLoad}
                    rate={speed}
                    volume={volume}
                    muted={false}
                    fullscreen={fullscreen}
                    resizeMode="cover"
                    repeat
                    paused={paused}
                    onProgress={this.updateProgressBar}
                    style={{ width: 300, height: 300 }}
                />
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
                <View style={styles.child}>
                    <Button 
                        onPress={ this.onFullScreen }
                        title="Fullscreen"
                    />
                </View>
                
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

export default VideoScreen